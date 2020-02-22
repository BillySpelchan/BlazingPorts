/* TileLayer based on Game Jam Library is Copyright (c) 2013 Billy D. Spelchan */
// require ssl.js

class TileMap {
	constructor(width = 64, height = 64, wrapping = false, fill=0) {
		this.width = width;		/** Width of the tile map */
		this.height = height;	/** Height of the tile map */
		this.mapChanged = true;	/** Flag inidicating map changed */
		this._shouldWrap = wrapping; /** Flag true if map wraps */
		
		/** If map not wrapped, values to use for out of bounds tiles */
		this._outOfBoundsTop =  -1;
		this._outOfBoundsBottom =  -1;
		this._outOfBoundsLeft =  -1;
		this._outOfBoundsRight =  -1;
		
		/** Array [y][x] holding the map data */
		this._mapData = new Array(this.height);
		for (var cntrRow = 0; cntrRow < this.height; ++cntrRow) {
			this._mapData[cntrRow] = new Array(this.width);
			for (var cntrCol = 0; cntrCol < this.width; ++cntrCol) {
				this._mapData[cntrRow][cntrCol] = fill;
			}
		}
	}

	// ***** METHODS - Map Management *****
		
	/** Gets the tile at the indicated location. If the location specified
	 * is outside the map, the wrap state will determine if the coordinates
	 * will wrap or if the outOfBounds value will be returned.
	 * 
	 * @param x map x coordinate
	 * @param y map y coordinate
	 * @return the tile at the indicated location. */
	getTile(x, y) {
		var rv = -1;
		
		if (this._shouldWrap) {
			var tx = x % this.width;
			if (tx < 0) tx += this.width;
			var ty = y % this.height;
			if (ty < 0) ty += this.height;
			rv = this._mapData[ty][tx];
		} else if ((x < 0) || (x >= this.width) || (y < 0) || (y >= this.height) )
			if (x < 0) rv = this._outOfBoundsLeft;
			else if (x >= this.width) rv = this._outOfBoundsRight;
			else if (y < 0) rv = this._outOfBoundsTop; 
			else rv = this._outOfBoundsBottom;
		else
			rv = this._mapData[y][x];
		return rv;
	}
		
	/** Sets the indicated tile to indicated value. If coordinates 
	 * specified are out of bounds, the request is IGNORED! While this
	 * could be wrapped, I feel too much danger of accidental wrapping.
	 * 
	 * @param x map x coordinate
	 * @param y map y coordinate
	 * @param value value to put into map */
	setTile(x, y, value)	{
		if ((x<0) || (y<0) || (x>=this.width) ||(y>=this.height)) {
			console.log(`setTile(${x}, ${y}, ${value}) is invalid.`);
			return;
		}
		this._mapData[y][x] = value;
		this.mapChanged = true;
	}
		
	/** Clears the map with the indicated value.
	 * 
	 * @param value value to clear the map with. */
	clearMap(value) {
		var cntrRow, cntrCol;
			
		for (var cntrRow = 0; cntrRow < this.height; ++cntrRow)
			for (var cntrCol = 0; cntrCol < this.width; ++cntrCol)
				this._mapData[cntrRow][cntrCol] = value;
		this.mapChanged = true;
	}
		
	/** Resizes the map. Top-Left portion of map is kept, with extra space 
	 * filled with the provided value. */
	resize(w, h, filler) {
		var cntrX, cntrY, rows, cols;
			
		if (h < this.height)
			this._mapData.splice(h);
		if (w < this.width) {
			rows = Math.min(h, this.height);
			for (var cntrY = 0; cntrY < rows; ++cntrY)
				this._mapData[cntrY].splice(w);
		}
		if (h > this.height) {
			cols = Math.min(w, this.width);
			for (var cntrY = this._height; cntrY < h; ++cntrY) {
				this._mapData[cntrY] = new Array(cols);
				for (var cntrX = 0; cntrX > cols; ++cntrX)
					this._mapData[cntrY][cntrX] = filler;
			}
		}
		if (w > this.width) {
			for (cntrY = 0; cntrY < h; ++cntrY)
				for (cntrX = this.width; cntrX < w; ++cntrX)
					this._mapData[cntrY][cntrX] = filler;
		}
		this._width = w;
		this._height = h;
		this.mapChanged = true;
	}
	
	/** sets tiles from the map with data from a one-dimensional array 
	 *
	 * @param data 1D array containing data to set map with
	 * @param width number of columns in data array
	 * @param height number of rows in data array
	 * @param offX offset X coordinate to start copying to
	 * @param offY offset Y coordinate to start copying to
	 * @param resize set to true if size of tilemap should be adjusted to hold added data. */
	setTilesFromRawData(data, width, height, offX=0, offY=0, bResize=false) {
		var offsetX = offX;
		var offsetY = offY
		if ((offsetX < 0) || (offsetY < 0))
			return;
		if ((bResize != undefined) && (bResize == true))
			this.resize(width + offsetX, height+offsetY);
		var w = Math.min(width, this.width - offsetX);
		var h = Math.min(height, this.height - offsetY);
		var indx = 0;
		for (var cntrY = 0; cntrY < h; ++cntrY) {
			for (var cntrX = 0; cntrX < w; ++cntrX) {
				this._mapData[cntrY + offsetY][cntrX + offsetX] = data[indx];
				++indx;
			}
		}
		this.mapChanged = true;
	}
	
	/** create a new tilemap that is a portion of this tilemap
	 *
	 * @param x map x coordinate to start copying from
	 * @param y map y coordinate to start copying from
	 * @param w width of clip
	 * @oaran h height of clip 
	 * @return tilemap containing indicated data*/
	createClip(x, y, w, h)
	{
		var clip= new TileMap(w,h);
		for (var cntrRow = 0; cntrRow < h; ++cntrRow)
			for (var cntrCol = 0; cntrCol < w; ++cntrCol)
				clip.setTile(cntrCol, cntrRow, this.getTile(x + cntrCol, y + cntrRow));
		return clip;
	}
	
	/** paste a tilemap onto this tilemap
	 *
	 * @param x map x coordinate to start copying to
	 * @param y map y coordinate to start copying to
	 * @param nw width of clip to copy default width of clip
	 * @oaran nh height of clip to copy default height of clip */
	pasteClip(clip, x, y, nw=-1, nh=-1) {
		var clipW = nw;
		if (nw == -1) clipW = clip.width;
		var clipH = nh;
		if (nh == -1) clipH = clip.height;
		for (var cntrY = 0; cntrY < clipH; ++cntrY)
			for (var cntrX = 0; cntrX < clipW; ++cntrX)
				this.setTile(x + cntrX, y+cntrY, clip.getTile(cntrX, cntrY));
	}

	/** Fill the map with a solid block of tiles.
	 *
	 * @param x map x coordinate to start copying from
	 * @param y map y coordinate to start copying from
	 * @param w width of clip
	 * @oaran h height of clip 
	 * @param value value to put into map */
	fillRect(x, y, w, h, value) {
		for (var cntrY = 0; cntrY < h; ++cntrY)
			for (var cntrX = 0; cntrX < w; ++cntrX)
				this.setTile(x + cntrX, y+cntrY, value);
		this.mapChanged = true;
	}
	
}

class TileRenderer {
	constructor(colors = null, offset = 0, tileSize = null) {
		if (colors == null) {
			this._colors = ["#000", "#F00", "#0F0", "#FF0",
					"#00F", "#F0F", "#0FF", "#FFF"];
		} else
			this._colors = colors;
		this.offset = offset;
		if (tileSize == null)
			this.tileSize = new SLLDimension(32,32);
		else
			this.tileSize = tileSize
	}
	
	render(ctx, tileID, rect) {
		var tid = (tileID - this.offset) % this._colors.length;
		if (tid < 0) tid += this._colors.length;
		ctx.save();
		var oldFill = ctx.fillStyle;
		ctx.fillStyle = this._colors[tid];
		ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
		ctx.fillStyle = oldFill;
		ctx.restore();
	}
}

class TileMapLayer extends SLLLayer {
	constructor(id, width, height, tilemap, renderer) {
		super(id, width, height);
		this.tilemap = tilemap;
		this.renderer = renderer;
		this.viewport = new SLLRectangle(0,0,width,height);
		this.canvas = null
	}
	
	renderToOffscreenCanvas() {
		if (this.canvas == null)
			this.canvas = document.createElement('canvas');
		var ts = this.renderer.tileSize;
		var cw = this.tilemap.width * ts.width;
		var ch = this.tilemap.height * ts.height;
		this.canvas.width = cw;
		this.canvas.height = ch;
		var ctx = this.canvas.getContext('2d');
		var rect = new SLLRectangle(0,0, ts.width, ts.height);
		for (var cntrRow = 0; cntrRow < this.tilemap.height; ++cntrRow) {
			for (var cntrCol = 0; cntrCol < this.tilemap.width; ++cntrCol) {
				var tid = this.tilemap.getTile(cntrCol, cntrRow);
				rect.x = cntrCol * ts.width;
				rect.y = cntrRow * ts.height;
				this.renderer.render(ctx, tid, rect);
			}
		}
		this.tilemap.mapChanged = false;
	}
	
	drawSelf(ctx, bounds, drawOutsideBounds = false) {
		if (this.findRealPosition().intersects(bounds) == false)
			return bounds;
		if (this._visible) {
			ctx.save();
			var realRect = this.findRealPosition();
			var scaleX = realRect.width / this._logicalPosition.width;
			var scaleY = realRect.height / this._logicalPosition.height;
			if ((this.canvas == null) || (this.tilemap.mapChanged))
				this.renderToOffscreenCanvas();
			var rect = this._realPosition.getIntersection(bounds);
			var offscreenCtx = this.canvas.getContext('2d');
			ctx.drawImage(this.canvas, this.viewport.x, this.viewport.y, this.viewport.width, this.viewport.height,
					realRect.x, realRect.y, realRect.width, realRect.height);
//			var data = getImageData(viewport.x, viewport.y, viewport.width, viewport.height);
			ctx.restore();
		}
		
		return bounds;		
	}
}


// -----------------------------------

class TilePalette extends SLLLayer {
	constructor( lid, cols, rows, renderer, gap = 2) {
		super(lid, cols * (renderer.tileSize.width + gap * 2),
				rows * (renderer.tileSize.height + gap * 2));
		this.rows = rows;
		this.cols = cols;
		this.gap = gap;
		this.renderer = renderer;
		this._backgroundColor = "#FFF";
		this.overColor = "#0FF";
		this.selectedColor = "#F0F";
		this.currentSelected = 0;
		this.currentOver = 0;
	}
	
	setColors(back, over, selected) {
		this._backgroundColor = back;
		this.overColor = "#0FF";
		this.selectedColor = "#F0F";
	}
	
	drawSelf(ctx, bounds, drawOutsideBounds = false) {
		if (this.findRealPosition().intersects(bounds) == false)
			return bounds;
		if (this._visible) {
			ctx.save();
			var oldFill = ctx.fillStyle;

			var rect = new SLLRectangle(0,0, 
								this.renderer.tileSize.width + this.gap * 2,
								this.renderer.tileSize.height + this.gap * 2);
			var renderRect = new SLLRectangle(this.gap, this.gap, 
								this.renderer.tileSize.width,
								this.renderer.tileSize.height);
			for (var r = 0; r < this.rows; ++r) {
				for (var c = 0; c < this.cols; ++c) {
					var tid = r*this.cols+c;
					var color = this._backgroundColor;
					if (tid == this.currentOver)
						color = this.overColor;
					if (tid == this.currentSelected)
						color = this.selectedColor;
					rect.x = c * rect.width;
					rect.y = r * rect.height;
					ctx.fillStyle = color;
					ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
					renderRect.x = rect.x + this.gap;
					renderRect.y = rect.y + this.gap;
					this.renderer.render(ctx, tid, renderRect);
				}
			}
			ctx.fillStyle = oldFill;
			ctx.restore();
		}
		
		return bounds;		
	}
	
	findTileAtRealCoordinate(x,y) {
		var tileID = -1;
		var p = this.convertRealPointToLogicalPoint(new SLLPoint(x,y));
		var itemWidth = this.renderer.tileSize.width + this.gap * 2;
		var itemHeight = this.renderer.tileSize.width + this.gap * 2;
		var selectedCol = Math.floor(p.x / itemWidth);
		var selectedRow = Math.floor(p.y / itemHeight);
		if ((selectedRow >= 0) && (selectedRow < this.rows) && (selectedCol >= 0) && (selectedCol < this.cols)) {
			tileID = selectedRow * this.cols + selectedCol;
			//console.log(`Over tile ${selectedCol},${selectedRow} = ${tileID}`);
		}
		return tileID;
	}
	
	mouseDown(x, y)
	{
		var dirty = super.mouseDown(x,y);
		var tileID = this.findTileAtRealCoordinate(x,y);
		if (tileID >= 0) {
			dirty |= !(this.currentSelected == tileID);
			this.currentSelected = tileID;
		}
		
		return dirty;
	}

	mouseMove(x, y)
	{
		var dirty = super.mouseMove(x,y);
		var tileID = this.findTileAtRealCoordinate(x,y);
		if (tileID >= 0) {
			dirty |= !(this.currentOver == tileID);
		}
		this.currentOver = tileID;
		
		return dirty;
	}

}
	