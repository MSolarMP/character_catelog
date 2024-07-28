import React, { useState } from 'react';
import './character-card.css';

interface Ability {
    name: string;
    description: string;
    image: string;
}

interface CharacterCardProps {
    name: string;
    description: string;
    image: string;
    element: string;
    elementIcon: string;
    abilities: Ability[];
    details: string;
    card: string,
}

const CharacterCard: React.FC<CharacterCardProps> = ({ name, description, image, element, elementIcon, abilities,details,card }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [flipOption, setFlipOption] = useState('');

    const handleFlip = (option: string) => {
        setFlipOption(option);
        setIsFlipped(!isFlipped);
    };

    const handleFlipBack = () => {
        setIsFlipped(false);
    };

    const renderBackContent = () => {
        switch (flipOption) {
            case 'ABILITIES':
                return (
                    <div className="backContent">
                        <div className="abilityContainer">
                            {abilities.map((ability, index) => (
                                <div key={index}>
                                    <div className="abilityImageName">
                                        <img src={ability.image} alt={ability.name} style={{ height: '60px' }} />
                                        <div className="abilityDescription">
                                            <h3>{ability.name}</h3>
                                            <div>{ability.description}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'DETAILS':
                return (
                    <div className="backstoryContainer">
                        <div>
                            <div className="details">{details}</div>
                            <div className="characterCard">
                                <img src={card} alt={card} style={{ height: '470px' }} />
                            </div>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    const renderBackOptions = () => {
        return (
            <div className="options">
                <div onClick={handleFlipBack} style = {{ cursor: 'pointer' }}>
                    OVERVIEW
                </div>
                {flipOption === 'ABILITIES' && (
                    <div onClick={() => handleFlip('BACKSTORY')} style = {{ cursor: 'pointer' }}>
                        DETAILS
                    </div>
                )}
                {flipOption === 'DETAILS' && (
                    <div onClick={() => handleFlip('ABILITIES')} style = {{ cursor: 'pointer' }}>
                        ABILITIES
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className={`card russo-one-regular ${isFlipped ? 'flipped' : ''}`}>
            <div className="transparentSection"></div>
            <div className="contentSection">
                {!isFlipped ? (
                    <>
                        <div className="options">
                            <div onClick={() => handleFlip('ABILITIES')} style = {{ cursor: 'pointer' }}>
                                ABILITIES
                            </div>
                            <div onClick={() => handleFlip('DETAILS')} style = {{ cursor: 'pointer' }}>
                                DETAILS
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
                            <div style={{ paddingTop: '12px' }}>{element}</div>
                            <img src={elementIcon} alt={element} style={{ height: '60px' }} />
                        </div>
                    </>
                ) : (
                    <>
                        {renderBackOptions()}
                        {renderBackContent()}
                    </>
                )}
            </div>
            <div className="backSection">
                {renderBackOptions()}
                {renderBackContent()}
            </div>
        </div>
    );
};

export default CharacterCard;
