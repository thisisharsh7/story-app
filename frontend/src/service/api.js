import axios from 'axios';

export const sendPrompt = async (prompt) => {
    try {

        const response = await axios.post('http://localhost:5000/generate-story', 
           { prompt},
        );
        return response.data.story;
    } catch (error) {
        console.error('Error generating story:', error);
        return null;
    }

};