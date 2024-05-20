function calculateSum() {
  const num1 = parseInt(document.getElementById("num1").value);
  const num2 = parseInt(document.getElementById("num2").value);

  const total = num1 + num2;

  // Log the result to the console when the button is clicked
  console.log(`Number 1: ${num1}, Number 2: ${num2}, Total is ${total}`);
  alert(`Number 1: ${num1}, Number 2: ${num2}, Total is ${total}`);

  // Update the paragraph with the result
  document.getElementById("output").innerText =
    `First number is ${num1}, Second number is ${num2}, Total is ${total}`;
}

/*
  // Sample request body creation
  const requestPayload = {
    from: fromValue,
    to: toValue,
    message: messageValue
  };
  
  const jsonPayload = JSON.stringify(requestPayload);
  console.log(`Request JSON: ${jsonPayload}`);

  // API integration example
  const xhr = new XMLHttpRequest();

  xhr.onload = function() {
    document.getElementById('apiResponse').innerHTML = this.responseText;
  };

  xhr.open('POST', 'example-api-endpoint');
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.setRequestHeader('Authorization', 'your-api-key-here');

  const requestData = {
    from: fromValue,
    to: toValue,
    message: messageValue
  };

  const jsonRequestData = JSON.stringify(requestData);
  xhr.send(jsonRequestData);
*/
