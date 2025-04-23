import PropTypes from 'prop-types';
import {Link} from 'react-router';

const MediaRow = (props) => {
  const {item} = props;
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
        <Link className="p-4 hover:bg-sky-700" to="/single" state={{item}}>
          View
        </Link>
      </td>
    </tr>
  );
};

MediaRow.propTypes = {
  item: PropTypes.object.isRequired,
  setMediaItem: PropTypes.func.isRequired,
};

export default MediaRow;
