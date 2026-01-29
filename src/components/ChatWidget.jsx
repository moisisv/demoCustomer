import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { ChatKit, useChatKit } from '@openai/chatkit-react';

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Placeholder for OpenAI ChatKit Workflow ID
    const WORKFLOW_ID = 'YOUR_WORKFLOW_ID_HERE';

    const { control } = useChatKit({
        workflowId: WORKFLOW_ID,
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
            gap: '1rem'
        }}>
            {isOpen && (
                <div className="chat-window-wrapper glass" style={{
                    width: 'min(400px, 92vw)',
                    height: 'min(600px, 80vh)',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    marginBottom: '0.5rem',
                    background: 'rgba(15, 23, 42, 0.8)',
                    backdropFilter: 'blur(12px)',
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
                    transition: 'var(--transition)',
                    transform: isOpen ? 'rotate(90deg)' : 'none'
                }}
                aria-label="Toggle Chat"
            >
                {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
            </button>
        </div>
    );
};

export default ChatWidget;

