import TweenScene from './tweenScene.js';
import Ease from '../helpers/ease.js';
import { sceneStates, uiAssets } from '../helpers/references.js';

export default class Elastic extends TweenScene {
    constructor(){
        super(sceneStates.elastic);
    }

    initialize(sceneManager){
        super.initialize(sceneManager, 3);
        this.tween(0, Ease.elasticIn);
        this.tween(1, Ease.elasticInOut);
        this.tween(2, Ease.elasticOut);
        
        this.addExample(uiAssets.easingExamples.sheet, uiAssets.easingExamples.elasticOut, 50, 250);
        this.addExample(uiAssets.easingExamples.sheet, uiAssets.easingExamples.elasticInOut, 50, 350);
        this.addExample(uiAssets.easingExamples.sheet, uiAssets.easingExamples.elasticIn, 50, 450);
    }

    update(delta){
        super.update(delta);
    }
    
    destroy(){
        super.destroy();
    }
}