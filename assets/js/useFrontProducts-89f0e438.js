import{d as i}from"./index-0cab46f3.js";import{a as u}from"./axios-aba6f0e0.js";import{s as l}from"./useSweetAlertStore-9823ac4d.js";const a=l(),{VITE_APP_URL:d,VITE_APP_PATH:n}={VITE_APP_URL:"https://vue3-course-api.hexschool.io",VITE_APP_PATH:"2259buyer",BASE_URL:"/FreshHanber/",MODE:"production",DEV:!1,PROD:!0},h=i("useProductStore",{state:()=>({products:[],groupProducts:[],isLoading:!0}),actions:{getProducts(){u.get(`${d}/v2/api/${n}/products/all`).then(s=>{this.products=s.data.products,this.groupProducts=Object.values(this.gropuSetProducts(s.data.products)),this.isLoading=!1}).catch(s=>{a.swalError(s)})},gropuSetProducts(s){const e={};return s.forEach(r=>{const{mainTitle:t,select1:c,select2:o}=r;r.is_select===1?e[t]===void 0?e[t]={...r}:(c!==void 0&&(typeof e[t].select1=="string"?e[t].select1!==c&&(e[t].select1=[e[t].select1,c]):this.checkHas(e[t].select1,c)||(e[t].select1=[...e[t].select1,c])),typeof e[t].select2=="string"?e[t].select2!==o&&(e[t].select2=[e[t].select2,o]):this.checkHas(e[t].select2,o)||(e[t].select2=[...e[t].select2,o])):e[t]={...r}}),e},checkHas(s,e){return s.includes(e)}},getters:{}});export{h as u};