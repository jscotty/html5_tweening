import TweenScene from './tweenScene.js';
import Ease from '../helpers/ease.js';
import { sceneStates, uiAssets } from '../helpers/references.js';

export default class Quintic extends TweenScene {
    constructor(){
        super(sceneStates.quint);
    }

    initialize(sceneManager){
        super.initialize(sceneManager, 3);
        this.tween(0, Ease.quintIn);
        this.tween(1, Ease.quintInOut);
        this.tween(2, Ease.quintOut);
        
        this.addExample(uiAssets.easingExamples.sheet, uiAssets.easingExamples.quintOut, 50, 250);
        this.addExample(uiAssets.easingExamples.sheet, uiAssets.easingExamples.quintInOut, 50, 350);
        this.addExample(uiAssets.easingExamples.sheet, uiAssets.easingExamples.quintIn, 50, 450);
    }

    update(delta){
        super.update(delta);
    }
    
    destroy(){
        super.destroy();
    }
}