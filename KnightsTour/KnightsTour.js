KT = {
    "stepsPerFrame" : 1000,
    "boardOffsetX" : 120,
    "boardOffsetY" : 40,
    "tileSize" : 50,
    "tileRect" : new SLLRectangle(0,0,50,50),
    "canvasRect" : new SLLRectangle(0,0,640,480),
    "blackKnightClip" : new SLLRectangle(0,0,25,41),
    "blackKnightOffset" : new SLLPoint(12, 4),
    "whiteKnightClip" : new SLLRectangle(0,0,21,35),
    "whiteKnightOffset" : new SLLPoint(14, 7),
    "textSize" : 20,
    "NO_MOVE" : -1,
    "debuggingSolver" : false,
    "knightTileOffsets": [-15,-6,10,17,15,6,-10,-17],
    "hamiltonian": [10,11, 8,18,19,20,12,22,
                    25, 3, 4, 5, 2, 7,31,21,
                     1, 0,28,29,14, 6,39,13,
                     9,40,43,42,34,35,15,46,
                    17,16,44,45,26,47,23,54,
                    57,24,36,37,27,30,63,62,
                    33,32,56,61,58,59,60,38,
                    41,51,48,49,50,55,52,53]
}
KT.backdrop = new Image();
KT.backdrop.src = "checkerboard.jpg";
KT.blackKnight = new Image();
KT.blackKnight.src = "blkKnight.png";
KT.whiteKnight = new Image();
KT.whiteKnight.src = "whtknight.png";


// =====================================================

class Knight extends SLLLayer {
    constructor(game, tileID) {
        super(tileID, KT.tileSize, KT.tileSize);
        this.game = game;
        this.setBackgroundColor("rgba(0,0,128,0)");
        this.moveTo((tileID&7)*KT.tileSize+KT.boardOffsetX,
            Math.floor(tileID/8)*KT.tileSize+KT.boardOffsetY);

        this.blackKnight = new SLLImageLayer("blk", KT.blackKnight, KT.blackKnightClip);
        this.blackKnight.moveTo(KT.blackKnightOffset.x, KT.blackKnightOffset.y);
        this.addChild(this.blackKnight);
        this.blackKnight.setVisible(false);

        this.whiteKnight = new SLLImageLayer("blk", KT.whiteKnight, KT.whiteKnightClip);
        this.whiteKnight.moveTo(KT.whiteKnightOffset.x, KT.whiteKnightOffset.y);
        this.addChild(this.whiteKnight);
        this.whiteKnight.setVisible(false);

        this.moveNumber = 0;
        this.parentTile = -1;
        this.numberTxt = new SLLTextLayer("txt",
            new SLLRectangle(0,KT.tileSize-KT.textSize,KT.tileSize,KT.textSize),
            "");
        this.numberTxt.setColor("#00F", "#404")
        this.numberTxt.setFont(KT.textSize,"sans-serif", true, false, true, false);
        this.numberTxt.setAlignment("center");
        this.addChild(this.numberTxt);

        this.mousePoint = new SLLPoint();
        this.mouseDownInTile = false;
    }

    checkIfAllowedMove(knight1, knight2) {
        let knightXAdjust = Math.abs( (knight1 % 8) - (knight2 % 8) );
        let knightYAdjust = Math.abs( Math.floor(knight1 / 8) - Math.floor(knight2 / 8) );

        return (knightXAdjust+knightYAdjust) === 3;
    }

    isCoordinateInTile(x,y) {
        this.mousePoint.x = x;
        this.mousePoint.y = y;
        let p = this.convertRealPointToLogicalPoint(this.mousePoint);
        return KT.tileRect.containsPoint(p);
    }

    isTileAPotentialMove() {
        if (this.moveNumber >=0)
            return false;
        let knight = this.game.getLastKnightTile();
        for (let cntr = 0; cntr < KT.knightTileOffsets.length; ++cntr) {
            if ((knight + KT.knightTileOffsets[cntr]) === this.id) {
                return this.checkIfAllowedMove(knight, this.id);
            }
        }
        return false;
    }

    isValidMove(knight) {
        if (this.moveNumber >= 0)
            return false;
        return this.checkIfAllowedMove(knight, this.id);
    }

    mouseDown(x, y) {
        this.mouseDownInTile = this.isCoordinateInTile(x,y);
        return false;
    }

    mouseMove(x, y) {
        let dirty = super.mouseMove(x, y);
        if (this.isCoordinateInTile(x,y)) {
            if (this.isTileAPotentialMove())
                this.setBackgroundColor("rgba(0,128,0,.5");
            else
                this.setBackgroundColor("rgba(128,0,0,.5");
            dirty = true;
        }
        else
            this.setBackgroundColor("rgba(0,0,0,0");

        return dirty;
    }

    mouseUp(x, y) {
        if ((this.mouseDownInTile) && (this.isCoordinateInTile(x,y))) {
            if (this.isTileAPotentialMove()) {
                this.game.addKnight(this.id);
                this.setBackgroundColor("rgba(128,0,0,.5");
                this.mouseDownInTile = false;
                return true;
            }
        }
        return false;
    }

    render(ctx, bounds) {
        let n = this.moveNumber;
        if (n < 0) {
            this.numberTxt.setText("");
        } else {
            this.numberTxt.setText("" + n);
        }
        this.blackKnight.setVisible(n === 0);
        this.whiteKnight.setVisible(n > 0);
        return super.render(ctx, bounds);
    }

    setMoveNumber(n, parentTile) {
        this.moveNumber = n;
        this.parentTile = parentTile;
    }
}

// =====================================================

class KTSolver {
    constructor(game) {
        this.game = game;
    }

    reset() {
        for (let i = 0; i < 64; ++i) {
            this.game.tiles[i].step = 0;
        }
    }

    nextMove() {
        let madeMove = false;
        let curTile = this.game.lastKnightTile;
        let step = this.game.tiles[curTile].step;
        if (step >= KT.knightTileOffsets.length) {
            step = 0;
            this.game.undoMove();
            madeMove = true;
        } else {
            let target = curTile + KT.knightTileOffsets[step];
            ++step;
            if ((target >= 0) && (target < 64)) {
                if (this.game.tiles[target].isTileAPotentialMove()) {
                    this.game.addKnight(target);
                    madeMove = true;
                }
            }
        }
        this.game.tiles[curTile].step = step;
        if ( ! madeMove)
            return this.nextMove();
    }
}

// =====================================================

class KTForwardSolver extends KTSolver {
    constructor(game) {
        super(game);
    }

    nextMove() {
        if (this.game.isGameStillWinnable())
            return super.nextMove();
        console.log("Unsolvable so early backtrack");
        this.game.tiles[this.game.lastKnightTile].step = 0;
        this.game.undoMove();
    }

}

// =====================================================

class KTHeuristicSolver extends KTSolver {
    constructor(game) {
        super(game);
    }

    reset() {
        for (let i = 0; i < 64; ++i) {
            this.game.tiles[i].step = 0;
            this.game.tiles[i].tiebreaker = false;
        }
    }

    countTargetMoves(target, source) {
        if ((target < 0) || (target >= 64))
            return -1;  // NOTE invalid is -1 not zero as last move will be 0 moves!!!
        if ( ! this.game.tiles[target].checkIfAllowedMove(target, source) )
            return -1;
        if (this.game.tiles[target].moveNumber !== KT.NO_MOVE)
            return -1;
        let moveCount = 0;
        for (let t = 0; t < KT.knightTileOffsets.length; ++t) {
            let knight = target + KT.knightTileOffsets[t];
            if ((knight === source) || (knight < 0) || (knight >= 64))
                continue;

            let knightXAdjust = Math.abs( (knight % 8) - (target % 8) );
            let knightYAdjust = Math.abs( Math.floor(knight / 8) - Math.floor(target / 8) );

            if ( ((knightXAdjust+knightYAdjust) === 3) &&
                (this.game.tiles[knight].moveNumber === KT.NO_MOVE) )
                ++moveCount;
        }
        return moveCount
    }

    fastBacktrack() {
        let curTileIndex = this.game.lastKnightTile;
        if (curTileIndex === this.game.firstKnightTile) return;
        let curTile = this.game.tiles[curTileIndex];
        this.game.undoMove();
        curTile.step = 0;
        curTile.tiebreaker = false;
        if ( ! this.game.tiles[this.game.lastKnightTile].tiebreaker)
            this.fastBacktrack();
    }

    /** Warnsdorff's heuristic for knight's tour moves the knight to  the tile with the fewest onward moves. */
    nextMove() {
        let curTile = this.game.lastKnightTile;
        let step = this.game.tiles[curTile].step;
        let tiebreaker = this.game.tiles[curTile].tiebreaker;
        if (step === 255) {
//            this.game.undoMove();
//            step = 0;
            return this.fastBacktrack();
        } else {
            let mask = 1;
            let index = 0;
            let lowest = -1;
            let lowestCount = 9;
            let lowestMask = 0;
            while (mask < 256) {
                if ((step & mask) === 0) {
                    let target = curTile + KT.knightTileOffsets[index];
                    let targetMoves = this.countTargetMoves(target, curTile);
//                    console.log(`target ${target} has ${targetMoves}`);
                    if (targetMoves < 0)
                        step |= mask;
                    else if (targetMoves < lowestCount) {
                        lowest = target;
                        lowestCount = targetMoves;
                        lowestMask = mask;
                    } else if (targetMoves === lowestCount) {
                        tiebreaker = true;
                    }
                }
                mask <<= 1;
                ++index;
            }
            if (lowestMask > 0) {
                step |= lowestMask;
                this.game.addKnight(lowest);
                if ( ! this.game.isGameStillWinnable() ) {
                    this.game.undoMove();
//                    console.log("Early backtracking!");
                }
            } else
                console.log("No move found???")
        }
        this.game.tiles[curTile].step = step;
        this.game.tiles[curTile].tiebreaker = tiebreaker;
    }

}

// =====================================================

class KTHamiltonianSolver extends KTSolver {
    constructor(game) {
        super(game);
    }

    reset() {
        this.game.restartGame();
    }

    nextMove() {
        let curTile = this.game.lastKnightTile;
        let target = KT.hamiltonian[curTile];
        this.game.addKnight(target);
    }

}

// =====================================================

class KTGame extends SLLLayer {
    constructor() {
        super("game", 640, 480);
        this.backdrop = new SLLImageLayer("back", KT.backdrop, KT.canvasRect);
        this.addChild(this.backdrop);
        this.tiles = [];
        for (let tid = 0; tid < 64; ++tid) {
            this.tiles.push(new Knight(this, tid));
            this.addChild(this.tiles[tid]);
        }
        this.lastKnightTile = -1;
        this.debugKnight = 0;
        this.startGame();

        this.fastSolve = false;
        this.solveCount = 1;
        this.showingPath = true;

        // Play menu

        this.playLabel = new SLLTextLayer("playLabel",
            new SLLRectangle(10,120,100,30),
            "Play Game");
        this.playLabel.setFont(20,"sans-serif", false, true, true, false);
        this.playLabel.setAlignment("center");
        this.addChild(this.playLabel);

        this.startButton = new SLLTextButton("start",
            new SLLRectangle(5,160,100,30),
            "New Game", 3);
        this.startButton.setClickHandler(this);
        this.addChild(this.startButton);

        this.restartButton = new SLLTextButton("restart",
            new SLLRectangle(5,220,100,30),
            "Restart", 3);
        this.restartButton.setClickHandler(this);
        this.addChild(this.restartButton);

        this.undoButton = new SLLTextButton("undo",
            new SLLRectangle(5,280,100,30),
            "Undo", 3);
        this.undoButton.setClickHandler(this);
        this.addChild(this.undoButton);

        this.pathButton = new SLLTextButton("path",
            new SLLRectangle(5,360,100,30),
            "Hide Path", 3);
        this.pathButton.setClickHandler(this);
        this.addChild(this.pathButton);

        // Solve Menu

        this.solverLabel = new SLLTextLayer("solveLabel",
            new SLLRectangle(530,120,100,30),
            "Solvers");
        this.solverLabel.setFont(20,"sans-serif", false, true, true, false);
        this.solverLabel.setAlignment("center");
        this.addChild(this.solverLabel);

        this.solveBacktrackButton= new SLLTextButton("Backtrack",
            new SLLRectangle(530,160,100,30),
            "Backtrack", 3);
        this.solveBacktrackButton.setClickHandler(this);
        this.addChild(this.solveBacktrackButton);

        this.solveForwardButton= new SLLTextButton("Forward",
            new SLLRectangle(530,200,100,30),
            "Forward", 3);
        this.solveForwardButton.setClickHandler(this);
        this.addChild(this.solveForwardButton);

        this.solveHeuristicButton = new SLLTextButton("Heuristic",
            new SLLRectangle(530,240,100,30),
            "Heuristic", 3);
        this.solveHeuristicButton.setClickHandler(this);
        this.addChild(this.solveHeuristicButton);

        this.solveHamiltonianButton = new SLLTextButton("Hamiltonian",
            new SLLRectangle(530,280,100,30),
            "Hamiltonian", 3);
        this.solveHamiltonianButton.setClickHandler(this);
        this.addChild(this.solveHamiltonianButton);

        this.countLabel = new SLLTextLayer("countLabel",
            new SLLRectangle(530,320,100,30),
            "Count:");
        this.countLabel.setFont(16,"sans-serif", false, true, true, false);
        this.countLabel.setAlignment("center");
        this.addChild(this.countLabel);

        this.moveCountText = new SLLTextLayer("count",
            new SLLRectangle(530,350,100,30),
            "0");
        this.moveCountText.setFont(16,"sans-serif", false, true, true, false);
        this.moveCountText.setAlignment("center");
        this.addChild(this.moveCountText);

        this.solveSpeedButton = new SLLTextButton("speed",
            new SLLRectangle(530,380,100,30),
            "Fast", 3);
        this.solveSpeedButton.setClickHandler(this);
        this.addChild(this.solveSpeedButton);


        //  Title and copyright

        this.title = new SLLTextLayer("title",
            new SLLRectangle(0,5,640,50),
            "Knight's Tour");
        this.title.setFont(30,"sans-serif", true, true, true, true);
        this.title.setAlignment("center");
        this.addChild(this.title);

        this.copyright = new SLLTextLayer("copyright",
            new SLLRectangle(0,450,640,30),
            "Copyright © 2021 Billy D. Spelchan. Some Rights Reserved.");
        this.copyright.setFont(16,"sans-serif", false, true, true, false);
        this.copyright.setAlignment("center");
        this.addChild(this.copyright);


        // Win message

        this.gameWon = new SLLTextLayer("won",
            new SLLRectangle(0,200,640,80),
            "Well done!");
        this.gameWon.setFont(70,"sans-serif", true, true, true, true);
        this.gameWon.setAlignment("center");
        this.gameWon.setVisible(true);
        this.gameWon.setColor("#80A", "#305")
        this.gameWon.setVisible(false);
        this.addChild(this.gameWon);

        this.warning = new SLLTextLayer("warning",
            new SLLRectangle(0,20,640,80),
            "Warning...Game may not be winnable now!");
        this.warning.setFont(32,"sans-serif", true, true, true, true);
        this.warning.setAlignment("center");
        this.warning.setVisible(true);
        this.warning.setColor("#F44", "#305")
        this.warning.setVisible(false);
        this.addChild(this.warning);

    }

    addKnight(tid) {
        let parent = this.lastKnightTile;
        this.lastKnightTile = tid;
        ++this.knightCount;
        this.tiles[tid].setMoveNumber(this.knightCount, parent);

        this.warning.setVisible( ! this.isGameStillWinnable());
        this.gameWon.setVisible(this.knightCount === 63);
    }

    buttonClicked(src) {
        let curSolver = this.solver;
        this.solver = null;
        this.gameWon.setVisible(false);

        if (src === this.startButton) {
            this.startGame();
        } else if (src === this.restartButton) {
            this.restartGame();
        } else if (src === this.undoButton) {
            this.undoMove();
        } else if (src === this.pathButton) {
            this.showingPath = ! this.showingPath;
            if (this.showingPath)
                this.pathButton.setText("Hide path");
            else
                this.pathButton.setText("Show path");
            this.solver = curSolver;
        } else if (src === this.solveBacktrackButton) {
            this.startSolver(new KTSolver(this));
        } else if (src === this.solveForwardButton) {
            this.startSolver(new KTForwardSolver(this));
        } else if (src === this.solveHeuristicButton) {
            this.startSolver(new KTHeuristicSolver(this));
        } else if (src === this.solveHamiltonianButton) {
            this.startSolver(new KTHamiltonianSolver(this));
        } else if (src === this.solveSpeedButton) {
            this.fastSolve = ! this.fastSolve;
            if (this.fastSolve) {
                this.solveCount = KT.stepsPerFrame;
                this.solveSpeedButton.setText("Normal");
                this.solver = curSolver;
            } else {
                this.solveCount = 1;
                this.solveSpeedButton.setText("Fast");
                this.solver = curSolver;
            }
        }
    }

    getLastKnightTile() {
        return this.lastKnightTile;
    }

    isGameStillWinnable() {
        if (this.knightCount > 62) return true;

        for (let t = 0; t < 64; ++t) {
            if (this.tiles[t].moveNumber === KT.NO_MOVE) {
                let hasValidMove = false;
                for (let k = 0; k < KT.knightTileOffsets.length; ++k) {
                    let target = t + KT.knightTileOffsets[k];
                    if ((target >= 0) && (target < 64)) {
                        if (this.tiles[target].isValidMove(t)) {
                            hasValidMove = true;
                            break;
                        }
                        if (target === this.lastKnightTile) {
                            hasValidMove = true;
                            break;
                        }
                    }
                }
                if ( ! hasValidMove) {
                    //console.log(`tile ${t} not valid`)
                    return false;
                }
            }
        }

        return true;
    }

    nextSolverStep() {
        if (this.solver == null)
            return;
        for (let i = 0; i < this.solveCount; ++i) {
            if (this.knightCount < 63) {
                this.solver.nextMove();
                ++this.solverMoves;

                //setTimeout(this.nextSolverStep.bind(this), 25);
            }
        }
        this.moveCountText.setText("" + this.solverMoves);
        if (this.knightCount < 63)
            setTimeout(this.nextSolverStep.bind(this), 10);//25);
        draw();
    }

    render(ctx, bounds) {
        super.render(ctx, bounds);
        if (this.showingPath) {
            ctx.save();
            ctx.lineWidth = 3;
            ctx.strokeStyle = "#B00";
            ctx.beginPath();
            for (let t = 0; t < 64; ++t) {
                ctx.moveTo(KT.boardOffsetX + (t % 8) * KT.tileSize + KT.tileSize / 2,
                    KT.boardOffsetY + Math.floor(t / 8) * KT.tileSize + KT.tileSize / 2);
                let target = stage.tiles[t].parentTile;
                if (target >= 0)
                    ctx.lineTo(KT.boardOffsetX + (target % 8) * KT.tileSize + KT.tileSize / 2,
                        KT.boardOffsetY + Math.floor(target / 8) * KT.tileSize + KT.tileSize / 2);
            }
            ctx.stroke();
            this.gameWon.render(ctx, bounds);
            ctx.restore();

        }
    }

    restartGame() {
        while (this.knightCount > 0)
            this.undoMove();
    }

    startGame() {
        for (let tid = 0; tid < 64; ++tid) {
            this.tiles[tid].setMoveNumber(KT.NO_MOVE, -1);
        }
        this.knightCount = 0;
        if (KT.debuggingSolver === false) {
            this.lastKnightTile = Math.floor(Math.random()*64);
        } else {
            this.lastKnightTile = this.debugKnight;
            this.debugKnight = (this.debugKnight + 1) & 63;
        }
        this.tiles[this.lastKnightTile].setMoveNumber(0, -1);
        this.firstKnightTile = this.lastKnightTile;
    }

    startSolver(solver) {
        this.solver = solver;
        solver.reset();
        setTimeout(this.nextSolverStep.bind(this), 10);
        this.solverMoves = 0;
    }

    undoMove() {
        if (this.knightCount <= 0)
            return;
        let previousTile = -1;
        for (let i = 0; i < KT.knightTileOffsets.length; ++i) {
            let target = this.lastKnightTile + KT.knightTileOffsets[i];
            if ((target>=0) && (target<64)) {
                if (this.tiles[target].moveNumber === (this.knightCount-1) )
                    previousTile = target;
            }
        }
        this.tiles[this.lastKnightTile].setMoveNumber(-1, -1);
        --this.knightCount;
        this.lastKnightTile = previousTile;
    }
}
