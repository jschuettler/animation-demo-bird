(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"vogel_test_atlas_", frames: [[0,278,379,167],[0,0,727,276]]}
];


// symbols:



(lib.CachedTexturedBitmap_1 = function() {
	this.initialize(ss["vogel_test_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_2 = function() {
	this.initialize(ss["vogel_test_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Flügel2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.CachedTexturedBitmap_1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Flügel2, new cjs.Rectangle(0,0,189.5,83.5), null);


(lib.Flügel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.Flügel2();
	this.instance.parent = this;
	this.instance.setTransform(47.2,2.4,1,1,0,0,0,47.2,2.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.4165},13).to({scaleY:1},11).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,189.5,83.5);


(lib.Vogel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Flügel
	this.instance = new lib.Flügel();
	this.instance.parent = this;
	this.instance.setTransform(167.35,41.25,1,1,0,0,0,48.8,3.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Vogel
	this.instance_1 = new lib.CachedTexturedBitmap_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Vogel, new cjs.Rectangle(0,0,363.5,138), null);


// stage content:
(lib.Unbenannt1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.Vogel();
	this.instance.parent = this;
	this.instance.setTransform(1283.95,211.9,1,1,0,0,0,181.7,69);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:181.8,x:1250.45,y:214.7},0).wait(1).to({x:1216.9,y:217.55},0).wait(1).to({x:1183.3,y:220.35},0).wait(1).to({x:1149.75,y:223.2},0).wait(1).to({x:1116.2,y:226},0).wait(1).to({x:1082.6,y:228.85},0).wait(1).to({x:1049.05,y:231.65},0).wait(1).to({x:1015.45,y:234.5},0).wait(1).to({x:981.9,y:237.35},0).wait(1).to({x:948.35,y:240.15},0).wait(1).to({x:914.75,y:243},0).wait(1).to({x:881.2,y:245.8},0).wait(1).to({x:847.65,y:248.65},0).wait(1).to({x:814.05,y:251.45},0).wait(1).to({x:780.5,y:254.3},0).wait(1).to({x:746.9,y:257.15},0).wait(1).to({x:713.35,y:259.95},0).wait(1).to({x:682.15,y:255.95},0).wait(1).to({x:650.95,y:251.95},0).wait(1).to({x:619.75,y:247.95},0).wait(1).to({x:588.55,y:243.95},0).wait(1).to({x:557.35,y:239.95},0).wait(1).to({x:526.15,y:235.95},0).wait(1).to({x:494.95,y:231.95},0).wait(1).to({x:463.75,y:227.95},0).wait(1).to({x:432.55,y:223.95},0).wait(1).to({x:401.35,y:219.95},0).wait(1).to({x:370.15,y:215.95},0).wait(1).to({x:339,y:211.95},0).wait(1).to({x:307.8,y:207.9},0).wait(1).to({x:276.6,y:203.9},0).wait(1).to({x:245.4,y:199.9},0).wait(1).to({x:214.2,y:195.9},0).wait(1).to({x:183,y:191.9},0).wait(1).to({x:151.85,y:187.9},0).wait(1).to({x:120.65,y:183.9},0).wait(1).to({x:89.45,y:179.9},0).wait(1).to({x:58.25,y:175.9},0).wait(1).to({x:27.05,y:171.9},0).wait(1).to({x:-4.15,y:167.9},0).wait(1).to({x:-35.35,y:163.9},0).wait(1).to({x:-66.55,y:159.9},0).wait(1).to({x:-97.75,y:155.9},0).wait(1).to({x:-128.95,y:151.9},0).wait(1).to({x:-160.15,y:147.9},0).wait(1).to({x:-191.35,y:143.9},0).wait(1).to({x:-222.55,y:139.9},0).wait(1).to({x:-253.75,y:135.9},0).wait(1).to({x:-284.95,y:131.9},0).wait(1).to({x:-316.15,y:127.9},0).wait(1).to({x:-347.35,y:123.9},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.1,374.9,1514.8999999999999,-45.89999999999998);
// library properties:
lib.properties = {
	id: 'EA8F5858145E43DC84C691A13BB46BBC',
	width: 960,
	height: 640,
	fps: 25,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/vogel_test_atlas_.png", id:"vogel_test_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['EA8F5858145E43DC84C691A13BB46BBC'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;