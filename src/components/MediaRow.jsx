import PropTypes from 'prop-types';
import {Link} from 'react-router';
import {useUserContext} from '../hooks/contextHooks';
import {useMedia} from '../hooks/apiHooks';
import EditMediaModal from './EditMediaModal';
import {useState} from 'react';

const MediaRow = (props) => {
  const {item} = props;
  // const {item, setSelectedItem} = props;
  // function handleClick() {
  //   setSelectedItem(item);
  // }
  // const {deleteMedia, modifyMedia} = useMedia;
  const {user} = useUserContext();
  const {deleteMedia, modifyMedia} = useMedia();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(item);
  const handleDelete = async () => {
    try {
      const token = localStorage.getItem('token');
      await deleteMedia(item.media_id, token);
      alert('Media deleted');
    } catch (error) {
      console.error('Failed to delete media:', error);
      alert('Failed to delete media');
    }
  };

  return (
    <tr className="*:border-2 *:border-sky-700 *:p-4" key={item.media_id}>
      <td>
        <img
          src={item.thumbnail}
          alt={item.title}
          className="h-52 object-cover"
        />
      </td>
      <td>{item.title}</td>
      <td>{item.description}</td>
      <td>{item.username}</td>
      <td>{new Date(item.created_at).toLocaleString('fi-FI')}</td>
      <td>{item.filesize}</td>
      <td>{item.media_type}</td>
      <td>
        <div className="flex gap-2">
          <Link className="p-4 hover:bg-sky-700" to="/single" state={{item}}>
            View
          </Link>
          {user && (user.user_id === item.user_id || user.role === 'admin') && (
            <>
              <button
                className="p-4 hover:bg-cyan-400 hover:text-sky-950"
                type="button"
                onClick={() => console.log('Edit button clicked')}
              >
                Edit
              </button>
              <button
                className="p-4 hover:bg-red-300 hover:text-sky-950"
                type="button"
                onClick={handleDelete}
              >
                Delete
              </button>
            </>
          )}
        </div>
      </td>
    </tr>
  );
};

MediaRow.propTypes = {
  item: PropTypes.object.isRequired,
  setMediaItem: PropTypes.func.isRequired,
};

export default MediaRow;
