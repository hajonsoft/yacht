(this.webpackJsonpyacht=this.webpackJsonpyacht||[]).push([[0],{403:function(e,a,t){e.exports=t(519)},408:function(e,a,t){},519:function(e,a,t){"use strict";t.r(a);var n,r=t(0),c=t.n(r),o=t(18),i=t.n(o),s=(t(408),t(41)),l=t(88),u=t(20),m=t.n(u),d=t(39),f=t(327),p=t(328),b=t(539),h=t(76),y=t.n(h),v="AIzaSyDO8jhD5kAOCtGONcvjmAnvdGwPjpR8GyY",g={webApiKey:v,signIn:function(){var e=Object(d.a)(m.a.mark((function e(a){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=".concat(v),Object(s.a)({},a,{returnSecureToken:!0}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),signUp:function(){var e=Object(d.a)(m.a.mark((function e(a){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=".concat(v),Object(s.a)({},a,{returnSecureToken:!0}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},E=t(541),j=t(326),O=t(542),w=t(543),x=t(101),C=t(540),k=t(544),U=Object(j.a)((function(e){return{formContainer:{display:"flex",height:"30vh",width:"30%",flexDirection:"column",justifyContent:"space-around",alignItems:"center",margin:"20px auto"},actionsContainer:{display:"flex",justifyContent:"flex-end"}}})),I=function(e){var a=e.onSignedIn,t=Object(r.useState)({email:"",password:""}),n=Object(l.a)(t,2),o=n[0],i=n[1],u=U(),h=Object(x.f)(),y=function(){var e=Object(d.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.signIn(o);case 2:t=e.sent,h.push("/"),a(t.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement(c.a.Fragment,null,c.a.createElement(b.a,{className:u.formContainer},c.a.createElement("form",null,c.a.createElement(C.a,null,c.a.createElement(E.a,{container:!0,spacing:1,alignItems:"flex-end"},c.a.createElement(E.a,{item:!0},c.a.createElement(O.a,null)),c.a.createElement(E.a,{item:!0},c.a.createElement(f.a,{value:o.email,label:"Email Address",onChange:function(e){var a=e.target;i((function(e){return Object(s.a)({},e,{email:a.value})}))}}))),c.a.createElement(E.a,{container:!0,spacing:1,alignItems:"flex-end"},c.a.createElement(E.a,{item:!0},c.a.createElement(w.a,null)),c.a.createElement(E.a,{item:!0},c.a.createElement(f.a,{value:o.password,type:"password",label:"Password",onChange:function(e){var a=e.target;i((function(e){return Object(s.a)({},e,{password:a.value})}))}})))),c.a.createElement(k.a,{className:u.actionsContainer},c.a.createElement(p.a,{color:"secondary",onClick:function(){return i({email:"",password:""})}}," Reset "),c.a.createElement(p.a,{variant:"contained",color:"primary",onClick:y}," Login ")))))},S={name:"Company",fields:[{name:"Name",summary:1},{name:"NameArabic",summary:2},{name:"ContactPerson",summary:3},{name:"Nationality",summary:4},{name:"Tel",summary:5,type:"tel"},{name:"CompanyId",summary:6},{name:"Comments",type:"textarea"},{name:"ExpireDate",type:"date"},{name:"KSATel",type:"tel"}],sqlFields:"Name\tnvarchar\n    NameArabic\tnvarchar\n    ContactPerson\tnvarchar\n    Address\tnvarchar\n    Email\tvarchar\n    Website\tvarchar\n    Tel\tvarchar\n    CreateDt\tdatetime\n    CompanyCode\tvarchar\n    Comments\tnvarchar\n    IsOnHold\tbit\n    LogoUrl\tvarchar\n    UserName\tvarchar\n    UserEmail\tvarchar\n    Password\tvarchar\n    CompanyId\tint\n    ExpireDate\tdatetime\n    KSATel\tvarchar\n    MunazemNumber\tvarchar\n    Nationality\tnvarchar\n    IsAdmin\tbit\n    WayToUmrahCompanyCode\tvarchar\n    WayToUmrahAgentCode\tvarchar\n    MOFAEmbassy\tvarchar\n    MotawefNumber\tvarchar\n    BabUmraUserName\tvarchar\n    BabUmraPassword\tvarchar\n    BabUmraEACode\tvarchar\n    Quota\tint\n    IsHajOnSoftAgent\tbit\n    Feedback\tvarchar\n    ehajusername\tvarchar\n    ehajpassword\tvarchar\n    gamausername\tvarchar\n    gamapassword\tvarchar\n    waytoumrahUserName\tvarchar\n    waytoumrahPassword\tvarchar\n    MotEgpUserName\tvarchar\n    MotEgpPassword\tvarchar\n    TawafUserName\tvarchar\n    TawafPassword\tvarchar\n    SaudiWakeelId\tint\n    GoogleSecret\tvarchar\n    IsICanSupport\tbit\n    IsHeCanSupport\tbit\n    SupportTel\tnvarchar\n    waytoumrahemail\tvarchar\n    waytoumrahemailpassword\tvarchar"},R=t(267),N=function(e){return n=e,{projId:"yachts-1baaa",importFrom:function(){var e=Object(d.a)(m.a.mark((function e(a){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get(a);case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),createRecord:function(){var e=Object(d.a)(m.a.mark((function e(a,t){var r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.post("https://".concat("yachts-1baaa",".firebaseio.com/").concat(a.localId,"/").concat(n,".json?auth=").concat(a.idToken),t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}(),updateRecord:function(){var e=Object(d.a)(m.a.mark((function e(a,t,r){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.put("https://".concat("yachts-1baaa",".firebaseio.com/").concat(a.localId,"/").concat(n,"/").concat(t,".json?auth=").concat(a.idToken),r);case 2:return e.abrupt("return",Object(s.a)({},r,{id:t}));case 3:case"end":return e.stop()}}),e)})));return function(a,t,n){return e.apply(this,arguments)}}(),deleteRecord:function(){var e=Object(d.a)(m.a.mark((function e(a,t,r){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.delete("https://".concat("yachts-1baaa",".firebaseio.com/").concat(a.localId,"/").concat(n,"/").concat(t,".json?auth=").concat(a.idToken));case 2:return e.abrupt("return",Object(s.a)({},r,{id:t}));case 3:case"end":return e.stop()}}),e)})));return function(a,t,n){return e.apply(this,arguments)}}(),deleteTable:function(){var e=Object(d.a)(m.a.mark((function e(a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.delete("https://".concat("yachts-1baaa",".firebaseio.com/").concat(a.localId,"/").concat(n,".json?auth=").concat(a.idToken));case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),getRecord:function(){var e=Object(d.a)(m.a.mark((function e(a,t){var r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("https://".concat("yachts-1baaa",".firebaseio.com/").concat(a.localId,"/").concat(n,"/").concat(t,".json?auth=").concat(a.idToken));case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}(),getRecords:function(){var e=Object(d.a)(m.a.mark((function e(a,t){var r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("https://".concat("yachts-1baaa",".firebaseio.com/").concat(a.localId,"/").concat(n,".json?auth=").concat(a.idToken));case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}()}},T=t(102),F=t(373),A=t.n(F),D=t(374),P=t.n(D),B=t(547),L=t(262),W=t.n(L),K=t(372),M=t.n(K),V=t(329),z=t(546),G=function(e){var a=e.field,t=e.mode,n=e.onChange,r=e.onBlur,o=e.value;return c.a.createElement(c.a.Fragment,null,["text","tel","email"].includes(a.type)&&c.a.createElement(E.a,{item:!0,xs:4},c.a.createElement(f.a,{fullWidth:!0,type:a.type,name:a.name,label:a.label,autoFocus:a.autoFocus,disabled:2===t||a.isReadOnly,onChange:n,onBlur:r,value:o}),c.a.createElement(T.a,{name:a.name,component:"div"})),["textarea"].includes(a.type)&&c.a.createElement(E.a,{item:!0,xs:4},c.a.createElement(f.a,{fullWidth:!0,type:a.type,name:a.name,label:a.label,multiline:!0,rowsMax:4,autoFocus:a.autoFocus,disabled:2===t||a.isReadOnly,onChange:n,onBlur:r,value:o}),c.a.createElement(T.a,{name:a.name,component:"div"})),["number"].includes(a.type)&&c.a.createElement(E.a,{item:!0,xs:4},c.a.createElement(f.a,{type:a.type,name:a.name,label:a.label,autoFocus:a.autoFocus,disabled:2===t||a.isReadOnly,onChange:n,onBlur:r,value:o}),c.a.createElement(T.a,{name:a.name,component:"div"})),["date"].includes(a.type)&&c.a.createElement(E.a,{item:!0,xs:4},c.a.createElement(f.a,{type:a.type,name:a.name,label:a.label,autoFocus:a.autoFocus,disabled:2===t||a.isReadOnly,onChange:n,onBlur:r,value:o,InputLabelProps:{shrink:!0}}),c.a.createElement(T.a,{name:a.name,component:"div"})),["checkbox"].includes(a.type)&&c.a.createElement(E.a,{item:!0,xs:4},c.a.createElement(V.a,{control:c.a.createElement(z.a,{checked:o,onChange:n,name:a.name,color:"primary",disabled:2===t||a.isReadOnly}),label:a.label}),c.a.createElement(T.a,{name:a.name,component:"div"})))},H=Object(j.a)((function(e){return{formContainer:{width:"90%",margin:"25px auto"},cardTitle:{textAlign:"left",fontSize:"2em",backgroundColor:"silver"},actionsContainer:{display:"flex",justifyContent:"flex-end",alignItems:"center",padding:"10px",backgroundColor:"silver"},actionsContainerTopMain:{width:"50%",padding:"10px"},actionsContainerTopButtons:{display:"flex",justifyContent:"space-between",alignItems:"center"}}})),q=function(e){var a=e.fbUser,t=e.mode,n=e.definition,r=e.initialInputRecord,o=e.onAdded,i=e.onUpdated,l=e.onDeleted,u=e.onCancelled,f=H(),h=N(n.name.toLowerCase()),y=function(e){switch(e){case 1:return"Create "+n.name;case 2:return"Delete "+n.name;case 3:return"Update "+n.name}};return c.a.createElement(c.a.Fragment,null,c.a.createElement(T.b,{initialValues:r,onSubmit:function(){var e=Object(d.a)(m.a.mark((function e(c,u){var d,f,p;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(d=u.setSubmitting,f={},n.fields.forEach((function(e){return f[e.name]=c[e.name]})),1!==t){e.next=10;break}return e.next=6,h.createRecord(a,f);case 6:p=e.sent,o(Object(s.a)({},c,{firebaseId:p.data.name})),e.next=20;break;case 10:if(2!==t){e.next=16;break}return e.next=13,h.deleteRecord(a,r.firebaseId,f);case 13:l(c),e.next=20;break;case 16:if(3!==t){e.next=20;break}return e.next=19,h.updateRecord(a,r.firebaseId,f);case 19:i(c);case 20:d(!1);case 21:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}()},(function(e){var a=e.values,r=(e.errors,e.touched,e.handleChange),o=e.handleBlur,i=e.handleSubmit,s=e.isSubmitting;return c.a.createElement("form",{onSubmit:i},c.a.createElement(b.a,{raised:!0,className:f.formContainer},c.a.createElement(B.a,{className:f.cardTitle,title:y(t),subheader:"".concat(a.firebaseId),action:c.a.createElement(W.a,{color:"secondary",onClick:u})}),c.a.createElement(C.a,null,c.a.createElement(E.a,{container:!0,spacing:3},n.fields.map((function(e){return c.a.createElement(G,{key:e.name,field:e,value:a[e.name],mode:t,onChange:r,onBlur:o})})))),c.a.createElement(k.a,{className:f.actionsContainer},c.a.createElement(p.a,{type:"button",disabled:s,variant:"contained",color:"secondary",onClick:u,startIcon:c.a.createElement(W.a,null)},"Cancel"),1===t&&c.a.createElement(p.a,{type:"submit",disabled:s,variant:"contained",color:"primary",startIcon:c.a.createElement(M.a,null)},"Create"),2===t&&c.a.createElement(p.a,{type:"submit",disabled:s,variant:"contained",color:"secondary",startIcon:c.a.createElement(A.a,null)},"Delete"),3===t&&c.a.createElement(p.a,{type:"submit",disabled:s,variant:"contained",color:"primary",startIcon:c.a.createElement(P.a,null)},"Save"))))})))},J=t(381),Y=t.n(J),Q=t(391),$=t.n(Q),_=t(382),X=t.n(_),Z=t(389),ee=t.n(Z),ae=t(266),te=t.n(ae),ne=t(265),re=t.n(ne),ce=t(383),oe=t.n(ce),ie=t(384),se=t.n(ie),le=t(386),ue=t.n(le),me=t(387),de=t.n(me),fe=t(388),pe=t.n(fe),be=t(392),he=t.n(be),ye=t(385),ve=t.n(ye),ge=t(390),Ee=t.n(ge),je=t(393),Oe=t.n(je),we=t(375),xe=t.n(we),Ce=t(134),ke=t.n(Ce),Ue={Add:Object(r.forwardRef)((function(e,a){return c.a.createElement(Y.a,Object.assign({},e,{ref:a}))})),Check:Object(r.forwardRef)((function(e,a){return c.a.createElement(X.a,Object.assign({},e,{ref:a}))})),Clear:Object(r.forwardRef)((function(e,a){return c.a.createElement(re.a,Object.assign({},e,{ref:a}))})),Delete:Object(r.forwardRef)((function(e,a){return c.a.createElement(oe.a,Object.assign({},e,{ref:a}))})),DetailPanel:Object(r.forwardRef)((function(e,a){return c.a.createElement(te.a,Object.assign({},e,{ref:a}))})),Edit:Object(r.forwardRef)((function(e,a){return c.a.createElement(se.a,Object.assign({},e,{ref:a}))})),Export:Object(r.forwardRef)((function(e,a){return c.a.createElement(ve.a,Object.assign({},e,{ref:a}))})),Filter:Object(r.forwardRef)((function(e,a){return c.a.createElement(ue.a,Object.assign({},e,{ref:a}))})),FirstPage:Object(r.forwardRef)((function(e,a){return c.a.createElement(de.a,Object.assign({},e,{ref:a}))})),LastPage:Object(r.forwardRef)((function(e,a){return c.a.createElement(pe.a,Object.assign({},e,{ref:a}))})),NextPage:Object(r.forwardRef)((function(e,a){return c.a.createElement(te.a,Object.assign({},e,{ref:a}))})),PreviousPage:Object(r.forwardRef)((function(e,a){return c.a.createElement(ee.a,Object.assign({},e,{ref:a}))})),ResetSearch:Object(r.forwardRef)((function(e,a){return c.a.createElement(re.a,Object.assign({},e,{ref:a}))})),Search:Object(r.forwardRef)((function(e,a){return c.a.createElement(Ee.a,Object.assign({},e,{ref:a}))})),SortArrow:Object(r.forwardRef)((function(e,a){return c.a.createElement($.a,Object.assign({},e,{ref:a}))})),ThirdStateCheck:Object(r.forwardRef)((function(e,a){return c.a.createElement(he.a,Object.assign({},e,{ref:a}))})),ViewColumn:Object(r.forwardRef)((function(e,a){return c.a.createElement(Oe.a,Object.assign({},e,{ref:a}))}))},Ie=Object(j.a)((function(e){return{toolbarContainer:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px"},importButton:{alignSelf:"stretch",textTransform:"none"},importUrlField:{width:"30%"},importChip:{width:"30%",backgroundColor:"Teal",boxShadow:"2px 2px silver",padding:"10px",color:"white",borderRadius:"16px",fontSize:"0.8em",textAlign:"center"}}})),Se=function(e){var a=e.definition,t=e.fbUser,n=e.records,r=e.onAdd,o=e.onDelete,i=e.onUpdate,s=e.onImport,l=e.importMessage,u=e.onImportUrlChange,m=ke.a.filter(a.fields,(function(e){return!!e.summary})),d=ke.a.orderBy(m,["summary",["asc"]]).map((function(e){return{title:e.label,field:e.name}})),b=Ie();return c.a.createElement(c.a.Fragment,null,(l||t.enableImport)&&c.a.createElement("div",{className:b.toolbarContainer},c.a.createElement(f.a,{className:b.importUrlField,onChange:u,label:"Import url"}),c.a.createElement("div",{className:b.importChip}," ",l," "),c.a.createElement(p.a,{onClick:s,color:"secondary",className:b.importButton},"Import")),c.a.createElement(xe.a,{icons:Ue,title:a.pluralName,columns:d,data:n,actions:[{icon:Ue.Add,tooltip:"Add "+a.name,isFreeAction:!0,onClick:function(e){return r()}},{icon:Ue.Edit,tooltip:"Edit "+a.name,onClick:function(e,a){i(a)}},{icon:Ue.Delete,tooltip:"Delete "+a.name,iconProps:{style:'color: "red"'},onClick:function(e,a){o(a)}}],options:{actionsColumnIndex:-1},localization:{body:{emptyDataSourceMessage:"No ".concat(a.name,"s to display, import or add ").concat(a.name,"s by clicking the plus sign above.")}}}))},Re=t(394),Ne=t.n(Re);var Te=function(e){var a=e.fbUser,t=e.definition,n=Object(r.useState)(""),o=Object(l.a)(n,2),i=o[0],u=o[1],f=Object(r.useState)(""),p=Object(l.a)(f,2),b=p[0],h=p[1],y=Object(r.useState)([]),v=Object(l.a)(y,2),g=v[0],E=v[1];t=function(e){if(e.processed)return e;if(e.name=e.name[0].toUpperCase()+e.name.toLowerCase().substring(1),e.pluralName=Ne()(e.name),e.sqlFields){e.fields||(e.fields=[]),e.sqlFields.split("\n").forEach((function(a){var t=a.replace(/ /g,"").split("\t"),n=t[0][0].toLowerCase()+t[0].substring(1),r=t[0],c="";t[1].includes("char")?c="text":t[1].includes("bit")?c="checkbox":t[1].includes("datetime")?c="date":(t[1].includes("int")||t[1].includes("money")||t[1].includes("decimal"))&&(c="number");var o=ke.a.find(e.fields,(function(e){return e.name===t[0]}));o?(o.label=r,o.type=c,o.name=n):e.fields.push({name:n,label:r,type:c})}))}e.fields=e.fields.map((function(e){var a=e.label||e.name[0].toUpperCase()+e.name.substring(1),t=e.type||"text",n=e.summary||0,r=e.defaultValue||"",c=e.readonly||!1;return Object(s.a)({},e,{label:a,type:t,summary:n,readonly:c,defaultValue:r})})),e.fields.some((function(e){return e.summary}))||(e.fields[0].summary=1);e.fields.some((function(e){return e.autofocus}))||(e.fields[0].autofocus=!0);return e.processed=!0,e}(t);var j={};t.fields.forEach((function(e){j[e.name]=e.defaultValue}));var O=Object(r.useState)(j),w=Object(l.a)(O,2),x=w[0],C=w[1],k=Object(r.useState)(0),U=Object(l.a)(k,2),I=U[0],S=U[1],T=N(t.name.toLowerCase());Object(r.useEffect)((function(){function e(){return(e=Object(d.a)(m.a.mark((function e(){var t,n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==g.length){e.next=5;break}return e.next=3,T.getRecords(a);case 3:(t=e.sent)&&t.data?(n=Object.keys(t.data),r=n.map((function(e){return Object(s.a)({},t.data[e],{firebaseId:e})})),E(r),S(0)):u("Enter service Url, then press Import to import up to 5000 records");case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a,T,t,g]);var F=function(){var e=Object(d.a)(m.a.mark((function e(){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,b){e.next=4;break}return u("Please enter import url..."),e.abrupt("return");case 4:return e.next=6,T.importFrom(b);case 6:return e.next=8,e.sent.data;case 8:n=e.sent,u("Found ".concat(n.length," ").concat(t.name," records. Importing...")),n.forEach((function(e){setTimeout((function(){var n={};Object.keys(e).forEach((function(a){var r=a.replace("_","").toLowerCase(),c=ke.a.find(t.fields,(function(e){return e.name.toLowerCase()===r}));c&&c.name&&("date"===c.type?n[c.name]=new Date(e[a]).toISOString().substring(0,10):n[c.name]=e[a])})),T.createRecord(a,n),u("Importing ".concat(t.name," record# ").concat(n[t.fields[0].name])),E([].concat(Object(R.a)(g),[n]))}),2e3)})),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),u(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}();return c.a.createElement(c.a.Fragment,null,0===I?c.a.createElement(Se,{definition:t,fbUser:a,records:g,onAdd:function(){C(j),S(1)},onDelete:function(e){C(e),S(2)},onUpdate:function(e){C(e),S(3)},onImport:F,importMessage:i,onImportUrlChange:function(e){h(e.target.value)}}):c.a.createElement(q,{mode:I,definition:t,initialInputRecord:x,fbUser:a,onAdded:function(e){E([].concat(Object(R.a)(g),[e])),S(0)},onDeleted:function(e){var a=g.filter((function(a){return a.firebaseId!==e.firebaseId}));E(a),S(0)},onUpdated:function(e){var a=g.map((function(a){return a.firebaseId===e.firebaseId?e:a}));E(a),S(0)},onCancelled:function(){S(0)}}))},Fe=function(e){var a=e.fbUser;return c.a.createElement(Te,{fbUser:a,definition:S})},Ae=t(98),De=t(554),Pe=t(335),Be=t(71),Le=t(256),We=t(395),Ke=t.n(We),Me=Object(j.a)((function(e){return{links:{flexGrow:1,display:"flex",alignItems:"center",justifyContent:"space-around"},link:{color:"white",textDecoration:"none"}}})),Ve=function(e){var a=e.fbUser,t=e.onSignout,n=Me();return c.a.createElement(De.a,{position:"static"},c.a.createElement(Pe.a,null,c.a.createElement(Le.a,{edge:"start",color:"inherit","aria-label":"menu"},c.a.createElement(Ke.a,null)),c.a.createElement("div",{className:n.links},a&&a.idToken&&c.a.createElement(Ae.b,{to:"/yachts",className:n.link},c.a.createElement(Be.a,{variant:"button"},"Yachts"))),(!a||!a.idToken)&&c.a.createElement(Ae.b,{to:"/signin",className:n.link},c.a.createElement(Be.a,{variant:"button"},"Login")),a&&a.idToken&&c.a.createElement(p.a,{className:n.link,onClick:t},c.a.createElement(Be.a,{variant:"button"},"Logout"))))},ze={name:"Contact",fields:[{name:"id",label:"Id",type:"text",isKey:!0,defaultValue:""},{name:"fullName",label:"FullName",type:"text",isKey:!1,isSummary:!0,summaryOrder:0,editOrder:0,defaultValue:"",autoFocus:!0},{name:"tel",label:"Telephone",type:"tel",isKey:!1,isSummary:!0,summaryOrder:1,editOrder:1,defaultValue:""},{name:"country",label:"Country",type:"text",isKey:!1,isSummary:!0,summaryOrder:2,editOrder:2,defaultValue:""},{name:"birthDate",label:"Birth Date",type:"date",isKey:!1,editOrder:3,defaultValue:""}]},Ge=function(e){var a=e.fbUser;return c.a.createElement(Te,{fbUser:a,definition:ze})},He=t(555),qe=t(132),Je=Object(j.a)((function(e){return{mainContainer:{width:"80%",height:"50vh",margin:"30px auto",display:"flex",justifyContent:"space-around",alignItems:"center"},message:{width:"100%",height:"100%",display:"flex",justifyContent:"space-around",alignItems:"center"}}})),Ye=function(e){var a=e.fbUser,t=Je(),n=N();return c.a.createElement(He.a,{className:t.mainContainer},c.a.createElement(qe.a,{elevation:5,className:t.message},!a.idToken&&c.a.createElement(Be.a,null,"Welcome to Keepy! Web API Key ",g.webApiKey,", ProjId: ",n.projId),a.idToken&&c.a.createElement(Be.a,{color:"primary"},"Welcome, ".concat(a.localId," [aka: ").concat(a.email,"]"))))},Qe={name:"yAcht",fields:[{name:"newname",label:"New name",summary:1},{name:"oldname",label:"Old name",summary:2},{name:"builder",summary:3},{name:"hull",summary:4},{name:"sellingbroker",label:"Selling broker"},{name:"brokeragehouse",label:"Brokerage house"},{name:"length",type:"number"},{name:"beam"},{name:"depth"},{name:"newreg",label:"New Registration"},{name:"dinghyreg",label:"Dinghy Registration"},{name:"flag"},{name:"hailingport",label:"Hailing Port"},{name:"oldreg",label:"Old Registration"},{name:"tender"},{name:"hin"},{name:"owner",summary:5},{name:"corp"},{name:"documentation",type:"textarea"},{name:"mailing"},{name:"email",type:"email"},{name:"phone",type:"tel",summary:6},{name:"lienholder",label:"Lien Holder"},{name:"lien"},{name:"fileno",label:"File No"},{name:"storage"},{name:"id",type:"number"},{name:"notes",type:"textarea"}]},$e=function(e){var a=e.fbUser;return c.a.createElement(Te,{fbUser:a,definition:Qe})},_e=function(e){var a=e.fbUser,t=e.onEnableImport,n=N("company");return c.a.createElement(c.a.Fragment,null,c.a.createElement(p.a,{color:"primary",onClick:function(){n.deleteTable(a)}},"Delete Companies"),c.a.createElement(p.a,{color:"primary",onClick:function(){t()}},"Enable Import"))},Xe=t(216),Ze=function(e){var a=e.component,t=e.fbUser,n=e.restricted,r=Object(Xe.a)(e,["component","fbUser","restricted"]);return c.a.createElement(x.b,Object.assign({},r,{render:function(e){return t&&t.idToekn&&n?c.a.createElement(x.a,{to:"/customers"}):c.a.createElement(a,e)}}))},ea=function(e){var a=e.component,t=e.fbUser,n=Object(Xe.a)(e,["component","fbUser"]);return c.a.createElement(x.b,Object.assign({},n,{render:function(e){return t&&t.idToken?c.a.createElement(a,e):c.a.createElement(x.a,{to:"/signin"})}}))};var aa=function(){var e=Object(r.useState)({User:{}}),a=Object(l.a)(e,2),t=a[0],n=a[1],o=function(e){e&&n((function(a){return Object(s.a)({},t,{User:e})}))},i=function(){var e=Object(s.a)({},t);e.User.enableImport=!0,n(e)};return c.a.createElement(Ae.a,null,c.a.createElement(Ve,{fbUser:t.User,onSignout:function(e){n({User:{}})}}),c.a.createElement(Ze,{exact:!0,path:"/",component:function(){return c.a.createElement(Ye,{fbUser:t.User})},fbUser:t.User}),c.a.createElement(Ze,{restricted:!0,exact:!0,path:"/signin",component:function(){return c.a.createElement(I,{onSignedIn:o})},fbUser:t.User}),c.a.createElement(ea,{exact:!0,path:"/customers",component:function(){return c.a.createElement(Fe,{fbUser:t.User})},fbUser:t.User}),c.a.createElement(ea,{exact:!0,path:"/yachts",component:function(){return c.a.createElement($e,{fbUser:t.User})},fbUser:t.User}),c.a.createElement(ea,{exact:!0,path:"/contacts",component:function(){return c.a.createElement(Ge,{fbUser:t.User})},fbUser:t.User}),c.a.createElement(ea,{exact:!0,path:"/admin",component:function(){return c.a.createElement(_e,{fbUser:t.User,onEnableImport:i})},fbUser:t.User}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(aa,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[403,1,2]]]);
//# sourceMappingURL=main.ab177d79.chunk.js.map