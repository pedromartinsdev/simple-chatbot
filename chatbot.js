const responses = {
  "oi": "Olá! Como posso te ajudar?",
  "como você está?": "Bem e você?",
  "bem também!": "Ótimo!",
  "tchau": "Tchau! Até mais!"
};

const userInput = document.getElementById("type-ask")
const button = document.getElementById("submit-ask")
userInput.addEventListener("input", function () {
  if (userInput.value.trim() !== "") {
    button.disabled = false
  } else {
    button.disabled = true
  }
})

userInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    sendMessage()
  }
})

function getResponse(input) {
  let ask = input.toLowerCase()
  if (responses[ask]) {
    return responses[ask]
  } else {
    return "Não entendi sua pergunta"
  }
}

function sendMessage() {
  addLine(userInput.value, "ask")
  addLine(getResponse(userInput.value), "response")
  userInput.value = ""
  button.disabled = true
  scrollDown()
}

function addLine(input, type) {
  let newLine = document.createElement("span")
  newLine.className = type
  newLine.textContent = input

  chat = document.getElementById("chat-body")
  chat.appendChild(newLine)
}

function scrollDown() {
  let chat = document.getElementById("chat-body")
  chat.scrollTop = chat.scrollHeight
}