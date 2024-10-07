<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Chat Widget</title>
  
  <style>
    /* General font style */
    body, input, textarea, button {
      font-family: 'Helvetica', 'Arial', sans-serif;
    }

    /* Chat bubble style */
    #chat-bubble {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background-color: #bb162b; /* Primary color */
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
      background-color: #d24c60; /* Slightly lighter secondary color */
      transform: scale(1.1);
    }

    /* Chat form container (hidden initially) */
    #chat-form-container {
      display: none; /* Hidden until clicked */
      position: fixed;
      bottom: 100px;
      right: 20px;
      width: 300px;
      height: 600px;
      background-color: white;
      border-radius: 10px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
      z-index: 1000;
      flex-direction: column;
      overflow: hidden;
    }

    /* Header with gradient style */
    #chat-header {
      background: linear-gradient(to right, #bb162b, #d24c60);
      color: white;
      font-size: 16px;
      padding: 17px 12px;
      border-radius: 10px 10px 0 0;
      text-align: center;
      position: relative;
    }

    /* Close button */
    #close-chat {
      background: none;
      border: none;
      color: white;
      font-size: 20px;
      font-weight: bold;
      position: absolute;
      top: 50%;
      right: 15px;
      transform: translateY(-50%);
      cursor: pointer;
    }

    /* Additional styling omitted for brevity */
  </style>
</head>
<body>

<!-- Chat bubble button -->
<div id="chat-bubble">
  💬
</div>

<!-- Chat form container -->
<div id="chat-form-container">
  <div id="chat-header">
    How Can We Help You?
    <button id="close-chat">×</button>
  </div>
  
  <!-- Text bubble below the header -->
  <div id="text-bubble">
    Enter your info below and any information regarding your vehicle choice and a representative will be right with you.
  </div>
  
  <!-- Form centered within the container and with a gradient border -->
  <form id="chat-form">
    <input type="text" id="name" name="name" placeholder="Your Name" required>
    <input type="email" id="email" name="email" placeholder="Your Email" required>
    <input type="tel" id="phone" name="phone" placeholder="Your Phone Number" required pattern="^\\+?[1-9]\\d{1,14}$" title="Please enter a valid phone number.">
    <textarea id="message" name="message" placeholder="Your Message or Vehicle Choice" required style="height: 100px;"></textarea>
    <button type="submit">Send Message 👉🏼</button>
  </form>
</div>

<script>
  // Delay bubble appearance by 3 seconds
  setTimeout(() => {
    document.getElementById('chat-bubble').style.display = 'flex';
  }, 3000); // 3 seconds

  const chatBubble = document.getElementById('chat-bubble');
  const chatFormContainer = document.getElementById('chat-form-container');
  const closeChat = document.getElementById('close-chat');

  // Show chat form when bubble is clicked
  chatBubble.addEventListener('click', () => {
    chatFormContainer.style.display = 'flex';
  });

  // Close chat form when the close button is clicked
  closeChat.addEventListener('click', () => {
    chatFormContainer.style.display = 'none';
  });
</script>

</body>
</html>
