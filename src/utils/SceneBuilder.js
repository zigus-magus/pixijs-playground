import {TextField} from "../components/TextField";
import {Button} from "../components/Button";


export class SceneBuilder {
    constructor(assetsLoader, addElementToScene) {
        this.assetsLoader = assetsLoader;
        this.addElementToScene = addElementToScene;

        this.builderConfig = {
            Button: Button,
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
            try {
                const texture = config.texture ? this.assetsLoader.getTexture(config.texture) : null;

                return new ObjectType(config, texture);
            } catch (error) {
                console.error(`Failed to create object: ${config.name}`, error);
            }
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