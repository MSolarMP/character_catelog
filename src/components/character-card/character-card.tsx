import React from 'react';
import characterImage from '../../assets/images/characters/amber-genshin-half.png';
import './character-card.css'
import '../../../src/fonts/genshin.ttf'

const CharacterCard: React.FC = () => {
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
                <div className="characterNameInverse">AMBER</div>
                <div className="characterName">AMBER</div>
                <div className="description">
                    A perky, straightforward girl, who is also the only Outrider of the Knights of Favonius. Her amazing mastery of the glider has made her a three-time winner of the Gliding Championship in Mondstadt. As a rising star within the Knights of Favonius, Amber is always ready for any challenging tasks.
                </div>
                <div className="imageContainer">
                    <img src={characterImage} alt="Character" style={{ height: '500px' }} />
                </div>
            </div>
        </div>
    );
};

export default CharacterCard;
