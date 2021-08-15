LUCKY_SCRATCH_CONFIG = {
    "FourLeafClover" :{"x":0,"y":0,"width":209,"height":255,
        "label" : "Four Leaf Clover",
        "message": "The leaves represent hope, faith, love, and luck.",
        "scale": 1},
    "Horseshoe" :{"x":217,"y":0,"width":100,"height":135,
        "label" : "Lucky Horseshoe",
        "message": "Finding lucky Horseshoes means physical (health) luck.",
        "scale": 2},
    "Ladybug" :{"x":325,"y":0,"width":142,"height":162,
        "label" : "Ladybug",
        "message": "A ladybug that lands on you is said to bring you good luck.",
        "scale": 1.5},
    "Loony" : {"x":475,"y":0,"width":154,"height":154,
        "label" : "Lucky Loonie",
        "message": "Finding lucky coins tends to mean financial Luck.",
        "scale": 1.5},
    "LucyScratchLogo": {"x":0,"y":263,"width":490,"height":101},
    "SilverLining" : {"x":498,"y":263,"width":250,"height":152,
        "label" : "Silver Lining",
        "message": "Sometimes good luck is disguised as something that appears bad.",
        "scale": 2},
    "Star" : {"x":756,"y":263,"width":188,"height":183,
        "label" : "Lucky Star",
        "message": "The first star you see at night may grant your wishes.",
        "scale": 1.5},
    "WishingWell" : {"x":0,"y":454,"width":187,"height":218,
        "label" : "Wishing well",
        "message": "Throwing a coin in a wishing well may grant you a wish.",
        "scale": 1},
    "backdrop" : {"x":195,"y":454,"width":640,"height":480},
    "resultsButton" : [
        {"x":0,"y":942,"width":233,"height":55},
        {"x":241,"y":942,"width":233,"height":55},
        {"x":241,"y":942,"width":233,"height":55},
        {"x":482,"y":942,"width":233,"height":55}
    ],
    "tokens" : ["FourLeafClover", "Horseshoe", "Ladybug", "Loony",
        "SilverLining", "Star", "WishingWell"],
    "atlasImage" : new Image(),


}
LUCKY_SCRATCH_CONFIG.atlasImage.src = "LuckyScratch.png";

class LSResult extends SLLImageLayer {
    constructor(spriteName) {
        super("backdrop", LUCKY_SCRATCH_CONFIG.atlasImage, LUCKY_SCRATCH_CONFIG.backdrop);
        this.sprite = new SLLImageLayer(spriteName, LUCKY_SCRATCH_CONFIG.atlasImage, LUCKY_SCRATCH_CONFIG[spriteName] );
        this.sprite.moveTo(320-LUCKY_SCRATCH_CONFIG[spriteName].width/2, 240-LUCKY_SCRATCH_CONFIG[spriteName].height/2);
        this.addChild(this.sprite);

        this.title = new SLLTextLayer("title",
            new SLLRectangle(0,5,640,50),
            LUCKY_SCRATCH_CONFIG[spriteName].label);
        this.title.setFont(42,"sans-serif", true, true, true, true);
        this.title.setAlignment("left");
        this.addChild(this.title);

        this.message = new SLLTextLayer("message",
            new SLLRectangle(40,400,600,50),
            LUCKY_SCRATCH_CONFIG[spriteName].message);
        this.message.setFont(24,"sans-serif", false, true, true, true);
        this.message.setAlignment("right");
        this.addChild(this.message);

        this.continue = new SLLTextButton("con",
                new SLLRectangle(500,20,100,40), "continue");
        this.continue.setClickHandler(this);
        this.addChild(this.continue);
        this.currentToken = 0;

    }

    buttonClicked(src) {
        /* testing code
        ++this.currentToken;
        if (this.currentToken === 7) this.currentToken = 0;
        this.setToken(this.currentToken);
         */
        showTicket();
    }

    setToken(tokenIndex) {
        let tokenName = LUCKY_SCRATCH_CONFIG.tokens[tokenIndex];
        let token = LUCKY_SCRATCH_CONFIG[tokenName];
        this.title.setText(token.label);
        this.message.setText(token.message);
        this.sprite.setClip(token);

        let newPosition = new SLLRectangle(320-token.width*token.scale/2,
            240-token.height*token.scale/2,
            token.width*token.scale, token.height*token.scale);
        this.sprite.adjustPosition(newPosition);
    }

}


class ScratchCover extends SLLCanvasLayer {
    constructor() {
        super("scratch", 300, 200);
        this.imageData = this.ctx.createImageData(300,200);
        this.resetCover();
    }

    resetCover() {
        let index = 0;
        for (let pixel = 0; pixel < 300*200; ++pixel) {
            this.imageData.data[index++] = 80;
            this.imageData.data[index++] = 80;
            this.imageData.data[index++] = 80;
            this.imageData.data[index++] = 255;
        }
    }

    mouseMove(x, y) {
        var real = this.findRealPosition();
        if (real.containsCoordinate(x,y)) {
            for (let px = Math.max(0, x - real.x - 8); px < Math.min(300, x - real.x + 8); ++px)
                for (let py = Math.max(0, y - real.y - 8); py < Math.min(200, y - real.y + 8); ++py) {
                    let index = py*1200+px*4;
                    this.imageData.data[index++] = 0;
                    this.imageData.data[index++] = 0;
                    this.imageData.data[index++] = 0;
                    this.imageData.data[index++] = 0;
                }
        }

        return true;
    }

    renderCanvas() {
        this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
        this.ctx.putImageData(this.imageData,0,0);
    }

    getScratchedPercent() {
        let scratchedPixels = 0;
        for (let pixel = 0; pixel < 300*200; ++pixel) {
            if (this.imageData.data[pixel*4] === 0)
                ++scratchedPixels;
        }
        return Math.floor((scratchedPixels / (300 * 200)) * 10000) / 100;
    }
}


class LSTicket extends SLLImageLayer {
    constructor(spriteName) {
        super("backdrop", LUCKY_SCRATCH_CONFIG.atlasImage, LUCKY_SCRATCH_CONFIG.backdrop);

        this.title = new SLLImageLayer("title", LUCKY_SCRATCH_CONFIG.atlasImage, LUCKY_SCRATCH_CONFIG.LucyScratchLogo);
        this.title.moveTo(10,10);
        this.addChild(this.title);
        this.percentText = new SLLTextLayer("pct",
                new SLLRectangle(170,120, 300,20), "0% scratched");
        this.percentText.setAlignment("center");
        this.addChild(this.percentText);
        this.tokens = [];
        for (let y = 0; y < 2; ++y) {
            for (let x = 0; x < 3; ++x) {
                let t = new SLLImageLayer(spriteName, LUCKY_SCRATCH_CONFIG.atlasImage, LUCKY_SCRATCH_CONFIG["Horseshoe"] );
                t.adjustPosition(new SLLRectangle(100*x+170, 100*y+140,100,100));
                this.addChild(t);
                this.tokens.push(t);
            }
        }

        this.scratchArea = new ScratchCover();//SLLLayer("t", 300,200);
        this.scratchArea.moveTo(170,140);
        this.addChild(this.scratchArea);

        this.scratchResultsButton = new SLLTextButton("results",
                new SLLRectangle(220,380,200,50), "View Results");
        this.scratchResultsButton.setClickHandler(this);
        this.addChild(this.scratchResultsButton);

        this.winningToken = 0;
        this.generateTicket();
    }

    buttonClicked(src) {
        showResults(this.winningToken);
    }

    mouseMove(x, y) {
        let changed = super.mouseMove(x, y);
        let pct = this.scratchArea.getScratchedPercent();
        this.percentText.setText(pct + "% scratched");
        this.scratchResultsButton.setVisible(pct > 60);
        return changed;
    }

    setToken(index, newTokenID) {
        let token = LUCKY_SCRATCH_CONFIG[LUCKY_SCRATCH_CONFIG.tokens[newTokenID]];
        this.tokens[index].setClip(token);
        let w = 95, h=95;
        if (token.width < token.height) {
            w = 95 * token.width / token.height;
        } else {
            h = 95 * token.height / token.width;
        }
        let x = index % 3;
        let y = Math.floor(index / 3);
        this.tokens[index].adjustPosition(new SLLRectangle(100*x+170, 100*y+140,w,h));
    }

    generateTicket() {
        this.winningToken = Math.floor(Math.random() * LUCKY_SCRATCH_CONFIG.tokens.length);
        let second = this.winningToken;
        let third = second;

        while (second === this.winningToken) {
            second = Math.floor(Math.random() * LUCKY_SCRATCH_CONFIG.tokens.length);
        }
        while ( (third === this.winningToken) || (third === second) ) {
            third = Math.floor(Math.random() * LUCKY_SCRATCH_CONFIG.tokens.length);
        }

        // quick scramble
        let ticket = [this.winningToken, this.winningToken, this.winningToken, second, second, third];
        for (let i = 0; i < 6; ++i) {
            let swapIndex = Math.floor(Math.random() * ticket.length);
            let temp = ticket[swapIndex];
            ticket[swapIndex] = ticket[i];
            ticket[i] = temp;
        }

        this.scratchArea.resetCover();
        for (let i = 0; i < 6; ++i)
            this.setToken(i, ticket[i]);
        this.scratchResultsButton.setVisible(false);
    }
}