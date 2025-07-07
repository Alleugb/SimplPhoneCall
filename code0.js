gdjs.startSceneCode = {};
gdjs.startSceneCode.localVariables = [];
gdjs.startSceneCode.GDBackground01Objects1= [];
gdjs.startSceneCode.GDBackground01Objects2= [];
gdjs.startSceneCode.GDButtonGoObjects1= [];
gdjs.startSceneCode.GDButtonGoObjects2= [];
gdjs.startSceneCode.GDfullScreenToggelObjects1= [];
gdjs.startSceneCode.GDfullScreenToggelObjects2= [];
gdjs.startSceneCode.GDNewButtonObjects1= [];
gdjs.startSceneCode.GDNewButtonObjects2= [];
gdjs.startSceneCode.GDpopUpFullScreenObjects1= [];
gdjs.startSceneCode.GDpopUpFullScreenObjects2= [];


gdjs.startSceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Background01"), gdjs.startSceneCode.GDBackground01Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewButton"), gdjs.startSceneCode.GDNewButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("fullScreenToggel"), gdjs.startSceneCode.GDfullScreenToggelObjects1);
gdjs.copyArray(runtimeScene.getObjects("popUpFullScreen"), gdjs.startSceneCode.GDpopUpFullScreenObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "popup_delay");
}{for(var i = 0, len = gdjs.startSceneCode.GDpopUpFullScreenObjects1.length ;i < len;++i) {
    gdjs.startSceneCode.GDpopUpFullScreenObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.startSceneCode.GDNewButtonObjects1.length ;i < len;++i) {
    gdjs.startSceneCode.GDNewButtonObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.startSceneCode.GDfullScreenToggelObjects1.length ;i < len;++i) {
    gdjs.startSceneCode.GDfullScreenToggelObjects1[i].hide();
}
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.startSceneCode.GDBackground01Objects1.length !== 0 ? gdjs.startSceneCode.GDBackground01Objects1[0] : null), true, "", 0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "popup_delay") >= 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 0);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewButton"), gdjs.startSceneCode.GDNewButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("popUpFullScreen"), gdjs.startSceneCode.GDpopUpFullScreenObjects1);
{for(var i = 0, len = gdjs.startSceneCode.GDpopUpFullScreenObjects1.length ;i < len;++i) {
    gdjs.startSceneCode.GDpopUpFullScreenObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.startSceneCode.GDNewButtonObjects1.length ;i < len;++i) {
    gdjs.startSceneCode.GDNewButtonObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.startSceneCode.GDpopUpFullScreenObjects1.length ;i < len;++i) {
    gdjs.startSceneCode.GDpopUpFullScreenObjects1[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.startSceneCode.GDNewButtonObjects1.length ;i < len;++i) {
    gdjs.startSceneCode.GDNewButtonObjects1[i].setPosition((( gdjs.startSceneCode.GDpopUpFullScreenObjects1.length === 0 ) ? 0 :gdjs.startSceneCode.GDpopUpFullScreenObjects1[0].getCenterXInScene()) - 45,(( gdjs.startSceneCode.GDpopUpFullScreenObjects1.length === 0 ) ? 0 :gdjs.startSceneCode.GDpopUpFullScreenObjects1[0].getCenterYInScene()) + 15);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewButton"), gdjs.startSceneCode.GDNewButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.startSceneCode.GDNewButtonObjects1.length;i<l;++i) {
    if ( gdjs.startSceneCode.GDNewButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.startSceneCode.GDNewButtonObjects1[k] = gdjs.startSceneCode.GDNewButtonObjects1[i];
        ++k;
    }
}
gdjs.startSceneCode.GDNewButtonObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.startSceneCode.GDNewButtonObjects1 */
gdjs.copyArray(runtimeScene.getObjects("fullScreenToggel"), gdjs.startSceneCode.GDfullScreenToggelObjects1);
gdjs.copyArray(runtimeScene.getObjects("popUpFullScreen"), gdjs.startSceneCode.GDpopUpFullScreenObjects1);
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}{for(var i = 0, len = gdjs.startSceneCode.GDpopUpFullScreenObjects1.length ;i < len;++i) {
    gdjs.startSceneCode.GDpopUpFullScreenObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.startSceneCode.GDNewButtonObjects1.length ;i < len;++i) {
    gdjs.startSceneCode.GDNewButtonObjects1[i].hide();
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "popup_delay");
}{for(var i = 0, len = gdjs.startSceneCode.GDfullScreenToggelObjects1.length ;i < len;++i) {
    gdjs.startSceneCode.GDfullScreenToggelObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("fullScreenToggel"), gdjs.startSceneCode.GDfullScreenToggelObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.startSceneCode.GDfullScreenToggelObjects1.length;i<l;++i) {
    if ( gdjs.startSceneCode.GDfullScreenToggelObjects1[i].HasJustBeenChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.startSceneCode.GDfullScreenToggelObjects1[k] = gdjs.startSceneCode.GDfullScreenToggelObjects1[i];
        ++k;
    }
}
gdjs.startSceneCode.GDfullScreenToggelObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("fullScreenToggel"), gdjs.startSceneCode.GDfullScreenToggelObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.startSceneCode.GDfullScreenToggelObjects1.length;i<l;++i) {
    if ( gdjs.startSceneCode.GDfullScreenToggelObjects1[i].HasJustBeenUnchecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.startSceneCode.GDfullScreenToggelObjects1[k] = gdjs.startSceneCode.GDfullScreenToggelObjects1[i];
        ++k;
    }
}
gdjs.startSceneCode.GDfullScreenToggelObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, false, true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{



}


};

gdjs.startSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.startSceneCode.GDBackground01Objects1.length = 0;
gdjs.startSceneCode.GDBackground01Objects2.length = 0;
gdjs.startSceneCode.GDButtonGoObjects1.length = 0;
gdjs.startSceneCode.GDButtonGoObjects2.length = 0;
gdjs.startSceneCode.GDfullScreenToggelObjects1.length = 0;
gdjs.startSceneCode.GDfullScreenToggelObjects2.length = 0;
gdjs.startSceneCode.GDNewButtonObjects1.length = 0;
gdjs.startSceneCode.GDNewButtonObjects2.length = 0;
gdjs.startSceneCode.GDpopUpFullScreenObjects1.length = 0;
gdjs.startSceneCode.GDpopUpFullScreenObjects2.length = 0;

gdjs.startSceneCode.eventsList0(runtimeScene);
gdjs.startSceneCode.GDBackground01Objects1.length = 0;
gdjs.startSceneCode.GDBackground01Objects2.length = 0;
gdjs.startSceneCode.GDButtonGoObjects1.length = 0;
gdjs.startSceneCode.GDButtonGoObjects2.length = 0;
gdjs.startSceneCode.GDfullScreenToggelObjects1.length = 0;
gdjs.startSceneCode.GDfullScreenToggelObjects2.length = 0;
gdjs.startSceneCode.GDNewButtonObjects1.length = 0;
gdjs.startSceneCode.GDNewButtonObjects2.length = 0;
gdjs.startSceneCode.GDpopUpFullScreenObjects1.length = 0;
gdjs.startSceneCode.GDpopUpFullScreenObjects2.length = 0;


return;

}

gdjs['startSceneCode'] = gdjs.startSceneCode;
