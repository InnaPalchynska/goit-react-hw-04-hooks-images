(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(6),o=n.n(r),s=(n(26),n(11)),i=n(4),u=(n(27),n(20)),l=n.n(u),b=(n(48),n(1));function j(e){var t=e.onSubmit,n=Object(c.useState)(""),a=Object(i.a)(n,2),r=a[0],o=a[1];return Object(b.jsx)("header",{className:"Searchbar",children:Object(b.jsxs)("form",{className:"SearchForm",onSubmit:function(e){e.preventDefault(),t(r)},children:[Object(b.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(b.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(b.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:function(e){var t=e.target.value;o(t)}})]})})}var m=function(e){var t=e.key,n=e.src,c=e.tags,a=e.onClick;return Object(b.jsx)("li",{className:"ImageGalleryItem",children:Object(b.jsx)("img",{src:n,alt:c,className:"ImageGalleryItem-image",onClick:function(e){return a(e.currentTarget)}})},t)};var f=function(e){var t=e.images,n=e.onClick;return Object(b.jsx)("ul",{className:"ImageGallery",children:t&&t.map((function(e){return Object(b.jsx)(m,{src:e.webformatURL,tags:e.tags,onClick:n},e.id)}))})};var h=function(e){var t=e.onClick;return Object(b.jsx)("button",{type:"button",className:"Button",onClick:function(){return t()},children:"Load more"})},d=document.querySelector("#modal-root");var O=function(e){var t=e.modalImage,n=e.onClick;return o.a.createPortal(Object(b.jsx)("div",{className:"Overlay",onClick:function(e){return n(e)},children:Object(b.jsx)("div",{className:"Modal",children:Object(b.jsx)("img",{src:t.src,alt:t.alt})})}),d)},p=n(10),g=n.n(p),x=n(21),v=n(8),k=n.n(v);function y(){return(y=Object(x.a)(g.a.mark((function e(t,n){var c,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k.a.defaults.baseURL="https://pixabay.com/api/",k.a.defaults.params={key:"21988009-297d867560bf729bce41e20bb",image_type:"photo",orientation:"horizontal",per_page:12},e.next=4,k.a.get("",{params:{q:t,page:n}});case 4:return c=e.sent,a=c.data,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),o=Object(i.a)(r,2),u=o[0],m=o[1],d=Object(c.useState)(1),p=Object(i.a)(d,2),g=p[0],x=p[1],v=Object(c.useState)(!1),k=Object(i.a)(v,2),S=k[0],w=k[1],C=Object(c.useState)(!1),N=Object(i.a)(C,2),E=N[0],I=N[1],F=Object(c.useState)(""),L=Object(i.a)(F,2),B=L[0],G=L[1],T=function(e){"Escape"===e.code&&M()},q=function(){(function(e,t){return y.apply(this,arguments)})(u,g).then((function(e){return a([].concat(Object(s.a)(n),Object(s.a)(e.hits)))})).finally((function(){w(!1),J()}))},J=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},M=function(){I((function(e){return!e}))};return Object(c.useEffect)((function(){return window.addEventListener("keydown",T),function(){window.removeEventListener("keydown",T)}}),[]),Object(c.useEffect)((function(){u&&(a([]),x(1),q())}),[u]),Object(c.useEffect)((function(){(u||1!==g)&&q()}),[g]),Object(b.jsxs)(b.Fragment,{children:[S&&Object(b.jsx)(l.a,{type:"Bars",color:"#3f51b5",height:80,width:80}),Object(b.jsx)(j,{onSubmit:function(e){m(e)}}),n&&Object(b.jsx)(f,{images:n,onClick:function(e){G(e),M()}}),n.length>0&&Object(b.jsx)(h,{onClick:function(){x((function(e){return e+1}))}}),E&&Object(b.jsx)(O,{onClick:function(e){e.target===e.currentTarget&&M()},modalImage:B})]})}o.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(S,{})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.5109ebc2.chunk.js.map