<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Chat Widget with Form</title>

  <style>
    /* Chat bubble style */
    #chat-bubble {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background-color: #1e90ff;
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

    /* Chat form container (initially hidden) */
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
  </style>
</head>
<body>

<!-- Chat bubble -->
<div id="chat-bubble">💬</div>

<!-- Chat form container -->
<div id="chat-form-container">
  <form id="chat-form">
    <input type="text" id="name" name="name" placeholder="Your Name" required>
    <input type="email" id="email" name="email" placeholder="Your Email" required>
    <input type="tel" id="phone" name="phone" placeholder="Your Phone Number" required>
    <textarea id="message" name="message" placeholder="Your Message" required></textarea>
    <button type="submit">Send Message</button>
  </form>
</div>

<script>
  // Show the chat bubble 3 seconds after the page loads
  setTimeout(() => {
    document.getElementById('chat-bubble').style.display = 'flex';
    console.log('Bubble displayed');
  }, 3000);

  const chatBubble = document.getElementById('chat-bubble');
  const chatFormContainer = document.getElementById('chat-form-container');

  // Show chat form when bubble is clicked
  chatBubble.addEventListener('click', () => {
    chatFormContainer.style.display = 'block';
    console.log('Form displayed');
  });
</script>

</body>
</html>
