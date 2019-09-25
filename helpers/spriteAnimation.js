export default class SpriteAnimation{
    constructor(scene, sheetInformation, zIndex, completeCallback){
        this.textures = PIXI.Loader.shared.resources[sheetInformation.sheet].textures;
        this.frames = sheetInformation.frames;
        this.frameRate = sheetInformation.frameRate;
        this.completeCallback = completeCallback;
        this.zIndex = zIndex;
        this.isDestroyed = false;
        
        this.frameIndex = 0;
        this.seconds = 0;
        this.loop = true;
        this.animate = true;
        
        this.sprite = new PIXI.Sprite(this.textures[this.frames[this.frameIndex]]);
        this.sprite.anchor.set(0.5);
        this.sprite.zIndex = zIndex;
        scene.addChild(this.sprite);
    }
    
    get x(){
        if(this.sprite.transform == null){
            return 0;
        }
        return this.sprite.x;
    }
    
    get y(){
        if(this.sprite.transform == null){
            return 0;
        }
        return this.sprite.y;
    }
    
    get visible(){
        return this.sprite.visible;
    }
    
    get rotation(){
        return this.sprite.rotation;
    }

    set x(value){
        if(this.sprite.transform == null){
            return;
        }
        this.sprite.x = value;
    }

    set y(value){
        if(this.sprite.transform == null){
            return;
        }
        this.sprite.y = value;
    }
    
    set visible(value){
        this.sprite.visible = value;
    }
    
    set rotation(value){
        this.sprite.rotation = value;
    }
    
    setScale(x,y){
        this.sprite.scale.x = x;
        this.sprite.scale.y = y;
    }
    
    startAnimation(completeCallback){
        this.animate = true;
        this.frameIndex = 0;
        this.sprite.texture = this.textures[this.frames[this.frameIndex]];
        this.completeCallback = completeCallback;
    }
    
    update(delta){
        if(!this.animate || this.isDestroyed){
            return;
        }
        this.seconds += delta;
        
        if(this.seconds >= this.frameRate){
            this.sprite.texture = this.textures[this.frames[this.frameIndex]];
            this.seconds = 0;
            this.frameIndex++;
            if(this.frameIndex >= this.frames.length){
                this.frameIndex = 0;
                if(!this.loop){
                    this.animate = false;
                }
                
                if (this.isFunction(this.completeCallback)) {
                    this.completeCallback();
                }
            }
        }
    }
    
    isFunction(value){
        return value && {}.toString.call(value) === '[object Function]';
    }
    
    destroy(){
        this.isDestroyed = true;
        this.sprite.destroy();
    }
}