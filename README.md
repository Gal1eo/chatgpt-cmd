# ChatGPT-Cmd 
A Commandline Interface to OpenAI's GPT models.


# Demo
![](https://github.com/pbhalesain/chatgpt-cmd/blob/master/chatgpt-cmd.gif)


# Instructions
This program needs API Key provided by OpenAI.com
Please register to their API portal and create a Key.
This API key then needs to be added to a .env file of this project.
A Sample env.sample file is added to the repo. Rename that file to .env. Verify the content of it, specifically the API key.

Install all the required node packages using
```bash
npm install
```
Once the pckages are installed run the programs as
```bash
node index.js
```

If everything works fine, you should get a prompt 
```bash
You > :
```
Enter your prompt for ChatGPT, the request then will be sent to the OpenAI server.
Ideally you should get response in few seconds.
The reponse is printed as 
```bash
ChatGPT > :
```
A demo is uploaded using terminalizer, hopefully that will explain the use. 

Should you need to ask any questions, please do get in touch. or open an Issue. 
