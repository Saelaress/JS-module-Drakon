function Multitouch(h){function g(a){var b=a.touches;a=[];for(var c=0;c<b.length;){var d=b.item(c);a.push({button:0,screenX:d.screenX,screenY:d.screenY,clientX:d.clientX,clientY:d.clientY,pageX:d.pageX,pageY:d.pageY,target:d.target});c++}if(0==a.length)return null;b=a[0];null!=l&&(b.dx=b.pageX-l,b.dy=b.pageY-p);l=b.pageX;p=b.pageY;return a}function r(a){var b=e[0],c=a[0];e=a;return new Utils.Point(c.pageX-b.pageX,c.pageY-b.pageY)}function t(a,b){var c=h.getZoom();h.scrollBy(a/c,b/c)}function u(a,
b){if(DTools.isOn())for(var c=0,d=a.touches,e=d.length;c<e;){var f=d[c];DTools.print(b+" "+Math.floor(f.clientX)+" "+Math.floor(f.clientY)+" "+f.identifier+" "+a.changedTouches.length);c++}}function q(){var a=h.toDiagram(e[0]);f.touchStart(a);for(var a=0,b=m,c=b.length;a<c;){var d=b[a],g=h.toDiagram(d[0]);f.touchMove(g);e=d;a++}m=[]}function k(a){a=h.toDiagram(a[0]);f.touchEnd(a)}var f=null,l=0,p=0,e=null,m=null;this.touchstart=function(a){u(a,"start");n.touchstart(a)};this.touchend=function(a){n.touchend(a)};
this.touchmove=function(a){u(a,"move");n.touchmove(a)};this.touchcancel=function(a){n.touchcancel(a)};this.setBeh=function(a){f=a};var n=new function(){var a=this;a.type_name="Multi";a.state="idle";a.timeout=function(b){if("one_or_two"==a.state)q(),a.state="single";else return null};a.touchcancel=function(b){b=a.state;if("idle"==b)a.state="idle";else if("one_or_two"==b)q(),k(e),a.state="idle";else if("single"==b)k(e),a.state="idle";else if("detection"==b)a.state="idle";else if("pan"==b)a.state="idle";
else if("zoom"==b)f.finishZoom(),a.state="idle";else return null};a.touchend=function(b){b=a.state;if("idle"==b)a.state="idle";else if("one_or_two"==b)q(),k(e),a.state="idle";else if("single"==b)k(e),a.state="idle";else if("detection"==b)a.state="idle";else if("pan"==b)a.state="idle";else if("zoom"==b)f.finishZoom(),a.state="idle";else return null};a.touchmove=function(b){var c=a.state;if("idle"==c)a.state="idle";else if("one_or_two"==c)(b=g(b))&&m.push(b),a.state="one_or_two";else if("single"==c){if(b=
g(b))e=b,b=h.toDiagram(b[0]),f.touchMove(b);a.state="single"}else if("detection"==c)(b=g(b))?(b=r(b),t(b.x,b.y),a.state="pan"):a.state="detection";else if("pan"==c){if(b=g(b))b=r(b),t(b.x,b.y);a.state="pan"}else if("zoom"==c){if(c=g(b)){b=c[0];var d=c[1],c=b.pageX-d.pageX;b=b.pageY-d.pageY;b=Math.sqrt(c*c+b*b)/0*1;h.zoomAt(null,b)}a.state="zoom"}else return null};a.touchstart=function(b){var c=a.state;if("idle"==c)c=0,p=l=null,(b=g(b))?(e=b,m=[],c=b.length,1===c?(f.setTimeout(a,100),a.state="one_or_two"):
a.state=2===c?"detection":"idle"):a.state="idle";else if("one_or_two"==c)(b=g(b))?(e=b,a.state="detection"):a.state="one_or_two";else if("single"==c)k(e),a.state="idle";else if("detection"==c)a.state="idle";else if("pan"==c)a.state="idle";else if("zoom"==c)a.state="idle";else return null}}};
