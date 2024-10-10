import {TextField} from "../components/TextField";
import {Button} from "../components/Button";
import {Sprite} from "../components/Sprite";


export class SceneBuilder {
    constructor(assetsLoader, addElementToScene) {
        this.assetsLoader = assetsLoader;
        this.addElementToScene = addElementToScene;

        this.builderConfig = {
            Button: Button,
            Sprite: Sprite,
            TextField: TextField,
        };
    }

    buildScene(config) {
        if (config.elements.length > 0) {
            config.elements.forEach((objectConfig) => this.addSceneObject(objectConfig));
        } else {
            console.error('No objects to build! Config:', config.elements);
        }
    }

    createSceneObject(config) {
        const ObjectType = this.builderConfig[config.type];
        if (ObjectType) {
            const texture = config.texture ? this.assetsLoader.getTexture(config.texture) : null;
            const object = new ObjectType(config, texture);

            if (config.children && config.children.length > 0) {
                config.children.forEach(childConfig => {
                    const child = this.createSceneObject(childConfig);
                    if (child) {
                        object.addChild(child);
                    }
                });
            }

            return object;
        } else {
            console.error(`Unknown object type: ${config.type}`);
        }
    }

    addSceneObject(objectConfig) {
        const object = this.createSceneObject(objectConfig);
        if (object) {
            this.addElementToScene(objectConfig.name, object);
        }
    }
}