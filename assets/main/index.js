System.register("chunks:///_virtual/Background.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,i,s,o,n,a,r,p,d,l,h,c,u,b,g,f;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,s=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){n=e.cclegacy,a=e._decorator,r=e.Node,p=e.Prefab,d=e.input,l=e.Input,h=e.Collider2D,c=e.Contact2DType,u=e.instantiate,b=e.Vec3,g=e.randomRangeInt,f=e.Component}],execute:function(){var P,v,N,x,y,C,B,w,S;n._RF.push({},"ed9deQlWgFJlqjg6Hr6AuFB","Background",void 0);var I=a.ccclass,m=a.property;e("Background",(P=I("Background"),v=m({type:r}),N=m({type:p}),x=m({type:p}),P((B=t((C=function(e){function t(){for(var t,i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];return t=e.call.apply(e,[this].concat(n))||this,s(t,"parentBackground",B,o(t)),t.baseNode=void 0,t.scoreNode=void 0,s(t,"prefabPipa",w,o(t)),s(t,"prefabBase",S,o(t)),t.pipa=[],t.isStarted=!1,t.isCollide=!1,t}i(t,e);var n=t.prototype;return n.start=function(){d.on(l.EventType.TOUCH_START,this.onInputReceived,this),this.node.parent.getChildByName("Bird").getComponent(h).on(c.BEGIN_CONTACT,this.onCollide,this),this.baseNode=u(this.prefabBase),this.baseNode.setParent(this.node.parent),this.scoreNode.active=!1},n.onCollide=function(){this.isCollide=!0},n.onInputReceived=function(e){if(!this.isStarted){this.isStarted=!0;var t=u(this.prefabPipa);t.setParent(this.node.parent),t.setSiblingIndex(this.baseNode.getSiblingIndex()-1),t.setPosition(new b(288,0,0)),this.pipa.push(t),(t=u(this.prefabPipa)).setParent(this.node.parent),t.setSiblingIndex(this.baseNode.getSiblingIndex()-1),t.setPosition(new b(488,0,0)),this.pipa.push(t)}},n.update=function(e){if(this.isStarted){var t=this.node.parent.getPosition();t=new b(0,0,0);var i=this.baseNode.getPosition();if(this.isCollide||(i.x-=144*e),this.baseNode.setPosition(i),i.x<=-288&&t.x<=288&&(i.x+=288,t=new b(0,0,0)),this.baseNode.setPosition(i),!this.isCollide)for(var s=0;s<this.pipa.length;s++){var o=this.pipa[s].getPosition();o.x-=144*e,o.x<=-200&&(o.x+=388,o.y=g(-120,120)),this.pipa[s].setPosition(o)}}else if(this.isStarted||this.isCollide){if(!this.isCollide){this.isStarted=!1;var n=this.node.parent.getPosition();n=new b(0,0,0);var a=this.baseNode.getPosition();this.baseNode.setPosition(a),a.x<=-288&&n.x<=288&&(a.x+=288,n=new b(0,0,0)),this.baseNode.setPosition(a)}}else{var r=this.node.parent.getPosition();r=new b(0,0,0);var p=this.baseNode.getPosition();p.x-=144*e,this.baseNode.setPosition(p),p.x<=-288&&r.x<=288&&(p.x+=288,r=new b(0,0,0)),this.baseNode.setPosition(p)}},t}(f)).prototype,"parentBackground",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),w=t(C.prototype,"prefabPipa",[N],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),S=t(C.prototype,"prefabBase",[x],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y=C))||y));n._RF.pop()}}}));

System.register("chunks:///_virtual/Bird.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var i,e,n,o,s,r,d,u,a;return{setters:[function(t){i=t.inheritsLoose},function(t){e=t.cclegacy,n=t._decorator,o=t.input,s=t.Input,r=t.Collider2D,d=t.Contact2DType,u=t.Animation,a=t.Component}],execute:function(){var h;e._RF.push({},"9db6f/T9DJIDbsY5pioZm+7","Bird",void 0);var p=n.ccclass;n.property,t("Bird",p("Bird")(h=function(t){function e(){for(var i,e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return(i=t.call.apply(t,[this].concat(n))||this).speedTurun=0,i.isStarted=!1,i.isCollide=!1,i.birdAnimation=void 0,i}i(e,t);var n=e.prototype;return n.start=function(){o.on(s.EventType.TOUCH_START,this.onInputReceived,this),this.node.getComponent(r).on(d.BEGIN_CONTACT,this.onCollide,this),this.birdAnimation=this.node.getComponent(u)},n.onCollide=function(){this.isStarted=!1,this.isCollide=!0,this.birdAnimation&&this.birdAnimation.stop()},n.onInputReceived=function(t){this.isStarted?this.isStarted&&(this.speedTurun=300):(this.isStarted=!0,this.speedTurun=300)},n.update=function(t){if(this.isStarted){var i=this.node.getPosition();this.isCollide?i.y-=300*t:(this.speedTurun-=1e3*t,i.y+=this.speedTurun*t),this.node.setPosition(i);var e=this.speedTurun;e>=30?e=30:e<=-30&&(e=-30),this.node.setRotationFromEuler(0,0,e)}},e}(a))||h);e._RF.pop()}}}));

System.register("chunks:///_virtual/debug-view-runtime-control.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,i,n,s,l,r,a,g,h,p,c,C,d,m,u,L;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){s=t.cclegacy,l=t._decorator,r=t.Node,a=t.Color,g=t.Canvas,h=t.UITransform,p=t.instantiate,c=t.Label,C=t.RichText,d=t.Toggle,m=t.Button,u=t.director,L=t.Component}],execute:function(){var f,M,b,v,T,S,x,E,I;s._RF.push({},"b2bd1+njXxJxaFY3ymm06WU","debug-view-runtime-control",void 0);var A=l.ccclass,y=l.property;t("DebugViewRuntimeControl",(f=A("internal.DebugViewRuntimeControl"),M=y(r),b=y(r),v=y(r),f((x=e((S=function(t){function e(){for(var e,o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s))||this,i(e,"compositeModeToggle",x,n(e)),i(e,"singleModeToggle",E,n(e)),i(e,"EnableAllCompositeModeButton",I,n(e)),e._single=0,e.strSingle=["No Single Debug","Vertex Color","Vertex Normal","Vertex Tangent","World Position","Vertex Mirror","Face Side","UV0","UV1","UV Lightmap","Project Depth","Linear Depth","Fragment Normal","Fragment Tangent","Fragment Binormal","Base Color","Diffuse Color","Specular Color","Transparency","Metallic","Roughness","Specular Intensity","IOR","Direct Diffuse","Direct Specular","Direct All","Env Diffuse","Env Specular","Env All","Emissive","Light Map","Shadow","AO","Fresnel","Direct Transmit Diffuse","Direct Transmit Specular","Env Transmit Diffuse","Env Transmit Specular","Transmit All","Direct Internal Specular","Env Internal Specular","Internal All","Fog"],e.strComposite=["Direct Diffuse","Direct Specular","Env Diffuse","Env Specular","Emissive","Light Map","Shadow","AO","Normal Map","Fog","Tone Mapping","Gamma Correction","Fresnel","Transmit Diffuse","Transmit Specular","Internal Specular","TT"],e.strMisc=["CSM Layer Coloration","Lighting With Albedo"],e.compositeModeToggleList=[],e.singleModeToggleList=[],e.miscModeToggleList=[],e.textComponentList=[],e.labelComponentList=[],e.textContentList=[],e.hideButtonLabel=void 0,e._currentColorIndex=0,e.strColor=["<color=#ffffff>","<color=#000000>","<color=#ff0000>","<color=#00ff00>","<color=#0000ff>"],e.color=[a.WHITE,a.BLACK,a.RED,a.GREEN,a.BLUE],e}o(e,t);var s=e.prototype;return s.start=function(){if(this.node.parent.getComponent(g)){var t=this.node.parent.getComponent(h),e=.5*t.width,o=.5*t.height,i=.1*e-e,n=o-.1*o,s=this.node.getChildByName("MiscMode"),l=p(s);l.parent=this.node,l.name="Buttons";var r=p(s);r.parent=this.node,r.name="Titles";for(var u=0;u<2;u++){var L=p(this.EnableAllCompositeModeButton.getChildByName("Label"));L.setPosition(i+(u>0?450:150),n,0),L.setScale(.75,.75,.75),L.parent=r;var f=L.getComponent(c);f.string=u?"----------Composite Mode----------":"----------Single Mode----------",f.color=a.WHITE,f.overflow=0,this.labelComponentList[this.labelComponentList.length]=f}n-=20;for(var M=0,b=0;b<this.strSingle.length;b++,M++){b===this.strSingle.length>>1&&(i+=200,M=0);var v=b?p(this.singleModeToggle):this.singleModeToggle;v.setPosition(i,n-20*M,0),v.setScale(.5,.5,.5),v.parent=this.singleModeToggle.parent;var T=v.getComponentInChildren(C);T.string=this.strSingle[b],this.textComponentList[this.textComponentList.length]=T,this.textContentList[this.textContentList.length]=T.string,v.on(d.EventType.TOGGLE,this.toggleSingleMode,this),this.singleModeToggleList[b]=v}i+=200,this.EnableAllCompositeModeButton.setPosition(i+15,n,0),this.EnableAllCompositeModeButton.setScale(.5,.5,.5),this.EnableAllCompositeModeButton.on(m.EventType.CLICK,this.enableAllCompositeMode,this),this.EnableAllCompositeModeButton.parent=l;var S=this.EnableAllCompositeModeButton.getComponentInChildren(c);this.labelComponentList[this.labelComponentList.length]=S;var x=p(this.EnableAllCompositeModeButton);x.setPosition(i+90,n,0),x.setScale(.5,.5,.5),x.on(m.EventType.CLICK,this.changeTextColor,this),x.parent=l,(S=x.getComponentInChildren(c)).string="TextColor",this.labelComponentList[this.labelComponentList.length]=S;var E=p(this.EnableAllCompositeModeButton);E.setPosition(i+200,n,0),E.setScale(.5,.5,.5),E.on(m.EventType.CLICK,this.hideUI,this),E.parent=this.node.parent,(S=E.getComponentInChildren(c)).string="Hide UI",this.labelComponentList[this.labelComponentList.length]=S,this.hideButtonLabel=S,n-=40;for(var I=0;I<this.strMisc.length;I++){var A=p(this.compositeModeToggle);A.setPosition(i,n-20*I,0),A.setScale(.5,.5,.5),A.parent=s;var y=A.getComponentInChildren(C);y.string=this.strMisc[I],this.textComponentList[this.textComponentList.length]=y,this.textContentList[this.textContentList.length]=y.string,A.getComponent(d).isChecked=!!I,A.on(d.EventType.TOGGLE,I?this.toggleLightingWithAlbedo:this.toggleCSMColoration,this),this.miscModeToggleList[I]=A}n-=150;for(var D=0;D<this.strComposite.length;D++){var B=D?p(this.compositeModeToggle):this.compositeModeToggle;B.setPosition(i,n-20*D,0),B.setScale(.5,.5,.5),B.parent=this.compositeModeToggle.parent;var w=B.getComponentInChildren(C);w.string=this.strComposite[D],this.textComponentList[this.textComponentList.length]=w,this.textContentList[this.textContentList.length]=w.string,B.on(d.EventType.TOGGLE,this.toggleCompositeMode,this),this.compositeModeToggleList[D]=B}}else console.error("debug-view-runtime-control should be child of Canvas")},s.isTextMatched=function(t,e){var o=new String(t),i=o.search(">");return-1===i?t===e:(o=(o=o.substr(i+1)).substr(0,o.search("<")))===e},s.toggleSingleMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strSingle.length;i++)this.isTextMatched(o.string,this.strSingle[i])&&(e.singleMode=i)},s.toggleCompositeMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strComposite.length;i++)this.isTextMatched(o.string,this.strComposite[i])&&e.enableCompositeMode(i,t.isChecked)},s.toggleLightingWithAlbedo=function(t){u.root.debugView.lightingWithAlbedo=t.isChecked},s.toggleCSMColoration=function(t){u.root.debugView.csmLayerColoration=t.isChecked},s.enableAllCompositeMode=function(t){var e=u.root.debugView;e.enableAllCompositeMode(!0);for(var o=0;o<this.compositeModeToggleList.length;o++){this.compositeModeToggleList[o].getComponent(d).isChecked=!0}var i=this.miscModeToggleList[0].getComponent(d);i.isChecked=!1,e.csmLayerColoration=!1,(i=this.miscModeToggleList[1].getComponent(d)).isChecked=!0,e.lightingWithAlbedo=!0},s.hideUI=function(t){var e=this.node.getChildByName("Titles"),o=!e.active;this.singleModeToggleList[0].parent.active=o,this.miscModeToggleList[0].parent.active=o,this.compositeModeToggleList[0].parent.active=o,this.EnableAllCompositeModeButton.parent.active=o,e.active=o,this.hideButtonLabel.string=o?"Hide UI":"Show UI"},s.changeTextColor=function(t){this._currentColorIndex++,this._currentColorIndex>=this.strColor.length&&(this._currentColorIndex=0);for(var e=0;e<this.textComponentList.length;e++)this.textComponentList[e].string=this.strColor[this._currentColorIndex]+this.textContentList[e]+"</color>";for(var o=0;o<this.labelComponentList.length;o++)this.labelComponentList[o].color=this.color[this._currentColorIndex]},s.onLoad=function(){},s.update=function(t){},e}(L)).prototype,"compositeModeToggle",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(S.prototype,"singleModeToggle",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=e(S.prototype,"EnableAllCompositeModeButton",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=S))||T));s._RF.pop()}}}));

System.register("chunks:///_virtual/GameControl.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,i,r,a,s,o,n,d,h,c,l,p,v,u;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,r=e.initializerDefineProperty,a=e.assertThisInitialized},function(e){s=e.cclegacy,o=e._decorator,n=e.Prefab,d=e.input,h=e.Input,c=e.instantiate,l=e.Collider2D,p=e.Contact2DType,v=e.Node,u=e.Component}],execute:function(){var N,m,g,y,C;s._RF.push({},"8e2ceSbIEtOabAkUpJ8bi3W","GameControl",void 0);var b=o.ccclass,f=o.property;e("GameControl",(N=b("GameControl"),m=f(n),N((C=t((y=function(e){function t(){for(var t,i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return t=e.call.apply(e,[this].concat(s))||this,r(t,"basePrefab",C,a(t)),t.baseNode=void 0,t.isStarted=!1,t.restartNode=void 0,t.gameOver=void 0,t.readyNode=void 0,t.bird=void 0,t}i(t,e);var s=t.prototype;return s.start=function(){d.on(h.EventType.TOUCH_START,this.onInputReceived,this),this.basePrefab&&(this.baseNode=c(this.basePrefab),this.baseNode.setParent(this.node.parent)),this.node.parent.getChildByName("Bird").getComponent(l).on(p.BEGIN_CONTACT,this.onCollide,this),this.readyNode=this.node.parent.getChildByName("Message").getChildByName("ready"),this.restartNode=this.node.parent.getChildByName("Message").getChildByName("BtnRestart"),this.gameOver=this.node.parent.getChildByName("Message").getChildByName("gameover"),this.bird=this.node.parent.getChildByName("Bird"),this.gameOver&&(this.gameOver.active=!1),this.restartNode&&(this.restartNode.active=!1,this.restartNode.on(v.EventType.TOUCH_END,this.restartGame,this))},s.restartGame=function(){this.restartNode&&(this.restartNode.active=!1,this.gameOver.active=!1,this.isStarted=!1)},s.onCollide=function(){this.isStarted||(this.isStarted=!0,this.gameOver&&(this.gameOver.active=!0),this.restartNode&&(this.restartNode.active=!0))},s.onInputReceived=function(e){this.readyNode&&(this.readyNode.active=!1)},s.update=function(e){},t}(u)).prototype,"basePrefab",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),g=y))||g));s._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./debug-view-runtime-control.ts","./Background.ts","./Bird.ts","./GameControl.ts"],(function(){return{setters:[null,null,null,null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});