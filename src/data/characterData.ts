interface Ability {
    name: string;
    description: string;
    image: string;
}

interface Character {
    name: string;
    description: string;
    image: string;
    element: string;
    elementIcon: string;
    abilities: Ability[];
    details: string;
    card: string;
}

const characters: Character[] = [
    {
        name: 'LISA',
        description: 'She is an intellectual witch who can never get enough naps. As the Librarian of the Knights of Favonius, Lisa is smart in that she always knows exactly what to do with whatever troubles her.\n' +
            'As much as she loves her sleep, she still manages to keep everything under control in a calm, composed manner.',
        image: '/images/characters/lisa-genshin-half.png',
        element: 'Electro',
        elementIcon:'/images/icons/electro-icon.png',
        abilities: [
            {
                name: 'Lightning Touch',
                description: 'Channels lightning energy, dealing Electro damage to enemies in front of her.',
                image: '/images/talent-icons/lightning-touch.png'
            },
            {
                name: 'Violet Arc',
                description: 'Releases a powerful burst of Electro energy, damaging all nearby enemies.',
                image: '/images/talent-icons/violet-arc.png'
            },
            {
                name: 'Lightning Rose',
                description: 'Summons a rose that unleashes lightning attacks, dealing Electro damage to nearby enemies.',
                image: '/images/talent-icons/lightning-rose.png'
            },
        ],
        details: "When Lisa is angered, the surrounding air near her becomes electrified in part due to her Electro Vision. Depending on the severity of what has angered her, she can either be simply irritated or become extremely scary, the latter also causing her to dispense \"appropriate\" punishment.\nShe loves tea and thinks that afternoon tea is the most important part of her day. She sometimes takes tea with vegetable soup as she once used to enjoy this with Jean at the Good Hunter restaurant. She also suffers from cucurbitophobia, a fear of pumpkins.",
        card: "/images/characters/lisa-wish.png",
    },
    {
        name: 'AMBER',
        description: 'A perky, straightforward girl, who is also the only Outrider of the Knights of Favonius. Her amazing mastery of the glider has made her a three-time winner of the Gliding Championship in Mondstadt. As a rising star within the Knights of Favonius, Amber is always ready for any challenging tasks.',
        image: '/images/characters/amber-genshin-half.png',
        element: 'Pyro',
        elementIcon:'/images/icons/pyro-icon.png',
        abilities: [
            {
                name: 'Sharp Shooter',
                description: 'Performs up to 5 consecutive shots with a bow.',
                image: '/images/talent-icons/sharpshooter.png'
            },
            {
                name: 'Explosive Puppet',
                description: 'When destroyed or when its timer expires, Baron Bunny explodes, dealing AoE Pyro DMG.',
                image: '/images/talent-icons/explosive-puppet.png'
            },
            {
                name: 'Fiery Rain',
                description: 'Fires off a shower of arrows, dealing continuous AoE Pyro DMG.',
                image: '/images/talent-icons/fiery-rain.png'
            },
        ],
        details: "Outrider for the Knights of Favonius, Amber is described as \"a model for justice\" by Kaeya. She fulfills her duties as an Outrider diligently, even though she's the only one left in the said platoon. She abides by the rules, except for when using her wind glider, having her gliding license revoked numerous times.\n" +
            "\n" +
            "She has an outgoing personality, as one might find her talking to strangers as if they're acquaintances. She is passionate in everything she does, may it be helping the citizens or purging hilichurls. She wishes to be as great as her grandfather, a once loyal defender of Mondstadt. Even after he disappeared, she still defends Mondstadt in his place.",
        card: "/images/characters/amber-wish.png",
    },
    {
        name: 'NOELLE',
        description: 'Like most of Mondstadt\'s young people, Noelle always dreamed of being a knight of Favonius when she grew up.\n' +
            'She may not have what it takes to be a knight just yet, but she is learning. Working as a maid at the Knights\' headquarters, she is constantly taking notes on what constitutes knightly speech, knightly conduct, and knightly customs.\n' +
            'She holds firm to her belief that one day she will join their ranks — she just needs to keep trying her hardest at everything she does.',
        image: '/images/characters/noelle-genshin-half.png',
        element: 'Geo',
        elementIcon:'/images/icons/geo-icon.png',
        abilities: [
            {
                name: 'Favonius Bladework',
                description: 'Performs up to 4 consecutive strikes.',
                image: '/images/talent-icons/favonius-bladework.png'
            },
            {
                name: 'Breastplate',
                description: 'Summons protective stone armor, dealing Geo DMG to surrounding opponents and creating a shield.',
                image: '/images/talent-icons/breastplate.png'
            },
            {
                name: 'Sweeping Time',
                description: 'Gathering the strength of stone around her weapon, Noelle strikes the opponents surrounding her within a large AoE, dealing Geo DMG.',
                image: '/images/talent-icons/sweeping-time.png'
            },
        ],
        details: "She looks up to all of the Knights and asks them for advice on how to be a proper member when she officially joins, regardless of how much experience they may have, such as the rambunctious Klee. Her aspiration of joining them means that she will refuse any other invitations offered to her.[4]",
        card: "/images/characters/noelle-wish.png",
    },
];

export default characters;
