// DOM Variables
const floatingInput = document.getElementById("floating-chat-input");
const floatingForm = document.getElementById("floating-form");
const header = document.getElementById("center-header");
const bottom = document.getElementById("bottom-form-box");
const staticInput = document.getElementById("static-chat-input");
const staticChatButton = document.getElementById("static-chat-btn");
const chatContainer = document.getElementById("chat-container");

// Util variables
const BASE_URL = "https://shaffemarcus.pythonanywhere.com";

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
    const query = staticInput.value.trim();
    if (!query) return;

    createUserMessage(query);
    generateResponse(query);

    staticInput.value = "";
  }
});

staticChatButton.addEventListener("click", async (event) => {
  // On Button click, the prompt will be sent to the backend
  const query = staticInput.value.trim();
  if (!query) return;
  createUserMessage(query);
  generateResponse(query);
  staticInput.value = "";
});

// Helper functions

async function generateResponse(query) {
  // Sends query to api for processing
  const url = `${BASE_URL}/ai`;

  // Loader container
  const msg = document.createElement("div");
  const loader = document.createElement("div");
  loader.classList.add("loader");
  loader.innerHTML = "<div></div><div></div><div></div>";
  chatContainer.appendChild(msg);
  msg.appendChild(loader);

  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({ query: query }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      createStaticAIMessage("Error Fetching answer, please try again!");
    }

    loader.remove();

    const reader = response.body.getReader();
    streamAIMessage(reader, msg);
    console.log("Streaming!");
  } catch (error) {
    console.error(error);
    createStaticAIMessage(`Error: ${error}`);
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

async function streamAIMessage(reader, msg) {
  // Streams response from Flask API
  // Since Streaming isn't supported on the API hosts, it had to be faked
  msg.classList.add("message-bot");

  scrollToLatestMessage();

  try {
    const chunks = [];
    const decoder = new TextDecoder();

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      chunks.push(decoder.decode(value, { stream: true }));
    }

    const fullText = chunks.join("");

    msg.textContent = "";
    for (let i = 0; i < fullText.length; i++) {
      msg.textContent += fullText[i];
      scrollToLatestMessage();
      await new Promise((r) => setTimeout(r, 25));
    }
  } catch (err) {
    loader.remove();
    msg.textContent = "Error fetching response!";
    console.error(err);
  }
}

function scrollToLatestMessage() {
  // Scrolls to latest message
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
}
