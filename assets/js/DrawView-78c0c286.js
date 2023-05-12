import{m as g,a as y}from"./index-f29d177b.js";import{c as b}from"./useCartStore-e7c6a337.js";import{s as x}from"./useSweetAlertStore-8261f0c8.js";import{L as v}from"./LoadingDesign-df3df60d.js";import{u as L}from"./useFrontProducts-6b267b02.js";import{v as P}from"./runtime-dom.esm-bundler-eb0e3820.js";import{b6 as T,av as C,aj as r,l as a,t as w,m as t,F as _,at as k,aJ as l,k as u,b1 as A,b3 as S,s as f}from"./_plugin-vue_export-helper-68081c38.js";import"./vue-router-e29dd812.js";import"./axios-aba6f0e0.js";const{VITE_APP_URL:D,VITE_APP_PATH:E}={VITE_APP_URL:"https://vue3-course-api.hexschool.io",VITE_APP_PATH:"2259buyer",BASE_URL:"/VueTraining_w7/",MODE:"production",DEV:!1,PROD:!0},I={data(){return{isLoading:!0,categorys:["精選套餐","現烤總匯","漢堡","現烤吐司","蛋餅、河粉蛋餅","中西式點心"],selectedCategorys:[],selectdeProducts:[],checkAll:!1,canStartLottery:!1,winner:null,productID:"",loadingItem:""}},methods:{onCheckAllChange(){this.selectedCategorys=this.checkAll?[...this.categorys]:[]},watchSelectedCategorys(){this.selectedCategorys.length===0||this.selectedCategorys.length===this.categorys.length?this.checkAll=!0:this.checkAll=!1},startLottery(){this.selectedCategorys.length!==0?this.selectdeProducts=this.filterProduct():this.selectdeProducts=this.products;let s=20;const o=2e3,d=20,i=100;let n=0;const c=setInterval(()=>{const p=Math.floor(Math.random()*this.selectdeProducts.length),m=this.selectdeProducts[p];if(this.winner=m,n<i&&(s+=d,n++),s>=o){clearInterval(c);const{id:e}=this.winner;this.addToCart(e)}},s);this.selectedCategorys=[]},addToCart(s,o=1){this.selectdeProducts=[];const d={product_id:s,qty:o,message:"抽抽樂抽到的"};this.$http.post(`${D}/v2/api/${E}/cart`,{data:d}).then(i=>{this.swalToastTopEnd("已幫您自動加入購物車"),this.getCartData()}).catch(i=>{this.swalError(i)})},filterProduct(){return this.products.filter(s=>this.selectedCategorys.findIndex(o=>o===s.category)!==-1)},...g(b,["getCartData","addToCart","deleteOneCart","swalClearAllCart"]),...g(x,["swalError","swalToastTopEnd"])},computed:{...y(L,["products"]),...y(b,["finalTotal","carts"])},components:{LoadingDesign:v},mounted(){this.getCartData(),document.title="鮮堡漢堡 文化店 | 早餐轉轉轉",document.readyState==="complete"&&(this.isLoading=!1)}},V={class:"w-100 position-relative z-2"},U=t("section",{class:"common-hero container"},[t("h2",{class:"mb-1ls-2 text-sm-start text-center"}," 不知道吃什麼嗎？我也許能幫忙！ "),t("h1",{class:"text-secondary text-nowrap font-monospace text-uppercase mb-1"}," make life smoother ")],-1),R={class:"container"},B={class:"row row-cols-1 row-cols-lg-2 p-1 pb-6"},M={class:"col"},N={class:"row justify-content-center bg-third rounded rounded-4 rounded-lg-5 p-4 p-md-6"},O=t("h5",null,"有特別想要的餐點類別嗎？（預設全選）",-1),j={class:"form-group mb-2"},F=t("div",{class:"form-check"},null,-1),H=["id","value"],q=["for"],z={key:0,class:"mt-5 fs-5"},J={class:"col"},G={class:"table align-middle w-100 border-secondary p-2"},K=t("thead",null,[t("tr",{class:"w-100"},[t("th",null,"品名"),t("th",{class:"text-nowrap text-center"},"單價"),t("th",{class:"text-nowrap text-center"},"數量"),t("th",{class:"text-nowrap text-center"},"小計"),t("th")])],-1),Q={class:"w-100"},W={key:0,class:"text-success"},X={class:"text-center"},Y={class:"text-center"},Z={class:"text-center"},$=["onClick","disabled"],tt={key:0,class:"fas fa-spinner fa-pulse"},et={class:"border-transparent"},st=t("td",{colspan:"4",class:"text-end border-0"},"總計",-1),ot={class:"text-end border-0"},nt={class:"d-flex justify-content-between mb-4"};function rt(s,o,d,i,n,c){const p=C("LoadingDesign"),m=C("RouterLink");return r(),a(_,null,[w(p,{"is-Loading":n.isLoading},null,8,["is-Loading"]),t("main",V,[U,t("section",R,[t("div",B,[t("div",M,[t("div",N,[O,t("div",j,[F,(r(!0),a(_,null,k(n.categorys,e=>(r(),a("div",{class:"form-check",key:e},[S(t("input",{class:"form-check-input",type:"checkbox",id:e,value:e,"onUpdate:modelValue":o[0]||(o[0]=h=>n.selectedCategorys=h),onChange:o[1]||(o[1]=(...h)=>c.watchSelectedCategorys&&c.watchSelectedCategorys(...h))},null,40,H),[[P,n.selectedCategorys]]),t("label",{class:"form-check-label",for:e},l(e),9,q)]))),128))]),t("button",{class:"btn btn-primary",onClick:o[2]||(o[2]=(...e)=>c.startLottery&&c.startLottery(...e))},"按我開始，決定今天吃什麼 "),n.winner?(r(),a("div",z," 您覺得今天吃 『 "+l(n.winner.title)+" 』 好嗎？ ",1)):u("",!0)])]),t("div",J,[t("table",G,[K,t("tbody",Q,[s.carts?(r(!0),a(_,{key:0},k(s.carts,e=>(r(),a("tr",{key:e.id},[t("td",null,[f(l(e.product.title)+" ",1),e.coupon?(r(),a("div",W," 已套用優惠券 ")):u("",!0)]),t("td",X,l(e.product.price),1),t("td",Y,l(e.qty),1),t("td",Z,l(e.total),1),t("td",null,[t("button",{type:"button",class:"btn btn-outline-secondary btn-sm",onClick:h=>s.deleteOneCart(e.id),disabled:e.id===n.loadingItem},[n.loadingItem===e.id?(r(),a("i",tt)):u("",!0),f(" x ")],8,$)])]))),128)):u("",!0)]),t("tfoot",et,[t("tr",null,[st,t("td",ot,l(s.finalTotal),1)])])]),t("div",nt,[t("button",{class:"btn btn-danger",type:"button",onClick:o[3]||(o[3]=(...e)=>s.swalClearAllCart&&s.swalClearAllCart(...e))}," 清空商品 "),w(m,{class:"btn btn-secondary",type:"button",to:"/products"},{default:A(()=>[f("想點更多")]),_:1})])])])])])],64)}const _t=T(I,[["render",rt]]);export{_t as default};