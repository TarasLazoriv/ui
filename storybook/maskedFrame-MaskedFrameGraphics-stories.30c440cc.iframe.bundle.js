"use strict";(self.webpackChunk_pixi_ui=self.webpackChunk_pixi_ui||[]).push([[977],{"./node_modules/@pixi/sprite/lib/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>Sprite});var lib=__webpack_require__("./node_modules/@pixi/core/lib/index.mjs"),display_lib=__webpack_require__("./node_modules/@pixi/display/lib/index.mjs");const tempPoint=new lib.E9,indices=new Uint16Array([0,1,2,0,2,3]);class Sprite extends display_lib.W2{constructor(texture){super(),this._anchor=new lib.AB(this._onAnchorUpdate,this,texture?texture.defaultAnchor.x:0,texture?texture.defaultAnchor.y:0),this._texture=null,this._width=0,this._height=0,this._tintColor=new lib.Il(16777215),this._tintRGB=null,this.tint=16777215,this.blendMode=lib.T$.NORMAL,this._cachedTint=16777215,this.uvs=null,this.texture=texture||lib.xE.EMPTY,this.vertexData=new Float32Array(8),this.vertexTrimmedData=null,this._transformID=-1,this._textureID=-1,this._transformTrimmedID=-1,this._textureTrimmedID=-1,this.indices=indices,this.pluginName="batch",this.isSprite=!0,this._roundPixels=lib.Xd.ROUND_PIXELS}_onTextureUpdate(){this._textureID=-1,this._textureTrimmedID=-1,this._cachedTint=16777215,this._width&&(this.scale.x=lib.P6.sign(this.scale.x)*this._width/this._texture.orig.width),this._height&&(this.scale.y=lib.P6.sign(this.scale.y)*this._height/this._texture.orig.height)}_onAnchorUpdate(){this._transformID=-1,this._transformTrimmedID=-1}calculateVertices(){const texture=this._texture;if(this._transformID===this.transform._worldID&&this._textureID===texture._updateID)return;this._textureID!==texture._updateID&&(this.uvs=this._texture._uvs.uvsFloat32),this._transformID=this.transform._worldID,this._textureID=texture._updateID;const wt=this.transform.worldTransform,a=wt.a,b=wt.b,c=wt.c,d=wt.d,tx=wt.tx,ty=wt.ty,vertexData=this.vertexData,trim=texture.trim,orig=texture.orig,anchor=this._anchor;let w0=0,w1=0,h0=0,h1=0;if(trim?(w1=trim.x-anchor._x*orig.width,w0=w1+trim.width,h1=trim.y-anchor._y*orig.height,h0=h1+trim.height):(w1=-anchor._x*orig.width,w0=w1+orig.width,h1=-anchor._y*orig.height,h0=h1+orig.height),vertexData[0]=a*w1+c*h1+tx,vertexData[1]=d*h1+b*w1+ty,vertexData[2]=a*w0+c*h1+tx,vertexData[3]=d*h1+b*w0+ty,vertexData[4]=a*w0+c*h0+tx,vertexData[5]=d*h0+b*w0+ty,vertexData[6]=a*w1+c*h0+tx,vertexData[7]=d*h0+b*w1+ty,this._roundPixels){const resolution=lib.Xd.RESOLUTION;for(let i=0;i<vertexData.length;++i)vertexData[i]=Math.round(vertexData[i]*resolution)/resolution}}calculateTrimmedVertices(){if(this.vertexTrimmedData){if(this._transformTrimmedID===this.transform._worldID&&this._textureTrimmedID===this._texture._updateID)return}else this.vertexTrimmedData=new Float32Array(8);this._transformTrimmedID=this.transform._worldID,this._textureTrimmedID=this._texture._updateID;const texture=this._texture,vertexData=this.vertexTrimmedData,orig=texture.orig,anchor=this._anchor,wt=this.transform.worldTransform,a=wt.a,b=wt.b,c=wt.c,d=wt.d,tx=wt.tx,ty=wt.ty,w1=-anchor._x*orig.width,w0=w1+orig.width,h1=-anchor._y*orig.height,h0=h1+orig.height;if(vertexData[0]=a*w1+c*h1+tx,vertexData[1]=d*h1+b*w1+ty,vertexData[2]=a*w0+c*h1+tx,vertexData[3]=d*h1+b*w0+ty,vertexData[4]=a*w0+c*h0+tx,vertexData[5]=d*h0+b*w0+ty,vertexData[6]=a*w1+c*h0+tx,vertexData[7]=d*h0+b*w1+ty,this._roundPixels){const resolution=lib.Xd.RESOLUTION;for(let i=0;i<vertexData.length;++i)vertexData[i]=Math.round(vertexData[i]*resolution)/resolution}}_render(renderer){this.calculateVertices(),renderer.batch.setObjectRenderer(renderer.plugins[this.pluginName]),renderer.plugins[this.pluginName].render(this)}_calculateBounds(){const trim=this._texture.trim,orig=this._texture.orig;!trim||trim.width===orig.width&&trim.height===orig.height?(this.calculateVertices(),this._bounds.addQuad(this.vertexData)):(this.calculateTrimmedVertices(),this._bounds.addQuad(this.vertexTrimmedData))}getLocalBounds(rect){return 0===this.children.length?(this._localBounds||(this._localBounds=new display_lib.YZ),this._localBounds.minX=this._texture.orig.width*-this._anchor._x,this._localBounds.minY=this._texture.orig.height*-this._anchor._y,this._localBounds.maxX=this._texture.orig.width*(1-this._anchor._x),this._localBounds.maxY=this._texture.orig.height*(1-this._anchor._y),rect||(this._localBoundsRect||(this._localBoundsRect=new lib.Ae),rect=this._localBoundsRect),this._localBounds.getRectangle(rect)):super.getLocalBounds.call(this,rect)}containsPoint(point){this.worldTransform.applyInverse(point,tempPoint);const width=this._texture.orig.width,height=this._texture.orig.height,x1=-width*this.anchor.x;let y1=0;return tempPoint.x>=x1&&tempPoint.x<x1+width&&(y1=-height*this.anchor.y,tempPoint.y>=y1&&tempPoint.y<y1+height)}destroy(options){if(super.destroy(options),this._texture.off("update",this._onTextureUpdate,this),this._anchor=null,"boolean"==typeof options?options:options?.texture){const destroyBaseTexture="boolean"==typeof options?options:options?.baseTexture;this._texture.destroy(!!destroyBaseTexture)}this._texture=null}static from(source,options){const texture=source instanceof lib.xE?source:lib.xE.from(source,options);return new Sprite(texture)}set roundPixels(value){this._roundPixels!==value&&(this._transformID=-1,this._transformTrimmedID=-1),this._roundPixels=value}get roundPixels(){return this._roundPixels}get width(){return Math.abs(this.scale.x)*this._texture.orig.width}set width(value){const s=lib.P6.sign(this.scale.x)||1;this.scale.x=s*value/this._texture.orig.width,this._width=value}get height(){return Math.abs(this.scale.y)*this._texture.orig.height}set height(value){const s=lib.P6.sign(this.scale.y)||1;this.scale.y=s*value/this._texture.orig.height,this._height=value}get anchor(){return this._anchor}set anchor(value){this._anchor.copyFrom(value)}get tint(){return this._tintColor.value}set tint(value){this._tintColor.setValue(value),this._tintRGB=this._tintColor.toLittleEndianNumber()}get tintValue(){return this._tintColor.toNumber()}get texture(){return this._texture}set texture(value){this._texture!==value&&(this._texture&&this._texture.off("update",this._onTextureUpdate,this),this._texture=value||lib.xE.EMPTY,this._cachedTint=16777215,this._textureID=-1,this._textureTrimmedID=-1,value&&(value.baseTexture.valid?this._onTextureUpdate():value.once("update",this._onTextureUpdate,this)))}}},"./src/stories/maskedFrame/MaskedFrameGraphics.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{UseGraphics:()=>UseGraphics,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _pixi_graphics__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@pixi/graphics/lib/index.mjs"),_pixi_display__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@pixi/display/lib/index.mjs"),_pixi_sprite__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@pixi/sprite/lib/index.mjs"),_MaskedFrame__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/MaskedFrame.ts"),_utils_argTypes__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/stories/utils/argTypes.ts"),_utils_loader__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/stories/utils/loader.ts"),_utils_helpers_resize__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/utils/helpers/resize.ts"),_utils_color__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/stories/utils/color.ts"),args={borderColor:"#FFFFFF",borderWidth:10,radius:250},UseGraphics=function UseGraphics(_ref){var borderColor=_ref.borderColor,radius=_ref.radius,borderWidth=_ref.borderWidth,view=new _pixi_display__WEBPACK_IMPORTED_MODULE_1__.W2;return(0,_utils_loader__WEBPACK_IMPORTED_MODULE_3__.M)(["avatar-01.png"]).then((function(){borderColor=(0,_utils_color__WEBPACK_IMPORTED_MODULE_4__.Lq)(borderColor);var target=_pixi_sprite__WEBPACK_IMPORTED_MODULE_2__.j.from("avatar-01.png"),frame=new _MaskedFrame__WEBPACK_IMPORTED_MODULE_5__.O({target,mask:getMask(target.width,target.height,radius),borderWidth,borderColor});view.addChild(frame),(0,_utils_helpers_resize__WEBPACK_IMPORTED_MODULE_6__.w)(view)})),{view,resize:function resize(){return(0,_utils_helpers_resize__WEBPACK_IMPORTED_MODULE_6__.w)(view)}}};function getMask(width,height,radius){var isCircle=width===height&&radius>=width/2,mask=new _pixi_graphics__WEBPACK_IMPORTED_MODULE_0__.TC;return isCircle?mask.beginFill(0).drawCircle(width/2,height/2,width/2):mask.beginFill(0).drawRoundedRect(0,0,width,height,radius),mask}const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:"import { Graphics } from '@pixi/graphics';\nimport { Container } from '@pixi/display';\nimport { Sprite } from '@pixi/sprite';\nimport { MaskedFrame } from '../../MaskedFrame';\nimport { argTypes, getDefaultArgs } from '../utils/argTypes';\nimport { preload } from '../utils/loader';\nimport { centerElement } from '../../utils/helpers/resize';\nimport { getColor } from '../utils/color';\n\nconst args = {\n    borderColor: '#FFFFFF',\n    borderWidth: 10,\n    radius: 250\n};\n\n// TODO: implement preloading\nexport const UseGraphics = ({ borderColor, radius, borderWidth }: any) =>\n{\n    const view = new Container();\n\n    const assets = [`avatar-01.png`];\n\n    preload(assets).then(() =>\n    {\n        borderColor = getColor(borderColor);\n\n        const target = Sprite.from(`avatar-01.png`);\n\n        // Component usage !!!\n        const frame = new MaskedFrame({\n            target,\n            mask: getMask(target.width, target.height, radius),\n            borderWidth,\n            borderColor\n        });\n\n        view.addChild(frame);\n\n        centerElement(view);\n    });\n\n    return { view, resize: () => centerElement(view) };\n};\n\nfunction getMask(width: number, height: number, radius: number): Graphics\n{\n    const isCircle = width === height && radius >= width / 2;\n\n    const mask = new Graphics();\n\n    if (isCircle)\n    {\n        mask.beginFill(0x000000).drawCircle(width / 2, height / 2, width / 2);\n    }\n    else\n    {\n        mask.beginFill(0x000000).drawRoundedRect(0, 0, width, height, radius);\n    }\n\n    return mask;\n}\n\nexport default {\n    title: 'Components/MaskedFrame/Use Graphics',\n    argTypes: argTypes(args),\n    args: getDefaultArgs(args)\n};\n",locationsMap:{"use-graphics":{startLoc:{col:27,line:17},endLoc:{col:1,line:43},startBody:{col:27,line:17},endBody:{col:1,line:43}}}}},title:"Components/MaskedFrame/Use Graphics",argTypes:(0,_utils_argTypes__WEBPACK_IMPORTED_MODULE_7__.P)(args),args:(0,_utils_argTypes__WEBPACK_IMPORTED_MODULE_7__.V)(args)};var __namedExportsOrder=["UseGraphics"]},"./src/stories/utils/argTypes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}__webpack_require__.d(__webpack_exports__,{P:()=>argTypes,V:()=>getDefaultArgs});var controls={select:{control:{type:"select"}},check:{control:{type:"check"}},color:{control:{type:"color"}},amount:{control:{type:"range"}},type:{control:{type:"radio"}},date:{control:{type:"date"}},switch:{control:{type:"boolean"}}},argTypes=function argTypes(args){var exportArgTypes={};for(var key in args)if("number"==typeof args[key]){var min=0,arg=args[key];key.includes("font")&&(min=1),exportArgTypes[key]=arg>=0?arg>=100?{control:{type:"range",min,max:1e3,step:10}}:arg>10?{control:{type:"range",min,max:100,step:1}}:0!==arg&&arg<1?{control:{type:"range",min:0,max:1,step:.1}}:{control:{type:"range",min,max:10,step:1}}:arg<=-100?{control:{type:"range",min:-1e3,max:1e3,step:10}}:arg<-10?{control:{type:"range",min:-100,max:100,step:10}}:0!==arg&&arg>-1?{control:{type:"range",min:-1,max:0,step:.1}}:{control:{type:"range",min:-10,max:10,step:1}}}else switch(getArgType(key)&&(exportArgTypes[key]=getArgType(key)),_typeof(args[key])){case"object":exportArgTypes[key]=controls.select,Array.isArray(args[key])?exportArgTypes[key].options=args[key]:exportArgTypes[key].options=Object.keys(args).map((function(key){return args[key]}));break;case"boolean":exportArgTypes[key]=controls.switch}return exportArgTypes};function getArgType(type){for(var control in controls)if(type.toLowerCase().indexOf(control)>-1)return controls[control]}var getDefaultArgs=function getDefaultArgs(args){var exportArgs={};for(var key in args)if("object"===_typeof(args[key]))Array.isArray(args[key])&&(exportArgs[key]=args[key][0]);else exportArgs[key]=args[key];return exportArgs}},"./src/utils/helpers/resize.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function centerElement(view,horPos,verPos){var canvas=document.getElementById("storybook-root");view.width>0?view.x=0===horPos?0:horPos?canvas.offsetWidth*horPos-view.width/2:canvas.offsetWidth/2-view.width/2:view.x=canvas.offsetWidth/2,view.height>0?view.y=0===verPos?0:verPos?canvas.offsetHeight*verPos-view.height/2:canvas.offsetHeight/2-view.height/2:view.y=canvas.offsetHeight/2}function centerView(view){var canvas=document.getElementById("storybook-root");view.x=canvas.offsetWidth/2,view.y=canvas.offsetHeight/2}__webpack_require__.d(__webpack_exports__,{C:()=>centerView,w:()=>centerElement})},"./src/utils/helpers/view.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>getView});var _pixi_sprite__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@pixi/sprite/lib/index.mjs");function getView(view){return"string"==typeof view?_pixi_sprite__WEBPACK_IMPORTED_MODULE_0__.j.from(view):view}}}]);