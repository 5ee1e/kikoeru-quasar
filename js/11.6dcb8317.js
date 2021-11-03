(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{"55e9":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-slide-transition",{staticClass:"bordered elevated"},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.currentPlayingFile.hash&&t.hide,expression:"currentPlayingFile.hash && hide"}],staticClass:"row text-black",class:t.$q.dark.isActive?"bg-grey-9":"bg-white"},[i("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"col non-selectable",staticStyle:{padding:"0px 5px"},attrs:{clickable:""},on:{click:function(e){return t.toggleHide()}}},[i("q-item-section",{attrs:{avatar:""}},[i("q-img",{staticClass:"rounded-borders",staticStyle:{height:"50px",width:"50px"},attrs:{transition:"fade",src:t.samCoverUrl}})],1),i("q-item-section",[i("q-item-label",{attrs:{lines:"2"}},[t._v(t._s(t.currentPlayingFile.title))]),i("q-item-label",{attrs:{caption:"",lines:"1"}},[t._v(t._s(t.currentPlayingFile.workTitle))])],1)],1),i("q-btn",{staticClass:"col-auto gt-sm",staticStyle:{height:"60px",width:"60px"},attrs:{flat:"",size:"lg",icon:"skip_previous","text-color":t.textColor},on:{click:function(e){return t.previousTrack()}}}),i("q-btn",{staticClass:"col-auto",staticStyle:{height:"60px",width:"60px"},attrs:{flat:"",size:"lg",icon:t.playingIcon,"text-color":t.textColor},on:{click:function(e){return t.togglePlaying()}}}),i("q-btn",{staticClass:"col-auto gt-sm",staticStyle:{height:"60px",width:"60px"},attrs:{flat:"",size:"lg",icon:"skip_next","text-color":t.textColor},on:{click:function(e){return t.nextTrack()}}})],1)])},l=[],s=i("2f62"),r=i("c221"),n=i("c1a2"),o={name:"PlayerBar",mixins:[n["a"]],computed:{samCoverUrl(){return Object(r["a"])(this.currentPlayingFile,"sam")},playingIcon(){return this.playing?"pause":"play_arrow"},...Object(s["d"])("AudioPlayer",["hide","playing"]),...Object(s["b"])("AudioPlayer",["currentPlayingFile"])},methods:{toggleHide(){this.$store.commit("AudioPlayer/TOGGLE_HIDE")},togglePlaying(){this.$store.commit("AudioPlayer/TOGGLE_WANT_PLAYING")},nextTrack(){this.$store.commit("AudioPlayer/NEXT_TRACK")},previousTrack(){this.$store.commit("AudioPlayer/PREVIOUS_TRACK")}}},c=o,u=i("2877"),p=i("e9c1"),d=i("66e5"),g=i("4074"),m=i("068f"),h=i("0170"),y=i("9c40"),x=i("714f"),b=i("eebe"),v=i.n(b),w=Object(u["a"])(c,a,l,!1,null,null,null);e["default"]=w.exports;v()(w,"components",{QSlideTransition:p["a"],QItem:d["a"],QItemSection:g["a"],QImg:m["a"],QItemLabel:h["a"],QBtn:y["a"]}),v()(w,"directives",{Ripple:x["a"]})}}]);