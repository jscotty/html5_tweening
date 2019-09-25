import TweenScene from './tweenScene.js';
import Ease from '../helpers/ease.js';
import { sceneStates, uiAssets } from '../helpers/references.js';

export default class Cubic extends TweenScene {
    constructor(){
        super(sceneStates.cubic);
    }

    initialize(sceneManager){
        super.initialize(sceneManager, 3);
        this.tween(0, Ease.cubicIn);
        this.tween(1, Ease.cubicInOut);
        this.tween(2, Ease.cubicOut);
        
        this.addExample(uiAssets.easingExamples.sheet, uiAssets.easingExamples.cubicOut, 50, 250);
        this.addExample(uiAssets.easingExamples.sheet, uiAssets.easingExamples.cubicInOut, 50, 350);
        this.addExample(uiAssets.easingExamples.sheet, uiAssets.easingExamples.cubicIn, 50, 450);
    }

    update(delta){
        super.update(delta);
    }
    
    destroy(){
        super.destroy();
    }
}