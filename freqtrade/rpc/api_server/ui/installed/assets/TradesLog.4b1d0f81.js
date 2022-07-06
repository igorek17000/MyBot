import{u as g,i as b,a as y,b as C,c as x,d as $,U as T}from"./install.0dc8b161.js";import{d as w,e as S,r as _,w as k,c as p,n as L,t as R}from"./index.ef7539b9.js";import{i as I,a as O,k as P,c as A,l as j}from"./install.5a6de981.js";g([I,O,b,y,P,C,x,$]);const u="Profit";var F=w({name:"CumProfitChart",components:{"v-chart":T},props:{trades:{required:!0,type:Array},showTitle:{default:!0,type:Boolean},profitColumn:{default:"close_profit_abs",type:String}},setup(t){const a=S(),r=_([]),d=_([]);k(()=>t.trades,()=>{r.value=[];const n=[],o={},c=t.trades.slice().sort((i,m)=>i.close_timestamp>m.close_timestamp?1:-1);let s=0;for(let i=0,m=c.length;i<m;i+=1){const e=c[i];e.close_timestamp&&e[t.profitColumn]&&(s+=e[t.profitColumn],o[e.close_timestamp]?(o[e.close_timestamp].profit+=e[t.profitColumn],o[e.close_timestamp][e.botId]?o[e.close_timestamp][e.botId]+=e[t.profitColumn]:o[e.close_timestamp][e.botId]=s):o[e.close_timestamp]={profit:s,[e.botId]:s},n.push({date:e.close_timestamp,profit:s,[e.botId]:s}),r.value.includes(e.botId)||r.value.push(e.botId))}d.value=Object.entries(o).map(([i,m])=>({date:parseInt(i,10),profit:m.profit}))});const l=p(()=>({title:{text:"Cumulative Profit",show:t.showTitle},backgroundColor:"rgba(0, 0, 0, 0)",dataset:{dimensions:["date","profit"],source:d.value},tooltip:{trigger:"axis",axisPointer:{type:"line",label:{backgroundColor:"#6a7985"}}},legend:{data:[u],right:"5%"},useUTC:!1,xAxis:{type:"time"},yAxis:[{type:"value",name:u,splitLine:{show:!1},nameRotate:90,nameLocation:"middle",nameGap:40}],grid:{bottom:80},dataZoom:[{type:"inside",start:0,end:100},{show:!0,type:"slider",bottom:10,start:0,end:100}],series:[{type:"line",name:u,animation:!0,step:"end",lineStyle:{color:a.chartTheme==="dark"?"#c2c2c2":"black"},itemStyle:{color:a.chartTheme==="dark"?"#c2c2c2":"black"}}]}));return{settingsStore:a,cumulativeData:d,chartOptions:l}}}),z=function(){var t=this,a=t.$createElement,r=t._self._c||a;return t.trades?r("v-chart",{attrs:{option:t.chartOptions,autoresize:"",theme:t.settingsStore.chartTheme}}):t._e()},G=[];const h={};var D=L(F,z,G,!1,H,"d809ae44",null,null);function H(t){for(let a in h)this[a]=h[a]}var Q=function(){return D.exports}();g([I,O,b,y,P,C,x,$,A,j]);const f="Profit %",M="#9be0a8";var q=w({name:"TradesLogChart",components:{"v-chart":T},props:{trades:{required:!0,type:Array},showTitle:{default:!0,type:Boolean}},setup(t){const a=S(),r=p(()=>{const l=[],n=t.trades.slice(0).sort((o,c)=>o.close_timestamp>c.close_timestamp?1:-1);for(let o=0,c=n.length;o<c;o+=1){const s=n[o],i=[o,(s.profit_ratio*100).toFixed(2),s.pair,s.botName,R(s.close_timestamp),s.is_short===void 0||!s.is_short?"Long":"Short"];l.push(i)}return l}),d=p(()=>{const l=r.value.length>0?(1-50/r.value.length)*100:100;return{title:{text:"Trades log",show:t.showTitle},backgroundColor:"rgba(0, 0, 0, 0)",dataset:{dimensions:["date","profit"],source:r.value},tooltip:{trigger:"axis",formatter:n=>{const o=n[0].data[3]?` | ${n[0].data[3]}`:"";return`${n[0].data[2]} | ${n[0].data[5]} ${o}<br>${n[0].data[4]}<br>Profit ${n[0].data[1]} %`},axisPointer:{type:"line",label:{backgroundColor:"#6a7985"}}},xAxis:{type:"value",show:!1},yAxis:[{type:"value",name:f,splitLine:{show:!1},nameRotate:90,nameLocation:"middle",nameGap:30}],grid:{bottom:80},dataZoom:[{type:"inside",start:l,end:100},{show:!0,type:"slider",bottom:10,start:l,end:100}],visualMap:[{show:!0,seriesIndex:0,pieces:[{max:0,color:"#f84960"},{min:0,color:"#2ed191"}]}],series:[{type:"bar",name:f,barGap:"0%",barCategoryGap:"0%",animation:!1,label:{show:!0,position:"top",rotate:90,offset:[7.5,7.5],formatter:"{@[1]} %",color:a.chartTheme==="dark"?"#c2c2c2":"#3c3c3c"},encode:{x:0,y:1},itemStyle:{color:M}}]}});return{settingsStore:a,chartData:r,chartOptions:d}}}),B=function(){var t=this,a=t.$createElement,r=t._self._c||a;return t.trades.length>0?r("v-chart",{attrs:{option:t.chartOptions,autoresize:"",theme:t.settingsStore.chartTheme}}):t._e()},E=[];const v={};var N=L(q,B,E,!1,U,"03e58e40",null,null);function U(t){for(let a in v)this[a]=v[a]}var V=function(){return N.exports}();export{Q as C,V as T};
//# sourceMappingURL=TradesLog.4b1d0f81.js.map