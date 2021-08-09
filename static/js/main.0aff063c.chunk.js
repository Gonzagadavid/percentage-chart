(this["webpackJsonppercentage-chart"]=this["webpackJsonppercentage-chart"]||[]).push([[0],{18:function(e,a,t){},258:function(e,a,t){},259:function(e,a,t){},260:function(e,a,t){},261:function(e,a,t){},262:function(e,a,t){},267:function(e,a,t){},268:function(e,a,t){},269:function(e,a,t){},270:function(e,a,t){},271:function(e,a,t){"use strict";t.r(a);var n=t(1),o=t(21),r=t.n(o),c=(t(37),t(7)),d=t(6),i=t(4),l=(t(43),t(44),t(27)),s=t.n(l),h=t(0),b=Object(d.b)((function(e){return{style:e,data:e.data,colors:e.colors,widthGraph:e.widthGraph,heightGraph:e.heightGraph,widthBorder:e.widthBorder,backgroundColor:e.backgroundColor,lineColor:e.lineColor,fontSizeBackground:e.fontSizeBackground,percentSide:e.percentSide,widthLine:e.widthLine,fontBackground:e.fontBackground,maxPercent:e.maxPercent,widthBar:e.widthBar,fontSizeBar:e.fontSizeBar,fontBar:e.fontBar,fontColorBlack:e.fontColorBlack,fontColor:e.fontColor,topPercent:e.topPercent,withLegend:e.withLegend,fontLegend:e.fontLegend,fontLegendSize:e.fontLegendSize,fontColorLegend:e.fontColorLegend,colorLegend:e.colorLegend,borderLegend:e.borderLegend,colorBorderLegend:e.colorBorderLegend,baseName:e.baseName,legendSide:e.legendSide,legendVertical:e.legendVertical,borderColor:e.borderColor}}))((function(e){var a=e.heightGraph,t=e.widthGraph,o=e.backgroundColor,r=e.lineColor,c=e.fontBar,d=e.fontSizeBackground,i=e.widthLine,l=e.fontBackground,b=e.percentSide,u=e.widthBar,g=e.fontSizeBar,j=e.fontColorBlack,p=e.fontColor,f=e.topPercent,m=e.withLegend,O=e.fontLegend,x=e.fontLegendSize,v=e.colorLegend,C=e.borderLegend,k=e.colorBorderLegend,y=e.fontColorLegend,B=e.baseName,L=e.legendSide,S=e.legendVertical,w=e.widthBorder,N=e.borderColor,z=Object(n.useRef)(null),T=Object(n.useRef)(null),P=function(e){var a=document.createElement("textarea");a.value=e.current.innerHTML,document.body.appendChild(a),a.select(),document.execCommand("copy"),document.body.removeChild(a)};return document.queryCommandSupported("copy")&&Object(h.jsxs)("div",{className:"CodePage",children:[Object(h.jsx)("h2",{children:"Finalizando"}),Object(h.jsx)("p",{children:"Crie um arquivo, copie e cole o objeto com os dados da estiliza\xe7\xe3o, depois o exporte"}),Object(h.jsxs)("div",{className:"code",children:[Object(h.jsx)("button",{type:"button",className:"copy-button",onClick:function(){return P(z)},children:"Copy"}),Object(h.jsx)(s.a,{className:"language-javascript",children:Object(h.jsx)("p",{ref:z,children:"//style.js\n            \nconst style = { \n  widthGraph: '".concat(t,"',\n  widthBorder: '").concat(w,"',\n  heightGraph: '").concat(a,"',\n  backgroundColor: '").concat(o,"',\n  lineColor: '").concat(r,"',\n  fontSizeBackground: '").concat(d,"',\n  percentSide: '").concat(b,"',\n  widthLine: '").concat(i,"',\n  fontBackground: '").concat(l,"',\n  widthBar: '").concat(u,"',\n  fontSizeBar: '").concat(g,"',\n  fontBar: '").concat(c,"',\n  fontColorBlack: '").concat(j,"',\n  fontColor: '").concat(p,"',\n  topPercent: '").concat(f,"',\n  withLegend: '").concat(m,"',\n  fontLegend: '").concat(O,"',\n  fontLegendSize: '").concat(x,"',\n  fontColorLegend: '").concat(y,"',\n  colorLegend: '").concat(v,"',\n  borderLegend: '").concat(C,"',\n  colorBorderLegend: '").concat(k,"',\n  baseName: '").concat(B,"',\n  legendSide: '").concat(L,"',\n  legendVertical: '").concat(S,"',\n  borderColor: '").concat(N,"',\n}\n\nexport default style\n")})})]}),Object(h.jsx)("p",{children:"Instale o componente libary em sua aplica\xe7\xe3o"}),Object(h.jsxs)("div",{className:"code",children:[Object(h.jsx)("button",{type:"button",className:"copy-button",onClick:function(){return P(T)},children:"Copy"}),Object(h.jsx)(s.a,{className:"language-shell",children:Object(h.jsx)("p",{ref:T,children:"npm install"})})]})]})})),u=(t(258),function(){return Object(h.jsxs)("div",{className:"Home",children:[Object(h.jsx)("h1",{children:"Stylized percentage chart"}),Object(h.jsx)("p",{children:"Essa p\xe1gina tem como finalidade auxiliar na estiliza\xe7\xe3o do componente libary stylized-percentage-chart"}),Object(h.jsx)("p",{children:"Na p\xe1gina Estilizar gr\xe1fico encontrar ferramentas que permitir\xe1 que estilize o gr\xe1fico:"}),Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:"Na guia Backgroud, estilizar o fundo do seu gr\xe1fico;"}),Object(h.jsx)("li",{children:"Na guia Inserir Dados, insira dados simulando o que ocorrer\xe1 na sua apliza\xe7\xe3o;"}),Object(h.jsx)("li",{children:"Na guia Editar Barras, poder\xe1 alterar e excluir os dados e trocar a cor das barras;"}),Object(h.jsx)("li",{children:"Na guia Estilizar Barras, configure detalhes nos estilo das barras;"}),Object(h.jsx)("li",{children:"Na guia Legenda, poder\xe1 optar por usar legenda estilizada a seu gosto;"}),Object(h.jsx)("p",{children:"Para visualizar as altera\xe7\xf5es clique em aplicar;"})]})]})}),g="ADD_DATA",j="ADD_COLOR",p="ADD_BACKGROUND",f="ADD_STYLEBAR",m="ADD_LEGEND",O="REMOVE_DATA",x="EDIT_COLOR",v="EDIT_QTY",C=(t(259),function(e){var a=e.text,t=e.color,n=e.changeColor,o=e.qty,r=e.changeQty,c=e.remove;return Object(h.jsxs)("div",{className:"EditBar",children:[Object(h.jsx)("span",{children:a}),Object(h.jsx)("input",{type:"color",value:t,onChange:n}),Object(h.jsx)("input",{type:"number",value:o,onChange:r}),Object(h.jsx)("button",{type:"button",onClick:c,children:"Remove"})]})}),k=(t(18),Object(d.b)((function(e){return{data:e.data,colors:e.colors}}),(function(e){return{removeData:function(a){return e(function(e){return{type:O,state:e}}(a))},editColor:function(a){return e(function(e){return{type:x,state:e}}(a))},editQty:function(a){return e(function(e){return{type:v,state:e}}(a))}}}))((function(e){var a=e.data,t=e.colors,n=e.removeData,o=e.editColor,r=e.editQty,c=Object.keys(a);return Object(h.jsxs)("div",{className:"InputConatiner",children:[Object(h.jsx)("h3",{children:"Editar Barras"}),c.map((function(e,c){return Object(h.jsx)(C,{text:e,color:t[c],qty:a[e],remove:function(){return n({name:e,color:t[c]})},changeColor:function(e){var a=e.target.value;return o({index:c,color:a})},changeQty:function(a){var t=a.target.value;return r({name:e,qty:t})}},e)}))]})}))),y=t(2),B=t(8),L=t(13),S=t(14),w=t(5),N=t(16),z=t(15),T=(t(260),function(e){var a=e.labelText,t=e.value,n=e.change,o=e.type,r=e.name,c=e.checked;return Object(h.jsxs)("label",{htmlFor:r,className:"Input",children:["radio"!==o&&"checkbox"!==o?a:"",Object(h.jsx)("input",{type:o,id:r,value:t,checked:c,onChange:n,name:r}),"radio"===o||"checkbox"===o?a:""]})});T.defaultProps={value:"Not found"};var P=T,G=(t(261),function(e){var a=e.labelText,t=e.value,n=e.change,o=e.name,r=e.options;return Object(h.jsxs)("label",{htmlFor:o,className:"Select",children:[a,Object(h.jsx)("select",{id:o,value:t,onChange:n,name:o,children:r.map((function(e){return Object(h.jsx)("option",{children:e},e)}))})]})});G.defaultProps={value:"Not found"};var D=G,E=function(e){Object(N.a)(t,e);var a=Object(z.a)(t);function t(){var e;return Object(L.a)(this,t),(e=a.call(this)).state={backgroundColor:"#fff",lineColor:"#000",fontSizeBackground:"10",fontBackground:"monospace",widthGraph:"1000",heightGraph:"500",widthLine:"1",maxPercent:"100%",percentSide:"left",widthBorder:"1",borderColor:"black"},e.handlerChange=e.handlerChange.bind(Object(w.a)(e)),e.insertBackground=e.insertBackground.bind(Object(w.a)(e)),e}return Object(S.a)(t,[{key:"handlerChange",value:function(e){var a=e.target,t=a.name,n=a.value;this.setState(Object(B.a)({},t,n))}},{key:"insertBackground",value:function(){(0,this.props.addBackground)(Object(y.a)({},this.state))}},{key:"render",value:function(){var e=this.state,a=e.backgroundColor,t=e.lineColor,n=e.fontSizeBackground,o=e.widthGraph,r=e.heightGraph,c=e.widthLine,d=e.fontBackground,i=e.maxPercent,l=e.widthBorder,s=e.borderColor;return Object(h.jsxs)("div",{className:"InputConatiner",children:[Object(h.jsx)("h3",{children:"Estilo Background"}),Object(h.jsx)(P,{type:"color",name:"backgroundColor",labelText:"Cor de fundo:",value:a,change:this.handlerChange}),Object(h.jsx)(P,{type:"color",name:"lineColor",labelText:"Cor da linha:",value:t,change:this.handlerChange}),Object(h.jsx)(P,{type:"number",name:"widthLine",labelText:"Largura da linha:",value:c,change:this.handlerChange}),Object(h.jsx)(P,{type:"number",name:"fontSizeBackground",labelText:"Tamanho da letra:",value:n,change:this.handlerChange}),Object(h.jsx)(P,{type:"text",name:"fontBackground",labelText:"Fonte de fundo:",value:d,change:this.handlerChange}),Object(h.jsx)(P,{type:"number",name:"widthGraph",labelText:"Largura do grafico:",value:o,change:this.handlerChange}),Object(h.jsx)(P,{type:"number",name:"heightGraph",labelText:"Altura do grafico:",value:r,change:this.handlerChange}),Object(h.jsx)(P,{type:"number",name:"widthBorder",labelText:"Espessura da borda:",value:l,change:this.handlerChange}),Object(h.jsx)(P,{type:"color",name:"borderColor",labelText:"Cor da borda:",value:s,change:this.handlerChange}),Object(h.jsx)(P,{type:"radio",name:"percentSide",labelText:"Esquerdo",value:"left",change:this.handlerChange}),Object(h.jsx)(P,{type:"radio",name:"percentSide",labelText:"Direito",value:"right",change:this.handlerChange}),Object(h.jsx)(D,{name:"maxPercent",labelText:"Porcetagem a ser exibida:",value:i,change:this.handlerChange,options:["100%","70%","50%"]}),Object(h.jsx)("button",{type:"button",onClick:this.insertBackground,children:"Aplicar"})]})}}]),t}(n.Component),q=Object(d.b)(null,(function(e){return{addBackground:function(a){return e(function(e){return{type:p,state:e}}(a))}}}))(E),A=function(e){Object(N.a)(t,e);var a=Object(z.a)(t);function t(){var e;return Object(L.a)(this,t),(e=a.call(this)).state={widthBar:"60",fontSizeBar:"15",fontColordifBar:!1,fontColor:"black",fontBar:"monospace",topPercent:!1,baseName:!0},e.handlerChange=e.handlerChange.bind(Object(w.a)(e)),e.insertStyleBar=e.insertStyleBar.bind(Object(w.a)(e)),e}return Object(S.a)(t,[{key:"handlerChange",value:function(e){var a=e.target,t=a.name,n=a.value,o=a.checked,r="checkbox"===a.type?o:n;this.setState(Object(B.a)({},t,r))}},{key:"insertStyleBar",value:function(){(0,this.props.addStyleBar)(Object(y.a)({},this.state))}},{key:"render",value:function(){var e=this.state,a=e.widthBar,t=e.fontSizeBar,n=e.fontColordifBar,o=e.fontColor,r=e.topPercent,c=e.fontBar,d=e.baseName;return Object(h.jsxs)("div",{className:"InputConatiner",children:[Object(h.jsx)("h3",{children:"Estilo das Barras"}),Object(h.jsx)(P,{type:"number",name:"widthBar",labelText:"Largura das barras:",value:a,change:this.handlerChange}),Object(h.jsx)(P,{type:"number",name:"fontSizeBar",labelText:"Tamanho da fonte:",value:t,change:this.handlerChange}),Object(h.jsx)(P,{type:"text",name:"fontBar",labelText:"Fonte da barra:",value:c,change:this.handlerChange}),Object(h.jsx)(P,{type:"checkbox",name:"fontColorBlack",labelText:"Cor da fonte diferente da barra:",checked:n,change:this.handlerChange}),n&&Object(h.jsx)(P,{type:"color",name:"fontColor",labelText:"Cor da fonte:",value:o,change:this.handlerChange}),Object(h.jsx)(P,{type:"checkbox",name:"topPercent",labelText:"Exibir a porcentagem no topo da barra:",checked:r,change:this.handlerChange}),Object(h.jsx)(P,{type:"checkbox",name:"baseName",labelText:"Exibir o nome na base da barra:",checked:d,change:this.handlerChange}),Object(h.jsx)("button",{type:"button",onClick:this.insertStyleBar,children:"Aplicar"})]})}}]),t}(n.Component),R=Object(d.b)(null,(function(e){return{addStyleBar:function(a){return e(function(e){return{type:f,state:e}}(a))}}}))(A),I=function(e){Object(N.a)(t,e);var a=Object(z.a)(t);function t(){var e;return Object(L.a)(this,t),(e=a.call(this)).state={dataName:"",qty:0,color:"black"},e.handlerChange=e.handlerChange.bind(Object(w.a)(e)),e.insertData=e.insertData.bind(Object(w.a)(e)),e}return Object(S.a)(t,[{key:"handlerChange",value:function(e){var a=e.target,t=a.name,n=a.value;this.setState(Object(B.a)({},t,n))}},{key:"insertData",value:function(){var e=this.props,a=e.addData,t=e.addColor,n=this.state,o=n.dataName,r=n.qty,c=n.color;a(Object(B.a)({},o,r)),t(c),this.setState({dataName:"",qty:0,color:""})}},{key:"render",value:function(){var e=this.state,a=e.dataName,t=e.qty,n=e.color;return Object(h.jsxs)("div",{className:"InputConatiner",children:[Object(h.jsx)("h3",{children:"Inserir Dados"}),Object(h.jsx)(P,{type:"text",name:"dataName",labelText:"Nome:",value:a,change:this.handlerChange}),Object(h.jsx)(P,{type:"number",name:"qty",labelText:"Quantidade:",value:t,change:this.handlerChange}),Object(h.jsx)(P,{type:"color",name:"color",value:n,labelText:"Cor:",change:this.handlerChange}),Object(h.jsx)("button",{type:"button",onClick:this.insertData,children:"Inserir Dado"})]})}}]),t}(n.Component),V=Object(d.b)(null,(function(e){return{addData:function(a){return e(function(e){return{type:g,state:e}}(a))},addColor:function(a){return e(function(e){return{type:j,state:e}}(a))}}}))(I),F=function(e){Object(N.a)(t,e);var a=Object(z.a)(t);function t(){var e;return Object(L.a)(this,t),(e=a.call(this)).state={withLegend:!1,fontLegend:"monospace",fontLegendSize:"20",fontColorLegend:"black",colorLegend:"#fff",borderLegend:1,colorBorderLegend:"black",legendSide:"right",legendVertical:"atop"},e.handlerChange=e.handlerChange.bind(Object(w.a)(e)),e.insertLegenda=e.insertLegenda.bind(Object(w.a)(e)),e}return Object(S.a)(t,[{key:"handlerChange",value:function(e){var a=this,t=e.target,n=t.name,o=t.value,r=t.checked,c="checkbox"===t.type?r:o;this.setState(Object(B.a)({},n,c),(function(){"withLegend"===n&&a.insertLegenda()}))}},{key:"insertLegenda",value:function(){(0,this.props.addLegend)(Object(y.a)({},this.state))}},{key:"render",value:function(){var e=this.state,a=e.withLegend,t=e.fontLegend,n=e.fontLegendSize,o=e.colorLegend,r=e.borderLegend,c=e.colorBorderLegend,d=e.fontColorLegend;return Object(h.jsxs)("div",{className:"InputConatiner",children:[Object(h.jsx)("h3",{children:"Legenda"}),Object(h.jsx)(P,{type:"checkbox",name:"withLegend",labelText:"Com legenda",checked:a,change:this.handlerChange}),a&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(P,{type:"text",name:"fontLegend",labelText:"Fonte da legenda:",value:t,change:this.handlerChange}),Object(h.jsx)(P,{type:"number",name:"fontLegendSize",labelText:"Tamanho da fonte:",value:n,change:this.handlerChange}),Object(h.jsx)(P,{type:"color",name:"fontColorLegend",labelText:"Cor da fonte:",value:d,change:this.handlerChange}),Object(h.jsx)(P,{type:"color",name:"colorLegend",labelText:"Cor de fundo da legenda:",value:o,change:this.handlerChange}),Object(h.jsx)(P,{type:"number",name:"borderLegend",labelText:"Largura da borda:",value:r,change:this.handlerChange}),Object(h.jsx)(P,{type:"color",name:"colorBorderLegend",labelText:"Cor da borda:",value:c,change:this.handlerChange}),Object(h.jsx)(P,{type:"radio",name:"legendSide",labelText:"Esquerdo",value:"left",change:this.handlerChange}),Object(h.jsx)(P,{type:"radio",name:"legendSide",labelText:"Direito",value:"right",change:this.handlerChange}),Object(h.jsx)(P,{type:"radio",name:"legendVertical",labelText:"Superior",value:"atop",change:this.handlerChange}),Object(h.jsx)(P,{type:"radio",name:"legendVertical",labelText:"Inferior",value:"bottom",change:this.handlerChange})]}),Object(h.jsx)("button",{type:"button",onClick:this.insertLegenda,children:"Aplicar"})]})}}]),t}(n.Component),_=Object(d.b)(null,(function(e){return{addLegend:function(a){return e(function(e){return{type:m,state:e}}(a))}}}))(F),Q=(t(262),function(){return Object(h.jsx)("div",{className:"DataPage",children:Object(h.jsxs)(i.c,{children:[Object(h.jsx)(i.a,{path:"/percentage-chart/settings/background",component:q}),Object(h.jsx)(i.a,{path:"/percentage-chart/settings/insert-data",component:V}),Object(h.jsx)(i.a,{path:"/percentage-chart/settings/edit-bar",component:k}),Object(h.jsx)(i.a,{path:"/percentage-chart/settings/style-bar",component:R}),Object(h.jsx)(i.a,{path:"/percentage-chart/settings/legend",component:_})]})})}),M=t(22),W={data:{},colors:[],backgroundColor:"white",lineColor:"black",fontSizeBackground:"10",widthGraph:"1000",heightGraph:"500",widthBorder:"1",borderColor:"black",widthLine:"1",fontBackground:"monospace",maxPercent:"100%",percentSide:"left",widthBar:"60",fontSizeBar:"15",fontBar:"monospace",fontColordifBar:!1,fontColor:"black",topPercent:!1,baseName:!0,withLegend:!1,fontLegend:"monospace",fontLegendSize:"20",fontColorLegend:"black",colorLegend:"white",borderLegend:1,colorBorderLegend:"black",legendSide:"right",legendVertical:"atop"},H=function(e){Object(N.a)(t,e);var a=Object(z.a)(t);function t(){var e;return Object(L.a)(this,t),(e=a.call(this)).canvasRef=Object(n.createRef)(),e.legendCreate=e.legendCreate.bind(Object(w.a)(e)),e.drawbackgound=e.drawbackgound.bind(Object(w.a)(e)),e.drawBars=e.drawBars.bind(Object(w.a)(e)),e.clearCanvas=e.clearCanvas.bind(Object(w.a)(e)),e}return Object(S.a)(t,[{key:"componentDidMount",value:function(){this.drawbackgound()}},{key:"componentDidUpdate",value:function(){this.clearCanvas(),this.drawbackgound()}},{key:"clearCanvas",value:function(){var e=this.canvasRef.current;e.getContext("2d").clearRect(0,0,e.width,e.height)}},{key:"drawbackgound",value:function(){var e=this.props,a=e.style,t=(a=void 0===a?W:a).widthGraph,n=void 0===t?"1000":t,o=a.heightGraph,r=void 0===o?"500":o,c=a.lineColor,d=void 0===c?"black":c,i=a.fontSizeBackground,l=void 0===i?"10":i,s=a.widthLine,h=void 0===s?"1":s,b=a.fontBackground,u=void 0===b?"monospace":b,g=a.percentSide,j=void 0===g?"left":g,p=e.maxPercent,f=void 0===p?"100%":p,m="right"===j?n-4*l:10,O="70%"===f?8:"50%"===f?6:11,x=this.canvasRef.current.getContext("2d"),v=r/(O+1),C=r-v,k=0;Array(O).fill(0).forEach((function(){x.beginPath(),x.strokeStyle=d,x.lineWidth=h,x.moveTo(0,C),x.lineTo(n,C),x.stroke(),x.closePath(),x.fillStyle=d,x.font="".concat(l,"px ").concat(u),x.fillText("".concat(k,"%"),m,C-2*h),C-=v,k+=10})),this.drawBars()}},{key:"drawBars",value:function(){var e=this.props,a=e.style,t=(a=void 0===a?W:a).widthBar,n=void 0===t?"60":t,o=a.widthGraph,r=void 0===o?"1000":o,c=a.heightGraph,d=void 0===c?"500":c,i=a.fontSizeBar,l=void 0===i?"15":i,s=a.fontBar,h=void 0===s?"monospace":s,b=a.maxPercent,u=void 0===b?"100%":b,g=a.fontColordifBar,j=void 0!==g&&g,p=a.fontColor,f=void 0===p?"black":p,m=a.topPercent,O=void 0!==m&&m,x=a.withLegend,v=void 0!==x&&x,C=a.baseName,k=void 0===C||C,y=e.data,B=void 0===y?{}:y,L=e.colors,S=void 0===L?[]:L,w=this.canvasRef.current,N=+l||20,z=h||"serif",T="70%"===u?8:"50%"===u?6:11,P=d/(T+1),G=w.getContext("2d"),D=Object.keys(B),E=Object.values(B).reduce((function(e,a){return e+ +a}),0),q=d-d/(T+1),A=+n/2,R=r/2-D.length/2*(+n+A);D.forEach((function(e,a){G.font="".concat(N,"px ").concat(z);var t="".concat((100*+B[e]/E).toFixed(1),"%"),o=+B[e]*(10*P)/E;G.fillStyle=S[a]||"#aaa",G.fillRect(R,q,+n,-o),j&&(G.fillStyle=f||"black"),k&&G.fillText(e,R+n/8,q+N),O&&G.fillText(t,R+n/4,q-o-l/2),R+=A+ +n})),v&&this.legendCreate()}},{key:"legendCreate",value:function(){var e=this.props,a=e.style,t=(a=void 0===a?W:a).fontLegendSize,n=void 0===t?"20":t,o=a.borderLegend,r=void 0===o?"1":o,c=a.colorBorderLegend,d=void 0===c?"black":c,i=a.colorLegend,l=void 0===i?"white":i,s=a.fontLegend,h=void 0===s?"monospace":s,b=a.widthGraph,u=void 0===b?"1000":b,g=a.fontColorLegend,j=void 0===g?"black":g,p=a.legendSide,f=void 0===p?"right":p,m=a.legendVertical,O=void 0===m?"atop":m,x=a.heightGraph,v=void 0===x?"500":x,C=e.data,k=void 0===C?{}:C,y=e.colors,B=void 0===y?[]:y,L=this.canvasRef.current.getContext("2d"),S=Math.max.apply(Math,Object(M.a)(Object.keys(k).map((function(e){return e.length}))))*+n+5*+n,w=(+n+ +n/2)*Object.keys(k).length+2*+n,N="right"===f?u-(S+10):10,z="atop"===O?10:v-(w+10);L.fillStyle=d,L.fillRect(N-r,z-r,S+ +r,w+ +r),L.fillStyle=l,L.fillRect(N,z,S-+r,w-+r);var T=N+ +n,P=z+ +n;B.forEach((function(e){L.fillStyle=e,L.fillRect(T,P,n,n),P+=+n+ +n/2}));var G=T+ +n+ +n/2,D=z+(+n+ +n-n/6),E=Object.keys(k);L.fillStyle=j,E.forEach((function(e){L.font="".concat(n,"px ").concat(h),L.fillText(e,G,D),D+=+n+ +n/2}))}},{key:"render",value:function(){var e=this.props.style,a=(e=void 0===e?W:e).widthGraph,t=void 0===a?"1000":a,n=e.heightGraph,o=void 0===n?"500":n,r=e.backgroundColor,c=void 0===r?"white":r,d=e.widthBorder,i=void 0===d?1:d,l=e.borderColor,s=void 0===l?"black":l;return Object(h.jsx)("canvas",{className:"canvas",ref:this.canvasRef,width:t,height:o,style:{border:"".concat(i,"px solid ").concat(s),backgroundColor:c}})}}]),t}(n.Component),J=(t(267),function(){return Object(h.jsxs)("nav",{className:"NavSet",children:[Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)(c.b,{to:"/percentage-chart/settings/background",children:"Estilo Background"})}),Object(h.jsx)("li",{children:Object(h.jsx)(c.b,{to:"/percentage-chart/settings/insert-data",children:"Inserir Dados"})}),Object(h.jsx)("li",{children:Object(h.jsx)(c.b,{to:"/percentage-chart/settings/edit-bar",children:"Editar Barras"})}),Object(h.jsx)("li",{children:Object(h.jsx)(c.b,{to:"/percentage-chart/settings/style-bar",children:"Estilizar Barras"})}),Object(h.jsx)("li",{children:Object(h.jsx)(c.b,{to:"/percentage-chart/settings/legend",children:"Legenda"})})]}),Object(h.jsx)(c.b,{to:"/code",children:Object(h.jsx)("button",{type:"button",children:"Concluir"})})]})}),U=(t(268),Object(d.b)((function(e){return{style:e,data:e.data,colors:e.colors,widthGraph:e.widthGraph,heightGraph:e.heightGraph,widthBorder:e.widthBorder,backgroundColor:e.backgroundColor,lineColor:e.lineColor,fontSizeBackground:e.fontSizeBackground,percentSide:e.percentSide,widthLine:e.widthLine,fontBackground:e.fontBackground,maxPercent:e.maxPercent,widthBar:e.widthBar,fontSizeBar:e.fontSizeBar,fontBar:e.fontBar,fontColorBlack:e.fontColorBlack,fontColor:e.fontColor,topPercent:e.topPercent,withLegend:e.withLegend,fontLegend:e.fontLegend,fontLegendSize:e.fontLegendSize,fontColorLegend:e.fontColorLegend,colorLegend:e.colorLegend,borderLegend:e.borderLegend,colorBorderLegend:e.colorBorderLegend,baseName:e.baseName,legendSide:e.legendSide,legendVertical:e.legendVertical,borderColor:e.borderColor}}))((function(e){var a=e.data,t=e.colors,n=e.maxPercent,o=e.style;return Object(h.jsxs)("div",{className:"GraphicPage",children:[Object(h.jsx)(J,{}),Object(h.jsx)("div",{className:"graphic",children:Object(h.jsx)(H,{style:o,data:a,maxPercent:n,colors:t})})]})})));t(269);var Y=function(){return Object(h.jsxs)("div",{className:"SetPage",children:[Object(h.jsx)(Q,{}),Object(h.jsx)(U,{})]})},K=[{name:"data",description:"O data receber\xe1 um objeto onde a chave ser\xe1 o nome de referencia ao dado a ser exibido e o valor ser\xe1 o numero correspondente ao mesmo. O data fica fora do objeto \u201cstyle\u201d pois o mesmo conter\xe1 os dados a ser exibido."},{name:"colors",description:"O colors \xe9 um array com as cores exibidas nas barras, sendo a sua ordem seguindo a sequencia do objeto data. Caso n\xe3o seja passada cores o suficiente, as barras ter\xe3o a cor #aaa e a mesma n\xe3o ser\xe1 exibida na legenda."},{name:"maxPercent",description:"O maxPercent pode receber tr\xeas tipos: 100%, 75% e 50%, sendo esses o maximo de porcentagem a ser exibido no background. O maxPercent n\xe3o est\xe1 no objeto style para que caso prefira fazer uma logica para ser exibido de acordo com o resultado. Caso n\xe3o seja passado ele assumir\xe1 o  valor de 100%."}],X=[{name:"backgrondColor",description:"O backgroundColor especifica a a cor de funco do grafico. Caso nenhum valor seja passado assumir\xe1 o valor \u2018white\u2019."},{name:"lineColor",description:"O lineColor define a cor das linhas de marca\xe7\xe3o da porcentagem no fundo do gr\xe1fico, caso n\xe3o queira essas linhas, basta colocar a mesma cor que o backgroundColor. Caso nenhum valor seja passado, assumir\xe1 o valor \u2018black\u2019."},{name:"widthLine",description:"A widthLine determina a espessura da linha que divide a porcentagem no fundo do gr\xe1fico. Caso nenhum valor seja passado ele assumir\xe1 o valor de \u20181\u2019."},{name:"fontSizeBackground",description:"O fontSizeBackground informa o tamanho da letra usada para exibir a porcentagem no fundo do gr\xe1fico. Caso nenhum valor seja passado, assumir\xe1 o valor \u201810\u2019."},{name:"fontBackgorund ",description:"A fontBackground determina a font-family usada na porcentagem do fundo do gr\xe1fico. Caso nenhum valor seja passado ele assumir\xe1 o valor de \u2018monospace\u2019."},{name:"widthGraph",description:"O widthGraph especifica a largura no tamanho do gr\xe1fico. Caso nenhum valor seja passado, assumir\xe1 o valor de \u20181000\u2019."},{name:"heightGraph",description:"heightGraph representa a altura no tamanho do gr\xe1fico. Caso nenhum valor seja passado, assumir\xe1 o valor de \u2018500\u2019."},{name:"WidthBorder",description:"O widthBorder representa a espessura da borda do gr\xe1fico. Caso nenhum valor seja passado, assumir\xe1 o valor de \u20181\u2019."},{name:"borderColor",description:"O borderColor determina a cor da borda do gr\xe1fico.Caso nenhum valor seja passado, assumir\xe1 o valor de \u2018black\u2019."},{name:"percentSide",description:"O percentSide determina o lado onde ser\xe1 exibido a porcentagem, caso nenhum valor seja passado receber\xe1 o valor de \u2018left\u2019."},{name:"widthBar",description:"A widthBar determina a largura das barras. Caso nenhum valor seja passado receber\xe1 o valor de \u201860\u2019."},{name:"fontSizeBar",description:"A fontSizeBar determina o tamanho da letra escrita na base da barra. Caso n\xe3o seja passado nenhum valor, receber\xe1 \u201815\u2019."},{name:"fontBar",description:"A fontBar determina a font-family usada na base da barra. Caso nenhum valor seja passado, assumir\xe1 o valor de \u2018monospace\u2019."},{name:"fontColordifBar",description:"O fontColordifBar recebe um booleano onde determina se a cor das letras na base da barra ter\xe1 a mesma cor que a barra, caso n\xe3o seja acionado a cor ser\xe1 a mesma que as barras."},{name:"fontColor",description:"Caso opte pela cor das letras serem diferente das barras, poder\xe1 escolher a cor atrav\xe9s do fontColor, tendo como padr\xe3o o valor \u2018black\u2019."},{name:"topPercent",description:"Quando acionado o topPercent exibe o valor da porcentagem no topo da barra, sua formata\xe7\xe3o \xe9 a mesma que as letras da base da barra, por\xe9m sua exibi\xe7\xe3o \xe9 independente."},{name:"baseName",description:"O baseName determina se ser\xe1 exibido ou n\xe3o o nome na base da barra. Caso opte por usar legenda pode desativ\xe1-lo passando o valor booleano de false."},{name:"withLegend",description:"O withLegend determina se voc\xea vai querer um gr\xe1fico com legenda ou n\xe3o, recebendo o valor booleano de true para sim, tendo como pad\xe3o o valor false."},{name:"fonteLegend",description:"O fonteLegend determina o font-family usado na legenda, sendo o padr\xe3o \u2018monospace\u2019."},{name:"fontLegendSize",description:"O fontColorLegend determina a cor da fonte usada na legenda, sendo o padr\xe3o \u2018black\u2019."},{name:"colorLegend",description:"O colorLegend determina a cor da  legenda, sendo o padr\xe3o \u2018white\u2019."},{name:"borderLegend",description:"O borderLegend determina a espessura da borda da legenda. Caso nenhum valor seja passado, receber\xe1 \u20181\u2019"},{name:"colorBorderLegend",description:"colorBorderLegend determina a cor da borda da legenda"},{name:"legendSide",description:"O legendSide determina o lado em que a legenda ficar\xe1, tendo como padr\xe3o \u2018right\u2019"},{name:"legendVertical",description:"O legendVertical determina o posicionamento da legenda na vertical, tendo como padr\xe3o o \u2018atop\u2019"}],Z=(t(270),function(){return Object(h.jsxs)("div",{className:"Summary",children:[Object(h.jsx)("h2",{children:"Sum\xe1rio"}),Object(h.jsx)("h3",{children:"Dados din\xe2micos"}),K.map((function(e){var a=e.name,t=e.description;return Object(h.jsxs)("div",{className:"item",children:[Object(h.jsx)("h4",{children:a}),Object(h.jsx)("p",{children:t})]},a)})),Object(h.jsx)("h3",{children:"Dados de estilo"}),X.map((function(e){var a=e.name,t=e.description;return Object(h.jsxs)("div",{className:"item",children:[Object(h.jsx)("h4",{children:a}),Object(h.jsx)("p",{children:t})]},a)}))]})});var $=function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsxs)("nav",{children:[Object(h.jsx)(c.b,{to:"/percentage-chart",children:"In\xedcio"}),Object(h.jsx)(c.b,{to:"/percentage-chart/settings/background",children:"Estilizar Gr\xe1fico"}),Object(h.jsx)(c.b,{to:"/percentage-chart/code",children:"C\xf3digo do Estilo"}),Object(h.jsx)(c.b,{to:"/percentage-chart/summary",children:"Sum\xe1rio"})]}),Object(h.jsx)("main",{children:Object(h.jsxs)(i.c,{children:[Object(h.jsx)(i.a,{exact:!0,path:"/percentage-chart",component:u}),Object(h.jsx)(i.a,{path:"/percentage-chart/settings/background",component:Y}),Object(h.jsx)(i.a,{path:"/percentage-chart/code",component:b}),Object(h.jsx)(i.a,{path:"/percentage-chart/summary",component:Z})]})})]})},ee=t(26),ae=t(32),te={data:{},colors:[],backgroundColor:"white",lineColor:"black",fontSizeBackground:"10",widthGraph:"1000",heightGraph:"500",widthBorder:"1",borderColor:"black",widthLine:"1",fontBackground:"monospace",maxPercent:"100%",percentSide:"left",widthBar:"60",fontSizeBar:"15",fontBar:"monospace",fontColordifBar:!1,fontColor:"black",topPercent:!1,baseName:!0,withLegend:!1,fontLegend:"monospace",fontLegendSize:"20",fontColorLegend:"black",colorLegend:"white",borderLegend:1,colorBorderLegend:"black",legendSide:"right",legendVertical:"atop"},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case g:return Object(y.a)(Object(y.a)({},e),{},{data:Object(y.a)(Object(y.a)({},e.data),a.state)});case j:return Object(y.a)(Object(y.a)({},e),{},{colors:[].concat(Object(M.a)(e.colors),[a.state])});case p:case f:case m:return Object(y.a)(Object(y.a)({},e),a.state);case O:return Object(y.a)(Object(y.a)({},e),{},{data:Object.keys(e.data).filter((function(e){return e!==a.state.name})).reduce((function(a,t){return Object(y.a)(Object(y.a)({},a),{},Object(B.a)({},t,e.data[t]))}),{}),colors:e.colors.filter((function(e){return e!==a.state.color}))});case x:return Object(y.a)(Object(y.a)({},e),{},{colors:e.colors.map((function(e,t){return t===a.state.index?a.state.color:e}))});case v:return Object(y.a)(Object(y.a)({},e),{},{data:Object(y.a)(Object(y.a)({},e.data),{},Object(B.a)({},a.state.name,a.state.qty))});default:return e}},oe=Object(ee.createStore)(ne,Object(ae.composeWithDevTools)());r.a.render(Object(h.jsx)(c.a,{children:Object(h.jsx)(d.a,{store:oe,children:Object(h.jsx)($,{})})}),document.getElementById("root"))},37:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){}},[[271,1,2]]]);
//# sourceMappingURL=main.0aff063c.chunk.js.map