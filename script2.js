function sendMessage() {
let input = document.getElementById("user-input").value.toLowerCase();
let chatLog = document.getElementById("chat-log");
 if (input.trim() === "") return;
 let userMsg = document.createElement("p");
userMsg.textContent = "You: " + input;
chatLog.appendChild(userMsg);

// ✅ Create bot message
let botMsg = document.createElement("p");
  if (input.toLowerCase().includes("hello")) {
    botMsg.textContent = "Bot: Hi! How can I help you?";
  } else if (input.toLowerCase().includes("bye")) {
    botMsg.textContent = "Bot: Goodbye!";
  } else {
    botMsg.textContent = "Bot: Sorry, I don’t understand.";
  }
  chatLog.appendChild(botMsg);
}