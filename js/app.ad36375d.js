(function(){"use strict";var e={4670:function(e,t,n){var o=n(9242),i=n(3396);function s(e,t,n,s,a,l){const r=(0,i.up)("tools"),d=(0,i.up)("navbar"),c=(0,i.up)("notes"),h=(0,i.up)("modal"),u=(0,i.up)("addbtn");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(r),(0,i.Wm)(d,{onSearchValue:t[0]||(t[0]=e=>a.search=e)}),(0,i.Wm)(c,{notes:l.filterNotes,onDelNote:l.delNote,onChangeNote:l.changeNote},null,8,["notes","onDelNote","onChangeNote"]),(0,i.wy)((0,i.Wm)(h,{onCloseModal:l.clickBtnOut,onAddNote:l.addNote,onDelNote:l.delNote,edit:a.edit,editNote:a.editNote,onEditedNote:l.editedNote},null,8,["onCloseModal","onAddNote","onDelNote","edit","editNote","onEditedNote"]),[[o.F8,a.modalOpen]]),(0,i.Wm)(u,{onBtnClick:l.clickBtnIn},null,8,["onBtnClick"])],64)}n(7658);var a=n(7139);const l=e=>((0,i.dD)("data-v-d0193740"),e=e(),(0,i.Cn)(),e),r=l((()=>(0,i._)("a",{class:"tools__cont_before",tabindex:"0"},null,-1))),d={class:"tools__cont"};function c(e,t,n,o,s,l){return(0,i.wg)(),(0,i.iD)(i.HY,null,[r,(0,i._)("div",d,[(0,i._)("button",{onClick:t[0]||(t[0]=e=>l.check()),class:"checkBtn"},(0,a.zw)(s.varMtCheckBtn),1),(0,i._)("button",{onClick:t[1]||(t[1]=e=>l.clearConsole()),class:"checkBtn"},(0,a.zw)(s.checkBtn),1)])],64)}var h={data(){return{varMtCheckBtn:"*var||Method Checker",checkBtn:"*toClearConsole"}},computed:{},methods:{check(){var e=prompt("Введите название переменного или метода в коде Vue, которого вы хотите проверить:"),t=confirm("Каким способом проверять:\n1) Проверить на существования переменного или метода? (OK-true)\n2) Проверить метод (только метод) с посредством его запуска? (Cancel-false)");console.clear(),this.checker(e,t)},checker(e,t){if(t)if("undefined"==typeof this[e]&&"undefined"==typeof this.$parent[e])console.error("Метод или переменное с таким названием не найден :("),console.log(this[e]);else if(console.log(`Поиск завершен успешно, найдены данные - ${e}:`),`${this[e]}`||"[object Object]"==`${this.$parent[e]}`){let t="undefined"==`${JSON.stringify(this[e])}`?"нет":JSON.stringify(this[e]),n="undefined"==`${JSON.stringify(this.$parent[e])}`?"нет":JSON.stringify(this.$parent[e]);console.log("В компоненте tools: "+t+"\nВ родительском компоненте: "+n)}else console.log("В компоненте tools: "+this[e]+"\nВ родительском компоненте: "+this.$parent[e]);else if("function"==typeof this[e]||"function"==typeof this.$parent[e]){console.warn("Успешно найден, запуск метода...");try{this[e]()}catch(n){console.log("Оно находится в родительском компоненте:"),this.$parent[e]()}}else console.error("Метод с таким названием не найден :(")},clearConsole(){console.clear()}}},u=n(89);const _=(0,u.Z)(h,[["render",c],["__scopeId","data-v-d0193740"]]);var p=_,g=n.p+"img/search.2c9e71ed.svg",f=n.p+"img/back.014b4ff1.svg",m=n.p+"img/close.1d4d165f.svg";const v=e=>((0,i.dD)("data-v-24af44da"),e=e(),(0,i.Cn)(),e),N={class:"header"},b={class:"header__notes"},w={class:"header__title"},k=v((()=>(0,i._)("img",{src:g,alt:""},null,-1))),C=[k],$={class:"header__form"},y=v((()=>(0,i._)("img",{src:f,alt:""},null,-1))),B=[y],O={class:"container"},T=["placeholder"],D=v((()=>(0,i._)("img",{src:m,alt:""},null,-1))),z=[D];function S(e,t,n,s,l,r){return(0,i.wg)(),(0,i.iD)("header",N,[(0,i.Wm)(o.uT,{name:"header__notes"},{default:(0,i.w5)((()=>[(0,i.wy)((0,i._)("div",b,[(0,i._)("button",{onClick:t[0]||(t[0]=(...e)=>r.changeLang&&r.changeLang(...e)),class:"header__lang"},(0,a.zw)(e.$i18n.locale),1),(0,i._)("h1",w,(0,a.zw)(e.$t("navTitle")),1),(0,i._)("button",{class:"header__search",onClick:t[1]||(t[1]=e=>l.header=!l.header)},C)],512),[[o.F8,!0===l.header]])])),_:1}),(0,i.Wm)(o.uT,{name:"header__form"},{default:(0,i.w5)((()=>[(0,i.wy)((0,i._)("div",$,[(0,i._)("button",{class:"header__back",onClick:t[2]||(t[2]=e=>(l.header=!l.header,l.search=""))},B),(0,i._)("div",O,[(0,i.wy)((0,i._)("input",{type:"text",class:"header__input",placeholder:e.$t("placeholder"),"onUpdate:modelValue":t[3]||(t[3]=e=>l.search=e)},null,8,T),[[o.nr,l.search]])]),(0,i._)("button",{class:"header__close",onClick:t[4]||(t[4]=e=>l.search="")},z)],512),[[o.F8,!1===l.header]])])),_:1})])}var x={data(){return{header:!0,search:""}},watch:{search(e){this.$emit("searchValue",e)}},methods:{changeLang(){"ru"==this.$i18n.locale?this.$i18n.locale="uz":this.$i18n.locale="ru",localStorage.lang=this.$i18n.locale}}};const M=(0,u.Z)(x,[["render",S],["__scopeId","data-v-24af44da"]]);var j=M,q=n.p+"img/grid.dbae4039.svg",Z=n.p+"img/list.4ed3d4be.svg";const E={class:"notes"},I={class:"container"},J={class:"notes__top"},L={class:"notes__title"},W={key:0,src:q,alt:""},V={key:1,src:Z,alt:""};function A(e,t,n,o,s,l){const r=(0,i.up)("noteitem");return(0,i.wg)(),(0,i.iD)("div",E,[(0,i._)("div",I,[(0,i._)("div",J,[(0,i._)("h2",L,(0,a.zw)(n.notes.length>0?e.$t("notesTitle"):e.$t("noNotesTitle")),1),(0,i._)("button",{class:"notes__btn",onClick:t[0]||(t[0]=e=>s.grid=!s.grid)},[s.grid?((0,i.wg)(),(0,i.iD)("img",W)):((0,i.wg)(),(0,i.iD)("img",V)),(0,i._)("span",null,(0,a.zw)(s.grid?e.$t("notesGridBtn"):e.$t("notesListBtn")),1)])]),(0,i._)("div",{class:(0,a.C_)(["notes__list",{active:s.grid}])},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.notes,(t=>((0,i.wg)(),(0,i.j4)(r,{grid:s.grid,key:t.id,note:t,onDelNote:n=>e.$emit("delNote",t.id),onChangeNote:n=>e.$emit("changeNote",t.id)},null,8,["grid","note","onDelNote","onChangeNote"])))),128))],2)])])}var F=n.p+"img/edit.092f5b23.svg",G=n.p+"img/del.f04c87ff.svg";const H={class:"notes__item"},U={class:"notes__item-title"},R={class:"notes__item-date"},Y={class:"notes__item-text"},K={class:"notes__item-btns"},P=(0,i._)("img",{src:F,alt:""},null,-1),Q=(0,i._)("img",{src:G,alt:""},null,-1);function X(e,t,n,o,s,l){return(0,i.wg)(),(0,i.iD)("div",H,[(0,i._)("div",{class:(0,a.C_)(["notes__item-top",{active:n.grid}])},[(0,i._)("h3",U,(0,a.zw)(n.note.title),1),(0,i._)("p",R,(0,a.zw)(n.note.date),1)],2),(0,i._)("p",Y,(0,a.zw)(n.note.desc),1),(0,i._)("div",K,[(0,i._)("button",{class:"notes__item-btn edit",onClick:t[0]||(t[0]=t=>e.$emit("changeNote",n.note.id))},[P,(0,i._)("span",null,(0,a.zw)(e.$t("editBtn")),1)]),(0,i._)("button",{class:"notes__item-btn del",onClick:t[1]||(t[1]=t=>e.$emit("delNote",n.note.id))},[Q,(0,i._)("span",null,(0,a.zw)(e.$t("delBtn")),1)])])])}var ee={props:{grid:Boolean,note:Object}};const te=(0,u.Z)(ee,[["render",X]]);var ne=te,oe={components:{noteitem:ne},props:{notes:{typeof:Array,required:!0}},data(){return{grid:!1}}};const ie=(0,u.Z)(oe,[["render",A]]);var se=ie;const ae={class:"modal__title"},le={class:"modal__inputs"},re=(0,i._)("span",null,"Title",-1),de=["placeholder","required"],ce=(0,i._)("span",null,"Content",-1),he=["placeholder","required"],ue={class:"modal__btns"};function _e(e,t,n,s,l,r){return(0,i.wg)(),(0,i.j4)(o.uT,{name:"modal"},{default:(0,i.w5)((()=>[(0,i._)("div",{class:"modal",onClick:t[6]||(t[6]=(...e)=>r.closeModal&&r.closeModal(...e))},[(0,i._)("form",{class:"modal__block",onClick:t[5]||(t[5]=(0,o.iM)((()=>{}),["stop"]))},[(0,i._)("h2",ae,(0,a.zw)(n.edit?e.$t("changeNote"):e.$t("addNote")),1),(0,i._)("div",le,[(0,i._)("label",null,[re,(0,i.wy)((0,i._)("input",{type:"text",placeholder:e.$t("inputTitle"),"onUpdate:modelValue":t[0]||(t[0]=e=>l.title=e),required:l.requiredCondition},null,8,de),[[o.nr,l.title]]),(0,i.Uk)("= ")]),(0,i._)("label",null,[ce,(0,i.wy)((0,i._)("textarea",{placeholder:e.$t("txtarCont"),"onUpdate:modelValue":t[1]||(t[1]=e=>l.desc=e),required:l.requiredCondition},null,8,he),[[o.nr,l.desc]])])]),(0,i._)("div",ue,[(0,i._)("button",{class:"modal__btn cancel",onClick:t[2]||(t[2]=(...e)=>r.closeModal&&r.closeModal(...e))},(0,a.zw)(e.$t("cancel")),1),0==n.edit?((0,i.wg)(),(0,i.iD)("button",{key:0,class:"modal__btn add",onClick:t[3]||(t[3]=(...e)=>r.addNote&&r.addNote(...e))},(0,a.zw)(e.$t("addBtn")),1)):((0,i.wg)(),(0,i.iD)("button",{key:1,class:"modal__btn change",onClick:t[4]||(t[4]=(...e)=>r.changeNote&&r.changeNote(...e))},(0,a.zw)(e.$t("changeBtn")),1))])])])])),_:1})}var pe=n(3029),ge={data(){return{title:"",desc:"",date:(new Date).toISOString().slice(0,10).split("-").reverse().join("."),requiredCondition:!0}},methods:{closeModal(){this.$emit("closeModal",!1),this.title="",this.desc=""},addNote(){if(""!=this.title&&""!=this.desc){let e={id:(0,pe.Z)(),title:this.title,desc:this.desc,date:this.date};this.$emit("addNote",e),this.title="",this.desc=""}},changeNote(){if(this.requiredCondition=!0,""!=this.title&&""!=this.desc){const e={id:this.editNote.id,title:this.title,desc:this.desc,date:this.date};this.$emit("editedNote",e),this.closeModal()}}},props:{edit:Boolean,editNote:Object}};const fe=(0,u.Z)(ge,[["render",_e]]);var me=fe;const ve=(0,i._)("img",{src:F,alt:""},null,-1),Ne=[ve];function be(e,t,n,o,s,a){return(0,i.wg)(),(0,i.iD)("button",{class:"add__btn",onClick:t[0]||(t[0]=t=>e.$emit("btnClick"))},Ne)}var we={};const ke=(0,u.Z)(we,[["render",be]]);var Ce=ke,$e={components:{tools:p,navbar:j,notes:se,modal:me,addbtn:Ce},data(){return{edit:!1,editNote:{},notes:[],modalOpen:!1,search:""}},created(){this.updateNotes()},watch:{notes:{handler(e){localStorage.notes=JSON.stringify(this.notes)},deep:!0}},computed:{filterNotes(){return this.search?this.notes.filter((e=>e.title.toLowerCase().includes(this.search.toLowerCase()))):this.notes}},methods:{clickBtnIn(){this.modalOpen=!0,this.edit=!1},clickBtnOut(e){this.modalOpen=e,setTimeout((function(){this.edit=!1}),500)},addNote(e){this.notes.push(e),this.modalOpen=!1},delNote(e){let t=this.notes.findIndex((t=>t.id==e));this.notes.splice(t,1)},updateNotes(){let e=localStorage.notes;e&&(this.notes=JSON.parse(e))},changeNote(e){this.edit=this.modalOpen=!0;let t=this.notes.find((t=>t.id==e));this.editNote=t},editedNote(e){this.notes.forEach((t=>{t.id==e.id&&(t.title=e.title,t.desc=e.desc,t.date=e.date)}))}}};const ye=(0,u.Z)($e,[["render",s]]);var Be=ye,Oe=JSON.parse('{"navTitle":"Eslatmalar","placeholder":"Qidirish...","notesTitle":"Barcha eslatmalar","noNotesTitle":"Eslatmalar yo`q","notesListBtn":"Roʻyxat","notesGridBtn":"Setka","addNote":"Eslatma qo’shish","changeNote":"Elsatmani tahrirlash","cancel":"Bekor qilish","addBtn":"Qo’shish","editBtn":"O\'ZGARTIRISH","delBtn":"o\'chirish","changeBtn":"o\'zgartirish","inputTitle":"Sarlavha","txtarCont":"Tavsif"}'),Te=JSON.parse('{"navTitle":"Заметки","placeholder":"Поиск...","notesTitle":"Все заметки","noNotesTitle":"Заметок нет","notesListBtn":"Список","notesGridBtn":"Сетка","addNote":"Добавить заметку","changeNote":"Изменить заметку","cancel":"Отмена","addBtn":"Добавить","editBtn":"РЕДАКТИРОВАТЬ","delBtn":"Удалить","changeBtn":"изменить","inputTitle":"Название","txtarCont":"Содержание"}');const De={ru:Oe,uz:Te};var ze=n(5658);const Se=localStorage.lang,xe=(0,ze.o)({legacy:!0,locale:Se||"ru",messages:De});(0,o.ri)(Be).use(xe).mount("#app")}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var s=t[o]={exports:{}};return e[o](s,s.exports,n),s.exports}n.m=e,function(){var e=[];n.O=function(t,o,i,s){if(!o){var a=1/0;for(c=0;c<e.length;c++){o=e[c][0],i=e[c][1],s=e[c][2];for(var l=!0,r=0;r<o.length;r++)(!1&s||a>=s)&&Object.keys(n.O).every((function(e){return n.O[e](o[r])}))?o.splice(r--,1):(l=!1,s<a&&(a=s));if(l){e.splice(c--,1);var d=i();void 0!==d&&(t=d)}}return t}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[o,i,s]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p=""}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var i,s,a=o[0],l=o[1],r=o[2],d=0;if(a.some((function(t){return 0!==e[t]}))){for(i in l)n.o(l,i)&&(n.m[i]=l[i]);if(r)var c=r(n)}for(t&&t(o);d<a.length;d++)s=a[d],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(c)},o=self["webpackChunkappvue"]=self["webpackChunkappvue"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(4670)}));o=n.O(o)})();
//# sourceMappingURL=app.ad36375d.js.map