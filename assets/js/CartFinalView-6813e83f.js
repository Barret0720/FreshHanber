import{s as h}from"./useSweetAlertStore-de1b9f26.js";import{u as d}from"./useFrontProducts-f0031236.js";import{m as c,a as m}from"./index-ea6d9255.js";import{b6 as _,aj as a,l as n,m as t,s as i,aJ as s,F as u,at as b,k as p}from"./_plugin-vue_export-helper-68081c38.js";import"./axios-aba6f0e0.js";import"./vue-router-e29dd812.js";const{VITE_APP_URL:g,VITE_APP_PATH:x}={VITE_APP_URL:"https://vue3-course-api.hexschool.io",VITE_APP_PATH:"2259buyer",BASE_URL:"/FreshHanber/",MODE:"production",DEV:!1,PROD:!0},w={data(){return{order:{}}},methods:{getOrderData(){this.loadingStatue(!0);const{id:l}=this.$route.params;this.$http.get(`${g}/v2/api/${x}/order/${l}`).then(r=>{this.order=r.data.order,this.loadingStatue(!1)}).catch(r=>{this.swalError(r)})},...c(h,["swalError","swalToastTopEnd"]),...c(d,["loadingStatue"])},computed:{...m(d,["isLoading"])},mounted(){this.getOrderData(),document.title="鮮堡漢堡 文化店 | 完成點餐"}},f={class:"w-100 position-relative z-2"},y=t("section",{class:"common-hero container"},[t("div",{class:"position-relative m-5 mb-7"},[t("div",{class:"progress bg-third",style:{height:"2px"}},[t("div",{class:"progress-bar bg-danger",role:"progressbar","aria-label":"Progress",style:{width:"66.66%"},"aria-valuenow":"66.66","aria-valuemin":"0","aria-valuemax":"100"})]),t("button",{type:"button",class:"position-absolute top-0 start-0 translate-middle btn btn-sm btn-danger rounded-pill text-white",style:{width:"1rem",height:"1rem"}}),t("p",{class:"position-absolute top-0 start-0 translate-middle pt-6 fs-7 fw-bold"}," 選擇餐點 "),t("button",{type:"button",class:"position-absolute top-0 start-33 translate-middle btn btn-sm btn-danger rounded-pill text-white",style:{width:"1rem",height:"1rem"}}),t("p",{class:"position-absolute top-0 start-33 translate-middle pt-6 fs-7 fw-bold"}," 訂購資料 "),t("button",{type:"button",class:"position-absolute top-0 start-66 translate-middle btn btn-sm btn-danger rounded-pill text-white",style:{width:"1rem",height:"1rem"}}),t("p",{class:"position-absolute top-0 start-66 translate-middle pt-6 fs-7 fw-bold"}," 餐點準備中 "),t("button",{type:"button",class:"position-absolute top-0 start-100 translate-middle btn btn-sm btn-third rounded-pill",style:{width:"1rem",height:"1rem"}}),t("p",{class:"position-absolute top-0 start-100 translate-middle pt-6 fs-7 text-secondary text-nowrap"}," 完成取餐 ")])],-1),P={key:0,class:"container"},v=t("h2",{class:"ls-2 text-sm-start text-center mb-3"}," 您的訂單已送出，正在製作中！ ",-1),E={class:"fs-4 ls-15 mb-3"},A=t("br",null,null,-1),D=t("span",{class:"text-danger"},[i("有任何問題請直接來電"),t("a",{class:"text-danger text-decoration-none",href:"tel:+886222590910"},"02-22590910")],-1),T=t("br",null,null,-1),V=t("br",null,null,-1),S={class:"list-unstyled fs-5 mb-3"},k={class:"mb-1"},H={class:"mb-1"},L={class:"mb-1"},B={class:"mb-1"},F={class:"pb-6"},I=t("h4",{class:"text-center text-lg-start fw-bold mb-1"},"訂購商品清單",-1),O={class:"table align-middle w-100 border-secondary"},R=t("thead",null,[t("tr",{class:"w-100"},[t("th",null,"品名"),t("th",{class:"text-nowrap text-center"},"單價"),t("th",{class:"text-nowrap text-center"},"數量"),t("th",{class:"text-nowrap text-center"},"小計")])],-1),Y={class:"w-100"},M={class:"text-center"},N={class:"text-center"},U={class:"text-center"},C={class:"mb-2"},j=t("td",{colspan:"3",class:"text-end border-0"},"總計",-1),q={class:"text-end border-0"},z={colspan:"4",class:"border-0"};function J(l,r,G,K,e,Q){return a(),n("main",f,[y,e.order.user?(a(),n("section",P,[v,t("p",E,[i(" 感謝您的選購，我們將立即為您準備餐點。"),A,D,T,i(" 同時告知您的訂單編號 "+s(e.order.id.substr(-4,4))+" 與訂購人大名。",1),V]),t("ul",S,[t("li",k,"桌號：#"+s(e.order.user.address),1),t("li",H," 訂單日期："+s(l.$moment(new Date(e.order.create_at*1e3)).format("YYYY-MM-DD HH:mm")),1),t("li",L,"訂單編號："+s(e.order.id.substr(-4,4)),1),t("li",B,"訂購人："+s(e.order.user.name),1)]),t("div",F,[I,t("table",O,[R,t("tbody",Y,[e.order.products?(a(!0),n(u,{key:0},b(e.order.products,o=>(a(),n("tr",{key:o.id},[t("td",null,s(o.product.title),1),t("td",M,s(o.product.price),1),t("td",N,s(o.qty),1),t("td",U,s(o.total),1)]))),128)):p("",!0)]),t("tfoot",null,[t("tr",C,[j,t("td",q,s(e.order.total),1)]),t("tr",null,[t("td",z,"訂單備註："+s(e.order.message),1)])])])])])):p("",!0)])}const et=_(w,[["render",J]]);export{et as default};
