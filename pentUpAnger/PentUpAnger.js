(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
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


(lib.selected_box = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiGBfIAAi9IENAAIAAC9g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.selected_box, new cjs.Rectangle(-13.4,-9.5,27,19), null);


(lib.box_button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AkSDXIAAmtIIlAAIAAGtg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AkSDXIAAmtIIlAAIAAGtg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0000FF").s().p("AkSDXIAAmtIIlAAIAAGtg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.startgame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag4B+IAAj8IBtAAIAAAzIgsAAIAAAwIApAAIAAAvIgpAAIAAA4IAwAAIAAAyg");
	this.shape.setTransform(71.3,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAsB+IAAiqIgXCqIgoAAIgXilIgBClIg6AAIAAj8IBWAAIAIA2IAIBAIAPh2IBWAAIAAD8g");
	this.shape_1.setTransform(52.8,0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAPB+IgCgtIgYAAIgDAtIhEAAIAhj8IBeAAIAmD8gAgLAkIAWAAQgGgqgFg/QgIBHgDAig");
	this.shape_2.setTransform(33.2,0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgqB8QgPgIgHgMQgIgMgCgNQgBgNAAgaIAAhLQAAgjADgRQAEgQATgOQASgOAeAAQAcAAATAMQATAMAGAQQAFAQAAAfIAAALIhBAAIAAgWQAAgWgCgFQgCgGgHAAQgFAAgDAFQgCAFAAATIAAB4QAAARACAFQADAGAFAAQAHAAADgGQADgGAAgSIAAgeIgNAAIAAgmIBMAAIAACHIgpAAIgGgSQgHAMgKAGQgKAGgNAAQgRAAgOgIg");
	this.shape_3.setTransform(16.2,0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AggB+IAAjJIgnAAIAAgzICPAAIAAAzIgnAAIAADJg");
	this.shape_4.setTransform(-5.6,0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AANB+IAAhTQAAgVgDgFQgEgEgMAAIAABxIhDAAIAAj8IAvAAQAuABARADQAPADALAQQALAOAAAhQAAAdgIAKQgHAKgVADQATAEAHAHQAGAJACAHQACAGAAAfIAABCgAgGgaQAJAAAFgDQAEgDABgQIAAgPQgBgLgEgFQgEgDgKAAg");
	this.shape_5.setTransform(-21.6,0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAPB+IgCgtIgYAAIgDAtIhEAAIAhj8IBeAAIAmD8gAgLAkIAWAAQgGgqgFg/QgIBHgDAig");
	this.shape_6.setTransform(-38.3,0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AggB+IAAjJIgnAAIAAgzICPAAIAAAzIgnAAIAADJg");
	this.shape_7.setTransform(-53.9,0.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgqB6QgSgKgGgPQgGgQAAgcIAAgRIA9AAIAAAfQAAAOADAEQACAEAGAAQAGAAAEgFQADgFAAgKQAAgXgGgGQgHgIgXgQQgZgQgIgGQgIgIgFgNQgFgMAAgVQAAgdAHgNQAIgOAQgHQARgIAXAAQAZAAASAIQASAJAGANQAGAMAAAeIAAAKIg9AAIAAgSQAAgOgDgDQgCgEgEAAQgGAAgDAFQgEAFAAAJQAAANAEAHQADAGAPAJQArAaAMAQQALARAAAlQAAAbgGAMQgGAOgTAIQgSAJgYAAQgZAAgTgKg");
	this.shape_8.setTransform(-69.5,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},3).wait(1));

	// Layer 1
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("AriCUQibgfhMglQhLglAAgrIAAgBQAEhWEug9QEyg9GwAAQGxAAEyA9QDDAoBHAxQAoAcAAAfQAABXkyA9QkyA+mxAAQmwAAkyg+g");
	this.shape_9.setTransform(-0.9,1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ar2BTQjDgnhHgwQBNAkCaAfQEyA+GxAAQGwAAEyg+QEyg9AAhWQAAgggogcIAYANQAzAgAAAjQAABWkyA9QkyA+mwAAQmxAAkyg+g");
	this.shape_10.setTransform(4.5,9.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AwUBWQAAhWEyg9QEyg+GwAAQGxAAEyA+QEnA7ALBRIgZgNQhGgxjDgnQkyg9mxAAQmwAAkyA9QkvA8gDBWQgQgSAAgUg");
	this.shape_11.setTransform(-2.5,-11.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("ArRCeQjDgnhGgxQhLglAAgqIAAgCQADhWEvg9QEyg9GxAAQGwAAEyA9QDDAoBGAxIAZANQAyAgAAAiQAABXkyA9QkyA+mxAAQmwAAkyg+g");
	this.shape_12.setTransform(0.8,2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AraCoQibgfhMglQhLglAAgrIAAgCQgQgSAAgTQAAhXEyg9QEyg+GxAAQGwAAEyA+QEnA7ALBSIgZgNQApAcAAAfQAABXkyA9QkyA+mxAAQmwAAkyg+g");
	this.shape_13.setTransform(-1.7,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]}).to({state:[{t:this.shape_11},{t:this.shape_12}]},1).to({state:[{t:this.shape_13},{t:this.shape_10}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-107,-24,214,48);


(lib.YellowSilhouette = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFECAD").s().p("AhGBRQgdgKAAgQQAAgPAdgLIAWgGIgBhSIgBgGIABgFQgDgDABgCQgBgHAOgFQAOgFAUABQATgBAOAFQANAFAAAHQABACgCACIAAAGIABBXQAQACANAFQAdALAAAPQAAAQgdAKQgdALgqAAQgpAAgdgLg");
	this.shape.setTransform(10,9.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.3,20,18.5);


(lib.YellowPieceImg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AghALIgJgEIgCgCQgDgCABgDQgBgGAOgEQAOgFATAAQAUAAAOAFQANAEAAAGQABACgCADIgBAAQgDADgIADQgOAFgUAAQgTAAgOgFg");
	this.shape.setTransform(9.5,1.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFF00","#FFFF99","#FFFF33"],[0,0.639,1],-10,0,10,0).s().p("AhGAYQgdgKAAgPQAAgPAdgLIAWgGQgEAGAAAIQAAANAOAIQAPAJAVAAQAVAAAOgJQAPgIAAgNQAAgJgGgGQAQACANAFQAdALAAAPQAAAPgdAKQgdALgqAAQgpAAgdgLg");
	this.shape_1.setTransform(10,15.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFFF00","#FFFF99","#FFFF66"],[0,0.639,1],-4.6,-1.1,4.6,-1.1).s().p("AggAIQgJgFgDgHIgBgHIABgEIACABIAJAEQAOAFATAAQATAAAOgFQAIgCAEgEIAAAAIABAFIAAACQAAAKgOAHQgNAJgTAAQgSAAgOgJg");
	this.shape_2.setTransform(9.6,4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFFF00","#FFFF99","#FFFF33"],[0,0.639,1],-5,0,5.1,0).s().p("AgjA5QgPgJAAgNQAAgIAFgGIgBhRQADAHAKAGQANAIATAAQASAAAOgIQANgIAAgKIABBVQAGAHAAAIQAAANgPAJQgPAJgVAAQgUAAgPgJg");
	this.shape_3.setTransform(9.7,9.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.3,20,18.5);


(lib.useHighlight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhGBRQgdgKAAgQQAAgPAdgLIAWgGIgBhSIgBgGIABgFQgDgDABgCQgBgHAOgFQAOgFAUABQATgBAOAFQANAFAAAHQABACgCACIAAAGIABBXQAQACANAFQAdALAAAPQAAAQgdAKQgdALgqAAQgpAAgdgLg");
	this.shape.setTransform(10,9.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.useHighlight, new cjs.Rectangle(0,0.3,20,18.5), null);


(lib.RedSilhouette = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF8989").s().p("AhGBRQgdgKAAgQQAAgPAdgLIAWgGIgBhSIgBgGIABgFQgDgDABgCQgBgHAOgFQAOgFAUABQATgBAOAFQANAFAAAHQABACgCACIAAAGIABBXQAQACANAFQAdALAAAPQAAAQgdAKQgdALgqAAQgpAAgdgLg");
	this.shape.setTransform(10,9.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.3,20,18.5);


(lib.RedPieceImg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#330000","#FF0000","#CC0000"],[0,0.639,1],-10,0,10,0).s().p("AhGAYQgdgKAAgPQAAgPAdgLIAWgGQgEAGAAAIQAAANAOAIQAPAJAVAAQAVAAAOgJQAPgIAAgNQAAgJgGgGQAQACANAFQAdALAAAPQAAAPgdAKQgdALgqAAQgpAAgdgLg");
	this.shape.setTransform(10,15.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#330000","#FF0000","#CC0000"],[0,0.639,1],-4.6,-1.1,4.6,-1.1).s().p("AggAIQgJgFgDgHIgBgHIABgEIACABIAJAEQAOAFATAAQATAAAOgFQAIgCAEgEIAAAAIABAFIAAACQAAAKgOAHQgNAJgTAAQgSAAgOgJg");
	this.shape_1.setTransform(9.6,4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#330000","#FF0000","#CC0000"],[0,0.639,1],-5,0,5.1,0).s().p("AgjA5QgPgJAAgNQAAgIAFgGIgBhRQADAHAKAGQANAIATAAQASAAAOgIQANgIAAgKIABBVQAGAHAAAIQAAANgPAJQgPAJgVAAQgUAAgPgJg");
	this.shape_2.setTransform(9.7,9.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#660000").s().p("AghALIgJgEIgCgCQgDgCABgDQgBgGAOgEQAOgFATAAQAUAAAOAFQANAEAAAGQABACgCADIgBAAQgDADgIADQgOAFgUAAQgTAAgOgFg");
	this.shape_3.setTransform(9.5,1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.3,20,18.5);


(lib.PurpleSilhouette = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC66FF").s().p("AhGBRQgdgKAAgQQAAgPAdgLIAWgGIgBhSIgBgGIABgFQgDgDABgCQgBgHAOgFQAOgFAUABQATgBAOAFQANAFAAAHQABACgCACIAAAGIABBXQAQACANAFQAdALAAAPQAAAQgdAKQgdALgqAAQgpAAgdgLg");
	this.shape.setTransform(10,9.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.3,20,18.5);


(lib.PurplePieceImg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#660099").s().p("AghALIgJgEIgCgCQgDgCABgDQgBgGAOgEQAOgFATAAQAUAAAOAFQANAEAAAGQABACgCADIgBAAQgDADgIADQgOAFgUAAQgTAAgOgFg");
	this.shape.setTransform(9.5,1.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#660099","#952FF8","#7E18CA"],[0,0.639,1],-10,0,10,0).s().p("AhGAYQgdgKAAgPQAAgPAdgLIAWgGQgEAGAAAIQAAANAOAIQAPAJAVAAQAVAAAOgJQAPgIAAgNQAAgJgGgGQAQACANAFQAdALAAAPQAAAPgdAKQgdALgqAAQgpAAgdgLg");
	this.shape_1.setTransform(10,15.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#660099","#9731FB","#7C16C5"],[0,0.639,1],-5,0,5.1,0).s().p("AgjA5QgPgJAAgNQAAgIAFgGIgBhRQADAHAKAGQANAIATAAQASAAAOgIQANgIAAgKIABBVQAGAHAAAIQAAANgPAJQgPAJgVAAQgUAAgPgJg");
	this.shape_2.setTransform(9.7,9.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#660099","#9933FF","#7A14C1"],[0,0.639,1],-4.6,-1.1,4.6,-1.1).s().p("AggAIQgJgFgDgHIgBgHIABgEIACABIAJAEQAOAFATAAQATAAAOgFQAIgCAEgEIAAAAIABAFIAAACQAAAKgOAHQgNAJgTAAQgSAAgOgJg");
	this.shape_3.setTransform(9.6,4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.3,20,18.5);


(lib.GreenSilhouette = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#93FF93").s().p("AhGBRQgdgKAAgQQAAgPAdgLIAWgGIgBhSIgBgGIABgFQgDgDABgCQgBgHAOgFQAOgFAUABQATgBAOAFQANAFAAAHQABACgCACIAAAGIABBXQAQACANAFQAdALAAAPQAAAQgdAKQgdALgqAAQgpAAgdgLg");
	this.shape.setTransform(10,9.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.3,20,18.5);


(lib.GreenPieceImg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#003300","#00FF00","#009900"],[0,0.639,1],-10,0,10,0).s().p("AhGAYQgdgKAAgPQAAgPAdgLIAWgGQgEAGAAAIQAAANAOAIQAPAJAVAAQAVAAAOgJQAPgIAAgNQAAgJgGgGQAQACANAFQAdALAAAPQAAAPgdAKQgdALgqAAQgpAAgdgLg");
	this.shape.setTransform(10,15.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#003300","#00FF00","#009900"],[0,0.639,1],-4.6,-1.1,4.6,-1.1).s().p("AggAIQgJgFgDgHIgBgHIABgEIACABIAJAEQAOAFATAAQATAAAOgFQAIgCAEgEIAAAAIABAFIAAACQAAAKgOAHQgNAJgTAAQgSAAgOgJg");
	this.shape_1.setTransform(9.6,4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#003300","#00FF00","#009900"],[0,0.639,1],-5,0,5.1,0).s().p("AgjA5QgPgJAAgNQAAgIAFgGIgBhRQADAHAKAGQANAIATAAQASAAAOgIQANgIAAgKIABBVQAGAHAAAIQAAANgPAJQgPAJgVAAQgUAAgPgJg");
	this.shape_2.setTransform(9.7,9.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#003300").s().p("AghALIgJgEIgCgCQgDgCABgDQgBgGAOgEQAOgFATAAQAUAAAOAFQANAEAAAGQABACgCADIgBAAQgDADgIADQgOAFgUAAQgTAAgOgFg");
	this.shape_3.setTransform(9.5,1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.3,20,18.5);


(lib.BlueSilhouette = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9696FF").s().p("AhGBRQgdgKAAgQQAAgPAdgLIAWgGIgBhSIgBgGIABgFQgDgDABgCQgBgHAOgFQAOgFAUABQATgBAOAFQANAFAAAHQABACgCACIAAAGIABBXQAQACANAFQAdALAAAPQAAAQgdAKQgdALgqAAQgpAAgdgLg");
	this.shape.setTransform(10,9.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.3,20,18.5);


(lib.BluePieceImg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000033","#0000FF","#000066"],[0,0.639,1],-10,0,10,0).s().p("AhGAYQgdgKAAgPQAAgPAdgLIAWgGQgEAGAAAIQAAANAOAIQAPAJAVAAQAVAAAOgJQAPgIAAgNQAAgJgGgGQAQACANAFQAdALAAAPQAAAPgdAKQgdALgqAAQgpAAgdgLg");
	this.shape.setTransform(10,15.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#000033","#0000FF","#000066"],[0,0.639,1],-4.6,-1.1,4.6,-1.1).s().p("AggAIQgJgFgDgHIgBgHIABgEIACABIAJAEQAOAFATAAQATAAAOgFQAIgCAEgEIAAAAIABAFIAAACQAAAKgOAHQgNAJgTAAQgSAAgOgJg");
	this.shape_1.setTransform(9.6,4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#000033","#0000FF","#000066"],[0,0.639,1],-5,0,5.1,0).s().p("AgjA5QgPgJAAgNQAAgIAFgGIgBhRQADAHAKAGQANAIATAAQASAAAOgIQANgIAAgKIABBVQAGAHAAAIQAAANgPAJQgPAJgVAAQgUAAgPgJg");
	this.shape_2.setTransform(9.7,9.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000033").s().p("AghALIgJgEIgCgCQgDgCABgDQgBgGAOgEQAOgFATAAQAUAAAOAFQANAEAAAGQABACgCADIgBAAQgDADgIADQgOAFgUAAQgTAAgOgFg");
	this.shape_3.setTransform(9.5,1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.3,20,18.5);


(lib.InstructionsScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000033").s().p("Egx/AlgMAAAhK/MBj/AAAMAAABK/g");
	this.shape.setTransform(320,240);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.InstructionsScreen, new cjs.Rectangle(0,0,640,480), null);


(lib.Skip = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag0BfIAAi9IAyAAQASAAALADQALADAGAGQAGAGACAJQABAIAAASIAAARQAAASgDAHQgFAIgKAFQgKAEgQAAIgMAAIAABNgAgDgNIADAAQAGAAADgDQADgEAAgKIAAgQQAAgKgDgDQgDgDgJAAg");
	this.shape.setTransform(15.5,1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgYBfIAAi9IAxAAIAAC9g");
	this.shape_1.setTransform(5.7,1.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAJBfIgThSIAABSIgxAAIAAi9IAxAAIAABKIAVhKIAuAAIgcBWIAfBng");
	this.shape_2.setTransform(-3.6,1.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgfBbQgOgHgEgMQgFgLAAgWIAAgMIAuAAIAAAXQAAALACADQACADAEAAQAFAAACgEQACgEAAgIQABgQgFgGQgFgFgRgMQgTgMgFgFQgGgFgFgKQgEgKAAgPQAAgVAHgLQAFgKANgFQAMgGARAAQASAAAOAGQAOAGAEAKQAEAJAAAXIAAAHIguAAIAAgOQAAgJgBgDQgCgDgDAAQgEAAgDAEQgCADAAAIQAAAJACAFQADAFAKAHQAhATAJAMQAJAMAAAcQAAAVgFAJQgFAKgOAGQgNAHgSAAQgTAAgOgIg");
	this.shape_3.setTransform(-16.8,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},3).wait(1));

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EAEAEA").s().p("AnOA5QiaglgdgwQAuAhBwAbQC/AtENAAQEMAAC+gtQC/gtAAhAQAAgMgHgMQAfAXAAAaQAAA/i+AuQi/AtkMAAQkNAAi+gtg");
	this.shape_4.setTransform(2.4,8.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#959595").s().p("AqJA8QAAg/C+guQC/gtEMAAQENAAC+AtQC/AuAAA/QgngqiIgfQi/gukNAAQkLAAi/AuQi/AsABBAQgQgRAAgSg");
	this.shape_5.setTransform(-2,-9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCCCC").s().p("AnLBtQhwgagugiQgggXAAgaQAAg/C+gtQC/guEMAAQENAAC/AuQCIAgAnAqIAIALQAHAMAAALQAABAi+AtQi/AukNAAQkMAAi/gug");
	this.shape_6.setTransform(-0.4,0.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EAEAEA").s().p("Am+B6QiaglgdgwQgggXAAgZQAAhBC+gtQC/gtENgBQEMABC+AtQCIAhAnAqIAJAKQAfAXAAAZQAABBi+AtQi/AtkNABQkMgBi+gtg");
	this.shape_7.setTransform(0.8,1.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#959595").s().p("AnDB/QhxgbgtghQgggXAAgaQgQgRAAgRQAAhBC/gtQC+gtENgBQEMABC/AtQC+AtAABBIAJAKQAHALAAANQAAA/i/AuQi+AukNAAQkMAAi/gug");
	this.shape_8.setTransform(-1.2,-1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).to({state:[{t:this.shape_5},{t:this.shape_7}]},1).to({state:[{t:this.shape_8},{t:this.shape_4}]},1).to({state:[{t:this.shape_5},{t:this.shape_6},{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67,-18.5,134,37);


(lib.Selected_silhouette = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhBBJQgbgMAAgSQAAgRAbgMIAPgFIALg6QgCgFAAgFQAAgKALgIQAMgHAQAAQAQAAALAHQANAIAAAKIAKBDIASAGQAbAMAAARQAAASgbAMQgbAMgnAAQgmAAgbgMg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.2,-8.5,18.5,17);


(lib.Roll = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgmBfIAAi9IAvAAIAACXIAeAAIAAAmg");
	this.shape.setTransform(17.1,1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgmBfIAAi9IAvAAIAACXIAfAAIAAAmg");
	this.shape_1.setTransform(7.9,1.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgbBeQgLgFgIgKQgHgKgCgMQgBgMAAgdIAAgfQAAgdABgMQABgMAIgKQAHgJAMgGQAMgFAPAAQAPAAANAFQALAFAIAKQAIAKABAMQABALAAAeIAAAfIgBApQgCAMgGAJQgIAKgMAFQgMAGgQAAQgOAAgNgFgAgEg/QgCADAAAPIAABXQAAARABAEQABAEAEAAQAFAAABgFQABgEAAgRIAAhWQAAgNgBgEQgBgEgFAAQgCAAgCADg");
	this.shape_2.setTransform(-3.6,1.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAJBfIAAg/QAAgQgCgDQgCgEgKAAIAABWIgxAAIAAi9IAjAAQAiAAAMADQAMACAIAMQAIALAAAYQAAAWgFAIQgGAHgQACQAPADAEAFQAFAHACAFQABAFAAAXIAAAygAgFgTQAIAAADgDQADgCAAgMIAAgLQAAgJgDgDQgDgDgIAAg");
	this.shape_3.setTransform(-16.6,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},3).wait(1));

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EAEAEA").s().p("AnOA5QiaglgdgwQAuAhBwAbQC/AtENAAQEMAAC+gtQC/gtAAhAQAAgMgHgMQAfAXAAAaQAAA/i+AuQi/AtkMAAQkNAAi+gtg");
	this.shape_4.setTransform(2.4,8.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#959595").s().p("AqJA8QAAg/C+guQC/gtEMAAQENAAC+AtQC/AuAAA/QgngqiIgfQi/gukNAAQkLAAi/AuQi/AsABBAQgQgRAAgSg");
	this.shape_5.setTransform(-2,-9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCCCC").s().p("AnLBtQhwgagugiQgggXAAgaQAAg/C+gtQC/guEMAAQENAAC/AuQCIAgAnAqIAIALQAHAMAAALQAABAi+AtQi/AukNAAQkMAAi/gug");
	this.shape_6.setTransform(-0.4,0.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EAEAEA").s().p("Am+B6QiaglgdgwQgggXAAgZQAAhBC+gtQC/gtENgBQEMABC+AtQCIAhAnAqIAJAKQAfAXAAAZQAABBi+AtQi/AtkNABQkMgBi+gtg");
	this.shape_7.setTransform(0.8,1.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#959595").s().p("AnDB/QhxgbgtghQgggXAAgaQgQgRAAgRQAAhBC/gtQC+gtENgBQEMABC/AtQC+AtAABBIAJAKQAHALAAANQAAA/i/AuQi+AukNAAQkMAAi/gug");
	this.shape_8.setTransform(-1.2,-1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).to({state:[{t:this.shape_5},{t:this.shape_7}]},1).to({state:[{t:this.shape_8},{t:this.shape_4}]},1).to({state:[{t:this.shape_5},{t:this.shape_6},{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67,-18.5,134,37);


(lib.Highlight_silhouette = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AhBBIQgbgMAAgQQAAgRAbgNIAPgFIALg6QgDgFAAgFQAAgLAMgHQAMgHAQAAQAQAAAMAHQALAHABALIAKBDIARAGQAcANgBARQABAQgcAMQgbANgmAAQgmAAgbgNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.2,-8.5,18.5,17);


(lib.dice = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// value
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGBfIAAhlQAAgWgCgEQAAgFgFgCQgFgCgRAAIgEAAIAAgXQAigHARgXIAcAAIAAC9g");
	this.shape.setTransform(-0.1,-2.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag1BhIAAgbQAuhLAIgSQAJgSgBgKQAAgIgCgEQgDgDgEAAQgGAAgCAEQgCAEgBANIAAASIgqAAIAAgHQAAgQACgJQABgKAGgJQAHgIAKgFQAKgFAPAAQAcAAAOAOQAOAOAAAWQAAAQgIASQgIARgnA7IAzAAIAAAhg");
	this.shape_1.setTransform(0.4,-2.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgiBbQgNgIgEgLQgEgLAAgbIAAgPIAwAAIAAAfQAAANABADQACADAEAAQAFAAACgEQACgEAAgSIAAgNQAAgLgDgFQgCgFgEgCQgFgBgOgBIAAgaQARAAADgBQAEgCACgEQACgEAAgKIAAgKQAAgKgCgDQgCgDgFAAQgEAAgBADQgCADAAALIAAAQIgwAAIAAgQQAAgcANgJQAMgKAbAAQAhAAAMAOQAMANAAAXQAAAQgEAHQgEAHgLAGQAKAEAGAIQAFAHAAAfQAAAXgFAMQgFAMgNAHQgNAHgTAAQgWAAgNgIg");
	this.shape_2.setTransform(0.2,-2.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgCBfIAAgiIg3AAIAAggIAoh7IA+AAIAAB7IAOAAIAAAgIgOAAIAAAigAgWAdIAUAAIAAhQg");
	this.shape_3.setTransform(0.4,-2.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgeBbQgOgHgGgNQgGgNAAgaIAAgKIAwAAIAAAMQAAASABAIQABAHAHAAQAEAAACgCQACgCAAgCIAAgXIAAgmQAAgJgCgEQgCgEgFAAQgCAAgDACQgCACAAADQgBACAAAIIgvAAIAChgIBlAAIAAAfIg6AAIAAAgQAKgNARAAQAUAAAKALQAKALAAAeIAAAbQAAAUgCAKQgCAJgGAIQgHAIgLAEQgLAFgRAAQgRgBgOgFg");
	this.shape_4.setTransform(0.3,-2.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgcBdQgMgFgHgKQgHgKgBgLIgBgqIAAgZIABguQABgLAHgKQAHgKANgGQAMgEAPAAQAUAAANAGQANAGAFAMQAGAMAAASIgvAAIgBgRQAAgEgDgCQgCgCgEAAQgDAAgCACQgDACAAAEIAAAOIAAAeQADgIAGgDQAHgEALAAQANAAAKAHQAJAHADAKQADAJAAARIAAAOQAAAVgCAJQgBAKgHAJQgGAHgMAFQgMAFgPAAQgSgBgMgFgAgGABQgCAEAAAKIAAAiQAAANACADQACAEAEAAQADAAADgDQAEgDAAgNIAAgjQAAgKgDgEQgCgDgFAAQgEAAgCADg");
	this.shape_5.setTransform(0.4,-2.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgfBfIAhibIguAAIAAgiIBZAAIAAApIgeCUg");
	this.shape_6.setTransform(0.3,-2.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AghBcQgMgGgFgMQgGgLABgZQAAgRADgNQACgMAOgIQgJgEgEgJQgFgJABgPQAAgYANgMQAOgMAaAAQAfgBAMANQAMANAAAZQAAAPgEAHQgEAHgMAGQAKAFAGAHQAFAIAAAgQAAAXgEALQgEAKgNAIQgNAGgWABQgUAAgNgHgAgGALQgCAEAAALIAAAYQAAAMACAEQADADAEAAQAFAAACgDQABgEAAgMIAAgYQAAgLgCgEQgCgDgFAAQgEAAgCADgAgGhBQgBADAAAKIAAAOQAAAJACADQACADADAAQAFAAACgDQABgDAAgLIAAgMQAAgKgBgDQgCgDgFAAQgEAAgCADg");
	this.shape_7.setTransform(0.3,-2.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[]},1).to({state:[]},3).wait(6));

	// back
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4D4D4D").s().p("AkbhZIGpABICOABIkWCxg");
	this.shape_8.setTransform(0.4,21);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AkbDAIEhmAIEWGAIiOABg");
	this.shape_9.setTransform(0.4,-7.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4D4D4D").s().p("AkdiMIGyAAICJgFIAAACIkaEhg");
	this.shape_10.setTransform(0.6,15.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AkdCLIEhkVIEaEPIiJAGg");
	this.shape_11.setTransform(0.6,-12.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("AiNCQIACkcICQAAICJgFIAAACIkZEhg");
	this.shape_12.setTransform(15,15.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CCCCCC").s().p("AiRCLIEhkVIACADIgCESg");
	this.shape_13.setTransform(-13.4,-12.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#4D4D4D").s().p("AiQiOIEhAAIgCEdg");
	this.shape_14.setTransform(-13.5,15.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AiMCKIACkTIEXENIiJAGg");
	this.shape_15.setTransform(15.1,-12.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#666666").s().p("AiRgDIEhkVIACACIgEIvg");
	this.shape_16.setTransform(-13.4,1.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CCCCCC").s().p("AiNEXIAEovIEXENIAAADIkZEhg");
	this.shape_17.setTransform(15,1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8}]}).to({state:[{t:this.shape_11},{t:this.shape_10}]},9).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},3).to({state:[{t:this.shape_17},{t:this.shape_16}]},3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28,-26.5,56.8,56.5);


(lib.Continue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AHbCjQgWgJgMgRQgLgQgCgQQgCgTAAg3IAAjEIBWAAIAAD4QAAAVADAHQACAGAHAAQAJAAACgHQACgHAAgYIAAj0IBXAAIAADdQAAAmgDAPQgCAPgMARQgMAPgVAJQgTAIgbAAQgeAAgXgKgAoJCkQgWgIgMgSQgNgSgDgUQgCgVAAgzIAAg4QAAgyACgUQADgVAMgRQANgRAUgKQAWgJAcAAQAaAAAVAJQAWAJANARQANASACAUQACAUABAzIAAA4QAAAzgCAUQgDAVgMARQgNASgVAIQgWAKgbAAQgbAAgVgJgAnjhuQgEAEAAAaIAACaQAAAdACAHQADAHAJAAQAIAAADgIQACgIAAgdIAAiYQAAgXgCgGQgDgHgIAAQgHAAgDAGgAr9CfQgZgOgHgXQgJgZABgxIAAhgQAAgkABgRQADgTANgQQAMgRAVgKQAWgJAcAAQAmAAAZAPQAYAOAJAXQAHAVAAAvIAAAgIhWAAIAAg6QAAgagCgFQgEgHgJAAQgLAAgCAIQgEAHAAAaIAACZQAAAYAEAHQACAIAKAAQAKAAADgIQADgHAAgcIAAgpIBWAAIAAANQABAzgIAWQgHAVgZARQgZAQglAAQgmAAgYgOgAKQCmIAAlLICQAAIAABCIg5AAIAAA/IA2AAIAAA+Ig2AAIAABJIBAAAIAABDgAE9CmIgtiXIAACXIhIAAIAAlLIBIAAIAwCVIAAiVIBIAAIAAFLgABOCmIAAlLIBXAAIAAFLgAhNCmIAAkJIg0AAIAAhCIC8AAIAABCIgzAAIAAEJgAjgCmIgtiXIAACXIhJAAIAAlLIBJAAIAxCVIAAiVIBIAAIAAFLg");
	this.shape.setTransform(0.4,0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("Ar3BtQkIhIgqhfQBNA6CyAwQE6BVG7AAQG6AAE5hVQE6hTAAh5QAAgSgIgTQA6AuAAA0QAAB2k5BWQk6BUm6AAQm7AAk5hUg");
	this.shape_1.setTransform(9.4,15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("ArzDNQizgwhNg8QgsgigLgnQgDgMAAgMQAAh3E6hVQE5hVG6AAQG7AAE6BVQDEA1BKBDQAZAXAKAZQAIASAAASQAAB4k5BVQk6BVm7AAQm6AAk5hVg");
	this.shape_2.setTransform(4,-0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AwrBnQAAh3E5hVQE6hVG6AAQG7AAE5BVQEZBMAdBnQhJhDjFg0Qk5hVm7AAQm6AAk6BVQk5BUAAB4QAAAMADAMQgrgoAAgsg");
	this.shape_3.setTransform(-0.2,-17);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("AraDrQkIhIgqhgQgsgigLgmQgDgMAAgMQAAh4E5hVQE6hVG7AAQG6AAE5BVQDFA1BKBDQAYAXALAZQA6AtAAAzQAAB4k5BVQk6BVm7AAQm6AAk5hVg");
	this.shape_4.setTransform(6.5,2.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("ArfDrQizgwhNg8QgsgigLgnQgrgnAAgsQAAh4E5hVQE6hVG7AAQG6AAE6BVQEZBMAdBoQAZAXAKAZQAIARAAATQAAB4k5BVQk6BVm7AAQm6AAk5hVg");
	this.shape_5.setTransform(2,-3.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.shape_3},{t:this.shape_4}]},1).to({state:[{t:this.shape_5},{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-107,-35.7,223.1,70);


(lib.AboutScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000033").s().p("Egx/AlgMAAAhK/MBj/AAAMAAABK/g");
	this.shape.setTransform(320,240);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.AboutScreen, new cjs.Rectangle(0,0,640,480), null);


(lib.TriStateButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1));

	// Layer 1
	this.box1_movie = new lib.selected_box();
	this.box1_movie.name = "box1_movie";
	this.box1_movie.parent = this;
	this.box1_movie.setTransform(69.5,-0.5);

	this.box1_btn = new lib.box_button();
	this.box1_btn.name = "box1_btn";
	this.box1_btn.parent = this;
	this.box1_btn.setTransform(69,0,0.681,0.746);
	new cjs.ButtonHelper(this.box1_btn, 0, 1, 2, false, new lib.box_button(), 3);

	this.box3_movie = new lib.selected_box();
	this.box3_movie.name = "box3_movie";
	this.box3_movie.parent = this;
	this.box3_movie.setTransform(252.8,-0.1);

	this.box3_btn = new lib.box_button();
	this.box3_btn.name = "box3_btn";
	this.box3_btn.parent = this;
	this.box3_btn.setTransform(252.8,-0.1,0.718,0.767);
	new cjs.ButtonHelper(this.box3_btn, 0, 1, 2, false, new lib.box_button(), 3);

	this.box2_movie = new lib.selected_box();
	this.box2_movie.name = "box2_movie";
	this.box2_movie.parent = this;
	this.box2_movie.setTransform(160.8,-0.1);

	this.box2_btn = new lib.box_button();
	this.box2_btn.name = "box2_btn";
	this.box2_btn.parent = this;
	this.box2_btn.setTransform(162.1,0.1,0.691,0.733);
	new cjs.ButtonHelper(this.box2_btn, 0, 1, 2, false, new lib.box_button(), 3);

	this.label_txt = new cjs.Text("LABEL", "32px 'Times New Roman'");
	this.label_txt.name = "label_txt";
	this.label_txt.lineHeight = 37;
	this.label_txt.lineWidth = 296;
	this.label_txt.parent = this;
	this.label_txt.setTransform(-281,-18.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("ArFiuIAAFdImkAAIAAldgARqiuIAAFdImkAAIAAldgADciuIAAFdImjAAIAAldg");
	this.shape.setTransform(161,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgswADaIAAmuMAzAAAAIAAgEIJXAAIAAAEIdKAAIAAGugEAkPACxIGkAAIAAlcImkAAIAAFcgAWBCxIGkAAIAAlcImkAAIAAFcgAHgCxIGjAAIAAlcImjAAIAAFcgEAkPACxIAAlcIGkAAIAAFcgAWBCxIAAlcIGkAAIAAFcgAHgCxIAAlcIGjAAIAAFcgEAqzgCrgAclirgAODirg");
	this.shape_1.setTransform(0,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.label_txt},{t:this.box2_btn},{t:this.box2_movie},{t:this.box3_btn},{t:this.box3_movie},{t:this.box1_btn},{t:this.box1_movie}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-286.4,-22,573,43.5);


(lib.TitleScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		pent.initTitle(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(317.4,54.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgeAmIAAgDQAEAAACgDQACgCAAgKIAAgnIgBgIIgCgDQgCgBgDgBIAAgCIAdAAIAAAQQAHgLAFgEQAGgDAFAAQAEAAADACQACADAAAFQAAAFgCADQgDADgDAAQgEgBgEgCIgDgDIgCgBQAAAAgBABQgBAAAAAAQgBAAAAAAQgBABAAAAQgDADgCAFQgCAHAAAIIAAARIABAEIAAAGIACADIAGACIAAADg");
	this.shape_1.setTransform(599.8,103.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgXAaQgHgKAAgPQAAgRAKgLQAKgLAMABQAMAAAIAJQAIAIABATIgoAAQABANAHAIQAFAHAHAAQAFAAAEgDQADgDAFgGIADACQgGAMgIAFQgHAEgJAAQgPAAgJgMgAgEgcQgFAGAAANIAAACIAUAAQAAgMgBgFQgBgFgDgCQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBgBgBAAQgDAAgCAFg");
	this.shape_2.setTransform(592.7,103.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgHAvQgFgEgBgFQgBgCAAgMIAAgnIgJAAIAAgDQAKgGAHgIQAGgIAFgJIACAAIAAAbIARAAIAAAHIgRAAIAAAtIABAIIACADIADAAQAFAAAEgHIACABQgGAPgOAAQgGAAgFgDg");
	this.shape_3.setTransform(586.4,102.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgXAiQgFgEgBgFQgBgFAAgMIAAgcQAAgJgCgCQgBgCgFgBIAAgCIAdAAIAAAwQAAAIABACQAAABAAAAQABABAAAAQAAABABAAQAAABAAAAIAEABQACAAACgBQADgDAEgFIAAgmQABgJgCgCQgBgCgGgBIAAgCIAfAAIAAA3QAAAJABACQABACAFABIAAADIgeAAIAAgKQgEAGgFADQgFADgGgBQgHAAgFgDg");
	this.shape_4.setTransform(579.2,103.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgmA3IAAgDQAEAAACgDQACgCABgHIAAhNQgBgHgCgCQgCgCgEgBIAAgCIAeAAIAAAJQAEgFAEgDQAFgDAGAAQAJAAAGAEQAHAFADAKQAEAIgBALQABALgEAIQgEAJgGAFQgHAEgJAAQgFABgFgDQgDgCgFgFIAAAbIABAIIADADQABABAFAAIAAADgAgIghIAAAmQAHAJAHAAQAEAAACgDQAFgIAAgRQgBgSgEgIQgDgEgFAAQgHAAgFALg");
	this.shape_5.setTransform(570.1,105);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAYAmIAAgDQAFgBACgDQABgCAAgIIAAgeQAAgKgBgDQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBAAgBAAQgDAAgDACQgEADgDAFIAAAlQAAAJACABQABADAFABIAAADIglAAIAAgDQABAAABgBQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAgBAAAAQAAAAAAgBIABgJIAAgeIgBgNQAAAAAAgBQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBAAgBAAQgDAAgCABQgDADgFAGIAAAlQAAAJACACQACACAEABIAAADIglAAIAAgDQAEgBACgDQABgBAAgJIAAgnQAAgJgBgCQgBgCgFgBIAAgCIAdAAIAAAJQAGgGAFgDQAFgCAGAAQAHAAAFADQAEADACAGQAHgHAGgCQAGgDAFAAQAJAAAEADQAEADACAGQACAFAAAMIAAAcQAAAJACACQABACAEABIAAADg");
	this.shape_6.setTransform(559.3,103.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgZAbQgIgMAAgOQAAgPAJgMQAJgMAPABQAJgBAIAFQAJAFAEAJQAEAJAAAKQAAAPgIALQgJAMgRAAQgQAAgJgLgAgGgdQgDADgBAJIgBAYQAAAHACAIQAAAFADADQADADADABQADgBACgCQAEgDABgEQABgIAAgVQAAgOgBgFQgCgFgDgCQgCgBgDAAQgDAAgDADg");
	this.shape_7.setTransform(548.5,103.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgWAxQgNgHgHgNQgHgNAAgOQAAgOAIgOQAHgOAOgHQANgIAPAAQALABAMAFIAJACQABAAAAAAQABAAABAAQAAAAABgBQAAAAABgBIACgGIADAAIAAAlIgDAAQgDgOgKgHQgJgJgMAAQgKAAgHAHQgJAFgDAJQgFAMAAAOQAAAOADALQAEAMAIAGQAGAGAMAAQAKAAAJgFQAIgEAJgKIAAAJQgJAJgJAEQgKAFgNAAQgQgBgNgGg");
	this.shape_8.setTransform(538.6,101.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AACAmIAAgDQAFgBACgDQABgBAAgJIAAgfIgBgMIgDgDIgEgBQgFAAgGAKIAAAlQAAAJACACQABACAEABIAAADIglAAIAAgDQAFgBACgDQACgBgBgJIAAgnQABgJgCgCQgCgCgFgBIAAgCIAeAAIAAAJQAGgGAEgDQAFgCAGAAQAHAAAFADQAEAEACAGQACAFgBAMIAAAbQABAJABACQACACAEABIAAADg");
	this.shape_9.setTransform(500.2,104.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAIAjQgEgDgBgGQgMAMgLAAQgGAAgEgEQgEgEAAgGQAAgJAHgHQAHgGAXgKIAAgHIAAgLIgDgDQgCgCgDAAQgGgBgDADQAAAAgBABQAAAAAAABQAAAAgBABQAAAAAAAAIACAFQADADAAADQAAADgDADQgCADgFAAQgFAAgDgDQgEgDAAgEQAAgFAFgGQAEgFAIgDQAIgCAIAAQAKAAAGAEQAGAEACAGQABADAAAMIAAAbIABAGIABACIACABQACAAACgDIACACQgEAGgEACQgEADgFAAQgHAAgDgDgAgKAIQgDAEAAAEQAAAEADADQACACADAAQAEAAAEgEIAAgYQgIAEgFAHg");
	this.shape_10.setTransform(491.9,104.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAYAmIAAgDQAFAAACgEQABgCAAgIIAAgeQAAgJgBgEQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBAAgBAAQgDgBgDADQgEADgDAFIAAAlQAAAJACABQABAEAFAAIAAADIglAAIAAgDQABAAABgBQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAgBAAAAQAAAAAAgBIABgJIAAgeIgBgNQAAAAAAgBQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBAAgBAAQgCgBgDACQgDADgFAGIAAAlQAAAJACACQACACAEABIAAADIglAAIAAgDQAEgBACgDQACgBAAgJIAAgnQAAgJgCgCQgBgCgFgBIAAgCIAdAAIAAAJQAGgGAFgDQAGgCAFAAQAHAAAFACQAEAEADAGQAGgGAGgEQAFgCAGAAQAJgBAEAEQAEADACAFQACAGAAAMIAAAcQAAAJACACQABACAEABIAAADg");
	this.shape_11.setTransform(481.1,104.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgXAiQgFgEgBgFQgBgFAAgMIAAgcQAAgJgCgCQgBgCgFgBIAAgCIAdAAIAAAwQAAAIABADQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAIAEABQACAAACgBQADgDAEgGIAAglQABgJgCgCQgBgCgGgBIAAgCIAfAAIAAA3QAAAJABACQABACAFABIAAACIgeAAIAAgJQgEAGgFADQgFADgGgBQgHABgFgEg");
	this.shape_12.setTransform(469.9,104.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAEA1IAAgDIADAAQAFAAACgCQACAAACgDIABgKIAAghIgkAAIAAAhIAAAKIADADQAEACAEAAIADAAIAAADIg3AAIAAgDIAEAAQAEAAADgCQABAAAAAAQAAAAABgBQAAAAAAgBQABgBAAAAQABgCAAgIIAAhFQAAgIgBgCIgEgEQgCgBgEAAIgEAAIAAgDIA3AAIAAADIgDAAQgFAAgDABQgCABgBAEIAAAJIAAAeIAkAAIAAgeIgBgKIgEgEQgDgBgEAAIgDAAIAAgDIA3AAIAAADIgDAAQgFAAgDABQgCABgBAEQgBABAAAIIAABFQAAAIABACIADADQADACAFAAIADAAIAAADg");
	this.shape_13.setTransform(459.2,102.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgeAmIAAgDQAEAAACgDQACgCAAgKIAAgnIgBgIIgCgDQgCgBgDgBIAAgCIAdAAIAAAQQAHgMAFgDQAGgEAFABQAEAAADACQACADAAAFQAAAFgCADQgDACgDAAQgEAAgEgCIgDgDIgCgBQAAAAgBABQgBAAAAAAQgBAAAAAAQgBABAAAAQgDADgCAFQgCAIAAAHIAAARIABAFIAAAFIACAEIAGABIAAADg");
	this.shape_14.setTransform(415.6,104.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgXAaQgHgKAAgPQAAgRAKgLQAKgKAMAAQAMAAAIAJQAIAIABATIgoAAQABANAHAIQAFAHAHAAQAFAAAEgDQADgCAFgHIADACQgGALgIAGQgHAEgJAAQgPAAgJgMgAgEgcQgFAGAAANIAAACIAUAAQAAgMgBgFQgBgFgDgCQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBgBgBAAQgDAAgCAFg");
	this.shape_15.setTransform(408.4,104.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgeAyQgFgEAAgFQAAgEAEgDQACgDAEAAQAEAAACACQACADABAFIAAAEIADABQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAgBQAEgDAEgMIACgGIgXg1QgGgMgCgDQgDgDgEgBIAAgDIAmAAIAAADQgCAAgCACQgBAAAAAAQAAABgBAAQAAAAAAABQAAAAAAABQAAADAEAJIALAcIAJgWQAEgMABgEQgBgDgBgCQgCgCgFAAIAAgDIAZAAIAAADQgEAAgCADQgCACgGAOIgVA1QgGAVgFAEQgFAHgIAAQgGAAgEgEg");
	this.shape_16.setTransform(400.8,106.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAIAjQgEgDgBgGQgMAMgLAAQgGAAgEgEQgEgEAAgGQAAgJAHgHQAHgGAXgKIAAgHIAAgLIgDgDQgCgCgDAAQgGgBgDADQAAAAgBABQAAAAAAABQAAAAgBABQAAAAAAAAIACAFQADADAAADQAAADgDADQgCADgFAAQgFAAgDgDQgEgDAAgEQAAgFAFgGQAEgFAIgDQAIgCAIAAQAKAAAGAEQAGAEACAGQABADAAAMIAAAbIABAGIABACIACABQACAAACgDIACACQgEAGgEACQgEADgFAAQgHAAgDgDgAgKAIQgDAEAAAEQAAAEADADQACACADAAQAEAAAEgEIAAgYQgIAEgFAHg");
	this.shape_17.setTransform(393,104.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgTA1IAAgDQAFAAACgCQACgCAAgIIAAhLQAAgIgCgCQgCgBgFgBIAAgDIAeAAIAABaQAAAIACACQABACAGAAIAAADg");
	this.shape_18.setTransform(386.6,102.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgsA1IAAgDIAKgBQADgCABgCQABgCABgJIAAhDQgBgJgBgCQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBAAgBgBQgCgBgIAAIAAgDIAtAAQAXAAALAIQAKAJAAAMQgBAKgGAHQgHAHgLACQgHACgSAAIAAAdQAAAJACADIADADIAJABIAAADgAgFAAIAFAAQAIAAAGgFQAEgGAAgMQAAgMgEgGQgGgFgJAAIgEAAg");
	this.shape_19.setTransform(379.4,102.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgZAbQgIgLAAgPQAAgPAJgMQAJgLAPAAQAJgBAIAFQAJAFAEAJQAEAJAAAKQAAAQgIAKQgJAMgRAAQgQAAgJgLgAgGgdQgDADgBAJIgBAYQAAAHACAIQAAAFADADQADAEADAAQADAAACgDQAEgDABgEQABgIAAgVQAAgNgBgGQgCgEgDgDQgCgBgDAAQgDAAgDADg");
	this.shape_20.setTransform(366.6,104.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAmA2IhHhXIAABCQAAAJAFAEQAEADAFAAIADAAIAAADIgmAAIAAgDQAJAAADgEQAEgDAAgJIAAhJIgDgDQgDgEgDgCQgCgBgFAAIAAgDIAmAAIAzBBIAAgtQAAgKgDgDQgEgEgIAAIAAgDIAjAAIAAADIgJACQgDABgBADIgBALIAABXg");
	this.shape_21.setTransform(356.7,102.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFF00").s().p("AAMA4IAAgKQgFAGgFACQgDACgGAAQgMAAgJgJQgJgKABgQQgBgPAKgMQAKgMAPAAQAJAAAFAGIAAgOIAAgPQAAAAAAgBQgBgBAAAAQAAgBAAAAQgBAAAAAAIgDgBIgFABIgBgDIAVgIIAEAAIAABRIAAAQQAAAAAAABQAAABABAAQAAAAAAABQABAAAAAAIADABIAGgBIABADIgWAIgAgPgHQgIAHAAAQQAAAQAIAHQAGAJAJAAQAGAAAGgHIAAglQAAgEgCgFQgDgEgEgCQgDgDgDAAQgHAAgFAHg");
	this.shape_22.setTransform(547.4,470.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFF00").s().p("AgUAcQgJgKAAgRQAAgRAJgLQAKgKANAAQAMAAAIAIQAHAIAAANIgwAAQAAAPAIAJQAHAJAKAAQAHAAAFgEQAFgEAEgJIACACQgBAKgIAJQgIAJgMAAQgMAAgJgKgAgMgaQgFAFgBAJIAgAAQAAgHgCgDQgCgEgEgDQgDgCgEAAQgGAAgFAFg");
	this.shape_23.setTransform(539.6,472.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFF00").s().p("AAAAlIgZg7IgEgGIgDgEIgGgBIAAgDIAiAAIAAADIgCAAQgDAAgCACQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAABIACAGIAQAnIAQgoIACgHIgBgCQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAAAAAAAIgGgBIAAgDIAYAAIAAADQgEAAgCACQgDACgCAGIgZA8g");
	this.shape_24.setTransform(532,472.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFF00").s().p("AgZAlIAAgDQAGAAACgCQABAAAAgBQABAAAAAAQAAgBAAgBQABAAAAgBIAAgHIAAgbIAAgPQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQgBAAAAAAIgGACIgBgDIAWgJIADAAIAAAQQAIgQAKAAQAEAAADADQADACAAAEQAAADgCACQgDACgCAAQgDAAgDgDIgFgCIgEABQgDADgDAIIAAAhQAAAGABADIADAEIAIABIAAADg");
	this.shape_25.setTransform(525.4,472.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFF00").s().p("AgUAcQgJgKAAgRQAAgRAJgLQAKgKANAAQAMAAAIAIQAHAIAAANIgwAAQAAAPAIAJQAHAJAKAAQAHAAAFgEQAFgEAEgJIACACQgBAKgIAJQgIAJgMAAQgMAAgJgKgAgMgaQgFAFgBAJIAgAAQAAgHgCgDQgCgEgEgDQgDgCgEAAQgGAAgFAFg");
	this.shape_26.setTransform(519.2,472.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFF00").s().p("AgOAkIgEgBQAAAAgBAAQAAAAAAAAQgBAAAAABQAAAAgBABIgCAAIAAgaIACAAQADALAGAGQAGAFAHAAQAFAAADgDQAEgDAAgEQAAgGgEgEQgEgDgKgGQgLgEgEgFQgDgEAAgHQAAgJAGgGQAGgGAJAAIAKACIAFABIACAAIABgDIADAAIAAAYIgDAAQgDgLgEgEQgFgEgGAAQgFAAgEADQgDACAAAEQAAAEACADQADAEAHADIALAGQAPAHAAAMQAAAKgHAGQgHAGgKAAQgFAAgJgCg");
	this.shape_27.setTransform(512.5,472.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFF00").s().p("AgUAcQgJgKAAgRQAAgRAJgLQAKgKANAAQAMAAAIAIQAHAIAAANIgwAAQAAAPAIAJQAHAJAKAAQAHAAAFgEQAFgEAEgJIACACQgBAKgIAJQgIAJgMAAQgMAAgJgKgAgMgaQgFAFgBAJIAgAAQAAgHgCgDQgCgEgEgDQgDgCgEAAQgGAAgFAFg");
	this.shape_28.setTransform(505.8,472.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFF00").s().p("AAZA1IgjgyIgHAAIgCAAIgCAAIAAAgQAAAJACADQADADAGAAIAEAAIAAADIguAAIAAgDIAEAAQAHAAADgEQACgDAAgIIAAhEQAAgKgCgCQgEgEgGAAIgEAAIAAgDIAnAAQAQAAAIACQAIADAGAGQAFAHAAAKQAAAJgGAIQgHAGgNADIAWAeQAHALAGADQAFADAJABIAAADgAgVgsIAAAsIACAAIACAAQAPAAAHgHQAIgGAAgKQAAgKgHgHQgGgGgJAAIgMACg");
	this.shape_29.setTransform(497.1,470.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFF00").s().p("AgOAkIgEgBQAAAAgBAAQAAAAgBAAQAAAAAAABQgBAAAAABIgCAAIAAgaIACAAQADALAGAGQAGAFAHAAQAFAAADgDQAEgDAAgEQAAgGgEgEQgEgDgKgGQgLgEgEgFQgDgEAAgHQAAgJAGgGQAGgGAJAAIAKACIAFABIACAAIABgDIADAAIAAAYIgDAAQgDgLgEgEQgFgEgGAAQgFAAgEADQgDACAAAEQAAAEACADQADAEAHADIALAGQAPAHAAAMQAAAKgHAGQgHAGgKAAQgFAAgJgCg");
	this.shape_30.setTransform(484.5,472.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFF00").s().p("AgDAuQgDgCgCgDQgBgEAAgIIAAgvIgLAAIAAgDQAEgBAEgFQAFgEAEgFIADgLIADAAIAAAYIARAAIAAAFIgRAAIAAAtQAAAIACABQACADADAAIAFgBQACgCABgDIAEAAQgDAHgFAEQgFAEgFAAQgEAAgDgCg");
	this.shape_31.setTransform(479.2,471.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFF00").s().p("AAEA3IAAgCIABAAQAFgBADgBQACgCAAgDIAAgHIAAgZQABgMgCgCQgBgEgCgCQgDgBgEAAQgEgBgDACQgEADgGAEIAAAmQAAAIABABQAAABAAAAQABABAAAAQAAABABAAQAAAAABABIAHABIAAACIgjAAIAAgCQAFgBACgBQABAAAAAAQABgBAAAAQAAAAAAgBQABAAAAgBQABgCAAgHIAAhAIgBgPQAAAAAAgBQAAgBAAAAQgBgBAAAAQAAAAgBAAIgCgBIgGABIgBgDIAVgIIAEAAIAAA0QAIgKAFgDQAFgCAFAAQAGAAAFADQAEAEACAGQACAFAAANIAAAZIABAJQAAABAAAAQAAABAAAAQABABAAAAQAAAAABABIAHABIAAACg");
	this.shape_32.setTransform(472.9,470.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFF00").s().p("AgeAvQgFgEAAgEIABgDIAFgJIAIgIIgFgEQgBgBAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgDADgDQACgEAIgGQgHgDgDgGQgDgFgBgHQAAgLAIgHQAJgIAMAAQAJAAAIAFIAPAAIAEAAIABABIAAACIAAADIgBAAIgEABIgJAAQAEAGAAAIQAAAKgHAIQgJAGgLABIgLgCIgEAEIgCAEIACADIAEACIALAAQAQAAAEABQAHABAFAFQAEAEAAAGQAAAJgIAIQgNALgSAAQgPAAgLgHgAgWAbQgCADAAAEQAAADAEADQAJAEANABQAOAAAHgGQAGgFABgFQAAgEgFgBQgDgDgMAAQgRAAgJgCQgFAEgBAEgAgMgtQgEAFAAAJQAAAMAFAIQAEAEAHAAQAEAAAFgEQADgFAAgJQAAgMgFgHQgEgGgGAAQgFAAgEAFg");
	this.shape_33.setTransform(465,473.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFF00").s().p("AgPA3IAAgCIAHgBIACgEIABgJIAAgbIAAgOIgCgEIgEgBIgEABIgCgCIAVgJIADAAIAAA4IABAJIADAEIAHABIAAACgAgEgpQgDgCABgDQgBgEADgCQACgDADABQADgBACADQACACABAEQgBADgCACQgCADgDAAQgDAAgCgDg");
	this.shape_34.setTransform(458.7,470.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFF00").s().p("AAZA1IgjgyIgHAAIgCAAIgCAAIAAAgQAAAJACADQADADAGAAIAEAAIAAADIguAAIAAgDIAEAAQAHAAADgEQACgDAAgIIAAhEQAAgKgCgCQgEgEgGAAIgEAAIAAgDIAnAAQAQAAAIACQAIADAGAGQAFAHAAAKQAAAJgGAIQgHAGgNADIAWAeQAHALAGADQAFADAJABIAAADgAgVgsIAAAsIACAAIACAAQAPAAAHgHQAIgGAAgKQAAgKgHgHQgGgGgJAAIgMACg");
	this.shape_35.setTransform(451.3,470.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFF00").s().p("AgQA3IAAgCIAHgBIACgEIABgJIAAhAIAAgPIgCgDIgCgBIgGABIgBgDIAUgIIAEAAIAABdQAAAHABACQAAABAAAAQAAABABAAQAAABABAAQAAAAAAABIAIABIAAACg");
	this.shape_36.setTransform(439.6,470.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFF00").s().p("AgQA3IAAgCIAHgBIADgEIABgJIAAhAIgBgPIgBgDIgEgBIgFABIgBgDIAUgIIADAAIAABdQAAAHABACQABABAAAAQAAABABAAQAAABABAAQAAAAABABIAHABIAAACg");
	this.shape_37.setTransform(435.2,470.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFF00").s().p("AAOA2IAAgDQAHAAACgCQAAAAABgBQAAAAAAgBQABAAAAgBQAAgBAAAAQAAgEgDgHIgHgPIgoAAIgHARQgCAGAAADQAAAAAAABQAAABAAAAQAAABABAAQAAABABAAQACACAIAAIAAADIghAAIAAgDQAGgBACgCQAEgDAFgMIAlhWIACAAIAlBXQAEALAEADQAEADAGAAIAAADgAgWANIAjAAIgRgqg");
	this.shape_38.setTransform(427.1,470.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFF00").s().p("AgFAGQgCgDgBgDQABgDACgCQACgDADAAQAEAAACADQACACABADQgBADgCADQgCACgEAAQgDAAgCgCg");
	this.shape_39.setTransform(415.3,475.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFF00").s().p("AAEAlIAAgDIABAAQAFAAACgCQACgBABgDIAAgHIAAgdQAAgJgCgFQgDgEgGAAQgIAAgJAKIAAAlIAAAJIAEADQABABAGAAIAAADIgjAAIAAgDIABAAQAGAAACgDQACgDAAgHIAAgaIgBgQIgCgEIgDgBIgFACIgBgDIAVgJIAEAAIAAAPQAMgPALAAQAFAAAFADQAEADACAHQACAEAAAKIAAAeIABAJIADADQACABAFAAIAAADg");
	this.shape_40.setTransform(405.3,472.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFF00").s().p("AAKAjQgCgDAAgHIgNALQgFACgFAAQgHAAgEgGQgGgEAAgJQABgFACgEQAEgGAHgEQAIgDASgIIAAgCQAAgLgEgEQgDgEgGAAQgFAAgDADQgCACAAAEIAAAEQgBAEgBACQgCACgDAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAAAgBQgCgCgBgEQABgGAGgGQAHgGAMAAQAJABAGADQAFACACAFQABADAAALIAAAXIABAMIABAEIACABIADgBIAFgGIAAAEQgIAMgIABQgEgBgCgCgAgGAAQgHAEgCADQgDAEAAAEQAAAGADAEQAEADAEABQAGgBAJgHIAAgaIgOAFg");
	this.shape_41.setTransform(398,472.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFF00").s().p("AAEA3IAAgCIACAAQAEgBACgBQADgCAAgDIABgHIAAgZQgBgMgBgCQgBgEgDgCQgDgBgDAAQgEgBgDACQgEADgGAEIAAAmQAAAIABABQAAABAAAAQABABAAAAQAAABABAAQAAAAABABIAIABIAAACIgkAAIAAgCQAFgBADgBQAAAAAAAAQABgBAAAAQAAAAAAgBQABAAAAgBQABgCAAgHIAAhAIgBgPQAAAAAAgBQAAgBAAAAQAAgBgBAAQAAAAAAAAIgEgBIgFABIgBgDIAVgIIAEAAIAAA0QAJgKAEgDQAFgCAFAAQAGAAAEADQAFAEACAGQACAFgBANIAAAZIABAJQABABAAAAQAAABAAAAQABABAAAAQAAAAABABIAHABIAAACg");
	this.shape_42.setTransform(390.2,470.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFF00").s().p("AgUAcQgJgLAAgRQAAgQAKgKQAKgLANAAQAKAAAHAGQAHAFAAAGQAAADgCACQgCACgDAAQgFAAgCgDQgCgCAAgEQAAgFgDgCQgDgDgFAAQgHAAgEAGQgHAIAAAMQAAAMAHAKQAGAKAKAAQAHAAAGgFQAFgEAEgKIACACQgDAOgIAHQgJAIgKAAQgLAAgJgKg");
	this.shape_43.setTransform(382.7,472.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFF00").s().p("AgQA3IAAgCIAHgBIACgEIABgJIAAhAIAAgPIgBgDIgDgBIgGABIgBgDIAUgIIAEAAIAABdQAAAHABACQAAABAAAAQAAABABAAQAAABABAAQAAAAABABIAHABIAAACg");
	this.shape_44.setTransform(377,470.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFF00").s().p("AgUAcQgJgKAAgRQAAgRAJgLQAKgKANAAQAMAAAIAIQAHAIAAANIgwAAQAAAPAIAJQAHAJAKAAQAHAAAFgEQAFgEAEgJIACACQgBAKgIAJQgIAJgMAAQgMAAgJgKgAgMgaQgFAFgBAJIAgAAQAAgHgCgDQgCgEgEgDQgDgCgEAAQgGAAgFAFg");
	this.shape_45.setTransform(371.2,472.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFF00").s().p("AglA2IAAgDIADAAQAEAAADgCIACgCQABgCAAgIIAAhDIAAgJIgCgCIgFgBIgEABIgBgDIAWgJIADAAIAAARQAGgJAFgEQAEgEAHAAQAKAAAIAJQAIAKABAQQAAASgLAMQgJAKgNAAQgFAAgEgCQgDgBgEgDIAAAVQAAAIABACQAAAAAAABQABAAAAAAQAAABABAAQAAAAABABQACABAFAAIAAADgAgCgoIgJAJIAAAaIAAALQABAEAFAEQAEADAFAAQAIAAAGgGQAFgIAAgNQABgRgIgIQgEgHgIAAQgDAAgDACg");
	this.shape_46.setTransform(363.3,473.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFF00").s().p("AgGA3IgKgDIgKgDIgDABIgBAGIgDAAIAAglIADAAQACAMADAFQAEAGAHAEQAHADAHAAQAKABAGgGQAFgFAAgHQAAgEgCgEQgCgEgFgDIgPgKIgUgMQgFgEgDgGQgDgFAAgGQAAgMAJgIQAIgJAOABQAHgBAKAFIAGABIADgBIACgEIADAAIAAAlIgDAAQgBgMgEgFQgDgHgHgDQgHgEgGAAQgIAAgGAFQgFAFAAAGQAAAFAEAEQAEAGASAKQAOAHAGAEQAFAEADAGQADAGAAAGQAAAMgJAJQgKAJgOAAIgIgBg");
	this.shape_47.setTransform(355.2,470.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFF00").s().p("AgFAGQgCgDgBgDQABgDACgCQACgDADAAQAEAAACADQACACABADQgBADgCADQgCACgEAAQgDAAgCgCg");
	this.shape_48.setTransform(344.7,475.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFF00").s().p("Ag0A1IAAgDIADAAQAIAAACgEQACgDAAgIIAAhEQAAgKgCgCQgEgEgGAAIgDAAIAAgDIArAAQAXAAAMAFQANAGAHAMQAIANAAAQQAAAVgOAQQgPAQgeAAgAgWgrIAABZQAKABAHAAQAQAAAMgMQANgNAAgVQAAgWgNgMQgLgNgSAAQgHAAgJADg");
	this.shape_49.setTransform(336.7,470.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFF00").s().p("AgfAzQgDgEAAgCQAAgEACgCQACgCADAAIAHABIAFACQACAAADgDQADgCADgHIAEgMIgZg1IgEgHIgDgDIgGgCIAAgDIAiAAIAAADIgCAAQgEAAgCACQAAAAAAAAQgBABAAAAQAAABAAAAQAAABAAAAQgBADADAGIAQAjIARgnIABgGIAAgCIgCgBIgFgBIAAgDIAXAAIAAADIgFABIgDAEIgCAGIgdBGQgEALgHAEQgGAGgHAAQgEAAgDgCg");
	this.shape_50.setTransform(323.1,473.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFF00").s().p("AgQA3IAAgCIAHgBIACgEIABgJIAAhAIAAgPIgCgDIgCgBIgGABIgBgDIAUgIIAEAAIAABdQAAAHAAACQABABAAAAQAAABABAAQAAABABAAQAAAAAAABIAIABIAAACg");
	this.shape_51.setTransform(317,470.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFF00").s().p("AgQA3IAAgCIAHgBIADgEIABgJIAAhAIgBgPIgBgDIgEgBIgFABIgBgDIAUgIIADAAIAABdQAAAHACACQAAABAAAAQAAABABAAQAAABABAAQAAAAABABIAHABIAAACg");
	this.shape_52.setTransform(312.5,470.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFF00").s().p("AgPA3IAAgCIAHgBIACgEIABgJIAAgbIAAgOIgCgEIgEgBIgEABIgCgCIAVgJIADAAIAAA4IABAJIADAEIAHABIAAACgAgEgpQgDgCABgDQgBgEADgCQADgDACABQADgBACADQADACAAAEQAAADgDACQgCADgDAAQgCAAgDgDg");
	this.shape_53.setTransform(308,470.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFF00").s().p("AgvA1IAAgDIAEAAQAHAAADgEQACgDAAgIIAAhEQAAgKgDgCQgDgEgGAAIgEAAIAAgDIAuAAQAMAAAIACQALADAHAHQAGAHAAAKQAAAIgFAGQgFAGgJADQALABAFAFQAIAIAAAKQAAAIgFAHQgFAHgJADQgJAEgSAAgAgLACIgFAAIAAAsQAJABAIAAQAOAAAHgGQAIgHAAgIQAAgHgEgGQgDgFgIgEQgHgDgKAAIgJABgAgQgtIAAAoIAGABIAIABQALAAAGgDQAFgCADgFQADgGAAgFQAAgKgHgGQgIgHgNAAQgIAAgGACg");
	this.shape_54.setTransform(300.1,470.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFF00").s().p("AgJA2IAeheIgcAAQgJAAgDACQgHAEgFAHIgCgBIAKgZIA5AAIAAADIgjBog");
	this.shape_55.setTransform(287.1,470.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFF00").s().p("AgSA2IAAgDIAKgBIADgDIAAgLIAAg5IAAgOIgCgFIgEgBQgDABgFACIgBgDIAZgMIACAAIAABZQAAAIABADQAAAAABAAQAAABAAAAQABABAAAAQABABAAAAIAKABIAAADg");
	this.shape_56.setTransform(279.1,470.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFF00").s().p("AgZAlQgIgPAAgVQAAgSAFgNQAFgNAKgGQAHgFAGAAQAMAAAKAMQAMAPAAAbQAAARgFANQgGANgIAGQgIAGgHAAQgPAAgKgSgAgIgsQgGAHgCANQgCAOAAAMQAAAXAFANQAFAMAIAAQAEAAAEgEQAFgDACgKQAEgNAAgYQAAgRgEgMQgDgJgEgFQgDgCgFAAQgEAAgEAFg");
	this.shape_57.setTransform(271.1,470.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFF00").s().p("AgiA2IAAgDQAbgZALgQQALgPAAgNQAAgKgGgGQgGgHgIAAQgIAAgGAEQgGAFgDAJIgDAAQACgPAIgIQAIgHAMAAQAMAAAJAIQAJAJgBALQAAAHgDAJQgGALgNAOQgTAWgFAEIAbAAIAMgBQADAAADgCQADgCACgEIADAAIgIAVg");
	this.shape_58.setTransform(263,470.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFF00").s().p("AgLASQAIgDAEgFQAEgGAAgGIAAgCIgCgBIgDACIgCAAQgEAAgCgCQgDgCAAgEQAAgDADgDQADgDAEAAQAFAAAEAFQAEAEAAAHQAAAHgGAIQgGAGgLAEg");
	this.shape_59.setTransform(253.1,476.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFF00").s().p("AgZA0QgEgCAAgDQAAgBAAAAQAAgBAAAAQABgBAAAAQABgBAAgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAABAAIAEAAIAGAEIAGACIAHABQAHAAAGgGQAGgHgBgHQABgHgDgGQgCgEgDgCIgJgGQgEgDgHABIgCAAIAAgCQAGgBAFgEQAGgDADgFQADgGAAgFQAAgIgFgGQgFgEgGAAQgNgBgIANIgDgBQAFgKAHgHQAHgFAJAAQANAAAHAIQAFAGAAAIQAAALgPANQAKADAFAGQAFAIAAAJQAAANgIALQgMANgUAAQgMAAgDgDg");
	this.shape_60.setTransform(246.8,470.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFF00").s().p("AgZAlQgIgPAAgVQAAgSAFgNQAFgNAKgGQAHgFAGAAQAMAAAKAMQAMAPAAAbQAAARgFANQgGANgIAGQgIAGgHAAQgPAAgKgSgAgIgsQgGAHgCANQgCAOAAAMQAAAXAFANQAFAMAIAAQAEAAAEgEQAFgDACgKQAEgNAAgYQAAgRgEgMQgDgJgEgFQgDgCgFAAQgEAAgEAFg");
	this.shape_61.setTransform(239.1,470.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFF00").s().p("AgZAlQgIgPAAgVQAAgSAFgNQAFgNAKgGQAHgFAGAAQAMAAAKAMQAMAPAAAbQAAARgFANQgGANgIAGQgIAGgHAAQgPAAgKgSgAgIgsQgGAHgCANQgCAOAAAMQAAAXAFANQAFAMAIAAQAEAAAEgEQAFgDACgKQAEgNAAgYQAAgRgEgMQgDgJgEgFQgDgCgFAAQgEAAgEAFg");
	this.shape_62.setTransform(231.1,470.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFF00").s().p("AgiA2IAAgDQAbgZALgQQALgPAAgNQAAgKgGgGQgGgHgIAAQgIAAgGAEQgGAFgDAJIgDAAQACgPAIgIQAIgHAMAAQAMAAAJAIQAJAJAAALQAAAHgFAJQgFALgNAOQgTAWgEAEIAaAAIAMgBQAEAAACgCQADgCACgEIADAAIgHAVg");
	this.shape_63.setTransform(223,470.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFF00").s().p("AgbAwQgNgHgHgNQgIgOAAgOQABgNAHgNQAHgOANgHQAOgIANABQAOgBANAIQAOAHAHAOQAIANgBANQABAOgIAOQgHANgOAHQgNAHgOABQgNgBgOgHgAgYgrQgMAHgHAMQgHAMAAAMQAAANAHAMQAHAMALAHQAMAHANgBQANABAMgHQAMgHAHgMQAGgMABgNQAAgMgIgMQgGgMgNgHQgLgGgNgBQgMABgMAGgAgZAZQgKgKAAgOQAAgOALgLQALgKAQAAIAGAAIAIACIAEABIACgBIABgCIADAAIACAVIgEAAQgCgJgGgEQgGgFgJAAQgFAAgGACQgEADgEAEQgCAEgBAFQgCAGAAAGQAAAQAHAHQAHAJALgBQAPAAAJgMIADACQgLAPgTAAQgOAAgLgKg");
	this.shape_64.setTransform(209.1,470.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFF00").s().p("AgCAuQgEgCgCgDQgBgEAAgIIAAgvIgLAAIAAgDQAEgBAFgFQAEgEAEgFIADgLIADAAIAAAYIAQAAIAAAFIgQAAIAAAtQAAAIACABQACADADAAIAFgBQADgCAAgDIAEAAQgDAHgFAEQgFAEgFAAQgEAAgCgCg");
	this.shape_65.setTransform(196.8,471.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFF00").s().p("AAEA3IAAgCIACAAQAEgBADgBQABgCABgDIABgHIAAgZQgBgMgBgCQgBgEgDgCQgDgBgDAAQgEgBgDACQgEADgGAEIAAAmQAAAIABABQAAABAAAAQABABAAAAQAAABABAAQAAAAABABIAIABIAAACIgkAAIAAgCQAFgBADgBQAAAAAAAAQABgBAAAAQAAAAAAgBQABAAAAgBQABgCAAgHIAAhAIgBgPQAAAAAAgBQAAgBAAAAQgBgBAAAAQAAAAAAAAIgDgBIgGABIgBgDIAVgIIAEAAIAAA0QAIgKAFgDQAFgCAFAAQAGAAAEADQAFAEACAGQABAFAAANIAAAZIABAJQABABAAAAQAAABAAAAQABABAAAAQAAAAABABIAHABIAAACg");
	this.shape_66.setTransform(190.5,470.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFF00").s().p("AgdAvQgGgEAAgEIAAgDIAGgJIAIgIIgGgEQAAgBAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQABgDACgDQACgEAIgGQgGgDgEgGQgDgFAAgHQgBgLAJgHQAHgIANAAQAJAAAIAFIAPAAIAEAAIAAABIABACIgBADIAAAAIgEABIgJAAQAEAGAAAIQAAAKgIAIQgHAGgMABIgLgCIgFAEIgBAEIABADIAFACIALAAQAPAAAFABQAIABAEAFQAEAEAAAGQAAAJgIAIQgMALgTAAQgPAAgKgHgAgWAbQgCADAAAEQAAADAEADQAJAEANABQAOAAAHgGQAHgFAAgFQAAgEgFgBQgEgDgMAAQgQAAgKgCQgEAEgBAEgAgMgtQgEAFAAAJQAAAMAFAIQAEAEAHAAQAEAAAEgEQAFgFAAgJQgBgMgFgHQgEgGgFAAQgGAAgEAFg");
	this.shape_67.setTransform(182.6,473.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFF00").s().p("AgPA3IAAgCIAGgBIADgEIABgJIAAgbIAAgOIgCgEIgEgBIgEABIgCgCIAVgJIADAAIAAA4IABAJIADAEIAHABIAAACgAgEgpQgCgCAAgDQAAgEACgCQADgDABABQAEgBACADQACACAAAEQAAADgCACQgCADgEAAQgBAAgDgDg");
	this.shape_68.setTransform(176.3,470.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFF00").s().p("AgZAlIAAgDQAGAAACgCQABAAAAgBQABAAAAAAQAAgBAAgBQABAAAAgBIAAgHIAAgbIAAgPQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAAAAAQgBgBAAAAQgBAAAAAAIgGACIgBgDIAWgJIADAAIAAAQQAIgQAKAAQAEAAADADQADACAAAEQAAADgCACQgDACgCAAQgDAAgDgDIgFgCIgEABQgDADgDAIIAAAhQAAAGABADIADAEIAIABIAAADg");
	this.shape_69.setTransform(171.5,472.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFF00").s().p("AgfAzQgDgEAAgCQAAgEACgCQACgCADAAIAHABIAFACQACAAADgDQADgCADgHIAEgMIgZg1IgEgHIgDgDIgGgCIAAgDIAiAAIAAADIgCAAQgEAAgCACQAAAAAAAAQgBABAAAAQAAABAAAAQAAABAAAAQgBADADAGIAQAjIARgnIABgGIgBgCIgBgBIgFgBIAAgDIAXAAIAAADIgFABIgDAEIgCAGIgdBGQgEALgHAEQgGAGgHAAQgEAAgDgCg");
	this.shape_70.setTransform(164.7,473.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFF00").s().p("AglA2IAAgDIACAAQAEAAAEgCIACgCQABgCAAgIIAAhDIgBgJIgCgCIgDgBIgFABIgBgDIAWgJIADAAIAAARQAFgJAGgEQAEgEAGAAQAMAAAGAJQAJAKAAAQQABASgLAMQgJAKgNAAQgFAAgEgCQgDgBgEgDIAAAVQAAAIABACQAAAAAAABQABAAAAAAQAAABABAAQAAAAABABQACABAFAAIAAADgAgCgoIgJAJIAAAaIAAALQACAEAEAEQAEADAGAAQAHAAAFgGQAHgIAAgNQAAgRgIgIQgFgHgGAAQgEAAgDACg");
	this.shape_71.setTransform(156.4,473.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFF00").s().p("AgZAZQgJgLABgNQAAgJAEgKQAFgKAIgEQAIgFAIAAQAQAAAKAMQAJALAAAOQAAAIgFAKQgFAKgIAFQgIAFgJAAQgQAAgJgNgAgJgdQgFACgCAGQgDAGAAAKQAAAPAGALQAGALAJAAQAIAAAFgGQAFgGAAgPQAAgSgJgLQgFgIgIAAQgEAAgDADg");
	this.shape_72.setTransform(148.7,472.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFF00").s().p("AgkAkQgLgPAAgTQAAgPAIgNQAGgOANgHQAMgIAOABQALAAAMAFIAEACQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQACgBABgEIADAAIACAkIgCAAQgFgRgJgHQgJgHgNAAQgJAAgJAGQgIAFgFAMQgFAMAAAQQAAAOAFALQAEALAJAFQAKAFAKAAQALAAAIgEQAIgEAJgNIADABQgJAOgKAHQgLAGgOABQgaAAgOgUg");
	this.shape_73.setTransform(139.4,470.5);

	this.start_btn = new lib.startgame();
	this.start_btn.name = "start_btn";
	this.start_btn.parent = this;
	this.start_btn.setTransform(332.5,434);
	new cjs.ButtonHelper(this.start_btn, 0, 1, 2, false, new lib.startgame(), 3);

	this.label1_movie = new lib.TriStateButton();
	this.label1_movie.name = "label1_movie";
	this.label1_movie.parent = this;
	this.label1_movie.setTransform(316.9,140.1);
	this.label1_movie.filters = [new cjs.ColorFilter(0.4, 0.4, 0.4, 1, 91.8, 0, 122.4, 0)];
	this.label1_movie.cache(-288,-24,577,48);

	this.label5_movie = new lib.TriStateButton();
	this.label5_movie.name = "label5_movie";
	this.label5_movie.parent = this;
	this.label5_movie.setTransform(315.8,337.1);
	this.label5_movie.filters = [new cjs.ColorFilter(0.4, 0.4, 0.4, 1, 0, 0, 153, 0)];
	this.label5_movie.cache(-288,-24,577,48);

	this.label2_movie = new lib.TriStateButton();
	this.label2_movie.name = "label2_movie";
	this.label2_movie.parent = this;
	this.label2_movie.setTransform(315.9,189.1);
	this.label2_movie.filters = [new cjs.ColorFilter(0.4, 0.4, 0.4, 1, 153, 0, 0, 0)];
	this.label2_movie.cache(-288,-24,577,48);

	this.label4_movie = new lib.TriStateButton();
	this.label4_movie.name = "label4_movie";
	this.label4_movie.parent = this;
	this.label4_movie.setTransform(316.9,287.1);
	this.label4_movie.filters = [new cjs.ColorFilter(0.4, 0.4, 0.4, 1, 0, 153, 0, 0)];
	this.label4_movie.cache(-288,-24,577,48);

	this.label3_movie = new lib.TriStateButton();
	this.label3_movie.name = "label3_movie";
	this.label3_movie.parent = this;
	this.label3_movie.setTransform(316.5,237.5);
	this.label3_movie.filters = [new cjs.ColorFilter(0.4, 0.4, 0.4, 1, 153, 153, 0, 0)];
	this.label3_movie.cache(-288,-24,577,48);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.label3_movie},{t:this.label4_movie},{t:this.label2_movie},{t:this.label5_movie},{t:this.label1_movie},{t:this.start_btn},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(2));

	// back
	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000033").s().p("Egx/AlgMAAAhK/MBj/AAAMAAABK/g");
	this.shape_74.setTransform(320,240);

	this.timeline.addTween(cjs.Tween.get(this.shape_74).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,481.2);


(lib.YellowBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ID
	this.playerID = new cjs.Text("8", "14px 'Arial'");
	this.playerID.name = "playerID";
	this.playerID.textAlign = "center";
	this.playerID.lineHeight = 18;
	this.playerID.lineWidth = 28;
	this.playerID.parent = this;
	this.playerID.setTransform(10,2);

	this.timeline.addTween(cjs.Tween.get(this.playerID).to({_off:true},3).wait(1));

	// Base
	this.instance = new lib.YellowPieceImg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(10,9.3,1,1,0,0,0,10,9.5);

	this.instance_1 = new lib.PurpleSilhouette("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(10,9.3,1.1,1.1,0,0,0,10,9.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},3).wait(1));

	// Use
	this.useHighlight = new lib.useHighlight();
	this.useHighlight.name = "useHighlight";
	this.useHighlight.parent = this;
	this.useHighlight.setTransform(10,9.2,1.1,1.1,0,0,0,10,9.4);

	this.timeline.addTween(cjs.Tween.get(this.useHighlight).wait(4));

	// Highlight
	this.instance_2 = new lib.YellowSilhouette("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(10,8.1,1.5,1.5,0,0,0,10,9.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-0.9,31.9,23.6);


(lib.RedBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ID
	this.playerID = new cjs.Text("8", "14px 'Arial'");
	this.playerID.name = "playerID";
	this.playerID.textAlign = "center";
	this.playerID.lineHeight = 18;
	this.playerID.lineWidth = 28;
	this.playerID.parent = this;
	this.playerID.setTransform(10,2);

	this.timeline.addTween(cjs.Tween.get(this.playerID).to({_off:true},3).wait(1));

	// Base
	this.instance = new lib.RedPieceImg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(10,9.3,1,1,0,0,0,10,9.5);

	this.instance_1 = new lib.PurpleSilhouette("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(10,9.3,1.1,1.1,0,0,0,10,9.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},3).wait(1));

	// Use
	this.useHighlight = new lib.useHighlight();
	this.useHighlight.name = "useHighlight";
	this.useHighlight.parent = this;
	this.useHighlight.setTransform(10,9.2,1.1,1.1,0,0,0,10,9.4);

	this.timeline.addTween(cjs.Tween.get(this.useHighlight).wait(4));

	// Highlight
	this.instance_2 = new lib.RedSilhouette("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(10,8.1,1.5,1.5,0,0,0,10,9.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-0.9,31.9,23.6);


(lib.PurpleBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ID
	this.playerID = new cjs.Text("8", "14px 'Arial'");
	this.playerID.name = "playerID";
	this.playerID.textAlign = "center";
	this.playerID.lineHeight = 18;
	this.playerID.lineWidth = 28;
	this.playerID.parent = this;
	this.playerID.setTransform(10,2);

	this.timeline.addTween(cjs.Tween.get(this.playerID).to({_off:true},3).wait(1));

	// Base
	this.instance = new lib.PurplePieceImg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(10,9.3,1,1,0,0,0,10,9.5);

	this.instance_1 = new lib.PurpleSilhouette("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(10,9.3,1.1,1.1,0,0,0,10,9.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},3).wait(1));

	// Use
	this.useHighlight = new lib.useHighlight();
	this.useHighlight.name = "useHighlight";
	this.useHighlight.parent = this;
	this.useHighlight.setTransform(10,9.2,1.1,1.1,0,0,0,10,9.4);

	this.timeline.addTween(cjs.Tween.get(this.useHighlight).wait(4));

	// Highlight
	this.instance_2 = new lib.PurpleSilhouette("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(10,8.1,1.5,1.5,0,0,0,10,9.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-0.9,31.9,23.6);


(lib.GreenBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ID
	this.playerID = new cjs.Text("8", "14px 'Arial'");
	this.playerID.name = "playerID";
	this.playerID.textAlign = "center";
	this.playerID.lineHeight = 18;
	this.playerID.lineWidth = 28;
	this.playerID.parent = this;
	this.playerID.setTransform(10,2);

	this.timeline.addTween(cjs.Tween.get(this.playerID).to({_off:true},3).wait(1));

	// Base
	this.instance = new lib.GreenPieceImg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(10,9.3,1,1,0,0,0,10,9.5);

	this.instance_1 = new lib.PurpleSilhouette("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(10,9.3,1.1,1.1,0,0,0,10,9.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},3).wait(1));

	// Use
	this.useHighlight = new lib.useHighlight();
	this.useHighlight.name = "useHighlight";
	this.useHighlight.parent = this;
	this.useHighlight.setTransform(10,9.2,1.1,1.1,0,0,0,10,9.4);

	this.timeline.addTween(cjs.Tween.get(this.useHighlight).wait(4));

	// Highlight
	this.instance_2 = new lib.GreenSilhouette("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(10,8.1,1.5,1.5,0,0,0,10,9.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-0.9,31.9,23.6);


(lib.BlueBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ID
	this.playerID = new cjs.Text("8", "14px 'Arial'");
	this.playerID.name = "playerID";
	this.playerID.textAlign = "center";
	this.playerID.lineHeight = 18;
	this.playerID.lineWidth = 28;
	this.playerID.parent = this;
	this.playerID.setTransform(10,2);

	this.timeline.addTween(cjs.Tween.get(this.playerID).to({_off:true},3).wait(1));

	// Base
	this.instance = new lib.BluePieceImg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(10,9.3,1,1,0,0,0,10,9.5);

	this.instance_1 = new lib.PurpleSilhouette("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(10,9.3,1.1,1.1,0,0,0,10,9.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},3).wait(1));

	// Use
	this.useHighlight = new lib.useHighlight();
	this.useHighlight.name = "useHighlight";
	this.useHighlight.parent = this;
	this.useHighlight.setTransform(10,9.2,1.1,1.1,0,0,0,10,9.4);

	this.timeline.addTween(cjs.Tween.get(this.useHighlight).wait(4));

	// Highlight
	this.instance_2 = new lib.BlueSilhouette("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(10,8.1,1.5,1.5,0,0,0,10,9.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-0.9,31.9,23.6);


(lib.Player_image = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{Normal:1,Highlight:4,Selected:34});

	// timeline functions:
	this.frame_0 = function() {
		/* init_piece();
		
		function init_piece()
		{
			if (piece_initialized != undefined)
				return;
			piece_initialized = true;
			piece_state = 0;
			if (_global.PIECE_NORMAL == undefined)
			{
				_global.PIECE_NORMAL = 0;
				_global.PIECE_HIGHLIGHT = 1;
				_global.PIECE_SELECTED = 2;
			}
		}
		
		function changeState(n)
		{
			piece_state = n;
			switch (n)
			{
				case PIECE_NORMAL:
					gotoAndPlay("Normal");
					break;
				case PIECE_HIGHLIGHT:
					gotoAndPlay("Highlight");
					break;
				case PIECE_SELECTED:
					gotoAndPlay("Selected");
					break;
			}
		}
		*/
	}
	this.frame_3 = function() {
		/* stop();*/
	}
	this.frame_33 = function() {
		/* gotoAndPlay("Highlight");*/
	}
	this.frame_64 = function() {
		/* gotoAndPlay("Selected");*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(30).call(this.frame_33).wait(31).call(this.frame_64).wait(1));

	// Piece
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#5C5C5C","#999999"],[0,1],0.1,-4.7,0,4.8).s().p("AhBAaQgbgMAAgQQAAgRAbgNIAPgFIgJAoIByAAIgHgoIASAFQAbANAAARQAAAQgbAMQgbAMgnAAQgmAAgbgMg");
	this.shape.setTransform(1,4.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#5C5C5C","#999999"],[0,1],-5.7,0,5.8,0).s().p("Ag5A3IAJgpIAMg6QADAEAGAEQAMAHAPAAQARAAALgHQAMgIAAgKIALBDIAGAqg");
	this.shape_1.setTransform(0.8,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#5C5C5C","#999999"],[0,1],0,-4,0.1,4).s().p("AgbASQgGgEgDgEQgDgFAAgFQAAgJAMgIQAMgHAPAAQARAAALAHQAMAIAAAJQAAAKgMAIQgLAHgRAAQgPAAgMgHg");
	this.shape_2.setTransform(0.8,-5.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(65));

	// effect
	this.instance = new lib.Highlight_silhouette("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0.9,0.4);
	this.instance._off = true;

	this.instance_1 = new lib.Selected_silhouette("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(1.1,0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:2,scaleY:2},15).to({scaleX:1,scaleY:1},14).to({_off:true},1).wait(31));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(34).to({_off:false},0).to({scaleX:2,scaleY:2},15).to({scaleX:1,scaleY:1},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.2,-8.2,18.5,17);


(lib.Piece = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{Purple:4,Red:9,Yellow:14,Green:19,Blue:24});

	// timeline functions:
	this.frame_0 = function() {
		/* init_gamepiece()
		
		function init_gamepiece()
		{
			if (gamepiece_initialized != undefined)
				return;
			gamepiece_initialized = false;
			if (_global.PIECE_WHITE == undefined)
			{
				_global.PIECE_WHITE = -1;
				_global.PIECE_PURPLE = 0;
				_global.PIECE_RED = 1;
				_global.PIECE_YELLOW = 2;
				_global.PIECE_GREEN = 3;
				_global.PIECE_BLUE = 4;
			}
			piece_color = PIECE_WHITE;
			piece_label = "X";
			
			piece_location = 0;
		}
		
		function setPiece(c, n)
		{
			piece_color = c;
			piece_label = n;
			label_txt.text = n;
			switch (c)
			{
				case PIECE_PURPLE:
					gotoAndPlay("Purple");
					break;
				case PIECE_RED:
					gotoAndPlay("Red");
					break;
				case PIECE_YELLOW:
					gotoAndPlay("Yellow");
					break;
				case PIECE_GREEN:
					gotoAndPlay("Green");
					break;
				case PIECE_BLUE:
					gotoAndPlay("Blue");
					break;
			}
		}
		
		function setLocation(id)
		{
			piece_location = id;
		}
		
		function getLocation()
		{
			return piece_location;
		}
		
		function changeState(n)
		{
			piece_movie.changeState(n);
			if (n == 1)
				onRelease = chosen;
			else
				onRelease = null;
		}
		
		function chosen()
		{
			_parent.choosePiece(this);
		}
		
		// ch25p5 added info
		function getPlayer()
		{
			return piece_color;
		}
		
		function getPieceNumber()
		{
			return piece_label;
		}
		
		function setWeight(n)
		{
			ai_weight = n;
		}
		
		function getWeight()
		{
			return ai_weight;
		}
		*/
	}
	this.frame_3 = function() {
		/* stop();*/
	}
	this.frame_8 = function() {
		/* stop();*/
	}
	this.frame_13 = function() {
		/* stop();*/
	}
	this.frame_18 = function() {
		/* stop();*/
	}
	this.frame_23 = function() {
		/* stop();*/
	}
	this.frame_29 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(5).call(this.frame_8).wait(5).call(this.frame_13).wait(5).call(this.frame_18).wait(5).call(this.frame_23).wait(6).call(this.frame_29).wait(1));

	// Layer 3
	this.label_txt = new cjs.Text("X", "8px 'Arial'");
	this.label_txt.name = "label_txt";
	this.label_txt.textAlign = "center";
	this.label_txt.lineHeight = 11;
	this.label_txt.lineWidth = 23;
	this.label_txt.parent = this;
	this.label_txt.setTransform(0.6,-4.4);

	this.timeline.addTween(cjs.Tween.get(this.label_txt).wait(30));

	// Layer 1
	this.piece_movie = new lib.Player_image();
	this.piece_movie.name = "piece_movie";
	this.piece_movie.parent = this;
	this.piece_movie.setTransform(-1,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.piece_movie).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.7,-8.5,26.6,17);


(lib.Board = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{startGame:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7));

	// pieces
	this.p1 = new lib.PurpleBtn();
	this.p1.name = "p1";
	this.p1.parent = this;
	this.p1.setTransform(-36.4,-252.4);
	new cjs.ButtonHelper(this.p1, 0, 1, 2, false, new lib.PurpleBtn(), 3);

	this.p2 = new lib.PurpleBtn();
	this.p2.name = "p2";
	this.p2.parent = this;
	this.p2.setTransform(-59.9,-245.2);
	new cjs.ButtonHelper(this.p2, 0, 1, 2, false, new lib.PurpleBtn(), 3);

	this.p3 = new lib.PurpleBtn();
	this.p3.name = "p3";
	this.p3.parent = this;
	this.p3.setTransform(-86.6,-252.4);
	new cjs.ButtonHelper(this.p3, 0, 1, 2, false, new lib.PurpleBtn(), 3);

	this.p4 = new lib.PurpleBtn();
	this.p4.name = "p4";
	this.p4.parent = this;
	this.p4.setTransform(-107.4,-245.2);
	new cjs.ButtonHelper(this.p4, 0, 1, 2, false, new lib.PurpleBtn(), 3);

	this.p5 = new lib.PurpleBtn();
	this.p5.name = "p5";
	this.p5.parent = this;
	this.p5.setTransform(-135.8,-235.3);
	new cjs.ButtonHelper(this.p5, 0, 1, 2, false, new lib.PurpleBtn(), 3);

	this.b1 = new lib.BlueBtn();
	this.b1.name = "b1";
	this.b1.parent = this;
	this.b1.setTransform(-254.9,-56.8);
	new cjs.ButtonHelper(this.b1, 0, 1, 2, false, new lib.BlueBtn(), 3);

	this.b2 = new lib.BlueBtn();
	this.b2.name = "b2";
	this.b2.parent = this;
	this.b2.setTransform(-252.9,-25.8);
	new cjs.ButtonHelper(this.b2, 0, 1, 2, false, new lib.BlueBtn(), 3);

	this.b3 = new lib.BlueBtn();
	this.b3.name = "b3";
	this.b3.parent = this;
	this.b3.setTransform(-252.9,0.2);
	new cjs.ButtonHelper(this.b3, 0, 1, 2, false, new lib.BlueBtn(), 3);

	this.b4 = new lib.BlueBtn();
	this.b4.name = "b4";
	this.b4.parent = this;
	this.b4.setTransform(-251.9,29.2);
	new cjs.ButtonHelper(this.b4, 0, 1, 2, false, new lib.BlueBtn(), 3);

	this.b5 = new lib.BlueBtn();
	this.b5.name = "b5";
	this.b5.parent = this;
	this.b5.setTransform(-251.9,57.2);
	new cjs.ButtonHelper(this.b5, 0, 1, 2, false, new lib.BlueBtn(), 3);

	this.g5 = new lib.GreenBtn();
	this.g5.name = "g5";
	this.g5.parent = this;
	this.g5.setTransform(-272.9,208.1);
	new cjs.ButtonHelper(this.g5, 0, 1, 2, false, new lib.GreenBtn(), 3);

	this.g4 = new lib.GreenBtn();
	this.g4.name = "g4";
	this.g4.parent = this;
	this.g4.setTransform(-246.9,208.1);
	new cjs.ButtonHelper(this.g4, 0, 1, 2, false, new lib.GreenBtn(), 3);

	this.g3 = new lib.GreenBtn();
	this.g3.name = "g3";
	this.g3.parent = this;
	this.g3.setTransform(-220.9,206.1);
	new cjs.ButtonHelper(this.g3, 0, 1, 2, false, new lib.GreenBtn(), 3);

	this.g2 = new lib.GreenBtn();
	this.g2.name = "g2";
	this.g2.parent = this;
	this.g2.setTransform(-194.9,202.1);
	new cjs.ButtonHelper(this.g2, 0, 1, 2, false, new lib.GreenBtn(), 3);

	this.g1 = new lib.GreenBtn();
	this.g1.name = "g1";
	this.g1.parent = this;
	this.g1.setTransform(-169.9,206.1);
	new cjs.ButtonHelper(this.g1, 0, 1, 2, false, new lib.GreenBtn(), 3);

	this.y5 = new lib.YellowBtn();
	this.y5.name = "y5";
	this.y5.parent = this;
	this.y5.setTransform(260.3,206.1);
	new cjs.ButtonHelper(this.y5, 0, 1, 2, false, new lib.YellowBtn(), 3);

	this.y4 = new lib.YellowBtn();
	this.y4.name = "y4";
	this.y4.parent = this;
	this.y4.setTransform(232.4,206.1);
	new cjs.ButtonHelper(this.y4, 0, 1, 2, false, new lib.YellowBtn(), 3);

	this.y3 = new lib.YellowBtn();
	this.y3.name = "y3";
	this.y3.parent = this;
	this.y3.setTransform(207,206.1);
	new cjs.ButtonHelper(this.y3, 0, 1, 2, false, new lib.YellowBtn(), 3);

	this.y2 = new lib.YellowBtn();
	this.y2.name = "y2";
	this.y2.parent = this;
	this.y2.setTransform(180.8,206.1);
	new cjs.ButtonHelper(this.y2, 0, 1, 2, false, new lib.YellowBtn(), 3);

	this.y1 = new lib.YellowBtn();
	this.y1.name = "y1";
	this.y1.parent = this;
	this.y1.setTransform(155.1,206.1);
	new cjs.ButtonHelper(this.y1, 0, 1, 2, false, new lib.YellowBtn(), 3);

	this.r5 = new lib.RedBtn();
	this.r5.name = "r5";
	this.r5.parent = this;
	this.r5.setTransform(240.5,-178.7);
	new cjs.ButtonHelper(this.r5, 0, 1, 2, false, new lib.RedBtn(), 3);

	this.r4 = new lib.RedBtn();
	this.r4.name = "r4";
	this.r4.parent = this;
	this.r4.setTransform(240.5,-153.7);
	new cjs.ButtonHelper(this.r4, 0, 1, 2, false, new lib.RedBtn(), 3);

	this.r3 = new lib.RedBtn();
	this.r3.name = "r3";
	this.r3.parent = this;
	this.r3.setTransform(240.5,-128.7);
	new cjs.ButtonHelper(this.r3, 0, 1, 2, false, new lib.RedBtn(), 3);

	this.r2 = new lib.RedBtn();
	this.r2.name = "r2";
	this.r2.parent = this;
	this.r2.setTransform(240.5,-105.7);
	new cjs.ButtonHelper(this.r2, 0, 1, 2, false, new lib.RedBtn(), 3);

	this.r1 = new lib.RedBtn();
	this.r1.name = "r1";
	this.r1.parent = this;
	this.r1.setTransform(240.5,-81.7);
	new cjs.ButtonHelper(this.r1, 0, 1, 2, false, new lib.RedBtn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.r1},{t:this.r2},{t:this.r3},{t:this.r4},{t:this.r5},{t:this.y1},{t:this.y2},{t:this.y3},{t:this.y4},{t:this.y5},{t:this.g1},{t:this.g2},{t:this.g3},{t:this.g4},{t:this.g5},{t:this.b5},{t:this.b4},{t:this.b3},{t:this.b2},{t:this.b1},{t:this.p5},{t:this.p4},{t:this.p3},{t:this.p2},{t:this.p1}]}).wait(7));

	// back
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("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");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#91FE8F").s().p("AoFDiIgBjwIDwAAIDxAAIAADvIAAjvIDuAAIDwAAIABDvIjwAAIgBjvIABDvIjvAAIjwABIgBjwIABDwgAr1DiIAAjwIDvAAIABDwgAIHBQIAAgIIhJjeIDkhKIAVBBIA/AAIAADvg");
	this.shape_1.setTransform(-194.9,213.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00FF00").s().p("AEULDIAAjwIDwAAIAADwgAAkLDIAAjwIDwAAIAADwgAjLLDIAAjwIDvAAIAADwgAm7LDIAAjwIDwAAIAADwgAEUHTgAjLHTgAoDEHICNjCIDDCNIiODCgAl2BFICNjBICNjCICMjCIDDCNIjDiNICOjCIDCCMIiNDDIiNDCIjCiNIDCCNIiNDBIjCiMIDCCMIiMDCgABmixg");
	this.shape_2.setTransform(-74.6,151);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FEFDAB").s().p("AAdDhIAAjuIDwgBIDwAAIDwAAIAADvIjwAAIAAjvIAADvIjwAAIAAjvIAADvIjwAAgAjSDhIAAjuIDvAAIAADugAnCDhIAAjuIDwAAIAADugArsBVIAAjvIA9AAIAXhHIDlBKIhJDfIAAANgAjSgNg");
	this.shape_3.setTransform(195.9,213.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFF00").s().p("ADEIEIBKjlIDkBKIhKDlgAibFIIDBiNICNDCIjBCNgAEOEfIBKjkIDkBKIhKDkgAkoCGIDCiMICMDBIjBCNgAAmC7gAm1g7IDCiNIjCCNIiNjCIDCiOICNDDICNDCIjCCMgAFYA7IBKjjIDkBKIhKDjgAhmgGgAKGhegAGiioIBKjkIDkBKIhKDkgArPnAIDCiNICNDCIjCCOgAmAmLg");
	this.shape_4.setTransform(109.9,139.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FE6B6B").s().p("AjwKnIAXhFIgxgjICNjCIDBCNIgKANIhFDagAAbDPIDwAAIAADwIjwAAgAAbggIDwAAIAADvIjwAAgAELDPgAAakQIDxAAIjxAAIAAjwIDxAAIAADwIAADwIjwAAgAAarwIDxAAIAADwIjxAAgAELoAg");
	this.shape_5.setTransform(227.6,-105.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("ArKG3IDkhKIBKDkIjkBLgAnmFtIDkhKIBLDkIjlBKgAkCEjIDlhKIBJDkIjjBKgAgdDZIDjhKIDkhKIBKDkIjkBKIhKjkIBKDkIjkBKgAnmFtgAF8gxICNjCIiNDCIjCiNICNjDIDCCOIDCCNIiNDBgAC6i+IjBiNICMjDIDCCNIiNDDgAgHlLIjDiOICNjCIDCCNIiMDDg");
	this.shape_6.setTransform(143.5,-57.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#9900FF").s().p("AEyH/IAAjwIAAjwIAAjvIDwAAIAADvIjwAAIDwAAIAADwIjwAAIDwAAIAADwIjwAAIDwAAIAADwIjwAAgAohi6IDDiNICNDCIiNjCIDCiNIDBiNIDCiNICNDCIjCCNIiNjCICNDCIjBCNIiNjCICNDCIjCCNIjCCMgAEynAIDwAAIAADwIjwAAgAIijQg");
	this.shape_7.setTransform(-41.1,-132.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#996600").s().p("ASvefIjxAAIjvAAIjwAAIjxAAIjuAAIjwAAIjxAAIjvAAIjwAAIjxAAIg/AAIgVhCIhKjkIhKjkIhLjlIhJjkIhLjkIhKjkIhKjkIhKjlIhKjjIhLjkIgTg8IA3gnIDCiOIDDiNIDCiNIDCiNIDCiNIDDiNIDBiNIDDiNIDCiNIDCiNIA7gsIAuAiIDDCNIDCCNIDCCNIDCCNIDCCNIDCCNIDDCOIDCCMIDCCNIDCCOIAxAjIgWBFIhLDkIhKDjIhKDkIhKDlIhKDkIhLDkIhKDlIhKDkIhKDkIhKDkIgXBHgArEPKIiNDCIiNDDIiNDBIiNDDIDCCNICNjDICNjCICOjCICNjCICMjCIjCiNgAFvOUICNDCICNDCICODCICMDDICODCIDBiNIiMjDIiOjCIiNjCIiNjCIiNjCgA9dknIDkBLIDlBKIDkBKIDkBJIDkBKIBKjjIjkhKIjkhKIjlhLIjkhKIjkhKgAZWnFIjkBKIjlBKIjkBKIjkBKIBKDkIDkhKIDlhKIDkhKIDkhKIDlhKIhLjlgAhz8GIAADwIAADwIAADwIAADwIAADwIDuAAIAAjwIAAjwIAAjwIAAjwIAAjwg");
	this.shape_8.setTransform(1.1,2.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0000FF").s().p("Ao5FIIDkhJIBKDkIjkBKgAo5FIIhKjkIDkhKIBKDlIjkBJgArNh/IDkhKIBKDjIjkBKgAHqgfIBKjkIDkBKIhKDjgAmfAagAHqgfIjkhKIBKjkIDkBKIhKDkgAEGhpIjkhKIBKjlIDkBLIhKDkgAsYljIDlhKIBKDkIjkBKgAjBj9IBJjlIDkBKIhKDlgAmmlIIBKjkIDkBKIhJDlgAh4nig");
	this.shape_9.setTransform(-145.2,6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CCCCCC").s().p("EAPeAhnIAAjwIAADwIjwAAIAAjwIAADwIjwAAIAAjwIDwAAIDwAAIDwAAIAADwgEAEOAhnIAAjwIDwAAIAADwgEAAeAhnIAAjwIAADwIjvAAIAAjwIDvAAIDwAAIAADwgA4UabIhKjkIDkhKIBLDkIjlBKIDlhKIBKDlIjlBKgA6oTTIDkhKIBKDkIjkBKgA7yPuIDkhKIjkBKIhKjkIDkhKIBKDkIBKDlIjkBKgA3ESJgAZLOgIBKjlIBLjkIBKjkIBKjlIBKjjIBKjkIDkBKIhKDkIjkhKIDkBKIhKDjIjkhKIDkBKIhKDlIjkhKIDkBKIhKDkIjkhKIDkBKIhKDkIjlhKIDlBKIhLDlgA88MKIhLjkIDlhKIBKDkIjkBKgEgg0gLaIDCiMICNDCIjCCNgEgjrgI2IAAADIAFAOIgFACgEgjrgIzIAAgDIAEgBIAGgCIgHAFIgDABgEgjrgI+IAEAHIgEABgEgjngI3gA9ytmIDCiOICNDDIjCCNgA6wv0IDCiNIDDiNICNDCIjCCNIiOjCICODCIjDCOgA9ytmgAyexMIiNjCIDCiNIDCiNICNDCIjCCNIiNjCICNDCIjCCNgAQjziICNjDIDCCOIiNDBgANh1vICNjDIDCCNIiNDDgAKf39ICNjCIDCCNIiNDDgAHc6KICOjCIDCCNIiNDCgAEa8XICNjCIDDCNIiODCgAEa8XIjCiNICNjCIDCCNIiNDCgAJq9Mg");
	this.shape_10.setTransform(-2.1,6.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#5656FE").s().p("AkaHeIDwAAIjwAAIAAjvIDwgBIAADwIAADwIjwAAgAkagBIDwAAIAADvIjwABgAgqDugAkajxIDwAAIjwAAIAAjvIDwgBIAADwIAADwIjwAAgAgooXIAFgCIAJAaIgJgaIgEgOIACgBIAHgFIgFACIgFgHIAAgWIC2iGICNDDIg3AoIATA7IjkBKgAgaoZIgLgPg");
	this.shape_11.setTransform(-226.4,5.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#BD70FE").s().p("AGIAvIC0iCIAOgUIDDCMIiNDCIgvgiIg8AsgAkrAAIAAjwIAADwIjwAAIAAjwIDwAAIDvAAIABDwIgBjwIDwAAIDwAAIAADwIjwAAIAAjwIAADwIjvAAIjwAAgAsLAAIgBjwIDxAAIAADwgAobjwg");
	this.shape_12.setTransform(-57.2,-212.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-278.9,-258.1,565.1,495.5);


(lib.GameScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		pent.startGameScreen(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1));

	// ui
	this.win_txt = new cjs.Text("Purple\nplayer\nWINS!", "96px 'Arial'", "#9900FF");
	this.win_txt.name = "win_txt";
	this.win_txt.textAlign = "center";
	this.win_txt.lineHeight = 109;
	this.win_txt.parent = this;
	this.win_txt.setTransform(338,52.1);

	this.continue_btn = new lib.Continue();
	this.continue_btn.name = "continue_btn";
	this.continue_btn.parent = this;
	this.continue_btn.setTransform(331.8,435.7);
	new cjs.ButtonHelper(this.continue_btn, 0, 1, 2);

	this.bskip_btn = new lib.Skip();
	this.bskip_btn.name = "bskip_btn";
	this.bskip_btn.parent = this;
	this.bskip_btn.setTransform(115,105);
	this.bskip_btn.filters = [new cjs.ColorFilter(0.4, 0.4, 0.4, 1, 0, 0, 153, 0)];
	this.bskip_btn.cache(-69,-20,138,41);
	new cjs.ButtonHelper(this.bskip_btn, 0, 1, 2, false, new lib.Skip(), 3);

	this.broll_btn = new lib.Roll();
	this.broll_btn.name = "broll_btn";
	this.broll_btn.parent = this;
	this.broll_btn.setTransform(69.5,142);
	this.broll_btn.filters = [new cjs.ColorFilter(0.4, 0.4, 0.4, 1, 0, 0, 153, 0)];
	this.broll_btn.cache(-69,-20,138,41);
	new cjs.ButtonHelper(this.broll_btn, 0, 1, 2, false, new lib.Roll(), 3);

	this.gskip_btn = new lib.Skip();
	this.gskip_btn.name = "gskip_btn";
	this.gskip_btn.parent = this;
	this.gskip_btn.setTransform(72.1,381);
	this.gskip_btn.filters = [new cjs.ColorFilter(0.4, 0.4, 0.4, 1, 0, 153, 0, 0)];
	this.gskip_btn.cache(-69,-20,138,41);
	new cjs.ButtonHelper(this.gskip_btn, 0, 1, 2, false, new lib.Skip(), 3);

	this.groll_btn = new lib.Roll();
	this.groll_btn.name = "groll_btn";
	this.groll_btn.parent = this;
	this.groll_btn.setTransform(84,418);
	this.groll_btn.filters = [new cjs.ColorFilter(0.4, 0.4, 0.4, 1, 0, 153, 0, 0)];
	this.groll_btn.cache(-69,-20,138,41);
	new cjs.ButtonHelper(this.groll_btn, 0, 1, 2, false, new lib.Roll(), 3);

	this.yskip_btn = new lib.Skip();
	this.yskip_btn.name = "yskip_btn";
	this.yskip_btn.parent = this;
	this.yskip_btn.setTransform(568,376.4);
	this.yskip_btn.filters = [new cjs.ColorFilter(0.4, 0.4, 0.4, 1, 153, 153, 0, 0)];
	this.yskip_btn.cache(-69,-20,138,41);
	new cjs.ButtonHelper(this.yskip_btn, 0, 1, 2, false, new lib.Skip(), 3);

	this.yroll_btn = new lib.Roll();
	this.yroll_btn.name = "yroll_btn";
	this.yroll_btn.parent = this;
	this.yroll_btn.setTransform(559.4,418);
	this.yroll_btn.filters = [new cjs.ColorFilter(0.4, 0.4, 0.4, 1, 153, 153, 0, 0)];
	this.yroll_btn.cache(-69,-20,138,41);
	new cjs.ButtonHelper(this.yroll_btn, 0, 1, 2, false, new lib.Roll(), 3);

	this.rskip_btn = new lib.Skip();
	this.rskip_btn.name = "rskip_btn";
	this.rskip_btn.parent = this;
	this.rskip_btn.setTransform(485,79);
	this.rskip_btn.filters = [new cjs.ColorFilter(0.4, 0.4, 0.4, 1, 153, 0, 0, 0)];
	this.rskip_btn.cache(-69,-20,138,41);
	new cjs.ButtonHelper(this.rskip_btn, 0, 1, 2, false, new lib.Skip(), 3);

	this.rroll_btn = new lib.Roll();
	this.rroll_btn.name = "rroll_btn";
	this.rroll_btn.parent = this;
	this.rroll_btn.setTransform(441.4,42);
	this.rroll_btn.filters = [new cjs.ColorFilter(0.4, 0.4, 0.4, 1, 153, 0, 0, 0)];
	this.rroll_btn.cache(-69,-20,138,41);
	new cjs.ButtonHelper(this.rroll_btn, 0, 1, 2, false, new lib.Roll(), 3);

	this.pskip_btn = new lib.Skip();
	this.pskip_btn.name = "pskip_btn";
	this.pskip_btn.parent = this;
	this.pskip_btn.setTransform(101,104);
	this.pskip_btn.filters = [new cjs.ColorFilter(0.4, 0.4, 0.4, 1, 91.8, 0, 122.4, 0)];
	this.pskip_btn.cache(-69,-20,138,41);
	new cjs.ButtonHelper(this.pskip_btn, 0, 1, 2, false, new lib.Skip(), 3);

	this.proll_btn = new lib.Roll();
	this.proll_btn.name = "proll_btn";
	this.proll_btn.parent = this;
	this.proll_btn.setTransform(155.5,62);
	this.proll_btn.filters = [new cjs.ColorFilter(0.4, 0.4, 0.4, 1, 91.8, 0, 153, 0)];
	this.proll_btn.cache(-69,-20,138,41);
	new cjs.ButtonHelper(this.proll_btn, 0, 1, 2, false, new lib.Roll(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.proll_btn},{t:this.pskip_btn},{t:this.rroll_btn},{t:this.rskip_btn},{t:this.yroll_btn},{t:this.yskip_btn},{t:this.groll_btn},{t:this.gskip_btn},{t:this.broll_btn},{t:this.bskip_btn},{t:this.continue_btn},{t:this.win_txt}]}).wait(2));

	// die
	this.die_movie = new lib.dice();
	this.die_movie.name = "die_movie";
	this.die_movie.parent = this;
	this.die_movie.setTransform(323.1,254.3);

	this.timeline.addTween(cjs.Tween.get(this.die_movie).wait(2));

	// Board
	this.board_movie = new lib.Board();
	this.board_movie.name = "board_movie";
	this.board_movie.parent = this;
	this.board_movie.setTransform(320.5,238.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("ArPh3IDwAAIAADvIjwAAIjwAAIjwAAIAAjvIDwAAIAADvArPh3IAADvAu/h3IDwAAAjvh3IDvAAIAADvIjvAAIjwAAADwh3IAADvIjwAAAjvh3IAADvAAAh3IDwAAIDwAAIDwAAIAADvIjwAAIjwAAAnfh3IDwAAAPAh3IDwAAIAADvIjwAAIjwAAAPAh3IAADvAHgh3IAADvALQh3IDwAA");
	this.shape.setTransform(120,-54);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("APAB4IAAjvIDwAAIAADvgALQB4IAAjvIDwAAIAADvgAHgB4IAAjvIAADvIjwAAIjwAAIjvAAIAAjvIAADvIjwAAIAAjvIDwAAIDvAAIAADvIAAjvIDwAAIAADvIAAjvIDwAAIDwAAIAADvgArPB4IAAjvIDwAAIAADvgAu/B4IAAjvIDwAAIAADvgAu/B4IjwAAIAAjvIDwAAIAADvgAPAh3gArPh3g");
	this.shape_1.setTransform(120,-54);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.board_movie}]}).wait(2));

	// back
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000033").s().p("Egx/AlgMAAAhK/MBj/AAAMAAABK/g");
	this.shape_2.setTransform(320,240);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-66.9,641,547);


// stage content:
(lib.PentUpAnger = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{Title:0,Game:4,Instructions:9,About:14});

	// timeline functions:
	this.frame_3 = function() {
		pent.registerStage(this);
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(3).call(this.frame_3).wait(17));

	// Scenes
	this.titleScreen = new lib.TitleScreen();
	this.titleScreen.name = "titleScreen";
	this.titleScreen.parent = this;
	this.titleScreen.setTransform(320,240,1,1,0,0,0,320,240);

	this.gameScreen = new lib.GameScreen();
	this.gameScreen.name = "gameScreen";
	this.gameScreen.parent = this;
	this.gameScreen.setTransform(320,240,1,1,0,0,0,320,240);

	this.instructionsScreen = new lib.InstructionsScreen();
	this.instructionsScreen.name = "instructionsScreen";
	this.instructionsScreen.parent = this;
	this.instructionsScreen.setTransform(320,240,1,1,0,0,0,320,240);

	this.aboutScreen = new lib.AboutScreen();
	this.aboutScreen.name = "aboutScreen";
	this.aboutScreen.parent = this;
	this.aboutScreen.setTransform(320,240,1,1,0,0,0,320,240);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000033").s().p("Egx/AlgMAAAhK/MBj/AAAMAAABK/g");
	this.shape.setTransform(320,240);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.titleScreen}]}).to({state:[{t:this.gameScreen}]},4).to({state:[{t:this.instructionsScreen}]},5).to({state:[{t:this.aboutScreen}]},5).to({state:[{t:this.shape}]},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(320,240,640,481.2);
// library properties:
lib.properties = {
	id: '33B13E827245614EA1BFE631BB7766D4',
	width: 640,
	height: 480,
	fps: 30,
	color: "#66CCFF",
	opacity: 1.00,
	manifest: [],
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
an.compositions['33B13E827245614EA1BFE631BB7766D4'] = {
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



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;