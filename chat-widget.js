<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Chat Widget Test</title>
  <style>
    /* Basic chat bubble */
    #chat-bubble {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background-color: #1e90ff; /* Custom primary color */
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
    }
    #chat-bubble:hover {
      background-color: #ff4500; /* Custom secondary color */
    }
  </style>
</head>
<body>

<!-- Chat bubble -->
<div id="chat-bubble">💬</div>

<script>
  console.log("Script loaded and running");

  const chatBubble = document.getElementById('chat-bubble');
  if (chatBubble) {
    chatBubble.addEventListener('click', () => {
      alert('Chat bubble clicked!');
    });
  } else {
    console.error('Chat bubble element not found.');
  }
</script>

</body>
</html>
