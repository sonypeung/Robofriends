(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),c=n.n(o),s=(n(13),n(1)),l=n(2),i=n(4),u=n(3),h=n(5),m=(n(14),function(e){var t=e.id,n=e.name,a=e.email;return r.a.createElement("div",{className:"bg-light-green dib br3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{className:"tc",src:"https://robohash.org/".concat(t,"?200x200"),alt:"myRobot"}),r.a.createElement("div",{className:"tc"},r.a.createElement("h2",null,n),r.a.createElement("p",null,a)))}),b=function(e){var t=e.robots;return r.a.createElement(r.a.Fragment,null,t.map((function(e,t){return r.a.createElement(m,{key:t,id:e.id,name:e.name,email:e.email})})))},d=function(e){var t=e.onKeyPress;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{onChange:t,className:"pa3 ba b--green bg-lightest-blue",type:"search",name:"searchbox",id:"searchbox",placeholder:"search for a robot"}))},f=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"3px solid black",height:"800px"}},e.children)},p=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={hasError:!1},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Sorry, there is an error."):this.props.children}}]),t}(a.Component),E=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).handleKeyPress=function(t){e.setState({searchField:t.target.value})},e.state={robots:[],searchField:""},e}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchField,a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",null,"Robofriends"),r.a.createElement(d,{onKeyPress:this.handleKeyPress}),r.a.createElement(f,null,r.a.createElement(p,null,r.a.createElement(b,{robots:a})))):r.a.createElement("h1",null,"Loading")}}]),t}(a.Component);c.a.render(r.a.createElement(E,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.0063de6d.chunk.js.map