import React from 'react';
import './character-card.css';

interface CharacterCardProps {
    name: string;
    description: string;
    image: string;
    element: string;
    elementIcon: string;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ name, description, image, element,elementIcon }) => {
    return (
        <div className="card russo-one-regular">
            <div className="transparentSection"></div>
            <div className="contentSection">
                <div className="options">
                    <div>
                        CHARACTER
                    </div>
                    <div>
                        BACKSTORY
                    </div>
                </div>
                <div className="characterNameInverse">{name}</div>
                <div className="characterName">{name}</div>
                <div className="description">
                    {description}
                </div>
                <div className="imageContainer">
                    <img src={image} alt={name} style={{ height: '500px' }} />
                </div>

                <div className="iconContainer">
                    <div style = {{ paddingTop: '12px' }}>{element}</div>
                    <img src={elementIcon} alt={name} style={{ height: '60px' }} />
                </div>
            </div>
        </div>
    );
};

export default CharacterCard;
