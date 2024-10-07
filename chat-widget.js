// Get the script tag that contains data attributes for customization
const scriptTag = document.currentScript || document.querySelector('script[data-primary-color]');

// Default values for customization
const primaryColor = scriptTag.getAttribute('data-primary-color') || '#bb162b';
const secondaryColor = scriptTag.getAttribute('data-secondary-color') || '#d24c60';
const chatIcon = scriptTag.getAttribute('data-chat-icon') || '💬';

// Create and style the chat bubble
const chatBubble = document.createElement('div');
chatBubble.id = 'chat-bubble';
chatBubble.style.position = 'fixed';
chatBubble.style.bottom = '20px';
chatBubble.style.right = '20px';
chatBubble.style.backgroundColor = primaryColor;
chatBubble.style.color = 'white';
chatBubble.style.borderRadius = '50%';
chatBubble.style.width = '60px';
chatBubble.style.height = '60px';
chatBubble.style.display = 'flex';
chatBubble.style.justifyContent = 'center';
chatBubble.style.alignItems = 'center';
chatBubble.style.cursor = 'pointer';
chatBubble.style.fontSize = '30px';
chatBubble.style.fontWeight = 'bold';
chatBubble.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
chatBubble.style.transition = 'transform 0.3s ease, background-color 0.3s ease';
chatBubble.textContent = chatIcon;

// Hover effect
chatBubble.addEventListener('mouseenter', () => {
  chatBubble.style.backgroundColor = secondaryColor;
  chatBubble.style.transform = 'scale(1.1)';
});
chatBubble.addEventListener('mouseleave', () => {
  chatBubble.style.backgroundColor = primaryColor;
  chatBubble.style.transform = 'scale(1)';
});

// Append the chat bubble to the document body
document.body.appendChild(chatBubble);

// Placeholder for click functionality
chatBubble.addEventListener('click', () => {
  alert('Chat bubble clicked!');
});
