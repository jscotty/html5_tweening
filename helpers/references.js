//----- states
export { sceneStates, uiAssets, characterAssets };
var sceneStates = {
    linear: 'linear',
    sine: 'sinusoidal',
    cubic: 'cubic',
    quint: 'quintic',
    circ: 'circular',
    elastic: 'elastic',
    quad: 'quadratic',
    quart: 'quartic',
    expo: 'exponential',
    back: 'back',
    bounce: 'bounce',
};

var uiAssets = {
    mediumPinkButtons: {
        sheet: '_assets/buttons.json',
        normal: 'medium_btn_normal.png',
        hover: 'medium_btn_hover.png',
        pressed: 'medium_btn_pressed.png',
    },
    
    easingExamples: {
        sheet: '_assets/easing.json',
        
        sineIn: 'sinein.png',
        sineOut: 'sineout.png',
        sineInOut: 'sineinout.png',
        
        cubicIn: 'cubicin.png',
        cubicOut: 'cubicout.png',
        cubicInOut: 'cubicinout.png',
        
        quintIn: 'quintin.png',
        quintOut: 'quintout.png',
        quintInOut: 'quintinout.png',
        
        circIn: 'circin.png',
        circOut: 'circout.png',
        circInOut: 'circinout.png',
        
        elasticIn: 'elasticin.png',
        elasticOut: 'elasticout.png',
        elasticInOut: 'elasticinout.png',
        
        quadIn: 'quadin.png',
        quadOut: 'quadout.png',
        quadInOut: 'quadinout.png',
        
        quartIn: 'quartin.png',
        quartOut: 'quartout.png',
        quartInOut: 'quartinout.png',
        
        expoIn: 'expoin.png',
        expoOut: 'expoout.png',
        expoInOut: 'expoinout.png',
        
        backIn: 'backin.png',
        backOut: 'backout.png',
        backInOut: 'backinout.png',
        
        bounceIn: 'bouncein.png',
        bounceOut: 'bounceout.png',
        bounceInOut: 'bounceinout.png',
    },
    
    smallPinkButtons: {
        sheet: '_assets/buttons.json',
        normal: 'small_btn_norm.png',
        hover: 'small_btn_hover.png',
        pressed: 'small_btn_pressed.png',
    },
};

var characterAssets = {
    characterAnimation: {
        sheet: '_assets/character.json',
        frames: [
            'character_1.png',
            'character_2.png',
            'character_3.png',
            'character_4.png',
            'character_5.png',
            'character_6.png',
            'character_7.png',
            'character_8.png',
            'character_9.png',
        ],
        frameRate: 10,
    }
};