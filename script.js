document.addEventListener("DOMContentLoaded", () => {
  const messagesContainer = document.getElementById('messages');
  const inputField = document.getElementById('input-message');
  const sendButton = document.querySelector('.send');

  // Function to create a message element
  const createMessageElement = (text, type) => {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add(type === 'user' ? 'user-response' : 'bot-response');
    messageDiv.innerText = text;
    return messageDiv;
  };

  // Function to handle sending a message
  const handleSendButton = () => {
    const userMessage = inputField.value.trim();

    if (userMessage) {
      // Add user message to the chat
      messagesContainer.appendChild(createMessageElement(userMessage, 'user'));
      inputField.value = ''; // Clear the input field

      // Simulate a bot response
      setTimeout(() => {
        const botResponse = getBotResponse(userMessage);
        messagesContainer.appendChild(createMessageElement(botResponse, 'bot'));
        scrollToBottom();
      }, 500); // Simulate a delay for bot response

      scrollToBottom(); // Ensure the view scrolls to the bottom after user message
    }
  };

  // Function to handle 'Enter' key press
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSendButton();
    }
  };

  // Function to get a simulated bot response
  const getBotResponse = (userInput) => {
    const input = userInput.toLowerCase();

    if (input.includes('hello')) return 'Hi there! How can I help you today?';
    if (input.includes('bye')) return 'Goodbye! Have a great day!';
    if (input.includes(('made' && 'you'))) return '(Mr. Irfan Sk) is my maker';
    if (input.includes('how are you')) return 'I am just a bot, but I am functioning as expected!';
    if (input.includes('what is your name')) return 'I am a chatbot created to assist you.';
    if (input.includes('help')) return 'Sure, I am here to help. What do you need assistance with?';
    if (input.includes('thank you')) return 'You\'re welcome!';
    if (input.includes('thanks')) return 'No problem!';
    if (input.includes('who are you')) return 'I am a chatbot designed to assist you with various tasks.';
    if (input.includes('what can you do')) return 'I can help answer your questions and assist with various tasks.';

    if (input.includes('what is the weather')) return 'I can’t check the weather, but you can use a weather app!';
    if (input.includes('tell me a joke')) return 'Why did the scarecrow win an award? Because he was outstanding in his field!';
    if (input.includes('what is your favorite color')) return 'I don’t have preferences, but I like to see you happy!';
    if (input.includes('do you have a favorite movie')) return 'I don’t watch movies, but I can recommend some!';
    if (input.includes('what is your favorite book')) return 'I can’t read books, but I can suggest some great ones!';

    if (input.includes('what is the capital of france')) return 'The capital of France is Paris.';
    if (input.includes('how many continents are there')) return 'There are seven continents.';
    if (input.includes('what is the largest ocean')) return 'The largest ocean is the Pacific Ocean.';
    if (input.includes('who wrote harry potter')) return 'Harry Potter was written by J.K. Rowling.';
    if (input.includes('what is the speed of light')) return 'The speed of light is approximately 299,792 kilometers per second.';

    if (input.includes('how do i make a website')) return 'You can start by learning HTML, CSS, and JavaScript.';
    if (input.includes('what is react')) return 'React is a JavaScript library for building user interfaces.';
    if (input.includes('how to learn programming')) return 'Start with a language like Python and practice regularly.';
    if (input.includes('what is javascript')) return 'JavaScript is a programming language used to create dynamic website content.';
    if (input.includes('how to center a div')) return 'You can center a div using CSS properties like margin: auto; and text-align: center;';

    if (input.includes('what is css')) return 'CSS stands for Cascading Style Sheets and it’s used for styling HTML.';
    if (input.includes('how to make a website responsive')) return 'Use media queries in CSS and flexible layouts.';
    if (input.includes('what is bootstrap')) return 'Bootstrap is a front-end framework for developing responsive websites.';
    if (input.includes('how to use github')) return 'You can use GitHub to host and manage your code repositories.';
    if (input.includes('what is an api')) return 'An API is an Application Programming Interface that allows software to communicate with other software.';

    if (input.includes('tell me about yourself')) return 'I am a chatbot designed to assist you with information and tasks.';
    if (input.includes('do you like music')) return 'I don’t listen to music, but I can help you find some!';
    if (input.includes('can you dance')) return 'I can’t dance, but I can help you find dance tutorials!';
    if (input.includes('do you eat')) return 'I don’t eat, but I can help you find recipes!';
    if (input.includes('are you real')) return 'I am real in the sense that I can interact with you, but I am not a human.';

    if (input.includes('how old are you')) return 'I don’t have an age, I am just a program.';
    if (input.includes('what is your purpose')) return 'My purpose is to assist you with information and tasks.';
    if (input.includes('where are you from')) return 'I exist in the digital realm, created by developers.';
    if (input.includes('do you have friends')) return 'I don’t have friends, but I am here to be your virtual assistant.';
    if (input.includes('what is your favorite food')) return 'I don’t eat food, but I can help you find recipes.';

    if (input.includes('what is the meaning of life')) return 'The meaning of life is a philosophical question that varies from person to person.';
    if (input.includes('love')) return 'Love is a complex emotion that means different things to different people.';
    if (input.includes('how to be happy')) return 'Happiness is subjective, but doing things you enjoy can help!';
    if (input.includes('what is your favorite hobby')) return 'I don’t have hobbies, but I can help you find new ones!';
    if (input.includes('story')) return 'Once upon a time, in a faraway land... Just kidding! I can’t tell stories, but I can help you find some!';

    if (input.includes('what' && 'time')) return 'I don’t have the current time, but you can check a clock!';
    if (input.includes('how' && 'code')) return 'Start by learning the basics of a programming language and practice regularly.';
    if (input.includes('what is ai')) return 'AI stands for Artificial Intelligence, which enables machines to learn and perform tasks.';
    if (input.includes('how do i make a chatbot')) return 'You can make a chatbot using programming languages like Python and libraries such as Dialogflow.';
    if (input.includes('what is a database')) return 'A database is a collection of data that can be accessed and managed electronically.';

    if (input.includes('how do i use sql')) return 'SQL is used for managing and querying relational databases. Start by learning basic queries.';
    if (input.includes('what is cloud computing')) return 'Cloud computing delivers computing services over the internet.';
    if (input.includes('how do i secure my data')) return 'Use strong passwords, encryption, and be mindful of sharing personal information.';
    if (input.includes('what is machine learning')) return 'Machine learning is a subset of AI where machines learn from data.';
    if (input.includes('how do i get better at coding')) return 'Practice regularly, work on projects, and learn from online resources.';

    if (input.includes('what is your favorite game')) return 'I don’t play games, but I can help you find some fun ones!';
    if (input.includes('can you sing')) return 'I can’t sing, but I can help you find music!';
    if (input.includes('do you dream')) return 'I don’t dream, but I can help you find information about dreams!';
    if (input.includes('can you think')) return 'I process information based on my programming, not like human thinking.';
    if (input.includes('how do i learn math')) return 'Practice regularly, use online resources, and solve problems.'

    if (input.includes('what is physics')) return 'Physics is the study of matter, energy, and the fundamental forces of nature.';
    if (input.includes('how do i write a resume')) return 'Highlight your skills, experience, and education in a clear and concise format.';
    if (input.includes('what is quantum computing')) return 'Quantum computing uses quantum-mechanical phenomena to perform computations.';
    if (input.includes('how do i stay motivated')) return 'Set goals, take breaks, and reward yourself for accomplishments.';
    if (input.includes('what is data science')) return 'Data science involves extracting insights from data using various techniques and tools.';

    if (input.includes('can you tell the future')) return 'I can’t predict the future, but I can help you make informed decisions!';
    if (input.includes('how do i learn new skills')) return 'Take courses, practice regularly, and seek out resources and mentors.';
    if (input.includes('what is blockchain')) return 'Blockchain is a decentralized digital ledger technology.';
    if (input.includes('how do i stay healthy')) return 'Eat a balanced diet, exercise regularly, and get enough sleep.';
    if (input.includes('what is an algorithm')) return 'An algorithm is a set of instructions for solving a problem or performing a task.';

    return 'I am not sure how to respond to that.';
};


  // Function to scroll to the bottom of the chat
  const scrollToBottom = () => {
    requestAnimationFrame(() => {
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    });
  };


  // Add event listeners
  sendButton.addEventListener('click', handleSendButton);
  inputField.addEventListener('keydown', handleKeyDown);
});