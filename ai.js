// DOM Variables
const floatingInput = document.getElementById("floating-chat-input");
const floatingForm = document.getElementById("floating-form");
const header = document.getElementById("center-header");
const bottom = document.getElementById("bottom-form-box");
const staticInput = document.getElementById("static-chat-input");
const staticChatButton = document.getElementById("static-chat-btn");
const chatContainer = document.getElementById("chat-container");

// Util variables
const BASE_URL = "http://127.0.0.1:5000";

// Event Listeners
window.addEventListener("load", () => {
  header.hidden = false;
  bottom.hidden = true;
});

floatingInput.addEventListener("keydown", function (event) {
  // On enter, the prompt will be sent to backend
  if (event.key === "Enter") {
    event.preventDefault();
    const query = floatingInput.value.trim();
    if (!query) return;

    createUserMessage(query);
    generateResponse(query);

    header.hidden = true;
    bottom.hidden = false;
    floatingInput.value = "";
  }
});

staticInput.addEventListener("keydown", function (event) {
  // On enter, the prompt will be sent to the backend
  if (event.key === "Enter") {
    event.preventDefault();
    const query = floatingInput.value.trim();
    if (!query) return;

    createUserMessage(query);
    generateResponse(query);
    alert("This works!");
  }
});

staticChatButton.addEventListener("click", async (event) => {
  // On Button click, the prompt will be sent to the backend
  const query = staticInput.value.trim();
  if (!query) return;
  createUserMessage(query);
  generateResponse(query);
});

// Helper functions

async function generateResponse(query) {
  // Sends query to api for processing
  const url = `${BASE_URL}/ai`;

  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({ query: query }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
    if (!response.ok) {
      createStaticAIMessage("Error Fetching answer, please try again!");
    }

    const reader = response.body.getReader();
    streamAIMessage(reader);
    console.log("Streaming!");
  } catch (error) {
    console.error(error);
  }
}

function createStaticAIMessage(answer) {
  // Appends the AI's answer to the container statically
  const msg = document.createElement("div");
  msg.classList.add("message-bot");
  msg.textContent = answer;
  chatContainer.appendChild(msg);
}

function createUserMessage(question) {
  // Appends the users query to the container
  const msg = document.createElement("div");
  msg.classList.add("message-user");
  msg.textContent = question;
  chatContainer.appendChild(msg);
}

async function streamAIMessage(reader) {
  const decoder = new TextDecoder();
  const msg = document.createElement("div");
  msg.classList.add("message-bot");
  chatContainer.appendChild(msg);
  let answer = "";

  while (true) {
    const { value, done } = await reader.read();
    if (done) break;

    const chunk = decoder.decode(value, { stream: true });
    answer += chunk;
    msg.textContent = answer;
    scrollToLatestMessage();
  }
}

function scrollToLatestMessage() {
  // Scrolls to latest message
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
}
