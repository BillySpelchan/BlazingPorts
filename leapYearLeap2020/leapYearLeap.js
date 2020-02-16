var LYL = new Object();

LYL.Atlas = new Image();
LYL.Atlas.src = 'leapYearLeapAtlas.png';
// numbers start at 0,0 and are 100x100 gap 4
// score text 
LYL.Dict = {
	//"label" : {"x" : 0, "y": 0, "w": 0, "h": 0},
	"LCD_0" : {"x" : 0, "y": 0, "w": 100, "h": 100},
	"LCD_1" : {"x" : 104, "y": 0, "w": 100, "h": 100},
	"LCD_2" : {"x" : 208, "y": 0, "w": 100, "h": 100},
	"LCD_3" : {"x" : 312, "y": 0, "w": 100, "h": 100},
	"LCD_4" : {"x" : 416, "y": 0, "w": 100, "h": 100},
	"LCD_5" : {"x" : 520, "y": 0, "w": 100, "h": 100},
	"LCD_6" : {"x" : 624, "y": 0, "w": 100, "h": 100},
	"LCD_7" : {"x" : 728, "y": 0, "w": 100, "h": 100},
	"LCD_8" : {"x" : 832, "y": 0, "w": 100, "h": 100},
	"LCD_9" : {"x" : 0, "y": 104, "w": 100, "h": 100},
	
	"SCORE_TXT" : {"x" : 128, "y": 128, "w": 86, "h": 31},
	"SCORE_0" : {"x" : 229, "y": 128, "w": 18, "h": 31},
	"SCORE_1" : {"x" : 256, "y": 128, "w": 18, "h": 31},
	"SCORE_2" : {"x" : 280, "y": 128, "w": 18, "h": 31},
	"SCORE_3" : {"x" : 308, "y": 128, "w": 18, "h": 31},
	"SCORE_4" : {"x" : 333, "y": 128, "w": 18, "h": 31},
	"SCORE_5" : {"x" : 366, "y": 128, "w": 18, "h": 31},
	"SCORE_6" : {"x" : 395, "y": 128, "w": 18, "h": 31},
	"SCORE_7" : {"x" : 419, "y": 128, "w": 18, "h": 31},
	"SCORE_8" : {"x" : 445, "y": 128, "w": 18, "h": 31},
	"SCORE_9" : {"x" : 469, "y": 128, "w": 18, "h": 31},

	"LEAP_TXT" : {"x" : 478, "y": 198, "w": 157, "h": 87},
	"YEAR_TXT" : {"x" : 482, "y": 294, "w": 181, "h": 76},
	"2020_TXT" : {"x" : 686, "y": 275, "w": 224, "h": 109},
	"PERFECT_TXT" : {"x" : 424, "y": 782, "w": 168, "h": 60},
	"WELLDONE_TXT" : {"x" : 424, "y": 858, "w": 264, "h": 60},
	"NEEDSIMPROVEMENT_TXT" : {"x" : 424, "y": 938, "w": 424, "h": 60},

	"BACK_STRIP" : {"x" : 1000, "y": 301, "w": 16, "h": 720},
	"YEAR_BOARD" : {"x" : 0, "y": 295, "w": 480, "h": 120},
	"TREE" : {"x" : 0, "y": 482, "w": 362, "h": 542},

	"CONTINUE_BTN" : {"x" : 2, "y": 427, "w": 220, "h": 50},
	"START_BTN" : {"x" : 449, "y": 492, "w": 372, "h": 70},
	
	"BOARD_HEIGHT" : 100,
	"YEAR1_START" : 10000,
	"YEAR2_START" : 20000,
	"TREE1_START" : 15000,
	"TREE2_START" : 5000,
		
	"GAME_OVER_EVENT" : "GameOver",
	"JUMPACCELERATION" : 680/1000,
	"GRAVITY" : -9.8 / 10000

}

LYL.rewardSound = document.createElement("audio");
LYL.rewardSound.src = "bellwav.mp3";
LYL.failSound = document.createElement("audio");
LYL.failSound.src = "drawwav.mp3";

LYL.AtlasEntryToRectangle = function(label) {
	return new BGLayers.Rectangle(
		LYL.Dict[label].x, LYL.Dict[label].y, 
		LYL.Dict[label].w, LYL.Dict[label].h);
}

LYL.ImageButton = function(id, img, width, height, isvertacle, offsetX, offsetY)
{
	this._image = img;	
	
	// set up offsetX
	var ox = 0;
	var oy = 0;
	if (arguments.length > 5) 
		ox = offsetX;
	if (arguments.length > 6)
		oy = offsetY

	if (arguments.length == 2) { // clickable image
		this._disabledRect = new BGLayers.Rectangle(0,0, img.width, img.height);
		this._normalRect = new BGLayers.Rectangle(0,0, img.width, img.height);
		this._overRect = new BGLayers.Rectangle(0,0, img.width, img.height);
		this._downRect = new BGLayers.Rectangle(0,0, img.width, img.height);
	} else {
		var hv = true
		if (arguments.length >= 5)
			hv = isvertacle;
		if (hv == true) {
			this._disabledRect = new BGLayers.Rectangle(ox,oy, width, height);
			this._normalRect = new BGLayers.Rectangle(ox,oy+height, width, height);
			this._overRect = new BGLayers.Rectangle(ox,oy+2*height, width, height);
			this._downRect = new BGLayers.Rectangle(ox,oy+3*height, width, height);
		} else {
			this._disabledRect = new BGLayers.Rectangle(ox,oy, width, height);
			this._normalRect = new BGLayers.Rectangle(ox+width,oy, width, height);
			this._overRect = new BGLayers.Rectangle(ox+2*width,oy, width, height);
			this._downRect = new BGLayers.Rectangle(ox+3*width,oy, width, height);
		}
	}
	this.buttonstate = 1;
	this.onClick = null;

	this.BUTTONSTATE_DISABLED = 0;
	this.BUTTONSTATE_NORMAL = 1;
	this.BUTTONSTATE_OVER = 2;
	this.BUTTONSTATE_DOWN = 3;
	
	this.supr = new BGLayers.Layer(id, this._disabledRect.width, this._disabledRect.height);
	BGLayers.inheritProperties(this, this.supr);
}

LYL.ImageButton.prototype.setClips = function(xrect,nrect,orect,drect)
{
	this._disabledRect = xrect;
	this._normalRect = nrect;
	this._overRect = orect;
	this._downRect = drect;
}

LYL.ImageButton.prototype.mouseDown = function(x, y)
{
	var oldState = this.buttonstate;
	if (this.buttonstate != this.BUTTONSTATE_DISABLED) {
		var over = this.findRealPosition().containsPoint(x,y);
		if (over)
			this.buttonstate = this.BUTTONSTATE_DOWN;
	}

	var dirty = (oldState != this.buttonstate);
	if (dirty)
		this.addDirty(new BGLayers.Rectangle(this.findRealPosition()));	
	return dirty;
}

LYL.ImageButton.prototype.mouseMove = function(x, y)
{
	var oldState = this.buttonstate;

	if ( (this.buttonstate != this.BUTTONSTATE_DISABLED) &&
			(this.buttonstate != this.BUTTONSTATE_DOWN) ) {
		var over = this.findRealPosition().containsPoint(x,y);
		if (over)
			this.buttonstate = this.BUTTONSTATE_OVER;
		else
			this.buttonstate = this.BUTTONSTATE_NORMAL;
	}

	var dirty = (oldState != this.buttonstate);
	if (dirty)
		this.addDirty(new BGLayers.Rectangle(this.findRealPosition()));	
	return dirty;
}

LYL.ImageButton.prototype.mouseUp = function(x, y)
{
	var oldState = this.buttonstate;

	if ( (this.buttonstate == this.BUTTONSTATE_DOWN) && 
			(this.onClick != null) ) {
		var over = this.findRealPosition().containsPoint(x,y);
		if ((over) && (this.onClick != null))
			this.onClick.buttonClicked(this);
	}
	if (this.buttonstate != this.BUTTONSTATE_DISABLED) 
		this.buttonstate = this.BUTTONSTATE_NORMAL;
	
	var dirty = (oldState != this.buttonstate);
	if (dirty)
		this.addDirty(new BGLayers.Rectangle(this.findRealPosition()));	
	return dirty;
}


LYL.ImageButton.prototype.drawSelf = function(ctx, bounds)
{
	if (this.findRealPosition().intersects(bounds) == false)
		return;
	var clip = this._disabledRect;
	switch (this.buttonstate) {
		case this.BUTTONSTATE_NORMAL:
			clip = this._normalRect;
			break;
		case this.BUTTONSTATE_OVER:
			clip = this._overRect;
			break;
		case this.BUTTONSTATE_DOWN:
			clip = this._downRect;
			break;
	}
	var rect = this._realPosition.getIntersection(bounds);
	var scaleX = clip.width / this._realPosition.width;
	var scaleY = clip.height / this._realPosition.height;
	var boundClip = new BGLayers.Rectangle(
				clip.x + (rect.x - this._realPosition.x) * scaleX,
				clip.y + (rect.y - this._realPosition.y) * scaleY,
				rect.width * scaleX,
				rect.height * scaleY);
	ctx.drawImage(this._image, boundClip.x, boundClip.y, boundClip.width, boundClip.height,
				rect.x, rect.y, rect.width, rect.height);
}

LYL.ImageButton.prototype.setDisabled = function(b)
{
	if (!b)
		this.buttonstate = this.BUTTONSTATE_NORMAL;
	else
		this.buttonstate = this.BUTTONSTATE_DISABLED;
	this.addDirty(new BGLayers.Rectangle(this.findRealPosition()));	
}


// --------------------------------------------------------------------------


LYL.YearBoard = function() {
	BGLayers.inheritProperties(this, new BGLayers.Layer("yearboard", 
			LYL.Dict["YEAR_BOARD"].w, LYL.Dict["YEAR_BOARD"].h));
	this.board = new BGLayers.ImageLayer("title", LYL.Atlas);
	this.board.setClip(LYL.AtlasEntryToRectangle("YEAR_BOARD"));
	this.board.adjustPosition(new BGLayers.Rectangle(0,0,480,120));
	this.addChild(this.board);
	this.origBounds = LYL.AtlasEntryToRectangle("YEAR_BOARD");
	this.x_off = 0
	this.y_off = 200
	this.digits = [new BGLayers.ImageLayer("M", LYL.Atlas),
		new BGLayers.ImageLayer("C", LYL.Atlas), 
		new BGLayers.ImageLayer("D", LYL.Atlas),
		new BGLayers.ImageLayer("Y", LYL.Atlas) ];
	var temp = LYL.AtlasEntryToRectangle("LCD_8")
	for (var cntr = 0; cntr < 4; ++cntr) {
		this.digits[cntr].setClip(temp);
		this.digits[cntr].adjustPosition(new BGLayers.Rectangle(114*cntr+23, 12, 100,100));
		this.addChild(this.digits[cntr]);
	}
	this.year = 0
	
}

LYL.YearBoard.prototype.setYear = function(year) {
	this.year = year
	y = year % 10;
	temp = Math.floor(year / 10);
	d = temp % 10;
	temp = Math.floor(temp / 10);
	c = temp % 10;
	m = Math.floor(temp / 10);
	this.digits[0].setClip(LYL.AtlasEntryToRectangle("LCD_"+m));
	this.digits[1].setClip(LYL.AtlasEntryToRectangle("LCD_"+c));
	this.digits[2].setClip(LYL.AtlasEntryToRectangle("LCD_"+d));
	this.digits[3].setClip(LYL.AtlasEntryToRectangle("LCD_"+y));
}

LYL.YearBoard.prototype.getYear = function() {
	return this.year
}

// --------------------------------------------------------------------------

LYL.ScoreDisplay = function() {
//	var w = LYL.Dict["SCORE_0"].w * 2 + LYL.Dict["SCORE_TXT"].w
//	var h = LYL.Dict["SCORE_TXT"].h
	BGLayers.inheritProperties(this, new BGLayers.Layer("scoredisplay",LYL.Dict["SCORE_0"].w * 2 + LYL.Dict["SCORE_TXT"].w,LYL.Dict["SCORE_TXT"].h));
	this._solid = false;
	this.txt = new BGLayers.ImageLayer("score_txt", LYL.Atlas);
	var txtRect = LYL.AtlasEntryToRectangle("SCORE_TXT")
	this.txt.setClip(txtRect);
	this.txt.adjustPosition(new BGLayers.Rectangle(0,0,txtRect.width, txtRect.height));
	this.addChild(this.txt);
	
	var rect = LYL.AtlasEntryToRectangle("SCORE_0");
	this.tens = new BGLayers.ImageLayer("Tens", LYL.Atlas);
	this.tens.setClip(rect);
	this.tens.adjustPosition(new BGLayers.Rectangle(txtRect.width, 0, rect.width,rect.height));
	this.addChild(this.tens);
	
	this.ones = new BGLayers.ImageLayer("Ones", LYL.Atlas);
	this.ones.setClip(rect);
	this.ones.adjustPosition(new BGLayers.Rectangle(txtRect.width+rect.width, 0, rect.width,rect.height));
	this.addChild(this.ones);
	
	this.score = 0
}

LYL.ScoreDisplay.prototype.setScore = function(score) {
	this.score = score;
	ones = score % 10;
	tens = Math.floor(score / 10);
	this.tens.setClip(LYL.AtlasEntryToRectangle("SCORE_"+tens));
	this.ones.setClip(LYL.AtlasEntryToRectangle("SCORE_"+ones));
}


// --------------------------------------------------------------------------

LYL.World = function() {
	BGLayers.inheritProperties(this, new BGLayers.Layer("world", 640,480));
	this.backdrop =  new BGLayers.ImageLayer("backdrop", LYL.Atlas);
	this.backdrop.setClip(LYL.AtlasEntryToRectangle("BACK_STRIP"));
	this.backdrop.adjustPosition(new BGLayers.Rectangle(0,-240,640,480+240));
	this.addChild(this.backdrop);

	this.tree1 =  new BGLayers.ImageLayer("tree1", LYL.Atlas);
	this.tree1.origBounds = LYL.AtlasEntryToRectangle("TREE")
	this.tree1.setClip(LYL.AtlasEntryToRectangle("TREE"));
	this.tree1.adjustPosition(new BGLayers.Rectangle(320,200,50,80));
	this.tree1.x_off = 600;
	this.tree1.y_off = 0;
	this.addChild(this.tree1);

	this.tree2 =  new BGLayers.ImageLayer("tree2", LYL.Atlas);
	this.tree2.origBounds = LYL.AtlasEntryToRectangle("TREE")
	this.tree2.setClip(LYL.AtlasEntryToRectangle("TREE"));
	this.tree2.adjustPosition(new BGLayers.Rectangle(320,200,50,80));
	this.tree2.x_off = -700;
	this.tree2.y_off = 0;
	this.addChild(this.tree2);

	this.yearBoard1 = new LYL.YearBoard();
	this.yearBoard1.adjustPosition(new BGLayers.Rectangle(120,240, 440,140));
	this.addChild(this.yearBoard1);
	this.yearBoard1.setYear(1970);

	this.yearBoard2 = new LYL.YearBoard();
	this.yearBoard2.adjustPosition(new BGLayers.Rectangle(120,240, 440,140));
	this.addChild(this.yearBoard2);
	this.yearBoard2.setYear(1970);
	
	this.playerScore = 0;
	this.yearBoard1.distance = LYL.Dict["YEAR1_START"];
	this.yearBoard2.distance = LYL.Dict["YEAR2_START"];
	this.tree1.distance = LYL.Dict["TREE1_START"];
	this.tree2.distance = LYL.Dict["TREE2_START"];
	this.playerSpeed = 2500;
	this.halfCenturies = 0;
	this.gameOver = false;
	
	this.objs = [this.tree1, this.tree2, this.yearBoard1, this.yearBoard2]
}

LYL.World.prototype.restartGame = function()
{
	this.playerScore = 0;
	this.yearBoard1.distance = LYL.Dict["YEAR1_START"];
	this.yearBoard2.distance = LYL.Dict["YEAR2_START"];
	this.tree1.distance = LYL.Dict["TREE1_START"];
	this.tree2.distance = LYL.Dict["TREE2_START"];
	this.playerSpeed = 2500;
	this.halfCenturies = 2;
	this.gameOver = false;
	
	this.yearBoard1.setYear(Math.floor(Math.random() * 25) * 2);
	this.yearBoard2.setYear(Math.floor(Math.random() * 25) * 2 + 50);
	this.yearBoard1.setVisible(true);
	this.yearBoard2.setVisible(true);
}
		
LYL.World.prototype.updateScore = function(pointEarned)
{
	if (pointEarned) {
		++this.playerScore;
		LYL.rewardSound.play();
		this.playerSpeed = Math.min(5000, this.playerSpeed + 500);
	} else {
		LYL.failSound.play();
		this.playerSpeed = Math.max(1000, this.playerSpeed - 1000);
		
	}
	console.log("Score = " + this.playerScore);
}

LYL.World.prototype.adjustObject = function(obj, dist, speed, hght, canHit)
{
	var adjDist = Math.max(0, dist - speed);
	if (adjDist < 1000) {
		if (canHit) {
			var year = obj.getYear();
			var leapYear = (year % 4) == 0;
			if (((year % 100) == 0) && ((year % 400) != 0))
				leapYear = false;
			console.log ("Leap year " + leapYear + " height " + hght);
			if (hght < LYL.Dict["BOARD_HEIGHT"]) {
				this.updateScore( ! leapYear )
			} else {
				this.updateScore (leapYear);
			}
			obj.setYear(Math.floor(Math.random() * 25) * 2 + 50 * this.halfCenturies);
			++this.halfCenturies;
			if (this.halfCenturies == 41)
				obj.setYear(2008);
			else if (this.halfCenturies == 42)
				obj.setYear(2020);
			else if (this.halfCenturies == 43)
				obj.setVisible(false);
			else if (this.halfCenturies == 44) {
				obj.setVisible(false);
				this.gameOver = true;
			}
		}
		adjDist = 20000;
	}
	var scaleX = 1.0 / (adjDist/1000);
	var scaleY = 1.0 / (adjDist/1000);
	var w = obj.origBounds.width * scaleX;
	var h = obj.origBounds.height * scaleY;
	//console.log("scale at " + scaleX + "," + scaleY + " ," + w + "," + h + " d= " + adjDist);
	obj.adjustPosition(new BGLayers.Rectangle(320 + obj.x_off * scaleX - w/2, 240 + obj.y_off * scaleY - h/2, w, h)); 
	//console.log("drawing at " + (320 - obj.x_off * scaleX - w/2) + "," + (240 - h/2) + " ," + w + "," + h + " d= " + adjDist);
	
	return adjDist;
}

LYL.World.prototype.tick = function(delta)
{
	for (var cntr = 0; cntr < 4; ++cntr) {
		this.removeChild(this.objs[cntr]);
	}

	var y = this.getPosition().y;
	this.tree1.distance = this.adjustObject(this.tree1, this.tree1.distance, this.playerSpeed*delta, 120, false);
	this.tree2.distance = this.adjustObject(this.tree2, this.tree2.distance, this.playerSpeed*delta, 120, false);
	this.yearBoard1.distance = this.adjustObject(this.yearBoard1, this.yearBoard1.distance, this.playerSpeed*delta, y, this.yearBoard1._visible);
	this.yearBoard2.distance = this.adjustObject(this.yearBoard2, this.yearBoard2.distance, this.playerSpeed*delta, y, this.yearBoard2._visible);

	for (var cntrOuter = 0; cntrOuter < 3; ++cntrOuter) {
		best = cntrOuter;
		for (var cntrInner = cntrOuter; cntrInner < 4; ++cntrInner) {
			if (this.objs[cntrInner].distance > this.objs[best].distance)
				best = cntrInner;
		}
		temp = this.objs[cntrOuter]
		this.objs[cntrOuter] = this.objs[best] 
		this.objs[best] = temp;
	}
	
	for (var cntr = 0; cntr < 4; ++cntr) {
		this.addChild(this.objs[cntr]);
	}	
}

// --------------------------------------------------------------------------

LYL.Title = function(owner) {
	BGLayers.inheritProperties(this, new BGLayers.Layer("title", 640,480));
	this.backgroundColor = "#ff00ff";
	this.titleImage =  new BGLayers.ImageLayer("title", LYL.Atlas);
	
	this.titleImage.setClip(LYL.AtlasEntryToRectangle("BACK_STRIP"));//new BGLayers.Rectangle(0,0,306,216));
	this.titleImage.adjustPosition(new BGLayers.Rectangle(0,-240,640,480+240));
	this.addChild(this.titleImage);
	this.owner = owner;	
		
	// set up buttons
//	this.btn = new LYL.ImageButton("start_game", LYL.Atlas, 217,50, false, 0,417);
	this.btn = new LYL.ImageButton("start_game", LYL.Atlas, 372,70, true, 449,494);
	this.btn.adjustPosition(new BGLayers.Rectangle(50,400,527,46));
	this.btn.onClick = this;
	this.addChild(this.btn);
	
	var leapRect = LYL.AtlasEntryToRectangle("LEAP_TXT")
	this.leapTop = new BGLayers.ImageLayer("leap top", LYL.Atlas);
	this.leapTop.setClip(leapRect);
	this.leapTop.adjustPosition(new BGLayers.Rectangle(240,20, leapRect.width, leapRect.height));
	this.addChild(this.leapTop);
	
	var yearRect = LYL.AtlasEntryToRectangle("YEAR_TXT")
	this.year = new BGLayers.ImageLayer("year", LYL.Atlas);
	this.year.setClip(yearRect);
	this.year.adjustPosition(new BGLayers.Rectangle(225,110, yearRect.width, yearRect.height));
	this.addChild(this.year);
	
	this.leapBot = new BGLayers.ImageLayer("leap bottom", LYL.Atlas);
	this.leapBot.setClip(leapRect);
	this.leapBot.adjustPosition(new BGLayers.Rectangle(240,190, leapRect.width, leapRect.height));
	this.addChild(this.leapBot);
	
	this.yearBoard = new LYL.YearBoard();
	this.yearBoard.adjustPosition(new BGLayers.Rectangle(150,280, 352,112));
	this.addChild(this.yearBoard);
	this.yearBoard.setYear(2020);
}

LYL.Title.prototype.buttonClicked = function(btn) {
	console.log("Button clicked")
	this.owner.changeScreen(1);
}

LYL.Title.prototype.tick = function() {
	return false;
}

LYL.Title.prototype.handleKeyDown = function(keyCode) {
	this.owner.changeScreen(1);	
}


// --------------------------------------------------------------------------

LYL.GamePlay = function(owner) {
	BGLayers.inheritProperties(this, new BGLayers.Layer("title", 640,480));
	this.backgroundColor = "#ff00ff";
	this.owner = owner;	
	this.world = new LYL.World();
	this.addChild(this.world);
	this.jumpHeight = 0;
	this.accleration = 0
	this.gameOver = false;
	this.lastRedraw = 0;

	var perfectRect = LYL.AtlasEntryToRectangle("PERFECT_TXT");
	this.winPerfect =  new BGLayers.ImageLayer("perfect", LYL.Atlas);
	this.winPerfect.setClip(perfectRect);
	this.winPerfect.adjustPosition(new BGLayers.Rectangle(320 - perfectRect.width / 2, 240 - perfectRect.height, perfectRect.width, perfectRect.height));
	this.winPerfect.setVisible(false);
	this.addChild(this.winPerfect);

	var welldoneRect = LYL.AtlasEntryToRectangle("WELLDONE_TXT");
	this.welldone =  new BGLayers.ImageLayer("welldone", LYL.Atlas);
	this.welldone.setClip(welldoneRect);
	this.welldone.adjustPosition(new BGLayers.Rectangle(320 - welldoneRect.width / 2, 240 - welldoneRect.height, welldoneRect.width, welldoneRect.height));
	this.welldone.setVisible(false);
	this.addChild(this.welldone);

	var needsimprovementRect = LYL.AtlasEntryToRectangle("NEEDSIMPROVEMENT_TXT");
	this.needsimprovement =  new BGLayers.ImageLayer("needsimprovement", LYL.Atlas);
	this.needsimprovement.setClip(needsimprovementRect);
	this.needsimprovement.adjustPosition(new BGLayers.Rectangle(320 - needsimprovementRect.width / 2, 240 - needsimprovementRect.height, needsimprovementRect.width, needsimprovementRect.height));
	this.needsimprovement.setVisible(false);
	this.addChild(this.needsimprovement);

	this.scoreDisplay = new LYL.ScoreDisplay();
	this.scoreDisplay.moveTo(500, 10);
	this.addChild(this.scoreDisplay);


}

LYL.GamePlay.prototype.performJump = function()
{
	if (this.gameOver) {
		this.owner.changeScreen(0);
	}
	else if (this.jumpHeight == 0) {
		console.log("Jumping");
		this.acceleration = LYL.Dict["JUMPACCELERATION"];
		this.jumpHeight = this.acceleration;
	}
}

LYL.GamePlay.prototype.tick = function() {
	var curtime = new Date().getTime();
	var dlta = Math.min(1.0, 
			Number(curtime - this.lastRedraw)/1000);
	var cntr;
	
	this.lastRedraw = curtime;
	
	var numMS = (dlta * 1000);
	for (cntr = 0; cntr < numMS; ++cntr) {
		if (this.jumpHeight > 0) {
			this.jumpHeight = Math.max(0, this.jumpHeight + this.acceleration);
			this.acceleration += LYL.Dict["GRAVITY"];
		}
	}
	this.world.moveTo(0, this.jumpHeight);
	var curScore = this.world.playerScore;
	this.scoreDisplay.setScore(curScore);

	if ((this.gameOver == false) && (this.world.gameOver == true)) {
		this.gameOver = true
		if (curScore == 42)
			this.winPerfect.setVisible(true);
		else if (curScore > 35)
			this.welldone.setVisible(true)
		else
			this.needsimprovement.setVisible(true);
	}


	this.world.tick(dlta);
	return true;
}

LYL.GamePlay.prototype.mouseDown = function(x, y) {
	console.log("Mouse down");
	this.performJump()
	return true;
}

LYL.GamePlay.prototype.restartGame = function() {
	this.world.restartGame();
	this.jumpHeight = 0;
	this.accleration = 0
	this.gameOver = false;
	this.lastRedraw = 0;
	this.winPerfect.setVisible(false);
	this.welldone.setVisible(false)
	this.needsimprovement.setVisible(false);
}

LYL.GamePlay.prototype.handleKeyDown = function(keyCode) {
	this.performJump();
}

// --------------------------------------------------------------------------


LYL.Game = function() {
	BGLayers.inheritProperties(this, new BGLayers.Layer("stage", 640,480));
	this.score = 0;
	this.highScore = 0;
	this.title = new LYL.Title(this);
	this.game = new LYL.GamePlay(this);
//	this.scorescreen = new LYL.ScoreScreen(this);
	this.screens = [
			this.title,
			this.game]//,
//			this.scorescreen ];
	this.currentScreen = this.screens[0];
	this.addChild(this.screens[0]);
	
}

LYL.Game.prototype.changeScreen = function(n) {
	this.removeChild(this.currentScreen);
	this.currentScreen = this.screens[n];
	this.addChild(this.screens[n]);
	if (n == 1) this.currentScreen.restartGame();
}

LYL.Game.prototype.startLevel = function() {
	this.game.restart();
	this.changeScreen(1);	
}

LYL.Game.prototype.setScore = function(score) {
	this.score = score;
	if (score > this.highScore)
		this.highScore = score;
	this.changeScreen(2);
}

LYL.Game.prototype.tick = function() {
	return this.currentScreen.tick();
}
LYL.Game.prototype.handleKeyDown = function(keyCode) {
	this.currentScreen.handleKeyDown(keyCode);
}

