import{f as y}from"./numberformat.a1b2908a.js";import{d as h,u as S,c as P,t as _,n as $}from"./index.ef7539b9.js";import{T as b,P as C}from"./TradeProfit.af2e34d4.js";var x=h({name:"PairSummary",components:{TradeProfit:b,ProfitPill:C},props:{pairlist:{required:!0,type:Array},currentLocks:{required:!1,type:Array,default:()=>[]},trades:{required:!0,type:Array},sortMethod:{default:"normal",type:String},backtestMode:{required:!1,default:!1,type:Boolean}},setup(t){const n=S(),i=P(()=>{const o=[];return t.pairlist.forEach(a=>{const r=t.trades.filter(s=>s.pair===a),d=t.currentLocks.filter(s=>s.pair===a);let m="",l;d.sort((s,c)=>s.lock_end_timestamp>c.lock_end_timestamp?-1:1),d.length>0&&([l]=d,m=`${_(l.lock_end_timestamp)} - ${l.reason}`);let f="",u=0,k=0;r.forEach(s=>{var c;u+=s.profit_ratio,k+=(c=s.profit_abs)!=null?c:0});const v=r.length,p=v?r[0]:void 0;r.length>0&&(f=`Current profit: ${y(u)}`),p&&(f+=`
Open since: ${_(p.open_timestamp)}`),o.push({pair:a,trade:p,locks:l,lockReason:m,profitString:f,profit:u,profitAbs:k,tradeCount:v})}),t.sortMethod==="profit"?o.sort((a,r)=>a.profit>r.profit?-1:1):o.sort((a,r)=>a.trade&&!r.trade?-1:a.trade&&r.trade?a.trade.trade_id>r.trade.trade_id?1:-1:!a.locks&&r.locks?-1:a.locks&&r.locks?a.locks.lock_end_timestamp>r.locks.lock_end_timestamp?1:-1:1),o}),e=P(()=>[{key:"pair",label:"Pair"},{key:"locks.lock_end_timestamp",label:"Lock",formatter:o=>o?`${_(o)}`:""},{key:"trade.current_profit",label:"Position",formatter:o=>y(o,3)}]);return{combinedPairList:i,tableFields:e,botStore:n}}}),L=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("b-list-group",t._l(t.combinedPairList,function(e){return i("b-list-group-item",{key:e.pair,staticClass:"d-flex justify-content-between align-items-center py-1",attrs:{button:"",active:e.pair===t.botStore.activeBot.selectedPair,title:`${e.pair} - ${e.tradeCount} trades`},on:{click:function(o){t.botStore.activeBot.selectedPair=e.pair}}},[i("div",[t._v(" "+t._s(e.pair)+" "),e.locks?i("span",{attrs:{title:e.lockReason}},[t._v(" \u{1F512} ")]):t._e()]),e.trade&&!t.backtestMode?i("TradeProfit",{attrs:{trade:e.trade}}):t._e(),t.backtestMode&&e.tradeCount>0?i("ProfitPill",{attrs:{"profit-ratio":e.profit,"stake-currency":t.botStore.activeBot.stakeCurrency}}):t._e()],1)}),1)},M=[];const g={};var B=$(x,L,M,!1,q,"b5a67bfe",null,null);function q(t){for(let n in g)this[n]=g[n]}var T=function(){return B.exports}();export{T as P};
//# sourceMappingURL=PairSummary.369a1ae1.js.map
