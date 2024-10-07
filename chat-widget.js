(function() {
    function loadChatWidget() {
        // Fetch the script tag that loaded this widget
        var scripts = document.getElementsByTagName('script');
        var myScript = scripts[scripts.length - 1];

        // Configuration with default values
        var CONFIG = {
            primaryColor: myScript.getAttribute('data-primary-color') || '#bb162b',
            secondaryColor: myScript.getAttribute('data-secondary-color') || '#d24c60',
            clientName: myScript.getAttribute('data-client-name') || 'Our',
            identifier: myScript.getAttribute('data-identifier') || 'default',
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
                max-height: 80vh;
                background-color: white;
                border-radius: 10px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
                z-index: 1000;
                flex-direction: column;
                overflow: hidden;
                font-family: 'Arial', sans-serif;
            }

            #chat-header-${CONFIG.identifier} {
                background: linear-gradient(to right, ${CONFIG.primaryColor}, ${CONFIG.secondaryColor});
                color: white;
                font-size: 16px;
                padding: 15px;
                border-radius: 10px 10px 0 0;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            #close-chat-${CONFIG.identifier} {
                background: none;
                border: none;
                color: white;
                font-size: 20px;
                cursor: pointer;
            }

            #chat-content-${CONFIG.identifier} {
                padding: 15px;
                overflow-y: auto;
            }

            #chat-form-${CONFIG.identifier} input,
            #chat-form-${CONFIG.identifier} textarea {
                width: 100%;
                padding: 8px;
                margin: 5px 0;
                border: 1px solid #ddd;
                border-radius: 4px;
                box-sizing: border-box;
            }

            #chat-form-${CONFIG.identifier} button {
                width: 100%;
                padding: 10px;
                background-color: ${CONFIG.primaryColor};
                color: white;
                border: none;
                border-radius: 4px;
                cursor: pointer;
                margin-top: 10px;
            }

            #chat-form-${CONFIG.identifier} button:hover {
                background-color: ${CONFIG.secondaryColor};
            }

            #powered-by-${CONFIG.identifier} {
                text-align: center;
                font-size: 12px;
                margin-top: 10px;
                color: #888;
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
            <div id="chat-content-${CONFIG.identifier}">
                <form id="chat-form-${CONFIG.identifier}">
                    <input type="text" name="name" placeholder="Your Name" required>
                    <input type="email" name="email" placeholder="Your Email" required>
                    <input type="tel" name="phone" placeholder="Your Phone Number" required pattern="^\\+?[1-9]\\d{1,14}$" title="Please enter a valid phone number.">
                    <textarea name="message" placeholder="Your Message or Vehicle Choice" required style="height: 100px;"></textarea>
                    <button type="submit">Send Message 👉</button>
                </form>
                <div id="form-footer-${CONFIG.identifier}" style="font-size: 12px; margin-top: 10px;">
                    By submitting, you agree to receive SMS or emails. Rates may apply.
                </div>
                <div id="confirmation-${CONFIG.identifier}" style="display:none; margin-top: 15px;">
                    Thanks for your enquiry. One of our authorized ${CONFIG.clientName} representatives will be in touch shortly. 🏎️
                </div>
            </div>
            <div id="powered-by-${CONFIG.identifier}">
                Powered by <a href="https://visquanta.com/speed-to-lead" target="_blank">VisQuanta</a>
            </div>
        `;
        document.body.appendChild(chatFormContainer);

        // Event listeners
        chatBubble.addEventListener('click', () => {
            chatFormContainer.style.display = chatFormContainer.style.display === 'flex' ? 'none' : 'flex';
        });

        document.getElementById(`close-chat-${CONFIG.identifier}`).addEventListener('click', () => {
            chatFormContainer.style.display = 'none';
        });

        document.getElementById(`chat-form-${CONFIG.identifier}`).addEventListener('submit', function(e) {
            e.preventDefault();
            this.style.display = 'none';
            document.getElementById(`confirmation-${CONFIG.identifier}`).style.display = 'block';
        });
    }

    // Error handling
    try {
        loadChatWidget();
    } catch (error) {
        console.error('Error loading chat widget:', error);
    }
})();
