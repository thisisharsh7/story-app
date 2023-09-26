import { useState } from 'react';
import { sendPrompt } from './service/api';

const StoryForm = ({ onStoryGenerated, onStorySubmitted }) => {
    const [prompt, setPrompt] = useState('');
    const [getStory, setStory] = useState('');
    const handlePromptChange = (e) => {
        setPrompt(e.target.value);
    };

    const handleGenerateStory = async () => {
        const story = await sendPrompt(prompt);
        setStory(`${prompt} ${story}`);
        onStoryGenerated(`${prompt} ${story}`);

    };

    const handleSaveStory = () => {
        onStorySubmitted({ prompt, story: getStory });
    };

    return (
        <div className="mb-4">
            <textarea
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Enter your story prompt..."
                value={prompt}
                onChange={handlePromptChange}
            />
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
                onClick={handleGenerateStory}
            >
                Generate Story
            </button>
            {prompt && (
                <button
                    className="bg-green-500 text-white px-4 py-2 rounded mt-2"
                    onClick={handleSaveStory}
                >
                    Save Story to Leaderboard
                </button>
            )}
        </div>
    );
};

export default StoryForm;
