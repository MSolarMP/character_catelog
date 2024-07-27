import React from 'react';
import CharacterCard from "../../components/character-card/character-card";


const Dashboard: React.FC = () => {

    return (
        <div style={{ display: 'flex', flexDirection: 'column'}}>
            <CharacterCard></CharacterCard>
        </div>
    );
};

export default Dashboard;