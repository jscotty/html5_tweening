import SceneManager from './scenes/sceneManager.js';
import Linear from './scenes/linear.js';
import Sinusoidal from './scenes/sinusoidal.js';
import Cubic from './scenes/cubic.js';
import Quintic from './scenes/quintic.js';
import Circular from './scenes/circular.js';
import Elastic from './scenes/elastic.js';
import Quadratic from './scenes/quadratic.js';
import Quartic from './scenes/quartic.js';
import Exponential from './scenes/exponential.js';
import Back from './scenes/back.js';
import Bounce from './scenes/bounce.js';
import MathHelper from './helpers/mathhelper.js';
import Tweener from './helpers/tweener.js';
import { sceneStates, uiAssets, characterAssets } from './helpers/references.js';

const width = 800;
const height = 600;

const renderer= new PIXI.Application({
    width: width, height: height, backgroundColor: 0xffffff, resolution: window.devicePixelRatio || 1,
});
document.body.appendChild(renderer.view);

Tweener.init();

PIXI.Loader.shared
.add(uiAssets.mediumPinkButtons.sheet)
.add(uiAssets.easingExamples.sheet)
.add(characterAssets.characterAnimation.sheet)
.load(function(){
    var sceneManager = new SceneManager(renderer);
    sceneManager.addScene(new Linear());
    sceneManager.addScene(new Sinusoidal());
    sceneManager.addScene(new Cubic());
    sceneManager.addScene(new Quintic());
    sceneManager.addScene(new Circular());
    sceneManager.addScene(new Elastic());
    sceneManager.addScene(new Quadratic());
    sceneManager.addScene(new Quartic());
    sceneManager.addScene(new Exponential());
    sceneManager.addScene(new Back());
    sceneManager.addScene(new Bounce());

    sceneManager.renderScene(sceneStates.linear);
 
    renderer.ticker.add(function update(delta){
        sceneManager.update(delta);
        Tweener.update(delta);
    });
});

var resize = () => {
    const scaleFactor = MathHelper.clamp(Math.min(window.innerWidth / width, window.innerHeight / height), 0, 1);
    var newWidth = width * scaleFactor;
    var newHeight = height * scaleFactor;
      
    renderer.view.style.width = newWidth + 'px';
    renderer.view.style.height = newHeight + 'px';
};
    
window.addEventListener('resize', resize, false);
resize();
