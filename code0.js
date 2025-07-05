gdjs.startSceneCode = {};
gdjs.startSceneCode.localVariables = [];
gdjs.startSceneCode.GDBackground01Objects1= [];
gdjs.startSceneCode.GDBackground01Objects2= [];
gdjs.startSceneCode.GDButtonGoObjects1= [];
gdjs.startSceneCode.GDButtonGoObjects2= [];


gdjs.startSceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
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

gdjs.startSceneCode.eventsList0(runtimeScene);
gdjs.startSceneCode.GDBackground01Objects1.length = 0;
gdjs.startSceneCode.GDBackground01Objects2.length = 0;
gdjs.startSceneCode.GDButtonGoObjects1.length = 0;
gdjs.startSceneCode.GDButtonGoObjects2.length = 0;


return;

}

gdjs['startSceneCode'] = gdjs.startSceneCode;
