gdjs.startSceneCode = {};
gdjs.startSceneCode.localVariables = [];
gdjs.startSceneCode.GDBackground01Objects1= [];
gdjs.startSceneCode.GDBackground01Objects2= [];
gdjs.startSceneCode.GDButtonGoObjects1= [];
gdjs.startSceneCode.GDButtonGoObjects2= [];
gdjs.startSceneCode.GDfullScreenObjects1= [];
gdjs.startSceneCode.GDfullScreenObjects2= [];
gdjs.startSceneCode.GDfullScreenToggelObjects1= [];
gdjs.startSceneCode.GDfullScreenToggelObjects2= [];


gdjs.startSceneCode.eventsList0 = function(runtimeScene) {

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
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
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


};

gdjs.startSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.startSceneCode.GDBackground01Objects1.length = 0;
gdjs.startSceneCode.GDBackground01Objects2.length = 0;
gdjs.startSceneCode.GDButtonGoObjects1.length = 0;
gdjs.startSceneCode.GDButtonGoObjects2.length = 0;
gdjs.startSceneCode.GDfullScreenObjects1.length = 0;
gdjs.startSceneCode.GDfullScreenObjects2.length = 0;
gdjs.startSceneCode.GDfullScreenToggelObjects1.length = 0;
gdjs.startSceneCode.GDfullScreenToggelObjects2.length = 0;

gdjs.startSceneCode.eventsList0(runtimeScene);
gdjs.startSceneCode.GDBackground01Objects1.length = 0;
gdjs.startSceneCode.GDBackground01Objects2.length = 0;
gdjs.startSceneCode.GDButtonGoObjects1.length = 0;
gdjs.startSceneCode.GDButtonGoObjects2.length = 0;
gdjs.startSceneCode.GDfullScreenObjects1.length = 0;
gdjs.startSceneCode.GDfullScreenObjects2.length = 0;
gdjs.startSceneCode.GDfullScreenToggelObjects1.length = 0;
gdjs.startSceneCode.GDfullScreenToggelObjects2.length = 0;


return;

}

gdjs['startSceneCode'] = gdjs.startSceneCode;
