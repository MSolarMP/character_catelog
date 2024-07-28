import React from 'react';
import CharacterCard from "../../components/character-card/character-card";
import characters from '../../data/characterData';

const Dashboard: React.FC = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            {characters.map((character, index) => (
                <CharacterCard key={index} {...character} />
            ))}
        </div>
    );
};

export default Dashboard;
