(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4ef1fd48"],{"1dde":function(t,e,c){var i=c("d039"),l=c("b622"),a=c("2d00"),n=l("species");t.exports=function(t){return a>=51||!i((function(){var e=[],c=e.constructor={};return c[n]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},8418:function(t,e,c){"use strict";var i=c("c04e"),l=c("9bf2"),a=c("5c6c");t.exports=function(t,e,c){var n=i(e);n in t?l.f(t,n,a(0,c)):t[n]=c}},8862:function(t,e,c){},"99af":function(t,e,c){"use strict";var i=c("23e7"),l=c("d039"),a=c("e8b5"),n=c("861d"),s=c("7b0b"),o=c("50c4"),r=c("8418"),u=c("65f0"),b=c("1dde"),d=c("b622"),O=c("2d00"),j=d("isConcatSpreadable"),p=9007199254740991,f="Maximum allowed index exceeded",m=O>=51||!l((function(){var t=[];return t[j]=!1,t.concat()[0]!==t})),h=b("concat"),v=function(t){if(!n(t))return!1;var e=t[j];return void 0!==e?!!e:a(t)},y=!m||!h;i({target:"Array",proto:!0,forced:y},{concat:function(t){var e,c,i,l,a,n=s(this),b=u(n,0),d=0;for(e=-1,i=arguments.length;e<i;e++)if(a=-1===e?n:arguments[e],v(a)){if(l=o(a.length),d+l>p)throw TypeError(f);for(c=0;c<l;c++,d++)c in a&&r(b,d,a[c])}else{if(d>=p)throw TypeError(f);r(b,d++,a)}return b.length=d,b}})},a0d8:function(t,e,c){"use strict";c.r(e);c("b0c0");var i=c("7a23"),l=Object(i["S"])("data-v-07619cc0");Object(i["x"])("data-v-07619cc0");var a={class:"container my-5 py-4"},n={class:"stepper"},s={key:0,class:"cart_empty"},o=Object(i["i"])("h5",null,"購物車目前沒有商品",-1),r={key:1,class:"my-5 justify-content-center row"},u={class:"my-5 col-9"},b={class:"table align-middle"},d=Object(i["i"])("thead",null,[Object(i["i"])("tr",null,[Object(i["i"])("th",null,"商品資訊"),Object(i["i"])("th",null,"價格"),Object(i["i"])("th",null,"數量"),Object(i["i"])("th",null,"小計"),Object(i["i"])("th")])],-1),O={class:"d-flex align-items-center"},j={class:"me-3"},p={class:"input-group input-group-sm"},f={class:"input-group-text"},m={key:0,class:"text-success"},h=Object(i["i"])("i",{class:"bi bi-x-lg"},null,-1),v={class:"text-center"},y=Object(i["i"])("i",{class:"bi bi-trash"},null,-1),g=Object(i["h"])("刪除全部商品 "),_={class:"ord_info my-5 col-3"},x=Object(i["i"])("h5",null,"訂單資訊",-1),k=Object(i["i"])("p",null,[Object(i["i"])("i",{class:"bi bi-truck"}),Object(i["h"])("單筆滿 $2000 享免運。")],-1),w=Object(i["i"])("span",{class:"title"},"小計：",-1),$={class:"price"},G=Object(i["i"])("span",{class:"title"},"運費：",-1),V={class:"price"},S={key:0,class:"text-danger"},C=Object(i["i"])("span",{class:"title"},"單筆滿 $2000 享免運",-1),L=Object(i["i"])("br",null,null,-1),I=Object(i["i"])("span",null," - NT $ 100",-1),q={class:"input-group mb-3 input-group input-group-sm"},U=Object(i["i"])("p",{class:"coupons_code"},[Object(i["h"])("輸入 "),Object(i["i"])("span",{class:"text-success"},"coupons"),Object(i["h"])(" 將享有五折的優惠")],-1),T=Object(i["i"])("hr",null,null,-1),E={class:"d-flex justify-content-between align-items-center"},N=Object(i["i"])("p",{class:"title"},"總金額",-1),A={class:"price"},D={key:0},M={key:1},P={class:"text-center"},B={key:2,class:"my-5 row justify-content-center info_form"},F={class:"mb-3"},Q=Object(i["i"])("label",{for:"email",class:"form-label"},"付款方式",-1),J=Object(i["i"])("option",{value:""},"請選擇付款方式",-1),R=Object(i["i"])("option",{value:"信用卡一次付清"},"信用卡一次付清",-1),z=Object(i["i"])("option",{value:"超商取貨付款"},"超商取貨付款",-1),H=Object(i["i"])("option",{value:"ATM轉帳"},"ATM轉帳",-1),K=Object(i["i"])("option",{value:"LINE Pay"},"LINE Pay",-1),W=Object(i["i"])("option",{value:"Apple Pay"},"Apple Pay",-1),X={class:"mb-3"},Y=Object(i["i"])("label",{for:"email",class:"form-label"},"配送方式",-1),Z=Object(i["i"])("option",{value:""},"請選擇配送方式",-1),tt=Object(i["i"])("option",{value:"宅配"},"宅配",-1),et=Object(i["i"])("option",{value:"超商取貨"},"超商取貨",-1),ct={class:"mb-3"},it=Object(i["i"])("label",{for:"email",class:"form-label"},"Email",-1),lt={class:"mb-3"},at=Object(i["i"])("label",{for:"name",class:"form-label"},"收件人姓名",-1),nt={class:"mb-3"},st=Object(i["i"])("label",{for:"tel",class:"form-label"},"收件人電話",-1),ot={class:"mb-3"},rt=Object(i["i"])("label",{for:"address",class:"form-label"},"收件人地址",-1),ut={class:"mb-3"},bt=Object(i["i"])("label",{for:"message",class:"form-label"},"留言",-1),dt={class:"text-end d-flex justify-content-between"},Ot=Object(i["i"])("button",{class:"ui_btn"},"提交訂單",-1),jt={key:3,class:"my-5 row justify-content-center order_form"},pt=Object(i["i"])("h5",{class:"text-center mt-5 mb-4"},"訂單資訊",-1),ft={class:"table align-middle"},mt=Object(i["i"])("thead",null,[Object(i["i"])("th",null,"品名"),Object(i["i"])("th",null,"數量"),Object(i["i"])("th",null,"單價")],-1),ht={key:0,class:"text-success"},vt=Object(i["i"])("td",{colspan:"2",class:"text-end"},"小計",-1),yt={class:"text-end"},gt=Object(i["i"])("td",{colspan:"2",class:"text-end"},"運費",-1),_t={class:"text-end"},xt=Object(i["i"])("td",{colspan:"2",class:"text-end"},"總計",-1),kt={class:"text-end"},wt=Object(i["i"])("h5",{class:"text-center mt-5 mb-4"},"收件人資訊",-1),$t={class:"table"},Gt=Object(i["i"])("th",null,"付款方式",-1),Vt=Object(i["i"])("th",null,"配送方式",-1),St=Object(i["i"])("th",null,"Email",-1),Ct=Object(i["i"])("th",null,"姓名",-1),Lt=Object(i["i"])("th",null,"收件人電話",-1),It=Object(i["i"])("th",null,"收件人地址",-1),qt=Object(i["i"])("th",null,"付款狀態",-1),Ut={key:0},Tt={key:1,class:"text-success"},Et={class:"mt-3 text-center"},Nt={key:0,class:"ui_btn"};Object(i["v"])();var At=l((function(t,e,c,At,Dt,Mt){var Pt=Object(i["D"])("Loading"),Bt=Object(i["D"])("Field"),Ft=Object(i["D"])("ErrorMessage"),Qt=Object(i["D"])("Form");return Object(i["u"])(),Object(i["e"])(i["a"],null,[Object(i["i"])(Pt,{active:Dt.isLoading},null,8,["active"]),Object(i["i"])("div",a,[Object(i["i"])("ul",n,[Object(i["i"])("li",{class:["step_item",{active:Dt.status.isShow}]},"購物車",2),Object(i["i"])("li",{class:["step_item",{active:!Dt.status.isShow&&""==Dt.orderId}]}," 付款及運送 ",2),Object(i["i"])("li",{class:["step_item",{active:""!==Dt.orderId}]},"訂單確認",2)]),0==Dt.cartlist.total?(Object(i["u"])(),Object(i["e"])("div",s,[o,Object(i["i"])("a",{href:"#",class:"ui_btn",onClick:e[1]||(e[1]=Object(i["R"])((function(e){return t.$router.push("/demo/prodlist")}),["prevent"]))},"前往購物")])):Object(i["f"])("",!0),Dt.status.isShow&&0!==Dt.cartlist.total?(Object(i["u"])(),Object(i["e"])("div",r,[Object(i["i"])("div",u,[Object(i["i"])("table",b,[d,Object(i["i"])("tbody",null,[(Object(i["u"])(!0),Object(i["e"])(i["a"],null,Object(i["B"])(Dt.cartlist.carts,(function(e){return Object(i["u"])(),Object(i["e"])("tr",{key:e.id},[Object(i["i"])("td",null,[Object(i["i"])("ul",O,[Object(i["i"])("li",j,[Object(i["i"])("img",{src:e.product.imageUrl,alt:""},null,8,["src"])]),Object(i["i"])("li",null,Object(i["G"])(e.product.title),1)])]),Object(i["i"])("td",null,"$ "+Object(i["G"])(t.$filters.currency(e.product.price)),1),Object(i["i"])("td",null,[Object(i["i"])("div",p,[Object(i["Q"])(Object(i["i"])("input",{type:"number",class:"form-control",min:"1",onChange:function(t){return Mt.updateCart(e)},"onUpdate:modelValue":function(t){return e.qty=t}},null,40,["onChange","onUpdate:modelValue"]),[[i["L"],e.qty,void 0,{number:!0}]]),Object(i["i"])("div",f,Object(i["G"])(e.product.unit),1)])]),Object(i["i"])("td",null,[Object(i["i"])("ul",null,[Object(i["i"])("li",null,"$ "+Object(i["G"])(t.$filters.currency(e.total)),1),Object(i["i"])("li",null,[Dt.cartlist.final_total!==Dt.cartlist.total?(Object(i["u"])(),Object(i["e"])("div",m," 折扣價：$ "+Object(i["G"])(e.final_total),1)):Object(i["f"])("",!0)])])]),Object(i["i"])("td",null,[Object(i["i"])("button",{type:"button",class:"btn btn-outline-dark btn-sm",onClick:function(t){return Mt.deleteitem(e.id)}},[h],8,["onClick"])])])})),128))])]),Object(i["i"])("div",v,[Object(i["i"])("button",{type:"button",class:"btn btn-outline-dark btn-sm",onClick:e[2]||(e[2]=function(){return Mt.deleteall&&Mt.deleteall.apply(Mt,arguments)}),disabled:0==Dt.cartlist.total},[y,g],8,["disabled"])])]),Object(i["i"])("div",_,[x,k,Object(i["i"])("ul",null,[Object(i["i"])("li",null,[w,Object(i["i"])("span",$,"NT$ "+Object(i["G"])(Dt.cartlist.final_total),1)]),Object(i["i"])("li",null,[G,Object(i["i"])("span",V,"NT$ "+Object(i["G"])(Mt.Shipping),1)]),Dt.cartlist.final_total>=2e3?(Object(i["u"])(),Object(i["e"])("li",S,[C,L,I])):Object(i["f"])("",!0),Object(i["i"])("li",null,[Object(i["i"])("div",q,[Object(i["Q"])(Object(i["i"])("input",{type:"text",class:"form-control",placeholder:"請輸入優惠碼","onUpdate:modelValue":e[3]||(e[3]=function(t){return Dt.coupon_code=t})},null,512),[[i["L"],Dt.coupon_code]]),Object(i["i"])("button",{class:"btn btn-outline-secondary",type:"button",onClick:e[4]||(e[4]=function(){return Mt.addCouponcode&&Mt.addCouponcode.apply(Mt,arguments)})}," 輸入 ")]),U])]),T,Object(i["i"])("ul",null,[Object(i["i"])("li",E,[N,Object(i["i"])("div",A,[0==Dt.cartlist.total?(Object(i["u"])(),Object(i["e"])("span",D,"NT$ 0")):(Object(i["u"])(),Object(i["e"])("span",M,"NT$ "+Object(i["G"])(Mt.final_total),1))])]),Object(i["i"])("li",P,[Object(i["i"])("button",{type:"button",class:"ui_btn my-3",disabled:0==Dt.cartlist.total,onClick:e[5]||(e[5]=function(t){return Dt.status.isShow=!Dt.status.isShow})}," 前往結帳 ",8,["disabled"])])])])])):Object(i["f"])("",!0),Dt.status.isShow||""!=Dt.orderId?Object(i["f"])("",!0):(Object(i["u"])(),Object(i["e"])("div",B,[Object(i["i"])(Qt,{class:"col-md-6",onSubmit:Mt.createOrder},{default:l((function(t){var c=t.errors;return[Object(i["i"])("div",F,[Q,Object(i["i"])(Bt,{id:"payway",name:"付款方式",class:["form-control",{"is-invalid":c["付款方式"]}],rules:"required",as:"select",modelValue:Dt.form.user.payment_method,"onUpdate:modelValue":e[6]||(e[6]=function(t){return Dt.form.user.payment_method=t})},{default:l((function(){return[J,R,z,H,K,W]})),_:2},1032,["class","modelValue"]),Object(i["i"])(Ft,{name:"付款方式",class:"invalid-feedback"})]),Object(i["i"])("div",X,[Y,Object(i["i"])(Bt,{id:"deliveryway",name:"配送方式",class:["form-control",{"is-invalid":c["配送方式"]}],rules:"required",as:"select",modelValue:Dt.form.user.deliveryway,"onUpdate:modelValue":e[7]||(e[7]=function(t){return Dt.form.user.deliveryway=t})},{default:l((function(){return[Z,tt,et]})),_:2},1032,["class","modelValue"]),Object(i["i"])(Ft,{name:"配送方式",class:"invalid-feedback"})]),Object(i["i"])("div",ct,[it,Object(i["i"])(Bt,{id:"email",name:"email",type:"email",class:["form-control",{"is-invalid":c["email"]}],placeholder:"請輸入 Email",rules:"email|required",modelValue:Dt.form.user.email,"onUpdate:modelValue":e[8]||(e[8]=function(t){return Dt.form.user.email=t})},null,8,["class","modelValue"]),Object(i["i"])(Ft,{name:"email",class:"invalid-feedback"})]),Object(i["i"])("div",lt,[at,Object(i["i"])(Bt,{id:"name",name:"姓名",type:"text",class:["form-control",{"is-invalid":c["姓名"]}],placeholder:"請輸入姓名",rules:"required",modelValue:Dt.form.user.name,"onUpdate:modelValue":e[9]||(e[9]=function(t){return Dt.form.user.name=t})},null,8,["class","modelValue"]),Object(i["i"])(Ft,{name:"姓名",class:"invalid-feedback"})]),Object(i["i"])("div",nt,[st,Object(i["i"])(Bt,{id:"tel",name:"電話",type:"tel",class:["form-control",{"is-invalid":c["電話"]}],placeholder:"請輸入電話",rules:"required",modelValue:Dt.form.user.tel,"onUpdate:modelValue":e[10]||(e[10]=function(t){return Dt.form.user.tel=t})},null,8,["class","modelValue"]),Object(i["i"])(Ft,{name:"電話",class:"invalid-feedback"})]),Object(i["i"])("div",ot,[rt,Object(i["i"])(Bt,{id:"address",name:"地址",type:"text",class:["form-control",{"is-invalid":c["地址"]}],placeholder:"請輸入地址",rules:"required",modelValue:Dt.form.user.address,"onUpdate:modelValue":e[11]||(e[11]=function(t){return Dt.form.user.address=t})},null,8,["class","modelValue"]),Object(i["i"])(Ft,{name:"地址",class:"invalid-feedback"})]),Object(i["i"])("div",ut,[bt,Object(i["Q"])(Object(i["i"])("textarea",{name:"",id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":e[12]||(e[12]=function(t){return Dt.form.message=t})},null,512),[[i["L"],Dt.form.message]])]),Object(i["i"])("div",dt,[Object(i["i"])("button",{type:"button",class:"ui_btn",disabled:0==Dt.cartlist.final_total,onClick:e[13]||(e[13]=function(t){return Dt.status.isShow=!Dt.status.isShow})}," 上一步 ",8,["disabled"]),Ot])]})),_:1},8,["onSubmit"])])),""!==Dt.orderId?(Object(i["u"])(),Object(i["e"])("div",jt,[Object(i["i"])("form",{class:"col-md-6",onSubmit:e[15]||(e[15]=Object(i["R"])((function(){return Mt.payOrder&&Mt.payOrder.apply(Mt,arguments)}),["prevent"]))},[pt,Object(i["i"])("table",ft,[mt,Object(i["i"])("tbody",null,[(Object(i["u"])(!0),Object(i["e"])(i["a"],null,Object(i["B"])(Dt.order.products,(function(t){return Object(i["u"])(),Object(i["e"])("tr",{key:t.id},[Object(i["i"])("td",null,Object(i["G"])(t.product.title),1),Object(i["i"])("td",null,Object(i["G"])(t.qty)+"/"+Object(i["G"])(t.product.unit),1),Object(i["i"])("td",null,[Object(i["h"])(Object(i["G"])(t.total)+" ",1),t.final_total!==t.total?(Object(i["u"])(),Object(i["e"])("div",ht," 折扣價：$ "+Object(i["G"])(t.final_total),1)):Object(i["f"])("",!0)])])})),128))]),Object(i["i"])("tfoot",null,[Object(i["i"])("tr",null,[vt,Object(i["i"])("td",yt,Object(i["G"])(Dt.cartlist.final_total),1)]),Object(i["i"])("tr",null,[gt,Object(i["i"])("td",_t,Object(i["G"])(Mt.Shipping),1)]),Object(i["i"])("tr",null,[xt,Object(i["i"])("td",kt,Object(i["G"])(Mt.final_total),1)])])]),wt,Object(i["i"])("table",$t,[Object(i["i"])("tbody",null,[Object(i["i"])("tr",null,[Gt,Object(i["i"])("td",null,Object(i["G"])(Dt.order.user.payment_method),1)]),Object(i["i"])("tr",null,[Vt,Object(i["i"])("td",null,Object(i["G"])(Dt.order.user.deliveryway),1)]),Object(i["i"])("tr",null,[St,Object(i["i"])("td",null,Object(i["G"])(Dt.order.user.email),1)]),Object(i["i"])("tr",null,[Ct,Object(i["i"])("td",null,Object(i["G"])(Dt.order.user.name),1)]),Object(i["i"])("tr",null,[Lt,Object(i["i"])("td",null,Object(i["G"])(Dt.order.user.tel),1)]),Object(i["i"])("tr",null,[It,Object(i["i"])("td",null,Object(i["G"])(Dt.order.user.address),1)]),Object(i["i"])("tr",null,[qt,Object(i["i"])("td",null,[Dt.order.is_paid?(Object(i["u"])(),Object(i["e"])("span",Tt,"付款完成")):(Object(i["u"])(),Object(i["e"])("span",Ut,"尚未付款"))])])])]),Object(i["i"])("div",Et,[!1===Dt.order.is_paid?(Object(i["u"])(),Object(i["e"])("button",Nt," 確認付款去 ")):(Object(i["u"])(),Object(i["e"])("button",{key:1,class:"ui_btn",onClick:e[14]||(e[14]=function(e){return t.$router.push("/demo/prodlist")})}," 回商品頁 "))])],32)])):Object(i["f"])("",!0)])],64)})),Dt=(c("99af"),{data:function(){return{cartlist:[],form:{user:{name:"",email:"",tel:"",address:"",payment_method:"",deliveryway:""},message:""},isLoading:!1,status:{isShow:!0},orderId:"",order:{user:{}},coupon_code:""}},inject:["emitter"],computed:{Shipping:function(){return this.cartlist.final_total>=2e3?0:100},final_total:function(){return this.cartlist.final_total>=2e3?this.cartlist.final_total:this.cartlist.final_total+this.Shipping}},methods:{getcartlist:function(){var t=this;this.isLoading=!0;var e="".concat("https://vue3-course-api.hexschool.io","/api/").concat("display_test","/cart");this.$http.get(e).then((function(e){t.isLoading=!1,t.cartlist=e.data.data,t.emitter.emit("sendcartlist",e.data.data)}))},deleteitem:function(t){var e=this,c="".concat("https://vue3-course-api.hexschool.io","/api/").concat("display_test","/cart/").concat(t);this.$http.delete(c).then((function(t){t.data.success&&e.getcartlist()}))},deleteall:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io","/api/").concat("display_test","/carts");this.$http.delete(e).then((function(e){e.data.success&&t.getcartlist()}))},updateCart:function(t){var e=this,c="".concat("https://vue3-course-api.hexschool.io","/api/").concat("display_test","/cart/").concat(t.id),i={product_id:t.product_id,qty:t.qty};this.$http.put(c,{data:i}).then((function(t){t.data.success&&e.getcartlist()}))},createOrder:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io","/api/").concat("display_test","/order");this.$http.post(e,{data:this.form}).then((function(e){e.data.success&&(t.orderId=e.data.orderId,t.getOrder())}))},getOrder:function(){var t=this;this.deleteall();var e="".concat("https://vue3-course-api.hexschool.io","/api/").concat("display_test","/order/").concat(this.orderId);this.isLoading=!0,this.$http.get(e).then((function(e){t.isLoading=!1,console.log(e),e.data.success&&(t.order=e.data.order)}))},addCouponcode:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io","/api/").concat("display_test","/coupon"),c={code:this.coupon_code};this.isLoading=!0,this.$http.post(e,{data:c}).then((function(e){t.isLoading=!1,console.log(e.data),t.getcartlist()}))},payOrder:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io","/api/").concat("display_test","/pay/").concat(this.orderId);this.isLoading=!0,this.$http.post(e).then((function(e){t.isLoading=!1,e.data.success&&t.getOrder()}))}},created:function(){this.getcartlist()}});c("e7be");Dt.render=At,Dt.__scopeId="data-v-07619cc0";e["default"]=Dt},b0c0:function(t,e,c){var i=c("83ab"),l=c("9bf2").f,a=Function.prototype,n=a.toString,s=/^\s*function ([^ (]*)/,o="name";i&&!(o in a)&&l(a,o,{configurable:!0,get:function(){try{return n.call(this).match(s)[1]}catch(t){return""}}})},e7be:function(t,e,c){"use strict";c("8862")}}]);
//# sourceMappingURL=chunk-4ef1fd48.c6c6e457.js.map