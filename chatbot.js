const responses = {
  "oi": "Olá! Como posso te ajudar?",
  "como você está?": "Bem e você?",
  "bem também!": "Ótimo!",
  "tchau": "Tchau! Até mais!",
  "qual é o filme mais premiado da história?": "O Senhor dos Anéis: O Retorno do Rei, com 11 Oscars.",
  "qual série tem mais temporadas na netflix?": "Grey's Anatomy é uma das séries mais longas disponíveis.",
  "quem é o vilão principal em star wars?": "Darth Vader é o vilão icônico da franquia.",
  "qual é o super-herói mais popular da marvel?": "O Homem-Aranha é um dos mais queridos pelos fãs.",
  "quem interpreta o harry potter nos filmes?": "Daniel Radcliffe.",
  "qual é a casa mais famosa de game of thrones?": "A Casa Stark é uma das mais icônicas.",
  "qual é o jogo mais vendido de todos os tempos?": "Minecraft, com mais de 238 milhões de cópias.",
  "quem canta a música 'blinding lights'?": "The Weeknd.",
  "qual série ganhou mais emmy awards?": "Game of Thrones, com 59 prêmios.",
  "quem é o protagonista de breaking bad?": "Walter White, interpretado por Bryan Cranston.",
  "qual é o personagem principal de the witcher?": "Geralt de Rívia, interpretado por Henry Cavill na série.",
  "quem criou o universo marvel?": "Stan Lee, junto com Jack Kirby e Steve Ditko.",
  "qual filme da pixar tem um robô como protagonista?": "WALL-E.",
  "qual é a franquia de filmes de carros da disney?": "Carros (Cars), da Pixar.",
  "quem é o maior detetive da literatura clássica?": "Sherlock Holmes, criado por Arthur Conan Doyle.",
  "qual banda lançou o álbum 'dark side of the moon'?": "Pink Floyd.",
  "qual é o personagem mais poderoso de dragon ball?": "Goku, especialmente na forma de Super Saiyajin Blue ou Ultra Instinct.",
  "qual é o jogo de tiro mais jogado atualmente?": "Depende da época, mas títulos como Call of Duty e Fortnite são populares.",
  "quem é o diretor de 'a origem' (inception)?": "Christopher Nolan.",
  "qual série de fantasia tem dragões e uma disputa por tronos?": "Game of Thrones."
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