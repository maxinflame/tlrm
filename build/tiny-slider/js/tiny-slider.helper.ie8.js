
Array.prototype.forEach||(Array.prototype.forEach=function(e,t){for(var n=this.length>>>0,r=0;r<n;r++)r in this&&e.call(t,this[r],r,this)}),Array.prototype.map||(Array.prototype.map=function(e){var t=this.length>>>0;if("function"!=typeof e)throw new TypeError;for(var n=new Array(t),r=arguments[1],o=0;o<t;o++)o in this&&(n[o]=e.call(r,this[o],o,this));return n}),Array.prototype.indexOf||(Array.prototype.indexOf=function(e){var t=this.length;if(!t)return-1;var n=arguments[1]||0;if(t<=n)return-1;for(n<0&&(n+=t);n<t;n++)if(Object.prototype.hasOwnProperty.call(this,n)&&e===this[n])return n;return-1}),function(){if(!Element.prototype.addEventListener){var p=[],e=function(e,t){var n=this,r=function(e){e.target=e.srcElement,e.currentTarget=n,void 0!==t.handleEvent?t.handleEvent(e):t.call(n,e)};if("DOMContentLoaded"==e){var o=function(e){"complete"==document.readyState&&r(e)};if(document.attachEvent("onreadystatechange",o),p.push({object:this,type:e,listener:t,wrapper:o}),"complete"==document.readyState){var i=new Event;i.srcElement=window,o(i)}}else this.attachEvent("on"+e,r),p.push({object:this,type:e,listener:t,wrapper:r})},t=function(e,t){for(var n=0;n<p.length;){var r=p[n];if(r.object==this&&r.type==e&&r.listener==t){"DOMContentLoaded"==e?this.detachEvent("onreadystatechange",r.wrapper):this.detachEvent("on"+e,r.wrapper),p.splice(n,1);break}++n}};Element.prototype.addEventListener=e,Element.prototype.removeEventListener=t,HTMLDocument&&(HTMLDocument.prototype.addEventListener=e,HTMLDocument.prototype.removeEventListener=t),Window&&(Window.prototype.addEventListener=e,Window.prototype.removeEventListener=t)}}(),"firstElementChild"in document.documentElement||Object.defineProperty(Element.prototype,"firstElementChild",{get:function(){for(var e,t=this.children,n=0,r=t.length;n<r;++n)if(1===(e=t[n]).nodeType)return e;return null}}),"previousElementSibling"in document.documentElement||Object.defineProperty(Element.prototype,"previousElementSibling",{get:function(){for(var e=this.previousSibling;e&&1!==e.nodeType;)e=e.previousSibling;return e}}),"nextElementSibling"in document.documentElement||Object.defineProperty(Element.prototype,"nextElementSibling",{get:function(){for(var e=this.nextSibling;e&&1!==e.nodeType;)e=e.nextSibling;return e}}),window.getComputedStyle||(window.getComputedStyle=function(e){if(!e)return null;var t=e.currentStyle,n=e.getBoundingClientRect(),r=document.createElement("div").style;for(var o in t)r[o]=t[o];return r.cssFloat=r.styleFloat,"auto"===r.width&&(r.width=n.right-n.left+"px"),"auto"===r.height&&(r.height=n.bottom-n.top+"px"),r});