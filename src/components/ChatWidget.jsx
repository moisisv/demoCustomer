import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { ChatKit, useChatKit } from '@openai/chatkit-react';

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);

    const WORKFLOW_ID = import.meta.env.VITE_OPENAI_WORKFLOW_ID;
    const userId = 'anonymous';

    const { control, ref } = useChatKit({
        api: {
            async getClientSecret(currentClientSecret) {
                const apiKey = import.meta.env.VITE_OPENAI_API_SECRET_KEY;
                const res = await fetch('https://api.openai.com/v1/chatkit/sessions', {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${apiKey}`,
                        'Content-Type': 'application/json',
                        'OpenAI-Beta': 'chatkit_beta=v1',
                    },
                    body: JSON.stringify({
                        workflow: { id: WORKFLOW_ID },
                        user: userId,
                    }),
                });
                const data = await res.json();
                return data.client_secret;
            },
        },
        theme: { colorScheme: 'dark' },
        header: {
            // Add a right action using ChatKit header options
            rightAction: {
                icon: 'close',
                onClick: () => setIsOpen(false),
            },
        }, startScreen: {
            greeting: "Hi! Ask me something 😊"
        },
    });

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="chat-widget-container" style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            zIndex: 10000,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
        }}>
            {isOpen && (
                <div className="chat-window-wrapper glass" style={{
                    width: 'min(400px, 92vw)',
                    height: 'min(600px, 80vh)',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                    border: '1px solid rgba(255,255,255,0.1)',
                }}>
                    <ChatKit
                        control={control}
                        style={{ width: '100%', height: '100%' }}
                    />
                </div>
            )}

            <button
                onClick={toggleChat}
                style={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--accent)',
                    color: 'var(--primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    opacity: isOpen ? 0 : 1,
                    pointerEvents: isOpen ? 'none' : 'auto',
                    transform: isOpen ? 'scale(0.8)' : 'scale(1)',
                }}
                aria-label="Open Chat"
            >
                <MessageCircle size={28} />
            </button>
        </div>
    );
};

export default ChatWidget;
