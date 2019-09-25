import SpriteAnimation from '../helpers/spriteAnimation.js';
export default class PlayerBase{
    constructor(scene, playerAnimation, xPos, yPos){
        this.player = new SpriteAnimation(scene, playerAnimation, xPos, yPos);
        this.player.x = xPos;
        this.player.y = yPos;
        this.player.setScale(0.8, 0.8);
    }
    
    get x(){
        return this.player.x;
    }
    
    get y(){
        return this.player.y;
    }
    
    set x(value){
        this.player.x = value;
    }
    
    set y(value){
        this.player.y = value;
    }
    
    update(delta){
        this.player.update(delta);
    }
    
    destroy(){
        this.player.destroy();
    }
}