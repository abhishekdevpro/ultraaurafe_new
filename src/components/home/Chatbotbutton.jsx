import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background: ${props => props.primary ? "#f66962" : "#ffffff"};
  color: ${props => props.primary ? "#ffffff" : "#f66962"};
  border: 2px solid #f66962;
  border-radius: 25px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.primary ? "#fc7f50" : "#f66962"};
    color: #ffffff;
  }
`;

const ChatBotButton = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  const handleAIAssist = () => {
    console.log("heloo");
    if (scriptLoaded) {
      // If the script is already loaded, trigger the chatbot
      if (window.chatbot) {
        window.chatbot.open(); // Adjust according to the chatbot service's API
      }
      return;
    }

    // Load the chatbot script
    const loadChatBotScript = () => {
      // Inject chatbot configuration
      const configScript = document.createElement('script');
      configScript.type = 'text/javascript';
      configScript.innerHTML = `
        window.chtlConfig = { chatbotId: "5594648998" };
      `;
      document.body.appendChild(configScript);

      // Inject chatbot embed script
      const script = document.createElement('script');
      script.id = 'chatling-embed-script';
      script.type = 'text/javascript';
      script.src = 'https://chatling.ai/js/embed.js';
      script.async = true;
      script.onload = () => {
        setScriptLoaded(true);
        // Initialize or open the chatbot if needed
        if (window.chatbot) {
          window.chatbot.open(); // Adjust according to the chatbot service's API
        }
      };
      script.onerror = (error) => {
        console.error('Failed to load chatbot script:', error);
      };
      document.body.appendChild(script);
    };

    loadChatBotScript();
  };

  useEffect(() => {
    // Cleanup the script if necessary
    return () => {
      const script = document.getElementById('chatling-embed-script');
      if (script) {
        document.body.removeChild(script);
      }
      setScriptLoaded(false);
    };
  }, []);

  return (
    <StyledButton primary onClick={handleAIAssist}>
      AI Assist
    </StyledButton>
  );
};

export default ChatBotButton;
