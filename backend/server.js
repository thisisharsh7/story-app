const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');
const res = require('express/lib/response');
const dotenv = require('dotenv')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const OPENAI_API_KEY = dotenv.OPENAI_API_KEY; // Replace with your GPT-3.5 Turbo API key

app.post('/generate-story', async (req, res) => {
  const { prompt } = req.body;

  try {
    const generatedStory = await generateStoryFromPrompt(prompt);
    res.json({ story: generatedStory });

  } catch (error) {
    console.log('error in generating story');
  }
  
});

const generateStoryFromPrompt = async (prompt) => {
  const apiUrl = 'https://api.openai.com/v1/engines/davinci/completions';

  try {
    const response = await axios.post(apiUrl, {
      prompt,
      max_tokens: 50, // Adjust max tokens based on the desired story length
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
      }
    });
    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error('Error generating story from GPT-3.5 Turbo:', error.response?.data || error.message);
    throw new Error('Error generating story from GPT-3.5 Turbo');
  }
};

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
