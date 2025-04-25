import MediaRow from '../components/MediaRow';
import SingleView from '../components/SingleView';
import {useMedia} from '../hooks/apiHooks';
import {useEffect, useState} from 'react';
import {useUserContext} from '../hooks/contextHooks';

const Home = () => {
  const {getMedia, mediaArray} = useMedia();
  const [selectedItem, setSelectedItem] = useState(null);
  console.log('selected item ', selectedItem);
  const {handleAutoLogin} = useUserContext();
  useEffect(() => {
    handleAutoLogin();
  }, []);
  useEffect(() => {
    getMedia();
  }, []);

  return (
    <>
      <h2 className="my-4 text-2xl font-bold">My Media</h2>
      <table>
        <thead>
          <tr className="*:border-2 *:border-sky-700 *:p-4">
            <th>Thumbnail</th>
            <th>Title</th>
            <th>Description</th>
            <th>Owner</th>
            <th>Created</th>
            <th>Size</th>
            <th>Type</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {mediaArray.map((item) => (
            <MediaRow
              key={item.media_id}
              item={item}
              setSelectedItem={setSelectedItem}
            />
          ))}
        </tbody>
      </table>
      <SingleView item={selectedItem} setSelectedItem={setSelectedItem} />
    </>
  );
};

export default Home;
