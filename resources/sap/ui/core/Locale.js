/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2016 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','sap/ui/base/Object'],function(q,B){"use strict";var a=/^((?:[A-Z]{2,3}(?:-[A-Z]{3}){0,3})|[A-Z]{4}|[A-Z]{5,8})(?:-([A-Z]{4}))?(?:-([A-Z]{2}|[0-9]{3}))?((?:-[0-9A-Z]{5,8}|-[0-9][0-9A-Z]{3})*)((?:-[0-9A-WYZ](?:-[0-9A-Z]{2,8})+)*)(?:-(X(?:-[0-9A-Z]{1,8})+))?$/i;var L=B.extend("sap.ui.core.Locale",{constructor:function(l){B.apply(this);var r=a.exec(l.replace(/_/g,"-"));if(r===null){throw"The given language '"+l+"' does not adhere to BCP-47.";}this.sLocaleId=l;this.sLanguage=r[1]||null;this.sScript=r[2]||null;this.sRegion=r[3]||null;this.sVariant=(r[4]&&r[4].slice(1))||null;this.sExtension=(r[5]&&r[5].slice(1))||null;this.sPrivateUse=r[6]||null;if(this.sLanguage){this.sLanguage=this.sLanguage.toLowerCase();}if(this.sScript){this.sScript=this.sScript.toLowerCase().replace(/^[a-z]/,function($){return $.toUpperCase();});}if(this.sRegion){this.sRegion=this.sRegion.toUpperCase();}},getLanguage:function(){return this.sLanguage;},getScript:function(){return this.sScript;},getRegion:function(){return this.sRegion;},getVariant:function(){return this.sVariant;},getVariantSubtags:function(){return this.sVariant?this.sVariant.split('-'):[];},getExtension:function(){return this.sExtension;},getExtensionSubtags:function(){return this.sExtension?this.sExtension.slice(2).split('-'):[];},getPrivateUse:function(){return this.sPrivateUse;},getPrivateUseSubtags:function(){return this.sPrivateUse?this.sPrivateUse.slice(2).split('-'):[];},hasPrivateUseSubtag:function(s){return q.inArray(s,this.getPrivateUseSubtags())>=0;},toString:function(){var r=[this.sLanguage];if(this.sScript){r.push(this.sScript);}if(this.sRegion){r.push(this.sRegion);}if(this.sVariant){r.push(this.sVariant);}if(this.sExtension){r.push(this.sExtension);}if(this.sPrivateUse){r.push(this.sPrivateUse);}return r.join("-");},getSAPLogonLanguage:function(){var l=this.sLanguage||"",m;if(l.indexOf("-")>=0){l=l.slice(0,l.indexOf("-"));}l=M[l]||l;if(l==="zh"){if(this.sScript==="Hant"||(!this.sScript&&this.sRegion==="TW")){l="zf";}}if(this.sPrivateUse&&(m=/-(saptrc|sappsd)(?:-|$)/i.exec(this.sPrivateUse))){l=(m[1].toLowerCase()==="saptrc")?"1Q":"2Q";}return l.toUpperCase();}});var M={"iw":"he","ji":"yi","in":"id","sh":"sr"};function g(v){var m=/\$([-a-z0-9A-Z._]+)(?::([^$]*))?\$/.exec(v);return(m&&m[2])?m[2].split(/,/):null;}var A=g("$cldr-rtl-locales:ar,fa,he$")||[];L._cldrLocales=g("$cldr-locales:ar,ar_EG,ar_SA,bg,br,ca,cs,da,de,de_AT,de_CH,el,el_CY,en,en_AU,en_GB,en_HK,en_IE,en_IN,en_NZ,en_PG,en_SG,en_ZA,es,es_AR,es_BO,es_CL,es_CO,es_MX,es_PE,es_UY,es_VE,et,fa,fi,fr,fr_BE,fr_CA,fr_CH,fr_LU,he,hi,hr,hu,id,it,it_CH,ja,ko,lt,lv,nb,nl,nl_BE,nn,pl,pt,pt_PT,ro,ru,ru_UA,sk,sl,sr,sv,th,tr,uk,vi,zh_CN,zh_HK,zh_SG,zh_TW$");L._coreI18nLocales=g("$core-i18n-locales:,ar,bg,ca,cs,da,de,el,en,es,et,fi,fr,hi,hr,hu,it,iw,ja,ko,lt,lv,nl,no,pl,pt,ro,ru,sh,sk,sl,sv,th,tr,uk,vi,zh_CN,zh_TW$");L._impliesRTL=function(l){var o=l instanceof L?l:new L(l);var s=o.getLanguage()||"";s=(s&&M[s])||s;var r=o.getRegion()||"";if(r&&q.inArray(s+"_"+r,A)>=0){return true;}return q.inArray(s,A)>=0;};return L;});
