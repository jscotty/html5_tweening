import TweenScene from './tweenScene.js';
import Ease from '../helpers/ease.js';
import { sceneStates, uiAssets } from '../helpers/references.js';

export default class Exponential extends TweenScene {
    constructor(){
        super(sceneStates.expo);
    }

    initialize(sceneManager){
        super.initialize(sceneManager, 3);
        this.tween(0, Ease.expoIn);
        this.tween(1, Ease.expoInOut);
        this.tween(2, Ease.expoOut);
        
        this.addExample(uiAssets.easingExamples.sheet, uiAssets.easingExamples.expoOut, 50, 250);
        this.addExample(uiAssets.easingExamples.sheet, uiAssets.easingExamples.expoInOut, 50, 350);
        this.addExample(uiAssets.easingExamples.sheet, uiAssets.easingExamples.expoIn, 50, 450);
    }

    update(delta){
        super.update(delta);
    }
    
    destroy(){
        super.destroy();
    }
}