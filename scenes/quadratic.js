import TweenScene from './tweenScene.js';
import Ease from '../helpers/ease.js';
import { sceneStates, uiAssets } from '../helpers/references.js';

export default class Quadratic extends TweenScene {
    constructor(){
        super(sceneStates.quad);
    }

    initialize(sceneManager){
        super.initialize(sceneManager, 3);
        this.tween(0, Ease.quadIn);
        this.tween(1, Ease.quadInOut);
        this.tween(2, Ease.quadOut);
        
        this.addExample(uiAssets.easingExamples.sheet, uiAssets.easingExamples.quadOut, 50, 250);
        this.addExample(uiAssets.easingExamples.sheet, uiAssets.easingExamples.quadInOut, 50, 350);
        this.addExample(uiAssets.easingExamples.sheet, uiAssets.easingExamples.quadIn, 50, 450);
    }

    update(delta){
        super.update(delta);
    }
    
    destroy(){
        super.destroy();
    }
}