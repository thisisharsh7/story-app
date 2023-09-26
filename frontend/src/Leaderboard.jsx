

const Leaderboard = ({ stories }) => {
    return (
        <div>
            <h2 className="text-xl font-bold mb-2">Leaderboard</h2>
            <ul>
                {stories.map((story, index) => (
                    <li key={index} className="mb-2">
                        <strong>Prompt: </strong> {story.prompt}, <strong>Story: </strong>{' '}
                        {story.story}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Leaderboard;
