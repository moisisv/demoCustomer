import React from 'react';
import { MapPin, Bed, Bath, Square } from 'lucide-react';

const HouseCard = ({ image, title, location, price, beds, baths, area }) => {
    return (
        <div className="glass fade-in" style={{
            borderRadius: '4px',
            overflow: 'hidden',
            transition: 'var(--transition)'
        }}>
            <div style={{ position: 'relative', height: '300px' }}>
                <img src={image} alt={title} style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'var(--transition)'
                }} />
                <div style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    padding: '0.5rem 1rem',
                    backgroundColor: 'rgba(10, 10, 11, 0.8)',
                    color: 'var(--accent)',
                    fontWeight: '700',
                    fontSize: '1.1rem'
                }}>
                    ${price}
                </div>
            </div>
            <div style={{ padding: '2rem' }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--text-muted)',
                    fontSize: '0.9rem',
                    marginBottom: '0.5rem'
                }}>
                    <MapPin size={14} />
                    <span>{location}</span>
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>{title}</h3>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    borderTop: '1px solid var(--glass-border)',
                    paddingTop: '1.5rem'
                }}>
                    <div style={{ textAlign: 'center' }}>
                        <Bed size={18} style={{ color: 'var(--accent)' }} />
                        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{beds} Beds</p>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <Bath size={18} style={{ color: 'var(--accent)' }} />
                        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{baths} Baths</p>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <Square size={18} style={{ color: 'var(--accent)' }} />
                        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{area} sqft</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HouseCard;
