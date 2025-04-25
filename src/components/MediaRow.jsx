import PropTypes from 'prop-types';
import {Link} from 'react-router';
// import {useAuthentication} from '../hooks/apiHooks';

const MediaRow = (props) => {
  const {item} = props;
  // const {isLoggedIn} = useAuthentication();
  // const {item, setSelectedItem} = props;
  // function handleClick() {
  //   setSelectedItem(item);
  // }
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
      {/*<td><button onClick={handleClick}>View</button></td>*/}
      <td>
        <div className="flex gap-2">
          <Link className="p-4 hover:bg-sky-700" to="/single" state={{item}}>
            View
          </Link>
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
            onClick={() => console.log('Delete button clicked')}
          >
            Delete
          </button>
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
