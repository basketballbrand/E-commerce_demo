(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b9ac8e8"],{a15b:function(t,e,c){"use strict";var o=c("23e7"),i=c("44ad"),l=c("fc6a"),a=c("a640"),n=[].join,s=i!=Object,r=a("join",",");o({target:"Array",proto:!0,forced:s||!r},{join:function(t){return n.call(l(this),void 0===t?",":t)}})},e01a:function(t,e,c){"use strict";var o=c("23e7"),i=c("83ab"),l=c("da84"),a=c("5135"),n=c("861d"),s=c("9bf2").f,r=c("e893"),d=l.Symbol;if(i&&"function"==typeof d&&(!("description"in d.prototype)||void 0!==d().description)){var u={},b=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof b?new d(t):void 0===t?d():d(t);return""===t&&(u[e]=!0),e};r(b,d);var p=b.prototype=d.prototype;p.constructor=b;var m=p.toString,j="Symbol(test)"==String(d("test")),f=/^Symbol\((.*)\)[^)]+$/;s(p,"description",{configurable:!0,get:function(){var t=n(this)?this.valueOf():this,e=m.call(t);if(a(u,t))return"";var c=j?e.slice(7,-1):e.replace(f,"$1");return""===c?void 0:c}}),o({global:!0,forced:!0},{Symbol:b})}},e6dc:function(t,e,c){"use strict";c.r(e);var o=c("7a23"),i={class:"text-end"},l={class:"table mt-4"},a=Object(o["i"])("thead",null,[Object(o["i"])("tr",null,[Object(o["i"])("th",{width:"120"},"分類"),Object(o["i"])("th",null,"產品名稱"),Object(o["i"])("th",{width:"120"},"原價"),Object(o["i"])("th",{width:"120"},"售價"),Object(o["i"])("th",{width:"100"},"是否啟用"),Object(o["i"])("th",{width:"200"},"編輯")])],-1),n={class:"text-right"},s={class:"text-right"},r={key:0,class:"text-success"},d={key:1,class:"text-mute"},u={class:"btn-group"};function b(t,e,c,b,p,m){var j=Object(o["D"])("loading"),f=Object(o["D"])("Pagination"),O=Object(o["D"])("ProductModal"),h=Object(o["D"])("DelModal");return Object(o["u"])(),Object(o["e"])(o["a"],null,[Object(o["i"])(j,{active:p.isLoading},null,8,["active"]),Object(o["i"])("div",i,[Object(o["i"])("button",{class:"btn btn-primary",type:"button",onClick:e[1]||(e[1]=function(t){return m.openModal(!0)})}," 增加一個產品 ")]),Object(o["i"])("table",l,[a,Object(o["i"])("tbody",null,[(Object(o["u"])(!0),Object(o["e"])(o["a"],null,Object(o["B"])(p.products,(function(e){return Object(o["u"])(),Object(o["e"])("tr",{key:e.id},[Object(o["i"])("td",null,Object(o["G"])(e.category),1),Object(o["i"])("td",null,Object(o["G"])(e.title),1),Object(o["i"])("td",n,Object(o["G"])(t.$filters.currency(e.origin_price)),1),Object(o["i"])("td",s,Object(o["G"])(t.$filters.currency(e.price)),1),Object(o["i"])("td",null,[e.is_enabled?(Object(o["u"])(),Object(o["e"])("span",r,"啟用")):(Object(o["u"])(),Object(o["e"])("span",d,"未啟用"))]),Object(o["i"])("td",null,[Object(o["i"])("div",u,[Object(o["i"])("button",{class:"btn btn-outline-primary btn-sm",onClick:function(t){return m.openModal(!1,e)}}," 編輯 ",8,["onClick"]),Object(o["i"])("button",{class:"btn btn-outline-danger btn-sm",onClick:function(t){return m.openDelModal(e)}}," 刪除 ",8,["onClick"])])])])})),128))])]),Object(o["i"])(f,{pages:p.pagination,onEmitPage:m.getProducts},null,8,["pages","onEmitPage"]),Object(o["i"])(O,{ref:"productmodal",product:p.tempProducts,onUpdateProduct:m.updateProduct},null,8,["product","onUpdateProduct"]),Object(o["i"])(h,{ref:"delmodal",item:p.tempProducts,onDelItem:m.delProduct},null,8,["item","onDelItem"])],64)}var p=c("5530"),m=(c("99af"),c("a15b"),c("a4d3"),c("e01a"),{class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"}),j={class:"modal-dialog modal-xl",role:"document"},f={class:"modal-content border-0"},O=Object(o["i"])("div",{class:"modal-header bg-dark text-white"},[Object(o["i"])("h5",{class:"modal-title",id:"exampleModalLabel"},[Object(o["i"])("span",null,"新增產品")]),Object(o["i"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),h={class:"modal-body"},v={class:"row"},g={class:"col-sm-4"},y={class:"mb-3"},P=Object(o["i"])("label",{for:"image",class:"form-label"},"輸入圖片網址",-1),x={class:"mb-3"},w=Object(o["i"])("label",{for:"customFile",class:"form-label"},[Object(o["h"])("或 上傳圖片 "),Object(o["i"])("i",{class:"fas fa-spinner fa-spin"})],-1),k=Object(o["g"])('<div class="mt-5"><div class="mb-3 input-group"><input type="url" class="form-control form-control" placeholder="請輸入連結"><button type="button" class="btn btn-outline-danger"> 移除 </button></div><div><button class="btn btn-outline-primary btn-sm d-block w-100"> 新增圖片 </button></div></div>',1),M={class:"col-sm-8"},U={class:"mb-3"},_=Object(o["i"])("label",{for:"title",class:"form-label"},"標題",-1),L={class:"row gx-2"},$={class:"mb-3 col-md-6"},D=Object(o["i"])("label",{for:"category",class:"form-label"},"分類",-1),Q={class:"mb-3 col-md-6"},V=Object(o["i"])("label",{for:"price",class:"form-label"},"單位",-1),C={class:"row gx-2"},S={class:"mb-3 col-md-6"},F=Object(o["i"])("label",{for:"origin_price",class:"form-label"},"原價",-1),G={class:"mb-3 col-md-6"},I=Object(o["i"])("label",{for:"price",class:"form-label"},"售價",-1),J=Object(o["i"])("hr",null,null,-1),N={class:"mb-3"},E=Object(o["i"])("label",{for:"description",class:"form-label"},"產品描述",-1),A={class:"mb-3"},B=Object(o["i"])("label",{for:"content",class:"form-label"},"說明內容",-1),q={class:"mb-3"},z={class:"form-check"},H=Object(o["i"])("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),K={class:"modal-footer"},R=Object(o["i"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function T(t,e,c,i,l,a){return Object(o["u"])(),Object(o["e"])("div",m,[Object(o["i"])("div",j,[Object(o["i"])("div",f,[O,Object(o["i"])("div",h,[Object(o["i"])("div",v,[Object(o["i"])("div",g,[Object(o["i"])("div",y,[P,Object(o["Q"])(Object(o["i"])("input",{type:"text",class:"form-control",id:"image",placeholder:"請輸入圖片連結","onUpdate:modelValue":e[1]||(e[1]=function(t){return l.tempProducts.imageUrl=t})},null,512),[[o["L"],l.tempProducts.imageUrl]])]),Object(o["i"])("div",x,[w,Object(o["i"])("input",{type:"file",id:"customFile",class:"form-control",onChange:e[2]||(e[2]=function(){return a.uploadFile&&a.uploadFile.apply(a,arguments)}),ref:"fileInput"},null,544)]),Object(o["i"])("img",{class:"img-fluid",alt:"",src:l.tempProducts.imageUrl},null,8,["src"]),k]),Object(o["i"])("div",M,[Object(o["i"])("div",U,[_,Object(o["Q"])(Object(o["i"])("input",{type:"text",class:"form-control",id:"title",placeholder:"請輸入標題","onUpdate:modelValue":e[3]||(e[3]=function(t){return l.tempProducts.title=t})},null,512),[[o["L"],l.tempProducts.title]])]),Object(o["i"])("div",L,[Object(o["i"])("div",$,[D,Object(o["Q"])(Object(o["i"])("input",{type:"text",class:"form-control",id:"category",placeholder:"請輸入分類","onUpdate:modelValue":e[4]||(e[4]=function(t){return l.tempProducts.category=t})},null,512),[[o["L"],l.tempProducts.category]])]),Object(o["i"])("div",Q,[V,Object(o["Q"])(Object(o["i"])("input",{type:"text",class:"form-control",id:"unit",placeholder:"請輸入單位","onUpdate:modelValue":e[5]||(e[5]=function(t){return l.tempProducts.unit=t})},null,512),[[o["L"],l.tempProducts.unit]])])]),Object(o["i"])("div",C,[Object(o["i"])("div",S,[F,Object(o["Q"])(Object(o["i"])("input",{type:"number",class:"form-control",id:"origin_price",placeholder:"請輸入原價","onUpdate:modelValue":e[6]||(e[6]=function(t){return l.tempProducts.origin_price=t})},null,512),[[o["L"],l.tempProducts.origin_price,void 0,{number:!0}]])]),Object(o["i"])("div",G,[I,Object(o["Q"])(Object(o["i"])("input",{type:"number",class:"form-control",id:"price",placeholder:"請輸入售價","onUpdate:modelValue":e[7]||(e[7]=function(t){return l.tempProducts.price=t})},null,512),[[o["L"],l.tempProducts.price,void 0,{number:!0}]])])]),J,Object(o["i"])("div",N,[E,Object(o["Q"])(Object(o["i"])("textarea",{type:"text",class:"form-control",id:"description",placeholder:"請輸入產品描述","onUpdate:modelValue":e[8]||(e[8]=function(t){return l.tempProducts.description=t})},null,512),[[o["L"],l.tempProducts.description]])]),Object(o["i"])("div",A,[B,Object(o["Q"])(Object(o["i"])("textarea",{type:"text",class:"form-control",id:"content",placeholder:"請輸入產品說明內容","onUpdate:modelValue":e[9]||(e[9]=function(t){return l.tempProducts.content=t})},null,512),[[o["L"],l.tempProducts.content]])]),Object(o["i"])("div",q,[Object(o["i"])("div",z,[Object(o["Q"])(Object(o["i"])("input",{class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,id:"is_enabled","onUpdate:modelValue":e[10]||(e[10]=function(t){return l.tempProducts.is_enabled=t})},null,512),[[o["J"],l.tempProducts.is_enabled]]),H])])])])]),Object(o["i"])("div",K,[R,Object(o["i"])("button",{type:"button",class:"btn btn-primary",onClick:e[11]||(e[11]=function(e){return t.$emit("update-product",l.tempProducts)})}," 確認 ")])])])],512)}var W=c("db44"),X={props:{product:{type:Object,default:function(){return{}}}},watch:{product:function(){this.tempProducts=this.product}},data:function(){return{modal:{},tempProducts:{}}},methods:{uploadFile:function(){var t=this,e=this.$refs.fileInput.files[0],c=new FormData;c.append("file-to-upload",e);var o="".concat("https://vue3-course-api.hexschool.io","/api/").concat("display_test","/admin/upload");this.$http.post(o,c).then((function(e){console.log(e.data),e.data.success&&(t.tempProducts.imageUrl=e.data.imageUrl)}))}},mixins:[W["a"]]};X.render=T;var Y=X,Z=c("6ff1"),tt=c("1799"),et={data:function(){return{products:[],pagination:{},tempProducts:{},isNew:!1,isLoading:!1}},components:{ProductModal:Y,DelModal:Z["a"],Pagination:tt["a"]},inject:["emitter"],methods:{getProducts:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,c="".concat("https://vue3-course-api.hexschool.io","/api/").concat("display_test","/admin/products?page=").concat(e);this.isLoading=!0,this.$http.get(c).then((function(e){t.isLoading=!1,t.products=e.data.products,t.pagination=e.data.pagination}))},openModal:function(t,e){this.tempProducts=t?{}:Object(p["a"])({},e),this.isNew=t;var c=this.$refs.productmodal;c.showModal()},openDelModal:function(t){this.tempProducts=Object(p["a"])({},t);var e=this.$refs.delmodal;e.showModal()},delProduct:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io","/api/").concat("display_test","/admin/product/").concat(this.tempProducts.id);this.$http.delete(e).then((function(e){console.log(e.data);var c=t.$refs.delmodal;c.hideModal(),t.getProducts()}))},updateProduct:function(t){var e=this;this.tempProducts=t;var c="".concat("https://vue3-course-api.hexschool.io","/api/").concat("display_test","/admin/product"),o="post";this.isNew||(c="".concat("https://vue3-course-api.hexschool.io","/api/").concat("display_test","/admin/product/").concat(t.id),o="put");var i=this.$refs.productmodal;this.$http[o](c,{data:this.tempProducts}).then((function(t){console.log(t.data),i.hideModal(),e.getProducts(),t.data.success?(e.getProducts(),e.emitter.emit("push-message",{style:"success",title:"更新成功"})):e.emitter.emit("push-message",{style:"danger",title:"更新失敗",content:t.data.message.join("、")})}))}},created:function(){this.getProducts()}};et.render=b;e["default"]=et}}]);
//# sourceMappingURL=chunk-1b9ac8e8.7c57a73d.js.map