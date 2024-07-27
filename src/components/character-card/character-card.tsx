import React from 'react';
import characterImage from '../../assets/images/characters/amber-genshin-half.png';
import './character-card.css'
import '../../../src/fonts/genshin.ttf'

const CharacterCard: React.FC = () => {
    return (
        <div className="card russo-one-regular">
            <div style={{ backgroundColor: 'transparent', width: '100%', height: '40px' }}></div>
            <div style={{ backgroundColor: 'rgb(20 19 19)', width: '100%', height: 'calc(100% - 40px)', position: 'relative' }}>
                <div className="options" style={{ display: "flex", flexDirection: "row", gap: "120px" }}>
                    <div>
                        CHARACTER
                    </div>
                    <div>
                        BACKSTORY
                    </div>
                </div>
                <div className="characterNameInverse">AMBER</div>
                <div className="characterName">AMBER</div>
                <div className="description">
                    A perky, straightforward girl, who is also the only Outrider of the Knights of Favonius. Her amazing mastery of the glider has made her a three-time winner of the Gliding Championship in Mondstadt. As a rising star within the Knights of Favonius, Amber is always ready for any challenging tasks.
                </div>
                <div style={{ position: 'absolute', bottom: '-3px', right: '-40px', zIndex: '10' }}>
                    <img src={characterImage} alt="Character" style={{ height: '500px' }} />
                </div>
            </div>
        </div>
    );
};

export default CharacterCard;
