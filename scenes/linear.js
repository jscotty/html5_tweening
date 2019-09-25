import TweenScene from './tweenScene.js';
import Ease from '../helpers/ease.js';
import { sceneStates } from '../helpers/references.js';

export default class Linear extends TweenScene {
    constructor(){
        super(sceneStates.linear);
    }

    initialize(sceneManager){
        super.initialize(sceneManager, 1);
        this.tween(0, Ease.linear);
    }

    update(delta){
        super.update(delta);
    }
    
    destroy(){
        super.destroy();
    }
}