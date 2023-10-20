"use strict";(self.webpackChunk_pixi_ui=self.webpackChunk_pixi_ui||[]).push([[129],{"./node_modules/@pixi/text/lib/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M_:()=>TEXT_GRADIENT,xv:()=>Text,_A:()=>TextMetrics,pn:()=>TextStyle});var TEXT_GRADIENT=(TEXT_GRADIENT2=>(TEXT_GRADIENT2[TEXT_GRADIENT2.LINEAR_VERTICAL=0]="LINEAR_VERTICAL",TEXT_GRADIENT2[TEXT_GRADIENT2.LINEAR_HORIZONTAL=1]="LINEAR_HORIZONTAL",TEXT_GRADIENT2))(TEXT_GRADIENT||{}),lib=__webpack_require__("./node_modules/@pixi/core/lib/index.mjs"),sprite_lib=__webpack_require__("./node_modules/@pixi/sprite/lib/index.mjs");const contextSettings={willReadFrequently:!0},_TextMetrics=class _TextMetrics2{static get experimentalLetterSpacingSupported(){let result=_TextMetrics2._experimentalLetterSpacingSupported;if(void 0!==result){const proto=lib.Xd.ADAPTER.getCanvasRenderingContext2D().prototype;result=_TextMetrics2._experimentalLetterSpacingSupported="letterSpacing"in proto||"textLetterSpacing"in proto}return result}constructor(text,style,width,height,lines,lineWidths,lineHeight,maxLineWidth,fontProperties){this.text=text,this.style=style,this.width=width,this.height=height,this.lines=lines,this.lineWidths=lineWidths,this.lineHeight=lineHeight,this.maxLineWidth=maxLineWidth,this.fontProperties=fontProperties}static measureText(text,style,wordWrap,canvas=_TextMetrics2._canvas){wordWrap=wordWrap??style.wordWrap;const font=style.toFontString(),fontProperties=_TextMetrics2.measureFont(font);0===fontProperties.fontSize&&(fontProperties.fontSize=style.fontSize,fontProperties.ascent=style.fontSize);const context=canvas.getContext("2d",contextSettings);context.font=font;const lines=(wordWrap?_TextMetrics2.wordWrap(text,style,canvas):text).split(/(?:\r\n|\r|\n)/),lineWidths=new Array(lines.length);let maxLineWidth=0;for(let i=0;i<lines.length;i++){const lineWidth=_TextMetrics2._measureText(lines[i],style.letterSpacing,context);lineWidths[i]=lineWidth,maxLineWidth=Math.max(maxLineWidth,lineWidth)}let width=maxLineWidth+style.strokeThickness;style.dropShadow&&(width+=style.dropShadowDistance);const lineHeight=style.lineHeight||fontProperties.fontSize+style.strokeThickness;let height=Math.max(lineHeight,fontProperties.fontSize+2*style.strokeThickness)+style.leading+(lines.length-1)*(lineHeight+style.leading);return style.dropShadow&&(height+=style.dropShadowDistance),new _TextMetrics2(text,style,width,height,lines,lineWidths,lineHeight+style.leading,maxLineWidth,fontProperties)}static _measureText(text,letterSpacing,context){let useExperimentalLetterSpacing=!1;_TextMetrics2.experimentalLetterSpacingSupported&&(_TextMetrics2.experimentalLetterSpacing?(context.letterSpacing=`${letterSpacing}px`,context.textLetterSpacing=`${letterSpacing}px`,useExperimentalLetterSpacing=!0):(context.letterSpacing="0px",context.textLetterSpacing="0px"));let width=context.measureText(text).width;return width>0&&(useExperimentalLetterSpacing?width-=letterSpacing:width+=(_TextMetrics2.graphemeSegmenter(text).length-1)*letterSpacing),width}static wordWrap(text,style,canvas=_TextMetrics2._canvas){const context=canvas.getContext("2d",contextSettings);let width=0,line="",lines="";const cache=Object.create(null),{letterSpacing,whiteSpace}=style,collapseSpaces=_TextMetrics2.collapseSpaces(whiteSpace),collapseNewlines=_TextMetrics2.collapseNewlines(whiteSpace);let canPrependSpaces=!collapseSpaces;const wordWrapWidth=style.wordWrapWidth+letterSpacing,tokens=_TextMetrics2.tokenize(text);for(let i=0;i<tokens.length;i++){let token=tokens[i];if(_TextMetrics2.isNewline(token)){if(!collapseNewlines){lines+=_TextMetrics2.addLine(line),canPrependSpaces=!collapseSpaces,line="",width=0;continue}token=" "}if(collapseSpaces){const currIsBreakingSpace=_TextMetrics2.isBreakingSpace(token),lastIsBreakingSpace=_TextMetrics2.isBreakingSpace(line[line.length-1]);if(currIsBreakingSpace&&lastIsBreakingSpace)continue}const tokenWidth=_TextMetrics2.getFromCache(token,letterSpacing,cache,context);if(tokenWidth>wordWrapWidth)if(""!==line&&(lines+=_TextMetrics2.addLine(line),line="",width=0),_TextMetrics2.canBreakWords(token,style.breakWords)){const characters=_TextMetrics2.wordWrapSplit(token);for(let j=0;j<characters.length;j++){let char=characters[j],lastChar=char,k=1;for(;characters[j+k];){const nextChar=characters[j+k];if(_TextMetrics2.canBreakChars(lastChar,nextChar,token,j,style.breakWords))break;char+=nextChar,lastChar=nextChar,k++}j+=k-1;const characterWidth=_TextMetrics2.getFromCache(char,letterSpacing,cache,context);characterWidth+width>wordWrapWidth&&(lines+=_TextMetrics2.addLine(line),canPrependSpaces=!1,line="",width=0),line+=char,width+=characterWidth}}else{line.length>0&&(lines+=_TextMetrics2.addLine(line),line="",width=0);const isLastToken=i===tokens.length-1;lines+=_TextMetrics2.addLine(token,!isLastToken),canPrependSpaces=!1,line="",width=0}else tokenWidth+width>wordWrapWidth&&(canPrependSpaces=!1,lines+=_TextMetrics2.addLine(line),line="",width=0),(line.length>0||!_TextMetrics2.isBreakingSpace(token)||canPrependSpaces)&&(line+=token,width+=tokenWidth)}return lines+=_TextMetrics2.addLine(line,!1),lines}static addLine(line,newLine=!0){return line=_TextMetrics2.trimRight(line),line=newLine?`${line}\n`:line}static getFromCache(key,letterSpacing,cache,context){let width=cache[key];return"number"!=typeof width&&(width=_TextMetrics2._measureText(key,letterSpacing,context)+letterSpacing,cache[key]=width),width}static collapseSpaces(whiteSpace){return"normal"===whiteSpace||"pre-line"===whiteSpace}static collapseNewlines(whiteSpace){return"normal"===whiteSpace}static trimRight(text){if("string"!=typeof text)return"";for(let i=text.length-1;i>=0;i--){const char=text[i];if(!_TextMetrics2.isBreakingSpace(char))break;text=text.slice(0,-1)}return text}static isNewline(char){return"string"==typeof char&&_TextMetrics2._newlines.includes(char.charCodeAt(0))}static isBreakingSpace(char,_nextChar){return"string"==typeof char&&_TextMetrics2._breakingSpaces.includes(char.charCodeAt(0))}static tokenize(text){const tokens=[];let token="";if("string"!=typeof text)return tokens;for(let i=0;i<text.length;i++){const char=text[i],nextChar=text[i+1];_TextMetrics2.isBreakingSpace(char,nextChar)||_TextMetrics2.isNewline(char)?(""!==token&&(tokens.push(token),token=""),tokens.push(char)):token+=char}return""!==token&&tokens.push(token),tokens}static canBreakWords(_token,breakWords){return breakWords}static canBreakChars(_char,_nextChar,_token,_index,_breakWords){return!0}static wordWrapSplit(token){return _TextMetrics2.graphemeSegmenter(token)}static measureFont(font){if(_TextMetrics2._fonts[font])return _TextMetrics2._fonts[font];const properties={ascent:0,descent:0,fontSize:0},canvas=_TextMetrics2._canvas,context=_TextMetrics2._context;context.font=font;const metricsString=_TextMetrics2.METRICS_STRING+_TextMetrics2.BASELINE_SYMBOL,width=Math.ceil(context.measureText(metricsString).width);let baseline=Math.ceil(context.measureText(_TextMetrics2.BASELINE_SYMBOL).width);const height=Math.ceil(_TextMetrics2.HEIGHT_MULTIPLIER*baseline);if(baseline=baseline*_TextMetrics2.BASELINE_MULTIPLIER|0,0===width||0===height)return _TextMetrics2._fonts[font]=properties,properties;canvas.width=width,canvas.height=height,context.fillStyle="#f00",context.fillRect(0,0,width,height),context.font=font,context.textBaseline="alphabetic",context.fillStyle="#000",context.fillText(metricsString,0,baseline);const imagedata=context.getImageData(0,0,width,height).data,pixels=imagedata.length,line=4*width;let i=0,idx=0,stop=!1;for(i=0;i<baseline;++i){for(let j=0;j<line;j+=4)if(255!==imagedata[idx+j]){stop=!0;break}if(stop)break;idx+=line}for(properties.ascent=baseline-i,idx=pixels-line,stop=!1,i=height;i>baseline;--i){for(let j=0;j<line;j+=4)if(255!==imagedata[idx+j]){stop=!0;break}if(stop)break;idx-=line}return properties.descent=i-baseline,properties.fontSize=properties.ascent+properties.descent,_TextMetrics2._fonts[font]=properties,properties}static clearMetrics(font=""){font?delete _TextMetrics2._fonts[font]:_TextMetrics2._fonts={}}static get _canvas(){if(!_TextMetrics2.__canvas){let canvas;try{const c=new OffscreenCanvas(0,0);if(c.getContext("2d",contextSettings)?.measureText)return _TextMetrics2.__canvas=c,c;canvas=lib.Xd.ADAPTER.createCanvas()}catch{canvas=lib.Xd.ADAPTER.createCanvas()}canvas.width=canvas.height=10,_TextMetrics2.__canvas=canvas}return _TextMetrics2.__canvas}static get _context(){return _TextMetrics2.__context||(_TextMetrics2.__context=_TextMetrics2._canvas.getContext("2d",contextSettings)),_TextMetrics2.__context}};_TextMetrics.METRICS_STRING="|ÉqÅ",_TextMetrics.BASELINE_SYMBOL="M",_TextMetrics.BASELINE_MULTIPLIER=1.4,_TextMetrics.HEIGHT_MULTIPLIER=2,_TextMetrics.graphemeSegmenter=(()=>{if("function"==typeof Intl?.Segmenter){const segmenter=new Intl.Segmenter;return s=>[...segmenter.segment(s)].map((x=>x.segment))}return s=>[...s]})(),_TextMetrics.experimentalLetterSpacing=!1,_TextMetrics._fonts={},_TextMetrics._newlines=[10,13],_TextMetrics._breakingSpaces=[9,32,8192,8193,8194,8195,8196,8197,8198,8200,8201,8202,8287,12288];let TextMetrics=_TextMetrics;const genericFontFamilies=["serif","sans-serif","monospace","cursive","fantasy","system-ui"],_TextStyle=class _TextStyle2{constructor(style){this.styleID=0,this.reset(),deepCopyProperties(this,style,style)}clone(){const clonedProperties={};return deepCopyProperties(clonedProperties,this,_TextStyle2.defaultStyle),new _TextStyle2(clonedProperties)}reset(){deepCopyProperties(this,_TextStyle2.defaultStyle,_TextStyle2.defaultStyle)}get align(){return this._align}set align(align){this._align!==align&&(this._align=align,this.styleID++)}get breakWords(){return this._breakWords}set breakWords(breakWords){this._breakWords!==breakWords&&(this._breakWords=breakWords,this.styleID++)}get dropShadow(){return this._dropShadow}set dropShadow(dropShadow){this._dropShadow!==dropShadow&&(this._dropShadow=dropShadow,this.styleID++)}get dropShadowAlpha(){return this._dropShadowAlpha}set dropShadowAlpha(dropShadowAlpha){this._dropShadowAlpha!==dropShadowAlpha&&(this._dropShadowAlpha=dropShadowAlpha,this.styleID++)}get dropShadowAngle(){return this._dropShadowAngle}set dropShadowAngle(dropShadowAngle){this._dropShadowAngle!==dropShadowAngle&&(this._dropShadowAngle=dropShadowAngle,this.styleID++)}get dropShadowBlur(){return this._dropShadowBlur}set dropShadowBlur(dropShadowBlur){this._dropShadowBlur!==dropShadowBlur&&(this._dropShadowBlur=dropShadowBlur,this.styleID++)}get dropShadowColor(){return this._dropShadowColor}set dropShadowColor(dropShadowColor){const outputColor=getColor(dropShadowColor);this._dropShadowColor!==outputColor&&(this._dropShadowColor=outputColor,this.styleID++)}get dropShadowDistance(){return this._dropShadowDistance}set dropShadowDistance(dropShadowDistance){this._dropShadowDistance!==dropShadowDistance&&(this._dropShadowDistance=dropShadowDistance,this.styleID++)}get fill(){return this._fill}set fill(fill){const outputColor=getColor(fill);this._fill!==outputColor&&(this._fill=outputColor,this.styleID++)}get fillGradientType(){return this._fillGradientType}set fillGradientType(fillGradientType){this._fillGradientType!==fillGradientType&&(this._fillGradientType=fillGradientType,this.styleID++)}get fillGradientStops(){return this._fillGradientStops}set fillGradientStops(fillGradientStops){(function areArraysEqual(array1,array2){if(!Array.isArray(array1)||!Array.isArray(array2)||array1.length!==array2.length)return!1;for(let i=0;i<array1.length;++i)if(array1[i]!==array2[i])return!1;return!0})(this._fillGradientStops,fillGradientStops)||(this._fillGradientStops=fillGradientStops,this.styleID++)}get fontFamily(){return this._fontFamily}set fontFamily(fontFamily){this.fontFamily!==fontFamily&&(this._fontFamily=fontFamily,this.styleID++)}get fontSize(){return this._fontSize}set fontSize(fontSize){this._fontSize!==fontSize&&(this._fontSize=fontSize,this.styleID++)}get fontStyle(){return this._fontStyle}set fontStyle(fontStyle){this._fontStyle!==fontStyle&&(this._fontStyle=fontStyle,this.styleID++)}get fontVariant(){return this._fontVariant}set fontVariant(fontVariant){this._fontVariant!==fontVariant&&(this._fontVariant=fontVariant,this.styleID++)}get fontWeight(){return this._fontWeight}set fontWeight(fontWeight){this._fontWeight!==fontWeight&&(this._fontWeight=fontWeight,this.styleID++)}get letterSpacing(){return this._letterSpacing}set letterSpacing(letterSpacing){this._letterSpacing!==letterSpacing&&(this._letterSpacing=letterSpacing,this.styleID++)}get lineHeight(){return this._lineHeight}set lineHeight(lineHeight){this._lineHeight!==lineHeight&&(this._lineHeight=lineHeight,this.styleID++)}get leading(){return this._leading}set leading(leading){this._leading!==leading&&(this._leading=leading,this.styleID++)}get lineJoin(){return this._lineJoin}set lineJoin(lineJoin){this._lineJoin!==lineJoin&&(this._lineJoin=lineJoin,this.styleID++)}get miterLimit(){return this._miterLimit}set miterLimit(miterLimit){this._miterLimit!==miterLimit&&(this._miterLimit=miterLimit,this.styleID++)}get padding(){return this._padding}set padding(padding){this._padding!==padding&&(this._padding=padding,this.styleID++)}get stroke(){return this._stroke}set stroke(stroke){const outputColor=getColor(stroke);this._stroke!==outputColor&&(this._stroke=outputColor,this.styleID++)}get strokeThickness(){return this._strokeThickness}set strokeThickness(strokeThickness){this._strokeThickness!==strokeThickness&&(this._strokeThickness=strokeThickness,this.styleID++)}get textBaseline(){return this._textBaseline}set textBaseline(textBaseline){this._textBaseline!==textBaseline&&(this._textBaseline=textBaseline,this.styleID++)}get trim(){return this._trim}set trim(trim){this._trim!==trim&&(this._trim=trim,this.styleID++)}get whiteSpace(){return this._whiteSpace}set whiteSpace(whiteSpace){this._whiteSpace!==whiteSpace&&(this._whiteSpace=whiteSpace,this.styleID++)}get wordWrap(){return this._wordWrap}set wordWrap(wordWrap){this._wordWrap!==wordWrap&&(this._wordWrap=wordWrap,this.styleID++)}get wordWrapWidth(){return this._wordWrapWidth}set wordWrapWidth(wordWrapWidth){this._wordWrapWidth!==wordWrapWidth&&(this._wordWrapWidth=wordWrapWidth,this.styleID++)}toFontString(){const fontSizeString="number"==typeof this.fontSize?`${this.fontSize}px`:this.fontSize;let fontFamilies=this.fontFamily;Array.isArray(this.fontFamily)||(fontFamilies=this.fontFamily.split(","));for(let i=fontFamilies.length-1;i>=0;i--){let fontFamily=fontFamilies[i].trim();!/([\"\'])[^\'\"]+\1/.test(fontFamily)&&!genericFontFamilies.includes(fontFamily)&&(fontFamily=`"${fontFamily}"`),fontFamilies[i]=fontFamily}return`${this.fontStyle} ${this.fontVariant} ${this.fontWeight} ${fontSizeString} ${fontFamilies.join(",")}`}};_TextStyle.defaultStyle={align:"left",breakWords:!1,dropShadow:!1,dropShadowAlpha:1,dropShadowAngle:Math.PI/6,dropShadowBlur:0,dropShadowColor:"black",dropShadowDistance:5,fill:"black",fillGradientType:TEXT_GRADIENT.LINEAR_VERTICAL,fillGradientStops:[],fontFamily:"Arial",fontSize:26,fontStyle:"normal",fontVariant:"normal",fontWeight:"normal",leading:0,letterSpacing:0,lineHeight:0,lineJoin:"miter",miterLimit:10,padding:0,stroke:"black",strokeThickness:0,textBaseline:"alphabetic",trim:!1,whiteSpace:"pre",wordWrap:!1,wordWrapWidth:100};let TextStyle=_TextStyle;function getColor(color){const temp=lib.Il.shared,format=color2=>{const res=temp.setValue(color2);return 1===res.alpha?res.toHex():res.toRgbaString()};return Array.isArray(color)?color.map(format):format(color)}function deepCopyProperties(target,source,propertyObj){for(const prop in propertyObj)Array.isArray(source[prop])?target[prop]=source[prop].slice():target[prop]=source[prop]}const defaultDestroyOptions={texture:!0,children:!1,baseTexture:!0},_Text=class _Text2 extends sprite_lib.j{constructor(text,style,canvas){let ownCanvas=!1;canvas||(canvas=lib.Xd.ADAPTER.createCanvas(),ownCanvas=!0),canvas.width=3,canvas.height=3;const texture=lib.xE.from(canvas);texture.orig=new lib.Ae,texture.trim=new lib.Ae,super(texture),this._ownCanvas=ownCanvas,this.canvas=canvas,this.context=canvas.getContext("2d",{willReadFrequently:!0}),this._resolution=_Text2.defaultResolution??lib.Xd.RESOLUTION,this._autoResolution=_Text2.defaultAutoResolution,this._text=null,this._style=null,this._styleListener=null,this._font="",this.text=text,this.style=style,this.localStyleID=-1}static get experimentalLetterSpacing(){return TextMetrics.experimentalLetterSpacing}static set experimentalLetterSpacing(value){lib.P6.deprecation("7.1.0","Text.experimentalLetterSpacing is deprecated, use TextMetrics.experimentalLetterSpacing"),TextMetrics.experimentalLetterSpacing=value}updateText(respectDirty){const style=this._style;if(this.localStyleID!==style.styleID&&(this.dirty=!0,this.localStyleID=style.styleID),!this.dirty&&respectDirty)return;this._font=this._style.toFontString();const context=this.context,measured=TextMetrics.measureText(this._text||" ",this._style,this._style.wordWrap,this.canvas),width=measured.width,height=measured.height,lines=measured.lines,lineHeight=measured.lineHeight,lineWidths=measured.lineWidths,maxLineWidth=measured.maxLineWidth,fontProperties=measured.fontProperties;let linePositionX,linePositionY;this.canvas.width=Math.ceil(Math.ceil(Math.max(1,width)+2*style.padding)*this._resolution),this.canvas.height=Math.ceil(Math.ceil(Math.max(1,height)+2*style.padding)*this._resolution),context.scale(this._resolution,this._resolution),context.clearRect(0,0,this.canvas.width,this.canvas.height),context.font=this._font,context.lineWidth=style.strokeThickness,context.textBaseline=style.textBaseline,context.lineJoin=style.lineJoin,context.miterLimit=style.miterLimit;const passesCount=style.dropShadow?2:1;for(let i=0;i<passesCount;++i){const isShadowPass=style.dropShadow&&0===i,dsOffsetText=isShadowPass?Math.ceil(Math.max(1,height)+2*style.padding):0,dsOffsetShadow=dsOffsetText*this._resolution;if(isShadowPass){context.fillStyle="black",context.strokeStyle="black";const dropShadowColor=style.dropShadowColor,dropShadowBlur=style.dropShadowBlur*this._resolution,dropShadowDistance=style.dropShadowDistance*this._resolution;context.shadowColor=lib.Il.shared.setValue(dropShadowColor).setAlpha(style.dropShadowAlpha).toRgbaString(),context.shadowBlur=dropShadowBlur,context.shadowOffsetX=Math.cos(style.dropShadowAngle)*dropShadowDistance,context.shadowOffsetY=Math.sin(style.dropShadowAngle)*dropShadowDistance+dsOffsetShadow}else context.fillStyle=this._generateFillStyle(style,lines,measured),context.strokeStyle=style.stroke,context.shadowColor="black",context.shadowBlur=0,context.shadowOffsetX=0,context.shadowOffsetY=0;let linePositionYShift=(lineHeight-fontProperties.fontSize)/2;lineHeight-fontProperties.fontSize<0&&(linePositionYShift=0);for(let i2=0;i2<lines.length;i2++)linePositionX=style.strokeThickness/2,linePositionY=style.strokeThickness/2+i2*lineHeight+fontProperties.ascent+linePositionYShift,"right"===style.align?linePositionX+=maxLineWidth-lineWidths[i2]:"center"===style.align&&(linePositionX+=(maxLineWidth-lineWidths[i2])/2),style.stroke&&style.strokeThickness&&this.drawLetterSpacing(lines[i2],linePositionX+style.padding,linePositionY+style.padding-dsOffsetText,!0),style.fill&&this.drawLetterSpacing(lines[i2],linePositionX+style.padding,linePositionY+style.padding-dsOffsetText)}this.updateTexture()}drawLetterSpacing(text,x,y,isStroke=!1){const letterSpacing=this._style.letterSpacing;let useExperimentalLetterSpacing=!1;if(TextMetrics.experimentalLetterSpacingSupported&&(TextMetrics.experimentalLetterSpacing?(this.context.letterSpacing=`${letterSpacing}px`,this.context.textLetterSpacing=`${letterSpacing}px`,useExperimentalLetterSpacing=!0):(this.context.letterSpacing="0px",this.context.textLetterSpacing="0px")),0===letterSpacing||useExperimentalLetterSpacing)return void(isStroke?this.context.strokeText(text,x,y):this.context.fillText(text,x,y));let currentPosition=x;const stringArray=TextMetrics.graphemeSegmenter(text);let previousWidth=this.context.measureText(text).width,currentWidth=0;for(let i=0;i<stringArray.length;++i){const currentChar=stringArray[i];isStroke?this.context.strokeText(currentChar,currentPosition,y):this.context.fillText(currentChar,currentPosition,y);let textStr="";for(let j=i+1;j<stringArray.length;++j)textStr+=stringArray[j];currentWidth=this.context.measureText(textStr).width,currentPosition+=previousWidth-currentWidth+letterSpacing,previousWidth=currentWidth}}updateTexture(){const canvas=this.canvas;if(this._style.trim){const trimmed=lib.P6.trimCanvas(canvas);trimmed.data&&(canvas.width=trimmed.width,canvas.height=trimmed.height,this.context.putImageData(trimmed.data,0,0))}const texture=this._texture,style=this._style,padding=style.trim?0:style.padding,baseTexture=texture.baseTexture;texture.trim.width=texture._frame.width=canvas.width/this._resolution,texture.trim.height=texture._frame.height=canvas.height/this._resolution,texture.trim.x=-padding,texture.trim.y=-padding,texture.orig.width=texture._frame.width-2*padding,texture.orig.height=texture._frame.height-2*padding,this._onTextureUpdate(),baseTexture.setRealSize(canvas.width,canvas.height,this._resolution),texture.updateUvs(),this.dirty=!1}_render(renderer){this._autoResolution&&this._resolution!==renderer.resolution&&(this._resolution=renderer.resolution,this.dirty=!0),this.updateText(!0),super._render(renderer)}updateTransform(){this.updateText(!0),super.updateTransform()}getBounds(skipUpdate,rect){return this.updateText(!0),-1===this._textureID&&(skipUpdate=!1),super.getBounds(skipUpdate,rect)}getLocalBounds(rect){return this.updateText(!0),super.getLocalBounds.call(this,rect)}_calculateBounds(){this.calculateVertices(),this._bounds.addQuad(this.vertexData)}_generateFillStyle(style,lines,metrics){const fillStyle=style.fill;if(!Array.isArray(fillStyle))return fillStyle;if(1===fillStyle.length)return fillStyle[0];let gradient;const dropShadowCorrection=style.dropShadow?style.dropShadowDistance:0,padding=style.padding||0,width=this.canvas.width/this._resolution-dropShadowCorrection-2*padding,height=this.canvas.height/this._resolution-dropShadowCorrection-2*padding,fill=fillStyle.slice(),fillGradientStops=style.fillGradientStops.slice();if(!fillGradientStops.length){const lengthPlus1=fill.length+1;for(let i=1;i<lengthPlus1;++i)fillGradientStops.push(i/lengthPlus1)}if(fill.unshift(fillStyle[0]),fillGradientStops.unshift(0),fill.push(fillStyle[fillStyle.length-1]),fillGradientStops.push(1),style.fillGradientType===TEXT_GRADIENT.LINEAR_VERTICAL){gradient=this.context.createLinearGradient(width/2,padding,width/2,height+padding);const textHeight=metrics.fontProperties.fontSize+style.strokeThickness;for(let i=0;i<lines.length;i++){const lastLineBottom=metrics.lineHeight*(i-1)+textHeight,thisLineTop=metrics.lineHeight*i;let thisLineGradientStart=thisLineTop;i>0&&lastLineBottom>thisLineTop&&(thisLineGradientStart=(thisLineTop+lastLineBottom)/2);const thisLineBottom=thisLineTop+textHeight,nextLineTop=metrics.lineHeight*(i+1);let thisLineGradientEnd=thisLineBottom;i+1<lines.length&&nextLineTop<thisLineBottom&&(thisLineGradientEnd=(thisLineBottom+nextLineTop)/2);const gradStopLineHeight=(thisLineGradientEnd-thisLineGradientStart)/height;for(let j=0;j<fill.length;j++){let lineStop=0;lineStop="number"==typeof fillGradientStops[j]?fillGradientStops[j]:j/fill.length;let globalStop=Math.min(1,Math.max(0,thisLineGradientStart/height+lineStop*gradStopLineHeight));globalStop=Number(globalStop.toFixed(5)),gradient.addColorStop(globalStop,fill[j])}}}else{gradient=this.context.createLinearGradient(padding,height/2,width+padding,height/2);const totalIterations=fill.length+1;let currentIteration=1;for(let i=0;i<fill.length;i++){let stop;stop="number"==typeof fillGradientStops[i]?fillGradientStops[i]:currentIteration/totalIterations,gradient.addColorStop(stop,fill[i]),currentIteration++}}return gradient}destroy(options){"boolean"==typeof options&&(options={children:options}),options=Object.assign({},defaultDestroyOptions,options),super.destroy(options),this._ownCanvas&&(this.canvas.height=this.canvas.width=0),this.context=null,this.canvas=null,this._style=null}get width(){return this.updateText(!0),Math.abs(this.scale.x)*this._texture.orig.width}set width(value){this.updateText(!0);const s=lib.P6.sign(this.scale.x)||1;this.scale.x=s*value/this._texture.orig.width,this._width=value}get height(){return this.updateText(!0),Math.abs(this.scale.y)*this._texture.orig.height}set height(value){this.updateText(!0);const s=lib.P6.sign(this.scale.y)||1;this.scale.y=s*value/this._texture.orig.height,this._height=value}get style(){return this._style}set style(style){style=style||{},this._style=style instanceof TextStyle?style:new TextStyle(style),this.localStyleID=-1,this.dirty=!0}get text(){return this._text}set text(text){text=String(text??""),this._text!==text&&(this._text=text,this.dirty=!0)}get resolution(){return this._resolution}set resolution(value){this._autoResolution=!1,this._resolution!==value&&(this._resolution=value,this.dirty=!0)}};_Text.defaultAutoResolution=!0;let Text=_Text}}]);