/**BGLayers library
@author Billy D. Spelchan
@version 0.4
@license
Copyright (c) 2010 Billy D. Spelchan.
 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
*/
/*
Please note that all variables with an underscore preceeding them should be
considered to be protected variables and should be modified outside of the
class with caution.
*/

// Create the namespace for this library
var BGLayers = new Object();

/**
 * General purpose function used to copy the properties from a parent or super class
 * into it's child. This is used to add inheritance to JavaScript in a way that is
 * compatible with most browsers.
 *
 * @param child The child class that is going to inherit properties.
 * @param supr The Super class from which properties will be inherited.
*/
BGLayers.inheritProperties = function(child, supr)
{
	for (var property in supr) {  
		if (typeof child[property] == "undefined")  
			child[property] = supr[property];  
	}  
}

// --------------------------------------------------------------------------

/**
* @class Generic point class for indicating the position of a point on a 2D plane.
*/
BGLayers.Point = function(x,y)
{
	this.x = x;
	this.y = y;
}

// --------------------------------------------------------------------------

/**
* @class Generic dimension class for describing the width and hight of something.
*/
BGLayers.Dimension = function(w,h)
{
	this.width = w;
	this.height = h
}

// --------------------------------------------------------------------------

/**
* @class Rectangle. Passing no parameters creates an empty rectangle. Passing
* a rectangle clones the rectangle. Passing x,y,width,height creates the 
* specified rectangle.
*/
BGLayers.Rectangle = function(x, y, w, h)
{
	if (arguments.length == 1) { // clone rectangle
		this.x = x.x;
		this.y = x.y;
		this.width = x.width;
		this.height = x.height;
	} else if (arguments.length == 4) { // parameterized rectangle
		this.x = x;
		this.y = y;
		this.width = w;
		this.height = h;
	} else { // default to empty rectangle
		this.x = 0;
		this.y = 0;
		this.width = 0;
		this.height = 0;
	}
}

/**
* Utility method to change the bounds of a rectangle.
*/
BGLayers.Rectangle.prototype.bounds = function(x,y,w,h)
{
	this.x = x;
	this.y = y;
	this.width = w;
	this.height = h;
}

/**
* Checks to see if the indicated point is inside the rectangle returning true if it is.
* May either pass a Point object or x and y coordinates
*/
BGLayers.Rectangle.prototype.containsPoint = function(x,y) {
	var deltaX, deltaY;
	if (arguments.length == 1) {
		deltaX = x.x - this.x;
		deltaY = x.y - this.y;
	} else {
		deltaX = x - this.x;
		deltaY = y - this.y;
	}
	if ((deltaX < 0) || (deltaY < 0) || (deltaX >= this.width) || (deltaY >= this.height))
		return false;
	else
		return true;
}

/**
 * Checks to see if the indicated rectangle is contained within the rectangle.
 * May either pass a Rectangle object or x,y,w,h parameters.
*/
BGLayers.Rectangle.prototype.containsRect = function(x,y,w,h) {
	var x1,y1,x2,y2;
	if (arguments.length == 1) {
		x1 = x.x;
		x2 = x.x + x.width - 1;
		y1 = x.y;
		y2 = x.y + x.height -1;
	} else {
		x1 = x;
		x2 = x + w - 1;
		y1 = y;
		y2 = y + h -1;
	}
	if (this.containsPoint(x1, y1) )
		if (this.containsPoint(x2, y2))
			return true;
	return false;
}

/**
* Creates a rectangle that is the Intersection of two rectangles.
*/
BGLayers.Rectangle.prototype.getIntersection = function(rect)
{
	var x = Math.max(this.x, rect.x);
	var x2 = Math.min(this.x+this.width-1, rect.x + rect.width-1);
	var y = Math.max(this.y, rect.y);
	var y2 = Math.min(this.y+this.height-1, rect.y + rect.height-1);
	return new BGLayers.Rectangle(x, y, x2-x+1, y2-y+1);
}

/**
* Checks to see if there is any overlapping between this rectangle and the passed rectangle
* returning true if there is some overlap.
*/
BGLayers.Rectangle.prototype.intersects = function(rect) 
{
	if ( (this.x < (rect.x + rect.width)) && 
			( (this.x + this.width) > rect.x) &&
			(this.y < (rect.y + rect.height)) && 
			( (this.y + this.height) > rect.y) )
		return true;
	else
		return false;
}

/**
 * Align the rectangle to pixel bounds (parameters are all integers).
*/
BGLayers.Rectangle.prototype.makePixelAligned = function()
{
	var x = Math.floor(this.x);
	var y = Math.floor(this.y);
	var w = Math.ceil(this.width + (this.x - x));
	var h = Math.ceil(this.height + (this.y - y));
	this.bounds(x,y,w,h);
}

// --------------------------------------------------------------------------

BGLayers.DirtyRect = function(rect)
{
	this.rect = new BGLayers.Rectangle(rect);
	this.prev = null;
	this.nxt = null;
}

BGLayers.DirtyRect.prototype.addSelf = function(parent)
{
	if ( (this.prev != null) || (this.nxt != null) )
		this.removeSelf();
	this.prev = parent;
	this.nxt = parent.nxt;
	if (this.nxt != null)
		this.nxt.prev = this;
	parent.nxt = this;
}

BGLayers.DirtyRect.prototype.removeSelf = function()
{
	if (this.prev != null) {
		this.prev.nxt = this.nxt;
	}
	if (this.nxt != null)
		this.nxt.prev = this.prev;
	this.prev = null;
	this.nxt = null;	
}

// --------------------------------------------------------------------------

/**
 * @class The most basic of layers used to draw a solid rectangle. This has built in
 * child handling so can be used as a container as well.
 * 
 * @id an object used to identify this particular layer.
 * @w The logical width of the layer
 * @h The logical height of the layer
 */
BGLayers.Layer = function(id, w, h)
{
	this.id = id;
	this._logicalSize = new BGLayers.Dimension(w, h);
	this._logicalPosition = new BGLayers.Rectangle(0,0,w,h);
	this._realPosition = new BGLayers.Rectangle();
	this._realPositionKnown = false;
	this._solid = true;
	this._backgroundColor = 'rgb(0,0,0)';
	this._children = new Array();
	this._visible = true;
	this._dirtyList = new BGLayers.DirtyRect(this._logicalPosition);
}

/**
* Adds a child to the list of children that this layer has.
*
* @param child Child to add to the display list.
*/
BGLayers.Layer.prototype.addChild = function(child, logPos) 
{ 
	child.setParent(this, logPos);
	this._children.push(child); 
}

/**
* Adds a rectangle to the top parent's dirty rectangle list. The rectangle should be in 
* real-world coordinates. Pass null for the rectangle to force the entire layer to become dirty.
*/
BGLayers.Layer.prototype.addDirty = function(rect)
{
	// get to the root layer
	if (this.parent != null) {
		if (rect != null)
			this.parent.addDirty(rect);
		else
			this.parent.addDirty(this.findRealPosition());
		return;
	}

	// make sure rect exists and is pixel aligned	
	var r = rect;
	if (rect == null) // force full dirty layer
		r = new BGLayers.Rectangle(this.findRealPosition());
	else
		r = new BGLayers.Rectangle(rect);
	r.makePixelAligned();

	var dirtyArray = new Array();
	dirtyArray.push(r);	
	// at this point we know we are at the root layer.

	while( dirtyArray.length > 0) {
		r = dirtyArray.pop();

		// first pass is to make sure dirty rect not already in list
		var nextDirty = this._dirtyList.nxt;
		var contained = false;
		while (nextDirty != null) {
			var bounds = nextDirty.rect;
			if (bounds.containsRect(r)) {
				contained = true;
				nextDirty = null;
			} else
				nextDirty = nextDirty.nxt;
		};
		if (contained)
			continue;
	
		// second pass is to remove any dirty rects in list that are contained by new rect
		nextDirty = this._dirtyList.nxt;
		while (nextDirty != null) {
			var bounds = nextDirty.rect;
			if (r.containsRect(bounds)) {
				var toRemove = nextDirty;
				nextDirty = toRemove.nxt;
				toRemove.removeSelf();
			} else
				nextDirty = nextDirty.nxt;
		};
	
		// third pass is to eliminate overlap.
		var overlap = null;
		nextDirty = this._dirtyList.nxt;
		while (nextDirty != null) {
			var bounds = nextDirty.rect;
			if (r.intersects(bounds)) {
				overlap = bounds;
				nextDirty = null;
			} else
				nextDirty = nextDirty.nxt;
		}

		if (overlap != null) {
			var x2 = r.x + r.width - 1;
			var bx2 = overlap.x + overlap.width - 1;
			var y2 = r.y + r.height - 1;
			var by2 = overlap.y + overlap.height - 1;
	
			// clip left
			if (r.x < overlap.x) {
				// add the overlapped area to the list by reprocessing it
				dirtyArray.push(new BGLayers.Rectangle(r.x, r.y, 
							overlap.x - r.x, r.height));
				// adjust the dirty rect as there may overlap in a different direction.
				r.x = overlap.x;
				r.width = x2 - overlap.x + 1;
			}			
	
			// clip right
			if (x2 > bx2) {
	//dirty.addSelf(this._dirtyList);
	//return;
				dirtyArray.push(new BGLayers.Rectangle(bx2+1, r.y, 
							x2 - bx2, r.height));
				// adjust the dirty rect as there may overlap in a different direction.
				r.width = bx2 - r.x+1;
			}
	
			// clip top
			if (r.y < overlap.y) {
				dirtyArray.push(new BGLayers.Rectangle(r.x, r.y,
							r.width, overlap.y - r.y));
				// adjust the dirty rect as there may overlap in a different direction.
				r.y = overlap.y; 
				r.height = y2 - overlap.y+1; 
			}
	
			// clip bottom
			if (y2 > by2) {
	//				console.log("...clipping bottom");
				// if we reach this point, everything else should be clipped so only need bottom part.
				dirtyArray.push(new BGLayers.Rectangle(r.x, by2+1, 
							r.width, y2-by2));
			}
		} else { // no clipping
			var dirty = new BGLayers.DirtyRect(r);
			dirty.addSelf(this._dirtyList);
		}
	}
}

/**
* Changes the logical bounds of the layer. Passing a null value forces the layer to
* recalculate it's real position.
*/
BGLayers.Layer.prototype.adjustPosition = function(logPos)
{
	this.addDirty(this.findRealPosition());
	if (logPos != null) {
		this._logicalPosition.x = logPos.x;
		this._logicalPosition.y = logPos.y;
		this._logicalPosition.width = logPos.width;
		this._logicalPosition.height = logPos.height;
	}
	this._realPositionKnown = false;
	for (var cntr = 0; cntr < this._children.length; ++cntr)
		this._children[cntr].adjustPosition(null);
	this.addDirty(this.findRealPosition());
}

/**
* Converts the provided rectangle from layer coordinates to real canvas coordinates.
*/
BGLayers.Layer.prototype.convertLogicalToReal = function(rect)
{
	var realRect = new Rectangle();
	this.findRealPosition();
	var scaleX = this._realPosition.width / this._logicalSize.width;
	var scaleY = this._realPosition.height / this._logicalSize.height;
	realRect.x = this._realPosition.x + rect.x * scaleX;
	realRect.y = this._realPosition.y + rect.y * scaleY;
	realRect.width = this._realPosition.width + rect.width * scaleX;
	realRect.height = this._realPosition.height + rect.height * scaleY;
	return realRect;
}

/**
 * Changes the logical size of the layer
*/
BGLayers.Layer.prototype.changeSize = function(w, h)
{
	this._logicalSize.width = w;
	this._logicalSize.height = h;
	this.addDirty(null);
}

/**
* Draws itself (not including children).
* @protected This should only be called internally
* @param ctx Canvas context
* @param bounds Real boundaries of the area to be drawn
*/
BGLayers.Layer.prototype.drawSelf = function(ctx, bounds)
{
	if (this.findRealPosition().intersects(bounds) == false)
		return;
	if ((this._solid) && (this._visible)) {
		ctx.save();
		this.findRealPosition();
		var rect = this._realPosition.getIntersection(bounds);
		var oldFill = ctx.fillStyle;
		ctx.fillStyle = this._backgroundColor;
		ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
		ctx.fillStyle = oldFill;
		ctx.restore();
	}
}

/**
* Translates the logical bounds into real canvas coordinates
*/
BGLayers.Layer.prototype.findRealPosition = function()
{
	if (this._realPositionKnown)
		return this._realPosition;
	var parentPos = this._logicalPosition;
	var w = this._logicalSize.width;
	var h = this._logicalSize.height;
	if (this.parent != null) {
		parentPos = this.parent.findRealPosition();
		w = this.parent._logicalSize.width;
		h = this.parent._logicalSize.height;
	}
	var scaleX = parentPos.width / w;
	var scaleY = parentPos.height / h;
	this._realPosition.x = parentPos.x + this._logicalPosition.x * scaleX;
	this._realPosition.y = parentPos.y + this._logicalPosition.y * scaleY;
	this._realPosition.width = this._logicalPosition.width * scaleX;
	this._realPosition.height = this._logicalPosition.height * scaleY;
	this._realPositionKnown = true;
	return this._realPosition;
}

BGLayers.Layer.prototype.getPosition = function()
{
	return new BGLayers.Point(this._logicalPosition.x, this._logicalPosition.y);
}

BGLayers.Layer.prototype.mouseDown = function(x, y)
{
	var dirty = false;
	for (var cntr = 0; cntr < this._children.length; ++cntr)
		dirty |= this._children[cntr].mouseDown(x,y);
	return dirty;
}

BGLayers.Layer.prototype.mouseMove = function(x, y)
{
	var dirty = false;
	for (var cntr = 0; cntr < this._children.length; ++cntr)
		dirty |= this._children[cntr].mouseMove(x,y);
	return dirty;
}

BGLayers.Layer.prototype.mouseUp = function(x, y)
{
	var dirty = false;
	for (var cntr = 0; cntr < this._children.length; ++cntr)
		dirty |= this._children[cntr].mouseUp(x,y);
	return dirty;
}

/**
* Changes the logical position of this layer.
*/
BGLayers.Layer.prototype.moveTo = function(x,y)
{
	this.addDirty(new BGLayers.Rectangle(this.findRealPosition()));
	this._logicalPosition.x = x;
	this._logicalPosition.y = y;
	this._realPositionKnown = false;
	for (var cntr = 0; cntr < this._children.length; ++cntr)
		this._children[cntr].adjustPosition(null);	
	this.addDirty(new BGLayers.Rectangle(this.findRealPosition()));
}

/**
* Removes the indicated child from the display list.
* 
* @param child Child to remove from the display list.
*/	
BGLayers.Layer.prototype.removeChild = function(child)
{
	var childIndex = -1;
	var cntr;
	
	this.addDirty(new BGLayers.Rectangle(child.findRealPosition()));
	for (cntr = 0; cntr < this._children.length; ++cntr)
		if (this._children[cntr] == child)
			childIndex = cntr;
	if (childIndex >= 0)
		this._children.splice(childIndex, 1);
	child.parent = null;
}

/**
* Draws the layer and it's children onto the canvas.
*
* @param ctx Canvas context
* @param bounds Real boundaries of the area to be drawn
*/
BGLayers.Layer.prototype.render = function(ctx, bounds)
{
	var cntr, startDraw = -1;
	
	if (!this._visible)
		return;
	
	// check for solid
	for (cntr = this._children.length - 1; cntr >= 0; --cntr) {
		if ((this._children[cntr]._solid) && 
				(this._children[cntr].findRealPosition().containsRect(bounds)) &&
				(this._children[cntr]._visible) ) {
			startDraw = cntr;
			break;
		}
	}
	if (startDraw == -1) {
		this.drawSelf(ctx, bounds);
		startDraw = 0;
	}
	for (cntr = startDraw; cntr < this._children.length; ++cntr)
		this._children[cntr].render(ctx, bounds);
}

/**
* Draws only the dirty areas of the layer.
*/
BGLayers.Layer.prototype.renderDirty = function(ctx)
{
	var nextDirty = this._dirtyList.nxt;
	while (nextDirty != null) {
		var bounds = nextDirty.rect;
		this.render(ctx, bounds);
		var curDirty = nextDirty;
		nextDirty = curDirty.nxt;
		curDirty.removeSelf();
	}
}

/**
 * Changes the color of the layer.
*/
BGLayers.Layer.prototype.setBackgroundColor = function(c)
{
	this._backgroundColor = c;
	this.addDirty(null);
}

/**
* Sets the parent of this layer. The parent is what the logical position of the  layer
* is relative to.
*/
BGLayers.Layer.prototype.setParent = function(parent, logPos)
{
	if (this.parent != null)
		this.parent.removeChild(this)
	this.parent = parent;
	this.adjustPosition(logPos);		
}

/**
 * Sets the visiblity of the layer
*/
BGLayers.Layer.prototype.setVisible = function(v)
{
	this._visible = v;
	this.addDirty(null);
}

BGLayers.Layer.prototype.showDirty = function(ctx, color)
{
	var oldColor = ctx.strokeStyle;
	ctx.strokeStyle = color;

	var nextDirty = this._dirtyList.nxt;
	while (nextDirty != null) {
		var bounds = nextDirty.rect;
		ctx.strokeRect(bounds.x, bounds.y, bounds.width, bounds.height);
		var curDirty = nextDirty;
		nextDirty = curDirty.nxt;
	}
	
	ctx.strokeStyle = oldColor;
}

// --------------------------------------------------------------------------

BGLayers.ImageLayer = function(id, image)
{
	this.supr = new BGLayers.Layer(id, image.width, image.height);
	BGLayers.inheritProperties(this, this.supr);
	
	this._clip = new BGLayers.Rectangle(0,0, image.width, image.height);
	this._image = image;
}

BGLayers.ImageLayer.prototype.setClip = function(rect)
{
	this._clip.x = rect.x;
	this._clip.y = rect.y;
	this._clip.width = rect.width;
	this._clip.height = rect.height;
	this.addDirty(null);
}

BGLayers.ImageLayer.prototype.setImage = function(i)
{
	this._image = i;
	this._clip.width = i.width;
	this._clip.height = i.height;
	this.addDirty(null);
}

BGLayers.ImageLayer.prototype.drawSelf = function(ctx, bounds)
{
	if (this.findRealPosition().intersects(bounds) == false)
		return;
	var rect = this._realPosition.getIntersection(bounds);
	var scaleX = this._clip.width / this._realPosition.width;
	var scaleY = this._clip.height / this._realPosition.height;
	var boundClip = new BGLayers.Rectangle(
				this._clip.x + (rect.x - this._realPosition.x) * scaleX,
				this._clip.y + (rect.y - this._realPosition.y) * scaleY,
				rect.width * scaleX,
				rect.height * scaleY);
	ctx.drawImage(this._image, boundClip.x, boundClip.y, boundClip.width, boundClip.height,
				rect.x, rect.y, rect.width, rect.height);
}

// --------------------------------------------------------------------------
