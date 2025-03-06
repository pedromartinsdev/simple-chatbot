const responses = {
  "ola": "Olá! Como posso te ajudar?",
  "como você está?": "Bem e você?",
  "bem também!": "Ótimo!",
  "tchau": "Tchau! Até mais!"
};

function getResponse(input){
  input = input.toLowerCase()
  return responses[input]
}

function sendMessage(){
  let userInput = document.getElementById("type-ask")
  if(userInput.value){
    console.log(getResponse(userInput.value))
    addLine(userInput.value)
  } else {
    alert("Digite algo")
  }
}

function addLine(input){
  let newLine = document.createElement("span")
  newLine.textContent = input
  
  chat = document.getElementById("chat-body")
  chat.appendChild(newLine)
}