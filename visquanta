(function() {
    // Get the <script> tag and its data attributes
    const scriptTag = document.currentScript || document.querySelector('script[data-primary-color]');

    // Extract the customizable data attributes with fallback values
    const CONFIG = {
        primaryColor: scriptTag.getAttribute('data-primary-color') || '#bb162b',
        secondaryColor: scriptTag.getAttribute('data-secondary-color') || '#d24c60',
        clientName: scriptTag.getAttribute('data-client-name') || 'Authorized Dealer',
        identifier: scriptTag.getAttribute('data-identifier') || 'default123',
        headerText: scriptTag.getAttribute('data-header-text') || 'How Can We Help You?'
    };

    // Styles for the widget
    const styles = `
        #chat-bubble {
            background-color: ${CONFIG.primaryColor};
        }
        #chat-bubble:hover {
            background-color: ${CONFIG.secondaryColor};
        }
        #chat-header {
            background: linear-gradient(to right, ${CONFIG.primaryColor}, ${CONFIG.secondaryColor});
        }
        #chat-form button {
            background-color: ${CONFIG.primaryColor};
        }
        #chat-form button:hover {
            background-color: ${CONFIG.secondaryColor};
        }
    `;

    // Create and inject styles
    const styleElement = document.createElement('style');
    styleElement.textContent = styles;
    document.head.appendChild(styleElement);

    // Create chat bubble
    const chatBubble = document.createElement('div');
    chatBubble.id = 'chat-bubble';
    chatBubble.textContent = '💬';
    document.body.appendChild(chatBubble);

    // Create chat form container
    const chatFormContainer = document.createElement('div');
    chatFormContainer.id = 'chat-form-container';
    chatFormContainer.innerHTML = `
        <div id="chat-header">
            ${CONFIG.headerText}
            <button id="close-chat">×</button>
        </div>
        <div id="text-bubble">
            Enter your info below and any information regarding your vehicle choice and a ${CONFIG.clientName} representative will be right with you.
        </div>
        <form id="chat-form">
            <input type="text" id="name" name="name" placeholder="Your Name" required>
            <input type="email" id="email" name="email" placeholder="Your Email" required>
            <input type="tel" id="phone" name="phone" placeholder="Your Phone Number" required pattern="^\\+?[1-9]\\d{1,14}$" title="Please enter a valid phone number.">
            <input type="hidden" id="identifier" name="identifier" value="${CONFIG.identifier}">
            <textarea id="message" name="message" placeholder="Your Message or Vehicle Choice" required style="height: 100px;"></textarea>
            <button type="submit">Send Message 👉🏼</button>
            <div id="form-footer">
                By submitting, you agree to receive SMS or emails. Rates may apply.
            </div>
        </form>
        <div id="confirmation-bubble">
            Thanks for your enquiry. One of our authorized ${CONFIG.clientName} representatives will be in touch any minute now. 🏎️
        </div>
        <div id="powered-by">
            Powered by <a href="https://visquanta.com/speed-to-lead" target="_blank">VisQuanta</a>
        </div>
    `;
    document.body.appendChild(chatFormContainer);

    // Toggle chat form when bubble is clicked
    chatBubble.addEventListener('click', () => {
        if (chatFormContainer.style.display === 'flex') {
            chatFormContainer.style.display = 'none';
        } else {
            chatFormContainer.style.display = 'flex';
        }
    });

    // Close chat form when close button is clicked
    closeChat.addEventListener('click', () => {
        chatFormContainer.style.display = 'none';
    });

    // Handle form submission
    chatForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Disable the submit button and show loading text
        const submitButton = chatForm.querySelector('button[type="submit"]');
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';

        // Collect form data
        const formData = {
            name: document.getElementById('name').value.trim(),
            email: document.getElementById('email').value.trim(),
            phone: document.getElementById('phone').value.trim(),
            message: document.getElementById('message').value.trim(),
            identifier: document.getElementById('identifier').value
        };

        // Send the POST request without authorization
        fetch('https://api.visquanta.com/webhook/chat-widget', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Server error');
            }
            return response.json();
        })
        .then(data => {
            // Reset the form
            chatForm.reset();
            // Hide form and text bubble
            chatForm.style.display = 'none';
            textBubble.style.display = 'none';
            // Show the confirmation bubble
            confirmationBubble.style.display = 'block';
            // Change the header text
            chatHeader.textContent = "All Done! 🏆";
        })
        .catch((error) => {
            console.error('Error:', error);
            // Re-enable the submit button and reset its text
            submitButton.disabled = false;
            submitButton.textContent = 'Send Message 👉🏼';
            // Display error message within the widget
            confirmationBubble.style.display = 'block';
            confirmationBubble.textContent = 'There was an error submitting the form. Please try again later.';
        });
    });
})();
