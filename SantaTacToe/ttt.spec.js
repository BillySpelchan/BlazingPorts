describe("A Tic Tac Toe Board", ()=>{
   it("Can be initialized with a specific board", ()=>{
       let b = new TTTBoard("XOXOXO...");
       expect(b.getTile(0,0)).toBe(TTTConsts.X);
       expect(b.getTile(0,1)).toBe(TTTConsts.O);
       expect(b.getTile(0,2)).toBe(TTTConsts.EMPTY);
   });

   it("can have tiles placed on the board", ()=>{
       let b = new TTTBoard();
       b.setTile(0,0, TTTConsts.O);
       expect(b.getTile(0,0)).toBe(TTTConsts.O);
   });

   it("can check if there is a horizontal win", ()=>{
       let b = new TTTBoard("xxxoooxox");
       expect(b.checkLine(0,0, TTTConsts.HORIZONTAL)).toBe(true);
       expect(b.checkLine(0,1, TTTConsts.HORIZONTAL)).toBe(true);
       expect(b.checkLine(0,2, TTTConsts.HORIZONTAL)).toBe(false);
   });

    it("can check if there is a vertical win", ()=>{
        let b = new TTTBoard("xoxxooxo.");
        expect(b.checkLine(0,0, TTTConsts.VERTICAL)).toBe(true);
        expect(b.checkLine(1,0, TTTConsts.VERTICAL)).toBe(true);
        expect(b.checkLine(2,0, TTTConsts.VERTICAL)).toBe(false);
    });

    it("can check if there is a diagonal win", ()=>{
        let b = new TTTBoard("xoxoxoxox");
        expect(b.checkLine(0,0, TTTConsts.RIGHT_DIAGONAL)).toBe(true);
        expect(b.checkLine(2,0, TTTConsts.LEFT_DIAGONAL)).toBe(true);
    });

    it("can determine if player X has won", ()=> {
        let b = new TTTBoard("o.oxxxo.o");
        let winState = b.getGameState();
        expect(winState.state).toBe(TTTConsts.X_WON);
        expect(winState.winDir).toBe(TTTConsts.HORIZONTAL);

        b.setFromTemplate("oxo.x.oxo")
        winState = b.getGameState();
        expect(winState.state).toBe(TTTConsts.X_WON);
        expect(winState.winDir).toBe(TTTConsts.VERTICAL);

        b.setFromTemplate("xoo.x.oxx")
        winState = b.getGameState();
        expect(winState.state).toBe(TTTConsts.X_WON);
        expect(winState.winDir).toBe(TTTConsts.RIGHT_DIAGONAL);
    })


    it("can determine if player O has won", ()=> {
        let b = new TTTBoard("ooox.xx.x");
        let winState = b.getGameState();
        expect(winState.state).toBe(TTTConsts.O_WON);
        expect(winState.winDir).toBe(TTTConsts.HORIZONTAL);

        b.setFromTemplate("oxooxxo..")
        winState = b.getGameState();
        expect(winState.state).toBe(TTTConsts.O_WON);
        expect(winState.winDir).toBe(TTTConsts.VERTICAL);

        b.setFromTemplate("xoo.oooxx")
        winState = b.getGameState();
        expect(winState.state).toBe(TTTConsts.O_WON);
        expect(winState.winDir).toBe(TTTConsts.LEFT_DIAGONAL);
    })

    it("can determine if the game ended in a tie", ()=>{
        let b = new TTTBoard("xoxooxxxo");
        let winState = b.getGameState();
        expect(winState.state).toBe(TTTConsts.TIE);
    })

    it("can generate a token representing current board", ()=>{
        let b = new TTTBoard("xoxooxxxo");
        expect(b.getTemplate().toLowerCase()).toBe("xoxooxxxo");
    })

    it ("can clone an existing board", ()=>{
        let sourceBoard = new TTTBoard("xoxoxoxox");
        let destBoard = new TTTBoard(".........");
        destBoard.clone(sourceBoard);
        expect(destBoard.getTemplate().toLowerCase()).toBe("xoxoxoxox");
    })
});

function testAIMakesValidMoves(ai, attempts = 1000) {
    let b = new TTTBoard();
    let count = 0;
    let player = TTTConsts.X;
    for (let i = 0; i < attempts; ++i) {
        if (b.getGameState().state !== TTTConsts.PLAYING) {
            b.setFromTemplate(".........");
        }
        let move = ai.getNextMove(b);
        if (b.getTileByIndex(move) === TTTConsts.EMPTY) {
            ++count;
            b.setTileByIndex(move, player);
            player = (player===TTTConsts.X) ? TTTConsts.X : TTTConsts.O;
        }
    }
    return count;
}

describe("PlayerAI", ()=>{
    it("can find a free tile on board", ()=> {
        let b = new TTTBoard();
        let ai = new AIPlayer();
        for (let i = 0; i < 9; ++i) {
            expect(ai.findNextFreeIndex(b)).toBe(i);
            b.setTileByIndex(i, TTTConsts.X);
        }
    });

    it("can make a valid move", ()=>{
        let ai = new AIPlayer();
        expect(testAIMakesValidMoves(ai, 1000)).toBe(1000);
    })
})

describe("MontyAI", ()=> {
    it("can play a mock game", ()=>{
        let b = new TTTBoard();
        let ai = new MontyPlayer();
        expect(ai.playMockGame(b,TTTConsts.X).state).not.toBe(TTTConsts.PLAYING);
        b.setFromTemplate("....x....");
        expect(ai.playMockGame(b,TTTConsts.X).state).not.toBe(TTTConsts.PLAYING);
        b.setFromTemplate("o...x....");
        expect(ai.playMockGame(b,TTTConsts.X).state).not.toBe(TTTConsts.PLAYING);
    });

    it("can determine if a final move will result in a particular player winning or a TIE", ()=>{
        let board = new TTTBoard("ooxoxo.x.");
        let ai = new MontyPlayer();
        expect(ai.scoreTile(board, 6, TTTConsts.X)).toBeGreaterThan(0);
        board.setFromTemplate("oxxoxx.o.");
        expect(ai.scoreTile(board, 6, TTTConsts.O)).toBeGreaterThan(0);
        board.setFromTemplate("xoxooxx.o");
        expect(ai.scoreTile(board, 7, TTTConsts.X)).toBe(0);
    });

    it ( "can score occupied tiles with appropriate value", ()=>{
        let b = new TTTBoard("x...o...x");
        let ai = new MontyPlayer();
        let scores = ai.buildScoreBoard(b, TTTConsts.O);
        console.log(scores);
        expect(scores[0]).toBeLessThanOrEqual(-TTTConsts.TRIALS);
    });

    it("can make a valid move", ()=>{
        let ai = new MontyPlayer();
        expect(testAIMakesValidMoves(ai, 1000)).toBe(1000);
    })
})

describe("Recursive AI", ()=>{
    it ("can determine if (last) move is a win, tie or invalid", ()=>{
        let b = new TTTBoard("xxooxoxo.");
        let ai = new RecursivePlayer();
        expect(ai.scoreTile(b, 7, TTTConsts.X)).toBe(TTTConsts.INVALID_MOVE);
        expect(ai.scoreTile(b, 8, TTTConsts.X)).toBe(1);
        b.setFromTemplate("xoxooxx.o");
        expect(ai.scoreTile(b, 7, TTTConsts.X)).toBe(0);
    });

    it ("can recursively score tile", ()=>{
        let b = new TTTBoard("ox.xxoo.x");
        let ai = new RecursivePlayer();
        expect(ai.scoreTile(b, 2, TTTConsts.O)).toBeLessThanOrEqual(-1);
    });

    it("can make a valid move", ()=> {
        let ai = new RecursivePlayer();
        expect(testAIMakesValidMoves(ai, 20)).toBe(20);
    });

})