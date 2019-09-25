import TweenScene from './tweenScene.js';
import Ease from '../helpers/ease.js';
import { sceneStates, uiAssets } from '../helpers/references.js';

export default class Quartic extends TweenScene {
    constructor(){
        super(sceneStates.quart);
    }

    initialize(sceneManager){
        super.initialize(sceneManager, 3);
        this.tween(0, Ease.quartIn);
        this.tween(1, Ease.quartInOut);
        this.tween(2, Ease.quartOut);
        
        this.addExample(uiAssets.easingExamples.sheet, uiAssets.easingExamples.quartOut, 50, 250);
        this.addExample(uiAssets.easingExamples.sheet, uiAssets.easingExamples.quartInOut, 50, 350);
        this.addExample(uiAssets.easingExamples.sheet, uiAssets.easingExamples.quartIn, 50, 450);
    }

    update(delta){
        super.update(delta);
    }
    
    destroy(){
        super.destroy();
    }
}