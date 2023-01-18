const socket = io();

let postButton = document.getElementById("post-button");
let messageList = document.getElementById("messages");
let messageInput = document.getElementById("message-input");

// Create a div to display the given message to the screen
function showMessage(messageData) {
  let newMessage = document.createElement("div");
  newMessage.setAttribute("class", "message");
  newMessage.innerHTML = messageData;
  messageList.prepend(newMessage);
}

postButton.addEventListener("click", () => {
  if (messageInput.value.length === 0 || messageInput.value.length >= 128) {
    alert("message must be non-empty or less than 128 characters!");
  } else {
    showMessage(messageInput.value);
    socket.emit("msg-posted", messageInput.value);
  }
});

socket.on("msg-received", (data) => {
  showMessage(data);
});
