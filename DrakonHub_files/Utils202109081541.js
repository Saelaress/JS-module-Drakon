function UtilsModule(ma){function D(a,b,c,d){this.left=a;this.top=b;this.right=c;this.bottom=d}function T(a,b){this.txt=a||"";this.txt2=b||""}function U(){this.nodes={};this.connect=na;this.getIslands=oa}function na(a,b){if(b){var c=this.nodes,d=H(c,a),c=H(c,b);d[b]=!0;c[a]=!0}}function oa(){for(var a={},b=this.nodes,c=0,d=Object.keys(b),e=d.length;c<e;){var f=d[c];V(f,b,f,a);c++}b=new I;c=0;d=Object.keys(a);for(e=d.length;c<e;)f=d[c],b.add(a[f],f),c++;return b}function V(a,b,c,d){if(!(c in d)){d[c]=
a;var e=b[c];if(e){c=0;for(var e=Object.keys(e),f=e.length;c<f;)V(a,b,e[c],d),c++}}}function v(){this.tokens=[];this.width=0}function W(){this.items={};this.edges={};this.nodes={};this.nonUpdatable={isLine:!0,isVertical:!0,up:!0,down:!0,left:!0,right:!0};this.addItem=pa;this.getNode=qa;this.getItem=ra;this.getEdge=sa;this.removeItem=ta;this.updateNode=ua;this.getNeighbourUp=va;this.getNeighbourDown=wa;this.getMaxId=xa;this.enumerateManhattan=ya;this.getHead=za;this.getTail=Aa;this.clone=Ba;this.getNodeDown=
Ca;this.getNodeLeft=Da;this.getNodeRight=Ea;this.getNodeUp=Fa;this.getNodeDownEx=Ga;this.getNodeLeftEx=Ha;this.getNodeRightEx=Ia;this.getNodeUpEx=Ja;this.checkEdges=Ka;this.edgesIntersect=La;this.buildTeams=Ma;this.getVertical=Na;this.getHorizontal=Oa;this.getVerticalUp=Pa;this.getVerticalDown=Qa;this.getHorizontalRight=Ra}function J(a,b){this.x=a;this.y=b}function X(a){this.map={};this.list=[];this.add=function(a){var b=this.map;a in b||(b[a]=!0,this.list.push(a))};if(a)for(var b=0,c=a.length;b<
c;)this.add(a[b]),b++}function Y(a,b){this.w=a;this.h=b}function Sa(a,b){a in this.set?l('Item "'+a+'" already exists'):(this.set[a]=b,this.list.push(a))}function Ta(a){a=this.list.indexOf(a);var b=this.list.length-1;-1!=a&&a!=b&&K(this.list,b,a)}function Ua(a){return this.set[a]}function Va(){return Z(this.set)}function Wa(a){var b=this.list.indexOf(a);-1!=b&&(this.list.splice(b,1),delete this.set[a])}function Xa(a){a=this.list.indexOf(a);-1!=a&&0!=a&&K(this.list,0,a)}function I(){this.byTeam={};
this.byItem={};this.add=Ya;this.get=Za}function $a(){this.left=new I;this.up=new I}function Ya(a,b){var c=this.byTeam,d=this.byItem,e;a in c?e=c[a]:(e=new X,c[a]=e);b in e.map?l("Item "+b+" is already in team "+a):(e.add(b),d[b]=a)}function Za(a){return this.byTeam[this.byItem[a]]}function E(){this.width=this.height=0;this.lines=[]}function L(a,b){this.type=a;this.text=b}function r(a,b){a.current.push(b)}function M(a,b,c,d){a.map[a.result.length]={pos:c,lineNo:d};a.result+=b}function pa(a){a.id||
l("Missing positive item.id");this.items[a.id]&&l("Item with id '"+a.id+"' already exists");if(a.isLine){this.edges[a.id]=a;var b=a.id,c=a.head,d=a.tail,e=a.isVertical,f=this.getNode(c),h=this.getNode(d);e?f.x==h.x&&f.y<h.y?(y(f.down,"head.down"),y(h.up,"tail.up"),f.down=b,h.up=b):l("Invalid node positons for edge:"+c+", "+d):f.y==h.y&&f.x<h.x?(y(f.right,"head.right"),y(h.left,"tail.left"),f.right=b,h.left=b):l("Invalid node positons for edge:"+c+", "+d)}else this.nodes[a.id]=a,a.left=null,a.up=null,
a.right=null,a.down=null;this.items[a.id]=a}function z(a){0!=a.line.tokens.length&&(a.block.lines.push(a.line),a.x=0,a.ws=[],a.line=new v)}function N(a,b){for(;b.width>a.width;){var c;c=a.render;for(var d=b,e=a.width,f=d.text,h=f.substring(0,1),m=c.measureTextWidth(h),p=2;p<f.length;){var n=f.substring(0,p),t=c.measureTextWidth(n);if(t>e)break;h=n;m=t;p++}c=new L(d.type,h);c.width=m;c.left=0;x(a,c);z(a);m=b;d=m.text;c=d.substring(c.text.length,d.length);b=new L(m.type,c);b.width=O(a.render,b,a.x)}b.text&&
x(a,b)}function x(a,b){b.left=a.x;var c=a.line;c.tokens.push(b);c.width+=b.width;a.x+=b.width}function P(a,b){if(0<b.length){var c=b.join("");a.push(c)}}function A(a,b){a||l("Value is empty: "+b)}function y(a,b){a&&l("Value not empty: "+b)}function aa(a,b,c){return a+"-"+b+"-"+c}function Ma(a){this.horizontals=this.verticals=null;var b=new $a;b.itemIds=Object.keys(this.items);for(var c=new U,d=new U,e=0,f=this.nodes,h=Object.keys(f),m=h.length;e<m;){var p=h[e],n=f[p];c.connect(p,p);c.connect(p,n.up);
c.connect(p,n.down);d.connect(p,p);d.connect(p,n.left);d.connect(p,n.right);if(a){var t=a.vertical(this,n),n=a.horizontal(this,n);c.connect(p,n);d.connect(p,t)}e++}b.up=d.getIslands();b.left=c.getIslands();return b}function Ka(){for(var a=null,b=this.edges,c=Object.keys(b),d=c.length,e=0,e=5080001;;)if(5080001===e)var f=0,h=c,m=h.length,e=5080002;else if(5080002===e)if(f<m)var p=h[f],e=2386;else var n,t,e=23870001;else if(2386===e)var B=b[p],e=507;else if(507===e)var q=this.getNode(B.head),g=this.getNode(B.tail),
e=536;else if(536===e)a=B.isVertical?q.x==g.x&&q.y<g.y?null:"Invalid node positons for V edge:"+B.id:q.y==g.y&&q.x<g.x?null:"Invalid node positons for H edge:"+B.id,e=510;else if(510===e)a?e=2395:(f++,e=5080002);else if(23870001===e)n=0,e=23870002;else if(23870002===e)n<d?(t=n+1,e=23900002):e=2395;else if(23900002===e)if(t<d)var k=c[n],l=c[t],e=2392;else n++,e=23870002;else if(2392===e)this.edgesIntersect(k,l)?(a="Edges "+k+" "+l+" intersect",e=2395):(t++,e=23900002);else if(2395===e)return a}function Ba(){for(var a=
new W,b=0,c=this.nodes,d=Object.keys(c),e=d.length;b<e;){var f=d[b],f=F(c[f]);a.addItem(f);b++}b=0;c=this.edges;d=Object.keys(c);for(e=d.length;b<e;)f=d[b],f=F(c[f]),a.addItem(f),b++;return a}function ba(a){for(var b=G.intFields,c=G.boolFields,d=G.forbidden,e=G.stringFields,f={},h=null,m=0,p=Object.keys(a),n=p.length;m<n;){var t=p[m],g=a[t],q=null;t in d||null===g||g===ma||(t in b?(q=parseInt(g,10),isFinite(q)&&null!=q&&(f[t]=q)):("text"==t?(h||(f.content=new T(String(g),"")),q=null):q="content"==
t?h=g:t in c?ca(g):t in e?String(g):g,null!=q&&(f[t]=q)));m++}return f}function Q(a){for(var b={},c=0,d=Object.keys(a),e=d.length;c<e;){var f=d[c],h=ba(a[f]);b[f]=h;c++}return b}function F(a){var b={};if(a)for(var c=0,d=Object.keys(a),e=d.length;c<e;){var f=d[c];b[f]=a[f];c++}return b}function R(a){if(a&&"object"==typeof a){var b,c;if(Array.isArray(a)){b=[];for(var d=0,e=a.length;d<e;)c=R(a[d]),b.push(c),d++}else{b={};for(var d=0,e=Object.keys(a),f=e.length;d<f;){var h=e[d];c=R(a[h]);b[h]=c;d++}}return b}return a}
function u(a,b){if(0!==a.current.length){var c=a.current;a.current=[];for(var d="",e=0,f=c.length;e<f;)d+=String.fromCharCode(c[e]),e++;c=new L(b,d);a.tokens.push(c)}}function ab(a,b){return(this.a*a+this.b*b+this.c)/this.div}function La(a,b){var c=this.edges,d=c[a],c=c[b];return d.isVertical?c.isVertical?!1:da(this,d,c):c.isVertical?da(this,c,d):!1}function da(a,b,c){var d=a.nodes;a=d[b.head];b=d[b.tail];var e=d[c.head];c=d[c.tail];return e.y>a.y&&e.y<b.y&&e.x<=a.x&&c.x>=a.x||e.y>=a.y&&e.y<=b.y&&
e.x<a.x&&c.x>a.x?!0:!1}function ya(a,b,c){if(!(a in b)){b[a]=!0;var d=this.getNode(a);d.left&&(c[d.left]=!0,a=this.getNodeLeft(d),this.enumerateManhattan(a,b,c));d.up&&(c[d.up]=!0,a=this.getNodeUp(d),this.enumerateManhattan(a,b,c));d.right&&(c[d.right]=!0,a=this.getNodeRight(d),this.enumerateManhattan(a,b,c));d.down&&(c[d.down]=!0,a=this.getNodeDown(d),this.enumerateManhattan(a,b,c))}}function w(a,b,c,d,e){for(;;){var f=a.getNode(b)[c];if(!f)break;b=a.getEdge(f)[d];e.push(f);e.push(b)}}function O(a,
b,c){"\t"==b.text?(a=a.measureTextWidth(" "),b=4*a,c=Math.ceil((c+a)/b)*b-c):c=a.measureTextWidth(b.text);return c}function ea(a){var b="",c="";if(a){var d=a.length,e;for(e=0;e<d;){0<e&&0==e%4&&(c+=" ");var f=String.fromCharCode(a[e]+48),b=b+f,c=c+f;e++}}return{plain:b,formatted:c}}function sa(a){var b=this.edges[a];if(b)return b;l("Edge '"+a+"' not found")}function za(a){return this.getNode(a.head)}function Oa(a){a=C(this,a);var b=[a];w(this,a,"left","head",b);w(this,a,"right","tail",b);return b}
function Ra(a){a=C(this,a);var b=[];w(this,a,"right","tail",b);return b}function ra(a){var b=this.items[a];if(b)return b;l("Item '"+a+"' not found")}function xa(){return Z(this.items)}function wa(a){a=this.getNode(a);return this.getEdge(a.down).tail}function va(a){a=this.getNode(a);return this.getEdge(a.up).head}function qa(a){var b=this.nodes[a];if(b)return b;l("Node '"+a+"' not found")}function Ca(a){return this.getEdge(a.down).tail}function Ga(a){a=this.getEdge(a.down);return this.getNode(a.tail)}
function Da(a){return this.getEdge(a.left).head}function Ha(a){a=this.getEdge(a.left);return this.getNode(a.head)}function Ea(a){return this.getEdge(a.right).tail}function Ia(a){a=this.getEdge(a.right);return this.getNode(a.tail)}function Fa(a){return this.getEdge(a.up).head}function Ja(a){a=this.getEdge(a.up);return this.getNode(a.head)}function H(a,b,c){if(b in a)return a[b];c=null==c?{}:c;return a[b]=c}function Aa(a){return this.getNode(a.tail)}function Na(a){a=C(this,a);var b=[a];w(this,a,"up",
"head",b);w(this,a,"down","tail",b);return b}function Qa(a){a=C(this,a);var b=[a];w(this,a,"down","tail",b);return b}function Pa(a){a=C(this,a);var b=[a];w(this,a,"up","head",b);return b}function bb(a){return a.match(RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi))}function fa(a){if(0===a.length)return 0;for(var b=-Number.MAX_VALUE,c=0,d=a.length;c<d;){var e=a[c],e=isNaN(e)?parseFloat(e):e;b<e&&(b=e);c++}return b}function Z(a){a=Object.keys(a).map(function(a){return parseInt(a,
10)});return fa(a)}function ga(a){a=(a||"").toLowerCase();var b,c=new cb;c.result="";c.map=[];var d=0,e=0;for(b=0;b<a.length;){var f=a[b],h=a.charCodeAt(b);c.map.push(null);f in db&&(f=" ",h=32);10==h?(c.space(" ",e,d),d++,e=0):(13!=h&&(32==h||9==h?c.space(" ",e,d):c.symbol(f,e,d)),e++);b++}return{text:c.result,map:c.map}}function ca(a){return"boolean"==typeof a?a:"true"==a}function ha(a){if(a){var b=[],c=a.length,d;for(d=0;;){if(!(d<c))return b;var e=a.charCodeAt(d);if(48<=e&&57>=e)b.push(e-48);
else if(9!=e&&32!=e)return null;d++}}else return null}function ia(a){var b=a.split(" "),c=0;a={};"italic"==b[c]?(c++,a.italic=!0):a.italic=!1;"bold"==b[c]?(c++,a.bold=!0):a.bold=!1;var d=b[c];c++;d=d.slice(0,d.length-2);a.size=parseInt(d);b=b.slice(c);a.family=b.map(eb).join(" ");return a}function ta(a){var b=this.getItem(a);if(b.isLine){var c=b.tail,d=b.isVertical,b=this.getNode(b.head),c=this.getNode(c);d?(A(b.down,"head.down"),A(c.up,"tail.up"),b.down=null,c.up=null):(A(b.right,"head.right"),A(c.left,
"tail.left"),b.right=null,c.left=null);delete this.edges[a]}else b.left||b.right||b.up||b.down?l("Node "+a+" has edges"):delete this.nodes[a];delete this.items[a]}function g(a){a=a.charCodeAt(0);k.OP_CHARS[a]=!0}function ja(a){var b=this.SNAP_SIZE;this.acc+=a;a=Math.round(this.acc/b)*b;0==a?(this.step=!1,this.snapped=0):(this.acc-=a,this.step=!0,this.snapped=a)}function ka(a,b){var c=Math.floor(a/b);return c*b===a?a:(c+1)*b}function la(a,b){if(a){for(var c=!0,d=[],e="",f=a.length,h=0;h<f;){var m=
a[h];c?m in b||(e+=m,c=!1):m in b?(d.push(e),e="",c=!0):e+=m;h++}e&&d.push(e);return d}return[]}function eb(a){0!=a.length&&"'"==a[0]&&(a=a.slice(1));0!=a.length&&"'"==a[a.length-1]&&(a=a.slice(0,a.length-1));return a}function K(a,b,c){var d=a[b];a[b]=a[c];a[c]=d}function l(a){var b=Error(a);CallTrace.add("Exception",[a,b.stack]);throw b;}function C(a,b){var c=a.getItem(b);return c.isLine?c.head:b}function S(a,b){var c=new fb;c.current=[];c.tokens=[];if(a){for(var d=a.length,e=0;e<d;){var f=a.charCodeAt(e);
if(f>=k.ZERO&&f<=k.NINE)c.digit(f);else{var h;if(h=b)h=k.OP_CHARS[f]?!0:!1;h?c.operator(f):13!=f&&(h=32==f||9==f||10==f||13==f?!0:!1,h?c.whitespace(f):c.letter(f))}e++}c.whitespace(k.SPACE);c.tokens.pop()}return c.tokens}function ua(a){for(var b=this.getNode(a.id),c=0,d=Object.keys(a),e=d.length;c<e;){var f=d[c],h=a[f];if(this.nonUpdatable[f]){l("Field '"+f+"' cannot be updated.");break}b[f]=h;c++}}function fb(){var a=this;a.type_name="Lexer";a.state="idle";a.digit=function(b){var c=a.state;if("idle"==
c)r(a,b),a.state="number";else if("identifier"==c)r(a,b),a.state="identifier";else if("number"==c)r(a,b),a.state="number";else return null};a.letter=function(b){var c=a.state;if("idle"==c)r(a,b),a.state="identifier";else if("identifier"==c)r(a,b),a.state="identifier";else if("number"==c)r(a,b),a.state="number";else return null};a.operator=function(b){var c=a.state;if("idle"==c)r(a,b),u(a,"op"),a.state="idle";else if("identifier"==c)u(a,"id"),r(a,b),u(a,"op"),a.state="idle";else if("number"==c)u(a,
"num"),r(a,b),u(a,"op"),a.state="idle";else return null};a.whitespace=function(b){var c=a.state;if("idle"==c)r(a,b),u(a,"ws"),a.state="idle";else if("identifier"==c)u(a,"id"),r(a,b),u(a,"ws"),a.state="idle";else if("number"==c)u(a,"num"),r(a,b),u(a,"ws"),a.state="idle";else return null}}function cb(){var a=this;a.type_name="StringNormalizer";a.state="Start";a.line=function(b,c,d){if("Start"==a.state)a.state="Start";else return null};a.space=function(b,c,d){b=a.state;if("Normal"==b)a.state="Whitespace";
else if("Whitespace"==b)a.state="Whitespace";else return null};a.symbol=function(b,c,d){var e=a.state;if("Start"==e)M(a,b,c,d),a.state="Normal";else if("Normal"==e)M(a,b,c,d),a.state="Normal";else if("Whitespace"==e)a.result+=" ",M(a,b,c,d),a.state="Normal";else return null}}function gb(){var a=this;a.type_name="FlowMachine";a.state="LineStart";a.normal=function(b){var c=a.state;if("LineStart"==c)N(a,b),a.state="InsideLine";else if("InsideLine"==c)a.x+b.width>a.width?(z(a),N(a,b)):x(a,b),a.state=
"InsideLine";else if("InsideLineWs"==c){if(a.x+b.width>a.width)z(a),N(a,b);else{a.x=a.wsStart;for(var c=0,d=a.ws,e=d.length;c<e;)x(a,d[c]),c++;a.ws=[];x(a,b)}a.state="InsideLine"}else return null};a.whitespace=function(b){var c=a.state;if("LineStart"==c)a.x+b.width>a.width?(z(a),a.state="InsideLine"):(x(a,b),a.state="LineStart");else if("InsideLine"==c)a.wsStart=a.x,a.ws.push(b),a.x+=b.width,a.state="InsideLineWs";else if("InsideLineWs"==c)a.ws.push(b),a.x+=b.width,a.state="InsideLineWs";else return null}}
var k={initialized:!1},G=new function(){this.intFields={x:!0,y:!0,w:!0,h:!0,a:!0,b:!0,flag1:!0};this.boolFields={isLine:!0,isVertical:!0};this.forbidden={left:!0,right:!0,up:!0,down:!0,tb:!0,tb2:!0,text2:!0,group:!0,box:!0};this.stringFields={id:!0,head:!0,tail:!0}};this.copyBox=function(a){return new D(a.left,a.top,a.right,a.bottom)};this.expandBox=function(a,b){return new D(a.left-b,a.top-b,a.right+b,a.bottom+b)};this.boxFromPoint=function(a,b,c,d){return new D(a-c,b-d,a+c,b+d)};this.mergeSets=
function(a,b){for(var c=0,d=Object.keys(b),e=d.length;c<e;){var f=d[c];a[f]=b[f];c++}};this.copyObject=F;this.copyObjectDeep=R;this.objectValues=function(a){for(var b=[],c=0,d=Object.keys(a),e=d.length;c<e;)b.push(a[d[c]]),c++;return b};this.assertNull=y;this.splitToLines=function(a){var b=[];if(a){for(var c="",d="",e=1,f=a.length,h=0;h<f;){var m=a.charCodeAt(h);if(13!==m)if(1===e)10===m?(b.push(c),c=""):9===m?(d="    ",e=2):32===m?(d=" ",e=2):c+=String.fromCharCode(m);else{if(2!==e)throw"Unexpected switch value: "+
e;10===m?(b.push(c),d=c="",e=1):9===m?d+="    ":32===m?d+=" ":(c+=d,d="",c+=String.fromCharCode(m),e=1)}h++}0!==c.length&&b.push(c)}return b};this.snapMove=ja;this.Snapper=function(a){this.snapped=this.acc=0;this.step=!1;this.SNAP_SIZE=a||10;this.snapMove=ja};this.snapUp=function(a){return a=ka(a,Config.SIZE_SNAP)};this.max=fa;this.assertNotNull=A;this.Box=D;this.Point=J;this.Size=Y;this.Content=T;this.copyPoint=function(a){return new J(a.x,a.y)};this.Manhattan=W;this.listToSet=function(a){var b=
{};if(a)for(var c=0,d=a.length;c<d;)b[a[c]]=!0,c++;return b};this.hardWrap=function(a,b){var c;if(!a||a.length<=b)c=a;else{c=[];for(var d=0,e=a.split("\n"),f=e.length;d<f;){var h=e[d],m=b,p=c;if(h.length<=m)p.push(h);else{for(var n=h.split(" "),g=0,h=[],k=0,q=void 0,l=void 0,r=[],u=n.length,q=0;q<u;)l=n[q],""!=l&&r.push(l),q!=u-1&&r.push(" "),q++;n=r;for(q=n.length;k<q;){l=n[k];if(l.length+g>m)if(l.length>m)for(;r=m-g,u=l.substring(0,r),l=l.substring(r,l.length),h.push(u),u.length+g==m?(P(p,h),g=
0,h=[]):g+=u.length,0<l.length;);else P(p,h),h=[l],g=l.length;else h.push(l),g+=l.length;k++}P(p,h)}d++}c=c.join("\n")}return c};this.addNotNilToSet=function(a,b){b&&(a[b]=!0)};this.hitBox=function(a,b,c){return b<a.left||b>a.right||c<a.top||c>a.bottom?!1:!0};this.boxesIntersect=function(a,b){return a.right<=b.left||b.right<=a.left||a.bottom<=b.top||b.bottom<=a.top?!1:!0};this.Set=X;this.tokenize=S;this.buildBlock=function(a,b){for(var c=S(b,!1),d=new v,e=new E,f=0,h=0,m=c.length;h<m;){var g=c[h];
if("\n"==g.text)d.width=f,e.lines.push(d),d=new v,f=0;else{var n=O(a,g,f);g.left=f;g.width=n;f+=n;d.tokens.push(g)}h++}d.width=f;e.lines.push(d);for(var c=a.getFontHeight(),f=Math.round(c*(Config.LINE_SPACING-1)),h=0,m=c,g=0,n=e.lines,l=n.length;g<l;)d=n[g],h=Math.max(h,d.width),d.bottom=m,m+=c+f,g++;e.width=h;d=e.lines.length;e.height=d*c+(d-1)*f;return e};this.buildFlow=function(a,b,c){var d=S(b,!1);b=[];for(var e=new v,f=0,h=d.length;f<h;){var g=d[f];"\n"==g.text?(b.push(e),e=new v):e.tokens.push(g);
f++}b.push(e);g=0;d=new E;f=0;for(h=b.length;f<h;){var e=b[f],p;p=a;var n=e.tokens,l=c;if(0==n.length)e=new E,e.lines.push(new v),p=e;else{e=new gb;e.render=p;e.width=l;e.block=new E;e.line=new v;e.ws=[];p=e.x=0;for(l=n.length;p<l;){var k=e,q=n[p];q.width=O(k.render,q,k.x);"ws"==q.type?k.whitespace(q):k.normal(q);p++}z(e);p=e.block}for(var e=d,n=a.getFontHeight(),l=Math.round(n*(Config.LINE_SPACING-1)),k=0,q=p.lines,r=q.length;k<r;){var u=q[k];0!=g&&(g+=l);g+=n;u.bottom=g;e.lines.push(u);k++}e=p.lines.length;
p.height=e*n+(e-1)*l;f++}d.width=c;d.height=g;return d};this.Command=function(a,b,c,d){this.type=a;this.table=b;this.id=c;this.fields=d||{};this.undo=null};this.sanitizeDiagram=function(a){var b={name:a.name,type:a.type,nodes:Q(a.nodes),edges:Q(a.edges)};b.background=a.background||"";b.diaLine=a.diaLine||"";b.diaLineThickness=a.diaLineThickness||"";b.font=a.font||"";b.version=a.version||0;a.free&&(b.free=Q(a.free));return b};this.copyItem=ba;this.parseBool=ca;this.unique=function(a){for(var b={},
c=0,d=a.length;c<d;)b[a[c]]=!0,c++;return Object.keys(b)};this.copyList=function(a){var b=[];if(a)for(var c=0,d=a.length;c<d;)b.push(a[c]),c++;return b};this.subtract=function(a,b){for(var c=[],d=0,e=Object.keys(a),f=e.length;d<f;){var h=e[d];h in b||c.push(h);d++}return c};this.makeErrorMessage=function(a){return a?a.error?a.error:"string"==typeof a?a:a.toString():"ERR_ERROR"};this.count=function(a){return a?Object.keys(a).length:0};this.swap=K;this.SortedSet=function(){this.list=[];this.set={};
this.add=Sa;this.remove=Wa;this.get=Ua;this.bringToFront=Ta;this.sendToBack=Xa;this.getMaxId=Va};this.sortLinkedList=function(a,b){for(var c={},d=null,e=0,f=Object.keys(a),h=f.length;e<h;){var g=f[e],k=a[g][b];k?k in a?c[k]=g:l("Bad next"):d=g;e++}null==d&&0!=Object.keys(a).length&&l("No end in linked list");for(e=[];d;)e.push(a[d]),d=c[d];e.reverse();return e};this.snapPos=function(a){return a=ka(a,Config.SNAP)};this.isColor=function(a){return a&&"string"==typeof a&&"7"==a.length&&(a[0]="#")?(a=
"0x"+a.slice(1),a=parseInt(a),isNaN(a)?!1:!0):!1};this.buildFontString=function(a,b,c,d){var e="";a&&(e+="italic ");b&&(e+="bold ");e+=c.toString()+"px ";-1!=d.indexOf(" ")&&(d="'"+d+"'");return e+d};this.parseFontString=ia;this.canInsertInHorizontal=function(a,b){if(b.isVertical)return!1;var c=a.getHead(b),d=a.getTail(b);return"question"==c.type&&"junction"==d.type&&d.up?!0:!1};this.shallowEquivalent=function(a,b){if(a)if(b){var c=Object.keys(a),d=Object.keys(b);if(c.length===d.length)for(var d=
c.length,e=0;;){if(!(e<d))return!0;var f=c[e];if(a[f]!=b[f])return!1;e++}else return!1}else return!1;else return b?!1:!0};this.lineFrom2Points=function(a,b,c,d){var e=b-d,f=c-a;a=a*d-c*b;b=Math.sqrt(e*e+f*f);return{a:e,b:f,c:a,div:b,distanceToPoint:ab}};this.checkSpaceName=function(a){if(a){a=a.trim();if(0==a.length)return"ERR_EMPTY_NAME";if(2>a.length)return"ERR_NAME_TOO_SHORT";if(70<a.length)return"ERR_NAME_TOO_LONG";a:for(var b=a.length,c=!1,d=0;;){if(!(d<b)){a=c;break a}var e=a.charCodeAt(d);
if(e>=k.ZERO&&e<=k.NINE||e>=k.a&&e<=k.z||e>=k.A&&e<=k.Z)c=!0;else if(e!=k.UNDER&&e!=k.DASH&&e!=k.DOT){a=!1;break a}d++}return a?null:"ERR_NAME_INVALID"}return"ERR_EMPTY_NAME"};this.findManySubstrings=function(a,b,c){var d,e=[];if(a&&b){var f=a.split("\n");for(a=0;a<f.length;){d=line=f[a];c&&(line=line.toLowerCase());for(var h=a+1,g=b,k=e,l=void 0,t=line,r=0;;){l=t.indexOf(g);if(-1==l)break;var q=l+g.length;k.push({line:d,first:l+r+1,last:r+q,lineNo:h});t=t.substring(q);r+=q}a++}}return e};this.monthsToSecs=
function(a){return Math.round(2629800*a)};this.daysToSecs=function(a){return 86400*a};this.timeNow=function(){return Math.round((new Date).getTime()/1E3)};this.localizeDate=function(a,b){var c=new Date(1E3*a),d=c.getMonth()+1,e=c.getDate(),c=c.getFullYear(),d=b("MES_MONTH_"+d);return e+"-"+d+"-"+c};this.parseSearch=function(a){var b={};if(a){a=a.substring(1);var c=0;a=a.split("&");for(var d=a.length;c<d;){var e=a[c].split("="),f=e[0],e=e[1];f.length&&e.length&&(b[f]=e);c++}}return b};this.checkCardNumber=
function(a){if(a){a=ha(a);var b;if(b=a&&13<=a.length&&19>=a.length){b=0;var c=a.length,d;for(d=0;d<c;){var e=a[c-d-1];1==d%2&&(e*=2,e=9<e?e-9:e);b+=e;d++}b=0==b%10}return b?ea(a):null}return null};this.pad=function(a,b){var c="000000000000"+a.toString();return c.substr(c.length-b)};this.prettyPrintCard=function(a){a=ha(a);return ea(a)};this.caretToNonSpaces=function(a,b){var c=0,d,e=Math.min(a.length,b);for(d=0;d<e;)" "!=a[d]&&c++,d++;return c};this.nonSpacesToCaret=function(a,b){var c;for(c=0;c<
a.length&&0!=b;)" "!=a[c]&&b--,c++;return c};this.printAmount=function(a,b){return isNaN(a)||!b?"":b+" "+a.toFixed(2)};this.parseYyyyMmDd=function(a){var b=a.split("-");a=parseInt(b[0]);var c=parseInt(b[1])-1,b=parseInt(b[2]);return new Date(a,c,b)};this.copySize=function(a){return new Y(a.w,a.h)};this.findAngle=function(a,b,c,d){a=c-a;b=d-b;d=Math.sqrt(a*a+b*b);d=Math.acos(a/d);return 0<=b?d:-d};this.rotatePoint=function(a,b){var c=b.x,d=b.y,e=Math.cos(a),f=Math.sin(a);return new J(c*e-d*f,c*f+d*
e)};this.oppositeAngle=function(a){return 0<a?a-Math.PI:a+Math.PI};this.checkEmail=function(a){return a?(a=a.trim())?/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(a)?!0:!1:!1:!1};this.randomString=function(a){var b="",c;for(c=0;c<a;)b+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(62*Math.random())),c++;return b};this.split=la;this.extractUrls=function(a){return la(a,
hb).filter(bb)};this.checkPassword=function(a,b){return a?a==b?6>a.length?"ERR_PASSWORD_TOO_SHORT":null:"ERR_PASSWORDS_DIFFERENT":"ERR_PASSWORD_EMPTY"};this.truncateText=function(a,b){return a.length<=b?a:a.substring(0,b)+"..."};this.throwError=l;this.normalizeString=ga;this.findNormSubstring=function(a,b){if(a&&b){var c=ga(a),d=c.text.indexOf(b);if(-1==d)return null;var e=a.split("\n"),f=c.map[d],e=e[f.lineNo],c=c.map[d+b.length-1];c.lineNo==f.lineNo?(c=c.pos+1,c>e.length&&(c=e.length)):c=e.length;
return{line:e,start:f.pos,length:c-f.pos}}return null};this.addRange=function(a,b){for(var c=0,d=a.length;c<d;)b.push(a[c]),c++};this.stringContains=function(a,b){return a&&b&&-1!=a.indexOf(b)?!0:!1};this.LogicalTree=function(a){this.nodes={};this.links={};this.root=a};this.getOrCreate=H;this.addLogicalTreeNode=function(a,b){var c=F(b.content),c={id:b.id,type:b.type,w:b.w,h:b.h,content:c};"a"in b&&(c.a=b.a);a.nodes[b.id]=c};this.createLogicalTreeLinks=function(a,b,c,d){a.links[b]={type:c?"vertical":
"horizontal",children:d}};this.findFirst=function(a,b){if(a)for(var c=0,d=a.length;;){if(!(c<d))return null;var e=a[c];if(b(e))return e;c++}else return null};this.deleteFirst=function(a,b){var c;if(a)for(c=0;;){if(!(c<a.length))return null;var d=a[c];if(b(d))return a.splice(c,1),d;c++}else return null};this.startsWith=function(a,b){return a&&b&&a.length>=b.length?a.substring(0,b.length)==b:!1};this.buildFontFace=aa;this.fontToFace=function(a){a=ia(a);return aa(a.italic,a.bold,a.family)};this.parseFontFace=
function(a){a=a.split("-");return{italic:"true"==a[0],bold:"true"==a[1],family:a[2]}};(function(){if(!k.initialized){k.OP_CHARS=[];k.initialized=!0;for(var a=0;256>a;)k.OP_CHARS[a]=!1,a++;g("!");g(";");g("?");g("=");g("<");g(">");g("-");g("+");g("/");g("\\");g("*");g("%");g("(");g(")");g("(");g(")");g("{");g("}");g("[");g("]");g(":");g(".");g("#");g(",");g("^");g("|");g("&");g("'");g('"');k.ZERO=48;k.NINE=57;k.UNDER=95;k.SPACE=32;k.a=97;k.z=122;k.A=65;k.Z=90;k.DOT=46;k.DASH=45}})();var hb={" ":!0,
"\t":!0,"\r":!0,"\n":!0,",":!0,";":!0,"(":!0,")":!0,"[":!0,"]":!0,"<":!0,">":!0,"|":!0},db={"{":!0,"}":!0,"-":!0,_:!0,"/":!0,"+":!0,"*":!0,"\\":!0,"%":!0,"&":!0,"^":!0,"=":!0,"?":!0,"!":!0,'"':!0,"'":!0,".":!0,",":!0,";":!0,":":!0,"(":!0,")":!0,"[":!0,"]":!0,"<":!0,">":!0,"|":!0}}var Utils=new UtilsModule;"undefined"!==typeof exports&&(exports.Utils=Utils);
