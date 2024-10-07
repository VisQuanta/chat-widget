<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Chat Widget - Basic Test</title>

  <style>
    /* Basic chat bubble style */
    #chat-bubble {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background-color: #bb162b; /* Default primary color */
      color: white;
      border-radius: 50%;
      width: 60px;
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      font-size: 30px;
      font-weight: bold;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
      z-index: 1000;
      transition: transform 0.3s ease, background-color 0.3s ease;
    }

    /* Hover effect for the chat bubble */
    #chat-bubble:hover {
      background-color: #d24c60; /* Default secondary color */
      transform: scale(1.1);
    }
  </style>
</head>
<body>

<!-- Basic Chat Bubble -->
<div id="chat-bubble">💬</div>

<script>
  // Log to confirm the script is being executed
  console.log("Script loaded and running");

  // Adding click event to the chat bubble
  const chatBubble = document.getElementById('chat-bubble');

  if (chatBubble) {
    chatBubble.addEventListener('click', () => {
      alert('Chat bubble clicked!');
    });
  } else {
    console.error("Chat bubble element not found.");
  }
</script>

</body>
</html>
