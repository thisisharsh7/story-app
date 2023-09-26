import  { useState } from 'react';
import StoryForm from './StoryForm';
import GeneratedStory from './GeneratedStory';
import Leaderboard from './Leaderboard';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS

const Home = () => {
    const [generatedStory, setGeneratedStory] = useState(null);
    const [leaderboardStories, setLeaderboardStories] = useState([]);
  
    const handleStoryGenerated = (story) => {
      setGeneratedStory(story);
    };
  
    const handleStorySubmittedToLeaderboard = (story) => {
      setLeaderboardStories([...leaderboardStories, story]);
    };
    return (
        <div className="container mx-auto p-8">
            <h1 className="text-2xl font-bold mb-4">Story Generator</h1>
            <StoryForm
                onStoryGenerated={handleStoryGenerated}
                onStorySubmitted={handleStorySubmittedToLeaderboard}
            />
            {generatedStory && <GeneratedStory story={generatedStory} />}
            <Leaderboard stories={leaderboardStories} />
        </div>
    )
}

export default Home