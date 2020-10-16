VAAtlasImg = new Image();
VAAtlasImg.src = 'vampire_atlas.png';
VAShootSnd = document.createElement("audio");
VAShootSnd.src = "click.mp3";
VAHitSnd = document.createElement("audio");
VAHitSnd.src = "batDeath.mp3";
VADeathSnd = document.createElement("audio");
VADeathSnd.src = "scream.mp3";

VA_ATLAS = {"Bat" : {"x":358,"y":90,"w":40,"h":23,"frames": [
    {"x":358,"y":90},{"x":406,"y":90},{"x":454,"y":90},{"x":502,"y":90},{"x":550,"y":90},
    {"x":598,"y":90},{"x":646,"y":90},{"x":694,"y":90},{"x":742,"y":90},{"x":358,"y":90},
    {"x":790,"y":90},{"x":838,"y":90},{"x":886,"y":90},{"x":934,"y":90},{"x":982,"y":90},
    {"x":0,"y":180},{"x":48,"y":180},{"x":96,"y":180},{"x":144,"y":180},{"x":358,"y":90},
    {"x":192,"y":180},{"x":240,"y":180},{"x":288,"y":180},{"x":336,"y":180},{"x":384,"y":180},
    {"x":432,"y":180},{"x":480,"y":180},{"x":528,"y":180},{"x":576,"y":180},
    {"x":624,"y":180},{"x":624,"y":180}]},

"Player": {"x":672,"y":180,"w":46,"h":40, "frames": [
    {"x":672,"y":180},{"x":672,"y":180},{"x":672,"y":180},{"x":672,"y":180},
    {"x":726,"y":180},{"x":780,"y":180},{"x":834,"y":180},{"x":888,"y":180},
    {"x":942,"y":180},{"x":0,"y":228},{"x":54,"y":228},{"x":108,"y":228},
    {"x":54,"y":228},{"x":0,"y":228},{"x":942,"y":180},{"x":888,"y":180},
    {"x":834,"y":180},{"x":780,"y":180},{"x":726,"y":180},{"x":726,"y":180}]},

"Stake": {"x":162,"y":228,"w":2,"h":14,"frames": [{"x":162,"y":228}]},

"Backdrop": {"x":172,"y":228,"w":512,"h":512},

"ContinueBtn": {"x":0,"y":0,"w":350,"h":82, "over_x":358,"over_y":0,"down_x":0,"down_y":90},

    "letters": "1234567890ABCEIKLMNOPRSTUVY",
"bloodLetters" : [{"x":692,"y":228,"w":24,"h":50}, {"x":724,"y":228,"w":40,"h":48},
    {"x":772,"y":228,"w":34,"h":48},{"x":814,"y":228,"w":40,"h":48},
    {"x":862,"y":228,"w":30,"h":48},{"x":900,"y":228,"w":32,"h":48},
    {"x":940,"y":228,"w":36,"h":48},{"x":984,"y":228,"w":32,"h":46},
    {"x":0,"y":748,"w":32,"h":50},{"x":439,"y":748,"w":50,"h":46},
//ABCEIKLM
    {"x":40,"y":748,"w":50,"h":50},{"x":98,"y":748,"w":35,"h":46},
    {"x":141,"y":748,"w":40,"h":50},{"x":189,"y":748,"w":30,"h":49},
    {"x":227,"y":748,"w":12,"h":46},{"x":247,"y":748,"w":38,"h":48},
    {"x":293,"y":748,"w":30,"h":48},{"x":331,"y":748,"w":46,"h":50},
//NOPRSTUVY
    {"x":385,"y":748,"w":46,"h":46},{"x":439,"y":748,"w":50,"h":46},
    {"x":497,"y":748,"w":32,"h":46},{"x":537,"y":748,"w":34,"h":47},
    {"x":579,"y":748,"w":24,"h":50},{"x":769,"y":748,"w":39,"h":47},
    {"x":611,"y":748,"w":48,"h":46},{"x":667,"y":748,"w":46,"h":48},
    {"x":721,"y":748,"w":40,"h":46}],

    "SpawnRateMax": 1000,
    "spawnRateMin": 100,
    "SpawnSpeedupRate": 2,
    "BatSpeedDivisor": 30.0,
    "GameOverTime": 5000
};

VLButtons = {"BUTTON_UP" : 0, "BUTTON_OVER" : 1,	"BUTTON_DOWN" :  2}


class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}


function drawBloodText(ctx, s, x, y, scale) {
    let cur_x = x;
    for (var cntr = 0; cntr < s.length; ++cntr) {
        let letter = VA_ATLAS.letters.indexOf(s.charAt(cntr));
        if (letter < 0)
            cur_x = cur_x + 32 * scale;
        else {
            r = VA_ATLAS.bloodLetters[letter];
            ctx.drawImage(VAAtlasImg, r.x, r.y, r.w, r.h,
                Math.floor(cur_x), y, Math.floor(r.w * scale), Math.floor(r.h * scale));
            cur_x += Math.floor(r.w * scale)
        }
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

class Sprite {
    constructor(owner, info, x, y, d) {
        this.owner = owner;
        this.info = info;
        this.reset(x,y,d)
        this.cur_frame = 0;
        this.visible = true;
    }

    render(ctx) {
        if (this.visible) {
            let frameData = this.info.frames[this.cur_frame];
            let rx = - this.info.w / 2;
            let ry = - this.info.h / 2
            ctx.save()
            ctx.translate(this.x, this.y);
            ctx.rotate(this.d);
            ctx.drawImage(VAAtlasImg, frameData.x, frameData.y, this.info.w,this.info.h,
                rx, ry, this.info.w, this.info.h);
            ctx.restore()
        }
    }
    reset(x, y, d) {
        this.x = x;
        this.y = y;
        this.d = d;
        this.visible = true;
    }

    findDistSqrFromCoordinates(x,y) {
        let dx = this.x - x;
        let dy = this.y - y;
        return (dx*dx+dy*dy);
    }
}

class ScreenHandler {
    constructor(game) {
        this.game = game;
    }

    mouseDown(x, y) { return false; }
    mouseMove(x, y) { return false; }
    mouseUp(x, y) { return false; }
    render(ctx) {	}
    restart() { }
    tick(delta) { return false;	}
}


class LoadingScreen extends ScreenHandler {
    constructor(game) {
        super(game);
        this.last_frame_time = performance.now();
        this.loadingMessage = "Loading..."
    }

    tick(timestamp) {
        return ((performance.now() / 100) % 10) === 0;
    }

    render(ctx) {
        // check for finished loaded
        let loaded = VAAtlasImg.complete;

        // display loading message
        let messageLen = Math.floor(performance.now() / 100) % 10 + 1;
        ctx.fillStyle = "#000055";
        ctx.beginPath()
        ctx.rect(0,0,640,480);
        ctx.fill();
        ctx.font = "50px serif";
        ctx.fillStyle = "#CCCC00";
        ctx.textAlign = "center";
        ctx.fillText (this.loadingMessage.substring(0, messageLen), 320, 240);

        if (loaded)
            this.game.switchScreen(this.game.MODE_TITLE);
    }

}


class TitleScreen extends ScreenHandler {
    constructor(game) {
        super(game);
        this.button = new Button(this, 1, VA_ATLAS.ContinueBtn, 150,350);
    }

    restart() {
    }

    mouseDown(x, y) {
        return this.button.mouseDown(x,y);
    }

    mouseMove(x, y) {
        return this.button.mouseMove(x,y);
    }

    mouseUp(x, y) {
        return this.button.mouseUp(x,y);
    }

//    tick(delta) {	}

    render(ctx) {
        let r = VA_ATLAS.Backdrop;
        ctx.drawImage(VAAtlasImg, r.x, r.y, r.w, r.h, 0,0,640,480);
        drawBloodText(ctx,"VAMPIRE", 50,50, 2);
        drawBloodText(ctx,"ATTACK", 55,160, 2.1);
        this.button.render(ctx);
    }

    buttonClicked(id) {
        console.log("TODO should switch to game screen");
        this.game.switchScreen(this.game.MODE_GAME);
    }
}

class GameScreen extends ScreenHandler {
    constructor(game) {
        super(game);
        this.player = new Sprite(this,VA_ATLAS.Player, 320,240,0);
        this.bats = [];
        this.bolts = [];
        this.nextLaunchCountdown = 0;
        this.highScore = 0;
    }

    checkForBatKills(bolt) {
        // TODO
        for (let i = 0; i < this.bats.length; ++i) {
            let b = this.bats[i];
            if ((b.visible) && (b.alive)) {
                let dsq = b.findDistSqrFromCoordinates(bolt.x, bolt.y);
                if (dsq < 500) {
                    b.alive = false;
                    this.score += 10;
                    VAHitSnd.cloneNode(true).play();
                    // note: do we want to remove spike here or allow multiple kills?
                }
            }
        }
    }

    mouseDown(x, y) {
        if (this.gameOver) return false;
        if (this.nextLaunchCountdown <= 0) {
            this.spawnBolt(this.player.x, this.player.y, this.player.d);
            VAShootSnd.cloneNode(true).play();
        } else
            console.log("still reloading")
    }

    mouseMove(x, y) {
        if (this.gameOver) return false;
        let p = this.player;
        this.player.d =  Math.atan2(y-p.y, x-p.x) + Math.PI/2;
        return true
    }

    moveBats(delta) {
        for (let i = 0; i<this.bats.length;++i) {
            let b = this.bats[i];
            if (b.visible) {
                if (b.alive) {
                    b.cur_frame++;
                    if (b.cur_frame > 17) b.cur_frame = 0;
                    b.x += delta/VA_ATLAS.BatSpeedDivisor * Math.cos(b.d+Math.PI/2);
                    b.y += delta/VA_ATLAS.BatSpeedDivisor * Math.sin(b.d+Math.PI/2);
                    if (b.findDistSqrFromCoordinates(this.player.x, this.player.y) < 400) {
                        if (this.gameOver!==true)
                            VADeathSnd.cloneNode(true).play();
                        this.gameOver = true;
                        this.gameOverDelay = VA_ATLAS.GameOverTime;
                        if (this.highScore < this.score)
                            this.highScore = this.score;
                    }
 //                   console.log(`bat moving to ${b.x},${b.y}`)
                } else {
                    console.log("bat dead at ${b.x},${b.y}")
                    if (b.alive === false) {
                        if (b.cur_frame < 18)
                            b.cur_frame = 18;
                        else {
                            b.cur_frame++;
                            if (b.cur_frame > 25) {
                                b.cur_frame = 0;
                                b.visible = false;
                            }
                        }
                    }
                }
            }
        }
    }

    moveBolts(delta) {
        for (let i = 0; i<this.bolts.length;++i) {
            let b = this.bolts[i];
            if (b.visible) {
                b.x += delta/5.0 * Math.cos(b.d - Math.PI/2);
                b.y += delta/5.0 * Math.sin(b.d - Math.PI/2);
                if ( (b.x < 0) || (b.x > 640) || (b.y < 0) || (b.y > 480) )
                    b.visible = false;
                else
                    this.checkForBatKills(b);
            }
        }
    }

    render(ctx) {
        let r = VA_ATLAS.Backdrop;
        ctx.drawImage(VAAtlasImg, r.x, r.y, r.w, r.h, 0,0,640,480);
        this.player.render(ctx);
        for (let i = 0; i < this.bolts.length; ++i)
            this.bolts[i].render(ctx);
        for (let i = 0; i < this.bats.length; ++i)
            this.bats[i].render(ctx);
        if (this.gameOver) {
            drawBloodText(ctx, "OVER", 20, 20, 3.5);
            drawBloodText(ctx, "SCORE " + this.score, 250,300,.7);
            drawBloodText(ctx, "BEST " + this.highScore, 250,380,.75);
        } else
            drawBloodText(ctx, "SCORE " + this.score, 5,5,.5);
    }

    restart() {
        this.curSpawnDelay = VA_ATLAS.SpawnRateMax;
        this.nextBatSpawn = 0;
        this.player.x = 320;
        this.player.y = 240;
        for (let i = 0; i < this.bolts.length; ++i)
            this.bolts[i].visible = false;
        for (let i = 0; i < this.bats.length; ++i)
            this.bats[i].visible = false;
        this.score = 0;
        this.gameOver = false;
    }

    spawnBat() {
        let indx = -1
        for (let i = 0; i < this.bats.length; ++i)
            if (this.bats[i].visible === false) {
                indx = i;
                break;
            }
        if (indx === -1) {
            indx = this.bats.length;
            this.bats.push(new Sprite(this, VA_ATLAS.Bat, 0, 0, 0))
        }
        let d = Math.random()*Math.PI*2;
        let x = this.player.x+400 * Math.cos(d);
        let y = this.player.y+400 * Math.sin(d);
        this.bats[indx].reset(x,y,d+Math.PI/2);
        this.bats[indx].alive = true;
        console.log(`bat added at ${x},${y},${d}`);
    }

    spawnBolt(x, y, d) {
        // find existing bolt
        let indx = -1
        for (let i = 0; i < this.bolts.length; ++i)
            if (this.bolts[i].visible === false) {
                indx = i;
                break;
            }
        if (indx === -1) {
            indx = this.bolts.length;
            this.bolts.push(new Sprite(this, VA_ATLAS.Stake, 320, 240, 0))
        }
        this.bolts[indx].reset(x,y,d);
        this.nextLaunchCountdown = 18
        console.log(`bolt added at ${x},${y},${d}`);
    }

    tick(delta) {
        if (this.gameOver){
            this.gameOverDelay -= delta;
            if (this.gameOverDelay <= 0)
                this.game.switchScreen(this.game.MODE_TITLE);
            return true;
        }
        if (this.nextLaunchCountdown > 0) {
            this.nextLaunchCountdown--;
            this.player.cur_frame = 19-this.nextLaunchCountdown;
        } else
            this.player.cur_frame = 0;
        this.moveBolts(delta);
        this.nextBatSpawn -= delta;
        if (this.nextBatSpawn <= 0) {
            this.nextBatSpawn = this.curSpawnDelay;
            this.curSpawnDelay = Math.max(this.curSpawnDelay - VA_ATLAS.SpawnSpeedupRate, VA_ATLAS.spawnRateMin);
            this.spawnBat();
        }
        this.moveBats(delta);
        return true;
    }
}

class Game {

    constructor() {
        // screen modes
        this.MODE_LOADER = 0;
        this.MODE_TITLE = 1;
        this.MODE_GAME = 2;

        this.loading = new LoadingScreen(this);
        this.title = new TitleScreen(this);
        this.game = new GameScreen(this);

        this.curScreen = this.loading;
        this.screens = [this.loading, this.title, this.game]
    }

    mouseDown(x, y) {
        return this.curScreen.mouseDown(x,y);
    }

    mouseMove(x, y) {
        return this.curScreen.mouseMove(x,y);
    }

    mouseUp(x, y) {
        return this.curScreen.mouseUp(x,y);
    }

    tick(delta) {
        return this.curScreen.tick(delta);
    }

    render(ctx) {
        this.curScreen.render(ctx);
    }

    switchScreen(mode) {
        this.curScreen = this.screens[mode];
        this.curScreen.restart();
        draw(); // KLUDGE for forcing redraw when screen changes
    }
/*
    setSound(enabled) {
        this.soundEnabled = enabled;
    }

    playExplosionSound() {
        if (this.soundEnabled)
            HalloweenLicheExplosionSound.play();
    }

    playClickSound() {
        if (this.soundEnabled)
            HalloweenLicheClickSound.play();
    }

    playWinSound() {
        if (this.soundEnabled)
            HalloweenLicheWinSound.play();
    }
*/
}
