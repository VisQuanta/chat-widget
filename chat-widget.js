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
      background-color: var(--primary-color, #bb162b); /* Primary color */
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

    /* Hover effect for chat bubble */
    #chat-bubble:hover {
      background-color: var(--secondary-color, #d24c60); /* Secondary color */
      transform: scale(1.1);
    }
  </style>
</head>
<body>

<!-- Chat bubble button -->
<div id="chat-bubble">
  💬
</div>

<script>
  // Check that the script tag is available and accessible
  const scriptTag = document.currentScript || document.querySelector('script[data-primary-color]');

  // Fallback: Check if the script tag exists and has the attributes
  if (scriptTag) {
    // Extract customizable data from attributes, with defaults
    const primaryColor = scriptTag.getAttribute('data-primary-color') || '#bb162b';
    const secondaryColor = scriptTag.getAttribute('data-secondary-color') || '#d24c60';
    const chatIcon = scriptTag.getAttribute('data-chat-icon') || '💬';

    // Apply the styles dynamically using CSS variables
    document.documentElement.style.setProperty('--primary-color', primaryColor);
    document.documentElement.style.setProperty('--secondary-color', secondaryColor);

    // Update the chat icon dynamically
    const chatBubble = document.getElementById('chat-bubble');
    if (chatBubble) {
      chatBubble.textContent = chatIcon;
    }

    // Placeholder for future functionality when the bubble is clicked
    chatBubble.addEventListener('click', () => {
      alert('Chat bubble clicked!');
    });
  } else {
    console.error('Script tag with data attributes not found.');
  }
</script>

</body>
</html>
