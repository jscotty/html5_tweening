import TweenScene from './tweenScene.js';
import Ease from '../helpers/ease.js';
import { sceneStates, uiAssets } from '../helpers/references.js';

export default class Circular extends TweenScene {
    constructor(){
        super(sceneStates.circ);
    }

    initialize(sceneManager){
        super.initialize(sceneManager, 3);
        this.tween(0, Ease.circIn);
        this.tween(1, Ease.circInOut);
        this.tween(2, Ease.circOut);
        
        this.addExample(uiAssets.easingExamples.sheet, uiAssets.easingExamples.circOut, 50, 250);
        this.addExample(uiAssets.easingExamples.sheet, uiAssets.easingExamples.circInOut, 50, 350);
        this.addExample(uiAssets.easingExamples.sheet, uiAssets.easingExamples.circIn, 50, 450);
    }

    update(delta){
        super.update(delta);
    }
    
    destroy(){
        super.destroy();
    }
}