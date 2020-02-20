/** SLL - Spelchan Layer Library */

/** Generic point class for indicating the position of a point on a 2D plane. */
class SLLPoint {
	constructor(x=0, y=0){
		this.x = x;
		this.y = y;
	}
}

// --------------------------------------------------------------------------

/** Generic dimension class for describing the width and hight of something. */
class SLLDimension {
	constructor(width = 0, height = 0) {
		this.width = width;
		this.height = height;
	}
}

// --------------------------------------------------------------------------

/**
* Rectangle. 
*/
class SLLRectangle {
	constructor(x=0,y=0, width=0, height=0) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	}

	clone(rect) {
		this.x = rect.x;
		this.y = rect.y;
		this.width = rect.width;
		this.height = rect.height;
	}
	

	moveTo(x,y) {
		this.x = x;
		this.y = y;
	}

	resize(width, height) {
		this.width = width;
		this.height = height;
	}

	setBounds(x=0,y=0, width=0, height=0) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	}

	setPosition(point) {
		this.x = point.x;
		this.y = point.y;
	}

	setSize(dimension) {
		this.width = dimension.width;
		this.height = dimension.height;
	}

	/**
	* Checks to see if the indicated point is inside the rectangle returning true if it is.
	* May either pass a Point object or x and y coordinates
	*/
	containsCoordinate(x,y) {
		var deltaX = x - this.x;
		var deltaY = y - this.y;
		return !((deltaX < 0) || (deltaY < 0) || (deltaX >= this.width) || (deltaY >= this.height))
	}
	
	containsPoint(point) {
		return this.containsCoordinate(point.x, point.y)
	}

	containsBounds(x, y, w, h) {
		var x1 = x;
		var x2 = x + w - 1;
		var y1 = y;
		var y2 = y + h -1;
		if (this.containsCoordinate(x1, y1) )
			if (this.containsCoordinate(x2, y2))
				return true;
		return false;
	}
	
	containsRectangle(rect) {
		return this.containsBounds(rect.x, rect.y, rect.width, rect.height)
	}
	
	/** Creates a rectangle that is the Intersection of two rectangles. */
	getIntersection(rect) {
		var x = Math.max(this.x, rect.x);
		var x2 = Math.min(this.x+this.width-1, rect.x + rect.width-1);
		var y = Math.max(this.y, rect.y);
		var y2 = Math.min(this.y+this.height-1, rect.y + rect.height-1);
		return new SLLRectangle(x, y, x2-x+1, y2-y+1);
	}


	/**
	* Checks to see if there is any overlapping between this rectangle and the passed rectangle
	* returning true if there is some overlap.
	*/
	intersects(rect) 
	{
		return ( (this.x < (rect.x + rect.width)) && 
				( (this.x + this.width) > rect.x) &&
				(this.y < (rect.y + rect.height)) && 
				( (this.y + this.height) > rect.y) )
	}

	/**
	 * Align the rectangle to pixel bounds (parameters are all integers).
	*/
	makePixelAligned()
	{
		var x2 = Math.ceil(this.x + this.width);
		var y2 = Math.ceil(this.y + this.height);
		this.x = Math.floor(this.x);
		this.y = Math.floor(this.y);
		this.width = x2 - this.x + 1;
		this.height = y2 - this.y + 1;
	}
}

/* TODO??? In future may want to add the full dirty rectangle handling (though with support for non-dividable rects) */

class SLLLayer {
	/**
	 * The most basic of layers used to draw a solid rectangle. This has built in
	 * child handling so can be used as a container as well.
	 * 
	 * @id an object used to identify this particular layer.
	 * @w The logical width of the layer
	 * @h The logical height of the layer
	 */
	constructor(id, w, h)
	{
		this.id = id;
		this._logicalSize = new SLLDimension(w, h);
		this._logicalPosition = new SLLRectangle(0,0,w,h);
		this._realPosition = new SLLRectangle();
		this._realPositionKnown = false;
		this._solid = true;
		this._splitable = true;
		this._backgroundColor = 'rgb(0,0,0)';
		this._children = new Array();
		this._visible = true;
		this._isDirty = true;
		this._parent = null;
	}

	/**
	* Adds a child to the list of children that this layer has.
	*
	* @param child Child to add to the display list.
	* @param logPos Logical coordinates within 
	*/
	addChild(child, logPos=null) 
	{ 
		child.setParent(this, logPos);
		this._children.push(child);
	}

	/**
	* marks region as dirty or clean. Right now using simplified redraw but may return to
	* dirty rect method in future.
	*/
	setDirty(dirty)
	{
		if (this._isDirty != dirty)
			for (var cntr = 0; cntr < this._children.length; ++cntr)
				this._children[cntr].setDirty(dirty);
			this._isDirty = dirty;
	}
	
	isDirty() {
		if (this._isDirty)
			return true;
		
		var dirty = false
		for (var cntr = 0; cntr < this._children.length; ++cntr)
			dirty |= this._children[cntr].isDirty();
		return dirty
	}

	/**
	* Changes the logical bounds of the layer. Passing a null value forces the layer to
	* recalculate it's real position.
	*/
	adjustPosition(logPos)
	{
		//this.addDirty(this.findRealPosition());
		if (logPos != null) {
			this._logicalPosition.x = logPos.x;
			this._logicalPosition.y = logPos.y;
			this._logicalPosition.width = logPos.width;
			this._logicalPosition.height = logPos.height;
		}
		this._realPositionKnown = false;
		for (var cntr = 0; cntr < this._children.length; ++cntr)
			this._children[cntr].adjustPosition(null);
		this.setDirty(true);
		//this.addDirty(this.findRealPosition());
	}

	/**
	* Converts the provided rectangle from layer coordinates to real canvas coordinates.
	*/
	convertLogicalToReal(rect)
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

	convertRealPointToLogicalPoint(p) {
		var logPoint = new SLLPoint();
		var realRect = this.findRealPosition();
		var scaleX = this._logicalSize.width / this._realPosition.width;
		var scaleY = this._logicalSize.height / this._realPosition.height;
		logPoint.x = (p.x - realRect.x) * scaleX;
		logPoint.y = (p.y - realRect.y) * scaleY;
		return logPoint;
	}

	/**
	 * Changes the logical size of the layer
	*/
	changeSize(w, h)
	{
		this._logicalSize.width = w;
		this._logicalSize.height = h;
		this.setDirty(true);
		this._realPositionKnown = false;
	}

	/**
	* Draws itself (not including children). If clipping not supported and bounds outside
	* of clip then drawOutsideBounds is used to decide if should draw full self or just 
	* return required adjusted bounds.
	* @protected This should only be called internally
	* @param ctx Canvas context
	* @param bounds Real boundaries of the area to be drawn
	* @param drawOutsideBounds action to take if partially clipped
	* @return bounds, or adjusted bounds if outside clipping area
	*/
	drawSelf(ctx, bounds, drawOutsideBounds = false)
	{
		if (this.findRealPosition().intersects(bounds) == false)
			return bounds;
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
		
		return bounds;
	}

	/**
	* Translates the logical bounds into real canvas coordinates
	*/
	findRealPosition()
	{
		if (this._realPositionKnown)
			return this._realPosition;
		var parentPos = this._logicalPosition;
		var w = this._logicalSize.width;
		var h = this._logicalSize.height;
		if (this._parent != null) {
			parentPos = this._parent.findRealPosition();
			w = this._parent._logicalSize.width;
			h = this._parent._logicalSize.height;
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

	getPosition()
	{
		return new SLLPoint(this._logicalPosition.x, this._logicalPosition.y);
	}

	mouseDown(x, y)
	{
		var dirty = false;
		for (var cntr = 0; cntr < this._children.length; ++cntr)
			dirty |= this._children[cntr].mouseDown(x,y);
		return dirty;
	}

	mouseMove(x, y)
	{
		var dirty = false;
		for (var cntr = 0; cntr < this._children.length; ++cntr)
			dirty |= this._children[cntr].mouseMove(x,y);
		return dirty;
	}

	mouseUp(x, y)
	{
		var dirty = false;
		for (var cntr = 0; cntr < this._children.length; ++cntr)
			dirty |= this._children[cntr].mouseUp(x,y);
		return dirty;
	}

	/**
	* Changes the logical position of this layer.
	*/
	moveTo(x,y)
	{
		//this.addDirty(new BGLayers.Rectangle(this.findRealPosition()));
		this._logicalPosition.x = x;
		this._logicalPosition.y = y;
		this._realPositionKnown = false;
		for (var cntr = 0; cntr < this._children.length; ++cntr)
			this._children[cntr].adjustPosition(null);	
		//this.addDirty(new BGLayers.Rectangle(this.findRealPosition()));
		this.setDirty(true);
	}

	/**
	* Removes the indicated child from the display list.
	* 
	* @param child Child to remove from the display list.
	*/	
	removeChild(child)
	{
		var childIndex = -1;
		var cntr;
		
		//this.addDirty(new BGLayers.Rectangle(child.findRealPosition()));
		this.setDirty();
		for (cntr = 0; cntr < this._children.length; ++cntr)
			if (this._children[cntr] == child)
				childIndex = cntr;
		if (childIndex >= 0)
			this._children.splice(childIndex, 1);
		child._parent = null;
	}

	/**
	* Draws the layer and it's children onto the canvas.
	*
	* @param ctx Canvas context
	* @param bounds Real boundaries of the area to be drawn
	*/
	render(ctx, bounds)
	{
		var cntr, startDraw = -1;
		
		if (!this._visible)
			return;
		
		// check for solid
		for (cntr = this._children.length - 1; cntr >= 0; --cntr) {
			if ((this._children[cntr]._solid) && 
					(this._children[cntr].findRealPosition().containsRectangle(bounds)) &&
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
*/

	/**
	 * Changes the color of the layer.
	*/
	setBackgroundColor(c)
	{
		this._backgroundColor = c;
		this.setDirty(true);
	}

	/**
	* Sets the parent of this layer. The parent is what the logical position of the  layer
	* is relative to.
	*/
	setParent(p, logPos)
	{
		if (this._parent != null)
			this._parent.removeChild(this)
		this._parent = p;
		this.adjustPosition(logPos);
	}

	/**
	 * Sets the visiblity of the layer
	*/
	setVisible(v)
	{
		this._visible = v;
		this.setDirty(true);
	}

}

// --------------------------------------------

class SLLImageLayer extends SLLLayer {
	constructor(id, img, clip) {
		super(id, clip.width, clip.height);
		this._clip = clip;
		this._image = img;
	}
	
	setClip(rect)
	{
		this._clip.clone(rect)
		this.setDirty(true);
	}
	
	setImage(img) {
		this._image = img;
	}

	drawSelf(ctx, bounds, drawOutsideBounds = false)
	{
		if (this.findRealPosition().intersects(bounds) == false)
			return;
		var rect = this._realPosition.getIntersection(bounds);
		var scaleX = this._clip.width / this._realPosition.width;
		var scaleY = this._clip.height / this._realPosition.height;
		var boundClip = new SLLRectangle(
					this._clip.x + (rect.x - this._realPosition.x) * scaleX,
					this._clip.y + (rect.y - this._realPosition.y) * scaleY,
					rect.width * scaleX,
					rect.height * scaleY);
		ctx.drawImage(this._image, boundClip.x, boundClip.y, boundClip.width, boundClip.height,
					rect.x, rect.y, rect.width, rect.height);
		
		return bounds;
	}

} 

// --------------------------------------------------------------------------

class SLLTextLayer extends SLLLayer {
	constructor(id, bounds, message) {
		super(id, bounds.width, bounds.height);
		this.moveTo(bounds.x, bounds.y);
		this.alignment = "left";
		this.bodyColor = "#FFF";
		this.outlineColor = "#000";
		this.size = 16;
		this.typeface = "sans-serif";
		this.bold = false;
		this.italic = false;
		this.solid = true;
		this.outline = false;
		this.message = message;
	}

	drawSelf(ctx, bounds, drawOutsideBounds = false)
	{
		if (this.findRealPosition().intersects(bounds) == false)
			return;
		var rect = this._realPosition.getIntersection(bounds);
		var scaleX = this._realPosition.width / this._logicalPosition.width;
		var scaleY = this._realPosition.height / this._logicalPosition.height;
		var nx = rect.x;
		if (this.alignment == "center")
			nx = rect.x + Math.floor(rect.width / 2);
		else if (this.alignment == "right")
			nx = rect.x + rect.width;
		ctx.textAlign = this.alignment;
		var scaleSize = Math.ceil(this.size * scaleY);
		var fontStr = scaleSize+"px ";
		if (this.bold)
			fontStr += " bold ";
		if (this.italic)
			fontStr += " italic ";
		fontStr += this.typeface;
		
		//console.log("Font is: " + fontStr);
		ctx.font = fontStr;
		ctx.strokeStyle = this.outlineColor;
		ctx.fillStyle = this.bodyColor;
		ctx.textBaseline = "top";
		if (this.solid)
			ctx.fillText(this.message, nx, rect.y);
		if (this.outline)
			ctx.strokeText(this.message, nx, rect.y);

		this.setDirty(false);
		return bounds;
	}
	
	/* sets alignment to one of left, center, right, begin, end */
	setAlignment(alignment) {
		this.alignment = alignment;
		this.setDirty(true);
	}
	
	/* Color of the font with body being color of font, and outline the outline color */
	setColor(body, outline) {
		this.bodyColor = body;
		this.outlineColor = outline;
		this.setDirty(true);
	}
	
	setFont(size, typeface="sans-serif", bold=false, italic=false, solid=true, outline=false) {
		this.size = size;
		this.typeface = typeface;
		this.bold = bold;
		this.italic = italic;
		this.solid = solid;
		this.outline = outline;
		this.setDirty(true);
	}
	setText(s) {
		this.message = s;
		this.setDirty(true);
	}
	
}
// --------------------------------------------------------------------------

