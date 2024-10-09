export const initialGameConfig = {
    width: 1200,
    height: 800,
    backgroundColor: 0x1099bb,
    position: { "x": 0, "y": 0 },
    antialiasing: true,
};

export const CardsSceneConfig = {
    elements: [
        {
            name: 'leftDeckText',
            type: 'TextField',
            text: 'Deck: 144',
            style: {
                fill: '#ffffff',
                fontSize: 24,
            },
            position: { x: 100, y: 200 }
        },
        {
            name: 'rightDeckText',
            type: 'TextField',
            text: 'Deck: 0',
            style: {
                fill: '#ffffff',
                fontSize: 24,
            },
            position: { x: 1000, y: 200 }
        }
    ]
}
