import React from 'react';

const Hero = () => {
    return (
        <section id="hero" style={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            padding: 0,
            overflow: 'hidden'
        }}>
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1
            }}>
                <img
                    src="/hero-house.jpg"
                    alt="Luxury Villa"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: 'brightness(0.6)'
                    }}
                />
            </div>
            <div className="container" style={{
                textAlign: 'center',
                zIndex: 1
            }}>
                <h1 className="fade-in" style={{
                    fontSize: '5rem',
                    marginBottom: '1rem',
                    lineHeight: '1'
                }}>
                    Elevated Living <br />
                    <span style={{ color: 'var(--accent)' }}>Redefined.</span>
                </h1>
                <p className="fade-in" style={{
                    fontSize: '1.25rem',
                    color: 'var(--text-muted)',
                    maxWidth: '600px',
                    margin: '0 auto 2rem',
                    animationDelay: '0.2s'
                }}>
                    Unveiling a collection of architectural masterpieces, where luxury meets legacy. Find your sanctuary in the world's most prestigious locations.
                </p>
                <button className="fade-in" style={{
                    padding: '1.25rem 3rem',
                    backgroundColor: 'var(--accent)',
                    color: 'var(--primary)',
                    fontSize: '1rem',
                    fontWeight: '700',
                    borderRadius: '2px',
                    animationDelay: '0.4s'
                }}>
                    EXPLORE COLLECTION
                </button>
            </div>
        </section>
    );
};

export default Hero;
