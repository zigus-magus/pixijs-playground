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

export const lobbySceneConfig = {
    elements: [
        {
            name: 'CardsButton',
            type: 'Button',
            text: 'Cards',
            width: 300,
            height: 60,
            x: 400,
            y: 300,
            texture: 'button_wide'
        },
        {
            name: 'TextsButton',
            type: 'Button',
            text: 'Texts',
            width: 300,
            height: 60,
            x: 400,
            y: 400,
            texture: 'button_wide'
        },
        {
            name: 'ParticlesButton',
            type: 'Button',
            text: 'Particles',
            width: 300,
            height: 60,
            x: 400,
            y: 500,
            texture: 'button_wide'
        }
    ]
};

export const homeButtonConfig = {
    name: 'HomeButton',
    type: 'Button',
    x: 1100,
    y: 20,
    width: 60,
    height: 60,
    texture: 'button_narrow',
    children: [
        {
            name: 'HomeIcon',
            type: 'Sprite',
            texture: 'icon_home_black',
            width: 40,
            height: 40,
            x: 30,
            y: 30,
            anchor: { x: 0.5, y: 0.5 }
        }
    ]
};