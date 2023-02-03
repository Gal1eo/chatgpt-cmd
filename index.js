const axios = require('axios');
const readline = require('readline');
require('dotenv').config()

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const { OPENAI_END_POINT } = process.env;
const { DEFAULT_USER_PROMPT } = process.env;
const { OPENAI_KEY } = process.env;
const { DEFAULT_RESPONSE_PROMT } = process.env;

const chatgptURL = OPENAI_END_POINT
const prompt = process.env.DEFAULT_USER_PROMPT
const apiKey = process.env.OPENAI_KEY
const chatgpt_ans = process.env.DEFAULT_RESPONSE_PROMT

console.log(prompt);

console.log('Welcome to ChatGPT!');
console.log('Start typing to interact with the ChatGPT server.');

rl.setPrompt(prompt);
rl.prompt();

function closeIt(){
  console.log('Goodbye!');
  process.exit(0);
}

rl.on('line', line => {
  if(line=='exit'){
    closeIt();
  }
  axios
    .post(chatgptURL, {
      prompt: line,
      model: 'text-davinci-003',
      max_tokens: 1024,
      temperature: 0
    }, {
      headers: {
	'Content-Type' : 'application/json',
        'Authorization': `Bearer ${apiKey}`
      }
    })
    .then(res => {
      console.log(`${chatgpt_ans} ${res.data.choices[0].text}`);
      rl.prompt();
    })
    .catch(err => {
      console.error(err);
      rl.prompt();
    });
});

rl.on('close', () => {
  console.log('Goodbye!');
  process.exit(0);
});