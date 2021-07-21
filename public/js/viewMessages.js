// Retrieve the messages from the database
const getMessages = () => {
const messagesRef = firebase.database().ref('/messages');
messagesRef.on('value', (snapshot) => {
    const data = snapshot.val();
    console.log(data);

    findMessages(data);
});
}


  // Look through the messages retrieved from the database to see if there is anyone one matching the input
    

const findMessages = (messages) =>
{
    const passcodeAttempt = document.querySelector('#passcode').value;
    for (message in messages) {
        const messageData = messages[message];
        if (messageData.passcode === passcodeAttempt) {
            renderMessageAsHtml(message);
        }
    }

}; 

const renderMessageAsHtml = (message) =>
{
    // Hide the passcode view
    const passcodeInput = document.querySelector('#passcodeInput');
    passcodeInput.style.display = 'none';
    
    // Show the message
    
    const messageDiv = document.querySelector('#message');
    messageDiv.innerHTML = message;
};