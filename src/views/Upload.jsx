import {useState} from 'react';
import useForm from '../hooks/formHooks';
import {useFile} from '../hooks/apiHooks';
import {useMedia} from '../hooks/apiHooks';
import {useNavigate} from 'react-router';

const Upload = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const {postFile} = useFile();
  const {postMedia} = useMedia();
  const doUpload = async () => {
    try {
      const token = localStorage.getItem('token');
      const fileResult = await postFile(file, token);
      console.log('File upload result:', fileResult);
      const mediaResult = await postMedia(fileResult.data, inputs, token);
      console.log('Media result: ' + mediaResult);
      navigate('/');
    } catch (e) {
      console.log(e.message);
    }
  };
  const {inputs, handleInputChange, handleSubmit} = useForm(doUpload);
  const handleFileChange = (evt) => {
    if (evt.target.files) {
      console.log(evt.target.files[0]);
      setFile(evt.target.files[0]);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-sky-900">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-lg bg-sky-500 p-6 shadow-md"
      >
        <h1 className="mb-4 text-center text-2xl font-bold text-white">
          Upload Media
        </h1>

        <div className="mb-4">
          <label htmlFor="title" className="block text-white">
            Title
          </label>
          <input
            name="title"
            type="text"
            id="title"
            onChange={handleInputChange}
            className="mt-2 w-full rounded border border-gray-300 p-2"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-white">
            Description
          </label>
          <textarea
            name="description"
            rows={4}
            id="description"
            onChange={handleInputChange}
            className="mt-2 w-full rounded border border-gray-300 p-2"
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="file" className="block text-white">
            File
          </label>
          <input
            name="file"
            type="file"
            id="file"
            accept="image/*,video/*"
            onChange={handleFileChange}
            className="mt-2 w-full rounded border border-gray-300 bg-white p-2"
          />
        </div>

        <div className="mb-4 text-center">
          <img
            src={
              file
                ? URL.createObjectURL(file)
                : 'https://placehold.co/200x150?text=Choose+File'
            }
            alt="preview"
            className="mx-auto rounded shadow"
            width="200"
          />
        </div>

        <button
          type="submit"
          disabled={!(file && inputs.title?.length > 3)}
          className={`w-full rounded py-2 text-white ${
            file && inputs.title?.length > 3
              ? 'bg-blue-500 hover:bg-blue-600'
              : 'cursor-not-allowed bg-gray-400'
          }`}
        >
          Upload
        </button>
      </form>
    </div>
  );
};
export default Upload;
