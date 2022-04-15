let sttBounds = new SLLRectangle(0,0,640,480);
let sttMain = new STTMain(sttBounds);

describe("STTMain", () =>{

    it("starts on the Loading Screen", ()=>{
        let m = new STTMain(sttBounds);
        expect(m.currentScreen).toBe(m.screens[STTConsts.LOANDING_SCREEM]);
    });

    it("can switch to title screen", ()=>{
        sttMain.swapScreen(STTConsts.TITLE_SCREEN);
        expect(sttMain.currentScreen).toBe(sttMain.screens[STTConsts.TITLE_SCREEN]);
    });
})

function draw(){}