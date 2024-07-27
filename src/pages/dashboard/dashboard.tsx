import React from 'react';
import CharacterCard from "../../components/character-card/character-card";

const characters = [
    {
        name: 'LISA',
        description: 'She is an intellectual witch who can never get enough naps. As the Librarian of the Knights of Favonius, Lisa is smart in that she always knows exactly what to do with whatever troubles her.\n' +
            'As much as she loves her sleep, she still manages to keep everything under control in a calm, composed manner.',
        image: '/images/characters/lisa-genshin-half.png',
        element: 'Electro',
        elementIcon:'/images/icons/electro-icon.png',
    },
    {
        name: 'AMBER',
        description: 'A perky, straightforward girl, who is also the only Outrider of the Knights of Favonius. Her amazing mastery of the glider has made her a three-time winner of the Gliding Championship in Mondstadt. As a rising star within the Knights of Favonius, Amber is always ready for any challenging tasks.',
        image: '/images/characters/amber-genshin-half.png',
        element: 'Pyro',
        elementIcon:'/images/icons/pyro-icon.png',
    },
    {
        name: 'NOELLE',
        description: 'Like most of Mondstadt\'s young people, Noelle always dreamed of being a knight of Favonius when she grew up.\n' +
            'She may not have what it takes to be a knight just yet, but she is learning. Working as a maid at the Knights\' headquarters, she is constantly taking notes on what constitutes knightly speech, knightly conduct, and knightly customs.\n' +
            'She holds firm to her belief that one day she will join their ranks — she just needs to keep trying her hardest at everything she does.',
        image: '/images/characters/noelle-genshin-half.png',
        element: 'Geo',
        elementIcon:'/images/icons/geo-icon.png',
    },
];

const Dashboard: React.FC = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            {characters.map((character, index) => (
                <CharacterCard
                    key={index}
                    name={character.name}
                    description={character.description}
                    image={character.image}
                    element={character.element}
                    elementIcon={character.elementIcon}
                />
            ))}
        </div>
    );
};

export default Dashboard;
