function NavModule(d,f){var c=null,e=this,c=new function(){var a=this;a.type_name="PushStateMachine";a.state="Init";a.go=function(b){b=a.state;if("Init"==b)a.state="Init";else if("Go"==b)a.state="Go";else if("Nav"==b)a.state="Go";else return null};a.nav=function(b){b=a.state;if("Init"==b)a.state="Init";else if("Go"==b)a.state="Nav";else if("Nav"==b)a.state="Nav";else return null};a.push=function(b){var c=a.state;if("Init"==c)a.pageId=1,b.pageId=a.pageId,a.pageId++,d.history.replaceState(b,b.title,
b.url),a.state="Go";else if("Go"==c)b.pageId=a.pageId,a.pageId++,d.history.pushState(b,b.title,b.url),a.state="Go";else if("Nav"==c)console.log("nav"),a.state="Go";else return null}};this.onStateChange=function(a){a=a.state;c.nav();a.data?(c.pageId=a.pageId,e.stateCallback&&e.stateCallback(a.data,function(){c.go()})):(a.pageId>c.pageId?d.history.forward():a.pageId<c.pageId&&d.history.back(),c.go())};this.pushState=function(a,b,d){c.push({data:a,title:b,url:d})}}var Nav=new NavModule(window,document);
