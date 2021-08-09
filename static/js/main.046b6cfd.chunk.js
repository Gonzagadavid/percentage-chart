(this["webpackJsonppercentage-chart"]=this["webpackJsonppercentage-chart"]||[]).push([[0],{18:function(e,a,t){},262:function(e,a,t){},263:function(e,a,t){},264:function(e,a,t){},265:function(e,a,t){},266:function(e,a,t){},274:function(e,a,t){},275:function(e,a,t){},276:function(e,a,t){},277:function(e,a,t){},278:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t(21),o=t.n(r),c=(t(41),t(6)),d=t(5),i=t(4),s=(t(47),t(30)),l=(t(48),t(22)),h=t.n(l),b=t(0),u=Object(d.b)((function(e){return{style:e,data:e.data,colors:e.colors,widthGraph:e.widthGraph,heightGraph:e.heightGraph,widthBorder:e.widthBorder,backgroundColor:e.backgroundColor,lineColor:e.lineColor,fontSizeBackground:e.fontSizeBackground,percentSide:e.percentSide,widthLine:e.widthLine,fontBackground:e.fontBackground,maxPercent:e.maxPercent,widthBar:e.widthBar,fontSizeBar:e.fontSizeBar,fontBar:e.fontBar,fontColorBlack:e.fontColorBlack,fontColor:e.fontColor,topPercent:e.topPercent,withLegend:e.withLegend,fontLegend:e.fontLegend,fontLegendSize:e.fontLegendSize,fontColorLegend:e.fontColorLegend,colorLegend:e.colorLegend,borderLegend:e.borderLegend,colorBorderLegend:e.colorBorderLegend,baseName:e.baseName,legendSide:e.legendSide,legendVertical:e.legendVertical,borderColor:e.borderColor}}))((function(e){var a=e.heightGraph,t=e.widthGraph,r=e.backgroundColor,o=e.lineColor,c=e.fontBar,d=e.fontSizeBackground,i=e.widthLine,s=e.fontBackground,l=e.percentSide,u=e.widthBar,j=e.fontSizeBar,g=e.fontColorBlack,p=e.fontColor,m=e.topPercent,f=e.withLegend,O=e.fontLegend,x=e.fontLegendSize,C=e.colorLegend,v=e.borderLegend,y=e.colorBorderLegend,B=e.fontColorLegend,k=e.baseName,L=e.legendSide,S=e.legendVertical,w=e.widthBorder,N=e.borderColor,z=e.data,T=e.maxPercent,P=e.colors,D=Object(n.useRef)(null),q=Object(n.useRef)(null),E=Object(n.useRef)(null),G=Object.entries(z).map((function(e){return e.join(": ")})).join(", "),A=function(e){var a=document.createElement("textarea");a.value=e.current.innerHTML,document.body.appendChild(a),a.select(),document.execCommand("copy"),document.body.removeChild(a)};return document.queryCommandSupported("copy")&&Object(b.jsxs)("div",{className:"CodePage",children:[Object(b.jsx)("h2",{children:"Finalizando"}),Object(b.jsx)("p",{children:"Crie um arquivo, copie e cole o objeto com os dados da estiliza\xe7\xe3o, depois o exporte"}),Object(b.jsxs)("div",{className:"code",children:[Object(b.jsx)("button",{type:"button",className:"copy-button",onClick:function(){return A(D)},children:"Copy"}),Object(b.jsx)(h.a,{className:"language-javascript",children:Object(b.jsx)("p",{ref:D,children:"\n//style.js\n            \nconst style = { \n  widthGraph: '".concat(t,"',\n  widthBorder: '").concat(w,"',\n  heightGraph: '").concat(a,"',\n  backgroundColor: '").concat(r,"',\n  lineColor: '").concat(o,"',\n  fontSizeBackground: '").concat(d,"',\n  percentSide: '").concat(l,"',\n  widthLine: '").concat(i,"',\n  fontBackground: '").concat(s,"',\n  widthBar: '").concat(u,"',\n  fontSizeBar: '").concat(j,"',\n  fontBar: '").concat(c,"',\n  fontColorBlack: '").concat(g,"',\n  fontColor: '").concat(p,"',\n  topPercent: '").concat(m,"',\n  withLegend: '").concat(f,"',\n  fontLegend: '").concat(O,"',\n  fontLegendSize: '").concat(x,"',\n  fontColorLegend: '").concat(B,"',\n  colorLegend: '").concat(C,"',\n  borderLegend: '").concat(v,"',\n  colorBorderLegend: '").concat(y,"',\n  baseName: '").concat(k,"',\n  legendSide: '").concat(L,"',\n  legendVertical: '").concat(S,"',\n  borderColor: '").concat(N,"',\n}\n\nexport default style\n")})})]}),Object(b.jsx)("p",{children:"Instale o componente libary em sua aplica\xe7\xe3o"}),Object(b.jsxs)("div",{className:"code",children:[Object(b.jsx)("button",{type:"button",className:"copy-button",onClick:function(){return A(q)},children:"Copy"}),Object(b.jsx)(h.a,{className:"language-shell",children:Object(b.jsx)("p",{ref:q,children:"npm i stylized-percentage-chart"})})]}),Object(b.jsx)("p",{children:"Importe o componete stylized-percentage-chart  e passe os dados do estilo e os dados a ser renderizado como props"}),Object(b.jsxs)("div",{className:"code",children:[Object(b.jsx)("button",{type:"button",className:"copy-button",onClick:function(){return A(E)},children:"Copy"}),Object(b.jsx)(h.a,{className:"language-javascript",children:Object(b.jsx)("p",{ref:E,children:"\nimport React from 'react';\nimport { PercentChart } from 'stylized-percentage-chart';\nimport style from ./path/style\n\nconst GraphicPage = () => (\n  <div className=\"graphic\">\n    <PercentChart\n      style={style}\n      data={{".concat(G,"}}\n      maxPercent={").concat(T,"}\n      colors={[").concat(P,"]}\n    />\n  </div>\n)\n\nexport default GraphicPage;\n")})})]})]})})),j=(t(262),function(){return Object(b.jsxs)("div",{className:"Home",children:[Object(b.jsx)("h1",{children:"Stylized percentage chart"}),Object(b.jsx)("p",{children:"Essa p\xe1gina tem como finalidade auxiliar na estiliza\xe7\xe3o do componente libary stylized-percentage-chart"}),Object(b.jsx)("p",{children:"Na p\xe1gina Estilizar gr\xe1fico encontrar ferramentas que permitir\xe1 que estilize o gr\xe1fico:"}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:"Na guia Backgroud, estilizar o fundo do seu gr\xe1fico;"}),Object(b.jsx)("li",{children:"Na guia Inserir Dados, insira dados simulando o que ocorrer\xe1 na sua apliza\xe7\xe3o;"}),Object(b.jsx)("li",{children:"Na guia Editar Barras, poder\xe1 alterar e excluir os dados e trocar a cor das barras;"}),Object(b.jsx)("li",{children:"Na guia Estilizar Barras, configure detalhes nos estilo das barras;"}),Object(b.jsx)("li",{children:"Na guia Legenda, poder\xe1 optar por usar legenda estilizada a seu gosto;"}),Object(b.jsx)("p",{children:"Para visualizar as altera\xe7\xf5es clique em aplicar;"})]})]})}),g="ADD_DATA",p="ADD_COLOR",m="ADD_BACKGROUND",f="ADD_STYLEBAR",O="ADD_LEGEND",x="REMOVE_DATA",C="EDIT_COLOR",v="EDIT_QTY",y=(t(263),function(e){var a=e.text,t=e.color,n=e.changeColor,r=e.qty,o=e.changeQty,c=e.remove;return Object(b.jsxs)("div",{className:"EditBar",children:[Object(b.jsx)("span",{children:a}),Object(b.jsx)("input",{type:"color",value:t,onChange:n}),Object(b.jsx)("input",{type:"number",value:r,onChange:o}),Object(b.jsx)("button",{type:"button",onClick:c,children:"Remove"})]})}),B=(t(18),Object(d.b)((function(e){return{data:e.data,colors:e.colors}}),(function(e){return{removeData:function(a){return e(function(e){return{type:x,state:e}}(a))},editColor:function(a){return e(function(e){return{type:C,state:e}}(a))},editQty:function(a){return e(function(e){return{type:v,state:e}}(a))}}}))((function(e){var a=e.data,t=e.colors,n=e.removeData,r=e.editColor,o=e.editQty,c=Object.keys(a);return Object(b.jsxs)("div",{className:"InputConatiner",children:[Object(b.jsx)("h3",{children:"Editar Barras"}),c.map((function(e,c){return Object(b.jsx)(y,{text:e,color:t[c],qty:a[e],remove:function(){return n({name:e,color:t[c]})},changeColor:function(e){var a=e.target.value;return r({index:c,color:a})},changeQty:function(a){var t=a.target.value;return o({name:e,qty:t})}},e)}))]})}))),k=t(2),L=t(7),S=t(13),w=t(14),N=t(9),z=t(16),T=t(15),P=(t(264),function(e){var a=e.labelText,t=e.value,n=e.change,r=e.type,o=e.name,c=e.checked;return Object(b.jsxs)("label",{htmlFor:o,className:"Input",children:["radio"!==r&&"checkbox"!==r?a:"",Object(b.jsx)("input",{type:r,id:o,value:t,checked:c,onChange:n,name:o}),"radio"===r||"checkbox"===r?a:""]})});P.defaultProps={value:"Not found"};var D=P,q=(t(265),function(e){var a=e.labelText,t=e.value,n=e.change,r=e.name,o=e.options;return Object(b.jsxs)("label",{htmlFor:r,className:"Select",children:[a,Object(b.jsx)("select",{id:r,value:t,onChange:n,name:r,children:o.map((function(e){return Object(b.jsx)("option",{children:e},e)}))})]})});q.defaultProps={value:"Not found"};var E=q,G=function(e){Object(z.a)(t,e);var a=Object(T.a)(t);function t(){var e;return Object(S.a)(this,t),(e=a.call(this)).state={backgroundColor:"#fff",lineColor:"#000",fontSizeBackground:"10",fontBackground:"monospace",widthGraph:"1000",heightGraph:"500",widthLine:"1",maxPercent:"100%",percentSide:"left",widthBorder:"1",borderColor:"black"},e.handlerChange=e.handlerChange.bind(Object(N.a)(e)),e.insertBackground=e.insertBackground.bind(Object(N.a)(e)),e}return Object(w.a)(t,[{key:"handlerChange",value:function(e){var a=e.target,t=a.name,n=a.value;this.setState(Object(L.a)({},t,n))}},{key:"insertBackground",value:function(){(0,this.props.addBackground)(Object(k.a)({},this.state))}},{key:"render",value:function(){var e=this.state,a=e.backgroundColor,t=e.lineColor,n=e.fontSizeBackground,r=e.widthGraph,o=e.heightGraph,c=e.widthLine,d=e.fontBackground,i=e.maxPercent,s=e.widthBorder,l=e.borderColor;return Object(b.jsxs)("div",{className:"InputConatiner",children:[Object(b.jsx)("h3",{children:"Estilo Background"}),Object(b.jsx)(D,{type:"color",name:"backgroundColor",labelText:"Cor de fundo:",value:a,change:this.handlerChange}),Object(b.jsx)(D,{type:"color",name:"lineColor",labelText:"Cor da linha:",value:t,change:this.handlerChange}),Object(b.jsx)(D,{type:"number",name:"widthLine",labelText:"Largura da linha:",value:c,change:this.handlerChange}),Object(b.jsx)(D,{type:"number",name:"fontSizeBackground",labelText:"Tamanho da letra:",value:n,change:this.handlerChange}),Object(b.jsx)(D,{type:"text",name:"fontBackground",labelText:"Fonte de fundo:",value:d,change:this.handlerChange}),Object(b.jsx)(D,{type:"number",name:"widthGraph",labelText:"Largura do grafico:",value:r,change:this.handlerChange}),Object(b.jsx)(D,{type:"number",name:"heightGraph",labelText:"Altura do grafico:",value:o,change:this.handlerChange}),Object(b.jsx)(D,{type:"number",name:"widthBorder",labelText:"Espessura da borda:",value:s,change:this.handlerChange}),Object(b.jsx)(D,{type:"color",name:"borderColor",labelText:"Cor da borda:",value:l,change:this.handlerChange}),Object(b.jsx)(D,{type:"radio",name:"percentSide",labelText:"Esquerdo",value:"left",change:this.handlerChange}),Object(b.jsx)(D,{type:"radio",name:"percentSide",labelText:"Direito",value:"right",change:this.handlerChange}),Object(b.jsx)(E,{name:"maxPercent",labelText:"Porcetagem a ser exibida:",value:i,change:this.handlerChange,options:["100%","70%","50%"]}),Object(b.jsx)("button",{type:"button",onClick:this.insertBackground,children:"Aplicar"})]})}}]),t}(n.Component),A=Object(d.b)(null,(function(e){return{addBackground:function(a){return e(function(e){return{type:m,state:e}}(a))}}}))(G),I=function(e){Object(z.a)(t,e);var a=Object(T.a)(t);function t(){var e;return Object(S.a)(this,t),(e=a.call(this)).state={widthBar:"60",fontSizeBar:"15",fontColordifBar:!1,fontColor:"black",fontBar:"monospace",topPercent:!1,baseName:!0},e.handlerChange=e.handlerChange.bind(Object(N.a)(e)),e.insertStyleBar=e.insertStyleBar.bind(Object(N.a)(e)),e}return Object(w.a)(t,[{key:"handlerChange",value:function(e){var a=e.target,t=a.name,n=a.value,r=a.checked,o="checkbox"===a.type?r:n;this.setState(Object(L.a)({},t,o))}},{key:"insertStyleBar",value:function(){(0,this.props.addStyleBar)(Object(k.a)({},this.state))}},{key:"render",value:function(){var e=this.state,a=e.widthBar,t=e.fontSizeBar,n=e.fontColordifBar,r=e.fontColor,o=e.topPercent,c=e.fontBar,d=e.baseName;return Object(b.jsxs)("div",{className:"InputConatiner",children:[Object(b.jsx)("h3",{children:"Estilo das Barras"}),Object(b.jsx)(D,{type:"number",name:"widthBar",labelText:"Largura das barras:",value:a,change:this.handlerChange}),Object(b.jsx)(D,{type:"number",name:"fontSizeBar",labelText:"Tamanho da fonte:",value:t,change:this.handlerChange}),Object(b.jsx)(D,{type:"text",name:"fontBar",labelText:"Fonte da barra:",value:c,change:this.handlerChange}),Object(b.jsx)(D,{type:"checkbox",name:"fontColorBlack",labelText:"Cor da fonte diferente da barra:",checked:n,change:this.handlerChange}),n&&Object(b.jsx)(D,{type:"color",name:"fontColor",labelText:"Cor da fonte:",value:r,change:this.handlerChange}),Object(b.jsx)(D,{type:"checkbox",name:"topPercent",labelText:"Exibir a porcentagem no topo da barra:",checked:o,change:this.handlerChange}),Object(b.jsx)(D,{type:"checkbox",name:"baseName",labelText:"Exibir o nome na base da barra:",checked:d,change:this.handlerChange}),Object(b.jsx)("button",{type:"button",onClick:this.insertStyleBar,children:"Aplicar"})]})}}]),t}(n.Component),V=Object(d.b)(null,(function(e){return{addStyleBar:function(a){return e(function(e){return{type:f,state:e}}(a))}}}))(I),R=function(e){Object(z.a)(t,e);var a=Object(T.a)(t);function t(){var e;return Object(S.a)(this,t),(e=a.call(this)).state={dataName:"",qty:0,color:"black"},e.handlerChange=e.handlerChange.bind(Object(N.a)(e)),e.insertData=e.insertData.bind(Object(N.a)(e)),e}return Object(w.a)(t,[{key:"handlerChange",value:function(e){var a=e.target,t=a.name,n=a.value;this.setState(Object(L.a)({},t,n))}},{key:"insertData",value:function(){var e=this.props,a=e.addData,t=e.addColor,n=this.state,r=n.dataName,o=n.qty,c=n.color;a(Object(L.a)({},r,o)),t(c),this.setState({dataName:"",qty:0,color:""})}},{key:"render",value:function(){var e=this.state,a=e.dataName,t=e.qty,n=e.color;return Object(b.jsxs)("div",{className:"InputConatiner",children:[Object(b.jsx)("h3",{children:"Inserir Dados"}),Object(b.jsx)(D,{type:"text",name:"dataName",labelText:"Nome:",value:a,change:this.handlerChange}),Object(b.jsx)(D,{type:"number",name:"qty",labelText:"Quantidade:",value:t,change:this.handlerChange}),Object(b.jsx)(D,{type:"color",name:"color",value:n,labelText:"Cor:",change:this.handlerChange}),Object(b.jsx)("button",{type:"button",onClick:this.insertData,children:"Inserir Dado"})]})}}]),t}(n.Component),_=Object(d.b)(null,(function(e){return{addData:function(a){return e(function(e){return{type:g,state:e}}(a))},addColor:function(a){return e(function(e){return{type:p,state:e}}(a))}}}))(R),F=function(e){Object(z.a)(t,e);var a=Object(T.a)(t);function t(){var e;return Object(S.a)(this,t),(e=a.call(this)).state={withLegend:!1,fontLegend:"monospace",fontLegendSize:"20",fontColorLegend:"black",colorLegend:"#fff",borderLegend:1,colorBorderLegend:"black",legendSide:"right",legendVertical:"atop"},e.handlerChange=e.handlerChange.bind(Object(N.a)(e)),e.insertLegenda=e.insertLegenda.bind(Object(N.a)(e)),e}return Object(w.a)(t,[{key:"handlerChange",value:function(e){var a=this,t=e.target,n=t.name,r=t.value,o=t.checked,c="checkbox"===t.type?o:r;this.setState(Object(L.a)({},n,c),(function(){"withLegend"===n&&a.insertLegenda()}))}},{key:"insertLegenda",value:function(){(0,this.props.addLegend)(Object(k.a)({},this.state))}},{key:"render",value:function(){var e=this.state,a=e.withLegend,t=e.fontLegend,n=e.fontLegendSize,r=e.colorLegend,o=e.borderLegend,c=e.colorBorderLegend,d=e.fontColorLegend;return Object(b.jsxs)("div",{className:"InputConatiner",children:[Object(b.jsx)("h3",{children:"Legenda"}),Object(b.jsx)(D,{type:"checkbox",name:"withLegend",labelText:"Com legenda",checked:a,change:this.handlerChange}),a&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(D,{type:"text",name:"fontLegend",labelText:"Fonte da legenda:",value:t,change:this.handlerChange}),Object(b.jsx)(D,{type:"number",name:"fontLegendSize",labelText:"Tamanho da fonte:",value:n,change:this.handlerChange}),Object(b.jsx)(D,{type:"color",name:"fontColorLegend",labelText:"Cor da fonte:",value:d,change:this.handlerChange}),Object(b.jsx)(D,{type:"color",name:"colorLegend",labelText:"Cor de fundo da legenda:",value:r,change:this.handlerChange}),Object(b.jsx)(D,{type:"number",name:"borderLegend",labelText:"Largura da borda:",value:o,change:this.handlerChange}),Object(b.jsx)(D,{type:"color",name:"colorBorderLegend",labelText:"Cor da borda:",value:c,change:this.handlerChange}),Object(b.jsx)(D,{type:"radio",name:"legendSide",labelText:"Esquerdo",value:"left",change:this.handlerChange}),Object(b.jsx)(D,{type:"radio",name:"legendSide",labelText:"Direito",value:"right",change:this.handlerChange}),Object(b.jsx)(D,{type:"radio",name:"legendVertical",labelText:"Superior",value:"atop",change:this.handlerChange}),Object(b.jsx)(D,{type:"radio",name:"legendVertical",labelText:"Inferior",value:"bottom",change:this.handlerChange})]}),Object(b.jsx)("button",{type:"button",onClick:this.insertLegenda,children:"Aplicar"})]})}}]),t}(n.Component),Q=Object(d.b)(null,(function(e){return{addLegend:function(a){return e(function(e){return{type:O,state:e}}(a))}}}))(F),H=(t(266),function(){return Object(b.jsx)("div",{className:"DataPage",children:Object(b.jsxs)(i.c,{children:[Object(b.jsx)(i.a,{exact:!0,path:"/percentage-chart/settings",component:A}),Object(b.jsx)(i.a,{path:"/percentage-chart/settings/insert-data",component:_}),Object(b.jsx)(i.a,{path:"/percentage-chart/settings/edit-bar",component:B}),Object(b.jsx)(i.a,{path:"/percentage-chart/settings/style-bar",component:V}),Object(b.jsx)(i.a,{path:"/percentage-chart/settings/legend",component:Q})]})})}),J=t(34),M=(t(274),function(){return Object(b.jsxs)("nav",{className:"NavSet",children:[Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)(c.b,{to:"/percentage-chart/settings",children:"Estilo Background"})}),Object(b.jsx)("li",{children:Object(b.jsx)(c.b,{to:"/percentage-chart/settings/insert-data",children:"Inserir Dados"})}),Object(b.jsx)("li",{children:Object(b.jsx)(c.b,{to:"/percentage-chart/settings/edit-bar",children:"Editar Barras"})}),Object(b.jsx)("li",{children:Object(b.jsx)(c.b,{to:"/percentage-chart/settings/style-bar",children:"Estilizar Barras"})}),Object(b.jsx)("li",{children:Object(b.jsx)(c.b,{to:"/percentage-chart/settings/legend",children:"Legenda"})})]}),Object(b.jsx)(c.b,{to:"/code",children:Object(b.jsx)("button",{type:"button",children:"Concluir"})})]})}),W=(t(275),Object(d.b)((function(e){return{style:e,data:e.data,colors:e.colors,maxPercent:e.maxPercent}}))((function(e){var a=e.data,t=e.colors,n=e.maxPercent,r=e.style;return Object(b.jsxs)("div",{className:"GraphicPage",children:[Object(b.jsx)(M,{}),Object(b.jsx)("div",{className:"graphic",children:Object(b.jsx)(J.PercentChart,{style:r,data:a,maxPercent:n,colors:t})})]})})));t(276);var Y=function(){return Object(b.jsxs)("div",{className:"SetPage",children:[Object(b.jsx)(H,{}),Object(b.jsx)(W,{})]})},K=[{name:"data",description:"O data receber\xe1 um objeto onde a chave ser\xe1 o nome de referencia ao dado a ser exibido e o valor ser\xe1 o numero correspondente ao mesmo. O data fica fora do objeto \u201cstyle\u201d pois o mesmo conter\xe1 os dados a ser exibido."},{name:"colors",description:"O colors \xe9 um array com as cores exibidas nas barras, sendo a sua ordem seguindo a sequencia do objeto data. Caso n\xe3o seja passada cores o suficiente, as barras ter\xe3o a cor #aaa e a mesma n\xe3o ser\xe1 exibida na legenda."},{name:"maxPercent",description:"O maxPercent pode receber tr\xeas tipos: 100%, 75% e 50%, sendo esses o maximo de porcentagem a ser exibido no background. O maxPercent n\xe3o est\xe1 no objeto style para que caso prefira fazer uma logica para ser exibido de acordo com o resultado. Caso n\xe3o seja passado ele assumir\xe1 o  valor de 100%."}],U=[{name:"backgrondColor",description:"O backgroundColor especifica a a cor de funco do grafico. Caso nenhum valor seja passado assumir\xe1 o valor \u2018white\u2019."},{name:"lineColor",description:"O lineColor define a cor das linhas de marca\xe7\xe3o da porcentagem no fundo do gr\xe1fico, caso n\xe3o queira essas linhas, basta colocar a mesma cor que o backgroundColor. Caso nenhum valor seja passado, assumir\xe1 o valor \u2018black\u2019."},{name:"widthLine",description:"A widthLine determina a espessura da linha que divide a porcentagem no fundo do gr\xe1fico. Caso nenhum valor seja passado ele assumir\xe1 o valor de \u20181\u2019."},{name:"fontSizeBackground",description:"O fontSizeBackground informa o tamanho da letra usada para exibir a porcentagem no fundo do gr\xe1fico. Caso nenhum valor seja passado, assumir\xe1 o valor \u201810\u2019."},{name:"fontBackgorund ",description:"A fontBackground determina a font-family usada na porcentagem do fundo do gr\xe1fico. Caso nenhum valor seja passado ele assumir\xe1 o valor de \u2018monospace\u2019."},{name:"widthGraph",description:"O widthGraph especifica a largura no tamanho do gr\xe1fico. Caso nenhum valor seja passado, assumir\xe1 o valor de \u20181000\u2019."},{name:"heightGraph",description:"heightGraph representa a altura no tamanho do gr\xe1fico. Caso nenhum valor seja passado, assumir\xe1 o valor de \u2018500\u2019."},{name:"WidthBorder",description:"O widthBorder representa a espessura da borda do gr\xe1fico. Caso nenhum valor seja passado, assumir\xe1 o valor de \u20181\u2019."},{name:"borderColor",description:"O borderColor determina a cor da borda do gr\xe1fico.Caso nenhum valor seja passado, assumir\xe1 o valor de \u2018black\u2019."},{name:"percentSide",description:"O percentSide determina o lado onde ser\xe1 exibido a porcentagem, caso nenhum valor seja passado receber\xe1 o valor de \u2018left\u2019."},{name:"widthBar",description:"A widthBar determina a largura das barras. Caso nenhum valor seja passado receber\xe1 o valor de \u201860\u2019."},{name:"fontSizeBar",description:"A fontSizeBar determina o tamanho da letra escrita na base da barra. Caso n\xe3o seja passado nenhum valor, receber\xe1 \u201815\u2019."},{name:"fontBar",description:"A fontBar determina a font-family usada na base da barra. Caso nenhum valor seja passado, assumir\xe1 o valor de \u2018monospace\u2019."},{name:"fontColordifBar",description:"O fontColordifBar recebe um booleano onde determina se a cor das letras na base da barra ter\xe1 a mesma cor que a barra, caso n\xe3o seja acionado a cor ser\xe1 a mesma que as barras."},{name:"fontColor",description:"Caso opte pela cor das letras serem diferente das barras, poder\xe1 escolher a cor atrav\xe9s do fontColor, tendo como padr\xe3o o valor \u2018black\u2019."},{name:"topPercent",description:"Quando acionado o topPercent exibe o valor da porcentagem no topo da barra, sua formata\xe7\xe3o \xe9 a mesma que as letras da base da barra, por\xe9m sua exibi\xe7\xe3o \xe9 independente."},{name:"baseName",description:"O baseName determina se ser\xe1 exibido ou n\xe3o o nome na base da barra. Caso opte por usar legenda pode desativ\xe1-lo passando o valor booleano de false."},{name:"withLegend",description:"O withLegend determina se voc\xea vai querer um gr\xe1fico com legenda ou n\xe3o, recebendo o valor booleano de true para sim, tendo como pad\xe3o o valor false."},{name:"fonteLegend",description:"O fonteLegend determina o font-family usado na legenda, sendo o padr\xe3o \u2018monospace\u2019."},{name:"fontLegendSize",description:"O fontColorLegend determina a cor da fonte usada na legenda, sendo o padr\xe3o \u2018black\u2019."},{name:"colorLegend",description:"O colorLegend determina a cor da  legenda, sendo o padr\xe3o \u2018white\u2019."},{name:"borderLegend",description:"O borderLegend determina a espessura da borda da legenda. Caso nenhum valor seja passado, receber\xe1 \u20181\u2019"},{name:"colorBorderLegend",description:"colorBorderLegend determina a cor da borda da legenda"},{name:"legendSide",description:"O legendSide determina o lado em que a legenda ficar\xe1, tendo como padr\xe3o \u2018right\u2019"},{name:"legendVertical",description:"O legendVertical determina o posicionamento da legenda na vertical, tendo como padr\xe3o o \u2018atop\u2019"}],X=(t(277),function(){return Object(b.jsxs)("div",{className:"Summary",children:[Object(b.jsx)("h2",{children:"Sum\xe1rio"}),Object(b.jsx)("h3",{children:"Dados din\xe2micos"}),K.map((function(e){var a=e.name,t=e.description;return Object(b.jsxs)("div",{className:"item",children:[Object(b.jsx)("h4",{children:a}),Object(b.jsx)("p",{children:t})]},a)})),Object(b.jsx)("h3",{children:"Dados de estilo"}),U.map((function(e){var a=e.name,t=e.description;return Object(b.jsxs)("div",{className:"item",children:[Object(b.jsx)("h4",{children:a}),Object(b.jsx)("p",{children:t})]},a)}))]})});var Z=function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)("nav",{children:[Object(b.jsxs)("div",{style:{color:"white",fontSize:"75px"},children:[Object(b.jsx)("a",{href:"https://github.com/Gonzagadavid/percentage-chart",target:"_blank",rel:"noreferrer",children:Object(b.jsx)(s.a,{})}),Object(b.jsx)("a",{href:"https://www.npmjs.com/package/stylized-percentage-chart",target:"_blank",rel:"noreferrer",children:Object(b.jsx)(s.b,{})})]}),Object(b.jsx)(c.b,{to:"/percentage-chart",children:"In\xedcio"}),Object(b.jsx)(c.b,{to:"/percentage-chart/settings",children:"Estilizar Gr\xe1fico"}),Object(b.jsx)(c.b,{to:"/percentage-chart/code",children:"C\xf3digo do Estilo"}),Object(b.jsx)(c.b,{to:"/percentage-chart/summary",children:"Sum\xe1rio"})]}),Object(b.jsx)("main",{children:Object(b.jsxs)(i.c,{children:[Object(b.jsx)(i.a,{exact:!0,path:"/percentage-chart",component:j}),Object(b.jsx)(i.a,{path:"/percentage-chart/settings",component:Y}),Object(b.jsx)(i.a,{path:"/percentage-chart/code",component:u}),Object(b.jsx)(i.a,{path:"/percentage-chart/summary",component:X})]})})]})},$=t(27),ee=t(35),ae=t(36),te={data:{},colors:[],backgroundColor:"white",lineColor:"black",fontSizeBackground:"10",widthGraph:"1000",heightGraph:"500",widthBorder:"1",borderColor:"black",widthLine:"1",fontBackground:"monospace",maxPercent:"100%",percentSide:"left",widthBar:"60",fontSizeBar:"15",fontBar:"monospace",fontColordifBar:!1,fontColor:"black",topPercent:!1,baseName:!0,withLegend:!1,fontLegend:"monospace",fontLegendSize:"20",fontColorLegend:"black",colorLegend:"white",borderLegend:1,colorBorderLegend:"black",legendSide:"right",legendVertical:"atop"},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case g:return Object(k.a)(Object(k.a)({},e),{},{data:Object(k.a)(Object(k.a)({},e.data),a.state)});case p:return Object(k.a)(Object(k.a)({},e),{},{colors:[].concat(Object(ae.a)(e.colors),[a.state])});case m:case f:case O:return Object(k.a)(Object(k.a)({},e),a.state);case x:return Object(k.a)(Object(k.a)({},e),{},{data:Object.keys(e.data).filter((function(e){return e!==a.state.name})).reduce((function(a,t){return Object(k.a)(Object(k.a)({},a),{},Object(L.a)({},t,e.data[t]))}),{}),colors:e.colors.filter((function(e){return e!==a.state.color}))});case C:return Object(k.a)(Object(k.a)({},e),{},{colors:e.colors.map((function(e,t){return t===a.state.index?a.state.color:e}))});case v:return Object(k.a)(Object(k.a)({},e),{},{data:Object(k.a)(Object(k.a)({},e.data),{},Object(L.a)({},a.state.name,a.state.qty))});default:return e}},re=Object($.createStore)(ne,Object(ee.composeWithDevTools)());o.a.render(Object(b.jsx)(c.a,{children:Object(b.jsx)(d.a,{store:re,children:Object(b.jsx)(Z,{})})}),document.getElementById("root"))},41:function(e,a,t){},47:function(e,a,t){},48:function(e,a,t){}},[[278,1,2]]]);
//# sourceMappingURL=main.046b6cfd.chunk.js.map