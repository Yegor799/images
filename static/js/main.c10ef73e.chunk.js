(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{28:function(e,t,a){},71:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(6),o=a.n(r),s=(a(28),a(11)),u=a.n(s),i=a(12),l=a(21),j=a(4),b=a(8),m=a(22),g=a.n(m),f=a(23),O=a.n(f),h=(a(69),a(70),a(71),a(1));var p=function(e){var t=e.onSubmit,a=Object(c.useState)(""),n=Object(j.a)(a,2),r=n[0],o=n[1];return Object(h.jsx)("header",{className:"Searchbar",children:Object(h.jsxs)("form",{className:"SearchForm",onSubmit:function(e){e.preventDefault(),""!==r.trim()?(t(r),o("")):b.b.error("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441.")},children:[Object(h.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(h.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(h.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:r,onChange:function(e){o(e.currentTarget.value.toLowerCase())}})]})})},d=(a(73),a(79));a(74);var x=function(e){var t=e.webformatURL,a=e.largeImageURL,c=e.getLargeImage,n=e.tag;return Object(h.jsx)("li",{className:"ImageGalleryItem",children:Object(h.jsx)("img",{src:t,"data-source":a,alt:n,className:"ImageGalleryItem-image",onClick:function(e){c(e.target.getAttribute(["data-source"]))}})})};var v=function(e){var t=e.pictures,a=e.getLargeImage;return Object(h.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){return Object(h.jsx)(x,{webformatURL:e.webformatURL,largeImageURL:e.largeImageURL,tag:e.tags,getLargeImage:a},Object(d.a)())}))})};a(75);var y=function(e){var t=e.onClose,a=e.largeImage;return window.addEventListener("keydown",(function(e){"Escape"===e.code&&t()})),Object(h.jsx)("div",{className:"Overlay",onClick:function(e){e.currentTarget===e.target&&t()},children:Object(h.jsx)("div",{className:"Modal",children:Object(h.jsx)("img",{src:a,alt:"123"})})})};a(76);var S=function(e){var t=e.onClick;return Object(h.jsx)("button",{type:"button",className:"Button",onClick:t,children:"Load More"})};var I=function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(!1),o=Object(j.a)(r,2),s=o[0],m=o[1],f=Object(c.useState)(""),d=Object(j.a)(f,2),x=d[0],I=d[1],w=Object(c.useState)([]),L=Object(j.a)(w,2),N=L[0],k=L[1],C=Object(c.useState)(null),F=Object(j.a)(C,2),E=F[0],R=F[1],U=Object(c.useState)(1),A=Object(j.a)(U,2),B=A[0],G=A[1],M=Object(c.useState)(!1),T=Object(j.a)(M,2),J=T[0],_=T[1];Object(c.useEffect)((function(){""!==a&&function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,_(!0),e.next=4,g.a.get("https://pixabay.com/api/?q=".concat(a,"&page=").concat(B,"&key=").concat("18976162-4407e31cd80a0810b100a4c9f","&image_type=photo&orientation=horizontal&per_page=12"));case 4:t=e.sent,k((function(e){return[].concat(Object(i.a)(e),Object(i.a)(t.data.hits))})),R(""),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),R("Error while loading data. Try again later.");case 12:return e.prev=12,_(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}()()}),[B,a]),Object(c.useEffect)((function(){G(1),k("")}),[a]);var q=function(){m(!s)};return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(b.a,{autoClose:3e3}),Object(h.jsx)(p,{onSubmit:n}),J&&Object(h.jsx)(O.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3}),E&&Object(h.jsx)("h2",{children:E}),0===N.length&&a.length>0&&Object(h.jsx)("h2",{style:{textAlign:"center"},children:"No results were found for your search"}),N.length>0&&Object(h.jsx)(v,{pictures:N,getLargeImage:function(e){I(e),q()}}),N.length>1&&Object(h.jsx)(S,{onClick:function(){return G((function(e){return e+1}))}}),s&&Object(h.jsx)(y,{largeImage:x,onClose:q})]})};o.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(I,{})}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.c10ef73e.chunk.js.map