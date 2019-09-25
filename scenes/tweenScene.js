import Scene from './scene.js';
import Button from '../helpers/button.js';
import Player from '../characters/player.js';
import Tweener from '../helpers/tweener.js';
import { /*sceneStates,*/ uiAssets, characterAssets } from '../helpers/references.js';

const TWEENTO = 500;
const TWEENBACK = 175;

export default class TweenScene extends Scene {
    constructor(name){
        super(name);
        this.name = name;
    }

    initialize(sceneManager, playerAmount){
        this.playerAmount = playerAmount;
        this.players = [];
        this.tweens = [];
        this.examples = [];
        for (let i = 0; i < playerAmount; i++) {
            this.players.push(new Player(this, characterAssets.characterAnimation, TWEENBACK, 450 - (i * 100)));
        }
        
        this.nextButton = new Button(this, uiAssets.mediumPinkButtons);
        this.nextButton.setPosition(55, 30);
        this.nextButton.setText("next");
        this.nextButton.setOnPointerClick(function(){
            sceneManager.nextScene();
        });
        
        this.text = new PIXI.Text(this.name, {fontFamily : 'Arial', fontSize: 16, fill : 0x000000, align : 'center'});
        this.text.anchor.set(0.5);
        this.text.x = 55;
        this.text.y = 80;
        this.addChild(this.text);
        
        super.initialize();
    }
    
    tween(playerIndex, ease){
        var me = this;
        var targetX = this.players[playerIndex].x > TWEENTO - 1 ? TWEENBACK : TWEENTO;
        var tween = Tweener.startTweenX(this.players[playerIndex], targetX, 1, ease);
        tween.onComplete(function (){
            me.removeTween(tween);
            me.tween(playerIndex, ease);
        });
        this.tweens.push(tween);
    }
    
    addExample(sheet, image, x, y){
        var texture = PIXI.Loader.shared.resources[sheet].textures[image];
        var sprite = new PIXI.Sprite(texture);
        sprite.anchor.set(0.5);
        sprite.scale.set(0.5);
        sprite.x = x;
        sprite.y = y;
        this.examples.push(sprite);
        this.addChild(sprite);
    }
    
    removeTween(tween){
        var tweenIndex = this.tweens.indexOf(tween);
        if (tweenIndex > -1) {
            this.tweens.splice(tweenIndex, 1);
        }
    }

    update(delta){
        super.update(delta);
        for (let i = 0; i < this.players.length; i++) {
            this.players[i].update(delta);
        }
    }
    
    destroy(){
        super.destroy();
        this.nextButton.destroy();
        for (let i = 0; i < this.players.length; i++) {
            this.players[i].destroy();
        }
        for (let i = 0; i < this.tweens.length; i++) {
            this.tweens[i].destroy();
        }
        for(let i = 0; i < this.examples.length; i++){
            this.examples[i].destroy();
        }
        this.text.destroy();
    }
}