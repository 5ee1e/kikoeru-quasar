(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[0],{ddf4:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",{attrs:{padding:""}},[s("div",{staticClass:"fit row wrap justify-between items-start q-px-sm"},[s("div",{staticClass:"col-lg-3 col-sm-12 col-xs-12"},[s("q-btn-toggle",{staticClass:"text-bold",attrs:{spread:"","no-caps":"",rounded:"","toggle-color":"primary",color:t.color,"text-color":t.textColor,options:[{label:t.$t("favourites.myReview"),value:"review"},{label:t.$t("favourites.myProgress"),value:"progress"},{label:t.$t("favourites.folder"),value:"folder"}]},on:{input:t.changeMode},model:{value:t.mode,callback:function(e){t.mode=e},expression:"mode"}})],1),s("div",{staticClass:"col-auto gt-sm row"},[s("q-select",{staticClass:"q-mx-sm",attrs:{dense:"",rounded:"",outlined:"",options:t.sortOptions,"bg-color":t.color},model:{value:t.sortBy,callback:function(e){t.sortBy=e},expression:"sortBy"}}),s("q-btn",{directives:[{name:"show",rawName:"v-show",value:!t.sortButtonDisabled,expression:"!sortButtonDisabled"}],attrs:{disable:t.sortButtonDisabled,dense:"",rounded:"",color:t.color,"text-color":t.textColor,icon:t.direction?"arrow_downward":"arrow_upward"},on:{click:t.switchSortMode}})],1)]),s("div",{staticClass:"q-pt-md q-px-sm"},["progress"===t.mode?s("q-btn-toggle",{attrs:{"toggle-color":"primary",color:"white","text-color":"black",rounded:"",options:[{label:t.$t("common.progressEnum.marked"),value:"marked"},{label:t.$t("common.progressEnum.listening"),value:"listening"},{label:t.$t("common.progressEnum.listened"),value:"listened"},{label:t.$t("common.progressEnum.replay"),value:"replay"},{label:t.$t("common.progressEnum.postponed"),value:"postponed"}]},on:{input:t.changeProgressFilter},model:{value:t.progressFilter,callback:function(e){t.progressFilter=e},expression:"progressFilter"}}):t._e()],1),s("div",{staticClass:"q-pt-md"},[s("div",{staticClass:"q-px-sm q-py-md"},["folder"!==t.mode?s("q-infinite-scroll",{ref:"scroll",attrs:{offset:500,disable:t.stopLoad},on:{load:t.onLoad},scopedSlots:t._u([{key:"loading",fn:function(){return[s("div",{staticClass:"row justify-center q-my-md"},[s("q-spinner-dots",{attrs:{color:"primary",size:"40px"}})],1)]},proxy:!0}],null,!1,3159847669)},[0===t.works.length?s("div",{staticClass:"row justify-center text-grey"},[t._v(t._s(t.$t("favourites.favouriteEmptyTips")))]):t._e(),t.works.length?s("q-list",{staticClass:"shadow-2",attrs:{bordered:"",separator:""}},t._l(t.works,(function(e){return s("FavListItem",{key:e.id,attrs:{workid:e.id,metadata:e,mode:t.mode},on:{reset:function(e){return t.reset()}}})})),1):t._e()],1):s("div",{staticClass:"row justify-center text-grey"},[t._v(t._s(t.$t("common.comingSoon")))])],1)])])},a=[],o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-item",{staticClass:"row",class:t.classBackgroundColor,attrs:{clickable:""}},[s("q-item-section",{staticClass:"col-auto",attrs:{top:""}},[s("router-link",{attrs:{to:"/work/"+t.metadata.id}},[s("q-img",{staticStyle:{height:"120px",width:"160px"},attrs:{transition:"fade",src:t.coverUrl}})],1)],1),s("q-item-section",{staticClass:"q-gutter-y-xs column items-start",attrs:{top:""},on:{click:function(e){if(e.target!==e.currentTarget)return null;t.showReviewDialog=!0}}},[s("q-item-label",{staticClass:"text-body2",attrs:{lines:"2"}},[s("router-link",{staticClass:"col-auto",staticStyle:{color:"inherit"},attrs:{to:"/work/"+t.metadata.id}},[t._v("\n          "+t._s(t.metadata.title)+"\n        ")])],1),s("div",{staticClass:"row q-gutter-x-sm col-auto"},[s("router-link",{staticClass:"col-auto text-grey",attrs:{to:"/works?circleId="+t.metadata.circle.id}},[t._v("\n          "+t._s(t.metadata.circle.name)+"\n        ")]),s("span",{staticClass:"col-auto"},[t._v("/")]),s("span",{staticClass:"col-auto text-grey"},[t._v(" "+t._s(t.metadata.release))]),s("span",{staticClass:"col-auto"},[t._v("/")]),t._l(t.metadata.vas,(function(e,r){return s("router-link",{key:r,staticClass:"col-auto text-primary",attrs:{to:"/works?vaId="+e.id}},[t._v("\n          "+t._s(e.name)+"\n        ")])}))],2),s("div",{staticClass:"row items-center q-gutter-x-xs"},[t.hideRating?t._e():s("q-rating",{staticClass:"col-auto",attrs:{size:"sm",color:"blue",icon:"star_border","icon-selected":"star","icon-half":"star_half"},on:{input:t.setRating},model:{value:t.rating,callback:function(e){t.rating=e},expression:"rating"}}),s("span",{staticClass:"col-auto text-grey "},[t._v(t._s(t.metadata.updated_at))])],1),"review"===t.mode?s("q-item-label",{staticClass:"q-pt-sm"},[s("q-card",{directives:[{name:"show",rawName:"v-show",value:t.metadata.review_text,expression:"metadata.review_text"}],staticClass:"my-card col-auto",on:{click:function(e){t.showReviewDialog=!0}}},[s("q-card-section",{staticClass:"q-pa-sm"},[t._v("\n          "+t._s(t.metadata.review_text)+"\n          ")])],1)],1):t._e(),"progress"===t.mode?s("q-item-label",{staticClass:"q-pt-xs"},["progress"===t.mode?s("q-btn-toggle",{staticClass:"q-pa-sm",attrs:{dense:"","no-caps":"",rounded:"","toggle-color":"primary",color:"white","text-color":"black",options:[{label:"想听",value:"marked"},{label:"在听",value:"listening"},{label:"听过",value:"listened"},{label:"重听",value:"replay"},{label:"搁置",value:"postponed"}]},on:{input:t.setProgress},model:{value:t.progress,callback:function(e){t.progress=e},expression:"progress"}}):t._e()],1):t._e()],1),t.showReviewDialog?s("WriteReview",{attrs:{workid:t.workid,metadata:t.metadata},on:{closed:t.processReview}}):t._e()],1)},i=[],n=s("c16d"),l=s("2d97"),d=s("c221"),c=s("c1a2"),u={name:"FavListItem",mixins:[l["a"],c["a"]],components:{WriteReview:n["a"]},props:{workid:{type:Number,required:!0},metadata:{type:Object,required:!0},mode:{type:String,default:"review"}},data(){return{rating:0,showReviewDialog:!1,hideRating:!1,progress:""}},computed:{coverUrl(){return Object(d["a"])(this.metadata,"thumb")}},mounted(){this.setMetadata()},watch:{metadata(){this.setMetadata()}},methods:{setMetadata(){this.metadata.userRating?this.rating=this.metadata.userRating:this.hideRating=!0,this.rating?this.hideRating=!1:this.hideRating=!0,this.progress=this.metadata.progress},processReview(t){t&&(this.calledFromChild=!0,this.$emit("reset")),this.showReviewDialog=!1},setRating(t){if(t){const e={user_name:this.$store.state.User.name,work_id:this.metadata.id,rating:t};this.submitRating(e)}},submitRating(t){const e={starOnly:!0};this.$axios.put("/api/review",t,{params:e}).then(t=>{this.showSuccNotif(t.data.message)}).then(()=>this.$emit("reset")).catch(t=>{t.response?this.showErrNotif(t.response.data.error||`${t.response.status} ${t.response.statusText}`):this.showErrNotif(t.message||t)})},setProgress(t){const e={user_name:this.$store.state.User.name,work_id:this.metadata.id,progress:t};this.submitProgress(e)},submitProgress(t){const e={starOnly:!1,progressOnly:!0};this.$axios.put("/api/review",t,{params:e}).then(t=>{this.showSuccNotif(t.data.message)}).then(()=>this.$emit("reset")).catch(t=>{t.response?this.showErrNotif(t.response.data.error||`${t.response.status} ${t.response.statusText}`):this.showErrNotif(t.message||t)})}}},p=u,m=s("2877"),h=s("66e5"),g=s("4074"),v=s("068f"),w=s("0170"),f=s("daf4"),b=s("f09f"),y=s("a370"),k=s("6a67"),_=s("eebe"),x=s.n(_),C=Object(m["a"])(p,o,i,!1,null,null,null),q=C.exports;x()(C,"components",{QItem:h["a"],QItemSection:g["a"],QImg:v["a"],QItemLabel:w["a"],QRating:f["a"],QCard:b["a"],QCardSection:y["a"],QBtnToggle:k["a"]});var $={name:"Favourites",mixins:[l["a"],c["a"]],components:{FavListItem:q},props:{route:{type:String,default:"review"},progress:{type:String,default:"marked"}},computed:{direction(){return"desc"===this.sortMode},sortButtonDisabled(){return"allage"===this.sortBy.order||"nsfw"===this.sortBy.order}},data(){return{mode:"review",progressFilter:"marked",works:[],stopLoad:!1,pagination:{currentPage:0,pageSize:12,totalCount:0},sortMode:"desc",sortBy:{label:this.$t("favourites.sortOptions.markedTime"),order:"updated_at"},sortOptions:[{label:this.$t("favourites.sortOptions.markedTime"),order:"updated_at"},{label:this.$t("favourites.sortOptions.rating"),order:"userRating"},{label:this.$t("favourites.sortOptions.releaseDate"),order:"release"},{label:this.$t("favourites.sortOptions.reviewCount"),order:"review_count"},{label:this.$t("favourites.sortOptions.dlCount"),order:"dl_count"},{label:this.$t("favourites.sortOptions.sfw"),order:"allage"},{label:this.$t("favourites.sortOptions.nsfw"),order:"nsfw"}]}},created(){this.mode=this.route,this.progressFilter=this.progress},mounted(){if(localStorage.sortByFavourites)try{this.sortBy=JSON.parse(localStorage.sortByFavourites)}catch{localStorage.removeItem("sortByFavourites")}},watch:{sortBy(t){localStorage.sortByFavourites=JSON.stringify(t),this.reset()},sortMode(){this.reset()},route(){this.mode=this.route,this.reset()},progress(){this.progressFilter=this.progress,this.reset()}},methods:{changeMode(t){this.$router.push("/favourites/"+t),this.reset()},changeProgressFilter(t){this.$router.push("/favourites/progress/"+t),this.reset()},switchSortMode(){"desc"===this.sortMode?this.sortMode="asc":this.sortMode="desc"},onLoad(t,e){this.requestWorksQueue().then(()=>e())},reset(){this.stopLoad=!0,this.pagination={currentPage:0,pageSize:12,totalCount:0},this.requestWorksQueue().then(()=>{this.stopLoad=!1})},requestWorksQueue(){const t={order:this.sortBy.order,sort:this.sortMode,page:this.pagination.currentPage+1||1};return"allage"===this.sortBy.order&&(t.order="nsfw",t.sort="asc"),"nsfw"===this.sortBy.order&&(t.order="nsfw",t.sort="desc"),"progress"===this.mode&&(t.filter=this.progressFilter),this.$axios.get("/api/review",{params:t}).then(e=>{const s=e.data.works;this.works=1===t.page?s.concat():this.works.concat(s),this.pagination=e.data.pagination,this.works.length>=this.pagination.totalCount&&(this.stopLoad=!0)}).catch(t=>{t.response?401!==t.response.status&&this.showErrNotif(t.response.data.error||`${t.response.status} ${t.response.statusText}`):this.showErrNotif(t.message||t),this.stopLoad=!0})}}},S=$,B=s("9989"),R=s("ddd8"),O=s("9c40"),F=s("ef35"),Q=s("1c1c"),E=s("8380"),M=Object(m["a"])(S,r,a,!1,null,null,null);e["default"]=M.exports;x()(M,"components",{QPage:B["a"],QBtnToggle:k["a"],QSelect:R["a"],QBtn:O["a"],QInfiniteScroll:F["a"],QList:Q["a"],QSpinnerDots:E["a"]})}}]);