import TweenScene from './tweenScene.js';
import Ease from '../helpers/ease.js';
import { sceneStates, uiAssets } from '../helpers/references.js';

export default class Back extends TweenScene {
    constructor(){
        super(sceneStates.back);
    }

    initialize(sceneManager){
        super.initialize(sceneManager, 3);
        this.tween(0, Ease.backIn);
        this.tween(1, Ease.backInOut);
        this.tween(2, Ease.backOut);
        
        this.addExample(uiAssets.easingExamples.sheet, uiAssets.easingExamples.backOut, 50, 250);
        this.addExample(uiAssets.easingExamples.sheet, uiAssets.easingExamples.backInOut, 50, 350);
        this.addExample(uiAssets.easingExamples.sheet, uiAssets.easingExamples.backIn, 50, 450);
    }

    update(delta){
        super.update(delta);
    }
    
    destroy(){
        super.destroy();
    }
}