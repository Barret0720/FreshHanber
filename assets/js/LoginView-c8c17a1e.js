import{m as c}from"./index-0cab46f3.js";import{s as d}from"./useSweetAlertStore-9823ac4d.js";import{l as i,n as m}from"./runtime-dom.esm-bundler-eb0e3820.js";import{b6 as p,aj as u,l as h,m as s,b3 as l}from"./_plugin-vue_export-helper-68081c38.js";import"./vue-router-e29dd812.js";const{VITE_APP_URL:_}={VITE_APP_URL:"https://vue3-course-api.hexschool.io",VITE_APP_PATH:"2259buyer",BASE_URL:"/FreshHanber/",MODE:"production",DEV:!1,PROD:!0},b={data(){return{user:{username:"",password:""}}},methods:{login(){this.$http.post(`${_}/v2/admin/signin`,this.user).then(t=>{const{token:e,expired:n}=t.data;document.cookie=`hexToken=${e}; expires=${new Date(n)}`,this.$router.push("/admin")}).catch(t=>{this.loginCheckError(t.response.data.message)})},...c(d,["loginCheckError"])}},f={id:"app",class:"login-center container d-flex align-items-center justify-content-center",style:{"min-height":"calc(100vh - 50px)"}},w=s("div",{class:"mb-3"},[s("h4",{class:"fw-bold"},"歡迎使用 鮮堡漢堡 管理系統")],-1),g={class:"mb-3"},x=s("label",{for:"email",class:"form-label ls-3"},"帳號：",-1),v={class:"mb-3"},y=s("label",{for:"password",class:"form-label ls-3"},"密碼：",-1),E=s("button",{type:"submit",class:"btn btn-secondary w-100 mb-3 bg-black text-secondary ls-3"},"登 入",-1);function k(t,e,n,P,r,a){return u(),h("main",f,[s("form",{class:"col-auto shadow rounded p-4 bg-secondary",onSubmit:e[2]||(e[2]=m((...o)=>a.login&&a.login(...o),["prevent"]))},[w,s("div",g,[x,l(s("input",{type:"email",class:"form-control",id:"email","onUpdate:modelValue":e[0]||(e[0]=o=>r.user.username=o)},null,512),[[i,r.user.username]])]),s("div",v,[y,l(s("input",{type:"password",class:"form-control",id:"password","onUpdate:modelValue":e[1]||(e[1]=o=>r.user.password=o)},null,512),[[i,r.user.password]])]),E],32)])}const B=p(b,[["render",k]]);export{B as default};
