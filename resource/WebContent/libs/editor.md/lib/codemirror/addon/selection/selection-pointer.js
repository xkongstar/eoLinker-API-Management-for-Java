!function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict";function t(e,t){var o=e.state.selectionPointer;(null==t.buttons?t.which:t.buttons)?o.mouseX=o.mouseY=null:(o.mouseX=t.clientX,o.mouseY=t.clientY),i(e)}function o(e,t){if(!e.getWrapperElement().contains(t.relatedTarget)){var o=e.state.selectionPointer;o.mouseX=o.mouseY=null,i(e)}}function n(e){e.state.selectionPointer.rects=null,i(e)}function i(e){e.state.selectionPointer.willUpdate||(e.state.selectionPointer.willUpdate=!0,setTimeout(function(){l(e),e.state.selectionPointer.willUpdate=!1},50))}function l(e){var t=e.state.selectionPointer;if(t){if(null==t.rects&&null!=t.mouseX&&(t.rects=[],e.somethingSelected()))for(var o=e.display.selectionDiv.firstChild;o;o=o.nextSibling)t.rects.push(o.getBoundingClientRect());var n=!1;if(null!=t.mouseX)for(var i=0;i<t.rects.length;i++){var l=t.rects[i];l.left<=t.mouseX&&l.right>=t.mouseX&&l.top<=t.mouseY&&l.bottom>=t.mouseY&&(n=!0)}var s=n?t.value:"";e.display.lineDiv.style.cursor!=s&&(e.display.lineDiv.style.cursor=s)}}e.defineOption("selectionPointer",!1,function(i,l){var s=i.state.selectionPointer;s&&(e.off(i.getWrapperElement(),"mousemove",s.mousemove),e.off(i.getWrapperElement(),"mouseout",s.mouseout),e.off(window,"scroll",s.windowScroll),i.off("cursorActivity",n),i.off("scroll",n),i.state.selectionPointer=null,i.display.lineDiv.style.cursor=""),l&&(s=i.state.selectionPointer={value:"string"==typeof l?l:"default",mousemove:function(e){t(i,e)},mouseout:function(e){o(i,e)},windowScroll:function(){n(i)},rects:null,mouseX:null,mouseY:null,willUpdate:!1},e.on(i.getWrapperElement(),"mousemove",s.mousemove),e.on(i.getWrapperElement(),"mouseout",s.mouseout),e.on(window,"scroll",s.windowScroll),i.on("cursorActivity",n),i.on("scroll",n))})});