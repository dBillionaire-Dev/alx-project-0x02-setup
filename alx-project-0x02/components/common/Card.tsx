import React from 'react';
import { CardProps } from '@/interfaces';

const Card: React.FC<CardProps> = ({ title, content }) => {
    return (
        <div style={{
            border: '1px solid #ccc',
            padding: '1rem',
            borderRadius: '8px',
            marginBottom: '1rem',
        }}>
            <h2 style={{ margin: '0 0 0.5rem' }}>{title}</h2>
            <p>{content}</p>
        </div>
    );
};

export default Card;