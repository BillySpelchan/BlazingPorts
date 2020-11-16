VAAtlasImg = new Image();
VAAtlasImg.src = 'ZEscape.png';
ZHAtlas = {
    //"ContinueBtn": {"x":0,"y":0,"w":350,"h":82, "over_x":358,"over_y":0,"down_x":0,"down_y":90},
    "KeyABtn" : {"x":0,"y":0,"w":94,"h":84, "over_x":102,"over_y":0,"down_x":102,"down_y":0},
    "KeyDBtn" : {"x":204,"y":0,"w":94,"h":84, "over_x":306,"over_y":0,"down_x":306,"down_y":0},
    "KeyQBtn": {"x":510,"y":0,"w":94,"h":84, "over_x":612,"over_y":0,"down_x":612,"down_y":0},
    "KeySBtn": {"x":714,"y":0,"w":94,"h":84,"over_x":816,"over_y":0,"down_x":0,"down_y":0},
    "KeyWBtn": {"x":918,"y":0,"w":99,"h":84,"over_x":0,"over_y":92,"down_x":0,"down_y":92},
    "KeyEBtn": {"x":214,"y":92,"w":94,"h":84,"over_x":316,"over_y":92,"down_x":316,"down_y":92},
    "continueBtn": {"x":418,"y":92,"w":216,"h":50,"over_x":642,"over_y":92,"down_x":0,"down_y":184},
    "Zombie": {"x":448,"y":184,"w":546,"h":656},
    "backdrop": {"x":0,"y":848,"w":512,"h":256}
}

VLButtons = {"BUTTON_UP" : 0, "BUTTON_OVER" : 1,	"BUTTON_DOWN" :  2}


class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Button {
    constructor(owner, bid, atlasInfo, x, y) {
        this.owner = owner;
        this.bid = bid;
        this.atlasInfo = atlasInfo;
        this.x = x;
        this.y = y;
        this.x2 = x + atlasInfo.w;
        this.y2 = y + atlasInfo.h;
        this.state = VLButtons.BUTTON_UP;
    }

    isInside(x,y) {
        return (x >= this.x) && (x <= this.x2) && (y >= this.y) && (y <= this.y2);
    }

    mouseDown(x, y) {
        let old_state = this.state;
        if (this.isInside(x,y))
            this.state = VLButtons.BUTTON_DOWN;
        return old_state !== this.state;
    }

    mouseMove(x, y) {
        let old_state = this.state;
        if (this.isInside(x, y)){
            if (this.state === VLButtons.BUTTON_UP)
                this.state = VLButtons.BUTTON_OVER;
        } else {
            if (this.state === VLButtons.BUTTON_OVER)
                this.state = VLButtons.BUTTON_UP;
        }
        return old_state !== this.state;
    }

    mouseUp(x, y) {
        let old_state = this.state;
        if ((this.state === VLButtons.BUTTON_DOWN) && (this.isInside(x,y)))
            this.owner.buttonClicked(this.bid);
        this.state = VLButtons.BUTTON_UP;
        return old_state !== this.state;
    }

    render(ctx) {
        let rx = this.atlasInfo.x;
        let ry = this.atlasInfo.y;
        let w = this.atlasInfo.w;
        let h = this.atlasInfo.h;
        if (this.state === VLButtons.BUTTON_OVER) {
            rx = this.atlasInfo.over_x;
            ry = this.atlasInfo.over_y;
        }
        else if (this.state === VLButtons.BUTTON_DOWN) {
            rx = this.atlasInfo.down_x;
            ry = this.atlasInfo.down_y;
        }

        ctx.drawImage(VAAtlasImg, rx, ry, w,h,
            this.x, this.y, w, h);
    }
}

class Game {
    constructor() {
        this.buttons = [
            new Button(this,"Q", ZHAtlas.KeyQBtn, 200,300),
            new Button(this,"W", ZHAtlas.KeyWBtn, 300,300),
            new Button(this,"E", ZHAtlas.KeyEBtn, 400,300),
            new Button(this,"A", ZHAtlas.KeyABtn, 200,400),
            new Button(this,"S", ZHAtlas.KeySBtn, 300,400),
            new Button(this,"D", ZHAtlas.KeyDBtn, 400,400),
            new Button(this, "Con", ZHAtlas.continueBtn, 240,220)
        ];

        this.zscale = .5;
        this.playing = false;
        this.showTitle=true;
        this.cur_key = 6;
        this.message = "Billy Spelchan's Zero Hour Game port";
    }

    buttonClicked(bid) {
        if (this.playing) {
            this.playerStep();
        } else
            this.nextScreen();
        //console.log(bid);
    }

    handleKeyDown(key) {
        console.log("key = " + key);
        console.log("bid = " + this.buttons[this.cur_key].bid);
        if ( ! this.playing)
            this.nextScreen();
        else if (key.toUpperCase() === this.buttons[this.cur_key].bid)
            this.playerStep();
    }
    mouseDown(x, y) {
        for(let i = 0; i < this.buttons.length; ++i)
            this.buttons[i].mouseDown(x,y);
        return true;
    }

    mouseMove(x, y) {
        for(let i = 0; i < this.buttons.length; ++i)
            this.buttons[i].mouseMove(x,y);
        return true;
    }
    mouseUp(x, y) {
        for(let i = 0; i < this.buttons.length; ++i)
            this.buttons[i].mouseUp(x,y);
        return true;
    }

    nextScreen() {
        if (this.playing === true) { // game ended
            this.cur_key = 6;
            this.playing = false;
            if (this.zscale >= 1) {
                this.message = "You have died!";
            } else
                this.message = "You Escaped!!!";
        } else if (this.showTitle === true) {// game starting
            this.cur_key = Math.floor(Math.random()* 6);
            this.zscale = .5;
            this.showTitle = false;
            this.playing = true;
        } else { // return to title
            this.cur_key = 6;
            this.message = "Billy Spelchan's Zero Hour Game port";
            this.showTitle = true;
        }
    }

    playerStep() {
        this.zscale -= .06;
        this.cur_key = Math.floor(Math.random()* 6);
        if (this.zscale < .1)
            this.nextScreen();
    }

    render(ctx) {
        let bd = ZHAtlas.backdrop;
        ctx.drawImage(VAAtlasImg, bd.x, bd.y, bd.w, bd.h, 0,0,640,480 )
        let z = ZHAtlas.Zombie;
        let zw = z.w * this.zscale;
        let zh = z.h * this.zscale;
        ctx.drawImage(VAAtlasImg, z.x, z.y, z.w, z.h, 320-zw/2,240-zh/2+200,zw,zh );
        this.buttons[this.cur_key].render(ctx);
        ctx.textAlign = "center";
        ctx.fillStyle = "#a00";
        if (this.showTitle) {
            ctx.font = "72px sans-serif";
            ctx.fillText("Zombie Run", 320, 100);
        }
        if ( ! this.playing) {
            ctx.font = "32px sans-serif";
            ctx.fillText(this.message, 320, 180);
        }
        return true;

    }

    tick(delta) {
        if (this.playing === true) {
            this.zscale += .001;
            if (this.zscale > 1)
                this.nextScreen();
            return true;
        }
        return false;
    }
}
