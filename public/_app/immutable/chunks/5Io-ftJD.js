import{c as Me,a as m,f as w}from"./B82xio8p.js";import{o as Ma}from"./B6ILs50P.js";import{q as Fs,w as Ps,f as le,e as Xt,p as $r,M as Pt,b as E,c as p,r as h,s as b,t as q,g as i,a as Fr,d as H,L as Ce,u as Q,b0 as Os,al as ha}from"./vVEDTSGa.js";import{d as Ba,s as I,a as N,e as Ns}from"./iuRxwYKd.js";import{l as ar,s as sr,p as Vt,i as R}from"./Be1APwQd.js";import{I as nr,s as or,a as Ae,e as ot,r as js,b as It,c as Et,i as qs}from"./BtaH1b6m.js";import{h as Ws,p as Zs}from"./BR5Wx2fz.js";import{c as Ar}from"./BuRDbjCJ.js";import{t as Hs,c as Qs,f as Us}from"./DbBMDx8s.js";import{b as Gs}from"./CEAutG3a.js";import{b as Ht}from"./DL1s_HQ8.js";import{g as Qt}from"./xlQsKZ8Q.js";import{i as Lt}from"./CbPDfOBp.js";import{t as pa}from"./Bc2pqcEx.js";import{A as Sr}from"./BB5Ymh1t.js";import{R as ga,S as fa}from"./BVG2Estv.js";import{L as va}from"./BI6s7cFw.js";import{S as Ks}from"./VmsXMoJV.js";import{C as Vs}from"./vpdpUckN.js";import{X as Xs}from"./DuBwJlxP.js";import"./CGPq1MCf.js";import{S as ma}from"./Du8ckm-L.js";import{D as Ut}from"./Di6EnlIJ.js";import{E as Ys}from"./BxMxqPuz.js";class Pr{#e=new WeakMap;#t;#r;static entries=new WeakMap;constructor(e){this.#r=e}observe(e,t){var s=this.#e.get(e)||new Set;return s.add(t),this.#e.set(e,s),this.#a().observe(e,this.#r),()=>{var r=this.#e.get(e);r.delete(t),r.size===0&&(this.#e.delete(e),this.#t.unobserve(e))}}#a(){return this.#t??(this.#t=new ResizeObserver(e=>{for(var t of e){Pr.entries.set(t.target,t);for(var s of this.#e.get(t.target)||[])s(t)}}))}}var Js=new Pr({box:"border-box"});function en(a,e,t){var s=Js.observe(a,()=>t(a[e]));Fs(()=>(Ps(()=>t(a[e])),s))}function tn(a,e){const t=ar(e,["children","$$slots","$$events","$$legacy"]);const s=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"m9 12 2 2 4-4"}]];nr(a,sr({name:"shield-check"},()=>t,{get iconNode(){return s},children:(r,o)=>{var n=Me(),c=le(n);or(c,e,"default",{}),m(r,n)},$$slots:{default:!0}}))}function rn(a,e){const t=ar(e,["children","$$slots","$$events","$$legacy"]);const s=[["path",{d:"m2 2 20 20"}],["path",{d:"M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-1.97 5.9-3.71"}],["path",{d:"M9.309 3.652A12.252 12.252 0 0 0 11.24 2.28a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7a9.784 9.784 0 0 1-.08 1.264"}]];nr(a,sr({name:"shield-off"},()=>t,{get iconNode(){return s},children:(r,o)=>{var n=Me(),c=le(n);or(c,e,"default",{}),m(r,n)},$$slots:{default:!0}}))}function ba(a,e){const t=ar(e,["children","$$slots","$$events","$$legacy"]);const s=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"}]];nr(a,sr({name:"star"},()=>t,{get iconNode(){return s},children:(r,o)=>{var n=Me(),c=le(n);or(c,e,"default",{}),m(r,n)},$$slots:{default:!0}}))}function an(a,e){const t=ar(e,["children","$$slots","$$events","$$legacy"]);const s=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];nr(a,sr({name:"users"},()=>t,{get iconNode(){return s},children:(r,o)=>{var n=Me(),c=le(n);or(c,e,"default",{}),m(r,n)},$$slots:{default:!0}}))}function Or(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var xt=Or();function Ta(a){xt=a}var vt={exec:()=>null};function B(a,e=""){let t=typeof a=="string"?a:a.source,s={replace:(r,o)=>{let n=typeof o=="string"?o:o.source;return n=n.replace(pe.caret,"$1"),t=t.replace(r,n),s},getRegex:()=>new RegExp(t,e)};return s}var sn=(()=>{try{return!!new RegExp("(?<=1)(?<!1)")}catch{return!1}})(),pe={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:a=>new RegExp(`^( {0,3}${a})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:a=>new RegExp(`^ {0,${Math.min(3,a-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:a=>new RegExp(`^ {0,${Math.min(3,a-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:a=>new RegExp(`^ {0,${Math.min(3,a-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:a=>new RegExp(`^ {0,${Math.min(3,a-1)}}#`),htmlBeginRegex:a=>new RegExp(`^ {0,${Math.min(3,a-1)}}<(?:[a-z].*>|!--)`,"i"),blockquoteBeginRegex:a=>new RegExp(`^ {0,${Math.min(3,a-1)}}>`)},nn=/^(?:[ \t]*(?:\n|$))+/,on=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,ln=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Nt=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,cn=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Nr=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,Da=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Ia=B(Da).replace(/bull/g,Nr).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),un=B(Da).replace(/bull/g,Nr).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),jr=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,dn=/^[^\n]+/,qr=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,hn=B(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",qr).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),pn=B(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Nr).getRegex(),ir="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Wr=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,gn=B("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Wr).replace("tag",ir).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),La=B(jr).replace("hr",Nt).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ir).getRegex(),fn=B(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",La).getRegex(),Zr={blockquote:fn,code:on,def:hn,fences:ln,heading:cn,hr:Nt,html:gn,lheading:Ia,list:pn,newline:nn,paragraph:La,table:vt,text:dn},xa=B("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Nt).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ir).getRegex(),vn={...Zr,lheading:un,table:xa,paragraph:B(jr).replace("hr",Nt).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",xa).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ir).getRegex()},mn={...Zr,html:B(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Wr).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:vt,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:B(jr).replace("hr",Nt).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Ia).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},bn=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,xn=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,$a=/^( {2,}|\\)\n(?!\s*$)/,kn=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,lr=/[\p{P}\p{S}]/u,Hr=/[\s\p{P}\p{S}]/u,Fa=/[^\s\p{P}\p{S}]/u,wn=B(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Hr).getRegex(),Pa=/(?!~)[\p{P}\p{S}]/u,yn=/(?!~)[\s\p{P}\p{S}]/u,_n=/(?:[^\s\p{P}\p{S}]|~)/u,Oa=/(?![*_])[\p{P}\p{S}]/u,An=/(?![*_])[\s\p{P}\p{S}]/u,Sn=/(?:[^\s\p{P}\p{S}]|[*_])/u,En=B(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",sn?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),Na=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,Rn=B(Na,"u").replace(/punct/g,lr).getRegex(),zn=B(Na,"u").replace(/punct/g,Pa).getRegex(),ja="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Cn=B(ja,"gu").replace(/notPunctSpace/g,Fa).replace(/punctSpace/g,Hr).replace(/punct/g,lr).getRegex(),Mn=B(ja,"gu").replace(/notPunctSpace/g,_n).replace(/punctSpace/g,yn).replace(/punct/g,Pa).getRegex(),Bn=B("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,Fa).replace(/punctSpace/g,Hr).replace(/punct/g,lr).getRegex(),Tn=B(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,Oa).getRegex(),Dn="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",In=B(Dn,"gu").replace(/notPunctSpace/g,Sn).replace(/punctSpace/g,An).replace(/punct/g,Oa).getRegex(),Ln=B(/\\(punct)/,"gu").replace(/punct/g,lr).getRegex(),$n=B(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Fn=B(Wr).replace("(?:-->|$)","-->").getRegex(),Pn=B("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Fn).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Yt=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,On=B(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",Yt).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),qa=B(/^!?\[(label)\]\[(ref)\]/).replace("label",Yt).replace("ref",qr).getRegex(),Wa=B(/^!?\[(ref)\](?:\[\])?/).replace("ref",qr).getRegex(),Nn=B("reflink|nolink(?!\\()","g").replace("reflink",qa).replace("nolink",Wa).getRegex(),ka=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,Qr={_backpedal:vt,anyPunctuation:Ln,autolink:$n,blockSkip:En,br:$a,code:xn,del:vt,delLDelim:vt,delRDelim:vt,emStrongLDelim:Rn,emStrongRDelimAst:Cn,emStrongRDelimUnd:Bn,escape:bn,link:On,nolink:Wa,punctuation:wn,reflink:qa,reflinkSearch:Nn,tag:Pn,text:kn,url:vt},jn={...Qr,link:B(/^!?\[(label)\]\((.*?)\)/).replace("label",Yt).getRegex(),reflink:B(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Yt).getRegex()},Rr={...Qr,emStrongRDelimAst:Mn,emStrongLDelim:zn,delLDelim:Tn,delRDelim:In,url:B(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",ka).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:B(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",ka).getRegex()},qn={...Rr,br:B($a).replace("{2,}","*").getRegex(),text:B(Rr.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Gt={normal:Zr,gfm:vn,pedantic:mn},$t={normal:Qr,gfm:Rr,breaks:qn,pedantic:jn},Wn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},wa=a=>Wn[a];function $e(a,e){if(e){if(pe.escapeTest.test(a))return a.replace(pe.escapeReplace,wa)}else if(pe.escapeTestNoEncode.test(a))return a.replace(pe.escapeReplaceNoEncode,wa);return a}function ya(a){try{a=encodeURI(a).replace(pe.percentDecode,"%")}catch{return null}return a}function _a(a,e){let t=a.replace(pe.findPipe,(o,n,c)=>{let l=!1,d=n;for(;--d>=0&&c[d]==="\\";)l=!l;return l?"|":" |"}),s=t.split(pe.splitPipe),r=0;if(s[0].trim()||s.shift(),s.length>0&&!s.at(-1)?.trim()&&s.pop(),e)if(s.length>e)s.splice(e);else for(;s.length<e;)s.push("");for(;r<s.length;r++)s[r]=s[r].trim().replace(pe.slashPipe,"|");return s}function Ft(a,e,t){let s=a.length;if(s===0)return"";let r=0;for(;r<s&&a.charAt(s-r-1)===e;)r++;return a.slice(0,s-r)}function Zn(a,e){if(a.indexOf(e[1])===-1)return-1;let t=0;for(let s=0;s<a.length;s++)if(a[s]==="\\")s++;else if(a[s]===e[0])t++;else if(a[s]===e[1]&&(t--,t<0))return s;return t>0?-2:-1}function Hn(a,e=0){let t=e,s="";for(let r of a)if(r==="	"){let o=4-t%4;s+=" ".repeat(o),t+=o}else s+=r,t++;return s}function Aa(a,e,t,s,r){let o=e.href,n=e.title||null,c=a[1].replace(r.other.outputLinkReplace,"$1");s.state.inLink=!0;let l={type:a[0].charAt(0)==="!"?"image":"link",raw:t,href:o,title:n,text:c,tokens:s.inlineTokens(c)};return s.state.inLink=!1,l}function Qn(a,e,t){let s=a.match(t.other.indentCodeCompensation);if(s===null)return e;let r=s[1];return e.split(`
`).map(o=>{let n=o.match(t.other.beginningSpace);if(n===null)return o;let[c]=n;return c.length>=r.length?o.slice(r.length):o}).join(`
`)}var Jt=class{options;rules;lexer;constructor(a){this.options=a||xt}space(a){let e=this.rules.block.newline.exec(a);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(a){let e=this.rules.block.code.exec(a);if(e){let t=e[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?t:Ft(t,`
`)}}}fences(a){let e=this.rules.block.fences.exec(a);if(e){let t=e[0],s=Qn(t,e[3]||"",this.rules);return{type:"code",raw:t,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:s}}}heading(a){let e=this.rules.block.heading.exec(a);if(e){let t=e[2].trim();if(this.rules.other.endingHash.test(t)){let s=Ft(t,"#");(this.options.pedantic||!s||this.rules.other.endingSpaceChar.test(s))&&(t=s.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:t,tokens:this.lexer.inline(t)}}}hr(a){let e=this.rules.block.hr.exec(a);if(e)return{type:"hr",raw:Ft(e[0],`
`)}}blockquote(a){let e=this.rules.block.blockquote.exec(a);if(e){let t=Ft(e[0],`
`).split(`
`),s="",r="",o=[];for(;t.length>0;){let n=!1,c=[],l;for(l=0;l<t.length;l++)if(this.rules.other.blockquoteStart.test(t[l]))c.push(t[l]),n=!0;else if(!n)c.push(t[l]);else break;t=t.slice(l);let d=c.join(`
`),u=d.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");s=s?`${s}
${d}`:d,r=r?`${r}
${u}`:u;let g=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(u,o,!0),this.lexer.state.top=g,t.length===0)break;let f=o.at(-1);if(f?.type==="code")break;if(f?.type==="blockquote"){let y=f,k=y.raw+`
`+t.join(`
`),$=this.blockquote(k);o[o.length-1]=$,s=s.substring(0,s.length-y.raw.length)+$.raw,r=r.substring(0,r.length-y.text.length)+$.text;break}else if(f?.type==="list"){let y=f,k=y.raw+`
`+t.join(`
`),$=this.list(k);o[o.length-1]=$,s=s.substring(0,s.length-f.raw.length)+$.raw,r=r.substring(0,r.length-y.raw.length)+$.raw,t=k.substring(o.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:s,tokens:o,text:r}}}list(a){let e=this.rules.block.list.exec(a);if(e){let t=e[1].trim(),s=t.length>1,r={type:"list",raw:"",ordered:s,start:s?+t.slice(0,-1):"",loose:!1,items:[]};t=s?`\\d{1,9}\\${t.slice(-1)}`:`\\${t}`,this.options.pedantic&&(t=s?t:"[*+-]");let o=this.rules.other.listItemRegex(t),n=!1;for(;a;){let l=!1,d="",u="";if(!(e=o.exec(a))||this.rules.block.hr.test(a))break;d=e[0],a=a.substring(d.length);let g=Hn(e[2].split(`
`,1)[0],e[1].length),f=a.split(`
`,1)[0],y=!g.trim(),k=0;if(this.options.pedantic?(k=2,u=g.trimStart()):y?k=e[1].length+1:(k=g.search(this.rules.other.nonSpaceChar),k=k>4?1:k,u=g.slice(k),k+=e[1].length),y&&this.rules.other.blankLine.test(f)&&(d+=f+`
`,a=a.substring(f.length+1),l=!0),!l){let $=this.rules.other.nextBulletRegex(k),X=this.rules.other.hrRegex(k),ce=this.rules.other.fencesBeginRegex(k),j=this.rules.other.headingBeginRegex(k),ne=this.rules.other.htmlBeginRegex(k),oe=this.rules.other.blockquoteBeginRegex(k);for(;a;){let ke=a.split(`
`,1)[0],Y;if(f=ke,this.options.pedantic?(f=f.replace(this.rules.other.listReplaceNesting,"  "),Y=f):Y=f.replace(this.rules.other.tabCharGlobal,"    "),ce.test(f)||j.test(f)||ne.test(f)||oe.test(f)||$.test(f)||X.test(f))break;if(Y.search(this.rules.other.nonSpaceChar)>=k||!f.trim())u+=`
`+Y.slice(k);else{if(y||g.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||ce.test(g)||j.test(g)||X.test(g))break;u+=`
`+f}y=!f.trim(),d+=ke+`
`,a=a.substring(ke.length+1),g=Y.slice(k)}}r.loose||(n?r.loose=!0:this.rules.other.doubleBlankLine.test(d)&&(n=!0)),r.items.push({type:"list_item",raw:d,task:!!this.options.gfm&&this.rules.other.listIsTask.test(u),loose:!1,text:u,tokens:[]}),r.raw+=d}let c=r.items.at(-1);if(c)c.raw=c.raw.trimEnd(),c.text=c.text.trimEnd();else return;r.raw=r.raw.trimEnd();for(let l of r.items){if(this.lexer.state.top=!1,l.tokens=this.lexer.blockTokens(l.text,[]),l.task){if(l.text=l.text.replace(this.rules.other.listReplaceTask,""),l.tokens[0]?.type==="text"||l.tokens[0]?.type==="paragraph"){l.tokens[0].raw=l.tokens[0].raw.replace(this.rules.other.listReplaceTask,""),l.tokens[0].text=l.tokens[0].text.replace(this.rules.other.listReplaceTask,"");for(let u=this.lexer.inlineQueue.length-1;u>=0;u--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[u].src)){this.lexer.inlineQueue[u].src=this.lexer.inlineQueue[u].src.replace(this.rules.other.listReplaceTask,"");break}}let d=this.rules.other.listTaskCheckbox.exec(l.raw);if(d){let u={type:"checkbox",raw:d[0]+" ",checked:d[0]!=="[ ]"};l.checked=u.checked,r.loose?l.tokens[0]&&["paragraph","text"].includes(l.tokens[0].type)&&"tokens"in l.tokens[0]&&l.tokens[0].tokens?(l.tokens[0].raw=u.raw+l.tokens[0].raw,l.tokens[0].text=u.raw+l.tokens[0].text,l.tokens[0].tokens.unshift(u)):l.tokens.unshift({type:"paragraph",raw:u.raw,text:u.raw,tokens:[u]}):l.tokens.unshift(u)}}if(!r.loose){let d=l.tokens.filter(g=>g.type==="space"),u=d.length>0&&d.some(g=>this.rules.other.anyLine.test(g.raw));r.loose=u}}if(r.loose)for(let l of r.items){l.loose=!0;for(let d of l.tokens)d.type==="text"&&(d.type="paragraph")}return r}}html(a){let e=this.rules.block.html.exec(a);if(e)return{type:"html",block:!0,raw:e[0],pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:e[0]}}def(a){let e=this.rules.block.def.exec(a);if(e){let t=e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),s=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",r=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:t,raw:e[0],href:s,title:r}}}table(a){let e=this.rules.block.table.exec(a);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;let t=_a(e[1]),s=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),r=e[3]?.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],o={type:"table",raw:e[0],header:[],align:[],rows:[]};if(t.length===s.length){for(let n of s)this.rules.other.tableAlignRight.test(n)?o.align.push("right"):this.rules.other.tableAlignCenter.test(n)?o.align.push("center"):this.rules.other.tableAlignLeft.test(n)?o.align.push("left"):o.align.push(null);for(let n=0;n<t.length;n++)o.header.push({text:t[n],tokens:this.lexer.inline(t[n]),header:!0,align:o.align[n]});for(let n of r)o.rows.push(_a(n,o.header.length).map((c,l)=>({text:c,tokens:this.lexer.inline(c),header:!1,align:o.align[l]})));return o}}lheading(a){let e=this.rules.block.lheading.exec(a);if(e)return{type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:e[1],tokens:this.lexer.inline(e[1])}}paragraph(a){let e=this.rules.block.paragraph.exec(a);if(e){let t=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:t,tokens:this.lexer.inline(t)}}}text(a){let e=this.rules.block.text.exec(a);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(a){let e=this.rules.inline.escape.exec(a);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(a){let e=this.rules.inline.tag.exec(a);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(a){let e=this.rules.inline.link.exec(a);if(e){let t=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(t)){if(!this.rules.other.endAngleBracket.test(t))return;let o=Ft(t.slice(0,-1),"\\");if((t.length-o.length)%2===0)return}else{let o=Zn(e[2],"()");if(o===-2)return;if(o>-1){let n=(e[0].indexOf("!")===0?5:4)+e[1].length+o;e[2]=e[2].substring(0,o),e[0]=e[0].substring(0,n).trim(),e[3]=""}}let s=e[2],r="";if(this.options.pedantic){let o=this.rules.other.pedanticHrefTitle.exec(s);o&&(s=o[1],r=o[3])}else r=e[3]?e[3].slice(1,-1):"";return s=s.trim(),this.rules.other.startAngleBracket.test(s)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(t)?s=s.slice(1):s=s.slice(1,-1)),Aa(e,{href:s&&s.replace(this.rules.inline.anyPunctuation,"$1"),title:r&&r.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(a,e){let t;if((t=this.rules.inline.reflink.exec(a))||(t=this.rules.inline.nolink.exec(a))){let s=(t[2]||t[1]).replace(this.rules.other.multipleSpaceGlobal," "),r=e[s.toLowerCase()];if(!r){let o=t[0].charAt(0);return{type:"text",raw:o,text:o}}return Aa(t,r,t[0],this.lexer,this.rules)}}emStrong(a,e,t=""){let s=this.rules.inline.emStrongLDelim.exec(a);if(!(!s||s[3]&&t.match(this.rules.other.unicodeAlphaNumeric))&&(!(s[1]||s[2])||!t||this.rules.inline.punctuation.exec(t))){let r=[...s[0]].length-1,o,n,c=r,l=0,d=s[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(d.lastIndex=0,e=e.slice(-1*a.length+r);(s=d.exec(e))!=null;){if(o=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!o)continue;if(n=[...o].length,s[3]||s[4]){c+=n;continue}else if((s[5]||s[6])&&r%3&&!((r+n)%3)){l+=n;continue}if(c-=n,c>0)continue;n=Math.min(n,n+c+l);let u=[...s[0]][0].length,g=a.slice(0,r+s.index+u+n);if(Math.min(r,n)%2){let y=g.slice(1,-1);return{type:"em",raw:g,text:y,tokens:this.lexer.inlineTokens(y)}}let f=g.slice(2,-2);return{type:"strong",raw:g,text:f,tokens:this.lexer.inlineTokens(f)}}}}codespan(a){let e=this.rules.inline.code.exec(a);if(e){let t=e[2].replace(this.rules.other.newLineCharGlobal," "),s=this.rules.other.nonSpaceChar.test(t),r=this.rules.other.startingSpaceChar.test(t)&&this.rules.other.endingSpaceChar.test(t);return s&&r&&(t=t.substring(1,t.length-1)),{type:"codespan",raw:e[0],text:t}}}br(a){let e=this.rules.inline.br.exec(a);if(e)return{type:"br",raw:e[0]}}del(a,e,t=""){let s=this.rules.inline.delLDelim.exec(a);if(s&&(!s[1]||!t||this.rules.inline.punctuation.exec(t))){let r=[...s[0]].length-1,o,n,c=r,l=this.rules.inline.delRDelim;for(l.lastIndex=0,e=e.slice(-1*a.length+r);(s=l.exec(e))!=null;){if(o=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!o||(n=[...o].length,n!==r))continue;if(s[3]||s[4]){c+=n;continue}if(c-=n,c>0)continue;n=Math.min(n,n+c);let d=[...s[0]][0].length,u=a.slice(0,r+s.index+d+n),g=u.slice(r,-r);return{type:"del",raw:u,text:g,tokens:this.lexer.inlineTokens(g)}}}}autolink(a){let e=this.rules.inline.autolink.exec(a);if(e){let t,s;return e[2]==="@"?(t=e[1],s="mailto:"+t):(t=e[1],s=t),{type:"link",raw:e[0],text:t,href:s,tokens:[{type:"text",raw:t,text:t}]}}}url(a){let e;if(e=this.rules.inline.url.exec(a)){let t,s;if(e[2]==="@")t=e[0],s="mailto:"+t;else{let r;do r=e[0],e[0]=this.rules.inline._backpedal.exec(e[0])?.[0]??"";while(r!==e[0]);t=e[0],e[1]==="www."?s="http://"+e[0]:s=e[0]}return{type:"link",raw:e[0],text:t,href:s,tokens:[{type:"text",raw:t,text:t}]}}}inlineText(a){let e=this.rules.inline.text.exec(a);if(e){let t=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:e[0],escaped:t}}}},Be=class zr{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||xt,this.options.tokenizer=this.options.tokenizer||new Jt,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={other:pe,block:Gt.normal,inline:$t.normal};this.options.pedantic?(t.block=Gt.pedantic,t.inline=$t.pedantic):this.options.gfm&&(t.block=Gt.gfm,this.options.breaks?t.inline=$t.breaks:t.inline=$t.gfm),this.tokenizer.rules=t}static get rules(){return{block:Gt,inline:$t}}static lex(e,t){return new zr(t).lex(e)}static lexInline(e,t){return new zr(t).inlineTokens(e)}lex(e){e=e.replace(pe.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){let s=this.inlineQueue[t];this.inlineTokens(s.src,s.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],s=!1){for(this.options.pedantic&&(e=e.replace(pe.tabCharGlobal,"    ").replace(pe.spaceLine,""));e;){let r;if(this.options.extensions?.block?.some(n=>(r=n.call({lexer:this},e,t))?(e=e.substring(r.raw.length),t.push(r),!0):!1))continue;if(r=this.tokenizer.space(e)){e=e.substring(r.raw.length);let n=t.at(-1);r.raw.length===1&&n!==void 0?n.raw+=`
`:t.push(r);continue}if(r=this.tokenizer.code(e)){e=e.substring(r.raw.length);let n=t.at(-1);n?.type==="paragraph"||n?.type==="text"?(n.raw+=(n.raw.endsWith(`
`)?"":`
`)+r.raw,n.text+=`
`+r.text,this.inlineQueue.at(-1).src=n.text):t.push(r);continue}if(r=this.tokenizer.fences(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.heading(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.hr(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.blockquote(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.list(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.html(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.def(e)){e=e.substring(r.raw.length);let n=t.at(-1);n?.type==="paragraph"||n?.type==="text"?(n.raw+=(n.raw.endsWith(`
`)?"":`
`)+r.raw,n.text+=`
`+r.raw,this.inlineQueue.at(-1).src=n.text):this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title},t.push(r));continue}if(r=this.tokenizer.table(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.lheading(e)){e=e.substring(r.raw.length),t.push(r);continue}let o=e;if(this.options.extensions?.startBlock){let n=1/0,c=e.slice(1),l;this.options.extensions.startBlock.forEach(d=>{l=d.call({lexer:this},c),typeof l=="number"&&l>=0&&(n=Math.min(n,l))}),n<1/0&&n>=0&&(o=e.substring(0,n+1))}if(this.state.top&&(r=this.tokenizer.paragraph(o))){let n=t.at(-1);s&&n?.type==="paragraph"?(n.raw+=(n.raw.endsWith(`
`)?"":`
`)+r.raw,n.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=n.text):t.push(r),s=o.length!==e.length,e=e.substring(r.raw.length);continue}if(r=this.tokenizer.text(e)){e=e.substring(r.raw.length);let n=t.at(-1);n?.type==="text"?(n.raw+=(n.raw.endsWith(`
`)?"":`
`)+r.raw,n.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=n.text):t.push(r);continue}if(e){let n="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(n);break}else throw new Error(n)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let s=e,r=null;if(this.tokens.links){let l=Object.keys(this.tokens.links);if(l.length>0)for(;(r=this.tokenizer.rules.inline.reflinkSearch.exec(s))!=null;)l.includes(r[0].slice(r[0].lastIndexOf("[")+1,-1))&&(s=s.slice(0,r.index)+"["+"a".repeat(r[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(r=this.tokenizer.rules.inline.anyPunctuation.exec(s))!=null;)s=s.slice(0,r.index)+"++"+s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let o;for(;(r=this.tokenizer.rules.inline.blockSkip.exec(s))!=null;)o=r[2]?r[2].length:0,s=s.slice(0,r.index+o)+"["+"a".repeat(r[0].length-o-2)+"]"+s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);s=this.options.hooks?.emStrongMask?.call({lexer:this},s)??s;let n=!1,c="";for(;e;){n||(c=""),n=!1;let l;if(this.options.extensions?.inline?.some(u=>(l=u.call({lexer:this},e,t))?(e=e.substring(l.raw.length),t.push(l),!0):!1))continue;if(l=this.tokenizer.escape(e)){e=e.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.tag(e)){e=e.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.link(e)){e=e.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(l.raw.length);let u=t.at(-1);l.type==="text"&&u?.type==="text"?(u.raw+=l.raw,u.text+=l.text):t.push(l);continue}if(l=this.tokenizer.emStrong(e,s,c)){e=e.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.codespan(e)){e=e.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.br(e)){e=e.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.del(e,s,c)){e=e.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.autolink(e)){e=e.substring(l.raw.length),t.push(l);continue}if(!this.state.inLink&&(l=this.tokenizer.url(e))){e=e.substring(l.raw.length),t.push(l);continue}let d=e;if(this.options.extensions?.startInline){let u=1/0,g=e.slice(1),f;this.options.extensions.startInline.forEach(y=>{f=y.call({lexer:this},g),typeof f=="number"&&f>=0&&(u=Math.min(u,f))}),u<1/0&&u>=0&&(d=e.substring(0,u+1))}if(l=this.tokenizer.inlineText(d)){e=e.substring(l.raw.length),l.raw.slice(-1)!=="_"&&(c=l.raw.slice(-1)),n=!0;let u=t.at(-1);u?.type==="text"?(u.raw+=l.raw,u.text+=l.text):t.push(l);continue}if(e){let u="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return t}},er=class{options;parser;constructor(a){this.options=a||xt}space(a){return""}code({text:a,lang:e,escaped:t}){let s=(e||"").match(pe.notSpaceStart)?.[0],r=a.replace(pe.endingNewline,"")+`
`;return s?'<pre><code class="language-'+$e(s)+'">'+(t?r:$e(r,!0))+`</code></pre>
`:"<pre><code>"+(t?r:$e(r,!0))+`</code></pre>
`}blockquote({tokens:a}){return`<blockquote>
${this.parser.parse(a)}</blockquote>
`}html({text:a}){return a}def(a){return""}heading({tokens:a,depth:e}){return`<h${e}>${this.parser.parseInline(a)}</h${e}>
`}hr(a){return`<hr>
`}list(a){let e=a.ordered,t=a.start,s="";for(let n=0;n<a.items.length;n++){let c=a.items[n];s+=this.listitem(c)}let r=e?"ol":"ul",o=e&&t!==1?' start="'+t+'"':"";return"<"+r+o+`>
`+s+"</"+r+`>
`}listitem(a){return`<li>${this.parser.parse(a.tokens)}</li>
`}checkbox({checked:a}){return"<input "+(a?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:a}){return`<p>${this.parser.parseInline(a)}</p>
`}table(a){let e="",t="";for(let r=0;r<a.header.length;r++)t+=this.tablecell(a.header[r]);e+=this.tablerow({text:t});let s="";for(let r=0;r<a.rows.length;r++){let o=a.rows[r];t="";for(let n=0;n<o.length;n++)t+=this.tablecell(o[n]);s+=this.tablerow({text:t})}return s&&(s=`<tbody>${s}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+s+`</table>
`}tablerow({text:a}){return`<tr>
${a}</tr>
`}tablecell(a){let e=this.parser.parseInline(a.tokens),t=a.header?"th":"td";return(a.align?`<${t} align="${a.align}">`:`<${t}>`)+e+`</${t}>
`}strong({tokens:a}){return`<strong>${this.parser.parseInline(a)}</strong>`}em({tokens:a}){return`<em>${this.parser.parseInline(a)}</em>`}codespan({text:a}){return`<code>${$e(a,!0)}</code>`}br(a){return"<br>"}del({tokens:a}){return`<del>${this.parser.parseInline(a)}</del>`}link({href:a,title:e,tokens:t}){let s=this.parser.parseInline(t),r=ya(a);if(r===null)return s;a=r;let o='<a href="'+a+'"';return e&&(o+=' title="'+$e(e)+'"'),o+=">"+s+"</a>",o}image({href:a,title:e,text:t,tokens:s}){s&&(t=this.parser.parseInline(s,this.parser.textRenderer));let r=ya(a);if(r===null)return $e(t);a=r;let o=`<img src="${a}" alt="${$e(t)}"`;return e&&(o+=` title="${$e(e)}"`),o+=">",o}text(a){return"tokens"in a&&a.tokens?this.parser.parseInline(a.tokens):"escaped"in a&&a.escaped?a.text:$e(a.text)}},Ur=class{strong({text:a}){return a}em({text:a}){return a}codespan({text:a}){return a}del({text:a}){return a}html({text:a}){return a}text({text:a}){return a}link({text:a}){return""+a}image({text:a}){return""+a}br(){return""}checkbox({raw:a}){return a}},Te=class Cr{options;renderer;textRenderer;constructor(e){this.options=e||xt,this.options.renderer=this.options.renderer||new er,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Ur}static parse(e,t){return new Cr(t).parse(e)}static parseInline(e,t){return new Cr(t).parseInline(e)}parse(e){let t="";for(let s=0;s<e.length;s++){let r=e[s];if(this.options.extensions?.renderers?.[r.type]){let n=r,c=this.options.extensions.renderers[n.type].call({parser:this},n);if(c!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(n.type)){t+=c||"";continue}}let o=r;switch(o.type){case"space":{t+=this.renderer.space(o);break}case"hr":{t+=this.renderer.hr(o);break}case"heading":{t+=this.renderer.heading(o);break}case"code":{t+=this.renderer.code(o);break}case"table":{t+=this.renderer.table(o);break}case"blockquote":{t+=this.renderer.blockquote(o);break}case"list":{t+=this.renderer.list(o);break}case"checkbox":{t+=this.renderer.checkbox(o);break}case"html":{t+=this.renderer.html(o);break}case"def":{t+=this.renderer.def(o);break}case"paragraph":{t+=this.renderer.paragraph(o);break}case"text":{t+=this.renderer.text(o);break}default:{let n='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(n),"";throw new Error(n)}}}return t}parseInline(e,t=this.renderer){let s="";for(let r=0;r<e.length;r++){let o=e[r];if(this.options.extensions?.renderers?.[o.type]){let c=this.options.extensions.renderers[o.type].call({parser:this},o);if(c!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type)){s+=c||"";continue}}let n=o;switch(n.type){case"escape":{s+=t.text(n);break}case"html":{s+=t.html(n);break}case"link":{s+=t.link(n);break}case"image":{s+=t.image(n);break}case"checkbox":{s+=t.checkbox(n);break}case"strong":{s+=t.strong(n);break}case"em":{s+=t.em(n);break}case"codespan":{s+=t.codespan(n);break}case"br":{s+=t.br(n);break}case"del":{s+=t.del(n);break}case"text":{s+=t.text(n);break}default:{let c='Token with "'+n.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return s}},Ot=class{options;block;constructor(a){this.options=a||xt}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(a){return a}postprocess(a){return a}processAllTokens(a){return a}emStrongMask(a){return a}provideLexer(){return this.block?Be.lex:Be.lexInline}provideParser(){return this.block?Te.parse:Te.parseInline}},Un=class{defaults=Or();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=Te;Renderer=er;TextRenderer=Ur;Lexer=Be;Tokenizer=Jt;Hooks=Ot;constructor(...a){this.use(...a)}walkTokens(a,e){let t=[];for(let s of a)switch(t=t.concat(e.call(this,s)),s.type){case"table":{let r=s;for(let o of r.header)t=t.concat(this.walkTokens(o.tokens,e));for(let o of r.rows)for(let n of o)t=t.concat(this.walkTokens(n.tokens,e));break}case"list":{let r=s;t=t.concat(this.walkTokens(r.items,e));break}default:{let r=s;this.defaults.extensions?.childTokens?.[r.type]?this.defaults.extensions.childTokens[r.type].forEach(o=>{let n=r[o].flat(1/0);t=t.concat(this.walkTokens(n,e))}):r.tokens&&(t=t.concat(this.walkTokens(r.tokens,e)))}}return t}use(...a){let e=this.defaults.extensions||{renderers:{},childTokens:{}};return a.forEach(t=>{let s={...t};if(s.async=this.defaults.async||s.async||!1,t.extensions&&(t.extensions.forEach(r=>{if(!r.name)throw new Error("extension name required");if("renderer"in r){let o=e.renderers[r.name];o?e.renderers[r.name]=function(...n){let c=r.renderer.apply(this,n);return c===!1&&(c=o.apply(this,n)),c}:e.renderers[r.name]=r.renderer}if("tokenizer"in r){if(!r.level||r.level!=="block"&&r.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let o=e[r.level];o?o.unshift(r.tokenizer):e[r.level]=[r.tokenizer],r.start&&(r.level==="block"?e.startBlock?e.startBlock.push(r.start):e.startBlock=[r.start]:r.level==="inline"&&(e.startInline?e.startInline.push(r.start):e.startInline=[r.start]))}"childTokens"in r&&r.childTokens&&(e.childTokens[r.name]=r.childTokens)}),s.extensions=e),t.renderer){let r=this.defaults.renderer||new er(this.defaults);for(let o in t.renderer){if(!(o in r))throw new Error(`renderer '${o}' does not exist`);if(["options","parser"].includes(o))continue;let n=o,c=t.renderer[n],l=r[n];r[n]=(...d)=>{let u=c.apply(r,d);return u===!1&&(u=l.apply(r,d)),u||""}}s.renderer=r}if(t.tokenizer){let r=this.defaults.tokenizer||new Jt(this.defaults);for(let o in t.tokenizer){if(!(o in r))throw new Error(`tokenizer '${o}' does not exist`);if(["options","rules","lexer"].includes(o))continue;let n=o,c=t.tokenizer[n],l=r[n];r[n]=(...d)=>{let u=c.apply(r,d);return u===!1&&(u=l.apply(r,d)),u}}s.tokenizer=r}if(t.hooks){let r=this.defaults.hooks||new Ot;for(let o in t.hooks){if(!(o in r))throw new Error(`hook '${o}' does not exist`);if(["options","block"].includes(o))continue;let n=o,c=t.hooks[n],l=r[n];Ot.passThroughHooks.has(o)?r[n]=d=>{if(this.defaults.async&&Ot.passThroughHooksRespectAsync.has(o))return(async()=>{let g=await c.call(r,d);return l.call(r,g)})();let u=c.call(r,d);return l.call(r,u)}:r[n]=(...d)=>{if(this.defaults.async)return(async()=>{let g=await c.apply(r,d);return g===!1&&(g=await l.apply(r,d)),g})();let u=c.apply(r,d);return u===!1&&(u=l.apply(r,d)),u}}s.hooks=r}if(t.walkTokens){let r=this.defaults.walkTokens,o=t.walkTokens;s.walkTokens=function(n){let c=[];return c.push(o.call(this,n)),r&&(c=c.concat(r.call(this,n))),c}}this.defaults={...this.defaults,...s}}),this}setOptions(a){return this.defaults={...this.defaults,...a},this}lexer(a,e){return Be.lex(a,e??this.defaults)}parser(a,e){return Te.parse(a,e??this.defaults)}parseMarkdown(a){return(e,t)=>{let s={...t},r={...this.defaults,...s},o=this.onError(!!r.silent,!!r.async);if(this.defaults.async===!0&&s.async===!1)return o(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof e>"u"||e===null)return o(new Error("marked(): input parameter is undefined or null"));if(typeof e!="string")return o(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));if(r.hooks&&(r.hooks.options=r,r.hooks.block=a),r.async)return(async()=>{let n=r.hooks?await r.hooks.preprocess(e):e,c=await(r.hooks?await r.hooks.provideLexer():a?Be.lex:Be.lexInline)(n,r),l=r.hooks?await r.hooks.processAllTokens(c):c;r.walkTokens&&await Promise.all(this.walkTokens(l,r.walkTokens));let d=await(r.hooks?await r.hooks.provideParser():a?Te.parse:Te.parseInline)(l,r);return r.hooks?await r.hooks.postprocess(d):d})().catch(o);try{r.hooks&&(e=r.hooks.preprocess(e));let n=(r.hooks?r.hooks.provideLexer():a?Be.lex:Be.lexInline)(e,r);r.hooks&&(n=r.hooks.processAllTokens(n)),r.walkTokens&&this.walkTokens(n,r.walkTokens);let c=(r.hooks?r.hooks.provideParser():a?Te.parse:Te.parseInline)(n,r);return r.hooks&&(c=r.hooks.postprocess(c)),c}catch(n){return o(n)}}}onError(a,e){return t=>{if(t.message+=`
Please report this to https://github.com/markedjs/marked.`,a){let s="<p>An error occurred:</p><pre>"+$e(t.message+"",!0)+"</pre>";return e?Promise.resolve(s):s}if(e)return Promise.reject(t);throw t}}},bt=new Un;function L(a,e){return bt.parse(a,e)}L.options=L.setOptions=function(a){return bt.setOptions(a),L.defaults=bt.defaults,Ta(L.defaults),L};L.getDefaults=Or;L.defaults=xt;L.use=function(...a){return bt.use(...a),L.defaults=bt.defaults,Ta(L.defaults),L};L.walkTokens=function(a,e){return bt.walkTokens(a,e)};L.parseInline=bt.parseInline;L.Parser=Te;L.parser=Te.parse;L.Renderer=er;L.TextRenderer=Ur;L.Lexer=Be;L.lexer=Be.lex;L.Tokenizer=Jt;L.Hooks=Ot;L.parse=L;L.options;L.setOptions;L.use;L.walkTokens;L.parseInline;Te.parse;Be.lex;function Ve(a){return Array.isArray?Array.isArray(a):Qa(a)==="[object Array]"}function Gn(a){if(typeof a=="string")return a;let e=a+"";return e=="0"&&1/a==-1/0?"-0":e}function Kn(a){return a==null?"":Gn(a)}function Fe(a){return typeof a=="string"}function Za(a){return typeof a=="number"}function Vn(a){return a===!0||a===!1||Xn(a)&&Qa(a)=="[object Boolean]"}function Ha(a){return typeof a=="object"}function Xn(a){return Ha(a)&&a!==null}function xe(a){return a!=null}function Er(a){return!a.trim().length}function Qa(a){return a==null?a===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(a)}const Yn="Incorrect 'index' type",Jn=a=>`Invalid value for key ${a}`,eo=a=>`Pattern length exceeds max of ${a}.`,to=a=>`Missing ${a} property in key`,ro=a=>`Property 'weight' in key '${a}' must be a positive integer`,Sa=Object.prototype.hasOwnProperty;class ao{constructor(e){this._keys=[],this._keyMap={};let t=0;e.forEach(s=>{let r=Ua(s);this._keys.push(r),this._keyMap[r.id]=r,t+=r.weight}),this._keys.forEach(s=>{s.weight/=t})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Ua(a){let e=null,t=null,s=null,r=1,o=null;if(Fe(a)||Ve(a))s=a,e=Ea(a),t=Mr(a);else{if(!Sa.call(a,"name"))throw new Error(to("name"));const n=a.name;if(s=n,Sa.call(a,"weight")&&(r=a.weight,r<=0))throw new Error(ro(n));e=Ea(n),t=Mr(n),o=a.getFn}return{path:e,id:t,weight:r,src:s,getFn:o}}function Ea(a){return Ve(a)?a:a.split(".")}function Mr(a){return Ve(a)?a.join("."):a}function so(a,e){let t=[],s=!1;const r=(o,n,c)=>{if(xe(o))if(!n[c])t.push(o);else{let l=n[c];const d=o[l];if(!xe(d))return;if(c===n.length-1&&(Fe(d)||Za(d)||Vn(d)))t.push(Kn(d));else if(Ve(d)){s=!0;for(let u=0,g=d.length;u<g;u+=1)r(d[u],n,c+1)}else n.length&&r(d,n,c+1)}};return r(a,Fe(e)?e.split("."):e,0),s?t:t[0]}const no={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},oo={isCaseSensitive:!1,ignoreDiacritics:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(a,e)=>a.score===e.score?a.idx<e.idx?-1:1:a.score<e.score?-1:1},io={location:0,threshold:.6,distance:100},lo={useExtendedSearch:!1,getFn:so,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var S={...oo,...no,...io,...lo};const co=/[^ ]+/g;function uo(a=1,e=3){const t=new Map,s=Math.pow(10,e);return{get(r){const o=r.match(co).length;if(t.has(o))return t.get(o);const n=1/Math.pow(o,.5*a),c=parseFloat(Math.round(n*s)/s);return t.set(o,c),c},clear(){t.clear()}}}class Gr{constructor({getFn:e=S.getFn,fieldNormWeight:t=S.fieldNormWeight}={}){this.norm=uo(t,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((t,s)=>{this._keysMap[t.id]=s})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,Fe(this.docs[0])?this.docs.forEach((e,t)=>{this._addString(e,t)}):this.docs.forEach((e,t)=>{this._addObject(e,t)}),this.norm.clear())}add(e){const t=this.size();Fe(e)?this._addString(e,t):this._addObject(e,t)}removeAt(e){this.records.splice(e,1);for(let t=e,s=this.size();t<s;t+=1)this.records[t].i-=1}getValueForItemAtKeyId(e,t){return e[this._keysMap[t]]}size(){return this.records.length}_addString(e,t){if(!xe(e)||Er(e))return;let s={v:e,i:t,n:this.norm.get(e)};this.records.push(s)}_addObject(e,t){let s={i:t,$:{}};this.keys.forEach((r,o)=>{let n=r.getFn?r.getFn(e):this.getFn(e,r.path);if(xe(n)){if(Ve(n)){let c=[];const l=[{nestedArrIndex:-1,value:n}];for(;l.length;){const{nestedArrIndex:d,value:u}=l.pop();if(xe(u))if(Fe(u)&&!Er(u)){let g={v:u,i:d,n:this.norm.get(u)};c.push(g)}else Ve(u)&&u.forEach((g,f)=>{l.push({nestedArrIndex:f,value:g})})}s.$[o]=c}else if(Fe(n)&&!Er(n)){let c={v:n,n:this.norm.get(n)};s.$[o]=c}}}),this.records.push(s)}toJSON(){return{keys:this.keys,records:this.records}}}function Ga(a,e,{getFn:t=S.getFn,fieldNormWeight:s=S.fieldNormWeight}={}){const r=new Gr({getFn:t,fieldNormWeight:s});return r.setKeys(a.map(Ua)),r.setSources(e),r.create(),r}function ho(a,{getFn:e=S.getFn,fieldNormWeight:t=S.fieldNormWeight}={}){const{keys:s,records:r}=a,o=new Gr({getFn:e,fieldNormWeight:t});return o.setKeys(s),o.setIndexRecords(r),o}function Kt(a,{errors:e=0,currentLocation:t=0,expectedLocation:s=0,distance:r=S.distance,ignoreLocation:o=S.ignoreLocation}={}){const n=e/a.length;if(o)return n;const c=Math.abs(s-t);return r?n+c/r:c?1:n}function po(a=[],e=S.minMatchCharLength){let t=[],s=-1,r=-1,o=0;for(let n=a.length;o<n;o+=1){let c=a[o];c&&s===-1?s=o:!c&&s!==-1&&(r=o-1,r-s+1>=e&&t.push([s,r]),s=-1)}return a[o-1]&&o-s>=e&&t.push([s,o-1]),t}const mt=32;function go(a,e,t,{location:s=S.location,distance:r=S.distance,threshold:o=S.threshold,findAllMatches:n=S.findAllMatches,minMatchCharLength:c=S.minMatchCharLength,includeMatches:l=S.includeMatches,ignoreLocation:d=S.ignoreLocation}={}){if(e.length>mt)throw new Error(eo(mt));const u=e.length,g=a.length,f=Math.max(0,Math.min(s,g));let y=o,k=f;const $=c>1||l,X=$?Array(g):[];let ce;for(;(ce=a.indexOf(e,k))>-1;){let ee=Kt(e,{currentLocation:ce,expectedLocation:f,distance:r,ignoreLocation:d});if(y=Math.min(ee,y),k=ce+u,$){let Se=0;for(;Se<u;)X[ce+Se]=1,Se+=1}}k=-1;let j=[],ne=1,oe=u+g;const ke=1<<u-1;for(let ee=0;ee<u;ee+=1){let Se=0,W=oe;for(;Se<W;)Kt(e,{errors:ee,currentLocation:f+W,expectedLocation:f,distance:r,ignoreLocation:d})<=y?Se=W:oe=W,W=Math.floor((oe-Se)/2+Se);oe=W;let Xe=Math.max(1,f-W+1),kt=n?g:Math.min(f+W,g)+u,Ye=Array(kt+2);Ye[kt+1]=(1<<ee)-1;for(let me=kt;me>=Xe;me-=1){let Pe=me-1,Oe=t[a.charAt(Pe)];if($&&(X[Pe]=+!!Oe),Ye[me]=(Ye[me+1]<<1|1)&Oe,ee&&(Ye[me]|=(j[me+1]|j[me])<<1|1|j[me+1]),Ye[me]&ke&&(ne=Kt(e,{errors:ee,currentLocation:Pe,expectedLocation:f,distance:r,ignoreLocation:d}),ne<=y)){if(y=ne,k=Pe,k<=f)break;Xe=Math.max(1,2*f-k)}}if(Kt(e,{errors:ee+1,currentLocation:f,expectedLocation:f,distance:r,ignoreLocation:d})>y)break;j=Ye}const Y={isMatch:k>=0,score:Math.max(.001,ne)};if($){const ee=po(X,c);ee.length?l&&(Y.indices=ee):Y.isMatch=!1}return Y}function fo(a){let e={};for(let t=0,s=a.length;t<s;t+=1){const r=a.charAt(t);e[r]=(e[r]||0)|1<<s-t-1}return e}const tr=String.prototype.normalize?(a=>a.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g,"")):(a=>a);class Ka{constructor(e,{location:t=S.location,threshold:s=S.threshold,distance:r=S.distance,includeMatches:o=S.includeMatches,findAllMatches:n=S.findAllMatches,minMatchCharLength:c=S.minMatchCharLength,isCaseSensitive:l=S.isCaseSensitive,ignoreDiacritics:d=S.ignoreDiacritics,ignoreLocation:u=S.ignoreLocation}={}){if(this.options={location:t,threshold:s,distance:r,includeMatches:o,findAllMatches:n,minMatchCharLength:c,isCaseSensitive:l,ignoreDiacritics:d,ignoreLocation:u},e=l?e:e.toLowerCase(),e=d?tr(e):e,this.pattern=e,this.chunks=[],!this.pattern.length)return;const g=(y,k)=>{this.chunks.push({pattern:y,alphabet:fo(y),startIndex:k})},f=this.pattern.length;if(f>mt){let y=0;const k=f%mt,$=f-k;for(;y<$;)g(this.pattern.substr(y,mt),y),y+=mt;if(k){const X=f-mt;g(this.pattern.substr(X),X)}}else g(this.pattern,0)}searchIn(e){const{isCaseSensitive:t,ignoreDiacritics:s,includeMatches:r}=this.options;if(e=t?e:e.toLowerCase(),e=s?tr(e):e,this.pattern===e){let $={isMatch:!0,score:0};return r&&($.indices=[[0,e.length-1]]),$}const{location:o,distance:n,threshold:c,findAllMatches:l,minMatchCharLength:d,ignoreLocation:u}=this.options;let g=[],f=0,y=!1;this.chunks.forEach(({pattern:$,alphabet:X,startIndex:ce})=>{const{isMatch:j,score:ne,indices:oe}=go(e,$,X,{location:o+ce,distance:n,threshold:c,findAllMatches:l,minMatchCharLength:d,includeMatches:r,ignoreLocation:u});j&&(y=!0),f+=ne,j&&oe&&(g=[...g,...oe])});let k={isMatch:y,score:y?f/this.chunks.length:1};return y&&r&&(k.indices=g),k}}class it{constructor(e){this.pattern=e}static isMultiMatch(e){return Ra(e,this.multiRegex)}static isSingleMatch(e){return Ra(e,this.singleRegex)}search(){}}function Ra(a,e){const t=a.match(e);return t?t[1]:null}class vo extends it{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const t=e===this.pattern;return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}}class mo extends it{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const s=e.indexOf(this.pattern)===-1;return{isMatch:s,score:s?0:1,indices:[0,e.length-1]}}}class bo extends it{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const t=e.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}}class xo extends it{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const t=!e.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}}class ko extends it{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const t=e.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class wo extends it{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const t=!e.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}}class Va extends it{constructor(e,{location:t=S.location,threshold:s=S.threshold,distance:r=S.distance,includeMatches:o=S.includeMatches,findAllMatches:n=S.findAllMatches,minMatchCharLength:c=S.minMatchCharLength,isCaseSensitive:l=S.isCaseSensitive,ignoreDiacritics:d=S.ignoreDiacritics,ignoreLocation:u=S.ignoreLocation}={}){super(e),this._bitapSearch=new Ka(e,{location:t,threshold:s,distance:r,includeMatches:o,findAllMatches:n,minMatchCharLength:c,isCaseSensitive:l,ignoreDiacritics:d,ignoreLocation:u})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class Xa extends it{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let t=0,s;const r=[],o=this.pattern.length;for(;(s=e.indexOf(this.pattern,t))>-1;)t=s+o,r.push([s,t-1]);const n=!!r.length;return{isMatch:n,score:n?0:1,indices:r}}}const Br=[vo,Xa,bo,xo,wo,ko,mo,Va],za=Br.length,yo=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,_o="|";function Ao(a,e={}){return a.split(_o).map(t=>{let s=t.trim().split(yo).filter(o=>o&&!!o.trim()),r=[];for(let o=0,n=s.length;o<n;o+=1){const c=s[o];let l=!1,d=-1;for(;!l&&++d<za;){const u=Br[d];let g=u.isMultiMatch(c);g&&(r.push(new u(g,e)),l=!0)}if(!l)for(d=-1;++d<za;){const u=Br[d];let g=u.isSingleMatch(c);if(g){r.push(new u(g,e));break}}}return r})}const So=new Set([Va.type,Xa.type]);class Eo{constructor(e,{isCaseSensitive:t=S.isCaseSensitive,ignoreDiacritics:s=S.ignoreDiacritics,includeMatches:r=S.includeMatches,minMatchCharLength:o=S.minMatchCharLength,ignoreLocation:n=S.ignoreLocation,findAllMatches:c=S.findAllMatches,location:l=S.location,threshold:d=S.threshold,distance:u=S.distance}={}){this.query=null,this.options={isCaseSensitive:t,ignoreDiacritics:s,includeMatches:r,minMatchCharLength:o,findAllMatches:c,ignoreLocation:n,location:l,threshold:d,distance:u},e=t?e:e.toLowerCase(),e=s?tr(e):e,this.pattern=e,this.query=Ao(this.pattern,this.options)}static condition(e,t){return t.useExtendedSearch}searchIn(e){const t=this.query;if(!t)return{isMatch:!1,score:1};const{includeMatches:s,isCaseSensitive:r,ignoreDiacritics:o}=this.options;e=r?e:e.toLowerCase(),e=o?tr(e):e;let n=0,c=[],l=0;for(let d=0,u=t.length;d<u;d+=1){const g=t[d];c.length=0,n=0;for(let f=0,y=g.length;f<y;f+=1){const k=g[f],{isMatch:$,indices:X,score:ce}=k.search(e);if($){if(n+=1,l+=ce,s){const j=k.constructor.type;So.has(j)?c=[...c,...X]:c.push(X)}}else{l=0,n=0,c.length=0;break}}if(n){let f={isMatch:!0,score:l/n};return s&&(f.indices=c),f}}return{isMatch:!1,score:1}}}const Tr=[];function Ro(...a){Tr.push(...a)}function Dr(a,e){for(let t=0,s=Tr.length;t<s;t+=1){let r=Tr[t];if(r.condition(a,e))return new r(a,e)}return new Ka(a,e)}const rr={AND:"$and",OR:"$or"},Ir={PATH:"$path",PATTERN:"$val"},Lr=a=>!!(a[rr.AND]||a[rr.OR]),zo=a=>!!a[Ir.PATH],Co=a=>!Ve(a)&&Ha(a)&&!Lr(a),Ca=a=>({[rr.AND]:Object.keys(a).map(e=>({[e]:a[e]}))});function Ya(a,e,{auto:t=!0}={}){const s=r=>{let o=Object.keys(r);const n=zo(r);if(!n&&o.length>1&&!Lr(r))return s(Ca(r));if(Co(r)){const l=n?r[Ir.PATH]:o[0],d=n?r[Ir.PATTERN]:r[l];if(!Fe(d))throw new Error(Jn(l));const u={keyId:Mr(l),pattern:d};return t&&(u.searcher=Dr(d,e)),u}let c={children:[],operator:o[0]};return o.forEach(l=>{const d=r[l];Ve(d)&&d.forEach(u=>{c.children.push(s(u))})}),c};return Lr(a)||(a=Ca(a)),s(a)}function Mo(a,{ignoreFieldNorm:e=S.ignoreFieldNorm}){a.forEach(t=>{let s=1;t.matches.forEach(({key:r,norm:o,score:n})=>{const c=r?r.weight:null;s*=Math.pow(n===0&&c?Number.EPSILON:n,(c||1)*(e?1:o))}),t.score=s})}function Bo(a,e){const t=a.matches;e.matches=[],xe(t)&&t.forEach(s=>{if(!xe(s.indices)||!s.indices.length)return;const{indices:r,value:o}=s;let n={indices:r,value:o};s.key&&(n.key=s.key.src),s.idx>-1&&(n.refIndex=s.idx),e.matches.push(n)})}function To(a,e){e.score=a.score}function Do(a,e,{includeMatches:t=S.includeMatches,includeScore:s=S.includeScore}={}){const r=[];return t&&r.push(Bo),s&&r.push(To),a.map(o=>{const{idx:n}=o,c={item:e[n],refIndex:n};return r.length&&r.forEach(l=>{l(o,c)}),c})}class Rt{constructor(e,t={},s){this.options={...S,...t},this.options.useExtendedSearch,this._keyStore=new ao(this.options.keys),this.setCollection(e,s)}setCollection(e,t){if(this._docs=e,t&&!(t instanceof Gr))throw new Error(Yn);this._myIndex=t||Ga(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){xe(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const t=[];for(let s=0,r=this._docs.length;s<r;s+=1){const o=this._docs[s];e(o,s)&&(this.removeAt(s),s-=1,r-=1,t.push(o))}return t}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:t=-1}={}){const{includeMatches:s,includeScore:r,shouldSort:o,sortFn:n,ignoreFieldNorm:c}=this.options;let l=Fe(e)?Fe(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return Mo(l,{ignoreFieldNorm:c}),o&&l.sort(n),Za(t)&&t>-1&&(l=l.slice(0,t)),Do(l,this._docs,{includeMatches:s,includeScore:r})}_searchStringList(e){const t=Dr(e,this.options),{records:s}=this._myIndex,r=[];return s.forEach(({v:o,i:n,n:c})=>{if(!xe(o))return;const{isMatch:l,score:d,indices:u}=t.searchIn(o);l&&r.push({item:o,idx:n,matches:[{score:d,value:o,norm:c,indices:u}]})}),r}_searchLogical(e){const t=Ya(e,this.options),s=(c,l,d)=>{if(!c.children){const{keyId:g,searcher:f}=c,y=this._findMatches({key:this._keyStore.get(g),value:this._myIndex.getValueForItemAtKeyId(l,g),searcher:f});return y&&y.length?[{idx:d,item:l,matches:y}]:[]}const u=[];for(let g=0,f=c.children.length;g<f;g+=1){const y=c.children[g],k=s(y,l,d);if(k.length)u.push(...k);else if(c.operator===rr.AND)return[]}return u},r=this._myIndex.records,o={},n=[];return r.forEach(({$:c,i:l})=>{if(xe(c)){let d=s(t,c,l);d.length&&(o[l]||(o[l]={idx:l,item:c,matches:[]},n.push(o[l])),d.forEach(({matches:u})=>{o[l].matches.push(...u)}))}}),n}_searchObjectList(e){const t=Dr(e,this.options),{keys:s,records:r}=this._myIndex,o=[];return r.forEach(({$:n,i:c})=>{if(!xe(n))return;let l=[];s.forEach((d,u)=>{l.push(...this._findMatches({key:d,value:n[u],searcher:t}))}),l.length&&o.push({idx:c,item:n,matches:l})}),o}_findMatches({key:e,value:t,searcher:s}){if(!xe(t))return[];let r=[];if(Ve(t))t.forEach(({v:o,i:n,n:c})=>{if(!xe(o))return;const{isMatch:l,score:d,indices:u}=s.searchIn(o);l&&r.push({score:d,key:e,value:o,idx:n,norm:c,indices:u})});else{const{v:o,n}=t,{isMatch:c,score:l,indices:d}=s.searchIn(o);c&&r.push({score:l,key:e,value:o,norm:n,indices:d})}return r}}Rt.version="7.1.0";Rt.createIndex=Ga;Rt.parseIndex=ho;Rt.config=S;Rt.parseQuery=Ya;Ro(Eo);let ft=Xt({isOnline:typeof navigator<"u"?navigator.onLine:!0});const Ja={get isOnline(){return ft.isOnline},get lastOnlineTime(){return ft.lastOnlineTime},init(){typeof window>"u"||(console.log("[network] initializing, current status:",navigator.onLine),ft.isOnline=navigator.onLine,window.addEventListener("online",()=>{console.log("[network] online event received"),ft.isOnline=!0,ft.lastOnlineTime=new Date}),window.addEventListener("offline",()=>{console.log("[network] offline event received"),ft.isOnline=!1}))},refresh(){typeof navigator<"u"&&(ft.isOnline=navigator.onLine)}};typeof window<"u"&&(console.log("[network] auto-initializing"),Ja.init());var Io=w('<button class="retry-btn svelte-1cpok13">重试</button>'),Lo=w('<div><span class="message svelte-1cpok13"> </span> <!></div>');function $o(a,e){$r(e,!0);let t=Vt(e,"duration",3,3e3),s=H(!0);Pt(()=>{const u=setTimeout(()=>{E(s,!1)},t());return()=>clearTimeout(u)});var r=Lo();let o;var n=p(r),c=p(n,!0);h(n);var l=b(n,2);{var d=u=>{var g=Io();N("click",g,()=>e.onRetry()),m(u,g)};R(l,u=>{e.onRetry&&u(d)})}h(r),q(()=>{o=Ae(r,1,`toast ${e.type??""}`,"svelte-1cpok13",o,{visible:i(s)}),I(c,e.message)}),m(a,r),Fr()}Ba(["click"]);var Fo=w('<div class="loading svelte-h81f8c">加载中...</div>'),Po=w('<div class="empty svelte-h81f8c"><p>未安装任何模板</p> <p class="hint svelte-h81f8c">请连接网络后下载模板</p></div>'),Oo=w('<li class="template-item svelte-h81f8c"><span class="name svelte-h81f8c"> </span></li>'),No=w('<ul class="template-list svelte-h81f8c"></ul>'),jo=w('<div class="offline-container svelte-h81f8c"><div class="offline-header svelte-h81f8c"><svg class="icon svelte-h81f8c" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line></svg> <h2 class="svelte-h81f8c">离线模式</h2> <p class="subtitle svelte-h81f8c">无网络连接,以下模板可用:</p></div> <!></div>');function qo(a,e){$r(e,!0);let t=H(Xt([])),s=H(!0);Ma(async()=>{try{await pa.load(),E(t,pa.templates.map(d=>d.name),!0)}catch(d){console.error("[offline] failed to load templates:",d)}finally{E(s,!1)}});var r=jo(),o=b(p(r),2);{var n=d=>{var u=Fo();m(d,u)},c=d=>{var u=Po();m(d,u)},l=d=>{var u=No();ot(u,20,()=>i(t),g=>g,(g,f)=>{var y=Oo(),k=p(y),$=p(k,!0);h(k),h(y),q(()=>I($,f)),m(g,y)}),h(u),m(d,u)};R(o,d=>{i(s)?d(n):i(t).length===0?d(c,1):d(l,!1)})}h(r),m(a,r),Fr()}var Wo=w('<div class="drag-region" style="--wails-draggable:drag"></div>'),Zo=w('<button class="btn-back" aria-label="返回设置"><!></button>'),Ho=w('<div><!> <div class="page-header"><!> <nav class="breadcrumb"><h2> </h2></nav></div> <!></div>'),Qo=w('<div class="drag-region" style="--wails-draggable:drag"></div>'),Uo=w('<button class="btn-back" aria-label="返回设置"><!></button>'),Go=w('<button class="breadcrumb-link"> </button> <span class="breadcrumb-sep">›</span> <span class="breadcrumb-current"> </span>',1),Ko=w("<h2> </h2>"),Vo=w('<button class="btn-refresh" aria-label="刷新"><!></button>'),Xo=w('<div class="store-empty"><!> <p>加载中…</p></div>'),Yo=w('<div class="store-empty"><p class="error-text"> </p> <button class="btn-retry">重试</button></div>'),Jo=w('<button class="search-clear"><!></button>'),ei=w('<button role="option"> </button>'),ti=w('<div class="sort-dropdown" role="listbox"></div>'),ri=w('<button><span class="trust-dot"></span> <!> <span class="trust-label"> </span></button>'),ai=w('<div class="trust-toggles"></div> <div class="controls-sep"></div>',1),si=w('<button class="scroll-arrow scroll-arrow-left" aria-label="向左滚动">‹</button>'),ni=w("<button> </button>"),oi=w('<button class="scroll-arrow scroll-arrow-right" aria-label="向右滚动">›</button>'),ii=w('<button><span class="nav-tpl-name"> </span> <span class="nav-trust-dot"></span></button>'),li=w("<span><!> </span>"),ci=w('<button class="btn-manage"><!> <span>管理</span></button>'),ui=w('<button class="stat-item" title="Stars"><!> <span> </span></button>'),di=w('<button class="stat-item" title="下载量"><!> <span> </span></button>'),hi=w('<span class="keyword-chip"> </span>'),pi=w('<div class="detail-keywords"></div>'),gi=w('<div class="detail-preview"><iframe sandbox="allow-scripts allow-same-origin" loading="lazy" title="预览"></iframe></div>'),fi=w('<div class="detail-preview-placeholder"><!> <span>社区模板暂不提供预览</span></div>'),vi=w('<div class="readme-loading"><!> <span>加载 README…</span></div>'),mi=w('<div class="detail-readme"><h4>README</h4> <div class="readme-body"><!></div></div>'),bi=w('<a class="repo-link">查看源码 <!></a>'),xi=w('<button class="btn-installing" disabled=""><span class="status-dot"></span><span>安装中...</span></button>'),ki=w('<button class="btn-install"><!><span>更新</span></button>'),wi=w('<button class="btn-install"><!><span>安装</span></button>'),yi=w('<button class="btn-install"><!><span>在 Presto 中打开</span></button>'),_i=w('<button class="btn-manage-lg"><!><span>管理</span></button>'),Ai=w('<button class="btn-scroll-top" aria-label="回到顶部"><!> <span>回到顶部</span></button>'),Si=w('<div class="master-detail"><nav class="store-nav"></nav> <div class="store-detail"><div class="detail-header"><div class="detail-title-row"><h3> </h3> <!> <div class="detail-stats-actions"><!> <!> <!></div></div></div> <p class="detail-desc"> </p> <!> <div class="detail-meta"><span> </span> <span class="meta-sep">·</span> <span> </span> <span class="meta-sep">·</span> <span> </span></div> <!> <!> <div class="detail-repo"><!></div> <div class="detail-actions"><div class="actions-left"><!> <!></div> <!></div></div></div>'),Ei=w('<div class="store-empty"><p> </p></div>'),Ri=w('<span class="card-stat"><!> </span>'),zi=w('<span class="card-stat"><!> </span>'),Ci=w('<span class="card-stats"><!> <!></span>'),Mi=w('<button class="tpl-card"><div class="card-header"><span class="card-name"> </span> <span><!> </span></div> <p class="card-desc"> </p> <div class="card-footer"><span class="card-version"> </span> <span class="card-author"> </span> <!></div></button>'),Bi=w("<button> </button>"),Ti=w('<span class="page-ellipsis">…</span>'),Di=w('<div class="page-controls"><button class="page-btn">&lsaquo;</button> <!> <button class="page-btn">&rsaquo;</button></div>'),Ii=w('<div class="pagination"><span class="page-info"> </span> <!></div>'),Li=w('<div class="card-grid"></div> <!>',1),$i=w('<div class="filter-toolbar"><div class="search-sort-row"><div class="search-box"><span class="search-icon"><!></span> <input type="text" class="search-input" placeholder="搜索名称、描述或标签…"/> <!></div> <div class="sort-wrapper"><button aria-haspopup="listbox"><span class="sort-label"> </span> <!></button> <!></div></div> <div class="controls-row"><!> <div class="category-bar"><!> <div class="category-scroll"><button>全部</button> <!></div> <!></div></div></div> <!>',1),Fi=w(`<div><!> <div class="page-header"><!> <nav class="breadcrumb"><!></nav> <!></div> <!> <!></div> <style>.page {
    padding: var(--space-xl);
    padding-top: 48px;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
  }
  .page.web-mode {
    padding-top: var(--space-xl);
    height: auto;
    overflow: visible;
  }
  .page.web-mode .store-detail {
    overflow: visible;
  }
  .page.web-mode .card-grid {
    overflow: visible;
  }
  .drag-region {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 48px;
    z-index: 1;
  }
  h2 {
    margin: 0;
    font-size: 1.125rem;
    font-family: var(--font-ui);
    color: var(--color-text-bright);
  }
  .breadcrumb {
    display: flex;
    align-items: center;
    gap: var(--space-xs);
    min-width: 0;
  }
  .breadcrumb h2 {
    margin: 0;
    font-size: 1.125rem;
    font-family: var(--font-ui);
    color: var(--color-text-bright);
  }
  .breadcrumb-link {
    background: none;
    border: none;
    padding: 0;
    font-size: 1.125rem;
    font-family: var(--font-ui);
    color: var(--color-accent);
    cursor: pointer;
    transition: opacity var(--transition);
    white-space: nowrap;
  }
  .breadcrumb-link:hover { opacity: 0.8; }
  .breadcrumb-sep {
    color: var(--color-muted);
    font-size: 1rem;
    flex-shrink: 0;
  }
  .breadcrumb-current {
    font-size: 1.125rem;
    font-family: var(--font-ui);
    color: var(--color-text-bright);
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .page-header {
    display: flex;
    align-items: center;
    gap: var(--space-md);
    margin-bottom: var(--space-xl);
    flex-shrink: 0;
  }
  .btn-back {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-sm);
    color: var(--color-text);
    cursor: pointer;
    transition: background var(--transition);
  }
  .btn-back:hover { background: var(--color-surface-hover); }
  .btn-refresh {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    background: none;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-sm);
    color: var(--color-muted);
    cursor: pointer;
    transition: all var(--transition);
    margin-left: auto;
  }
  .btn-refresh:hover { color: var(--color-accent); border-color: var(--color-accent); }
  .btn-refresh:disabled { opacity: 0.5; cursor: not-allowed; }

  /* Filter Toolbar */
  .filter-toolbar {
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
    margin-bottom: var(--space-xl);
    flex-shrink: 0;
  }
  .search-box {
    position: relative;
    display: flex;
    align-items: center;
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    transition: border-color 250ms ease, box-shadow 250ms ease;
  }
  .search-box:focus-within {
    border-color: var(--color-accent-border);
    box-shadow: 0 0 0 3px rgba(122, 162, 247, 0.08);
  }
  .search-icon {
    display: flex;
    align-items: center;
    padding-left: var(--space-md);
    color: var(--color-muted);
    transition: color 200ms ease;
    flex-shrink: 0;
  }
  .search-box:focus-within .search-icon { color: var(--color-accent); }
  .search-input {
    flex: 1;
    background: none;
    border: none;
    outline: none;
    color: var(--color-text-bright);
    font-family: var(--font-ui);
    font-size: 13px;
    padding: 9px var(--space-md) 9px var(--space-sm);
    line-height: 1;
  }
  .search-input::placeholder { color: var(--color-muted); }
  .search-clear {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    margin-right: var(--space-sm);
    border-radius: 50%;
    border: none;
    background: var(--color-surface-hover);
    color: var(--color-muted);
    cursor: pointer;
    transition: background 150ms ease, color 150ms ease, transform 120ms ease;
    flex-shrink: 0;
  }
  .search-clear:hover { background: rgba(255, 255, 255, 0.1); color: var(--color-text); transform: scale(1.1); }
  .search-clear:active { transform: scale(0.9); }

  /* Controls Row */
  .controls-row {
    display: flex;
    align-items: center;
    gap: var(--space-md);
  }

  /* Category Bar */
  .category-bar {
    position: relative;
    flex: 1;
    min-width: 0;
    isolation: isolate;
  }
  .category-scroll {
    display: flex;
    gap: var(--space-sm);
    overflow-x: auto;
    scroll-behavior: smooth;
    padding: 2px var(--space-sm);
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  .category-scroll::-webkit-scrollbar { display: none; }
  .cat-chip {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    height: 30px;
    padding: 0 var(--space-md);
    border: 1px solid var(--color-border);
    border-radius: 999px;
    background: transparent;
    color: var(--color-muted);
    font-family: var(--font-ui);
    font-size: 12.5px;
    font-weight: 500;
    white-space: nowrap;
    cursor: pointer;
    transition: color var(--transition), background var(--transition), border-color var(--transition);
    user-select: none;
  }
  .cat-chip:hover { color: var(--color-text); background: var(--color-surface-hover); border-color: rgba(255,255,255,0.1); }
  .cat-chip.active { color: var(--color-accent); background: var(--color-accent-bg); border-color: var(--color-accent-border); }
  .scroll-arrow {
    position: absolute;
    top: 50%;
    z-index: 2;
    display: grid;
    place-items: center;
    width: 24px;
    height: 24px;
    border: 1px solid var(--color-border);
    border-radius: 50%;
    background: var(--color-surface);
    color: var(--color-muted);
    font-size: 14px;
    font-family: var(--font-ui);
    cursor: pointer;
    transform: translateY(-50%);
    transition: background var(--transition), color var(--transition), border-color var(--transition);
  }
  .scroll-arrow:hover { background: var(--color-accent-bg); color: var(--color-accent); border-color: var(--color-accent-border); }
  .scroll-arrow-left { left: 0; }
  .scroll-arrow-right { right: 0; }
  .scroll-arrow::before {
    content: "";
    position: absolute;
    top: 50%;
    width: 48px;
    height: calc(100% + 16px);
    transform: translateY(-50%);
    pointer-events: none;
    z-index: -1;
    border-radius: var(--radius-md);
  }
  .scroll-arrow-left::before { left: -4px; background: linear-gradient(to right, var(--color-bg) 40%, transparent 100%); }
  .scroll-arrow-right::before { right: -4px; background: linear-gradient(to left, var(--color-bg) 40%, transparent 100%); }

  /* Separator */
  .controls-sep {
    width: 1px;
    height: 20px;
    background: var(--color-border);
    flex-shrink: 0;
  }

  /* Trust Toggles */
  .trust-toggles {
    display: flex;
    align-items: center;
    gap: 2px;
  }
  .trust-toggle {
    display: flex;
    align-items: center;
    gap: var(--space-xs);
    padding: 5px var(--space-sm);
    border: 1px solid transparent;
    border-radius: var(--radius-sm);
    background: none;
    color: var(--color-muted);
    font-family: var(--font-ui);
    font-size: 12px;
    font-weight: 500;
    cursor: pointer;
    white-space: nowrap;
    line-height: 1;
    transition: color 200ms ease, background 200ms ease, border-color 200ms ease, box-shadow 200ms ease;
    user-select: none;
  }
  .trust-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--toggle-color);
    opacity: 0.35;
    flex-shrink: 0;
    transition: opacity 250ms ease, transform 250ms ease, box-shadow 250ms ease;
  }
  .trust-toggle:hover { color: var(--color-text); background: var(--color-surface); }
  .trust-toggle:hover .trust-dot { opacity: 0.7; transform: scale(1.2); }
  .trust-toggle:active { transform: scale(0.97); }
  .trust-toggle.active {
    color: var(--color-text-bright);
    background: color-mix(in srgb, var(--toggle-color) 10%, transparent);
    border-color: color-mix(in srgb, var(--toggle-color) 25%, transparent);
  }
  .trust-toggle.active .trust-dot {
    opacity: 1;
    transform: scale(1.3);
    box-shadow: 0 0 4px color-mix(in srgb, var(--toggle-color) 50%, transparent);
  }
  .trust-label {
    transition: opacity 150ms ease;
  }

  /* Empty / Loading */
  .store-empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-sm);
    padding: var(--space-2xl);
    color: var(--color-muted);
    flex: 1;
    justify-content: center;
  }
  .store-empty p { margin: 0; }
  .error-text { color: var(--color-danger); }
  .btn-retry {
    padding: var(--space-sm) var(--space-md);
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-sm);
    color: var(--color-text);
    font-size: 0.8125rem;
    cursor: pointer;
    transition: all var(--transition);
  }
  .btn-retry:hover { border-color: var(--color-accent); color: var(--color-accent); }

  /* Card Grid */
  .card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    align-content: start;
    gap: var(--space-md);
    overflow-y: auto;
    flex: 1;
  }

  /* Pagination */
  .pagination {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--space-md) 0 0;
    flex-shrink: 0;
  }
  .page-info {
    font-size: 0.75rem;
    color: var(--color-muted);
  }
  .page-controls {
    display: flex;
    align-items: center;
    gap: 2px;
  }
  .page-btn {
    min-width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-sm);
    background: var(--color-surface);
    color: var(--color-muted);
    font-size: 0.75rem;
    font-family: var(--font-ui);
    cursor: pointer;
    transition: all var(--transition);
  }
  .page-btn:hover:not(:disabled) { color: var(--color-text); border-color: var(--color-accent-border); }
  .page-btn.active { background: var(--color-accent-bg); color: var(--color-accent); border-color: var(--color-accent-border); }
  .page-btn:disabled { opacity: 0.3; cursor: not-allowed; }
  .page-ellipsis { color: var(--color-muted); font-size: 0.75rem; padding: 0 4px; }
  .tpl-card {
    display: flex;
    flex-direction: column;
    padding: var(--space-lg);
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    cursor: pointer;
    transition: all var(--transition);
    text-align: left;
  }
  .tpl-card:hover {
    border-color: var(--color-accent-border);
    background: var(--color-surface-hover);
  }
  .card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-sm);
    margin-bottom: var(--space-xs);
  }
  .card-name {
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--color-text-bright);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .card-trust {
    display: inline-flex;
    align-items: center;
    gap: 2px;
    font-size: 0.625rem;
    font-weight: 500;
    white-space: nowrap;
    flex-shrink: 0;
  }
  .trust-official { color: #3b82f6; }
  .trust-verified { color: #22c55e; }
  .trust-community { color: var(--color-muted); }
  .card-desc {
    margin: 0;
    font-size: 0.8125rem;
    color: var(--color-muted);
    line-height: 1.4;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    flex: 1;
  }
  .card-footer {
    display: flex;
    justify-content: space-between;
    margin-top: var(--space-sm);
    font-size: 0.75rem;
    color: var(--color-muted);
  }
  .card-version { font-family: var(--font-mono); }
  .search-sort-row {
    display: flex;
    align-items: center;
    gap: var(--space-md);
  }
  .search-sort-row .search-box {
    flex: 1;
  }
  .sort-wrapper {
    position: relative;
    flex-shrink: 0;
    align-self: stretch;
  }
  .sort-trigger {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    height: 100%;
    padding: 9px var(--space-md);
    background: var(--color-surface);
    color: var(--color-text);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    font-size: 13px;
    font-family: var(--font-ui);
    cursor: pointer;
    transition: border-color var(--transition);
    box-sizing: border-box;
    white-space: nowrap;
  }
  .sort-trigger:hover {
    border-color: var(--color-muted);
  }
  .sort-trigger.open {
    border-color: var(--color-accent);
  }
  .sort-trigger :global(svg) {
    transition: transform 150ms ease;
    flex-shrink: 0;
  }
  .sort-trigger.open :global(svg) {
    transform: rotate(180deg);
  }
  .sort-label {
    flex: 1;
    text-align: left;
  }
  .sort-dropdown {
    position: absolute;
    top: calc(100% + 4px);
    right: 0;
    min-width: 100%;
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-md);
    z-index: 100;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding: var(--space-xs) 0;
  }
  .sort-option {
    display: flex;
    align-items: center;
    width: 100%;
    text-align: left;
    padding: 6px 12px;
    background: none;
    border: none;
    color: var(--color-text);
    font-size: 12px;
    font-family: var(--font-ui);
    cursor: pointer;
    transition: background var(--transition);
    white-space: nowrap;
  }
  .sort-option:hover {
    background: var(--color-surface-hover);
  }
  .sort-option.selected {
    color: var(--color-accent);
    font-weight: 500;
  }
  .card-stats {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    margin-left: auto;
  }
  .card-stat {
    display: inline-flex;
    align-items: center;
    gap: 2px;
    font-size: 0.6875rem;
    color: var(--color-muted);
  }

  /* Master-Detail */
  .master-detail {
    display: flex;
    gap: var(--space-xl);
    flex: 1;
    min-height: 0;
  }
  .store-nav {
    width: 180px;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    gap: 2px;
    overflow-y: auto;
  }
  .nav-tpl-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-xs);
    text-align: left;
    padding: var(--space-sm) var(--space-md);
    background: none;
    border: none;
    border-radius: var(--radius-sm);
    color: var(--color-muted);
    font-size: 0.8125rem;
    cursor: pointer;
    transition: all var(--transition);
  }
  .nav-tpl-item:hover {
    color: var(--color-text);
    background: var(--color-surface);
  }
  .nav-tpl-item.active {
    color: var(--color-accent);
    background: var(--color-accent-bg);
  }
  .nav-tpl-name {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .nav-trust-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  /* Detail panel */
  .store-detail {
    flex: 1;
    min-width: 0;
    overflow-y: auto;
    padding-right: var(--space-md);
  }
  .detail-header {
    display: flex;
    align-items: center;
    gap: var(--space-md);
    margin-bottom: var(--space-md);
  }
  .detail-header h3 {
    margin: 0;
    font-size: 1.125rem;
    color: var(--color-text-bright);
  }
  .detail-title-row {
    display: flex;
    align-items: center;
    gap: var(--space-md);
    flex-wrap: wrap;
  }
  .detail-stats-actions {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    margin-left: auto;
  }
  .stat-item {
    display: inline-flex;
    align-items: center;
    gap: 3px;
    background: none;
    border: none;
    color: var(--color-muted);
    font-size: 0.8125rem;
    font-family: var(--font-mono);
    cursor: pointer;
    padding: 2px 6px;
    border-radius: var(--radius-sm);
    transition: color var(--transition), background var(--transition);
  }
  .stat-item:hover {
    color: var(--color-text);
    background: var(--color-surface);
  }
  .btn-manage {
    display: inline-flex;
    align-items: center;
    gap: var(--space-xs);
    padding: 4px 10px;
    background: none;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-sm);
    color: var(--color-muted);
    font-size: 0.75rem;
    font-family: var(--font-ui);
    cursor: pointer;
    transition: all var(--transition);
  }
  .btn-manage:hover {
    color: var(--color-text);
    border-color: var(--color-accent-border);
  }
  .trust-badge {
    display: inline-flex;
    align-items: center;
    gap: var(--space-xs);
    font-size: 0.75rem;
    font-weight: 500;
  }
  .detail-desc {
    margin: 0 0 var(--space-md);
    font-size: 0.875rem;
    color: var(--color-muted);
    line-height: 1.6;
  }
  .detail-keywords {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-xs);
    margin-bottom: var(--space-md);
  }
  .keyword-chip {
    padding: 2px 8px;
    border-radius: 8px;
    background: var(--color-surface-hover);
    color: var(--color-muted);
    font-size: 0.6875rem;
  }
  .detail-meta {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    font-size: 0.8125rem;
    color: var(--color-muted);
    margin-bottom: var(--space-lg);
    font-family: var(--font-mono);
  }
  .meta-sep { opacity: 0.4; }

  /* Preview iframe */
  .detail-preview {
    max-width: 100%;
    border-radius: var(--radius-md);
    overflow: hidden;
    border: 1px solid var(--color-border);
    margin-bottom: var(--space-lg);
    background: var(--color-surface);
  }
  .detail-preview iframe {
    width: 1200px;
    height: 800px;
    transform-origin: 0 0;
    border: none;
  }
  .detail-preview-placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 48px 16px;
    color: var(--color-muted);
    background: var(--color-surface);
    border-radius: var(--radius-md);
    font-size: 14px;
  }

  /* README */
  .readme-loading {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    color: var(--color-muted);
    font-size: 0.8125rem;
    margin-bottom: var(--space-lg);
  }
  .detail-readme {
    margin-bottom: var(--space-lg);
  }
  .detail-readme h4 {
    margin: 0 0 var(--space-sm);
    font-size: 0.875rem;
    color: var(--color-text);
  }
  .readme-body {
    margin: 0;
    padding: var(--space-md);
    background: var(--color-surface);
    border-radius: var(--radius-md);
    border: 1px solid var(--color-border);
    font-size: 0.8125rem;
    color: var(--color-muted);
    line-height: 1.7;
    word-break: break-word;
  }
  .readme-body :global(h3),
  .readme-body :global(h4),
  .readme-body :global(h5),
  .readme-body :global(h6) {
    color: var(--color-text-bright);
    margin: 1em 0 0.5em;
    line-height: 1.3;
  }
  .readme-body :global(h3) { font-size: 1.1em; }
  .readme-body :global(h4) { font-size: 1em; }
  .readme-body :global(h5) { font-size: 0.95em; }
  .readme-body :global(h6) { font-size: 0.9em; }
  .readme-body :global(p) {
    margin: 0.5em 0;
  }
  .readme-body :global(strong) { color: var(--color-text); }
  .readme-body :global(code) {
    padding: 0.15em 0.4em;
    background: var(--color-surface-hover);
    border-radius: 4px;
    font-family: var(--font-mono);
    font-size: 0.9em;
  }
  .readme-body :global(pre) {
    padding: var(--space-sm);
    background: var(--color-surface-hover);
    border-radius: var(--radius-sm);
    overflow-x: auto;
    margin: 0.75em 0;
  }
  .readme-body :global(pre code) {
    padding: 0;
    background: none;
  }
  .readme-body :global(ul) {
    padding-left: 1.5em;
    margin: 0.5em 0;
  }
  .readme-body :global(li) {
    margin: 0.25em 0;
  }
  .readme-body :global(hr) {
    border: none;
    border-top: 1px solid var(--color-border);
    margin: 1em 0;
  }
  .readme-body :global(table) {
    width: 100%;
    border-collapse: collapse;
    margin: 0.75em 0;
    font-size: 0.8125rem;
  }
  .readme-body :global(th),
  .readme-body :global(td) {
    padding: 0.4em 0.75em;
    border: 1px solid var(--color-border);
    text-align: left;
  }
  .readme-body :global(th) {
    background: var(--color-surface-hover);
    color: var(--color-text);
    font-weight: 600;
  }
  .readme-body :global(tr:nth-child(even)) {
    background: var(--color-surface-hover);
  }
  .readme-body :global(blockquote) {
    margin: 0.75em 0;
    padding: 0.5em 1em;
    border-left: 3px solid var(--color-border);
    color: var(--color-muted);
    background: var(--color-surface-hover);
    border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
  }
  .readme-body :global(ol) {
    padding-left: 1.5em;
    margin: 0.5em 0;
  }

  /* Repo link */
  .detail-repo {
    margin-bottom: var(--space-lg);
  }
  .repo-link {
    display: inline-flex;
    align-items: center;
    gap: var(--space-xs);
    color: var(--color-accent);
    text-decoration: none;
    font-size: 0.8125rem;
    cursor: pointer;
    transition: opacity var(--transition);
  }
  .repo-link:hover { opacity: 0.8; }

  /* Bottom actions */
  .detail-actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: var(--space-xl);
    gap: var(--space-md);
  }
  .actions-left {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
  }
  .btn-scroll-top {
    display: inline-flex;
    align-items: center;
    gap: var(--space-xs);
    padding: var(--space-sm) var(--space-md);
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    color: var(--color-muted);
    font-size: 0.8125rem;
    cursor: pointer;
    transition: all var(--transition);
  }
  .btn-scroll-top:hover {
    color: var(--color-text);
    border-color: var(--color-accent-border);
  }
  .btn-manage-lg {
    display: inline-flex;
    align-items: center;
    gap: var(--space-xs);
    padding: var(--space-sm) var(--space-lg);
    border-radius: var(--radius-md);
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
    transition: all var(--transition);
    border: 1px solid var(--color-border);
    background: var(--color-surface);
    color: var(--color-muted);
  }
  .btn-manage-lg:hover {
    color: var(--color-text);
    border-color: var(--color-accent-border);
  }
  .btn-install, .btn-installed, .btn-installing {
    display: inline-flex;
    align-items: center;
    gap: var(--space-xs);
    padding: var(--space-sm) var(--space-lg);
    border-radius: var(--radius-md);
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
    transition: all var(--transition);
    border: none;
  }
  .btn-install {
    background: var(--color-accent);
    color: var(--color-bg);
  }
  .btn-install:hover { opacity: 0.9; }
  .btn-installed {
    background: var(--color-surface);
    color: var(--color-muted);
    cursor: default;
  }
  .btn-installing {
    background: var(--color-surface);
    color: var(--color-muted);
    cursor: not-allowed;
  }
  .btn-installing .status-dot {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: var(--color-accent);
    animation: pulse 1s ease-in-out infinite;
  }
  @keyframes pulse {
    0%, 100% { opacity: 0.4; }
    50% { opacity: 1; }
  }

  :global(.spin) {
    animation: spin 1s linear infinite;
  }
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  /* ============================================
     Mobile Responsive (< 768px)
     Card grid: single column full-width
     Master-detail: hide sidebar, detail full-screen
     ============================================ */
  @media (max-width: 767px) {
    .page {
      padding: var(--space-md);
    }
    .page.web-mode {
      padding-top: var(--space-md);
      height: auto;
      overflow-x: hidden;
      overflow-y: visible;
    }

    /* Card grid: single column */
    .card-grid {
      grid-template-columns: 1fr;
    }

    /* Master-detail: hide sidebar, detail takes full width */
    .master-detail {
      gap: 0;
    }
    .store-nav {
      display: none;
    }
    .store-detail {
      padding-right: 0;
    }
    .detail-header {
      flex-wrap: wrap;
    }
    .detail-actions {
      flex-wrap: wrap;
    }

    /* Category bar: tighter spacing */
    .filter-toolbar {
      margin-bottom: var(--space-md);
    }
    .controls-row {
      flex-wrap: wrap;
      gap: var(--space-sm);
    }
    .search-sort-row {
      flex-wrap: wrap;
    }

    /* Pagination: compact */
    .pagination {
      flex-wrap: wrap;
      gap: var(--space-sm);
    }
  }</style>`,1);function ll(a,e){$r(e,!0);let t=Vt(e,"installedVersions",19,()=>new Map),s=Vt(e,"communityEnabled",3,!0),r=Vt(e,"initialSelectedId",3,null),o=H(null),n=H(!1),c=H(null);function l(){return e.mode==="web",e.registryUrl}async function d(v=!1){if(!(i(o)&&!v)){E(n,!0),E(c,null);try{const A=await fetch(l());if(!A.ok)throw new Error(`${A.status}`);E(o,await A.json(),!0)}catch(A){E(c,A instanceof Error?A.message:String(A),!0)}finally{E(n,!1)}}}async function u(){return d(!0)}let g=H(""),f=H(null),y=H(null),k=H(Xt(r())),$=H(""),X=H(!1),ce=H(0),j=H(1),ne=H(24),oe=H(null),ke=H("latest"),Y=H(!1),ee;const Se={latest:"最新发布",stars:"最多星标",downloads:"最多下载"};let W=H(Xt({})),Xe=H(null),kt=H(!1);function Ye(){i(Xe)&&E(kt,i(Xe).scrollTop>300)}function Kr(){i(Xe)?.scrollTo({top:0,behavior:"smooth"})}async function me(){if(e.statsUrl)try{const v=await fetch(e.statsUrl);v.ok&&E(W,await v.json(),!0)}catch{}}function Pe(v){return v==null?"":v>=1e3?(v/1e3).toFixed(1).replace(/\.0$/,"")+"k":String(v)}let Oe=H(!1),we=H(null),Vr=H(!1),Xr=H(!1);function jt(){i(we)&&(E(Vr,i(we).scrollLeft>4),E(Xr,i(we).scrollLeft<i(we).scrollWidth-i(we).clientWidth-4))}function Yr(v){i(we)?.scrollBy({left:v==="left"?-200:200,behavior:"smooth"})}Pt(()=>{if(!i(we))return;jt(),i(we).addEventListener("scroll",jt,{passive:!0});const v=new ResizeObserver(jt);return v.observe(i(we)),()=>{i(we)?.removeEventListener("scroll",jt),v.disconnect()}});let De=H(null);function cr(){if(e.mode==="web"||!i(De))return;const v=getComputedStyle(i(De)),A=parseFloat(v.gap)||12,D=200+A,be=Math.max(1,Math.floor((i(De).clientWidth+A)/D)),ue=i(De).querySelector(".tpl-card"),et=(ue?ue.offsetHeight:120)+A,yt=Math.max(1,Math.round((i(De).clientHeight+A)/et)),tt=be*yt;tt>0&&tt!==i(ne)&&E(ne,tt)}Pt(()=>{if(!i(De))return;cr();const v=new ResizeObserver(cr);return v.observe(i(De)),()=>v.disconnect()}),Pt(()=>{e.mode==="web"&&i(o)?E(ne,i(o).templates.length||100,!0):i(o)&&i(De)&&requestAnimationFrame(()=>cr())});let es=Q(()=>{if(!i(o))return[];if(i(o).categories?.length)return i(o).categories;const v=new Set;return i(o).templates.map(A=>A.category).filter(A=>!!A&&!v.has(A)&&(v.add(A),!0)).map(A=>({id:A,label:{zh:A,en:A}}))});const qt={official:{label:"官方",cls:"trust-official",color:"#3b82f6",icon:tn},verified:{label:"已验证",cls:"trust-verified",color:"#22c55e",icon:fa},community:{label:"社区",cls:"trust-community",color:"",icon:an},unverified:{label:"未验证",cls:"trust-unverified",color:"#e0af68",icon:rn}};let Jr=Q(()=>i(o)?new Rt(i(o).templates,{keys:[{name:"displayName",weight:2},{name:"name",weight:1.5},{name:"description",weight:1},{name:"author",weight:1},{name:"category",weight:.8},{name:"keywords",weight:1.2}],threshold:.4,ignoreLocation:!0}):null),ts=Q(()=>{if(!i(o))return[];const v=i(g).trim();return(v&&i(Jr)?i(Jr).search(v).map(D=>D.item):i(o).templates).filter(D=>{const be=!i(f)||D.category===i(f),ue=!i(y)||D.trust===i(y),Je=s()||D.trust==="official"||D.trust==="verified";return be&&ue&&Je})}),zt=Q(()=>{const v=[...i(ts)];switch(i(ke)){case"stars":return v.sort((A,D)=>(i(W)[D.name]?.stars??0)-(i(W)[A.name]?.stars??0));case"downloads":return v.sort((A,D)=>(i(W)[D.name]?.downloads??0)-(i(W)[A.name]?.downloads??0));default:return v.sort((A,D)=>{const be=A.publishedAt?new Date(A.publishedAt).getTime():0;return(D.publishedAt?new Date(D.publishedAt).getTime():0)-be})}});Pt(()=>{i(g),i(f),i(y),i(ne),i(ke),E(j,1)});let Ct=Q(()=>Math.max(1,Math.ceil(i(zt).length/i(ne)))),rs=Q(()=>i(zt).slice((i(j)-1)*i(ne),i(j)*i(ne))),ea=Q(()=>{if(!i(o))return new Set;const v=new Set;for(const A of i(o).templates)!s()&&A.trust!=="official"&&A.trust!=="verified"||v.add(A.trust);return v}),z=Q(()=>i(o)?.templates.find(v=>v.name===i(k))??null),wt=Q(()=>i(z)?qt[i(z).trust]:null);function Wt(v){return t().has(v)}function as(v,A){const D=t().get(v);return D?D!==A:!1}const ta={network_error:"网络连接失败，请检查网络后重试",not_found:"模板不存在",checksum_mismatch:"文件校验失败，可能已损坏，请重试",server_error:"服务器暂时不可用，请稍后重试"};async function ur(v){if(!(!e.installFn||Lt.isInstalling(v.name))){Lt.setInstalling(v.name);try{await e.installFn(v),Lt.setInstalled(v.name),e.onInstallSuccess?.(v.name)}catch(A){let D="安装失败，请重试",be="server_error";if(A instanceof Error)try{const ue=JSON.parse(A.message);ue.error_type&&ta[ue.error_type]&&(D=ta[ue.error_type],be=ue.error_type)}catch{}E(oe,{message:D,type:"error",onRetry:()=>{E(oe,null),ur(v)}},!0),setTimeout(()=>{Lt.reset(v.name)},3500),console.error("[StoreView] install failed:",A)}}}async function ss(v){if(e.readmeUrl){E(X,!0),E($,"");try{const A=(e.mode,e.readmeUrl(v)),D=await fetch(A);D.ok&&E($,await D.text(),!0)}catch{}finally{E(X,!1)}}}function ra(v){if(i(k)===v){E(k,null);return}E(k,v,!0),ss(v)}function ns(v){e.mode==="desktop"&&window.runtime?.BrowserOpenURL?window.runtime.BrowserOpenURL(v):window.open(v,"_blank","noopener,noreferrer")}function dr(v){return v.repository?v.repository:v.repo?`https://github.com/${v.repo}`:""}const hr=new L.Renderer;hr.link=({text:v})=>v,hr.image=({text:v})=>v?`[${v}]`:"",L.setOptions({gfm:!0,breaks:!0,renderer:hr});function os(v){return L.parse(v,{async:!1})}function aa(v){i(Y)&&ee&&!ee.contains(v.target)&&E(Y,!1)}Ma(()=>(d(),me(),document.addEventListener("pointerdown",aa,!0),()=>document.removeEventListener("pointerdown",aa,!0)));var sa=Me(),is=le(sa);{var ls=v=>{var A=Ho();let D;var be=p(A);{var ue=Ne=>{var rt=Wo();m(Ne,rt)};R(be,Ne=>{e.mode==="desktop"&&Ne(ue)})}var Je=b(be,2),et=p(Je);{var yt=Ne=>{var rt=Zo(),fr=p(rt);Sr(fr,{size:16}),h(rt),N("click",rt,()=>Qt(e.backRoute)),m(Ne,rt)};R(et,Ne=>{e.mode==="desktop"&&e.backRoute&&Ne(yt)})}var tt=b(et,2),_t=p(tt),pr=p(_t,!0);h(_t),h(tt),h(Je);var gr=b(Je,2);qo(gr,{}),h(A),q(()=>{D=Ae(A,1,"page",null,D,{"web-mode":e.mode==="web"}),I(pr,e.title)}),m(v,A)},cs=v=>{var A=Fi(),D=le(A);let be;var ue=p(D);{var Je=T=>{var F=Qo();m(T,F)};R(ue,T=>{e.mode==="desktop"&&T(Je)})}var et=b(ue,2),yt=p(et);{var tt=T=>{var F=Uo(),G=p(F);Sr(G,{size:16}),h(F),N("click",F,()=>Qt(e.backRoute)),m(T,F)};R(yt,T=>{e.mode==="desktop"&&e.backRoute&&T(tt)})}var _t=b(yt,2),pr=p(_t);{var gr=T=>{var F=Go(),G=le(F),je=p(G,!0);h(G);var at=b(G,4),Mt=p(at,!0);h(at),q(()=>{I(je,e.title),I(Mt,i(z).displayName)}),N("click",G,()=>E(k,null)),m(T,F)},Ne=T=>{var F=Ko(),G=p(F,!0);h(F),q(()=>I(G,e.title)),m(T,F)};R(pr,T=>{i(k)&&i(z)?T(gr):T(Ne,!1)})}h(_t);var rt=b(_t,2);{var fr=T=>{var F=Vo(),G=p(F);{let je=Q(()=>i(n)?"spin":"");ga(G,{size:14,get class(){return i(je)}})}h(F),q(()=>F.disabled=i(n)),N("click",F,()=>u()),m(T,F)};R(rt,T=>{e.mode==="desktop"&&T(fr)})}h(et);var na=b(et,2);{var us=T=>{var F=Xo(),G=p(F);va(G,{size:24,class:"spin"}),Ce(2),h(F),m(T,F)},ds=T=>{var F=Yo(),G=p(F),je=p(G);h(G);var at=b(G,2);h(F),q(()=>I(je,`加载失败：${i(c)??""}`)),N("click",at,()=>u()),m(T,F)},hs=T=>{var F=$i(),G=le(F),je=p(G),at=p(je),Mt=p(at),fs=p(Mt);Ks(fs,{size:14}),h(Mt);var vr=b(Mt,2);js(vr);var vs=b(vr,2);{var ms=C=>{var P=Jo(),K=p(P);Xs(K,{size:12}),h(P),N("click",P,()=>E(g,"")),m(C,P)};R(vs,C=>{i(g)&&C(ms)})}h(at);var mr=b(at,2),At=p(mr);let oa;var br=p(At),bs=p(br,!0);h(br);var xs=b(br,2);Vs(xs,{size:12}),h(At);var ks=b(At,2);{var ws=C=>{var P=ti();ot(P,20,()=>["latest","stars","downloads"],K=>K,(K,J)=>{var te=ei();let de;var re=p(te,!0);h(te),q(()=>{de=Ae(te,1,"sort-option",null,de,{selected:i(ke)===J}),It(te,"aria-selected",i(ke)===J),I(re,Se[J])}),N("click",te,()=>{E(ke,J,!0),E(Y,!1)}),m(K,te)}),h(P),Hs(3,P,()=>Us,()=>({y:-4,duration:150,easing:Qs})),m(C,P)};R(ks,C=>{i(Y)&&C(ws)})}h(mr),Ht(mr,C=>ee=C,()=>ee),h(je);var ia=b(je,2),la=p(ia);{var ys=C=>{var P=ai(),K=le(P);ot(K,21,()=>Object.entries(qt),([J,te])=>J,(J,te)=>{var de=Q(()=>Os(i(te),2));let re=()=>i(de)[0],ge=()=>i(de)[1];var qe=Me(),Bt=le(qe);{var fe=he=>{const lt=Q(()=>ge().icon);var ae=ri();let Ie;var ye=b(p(ae),2);Ar(ye,()=>i(lt),(We,Ze)=>{Ze(We,{size:13})});var Le=b(ye,2),ve=p(Le,!0);h(Le),h(ae),q(()=>{Ie=Ae(ae,1,"trust-toggle",null,Ie,{active:i(y)===re()}),Et(ae,`--toggle-color:${(ge().color||"var(--color-muted)")??""}`),It(ae,"title",ge().label),I(ve,ge().label)}),N("click",ae,()=>E(y,i(y)===re()?null:re(),!0)),m(he,ae)},U=Q(()=>i(ea).has(re()));R(Bt,he=>{i(U)&&he(fe)})}m(J,qe)}),h(K),Ce(2),m(C,P)};R(la,C=>{i(ea).size>1&&C(ys)})}var ca=b(la,2),ua=p(ca);{var _s=C=>{var P=si();N("click",P,()=>Yr("left")),m(C,P)};R(ua,C=>{i(Vr)&&C(_s)})}var Zt=b(ua,2),xr=p(Zt);let da;var As=b(xr,2);ot(As,17,()=>i(es),C=>C.id,(C,P)=>{var K=ni();let J;var te=p(K,!0);h(K),q(()=>{J=Ae(K,1,"cat-chip",null,J,{active:i(f)===i(P).id}),I(te,i(P).label.zh)}),N("click",K,()=>E(f,i(f)===i(P).id?null:i(P).id,!0)),m(C,K)}),h(Zt),Ht(Zt,C=>E(we,C),()=>i(we));var Ss=b(Zt,2);{var Es=C=>{var P=oi();N("click",P,()=>Yr("right")),m(C,P)};R(Ss,C=>{i(Xr)&&C(Es)})}h(ca),h(ia),h(G);var Rs=b(G,2);{var zs=C=>{var P=Si(),K=p(P);ot(K,21,()=>i(zt),_=>_.name,(_,x)=>{const M=Q(()=>qt[i(x).trust]);var O=ii();let V;var Z=p(O),ie=p(Z,!0);h(Z);var _e=b(Z,2);h(O),q(()=>{V=Ae(O,1,"nav-tpl-item",null,V,{active:i(k)===i(x).name}),I(ie,i(x).displayName),Et(_e,`background:${i(M).color??""}`)}),N("click",O,()=>ra(i(x).name)),m(_,O)}),h(K);var J=b(K,2),te=p(J),de=p(te),re=p(de),ge=p(re,!0);h(re);var qe=b(re,2);{var Bt=_=>{const x=Q(()=>i(wt).icon);var M=li(),O=p(M);Ar(O,()=>i(x),(Z,ie)=>{ie(Z,{size:14})});var V=b(O);h(M),q(()=>{Ae(M,1,`trust-badge ${i(wt).cls??""}`),Et(M,i(wt).color?`color:${i(wt).color}`:""),I(V,` ${i(wt).label??""}`)}),m(_,M)};R(qe,_=>{i(wt)&&_(Bt)})}var fe=b(qe,2),U=p(fe);{var he=_=>{var x=ci(),M=p(x);ma(M,{size:13}),Ce(2),h(x),N("click",x,()=>Qt(`/settings?panel=tpl-manage&focus=${i(z).name}`)),m(_,x)},lt=Q(()=>e.mode==="desktop"&&Wt(i(z).name));R(U,_=>{i(lt)&&_(he)})}var ae=b(U,2);{var Ie=_=>{var x=ui(),M=p(x);ba(M,{size:13});var O=b(M,2),V=p(O,!0);h(O),h(x),q(Z=>I(V,Z),[()=>i(Oe)?i(W)[i(z).name].stars:Pe(i(W)[i(z).name].stars)]),N("click",x,()=>E(Oe,!i(Oe))),m(_,x)};R(ae,_=>{i(W)[i(z).name]?.stars!=null&&_(Ie)})}var ye=b(ae,2);{var Le=_=>{var x=di(),M=p(x);Ut(M,{size:13});var O=b(M,2),V=p(O,!0);h(O),h(x),q(Z=>I(V,Z),[()=>i(Oe)?i(W)[i(z).name].downloads:Pe(i(W)[i(z).name].downloads)]),N("click",x,()=>E(Oe,!i(Oe))),m(_,x)};R(ye,_=>{i(W)[i(z).name]?.downloads!=null&&_(Le)})}h(fe),h(de),h(te);var ve=b(te,2),We=p(ve,!0);h(ve);var Ze=b(ve,2);{var st=_=>{var x=pi();ot(x,20,()=>i(z).keywords,M=>M,(M,O)=>{var V=hi(),Z=p(V,!0);h(V),q(()=>I(Z,O)),m(M,V)}),h(x),m(_,x)};R(Ze,_=>{i(z).keywords.length>0&&_(st)})}var se=b(Ze,2),He=p(se),ct=p(He);h(He);var ut=b(He,4),dt=p(ut,!0);h(ut);var Ee=b(ut,4),Re=p(Ee,!0);h(Ee),h(se);var ht=b(se,2);{var Qe=_=>{var x=Me(),M=le(x);{var O=V=>{var Z=gi(),ie=p(Z);h(Z),q(_e=>{Et(Z,`height:${i(ce)*800/1200}px`),It(ie,"src",_e),Et(ie,`transform:scale(${i(ce)/1200})`)},[()=>e.previewUrl(i(z).name)]),en(Z,"clientWidth",_e=>E(ce,_e)),m(V,Z)};R(M,V=>{e.previewUrl&&V(O)})}m(_,x)},pt=_=>{var x=fi(),M=p(x);fa(M,{size:24}),Ce(2),h(x),m(_,x)};R(ht,_=>{i(z).trust==="official"||i(z).trust==="verified"?_(Qe):_(pt,!1)})}var Tt=b(ht,2);{var kr=_=>{var x=Me(),M=le(x);{var O=Z=>{var ie=vi(),_e=p(ie);va(_e,{size:16,class:"spin"}),Ce(2),h(ie),m(Z,ie)},V=Z=>{var ie=mi(),_e=b(p(ie),2),yr=p(_e);Ws(yr,()=>Zs.sanitize(os(i($)))),h(_e),h(ie),m(Z,ie)};R(M,Z=>{i(X)?Z(O):i($)&&Z(V,1)})}m(_,x)};R(Tt,_=>{e.readmeUrl&&_(kr)})}var Dt=b(Tt,2),wr=p(Dt);{var Ue=_=>{var x=bi(),M=b(p(x));Ys(M,{size:12}),h(x),q(O=>It(x,"href",O),[()=>dr(i(z))]),N("click",x,O=>{O.preventDefault(),ns(dr(i(z)))}),m(_,x)},Ge=Q(()=>dr(i(z)));R(wr,_=>{i(Ge)&&_(Ue)})}h(Dt);var nt=b(Dt,2),gt=p(nt),St=p(gt);{var Ms=_=>{var x=Me(),M=le(x);{var O=Ke=>{var ze=xi();m(Ke,ze)},V=Q(()=>Lt.isInstalling(i(z).name)),Z=Ke=>{var ze=ki(),_r=p(ze);ga(_r,{size:14}),Ce(),h(ze),N("click",ze,()=>ur(i(z))),m(Ke,ze)},ie=Q(()=>Wt(i(z).name)&&as(i(z).name,i(z).version)),_e=Ke=>{var ze=wi(),_r=p(ze);Ut(_r,{size:14}),Ce(),h(ze),N("click",ze,()=>ur(i(z))),m(Ke,ze)},yr=Q(()=>!Wt(i(z).name));R(M,Ke=>{i(V)?Ke(O):i(ie)?Ke(Z,1):i(yr)&&Ke(_e,2)})}m(_,x)},Bs=_=>{var x=yi(),M=p(x);Ut(M,{size:14}),Ce(),h(x),N("click",x,()=>{const O=`presto://install/${i(z).name}`;window.parent!==window?window.parent.postMessage({type:"presto-open-template",url:O},"*"):window.location.href=O}),m(_,x)};R(St,_=>{e.mode==="desktop"&&e.installFn?_(Ms):e.mode==="web"&&_(Bs,1)})}var Ts=b(St,2);{var Ds=_=>{var x=_i(),M=p(x);ma(M,{size:14}),Ce(),h(x),N("click",x,()=>Qt(`/settings?panel=tpl-manage&focus=${i(z).name}`)),m(_,x)},Is=Q(()=>e.mode==="desktop"&&Wt(i(z).name));R(Ts,_=>{i(Is)&&_(Ds)})}h(gt);var Ls=b(gt,2);{var $s=_=>{var x=Ai(),M=p(x);Sr(M,{size:14,style:"transform:rotate(90deg)"}),Ce(2),h(x),N("click",x,Kr),m(_,x)};R(Ls,_=>{e.mode==="desktop"&&i(kt)&&_($s)})}h(nt),h(J),Ht(J,_=>E(Xe,_),()=>i(Xe)),h(P),q(()=>{I(ge,i(z).displayName),I(We,i(z).description),I(ct,`v${i(z).version??""}`),I(dt,i(z).author),I(Re,i(z).license)}),Ns("scroll",J,Ye),m(C,P)},Cs=C=>{var P=Me(),K=le(P);{var J=de=>{var re=Ei(),ge=p(re),qe=p(ge,!0);h(ge),h(re),q(()=>I(qe,i(g)?"没有匹配的结果":"暂无可用内容")),m(de,re)},te=de=>{var re=Li(),ge=le(re);ot(ge,21,()=>i(rs),fe=>fe.name,(fe,U)=>{const he=Q(()=>qt[i(U).trust]),lt=Q(()=>i(he).icon);var ae=Mi(),Ie=p(ae),ye=p(Ie),Le=p(ye,!0);h(ye);var ve=b(ye,2),We=p(ve);Ar(We,()=>i(lt),(Qe,pt)=>{pt(Qe,{size:12})});var Ze=b(We);h(ve),h(Ie);var st=b(Ie,2),se=p(st,!0);h(st);var He=b(st,2),ct=p(He),ut=p(ct);h(ct);var dt=b(ct,2),Ee=p(dt,!0);h(dt);var Re=b(dt,2);{var ht=Qe=>{var pt=Ci(),Tt=p(pt);{var kr=Ue=>{var Ge=Ri(),nt=p(Ge);ba(nt,{size:10});var gt=b(nt);h(Ge),q(St=>I(gt,` ${St??""}`),[()=>Pe(i(W)[i(U).name].stars)]),m(Ue,Ge)};R(Tt,Ue=>{i(W)[i(U).name]?.stars!=null&&Ue(kr)})}var Dt=b(Tt,2);{var wr=Ue=>{var Ge=zi(),nt=p(Ge);Ut(nt,{size:10});var gt=b(nt);h(Ge),q(St=>I(gt,` ${St??""}`),[()=>Pe(i(W)[i(U).name].downloads)]),m(Ue,Ge)};R(Dt,Ue=>{i(W)[i(U).name]?.downloads!=null&&Ue(wr)})}h(pt),m(Qe,pt)};R(Re,Qe=>{(i(W)[i(U).name]?.stars!=null||i(W)[i(U).name]?.downloads!=null)&&Qe(ht)})}h(He),h(ae),q(()=>{I(Le,i(U).displayName),Ae(ve,1,`card-trust ${i(he).cls??""}`),Et(ve,i(he).color?`color:${i(he).color}`:""),I(Ze,` ${i(he).label??""}`),I(se,i(U).description),I(ut,`v${i(U).version??""}`),I(Ee,i(U).author)}),N("click",ae,()=>ra(i(U).name)),m(fe,ae)}),h(ge),Ht(ge,fe=>E(De,fe),()=>i(De));var qe=b(ge,2);{var Bt=fe=>{var U=Ii(),he=p(U),lt=p(he);h(he);var ae=b(he,2);{var Ie=ye=>{var Le=Di(),ve=p(Le),We=b(ve,2);ot(We,17,()=>Array.from({length:i(Ct)},(st,se)=>se+1),qs,(st,se)=>{var He=Me(),ct=le(He);{var ut=Ee=>{var Re=Bi();let ht;var Qe=p(Re,!0);h(Re),q(()=>{ht=Ae(Re,1,"page-btn",null,ht,{active:i(j)===i(se)}),I(Qe,i(se))}),N("click",Re,()=>E(j,i(se),!0)),m(Ee,Re)},dt=Ee=>{var Re=Ti();m(Ee,Re)};R(ct,Ee=>{i(se)===1||i(se)===i(Ct)||i(se)>=i(j)-3&&i(se)<=i(j)+3?Ee(ut):(i(se)===i(j)-4||i(se)===i(j)+4)&&Ee(dt,1)})}m(st,He)});var Ze=b(We,2);h(Le),q(()=>{ve.disabled=i(j)<=1,Ze.disabled=i(j)>=i(Ct)}),N("click",ve,()=>ha(j,-1)),N("click",Ze,()=>ha(j)),m(ye,Le)};R(ae,ye=>{i(Ct)>1&&ye(Ie)})}h(U),q(()=>I(lt,`${i(zt).length??""} 项，第 ${i(j)??""}/${i(Ct)??""} 页`)),m(fe,U)};R(qe,fe=>{e.mode!=="web"&&fe(Bt)})}m(de,re)};R(K,de=>{i(zt).length===0?de(J):de(te,!1)})}m(C,P)};R(Rs,C=>{i(k)&&i(z)?C(zs):C(Cs,!1)})}q(()=>{oa=Ae(At,1,"sort-trigger",null,oa,{open:i(Y)}),It(At,"aria-expanded",i(Y)),I(bs,Se[i(ke)]),da=Ae(xr,1,"cat-chip",null,da,{active:!i(f)})}),Gs(vr,()=>i(g),C=>E(g,C)),N("click",At,()=>E(Y,!i(Y))),N("click",xr,()=>E(f,null)),m(T,F)};R(na,T=>{i(n)&&!i(o)?T(us):i(c)&&!i(o)?T(ds,1):i(o)&&T(hs,2)})}var ps=b(na,2);{var gs=T=>{$o(T,{get message(){return i(oe).message},get type(){return i(oe).type},duration:3e3,get onRetry(){return i(oe).onRetry}})};R(ps,T=>{i(oe)&&T(gs)})}h(D),Ce(2),q(()=>be=Ae(D,1,"page",null,be,{"web-mode":e.mode==="web"})),m(v,A)};R(is,v=>{Ja.isOnline?v(cs,!1):v(ls)})}m(a,sa),Fr()}Ba(["click"]);export{ll as S};
