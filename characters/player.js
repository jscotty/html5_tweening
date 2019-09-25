import PlayerBase from './playerBase.js';
import Button from '../helpers/button.js';

export default class Player extends PlayerBase{
    constructor(scene, playerAnimation, xPos, yPos){
        super(scene, playerAnimation, xPos, yPos);
    }
    
    update(delta){
        super.update(delta);
    }
    
    destroy(){
        super.destroy();
    }
}