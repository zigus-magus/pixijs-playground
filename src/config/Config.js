export const initialGameConfig = {
    width: 1200,
    height: 800,
    backgroundColor: 0x1099bb,
    position: { "x": 0, "y": 0 },
    antialiasing: true,
};

export const lobbySceneConfig = {
    elements: [
        {
            name: 'CardsButton',
            type: 'Button',
            text: 'Cards',
            width: 300,
            height: 60,
            position: { x: 450, y: 240 },
            texture: 'button_wide'
        },
        {
            name: 'TextsButton',
            type: 'Button',
            text: 'Texts',
            width: 300,
            height: 60,
            position: { x: 450, y: 360 },
            texture: 'button_wide'
        },
        {
            name: 'ParticlesButton',
            type: 'Button',
            text: 'Particles',
            width: 300,
            height: 60,
            position: {x: 450, y: 480, },
            texture: 'button_wide'
        }
    ]
};

export const CardsSceneConfig = {
    cardsQuantity: 144,
    leftDeckPosition: { x: 150, y: 300 },
    rightDeckPosition: { x: 1050, y: 300 },
    elements: [
        {
            name: 'leftDeckText',
            type: 'TextField',
            text: 'Left: 144',
            style: {
                fill: '#ffffff',
                fontSize: 24,
                fontFamily: 'Kenney',
            },
            position: { x: 80, y: 600 },
            anchor: { x: 0, y: 0.5 }
        },
        {
            name: 'rightDeckText',
            type: 'TextField',
            text: 'Right: 0',
            style: {
                fill: '#ffffff',
                fontSize: 24,
                fontFamily: 'Kenney',
            },
            position: { x: 990, y: 600 },
            anchor: { x: 0, y: 0.5 }
        },
        {
            name: 'HomeButton',
            type: 'Button',
            texture: 'button_narrow',
            width: 60,
            height: 60,
            position: { x: 1120, y: 20 },
            children: [
                {
                    name: 'HomeIcon',
                    type: 'SceneSprite',
                    texture: 'icon_home_black',
                    width: 40,
                    height: 40,
                    position: { x: 30, y: 30 },
                    anchor: { x: 0.5, y: 0.5 }
                }
            ]
        }
    ]
};

export const TextsSceneConfig = {
    elements: [
        {
            name: 'HomeButton',
            type: 'Button',
            texture: 'button_narrow',
            width: 60,
            height: 60,
            position: { x: 1120, y: 20 },
            children: [
                {
                    name: 'HomeIcon',
                    type: 'SceneSprite',
                    texture: 'icon_home_black',
                    width: 40,
                    height: 40,
                    position: { x: 30, y: 30 },
                    anchor: { x: 0.5, y: 0.5 }
                }
            ]
        }
    ]
}

export const ParticlesSceneConfig = {
    emitterConfig: {
        "alpha": {
            "start": 0.5,
            "end": 0.3
        },
        "scale": {
            "start": 2,
            "end": 2.5,
            "minimumScaleMultiplier": 1
        },
        "color": {
            "start": "#ffffff",
            "end": "#ffffff"
        },
        "speed": {
            "start": 5,
            "end": 10,
            "minimumSpeedMultiplier": 1
        },
        "acceleration": {
            "x": 0,
            "y": 0
        },
        "maxSpeed": 0,
        "startRotation": {
            "min": 0,
            "max": 0
        },
        "noRotation": false,
        "rotationSpeed": {
            "min": 0,
            "max": 0
        },
        "lifetime": {
            "min": 0.1,
            "max": 0.2
        },
        "blendMode": "normal",
        "frequency": 0.01,
        "emitterLifetime": -1,
        "maxParticles": 10,
        "pos": {
            "x": 0,
            "y": 0
        },
        "addAtBack": true,
        "spawnType": "rect",
        "spawnRect": {
            "x": 0,
            "y": 800,
            "w": 1200,
            "h": 10
        }
    },
    elements: [
        {
            name: 'ParticlesContainer',
            type: 'Container',
            position: { x: 0, y: 0 }
        },
        {
            name: 'HomeButton',
            type: 'Button',
            texture: 'button_narrow',
            width: 60,
            height: 60,
            position: { x: 1120, y: 20 },
            children: [
                {
                    name: 'HomeIcon',
                    type: 'SceneSprite',
                    texture: 'icon_home_black',
                    width: 40,
                    height: 40,
                    position: { x: 30, y: 30 },
                    anchor: { x: 0.5, y: 0.5 }
                }
            ]
        }
    ]
}

export const mixedObjectsConfig = {
    text: ["Hello", "World", "Price", "Discount"],
    emoji: ["😀", "😎", "🤑", "🤩", "💸", "💎"],
    patterns: [
        ['emoji', 'text', 'emoji'],
        ['emoji', 'emoji', 'emoji'],
        ['emoji', 'emoji', 'text'],
        ['text', 'emoji', 'text'],
        ['text', 'text', 'text'],
        ['text', 'text', 'emoji']
    ],
    colors: [
        0xff0000, 0xff0a00, 0xff1400, 0xff1e00, 0xff2800, 0xff3200, 0xff3c00, 0xff4600, 0xff5000, 0xff5a00,
        0xff6400, 0xff6e00, 0xff7800, 0xff8200, 0xff8c00, 0xff9600, 0xffa000, 0xffaa00, 0xffb400, 0xffbe00,
        0xffc800, 0xffd200, 0xffdc00, 0xffe600, 0xfff000, 0xfffa00, 0xfff400, 0xffee00, 0xffe800, 0xffe200
    ],
    defaultObject: {
        name: `textField_${Date.now()}`, // Unique name based on timestamp
        type: 'TextField',
        text: '',
        style: {
            fontFamily: 'Kenney',
            fontSize: 24,
            fill: 0xffffff,
        },
        position: { x: 0, y: 0 },
        anchor: { x: 0, y: 0 }
    }
}
