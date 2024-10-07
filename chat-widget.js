(function() {
    // Fetch the script tag that loaded this widget
    var scripts = document.getElementsByTagName('script');
    var myScript = scripts[scripts.length - 1];

    // Configuration with default values
    var CONFIG = {
        primaryColor: myScript.getAttribute('data-primary-color') || '#bb162b',
        secondaryColor: myScript.getAttribute('data-secondary-color') || '#d24c60',
        clientName: myScript.getAttribute('data-client-name') || 'Our',
        identifier: myScript.getAttribute('data-identifier') || '999999999999999999999999',
        headerText: myScript.getAttribute('data-header-text') || 'How Can We Help You?'
    };

    // Styles for the widget
    var styles = `
        #chat-bubble-${CONFIG.identifier} {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: ${CONFIG.primaryColor};
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

        #chat-bubble-${CONFIG.identifier}:hover {
            background-color: ${CONFIG.secondaryColor};
            transform: scale(1.1);
        }

        #chat-form-container-${CONFIG.identifier} {
            display: none;
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
            font-family: 'Helvetica', 'Arial', sans-serif;
        }

        #chat-header-${CONFIG.identifier} {
            background: linear-gradient(to right, ${CONFIG.primaryColor}, ${CONFIG.secondaryColor});
            color: white;
            font-size: 16px;
            padding: 17px 12px;
            border-radius: 10px 10px 0 0;
            text-align: center;
            position: relative;
        }

        #chat-form-${CONFIG.identifier} button {
            background-color: ${CONFIG.primaryColor};
            color: white;
            border: none;
            padding: 10px;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        #chat-form-${CONFIG.identifier} button:hover {
            background-color: ${CONFIG.secondaryColor};
        }

        #close-chat-${CONFIG.identifier} {
            position: absolute;
            right: 10px;
            top: 50%;
            transform: translateY(-50%);
            background: none;
            border: none;
            color: white;
            font-size: 20px;
            cursor: pointer;
        }

        #text-bubble-${CONFIG.identifier}, #confirmation-bubble-${CONFIG.identifier} {
            background-color: #f0f0f0;
            padding: 10px;
            margin: 10px;
            border-radius: 10px;
        }

        #chat-form-${CONFIG.identifier} input, #chat-form-${CONFIG.identifier} textarea {
            width: 100%;
            padding: 8px;
            margin: 5px 0;
            border: 1px solid #ddd;
            border-radius: 4px;
            box-sizing: border-box;
        }

        #powered-by-${CONFIG.identifier} {
            text-align: center;
            font-size: 12px;
            margin-top: 10px;
        }
    `;

    // Create and inject styles
    var styleElement = document.createElement('style');
    styleElement.textContent = styles;
    document.head.appendChild(styleElement);

    // Create chat bubble
    var chatBubble = document.createElement('div');
    chatBubble.id = `chat-bubble-${CONFIG.identifier}`;
    chatBubble.textContent = '💬';
    document.body.appendChild(chatBubble);

    // Create chat form container
    var chatFormContainer = document.createElement('div');
    chatFormContainer.id = `chat-form-container-${CONFIG.identifier}`;
    chatFormContainer.innerHTML = `
        <div id="chat-header-${CONFIG.identifier}">
            ${CONFIG.headerText}
            <button id="close-chat-${CONFIG.identifier}">×</button>
        </div>
        <div id="text-bubble-${CONFIG.identifier}">
            Enter your info below and any information regarding your vehicle choice and a ${CONFIG.clientName} representative will be right with you.
        </div>
        <form id="chat-form-${CONFIG.identifier}">
            <input type="text" id="name-${CONFIG.identifier}" name="name" placeholder="Your Name" required>
            <input type="email" id="email-${CONFIG.identifier}" name="email" placeholder="Your Email" required>
            <input type="tel" id="phone-${CONFIG.identifier}" name="phone" placeholder="Your Phone Number" required pattern="^\\+?[1-9]\\d{1,14}$" title="Please enter a valid phone number.">
            <input type="hidden" id="identifier-${CONFIG.identifier}" name="identifier" value="${CONFIG.identifier}">
            <textarea id="message-${CONFIG.identifier}" name="message" placeholder="Your Message or Vehicle Choice" required style="height: 100px;"></textarea>
            <button type="submit">Send Message 👉🏼</button>
            <div id="form-footer-${CONFIG.identifier}">
                By submitting, you agree to receive SMS or emails. Rates may apply.
            </div>
        </form>
        <div id="confirmation-bubble-${CONFIG.identifier}" style="display:none;">
            Thanks for your enquiry. One of our authorized ${CONFIG.clientName} representatives will be in touch any minute now. 🏎️
        </div>
        <div id="powered-by-${CONFIG.identifier}">
            Powered by <a href="https://visquanta.com/speed-to-lead" target="_blank">VisQuanta</a>
        </div>
    `;
    document.body.appendChild(chatFormContainer);

    // Event listeners and form submission logic
    chatBubble.addEventListener('click', () => {
        chatFormContainer.style.display = chatFormContainer.style.display === 'flex' ? 'none' : 'flex';
    });

    document.getElementById(`close-chat-${CONFIG.identifier}`).addEventListener('click', () => {
        chatFormContainer.style.display = 'none';
    });

    document.getElementById(`chat-form-${CONFIG.identifier}`).addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would typically send the form data to your server
        // For demonstration, we'll just show the confirmation message
        this.style.display = 'none';
        document.getElementById(`confirmation-bubble-${CONFIG.identifier}`).style.display = 'block';
    });
})();

