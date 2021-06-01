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
            //console.log(`placing ${i} at ${qx},${qy}`);
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
            if (nextPos <= (57+i)) {
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

class RowBruteSolver extends BaseSolver {
    constructor(game) {
        super(game);
    }

    reset() {
        this.locked = this.game.queens[0].y * 8 + this.game.queens[0].x;
        let lockedRow = this.game.queens[0].y
        let spot = 0;
        for (let i = 0; i < 7; ++i) {
            if (i === lockedRow)
                spot += 8;
            this.moveable[i] = spot;
            spot += 8;
        }
    }

    nextMove() {
        let pieceToMove = 0;
        for (let i = 6; i >= 0; --i) {
            let nextPos = this.moveable[i] + 1;
            if ((nextPos % 8) > 0) {
                pieceToMove = i;
                this.moveable[i] = nextPos;
                break;
            }
        }
        for (let i = pieceToMove+1; i < 7; ++i) {
            this.moveable[i] = Math.floor(this.moveable[i] / 8)*8;
        }
    }
}

// =====================================================

class BacktrackSolver extends BaseSolver {
    constructor(game) {
        super(game);
        this.depth = 0;
    }

    reset() {
        this.locked = this.game.queens[0].y * 8 + this.game.queens[0].x;
        let lockedRow = this.game.queens[0].y;
        if (lockedRow === 0)
            this.moveable[0] = 8;
        else
            this.moveable[0] = 0;
        this.depth = 0;
        this.placeStepOnBoard();
    }

    placeStepOnBoard() {
        super.placeStepOnBoard();
        for (let i = this.depth+1; i < 7; ++i)
            this.game.queens[i+1].setVisible(false);
    }

    nextMove() {
        let moved = false;
        let backtrack = false;
        while ( ! moved) {
            let queen = this.game.queens[this.depth+1];
            queen.setVisible(false);
            if ((!backtrack) && (this.game.canEnterTile(queen.x, queen.y))) {
                // spawn next depth
                ++this.depth;
                let lockedRow = this.game.queens[0].y;
                this.moveable[this.depth] = (queen.y+1) * 8;
                if ((queen.y+1) === lockedRow)
                    this.moveable[this.depth] += 8;
                moved = true;
            } else {
                if (queen.x < 7) {
                    this.moveable[this.depth] += 1;
                    moved = true;
                } else {
                    backtrack = true;
                    --this.depth;
                }
            }
        }
    }
}

// =====================================================

class ForwardSolver extends BaseSolver {
    constructor(game) {
        super(game);
        this.depth = 0;
        this.domains = [];
        for (let y = 0; y < 8; ++y) {
            let row = [];
            for (let x = 0; x < 8; ++x) {
                row.push(-1);
            }
            this.domains.push(row);
        }
    }

    placeStepOnBoard() {
        super.placeStepOnBoard();
        for (let i = this.depth; i < 7; ++i)
            this.game.queens[i+1].setVisible(false);
    }

    reset() {
        this.locked = this.game.queens[0].y * 8 + this.game.queens[0].x;
        for (let y = 0; y < 8; ++y) {
            let d = y === this.game.queens[0].y ? 0 : -1;
            for (let x = 0; x < 8; ++x) {
                this.domains[y][x] = d;
            }
        }
        this.depth = -1;
        this.updateDomains(this.game.queens[0].x, this.game.queens[0].y);
        this.depth = 0;
        this.placeStepOnBoard();
    }

    updateDomains(qx,qy) {
        // remove invalid moves from domain by marking with level
        let domainLevel = (this.depth < 0) ? 0 : this.depth;

        for (let y = domainLevel; y < 8; ++y) {
            if (this.domains[y][qx] < 0)
                this.domains[y][qx] = domainLevel;
            let dx1 = qx + y - qy;
            let dx2 = qx -y + qy;
            if ((dx1 >= 0) && (dx1 < 8) && (this.domains[y][dx1] < 0))
                this.domains[y][dx1] = domainLevel;
            if ((dx2 >= 0) && (dx2 < 8) && (this.domains[y][dx2] < 0))
                this.domains[y][dx2] = domainLevel;
        }

        // see if remaining rows still valid
        let row = domainLevel;
        let needToBacktrack = false;
        if (row >= this.game.queens[0].y)
            ++row
        for (let i = domainLevel; i < 7; ++i) {
            if (row === this.game.queens[0].y)
                ++row;
            let move = false;
            for (let c = 0; c < 8; ++c) {
                if (this.domains[row][c] < 0) {
                    move = true;
                    break;
                }
            }
            if ( ! move) {
                needToBacktrack = true;
                break;
            }
            ++row;
        }
        if (needToBacktrack)
            this.backTrack();
    }

    backTrack() {
        for (let y = this.depth; y < 8; ++y) {
            for (let x = 0; x < 8; ++x) {
                if (this.domains[y][x] >= this.depth)
                    this.domains[y][x] = -1;
            }
        }
        --this.depth;
    }

    nextMove() {
        let row = this.depth;
        if (this.game.queens[0].y <= row)
            ++row;
        let moved = false;
        for (let c = 0; c < 8; ++c) {
            if (this.domains[row][c] < 0) {
                this.moveable[this.depth] = row*8+c;
                this.domains[row][c] = this.depth;
                ++this.depth;
                this.updateDomains(c, row);
                moved = true;
                break;
            }
        }
        if (!moved)
            this.backTrack();
        // show domains
        for (let y = 0; y < 8; ++y) {
            for (let x = 0; x < 8; ++x) {
                if (this.domains[y][x] === -1) {
                    this.game.boardHighlights[y * 8 + x].setBackgroundColor("rgba(0,0,128,.5)");
                    this.game.boardHighlights[y * 8 + x].setVisible(true);
                }
            }
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

        this.boardHighlights = [];
        for (let i = 0; i < 8; ++i) {
            for (let j = 0; j < 8; ++j) {
                let highlight = new SLLLayer("h"+i+"_"+j, QC.tileSize, QC.tileSize);
                highlight.moveTo(QC.boardOffsetX + j * QC.tileSize,
                QC.boardOffsetY + i * QC.tileSize);
                highlight.setVisible(false);
                this.boardHighlights.push(highlight);
                this.addChild(highlight);
            }
        }
        this.queens = [];
        for (let i = 0; i < 8; ++i) {
            let q = new Queen(0,0,false);
            this.addChild(q);
            //q.setVisible(false);
            this.queens.push(q);
        }

        this.gameplayLabel = new SLLTextLayer("gpl",
            new SLLRectangle(5,230,100,30),
            "Game play");
        this.gameplayLabel.setFont(20,"sans-serif", true, false, true, true);
        this.gameplayLabel.setAlignment("center");
        this.addChild(this.gameplayLabel);

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


        this.solversLabel = new SLLTextLayer("sl",
            new SLLRectangle(530,230,100,30),
            "Solvers");
        this.solversLabel.setFont(20,"sans-serif", true, false, true, true);
        this.solversLabel.setAlignment("center");
        this.addChild(this.solversLabel);

        this.solveBruteButton= new SLLTextButton("brute",
            new SLLRectangle(530,260,100,30),
            "Brute force", 3);
        this.solveBruteButton.setClickHandler(this);
        this.addChild(this.solveBruteButton);
        this.solveLinesButton= new SLLTextButton("bruteLine",
            new SLLRectangle(530,300,100,30),
            "Brute Lines", 3);
        this.solveLinesButton.setClickHandler(this);
        this.addChild(this.solveLinesButton);

        this.solveBacktrackButton= new SLLTextButton("Backtrack",
            new SLLRectangle(530,340,100,30),
            "Backtrack", 3);
        this.solveBacktrackButton.setClickHandler(this);
        this.addChild(this.solveBacktrackButton);

        this.solveForwardButton= new SLLTextButton("Forward",
            new SLLRectangle(530,380,100,30),
            "Forward", 3);
        this.solveForwardButton.setClickHandler(this);
        this.addChild(this.solveForwardButton);

        this.title = new SLLTextLayer("title",
            new SLLRectangle(0,5,640,50),
            "Queen's Challenge");
        this.title.setFont(30,"sans-serif", true, true, true, true);
        this.title.setAlignment("center");
        this.addChild(this.title);

        this.copyright = new SLLTextLayer("copyright",
            new SLLRectangle(0,450,640,30),
            "Copyright © 2020,2021 Billy D. Spelchan. Some Rights Reserved.");
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

        this.testValue = 0;
        this.startGame();
    }

    buttonClicked(src) {
        this.clearBoardHighlights();
        if ((src === this.undoButton) && (this.solver))
            src = this.restartGameButton;
        if (src === this.undoButton) {
            this.solver = null;
            let indx = 1;
            while ((this.queens[indx]._visible) &&
            (indx < this.queens.length))
                ++indx;
            if (indx > 1)
                this.queens[indx-1].setVisible(false);
        } else if (src === this.newGameButton) {
            this.startGame();
        } else if (src === this.restartGameButton) {
            this.solver = null;
            for (let i = 1; i < this.queens.length; ++i)
                this.queens[i].setVisible(false);
        } else if (src === this.solveBruteButton) {
            this.startSolver(new BaseSolver(this));
        } else if (src === this.solveLinesButton) {
            this.startSolver(new RowBruteSolver(this));
        } else if (src === this.solveBacktrackButton)
            this.startSolver(new BacktrackSolver(this));
        else if (src === this.solveForwardButton)
            this.startSolver(new ForwardSolver(this));
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
        if (this.solver)
            valid = false;
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
        this.solver = null;
        for (let i = 1; i < this.queens.length; ++i) {
            this.queens[i].setVisible(false);
        }
        // for testing comment out next line and uncomment following two
        this.queens[0].changePosition(Math.floor(Math.random()*8),Math.floor(Math.random()*8));
//        this.queens[0].changePosition(Math.floor(this.testValue%8),Math.floor(this.testValue/8));
//        this.testValue = (this.testValue+1) & 63;
        this.queens[0].setLocked(true);
        this.queens[0].setVisible(true);
        this.gameWon.setVisible(false);

    }

    startSolver(solver) {
        this.solver = solver;
        solver.reset();
        setTimeout(this.nextSolverStep.bind(this), 10);
    }

    clearBoardHighlights() {
        for (let i = 0; i < 64; ++i)
            this.boardHighlights[i].setVisible(false);
    }

    isBoardSolved() {
        this.clearBoardHighlights();
        let solved = true;
        for (let q = 1; q < 8; ++q) {
            let queen = this.queens[q];
            if (queen._visible) {
                for (let i = 0; i < q; ++i)
                    if (this.queens[i].isCoordinateBlocked(queen.x, queen.y)) {
                        solved = false;
                        let tid = queen.x + queen.y * 8;
                        this.boardHighlights[tid].setBackgroundColor("#800");
                        this.boardHighlights[tid].setVisible(true);
                        tid = this.queens[i].x + this.queens[i].y * 8;
                        this.boardHighlights[tid].setBackgroundColor("#800");
                        this.boardHighlights[tid].setVisible(true);
                    }
            } else
                solved = false;
        }
        return solved;
    }

    nextSolverStep() {
        if (this.solver == null)
            return;
        this.solver.placeStepOnBoard();
        if ( ! this.isBoardSolved()) {
            this.solver.nextMove();
            setTimeout(this.nextSolverStep.bind(this), 100);
        }
        draw();
    }
}