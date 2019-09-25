import TweenScene from './tweenScene.js';
import Ease from '../helpers/ease.js';
import { sceneStates, uiAssets } from '../helpers/references.js';

export default class Bounce extends TweenScene {
    constructor(){
        super(sceneStates.bounce);
    }

    initialize(sceneManager){
        super.initialize(sceneManager, 3);
        this.tween(0, Ease.bounceIn);
        this.tween(1, Ease.bounceInOut);
        this.tween(2, Ease.bounceOut);
        
        this.addExample(uiAssets.easingExamples.sheet, uiAssets.easingExamples.bounceOut, 50, 250);
        this.addExample(uiAssets.easingExamples.sheet, uiAssets.easingExamples.bounceInOut, 50, 350);
        this.addExample(uiAssets.easingExamples.sheet, uiAssets.easingExamples.bounceIn, 50, 450);
    }

    update(delta){
        super.update(delta);
    }
    
    destroy(){
        super.destroy();
    }
}