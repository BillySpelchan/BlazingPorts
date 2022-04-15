STTConsts = {
    "LOANDING_SCREEM" : 0,
    "TITLE_SCREEN" : 1,
    "SANTA_SELECT_SCREEN" : 2,
    "KRAMPUS_SELECT_SCREEN" : 3,
    "SANTA_GAME_SCREEN" : 4,
    "KRAMPUS_GAME_SCREEN" : 5,
    "INSTRUCTIONS_SCREEN" : 6,

    "OPPONENT_SANTA" : 0,
    "OPPONENT_KRAMPUS" : 1,

    "SELECT_BACKDROP" : ["SantaSelect", "KrampusSelect"],
    "SELECT_SCREEN_MESSAGE_START": new SLLRectangle(320,20,320,25),
    "SELECT_BUTTONS" : [
        "I've been good! (easy)",
        "I plead the fifth (normal)",
        "I've been bad! (hard)"
    ],
    "SELECT_BUTTON_START" : new SLLRectangle(30,100,260,40),
    "SELECT_BUTTON_GAP" : 100,

    "INSTRUCTIONS_CONTINUE": new SLLRectangle(220,420,200,40),

    // Image Atlas Constants
    "Title" : {"x" : 0, "y": 0, "width": 640, "height": 480 },
    "SantaSelect" : {"x" : 700, "y": 0, "width": 640, "height": 480 },
    "KrampusSelect" : {"x" : 1400, "y": 0, "width": 640, "height": 480 },
    "InstructionsPage1" : {"x" : 0, "y": 500, "width": 640, "height": 480 },
    "InstructionsPage2" : {"x" : 700, "y": 500, "width": 640, "height": 480 },
    "InstructionsPage3" : {"x" : 1400, "y": 500, "width": 640, "height": 480 },
    "INSTRUCTION_PAGES": ["InstructionsPage1", "InstructionsPage2", "InstructionsPage3"],

    "KrampusGameBackdrop" : {"x" : 0, "y": 1500, "width": 640, "height": 480 },
    "KrampusStartGameText" : {"x" : 700, "y": 1500, "width": 545, "height": 40 },
    "KrampusYourMoveText" : {"x" : 700, "y": 1550, "width": 545, "height": 40 },
    "KrampusMyMoveText" : {"x" : 700, "y": 1600, "width": 545, "height": 40 },
    "KrampusPlayerWinText" : {"x" : 700, "y": 1650, "width": 545, "height": 40 },
    "KrampusPlayerLoseText" : {"x" : 700, "y": 1700, "width": 545, "height": 40 },
    "KrampusTieText" : {"x" : 700, "y": 1750, "width": 545, "height": 40 },

    "SantaGameBackdrop" : {"x" : 0, "y": 1000, "width": 640, "height": 480 },
    "SantaStartGameText" : {"x" : 700, "y": 1000, "width": 545, "height": 40 },
    "SantaYourMoveText" : {"x" : 700, "y": 1050, "width": 545, "height": 40 },
    "SantaMyMoveText" : {"x" : 700, "y": 1100, "width": 545, "height": 40 },
    "SantaPlayerWinText" : {"x" : 700, "y": 1150, "width": 545, "height": 40 },
    "SantaPlayerLoseText" : {"x" : 700, "y": 1200, "width": 545, "height": 40 },
    "SantaTieText" : {"x" : 700, "y": 1250, "width": 545, "height": 40 },

    "MESSAGE_START": 0,
    "MESSAGE_PLAYER_TURN": 1,
    "MESSAGE_AI_TURN": 2,
    "MESSAGE_PLAYER_WON": 3,
    "MESSAGE_PLAYER_LOST": 4,
    "MESSAGE_TIE_GAME": 5,

    "SANTA_MESSAGE_CLIPS": [
        {"x" : 700, "y": 1000, "width": 545, "height": 40 },
        {"x" : 700, "y": 1050, "width": 545, "height": 40 },
        {"x" : 700, "y": 1100, "width": 545, "height": 40 },
        {"x" : 700, "y": 1150, "width": 545, "height": 40 },
        {"x" : 700, "y": 1200, "width": 545, "height": 40 },
        {"x" : 700, "y": 1250, "width": 545, "height": 40 }
    ],

    "KRAMPUS_MESSAGE_CLIPS": [
        {"x" : 700, "y": 1500, "width": 545, "height": 40 },
        {"x" : 700, "y": 1550, "width": 545, "height": 40 },
        {"x" : 700, "y": 1600, "width": 545, "height": 40 },
        {"x" : 700, "y": 1650, "width": 545, "height": 40 },
        {"x" : 700, "y": 1700, "width": 545, "height": 40 },
        {"x" : 700, "y": 1750, "width": 545, "height": 40 }
    ],

    "TileEmpty": {"x" : 1400, "y": 1150, "width": 120, "height": 120 },
    "TileSelect": {"x" : 1400, "y": 1000, "width": 120, "height": 120 },
    "TileSanta": {"x" : 1550, "y": 1000, "width": 120, "height": 120 },
    "TileSantaWin": {"x" : 1700, "y": 1000, "width": 120, "height": 120 },
    "TileKrampus": {"x" : 1550, "y": 1150, "width": 120, "height": 120 },
    "TileKrampusWin": {"x" : 1700, "y": 1150, "width": 120, "height": 120 },

    "TILE_OFFSETS" : [
        {"x": 27, "y":60}, {"x": 167, "y":60}, {"x": 307, "y":60},
        {"x": 27, "y":202}, {"x": 167, "y":202}, {"x": 307, "y":202},
        {"x": 27, "y":344}, {"x": 167, "y":344}, {"x": 307, "y":344}
    ],

    "TILE_EMPTY": 0,
    "TILE_X": 1,
    "TILE_O": 2,
    "TILE_X_WIN": 3,
    "TILE_O_WIN": 4,

    "TILE_CLIPS" : [
        {"x" : 1400, "y": 1150, "width": 120, "height": 120 },
        {"x" : 1550, "y": 1000, "width": 120, "height": 120 },
        {"x" : 1550, "y": 1150, "width": 120, "height": 120 },
        {"x" : 1700, "y": 1000, "width": 120, "height": 120 },
        {"x" : 1700, "y": 1150, "width": 120, "height": 120 }
    ],

    "TILE_AGENTS_SANTA": [
        new AIPlayer(TTTConsts.X),
        new MontyPlayer(TTTConsts.X, 5),
        new MontyPlayer(TTTConsts.X, 20)
    ],

    "TILE_AGENTS_KRAMPUS": [
        new MontyPlayer(TTTConsts.O, 5),
        new MontyPlayer(TTTConsts.O, 10),
        new RecursivePlayer(TTTConsts.O, 10)
    ],

    // SHARED STATE - NOT CONSTANTS BUT HERE ANYWAYS
    "atlasLoaded" : false
}

STTAtlasImage = new Image();
STTAtlasImage.src = "STT_Atlas.png";

// *********************************************

class STTTile extends SLLImageLayer {
    constructor(host, tileIndex) {
        super(tileIndex, STTAtlasImage, STTConsts.TileSelect);
        this.host = host;
        this.tileIndex = tileIndex;
        this.tileState = STTConsts.TILE_EMPTY;
        this.highlighted = true;
    }

    mouseMove(x, y) {
        let changed = super.mouseMove(x, y);
        if (this.tileState !== STTConsts.TILE_EMPTY) return changed;
        if ( ! this.host.isPlayersTurn()) return changed;
        let r = this.findRealPosition();
        let over = r.containsCoordinate(x,y);
        if (over === this.highlighted)
            return changed;
        if (over)
            this.setClip(STTConsts.TileSelect);
        else
            this.setClip(STTConsts.TileEmpty);
        this.highlighted = over;
        return true;
    }

    mouseUp(x, y) {
        let changed = super.mouseMove(x, y);
        if (this.tileState !== STTConsts.TILE_EMPTY) return changed;
        if ( ! this.host.isPlayersTurn()) return changed;
        let r = this.findRealPosition();
        if (r.containsCoordinate(x,y))
            this.host.makeMove(this.tileIndex);
        return true;
    }

    setTileState(state) {
        this.tileState = state;
        this.setClip(STTConsts.TILE_CLIPS[state]);
    }
}

// *********************************************

class PlayAgainPrompt extends SLLLayer {
    constructor(host) {
        super("pa", 440,100);
        this.host = host;
        this.setBackgroundColor("#3a1a5a");
        let text = new SLLTextLayer("loadingTxt",
            new SLLRectangle(20,20,200,80), "Play Again?");
        text.setFont(42);
        this.addChild(text);

        this.yesBtn = new SLLTextButton("yes", new SLLRectangle(260,20, 70,40), "Yes");
        this.yesBtn.setClickHandler(this);
        this.addChild(this.yesBtn);

        this.noBtn = new SLLTextButton("no", new SLLRectangle(340,20, 70,40), "No");
        this.noBtn.setClickHandler(this);
        this.addChild(this.noBtn);
    }

    buttonClicked(btn) {
        if ( ! this._visible) return;
        if (btn === this.yesBtn)
            this.host.reset();
        if (btn === this.noBtn)
            this.host.owner.swapScreen(STTConsts.TITLE_SCREEN);
    }

}

// *********************************************

class Screen extends SLLLayer {
    constructor(label, owner) {
        super(label, owner.bounds.width, owner.bounds.height);
        this.owner = owner;
    }

    buttonClicked(btn) {
        console.log(`TODO - Implement ${btn.id}`);
    }

    createButton(label, bounds) {
        let btn = new SLLTextButton(label, bounds, label);
        btn.setClickHandler(this);
        this.addChild(btn);
        return btn;
    }

    createImage(atlasEntry, position=null) {
        let img = new SLLImageLayer(atlasEntry, STTAtlasImage, STTConsts[atlasEntry]);
        if (position != null)
            img.moveTo(position.x, position.y);
        this.addChild(img);
        return img;
    }

    reset() {
        // Placeholder for screens that need this functionality
    }
}

// *********************************************

class LoadingScreen extends Screen {
    constructor(owner) {
        super("loading", owner);
        let text = new SLLTextLayer("loadingTxt",
            new SLLRectangle(0,200,640,80), "LOADING...");
        this.setBackgroundColor("#006600");
        text.setAlignment("center");
        text.setFont(42);
        this.addChild(text);
        window.requestAnimationFrame((this.tick).bind(this));
    }

    tick() {
        if (STTAtlasImage.complete)
            this.owner.swapScreen(STTConsts.TITLE_SCREEN);
        else
            window.requestAnimationFrame((this.tick).bind(this));
    }
}

// *********************************************

class GameScreen extends Screen {
    constructor(owner, opponent) {
        super("game"+opponent, owner)
        this.gameBoard = new TTTBoard();
        this.agent = null;
        if (opponent === STTConsts.OPPONENT_SANTA) {
            this.backdrop = this.createImage("SantaGameBackdrop");
            this.opponentPiece = TTTConsts.X;
            this.playerPiece = TTTConsts.O;
            this.messageSet = STTConsts.SANTA_MESSAGE_CLIPS;
        } else {
            this.backdrop = this.createImage("KrampusGameBackdrop");
            this.opponentPiece = TTTConsts.O;
            this.playerPiece = TTTConsts.X;
            this.messageSet = STTConsts.KRAMPUS_MESSAGE_CLIPS;
        }
        this.message = this.createImage("SantaStartGameText", {"x": 44, "y":4});
        this.setMessageBubble(STTConsts.MESSAGE_START);

        this.tiles = [];
        for (let i = 0; i < 9; ++i) {
            let tile = new STTTile(this, i);
            this.tiles.push(tile);
            let position = STTConsts.TILE_OFFSETS[i];
            tile.moveTo(position.x, position.y);
            this.addChild(tile);
        }

        this.playAgain = new PlayAgainPrompt(this);
        this.playAgain.moveTo(0,200);
        this.playAgain.setVisible(false);
        this.addChild(this.playAgain);
    }

    isPlayersTurn() {
        return (this.currentPlayer === this.playerPiece);
    }

    makeAIMove(firstMove = false) {
        let tileIndex = this.agent.getNextMove(this.gameBoard, this.currentPlayer);
        setTimeout(this.makeMove.bind(this, tileIndex), 200);
    }

    makeMove(tileID) {
        this.gameBoard.setTileByIndex(tileID, this.currentPlayer)
        let state = this.updateBoard()
        if (state.state === TTTConsts.PLAYING) {
            this.currentPlayer =  (this.currentPlayer === TTTConsts.X) ? TTTConsts.O : TTTConsts.X;
            // handle AI if necessary
            if (this.currentPlayer === this.opponentPiece) {
                this.setMessageBubble(STTConsts.MESSAGE_AI_TURN);
                this.makeAIMove();
            } else {
                this.setMessageBubble(STTConsts.MESSAGE_PLAYER_TURN);
            }
        } else {
            this.currentPlayer = TTTConsts.EMPTY;
            if (state.state === TTTConsts.X_WON) {
                if (this.opponentPiece === TTTConsts.X)
                    this.setMessageBubble(STTConsts.MESSAGE_PLAYER_LOST);
                else
                    this.setMessageBubble(STTConsts.MESSAGE_PLAYER_WON);
            } else if (state.state === TTTConsts.O_WON) {
                if (this.opponentPiece === TTTConsts.O)
                    this.setMessageBubble(STTConsts.MESSAGE_PLAYER_LOST);
                else
                    this.setMessageBubble(STTConsts.MESSAGE_PLAYER_WON);
            } else {
                this.setMessageBubble(STTConsts.MESSAGE_TIE_GAME);
            }

            setTimeout(()=>{this.playAgain.setVisible(true); draw();}, 500);

        }
        draw();
    }

    setAgent(agent) {
        this.agent = agent;
    }

    setMessageBubble(messageID) {
        this.message.setClip(this.messageSet[messageID]);
    }

    reset() {
        this.gameBoard.setFromTemplate(".........");
        this.currentPlayer = TTTConsts.X;
        this.playAgain.setVisible(false);
        if (this.currentPlayer === this.opponentPiece)
            this.makeMove(this.agent.getNextMove(this.gameBoard, this.currentPlayer));
        else
            this.updateBoard();
    }

    updateBoard() {
        for (let i = 0; i < 9; ++i) {
            let tileState = this.gameBoard.getTileByIndex(i);
            this.tiles[i].setTileState(tileState);
        }
        let state = this.gameBoard.getGameState();
        // TODO draw win if it exists
        if ((state.state === TTTConsts.X_WON) || (state.state === TTTConsts.O_WON) ) {
            let tileState = (state.state === TTTConsts.X_WON) ? STTConsts.TILE_X_WIN : STTConsts.TILE_O_WIN;
            let offset = TTTConsts.LINE_OFFSETS[state.winDir];
            let startTile = state.winX + 3*state.winY;
            for (let i = 0; i < 3; ++ i) {
                this.tiles[startTile+offset*i].setTileState(tileState);
            }
        }
        return state;
    }
}

// *********************************************

class InstructionsScreen extends Screen {
    constructor(owner) {
        super("inst", owner);
        this.backdrop = this.createImage("InstructionsPage1");
        this.nextButton = this.createButton("Continue", STTConsts.INSTRUCTIONS_CONTINUE);
        this.currentPage = 0;
    }

    buttonClicked(btn) {
        ++this.currentPage;
        if (this.currentPage === STTConsts.INSTRUCTION_PAGES.length)
            return this.owner.swapScreen(STTConsts.TITLE_SCREEN);
        let r = STTConsts[STTConsts.INSTRUCTION_PAGES[this.currentPage]];
        this.backdrop.setClip(r);
    }

    reset() {
        this.backdrop.setClip(STTConsts[STTConsts.INSTRUCTION_PAGES[0]]);
        this.currentPage = 0;
    }
}
// *********************************************

class SelectScreen extends Screen {
    constructor(owner, opponentID ) {
        super("Select_" + opponentID, owner);
        this.backdrop = this.createImage(STTConsts.SELECT_BACKDROP[opponentID]);
        this.opponent = opponentID;
        this.agents = (opponentID === STTConsts.OPPONENT_SANTA) ? STTConsts.TILE_AGENTS_SANTA : STTConsts.TILE_AGENTS_KRAMPUS;
        let r = STTConsts.SELECT_BUTTON_START;
        this.difficultyButtons = [];
        for (let i = 0; i < STTConsts.SELECT_BUTTONS.length; ++i) {
            this.difficultyButtons.push(this.createButton(STTConsts.SELECT_BUTTONS[i],
                new SLLRectangle(r.x, r.y + i * STTConsts.SELECT_BUTTON_GAP, r.width, r.height)));
        }
    }

    buttonClicked(btn) {
        let btnIndex = 0;
        for (let i = 0; i < this.difficultyButtons.length; ++i)
            if (btn === this.difficultyButtons[i])
                btnIndex = i;
        this.owner.startGame(this.opponent, this.agents[btnIndex]);
    }

}

// *********************************************

class TitleScreen extends Screen {
    constructor(owner) {
        super("title", owner);

        this.backdrop = this.createImage("Title");

        this.instructions = this.createButton("Instructions",
            new SLLRectangle(160,300, 320,40));
        this.playSanta = this.createButton("Play Against Santa",
            new SLLRectangle(160,350, 320,40));
        this.playKrampus = this.createButton("Play Against Krampus",
            new SLLRectangle(160,400, 320,40));
    }

    buttonClicked(btn) {
        if (btn === this.instructions)
            return this.owner.swapScreen(STTConsts.INSTRUCTIONS_SCREEN);
        if (btn === this.playSanta)
            return this.owner.swapScreen(STTConsts.SANTA_SELECT_SCREEN);
        if (btn === this.playKrampus)
            return this.owner.swapScreen(STTConsts.KRAMPUS_SELECT_SCREEN);

        console.log(`TODO - Implement ${btn.id}`);
    }

}

// *********************************************

class STTMain extends SLLLayer {
    constructor(bounds) {
        super("main", bounds.width, bounds.height);
        this.bounds = bounds;
        this.setBackgroundColor("#888")
        this.screens = [ new LoadingScreen(this), // loading
            new TitleScreen(this),
            new SelectScreen(this,STTConsts.OPPONENT_SANTA),
            new SelectScreen(this,STTConsts.OPPONENT_KRAMPUS),
            new GameScreen(this, STTConsts.OPPONENT_SANTA),
            new GameScreen(this, STTConsts.OPPONENT_KRAMPUS),
            new InstructionsScreen(this)];
        this.currentScreen = this.screens[STTConsts.LOANDING_SCREEM];
        this.addChild(this.currentScreen);
    }

    swapScreen(screenID) {
        if (this.screens[screenID] == null) return;
        this.removeChild(this.currentScreen);
        this.currentScreen = this.screens[screenID];
        this.addChild(this.currentScreen);
        this.currentScreen.reset();
        draw();
    }

    startGame(opponent, agent) {
        let sid = (opponent === STTConsts.OPPONENT_SANTA) ? STTConsts.SANTA_GAME_SCREEN : STTConsts.KRAMPUS_GAME_SCREEN;

        this.screens[sid].setAgent(agent);
        this.swapScreen(sid);

    }
}