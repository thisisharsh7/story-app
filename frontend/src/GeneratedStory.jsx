

const GeneratedStory = ({ story }) => {
  return (
    <div className="mb-4">
      <h2 className="text-xl font-bold mb-2">Generated Story</h2>
      <p className="mb-2">{story}</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
        Read
      </button>
      <button className="bg-green-500 text-white px-4 py-2 rounded mr-2">
        Save
      </button>
      <button className="bg-gray-500 text-white px-4 py-2 rounded">Share</button>
    </div>
  );
};

export default GeneratedStory;
