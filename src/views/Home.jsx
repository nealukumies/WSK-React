import {useEffect, useState} from 'react';
import MediaRow from '../components/MediaRow';
import SingleView from '../components/SingleView';
import {fetchData} from '../utils/fetchData';

const Home = () => {
  const [mediaArray, setMediaArray] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  console.log('selected item ', selectedItem);

  useEffect(() => {
    const getMedia = async () => {
      try {
        const data = await fetchData('test.json');
        setMediaArray(data);
        console.log('Media array: ', mediaArray);
      } catch (error) {
        console.log('Error: ', error);
      }
    };
    getMedia();
  }, []);
  //Reactin toimintojen takia päivitetty media array vasta tässä:
  console.log('Media array pääohjelmassa', mediaArray);
  return (
    <>
      <h2>My Media</h2>
      <table>
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Title</th>
            <th>Description</th>
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
