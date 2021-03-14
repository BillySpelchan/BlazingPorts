QC = {
    "boardOffsetX" : 120,
    "boardOffsetY" : 40,
    "tileSize" : 50
}
QC.backdrop = new Image();
QC.backdrop.src = "checkerboard.jpg";
QC.lockedQueen = new Image();
QC.lockedQueen.src = "blackking.gif";
QC.playerQueen = new Image();
QC.playerQueen.src = "whiteking.gif";
QC.canvasRect = new SLLRectangle(0,0, 640,480);
QC.QueenClip = new SLLRectangle(0,0,QC.tileSize, QC.tileSize);

// ====================================================

class Queen extends SLLImageLayer{
    constructor(x,y,locked) {
        super("queen", QC.playerQueen, QC.QueenClip);
        this.changePosition(x,y);
        this.setLocked(locked);
    }

    changePosition(x,y) {
        this.x = x;
        this.y = y;
        this.moveTo(QC.boardOffsetX+this.x*QC.tileSize,
            QC.boardOffsetY+this.y*QC.tileSize);
    }

    setLocked(b) {
        this.locked = b;
        if (b)
            this.setImage(QC.lockedQueen);
        else
            this.setImage(QC.playerQueen);
    }

    isCoordinateBlocked(x,y) {
        if (this._visible === false)
            return false;
        if ((x === this.x) || (y===this.y))
            return true;
        return (Math.abs(this.x - x) === Math.abs(this.y-y));
    }
}

// =====================================================

class BaseSolver {
    constructor(game) {
        this.game = game;
        this.locked = game.queens[0].y * 8 + game.queens[0].x;
        this.moveable = [0,1,2,3,4,5,6];
    }

    reset() {
        this.locked = this.game.queens[0].y * 8 + this.game.queens[0].x;
        let spot = 0;
        for (let i = 0; i < 7; ++i) {
            if (this.locked !== spot)
                this.moveable[i] = spot;
            else {
                ++spot;
                this.moveable[i] = spot;
            }
            ++spot;
        }
    }

    placeStepOnBoard() {
        for (let i = 0; i < 7; ++i) {
            let qx = this.moveable[i] % 8;
            let qy = Math.floor(this.moveable[i] / 8);
            console.log(`placing ${i} at ${qx},${qy}`);
            this.game.queens[i+1].changePosition(qx,qy);
            this.game.queens[i+1].setVisible(true);
        }
    }

    nextMove() {
        let pieceToMove = 0;
        for (let i = 6; i >= 0; --i) {
            let nextPos = this.moveable[i] + 1;
            if (nextPos === this.locked)
                ++nextPos;
            if (nextPos < (57+i)) {
                pieceToMove = i;
                this.moveable[i] = nextPos;
                break;
            }
        }
        for (let i = pieceToMove+1; i < 7; ++i) {
            let nextPos = this.moveable[i-1] + 1;
            if (nextPos === this.locked)
                ++nextPos;
            this.moveable[i] = nextPos;

        }
    }
}

// =====================================================

class QCGame extends SLLLayer {
    constructor() {
        super("game", 640, 480);
        this.backdrop =  new SLLImageLayer("back", QC.backdrop, QC.canvasRect);
        this.highlightTile = new SLLLayer("highlight", QC.tileSize, QC.tileSize);
        this.addChild(this.backdrop);
        this.addChild(this.highlightTile);
        this.queens = [];
        for (let i = 0; i < 8; ++i) {
            let q = new Queen(0,0,false);
            this.addChild(q);
            //q.setVisible(false);
            this.queens.push(q);
        }

        this.undoButton = new SLLTextButton("undo",
            new SLLRectangle(5,300,100,30),
            "Undo", 3);
        this.undoButton.setClickHandler(this);
        this.addChild(this.undoButton);

        this.newGameButton = new SLLTextButton("newgame",
            new SLLRectangle(5,260,100,30),
            "New Game", 3);
        this.newGameButton.setClickHandler(this);
        this.addChild(this.newGameButton);

        this.restartGameButton= new SLLTextButton("newgame",
            new SLLRectangle(5,340,100,30),
            "Restart", 3);
        this.restartGameButton.setClickHandler(this);
        this.addChild(this.restartGameButton);

        this.solveBruteButton= new SLLTextButton("brute",
            new SLLRectangle(530,200,100,30),
            "Brute force", 3);
        this.solveBruteButton.setClickHandler(this);
        this.addChild(this.solveBruteButton);
        this.solveLinesButton= new SLLTextButton("bruteLine",
            new SLLRectangle(530,240,100,30),
            "Brute Lines", 3);
        this.solveLinesButton.setDisabled(true);
        //this.solveLinesButton.setClickHandler(this);
        this.addChild(this.solveLinesButton);

        this.solveBacktrackButton= new SLLTextButton("Backtrack",
            new SLLRectangle(530,280,100,30),
            "Backtrack", 3);
        this.solveBacktrackButton.setDisabled(true);
        //this.solveBacktrackButton.setClickHandler(this);
        this.addChild(this.solveBacktrackButton);

        this.solveConstraintsButton= new SLLTextButton("brute",
            new SLLRectangle(530,320,100,30),
            "Forward", 3);
        this.solveConstraintsButton.setDisabled(true);
        //this.solveConstraintsButton.setClickHandler(this);
        this.addChild(this.solveConstraintsButton);

        this.title = new SLLTextLayer("title",
            new SLLRectangle(0,5,640,50),
            "Queen's Challenge");
        this.title.setFont(30,"sans-serif", true, true, true, true);
        this.title.setAlignment("center");
        this.addChild(this.title);

        this.copyright = new SLLTextLayer("copyright",
            new SLLRectangle(0,450,640,30),
            "Copyright © 2020 Billy D. Spelchan. Some Rights Reserved.");
        this.copyright.setFont(16,"sans-serif", false, true, true, false);
        this.copyright.setAlignment("center");
        this.addChild(this.copyright);

        this.gameWon = new SLLTextLayer("won",
            new SLLRectangle(0,200,640,80),
            "Well done!");
        this.gameWon.setFont(70,"sans-serif", true, true, true, true);
        this.gameWon.setAlignment("center");
        this.gameWon.setVisible(true);
        this.gameWon.setColor("#80A", "#305")
        this.addChild(this.gameWon);

        this.startGame();
    }

    buttonClicked(src) {
        if (src === this.undoButton) {
            let indx = 1;
            while ((this.queens[indx]._visible) &&
            (indx < this.queens.length))
                ++indx;
            console.log("Should remove queen " + indx);
            if (indx > 1)
                this.queens[indx-1].setVisible(false);
        } else if (src === this.newGameButton) {
            this.startGame();
        } else if (src === this.restartGameButton) {
            for (let i = 1; i < this.queens.length; ++i)
                this.queens[i].setVisible(false);
        } else if (src === this.solveBruteButton) {
            this.startSolver(new BaseSolver(this));
        }
    }

    canEnterTile(tileX,tileY) {
        let enterable = true;
        for (let i = 0; i < this.queens.length;++i) {
            if (this.queens[i].isCoordinateBlocked(tileX,tileY)) {
                enterable = false;
                break
            }
        }
        return enterable;
    }

    mouseDown(x, y) {
        let tileX = Math.floor((x - QC.boardOffsetX) / QC.tileSize);
        let tileY = Math.floor((y - QC.boardOffsetY) / QC.tileSize);
        let valid = ( (tileX >= 0 ) && (tileX <= 7) && (tileY >= 0 ) && (tileY <= 7) )
        if ((valid) && (this.canEnterTile(tileX, tileY))) {
            //find index of next free tile
            let indx = 1;
            while (this.queens[indx]._visible === true) ++indx;
            this.queens[indx].changePosition(tileX, tileY);
            this.queens[indx].setVisible(true);
            // check for win
            this.gameWon.setVisible(indx === 7);
        }
        super.mouseDown(x,y);
        return true;
    }

    mouseMove(x, y) {
        super.mouseMove(x, y);
        let tileX = Math.floor((x - QC.boardOffsetX) / QC.tileSize);
        let tileY = Math.floor((y - QC.boardOffsetY) / QC.tileSize);
        this.highlightTile.moveTo(QC.boardOffsetX + tileX * QC.tileSize,
            QC.boardOffsetY + tileY * QC.tileSize);

        let valid = ( (tileX >= 0 ) && (tileX <= 7) && (tileY >= 0 ) && (tileY <= 7) )
        this.highlightTile.setVisible(valid);
        if (valid) {
            if (this.canEnterTile(tileX, tileY))
                this.highlightTile.setBackgroundColor("rgba(0,255,0,.5)");
            else
                this.highlightTile.setBackgroundColor("rgba(255,0,0,.5)");
        }

        return true;
    }

    startGame() {
        for (let i = 1; i < this.queens.length; ++i) {
            this.queens[i].setVisible(false);
        }
        this.queens[0].changePosition(Math.floor(Math.random()*8),Math.floor(Math.random()*8));
        this.queens[0].setLocked(true);
        this.queens[0].setVisible(true);
        this.gameWon.setVisible(false);

    }

    startSolver(solver) {
        this.solver = solver;
        solver.reset();
        setTimeout(this.nextSolverStep.bind(this), 10);
    }

    isBoardSolved() {
        let solved = true;
        for (let q = 1; q < 8; ++q) {
            let queen = this.queens[q];
            for (let i = 0; i < q; ++i)
               if (this.queens[i].isCoordinateBlocked(queen.x, queen.y))
                   solved = false;
        }
        return solved;
    }

    nextSolverStep() {
        this.solver.placeStepOnBoard();
        if ( ! this.isBoardSolved()) {
            this.solver.nextMove();
            setTimeout(this.nextSolverStep.bind(this), 250);
        }
        draw();
    }
}