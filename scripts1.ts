document.getElementById('sendButton').addEventListener('click', function(event) {
    const formElement = document.getElementById('smsForm');
    event.preventDefault();

    let sender = document.getElementById('senderNumber').value;
    let receiver = document.getElementById('receiverNumber').value;
    let textMessage = document.getElementById('textMessageContent').value;

    let payload = {
        from: sender,
        to: receiver,
        message: textMessage
    };

    let jsonPayload = JSON.stringify(payload);

    const apiEndpoint = 'https://api.example.com/sendMessage';
    const token = 'YOUR_API_KEY_HERE';

    fetch(apiEndpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: jsonPayload
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('Message Sent:', data);
        alert('Message sent successfully!');
        formElement.reset();
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error sending the message. Please try again later.');
    });
});
