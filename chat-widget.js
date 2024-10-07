<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Chat Widget</title>

  <style>
    /* Chat bubble style */
    #chat-bubble {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background-color: #1e90ff; /* Primary color */
      color: white;
      border-radius: 50%;
      width: 60px;
      height: 60px;
      display: none; /* Initially hidden */
      justify-content: center;
      align-items: center;
      cursor: pointer;
      font-size: 30px;
      font-weight: bold;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
      z-index: 1000;
      transition: transform 0.3s ease, background-color 0.3s ease;
    }

    /* Hover effect for chat bubble */
    #chat-bubble:hover {
      background-color: #ff4500; /* Secondary color */
      transform: scale(1.1);
    }

    /* Chat form container */
    #chat-form-container {
      display: none; /* Hidden until bubble is clicked */
      position: fixed;
      bottom: 100px;
      right: 20px;
      width: 300px;
      background-color: white;
      border-radius: 10px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
      z-index: 1000;
      padding: 20px;
      box-sizing: border-box;
    }

    /* Header with gradient style */
    #chat-header {
      background: linear-gradient(to right, #1e90ff, #ff4500); /* Gradient */
      color: white;
      font-size: 16px;
      padding: 15px;
      border-radius: 10px 10px 0 0;
      text-align: center;
    }

    /* Close button */
    #close-chat {
      background: none;
      border: none;
      color: white;
      font-size: 20px;
      font-weight: bold;
      position: absolute;
      top: 10px;
      right: 15px;
      cursor: pointer;
    }

    /* Form fields */
    #chat-form input, #chat-form textarea {
      width: 100%;
      padding: 10px;
      margin-bottom: 10px;
      border: 1px solid #ddd;
      border-radius: 5px;
      font-size: 14px;
    }

    /* Send button */
    #chat-form button {
      width: 100%;
      padding: 10px;
      background-color: #1e90ff;
      color: white;
      border: none;
      border-radius: 5px;
      font-size: 16px;
      cursor: pointer;
    }

    /* Powered by VisQuanta footer */
    #powered-by {
      font-size: 10px;
      text-align: center;
      margin-top: 10px;
      color: #001D6E;
    }
    #powered-by a {
      color: #001D6E;
      text-decoration: none;
    }
    #powered-by a:hover {
      text-decoration: underline;
    }

  </style>
</head>
<body>

<!-- Chat bubble -->
<div id="chat-bubble">💬</div>

<!-- Chat form container -->
<div id="chat-form-container">
  <div id="chat-header">
    Chat with SuperCars
    <button id="close-chat">×</button>
  </div>
  
  <form id="chat-form">
    <input type="text" id="name" name="name" placeholder="Your Name" required>
    <input type="email" id="email" name="email" placeholder="Your Email" required>
    <input type="tel" id="phone" name="phone" placeholder="Your Phone Number" required>
    <textarea id="message" name="message" placeholder="Your Message" required></textarea>
    <button type="submit">Send Message</button>
    <div id="powered-by">
      Powered by <a href="https://visquanta.com">VisQuanta</a>
    </div>
  </form>
</div>

<script>
  // Show the chat bubble 3 seconds after the page loads
  setTimeout(() => {
    document.getElementById('chat-bubble').style.display = 'flex';
  }, 3000);

  const chatBubble = document.getElementById('chat-bubble');
  const chatFormContainer = document.getElementById('chat-form-container');
  const closeChat = document.getElementById('close-chat');

  // Show chat form when bubble is clicked
  chatBubble.addEventListener('click', () => {
    chatFormContainer.style.display = 'block';
  });

  // Close chat form when close button is clicked
  closeChat.addEventListener('click', () => {
    chatFormContainer.style.display = 'none';
  });
</script>

</body>
</html>
