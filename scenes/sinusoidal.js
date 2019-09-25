import TweenScene from './tweenScene.js';
import Ease from '../helpers/ease.js';
import { sceneStates, uiAssets } from '../helpers/references.js';

export default class Sinusoidal extends TweenScene {
    constructor(){
        super(sceneStates.sine);
    }

    initialize(sceneManager){
        super.initialize(sceneManager, 3);
        this.tween(0, Ease.sineIn);
        this.tween(1, Ease.sineInOut);
        this.tween(2, Ease.sineOut);
        
        this.addExample(uiAssets.easingExamples.sheet, uiAssets.easingExamples.sineOut, 50, 250);
        this.addExample(uiAssets.easingExamples.sheet, uiAssets.easingExamples.sineInOut, 50, 350);
        this.addExample(uiAssets.easingExamples.sheet, uiAssets.easingExamples.sineIn, 50, 450);
    }

    update(delta){
        super.update(delta);
    }
    
    destroy(){
        super.destroy();
    }
}