(this["webpackJsonpreact-slider-color-picker-example"]=this["webpackJsonpreact-slider-color-picker-example"]||[]).push([[0],{17:function(e,a,r){"use strict";r.r(a);r(5);var n=r(0),t=r.n(n),o=r(7),l=r.n(o),c=r(1),d=r(8),i=r(2),h=r(4),b=r.n(h);function g(){return(g=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var u=function(e){var a,r=Object(n.useState)(!1),t=r[0],o=r[1],l=Object(n.useState)(!1),c=l[0],d=l[1],h={boxSizing:"border-box",border:"none",width:(a=c?1.6:1.4)+"em",height:a+"em",borderRadius:"50%",borderStyle:"solid",borderColor:"#faf6f6",borderWidth:"0.37em",boxShadow:e.disabled?"0.1em 0.1em 0.3em 0 rgba(0, 0, 0, 0.25)":"0.1em 0.1em 0.3em 0 rgba(0, 0, 0, 0.75)",background:""+(e.disabled?"#ddd":e.thumbBackground)},b={boxSizing:"border-box",border:"none",height:"0.88em",borderRadius:"0.44em",background:""+(e.disabled?"#ddd":e.trackBackground)},u=Object(i.a)({touchAction:"none",WebkitAppearance:"none",width:"100%",height:"2.25em",margin:0,padding:0,font:"1em/1 arial, sans-serif","&::-webkit-slider-runnable-track":b,"&::-moz-range-track":b,"&::-ms-track":b,"&::-webkit-slider-thumb":g({WebkitAppearance:"none",marginTop:.5*(.88-a)+"em","&:active":{marginTop:.5*(.88-1.6)+"em",width:"1.6em",height:"1.6em"},"@media (hover: hover)":{"&:hover":{marginTop:(!e.disabled&&.5*(.88-1.6))+"em",width:(!e.disabled&&1.6)+"em",height:(!e.disabled&&1.6)+"em"}}},h),"&::-moz-range-thumb":h,"&::-ms-thumb":g({marginTop:0},h),"&::-ms-tooltip":{display:"none"}});return Object(i.b)("input",{type:"range",onChange:function(a){e.handleChange(a.target.value),t&&d(!0)},onTouchEnd:function(){o(!1),d(!1)},onTouchStart:function(){o(!0)},css:u,value:e.value,disabled:e.disabled})};u.defaultProps={disabled:!1};var s=function(e){return Object(i.b)(u,{disabled:e.disabled,thumbBackground:"hsl("+e.color.h+", 100%, 50%)",trackBackground:"linear-gradient(to right, rgb(255, 0, 0),rgb(255, 255, 0),rgb(0, 255, 0),rgb(0, 255, 255),rgb(0, 0, 255),rgb(255, 0, 255),rgb(255, 0, 0))",value:e.color.h/3.6,handleChange:e.handleChange})},m=function(e){return Object(i.b)(u,{disabled:e.disabled,thumbBackground:"hsl("+e.color.h+", "+e.color.s+"%, 50%)",trackBackground:"linear-gradient(to right, hsl("+e.color.h+", 0%, 50%),  hsl("+e.color.h+", 100%, 50%))",value:e.color.s,handleChange:e.handleChange})},p=function(e){return Object(i.b)(u,{disabled:e.disabled,thumbBackground:"hsl("+e.color.h+", 100%, "+e.color.l+"%)",trackBackground:"linear-gradient(to right, hsl("+e.color.h+", 100%, 0%),  hsl("+e.color.h+", 100%, 50%), hsl("+e.color.h+", 100%, 100%))",value:e.color.l,handleChange:e.handleChange})},A=function(e){return Object(i.b)(u,{disabled:e.disabled,thumbBackground:"linear-gradient(hsla("+e.color.h+", 100%, 50%, "+e.color.a+"),  hsla("+e.color.h+", 100%, 50%, "+e.color.a+")), url("+b.a+")",trackBackground:"linear-gradient(to right, hsla("+e.color.h+", 100%, 50%, 0),  hsl("+e.color.h+", 100%, 50%)), url("+b.a+")",value:100*e.color.a,handleChange:e.handleChange})},k=function(){var e=Object(n.useState)({h:180,s:100,l:50,a:1}),a=Object(d.a)(e,2),r=a[0],o=a[1];return t.a.createElement(t.a.Fragment,null,t.a.createElement(s,{handleChange:function(e){o(Object(c.a)(Object(c.a)({},r),{},{h:3.6*parseInt(e)}))},color:r}),t.a.createElement(m,{handleChange:function(e){o(Object(c.a)(Object(c.a)({},r),{},{s:parseInt(e)}))},color:r}),t.a.createElement(p,{handleChange:function(e){o(Object(c.a)(Object(c.a)({},r),{},{l:parseInt(e)}))},color:r}),t.a.createElement(A,{handleChange:function(e){o(Object(c.a)(Object(c.a)({},r),{},{a:parseInt(e)/100}))},color:r}))};l.a.render(t.a.createElement(k,null),document.getElementById("root"))},4:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAAAAABzHgM7AAAAF0lEQVR42mM4Awb/wYCBYg6EgghRzAEAWDWBGQVyKPMAAAAASUVORK5CYII="},5:function(e,a,r){},9:function(e,a,r){e.exports=r(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.ef0cc69b.chunk.js.map