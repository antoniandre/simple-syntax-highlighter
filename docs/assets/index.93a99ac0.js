import{o as e,c as t,r as n,a,b as s,d as o,w as l,e as r,f as i,t as c,g as p,h as u,A as d}from"./vendor.679c857b.js";const h={quote:/("(?:\\"|[^"])*")|('(?:\\'|[^'])*')/,comment:/(\/\/.*?(?:\n|$)|\/\*[\s\S]*?\*\/)/,htmlTag:/(<([^>])*>)/,punctuation:/(!==?|(?:[[\](){}.:;,+\-?=!]|&lt;|&gt;)+|&&|\|\|)/,number:/(-?(?:\.\d+|\d+(?:\.\d+)?))/,boolean:/\b(true|false)\b/},m={shell:{quote:h.quote,comment:/(#.*?)(?:\n|$)/,keyword:/(?:^|\b)(npm|yarn|install|run)(?:\b|$)/,param:/( --(?:save|save-dev))(?:\s|$)/},xml:{doctype:/(&lt;\!DOCTYPE.*?&gt;)/,quote:h.quote,comment:/(&lt;!--[\s\S]*?--&gt;)/,tag:/(&lt;\/?)([a-zA-Z\-:]+)([\s\S]*?)(\/?&gt;)/},html:{doctype:/(DOCTYPE)/,quote:h.quote,comment:/(&lt;!--[\s\S]*?--&gt;)/,tag:/(&lt;\/?)([a-z]\w*)([\s\S]*?)(\/?&gt;)/},"html-vue":{doctype:/(DOCTYPE)/,quote:h.quote,comment:/(&lt;!--[\s\S]*?--&gt;)/,tag:/(&lt;\/?)([a-zA-Z][\w\d-]*)((?:.|\s)*?)(\/?&gt;)/},pug:{text2:/((?:^|\n)[ \t]+|^)\|([ \t]*)([^\n]+(?=\n|$))/,quote:h.quote,comment:/(?:^|\n)([ \t]+|^)(\/\/-[ \t]*(?:[^\n]*?(?:\n\1[ \t]+[^\n]*)+|[^\n]+(?=\n|$)))/,tag:/([a-zA-Z][\w\d-]*|)([.#][a-zA-Z][-.\w\d]*|)\b(?:\(([\s\S]*?)\))?(\.?)([ \t]*)([^\n]+)?(?=\n|$)/,punctuation:/(!==?|(?:[#[\]().,+\-?=!|]|&lt;|&gt;)+)/},css:{quote:h.quote,comment:/(\/\*[\s\S]*?\*\/)/,pseudo:/(:(?:hover|active|focus|visited|not|before|after|(?:first|last|nth)-child))/,"selector keyword vendor":/(@-(?:moz|o|webkit|ms)-(?=keyframes\s))/,"selector keyword":/((?:@(?:import|media|font-face|keyframes)|screen|print|and)(?=[\s({])|keyframes|\s(?:ul|ol|li|table|div|pre|p|a|img|br|hr|h[1-6]|em|strong|span|html|body|iframe|video|audio|input|button|form|label|fieldset|small|abbr|i|dd|dt)\b)/,selector:/((?:[.#-\w*+ >:,[\]="~\n]|&gt;)+)(?=\s*\{)/,"attribute keyword vendor":/(-(?:moz|o|webkit|ms)-(?=transform|transition|user-select|animation|background-size|box-shadow))/,"attribute keyword":/\b(content|float|display|position|top|left|right|bottom|(?:(?:max|min)-)?width|(?:(?:max|min|line)-)?height|font(?:-(?:family|style|size|weight|variant|stretch))?|vertical-align|color|opacity|visibility|z-index|transform(?:-(?:origin|style|delay|duration|property|timing-function))?|transition(?:-(?:delay|duration))?|animation(?:-(?:name|delay|duration|direction|fill-mode))?|backface-visibility|background(?:-(?:color|position|image|repeat|size))?|(?:padding|margin|border)(?:-(?:top|left|right|bottom))?|border(?:-(?:radius|color|width|style|spacing))|white-space|text-(?:align|transform|decoration|shadow|indent)|overflow(?:-(?:x|y))?|(?:letter|word)-spacing|word-break|box-(?:sizing|shadow)|stroke(?:-(?:width|opacity|dasharray|dashoffset|linecap|linejoin))?|fill|speak|outline|user-select|cursor|flex(?:-(?:direction|flow|grow|shrink|basis|wrap))?|(?:justify|align)-(?:content|self|items))(?=\s*:)/,"value keyword vendor":/(-(?:moz|o|webkit|ms)-(?=linear-gradient))/,"value keyword important":/( ?!important)/,"value keyword":/\b(inherit|initial|normal|none|unset|auto|inline-block|inline|block|absolute|relative|static|fixed|sticky|hidden|visible|top|left|right|bottom|center|middle|baseline|solid|dotted|dashed|line-through|(?:over|under)line|wavy|double|(?:pre-|no)?wrap|pre|break-word|(?:upper|lower)case|capitalize|italic|bold|attr\(.*?\)|linear|ease(?:-in)?(?:-out)?|all|infinite|cubic-bezier|(?:translate|rotate)(?:[X-Z]|3d)?|skew[XY]?|scale|(?:no-)?repeat|repeat(?:-x|-y)|contain|cover|url|(?:repeating-)?(?:linear|radial)-gradient|inset|pointer|flex(?:-(?:start|end))?|stretch|row(?:-reverse)?|column(?:-reverse)?)(?=\s*[,;}(]|\s+[\da-z])/,number:h.number,color:/(transparent|#(?:[\da-fA-F]{6}|[\da-fA-F]{3})|rgba?\([\d., ]*\))/,htmlentity:/(&.*?;)/,punctuation:/([:,;{}@#()!]+|&lt;|&gt;)/,attribute:/([a-zA-Z-]+)(?=\s*:)/,unit:/(px|pt|cm|%|r?em|m?s|deg|vh|vw|vmin|vmax)(?=(?:\s*[;,{}})]|\s+[-\da-z#]))/},json:{quote:h.quote,comment:h.comment,number:h.number,boolean:h.boolean,punctuation:/([[\](){}:;,-]+)/},js:{quote:h.quote,comment:h.comment,number:/\b(\d+(?:\.\d+)?|null)\b/,boolean:h.boolean,this:/\b(this)(?=\W)/,keyword:/\b(new|getElementsBy(?:Tag|Class|)Name|getElementById|querySelector|querySelectorAll|arguments|if|else|do|return|case|default|(?:f|F)unction|typeof|instanceof|undefined|document|window|while|for|forEach|switch|in|break|continue|delete|length|var|let|const|export|import|as|require|from|Class|constructor|Number|Boolean|String|Array|Object|RegExp|Integer|Date|Promise|async|await|(?:clear|set)(?:Timeout|Interval)|parse(?:Int|Float)|Math(?=\.)|isNaN)(?=\W)/,punctuation:/(!==?|(?:[[\]!(){}:;,+\-%*/?=]|&lt;|&gt;)+|\.+(?![a-zA-Z])|&amp;&amp;|\|\|)/,variable:/(\.?[a-zA-Z_][\w\d]*)/,htmlentity:/(&.*?;)/,"external-var":/(\$|jQuery|JSON)(?=\W|$)/},php:{quote:h.quote,comment:h.comment,special:/(&lt;\?php|\?&gt;|__(?:DIR|FILE|LINE)__)/,punctuation:h.punctuation,number:h.number,boolean:h.boolean,variable:/(\$[\w\d_]+)/,keyword:/\b(define|echo|die|exit|print_r|var_dump|if|else|elseif|do|return|case|default|function|\$this|while|foreach|for|switch|in|break|continue|empty|isset|unset|parse_ini_file|session_(?:start|destroy|id)|header|json_(?:encode|decode)|error_log|(require|include)(:?_once)?|try|throw|new|Exception|catch|finally|preg_(?:match|replace)|list|strlen|substr|str_replace|array_(?:keys|values))(?=\W|$)/},sql:{quote:h.quote,comment:/((?:\-\-|#)\s.*?(?:\n|$)|\/\*[\s\S]*?\*\/)/,punctuation:h.punctuation,number:/\b(\d+(?:\.\d+)?|null)\b/,boolean:h.boolean,keyword:/\b(\*|CREATE|DATABASE|TABLE|GRANT|ALL|PRIVILEGES|IDENTIFIED|FLUSH|ALTER|MODIFY|DROP|TRUNCATE|CONSTRAINT|ADD|(?:(?:PRIMARY|FOREIGN|UNIQUE) )?KEY|REFERENCES|AUTO_INCREMENT|COMMENT|DEFAULT|UNSIGNED|CHARSET|COLLATE|CHARACTER|ENGINE|SQL_MODE|USE|IF|NOT|NULL|EXISTS|SELECT|UPDATE|DELETE|INSERT(?: INTO)?|VALUES|SET|FROM|WHERE|(?:ORDER|GROUP) BY|LIMIT|(?:(?:LEFT|RIGHT|INNER|OUTER) |)JOIN|AS|ON|COUNT|CASE|TO|WHEN|BETWEEN|AND|OR|IN|LIKE|CONCAT|CURRENT_TIMESTAMP)(?=\W|$)/,"var-type":/\b((?:var)?char|(?:tiny|small|medium|big)?int|decimal|float|double|real|bit|boolean|date(?:time)?|time(?:stamp)?|year|(?:tiny|medium|long)?(?:text|blob)|enum)\b/}},g={xml:/(\s*)([a-zA-Z\d\-:]+)=("|')([\s\S]*?)\3/g,html:/(\s*)([a-zA-Z-]+)=("|')([\s\S]*?)\3/g,"html-vue":/(\s*)([@:#]?[a-zA-Z\d-]+)(?:(?:=("|')([\s\S]*?)\3)|)/g,pug:/(\s*|,)([@:#]?[a-zA-Z\d-]+)(?:(?:=("|')([\s\S]*?)\3)|)/g},f={shell:{quote:2},xml:{quote:2,tag:4},html:{quote:2,tag:4},"html-vue":{quote:2,tag:4},pug:{quote:2,comment:2,text:4,text2:3,tag:6},json:{quote:2},php:{quote:2},sql:{quote:2},css:{quote:2},js:{quote:2}},y=e=>e.map((e=>e.children&&"string"!=typeof e.children?Array.isArray(e.children)?y(e.children):e.children.default?y(e.children.default()):void 0:e.children||"")).join(""),b={name:"sshpre",props:{language:{type:String,default:""},label:{type:[String,Boolean],default:!1},reactive:{type:Boolean,default:!1},dark:{type:Boolean,default:!1},copyButton:{type:Boolean,default:!1}},data:()=>({knownLanguages:Object.keys(m),content:"",slotTexts:""}),methods:{htmlize:e=>e.replace(/&(lt|gt|amp);/g,((e,t)=>({lt:"<",gt:">",amp:"&"}[t]))),unhtmlize:e=>e.replace(/[<>]/g,(e=>({"<":"&lt;",">":"&gt;"}[e]))),isColorDark(e){let t,n,a,s,o,l;if(t=e.match(/rgba?\((.*),\s*(.*),\s*(.*?)(?:,\s*([^)]*))\)/))a=parseInt(t[1])<=100,s=parseInt(t[2])<=100,o=parseInt(t[3])<=100,l=parseFloat(t[4])<.3;else if(n=e.match(/#([\da-f]{3}(?:[\da-f]{3})?)/)){const e=3===n[1].length;a=parseInt(n[1][0])<=9,s=parseInt(n[1][e?1:2])<=9,o=parseInt(n[1][e?2:4])<=9}return(a&&s&&o||a&&s&&!o||!a&&s&&o)&&!l},createRegexPattern(){let e="";const t=[];for(const n in m[this.language]){const a=f[this.language][n]||1;for(let e=0;e<a;e++)t.push(n);e+=(e?"|":"")+m[this.language][n].source}return[e,t]},syntaxHighlightHtmlTag(e){let t=(e[2]||"").replace(g[this.language],((e,t,n,a,s)=>`${t}<span class="attribute">${n}</span>`+(s?'<span class="punctuation">=</span>':"")+(s?`<span class="quote">${a||""}${s||""}${a||""}</span>`:"")));if("pug"===this.language){const n=(e[1]||"").replace(/\.[a-z\d-]+/g,(e=>`<span class="class">${e}</span>`));return t&&(t='<span class="punctuation">(</span>'+t+'<span class="punctuation">)</span>'),`<span class="tag-name">${e[0]||""}</span>${n}${t}`+(e[3]?'<span class="punctuation">.</span>':"")+(e[4]||"")+`${e[5]?e[5]:""}`}return`<span class="punctuation">${e[0]}</span><span class="tag-name">${e[1]}</span>`+t+`<span class="punctuation">${e[3]}</span>`},syntaxHighlightContent(e){if(!this.knownLanguages.includes(this.language))return e;const[t,n]=this.createRegexPattern();return this.unhtmlize(e).replace(new RegExp(t,"g"),((e,...t)=>{let a,s=(t=t.slice(0,t.length-2)).find(((e,t)=>e&&(a=n[t])&&e));if("quote"===a)s=this.unhtmlize(s);else if("comment"===a)s=this.unhtmlize(s);else{if("text"===a&&"pug"===this.language)return`${t[0]}${t[1]}${t[2]}<span class="punctuation">.</span>\n<span class="text">${t[3]}</span>`;if("text2"===a&&"pug"===this.language)return`${t[0]}<span class="punctuation">|</span>${t[1]}<span class="text">${t[2]}</span>`;if("tag"===a&&["xml","html","html-vue","pug"].includes(this.language))return this.syntaxHighlightHtmlTag(t.slice(n.indexOf("tag")));if("variable"===a&&"."===s[0]&&"js"===this.language)return`<span class="punctuation">.</span><span class="obj-attr">${s.substr(1)}</span>`}let o="";return"color"===a&&"css"===this.language&&(o=` style="background-color: ${s};color: #${this.isColorDark(s)?"fff":"000"}"`),a&&`<span class="${a}"${o}>${s}</span>`||""}))},checkSlots(){const e=this.$slots.default&&y(this.$slots.default())||"";this.slotTexts!==e&&(this.slotTexts=e,this.content=this.syntaxHighlightContent(this.slotTexts))},copyCode(e){e.target.insertAdjacentHTML("afterend",`<textarea id="clipboard-textarea">${this.$refs.code.innerText}</textarea>`);const t=document.getElementById("clipboard-textarea");t.select(),t.setSelectionRange(0,99999),document.execCommand("copy"),t.remove(),this.$emit("copied",this.$refs.code.innerText)}},mounted(){this.checkSlots()},beforeUpdate(){this.reactive&&this.checkSlots()}},T=o("Copy"),x=o();b.render=function(o,l,r,i,c,p){return e(),t("div",{class:["ssh-pre",{"ssh-pre--dark":r.dark}],"data-type":r.language,"data-label":r.label||null},[r.copyButton?(e(),t("button",{key:0,class:"ssh-pre__copy",onClick:l[1]||(l[1]=(...e)=>p.copyCode&&p.copyCode(...e))},[n(o.$slots,"copy-button",{},(()=>[T]))])):a("",!0),x,s("pre",{ref:"code",class:"ssh-pre__content",innerHTML:o.content},null,8,["innerHTML"])],10,["data-type","data-label"])};const v={props:{tag:{type:String,default:"p"},type:{type:String,default:"info"},noIcon:{type:Boolean,default:!1}},computed:{icon(){switch(this.type){case"success":return"check";case"error":return"close";case"warning":return"priority_high";case"tips":return"wb_incandescent";case"info":default:return"priority_high"}}},render:function(s,p,u,d,h,m){const g=i("w-icon");return e(),t(r(u.tag),{class:`highlight highlight--${u.type}`},{default:l((()=>[u.noIcon?a("",!0):(e(),t(g,{key:0},{default:l((()=>[o("material-icons "+c(m.icon),1)])),_:1})),n(s.$slots,"default")])),_:3},8,["class"])}},w={class:"documentation"},E=s("div",{class:"mb3 title3 black"},"Github project",-1),_=o("fab fa-github"),L=s("a",{href:"https://github.com/antoniandre/simple-syntax-highlighter",target:"_blank"},"//github.com/antoniandre/simple-syntax-highlighter",-1),S=s("h2",null,[s("a",{href:"#What-is-it"},"What is it?"),s("a",{name:"What-is-it"})],-1),N=s("div",{class:"title4 mt5 mb3 lh3"},[s("strong",null,[o("Simple Syntax Highlighter is is a lightweight yet efficient - and very easy to use - syntax highlighter for Vue JS."),s("br")]),o("It reads the source code you give it and syntax-highlights it, for Humans.")],-1),k=s("p",null,"With its very small size, it is not an editor but a parser.",-1),A={class:"mt8"},O=o("material-icons chevron_right"),I=o("Supports Vue 2 & Vue 3"),R=s("div",null,"All the features of Simple Syntax Highlighter are working as expected in Vue 3.",-1),C={class:"mt8"},U=o("material-icons chevron_right"),$=o("Supported languages"),M=p('<ul class="lh2 ml1"><li>XML</li><li>HTML</li><li>HTML Vue JS Template</li><li>Pug</li><li>Javascript</li><li>JSON</li><li>CSS</li><li>PHP</li><li>MySQL</li><li>No support for nested languages</li></ul><h2><a href="#installation">Installation</a><a name="installation"></a></h2><p>You have two options: <em>NPM</em> <strong class="mx2">or</strong> <span class="code">&lt;script&gt;</span> tag.</p><h3 class="mt8">Via NPM</h3>',4),D=o("npm i simple-syntax-highlighter # Vue 2.x.\n"),q=o("npm i simple-syntax-highlighter@next # Vue 3.\n"),H=s("p",{class:"mt2 grey--text text--darken-1"},[o("Edit a working Vue 3 example on Codepen:"),s("a",{class:"ml2",href:"https://codepen.io/antoniandre/pen/jOqgoKR",target:"_blank"},"//codepen.io/antoniandre/pen/jOqgoKR")],-1),j=s("p",{class:"mt12"},"Then import the component and use it:",-1),P=o("// In your VueJS component.\nimport SshPre from 'simple-syntax-highlighter'\nimport 'simple-syntax-highlighter/dist/sshpre.css'\n...\n\nexport default {\n  components: { SshPre },\n  ...\n}"),z=o("In some cases, like in vue-cli or Vite, you might need to preserve the white spaces in the project\n(if you see all the ssh-pre contents on a single line)."),V=s("br",null,null,-1),F=o("\nHere is how to preserve whitespaces in Vue. Add this in your vue.config.js file:"),B=o("module.exports = {\n  chainWebpack: config => {\n    // Preserve white spaces for ssh-pre component.\n    config.module\n      .rule('vue')\n      .use('vue-loader')\n      .loader('vue-loader')\n      .tap(options => {\n        options.compilerOptions.whitespace = 'preserve'\n        return options\n      })\n  }\n}"),Y=s("p",null,"Or in Vite, add this in your vite.config.js file:",-1),J=o("export default defineConfig({\n  plugins: [\n    createVuePlugin({\n      vueTemplateOptions: {\n        compilerOptions: {\n          whitespace: 'preserve'\n        }\n      }\n    })\n  ]\n}\n"),G=s("h3",{class:"mt8"},[o("Via "),s("span",{class:"code"},"<script>"),o(" tag")],-1),W=s("p",null,[o("Include the Simple Syntax Highlighter script in your document "),s("span",{class:"code"},"<head>"),o(" as follows:")],-1),Z=o('<head>\n  ...\n  <script src="https://unpkg.com/vue"><\/script>\n  <script src="https://unpkg.com/simple-syntax-highlighter"><\/script>\n  <link href="https://unpkg.com/simple-syntax-highlighter/dist/sshpre.css" rel="stylesheet">\n</head>\n'),Q=s("h2",null,[s("a",{href:"#how-to-use"},"How to use"),s("a",{name:"how-to-use"})],-1),K=s("p",null,"Once included in your project, use as follows.\n",-1),X=s("h3",{class:"mt8"},"For any other language than HTML",-1),ee=o('<ssh-pre language="js" label="Javascript">\n  const i = 3;\n  // Some more Javascript content.\n</ssh-pre>'),te={class:"mt8 mx4 text-center arrow-block"},ne=s("div",null,"renders as:",-1),ae=o("material-icons arrow_right_alt"),se=o("const i = 3;\n// Some more Javascript content.\n"),oe=s("h3",{class:"mt8"},"For XML based languages",-1),le=s("strong",null,[o("To use XML/HTML-like languages: you must escape the chevrons: "),s("code",null,"&lt;"),o(" for "),s("code",null,"<"),o(" and "),s("code",null,"&gt;"),o(" for "),s("code",null,">"),o(".")],-1),re=s("br",null,null,-1),ie=o("If you want to display an "),ce=s("code",null,"&",-1),pe=o(" character, you need to escape it with: "),ue=s("code",null,"&amp;amp;",-1),de=o("."),he=o('<ssh-pre language="html" label="HTML Vue Template">\n  &amp;lt;html lang="en"&amp;gt;\n    &amp;lt;head&amp;gt;\n      &amp;lt;title&amp;gt;Title&amp;lt;/title&amp;gt;\n    &amp;lt;/head&amp;gt;\n    &amp;lt;body&amp;gt;\n      Some content.\n    &amp;lt;/body&amp;gt;\n  &amp;lt;/html&amp;gt;\n</ssh-pre>'),me={class:"mx4 text-center arrow-block"},ge=s("div",null,"renders as:",-1),fe=o("material-icons arrow_right_alt"),ye=o('<html lang="en">\n  <head>\n    <title>Title</title>\n  </head>\n  <body>\n    Some content.\n  </body>\n</html>\n'),be=p('<h2><a href="#options">Options</a><a name="options"></a></h2><ul><li><code>label</code><span class="code cyan--text text--darken-3 mx2">{String}</span><span class="code blue--text text--darken-1 mx2">Default: <strong>&#39;&#39;</strong></span><p>A label to show on the top right of the ssh-pre box. If empty no label will show up.</p></li><li><code>language</code><span class="code cyan--text text--darken-3 mx2">{String}</span><span class="code blue--text text--darken-1 mx2">Default: <strong>&#39;&#39;</strong></span><p>One of the supported programming languages to syntax highlight.</p></li><li><code>reactive</code><span class="code cyan--text text--darken-3 mx2">{Boolean}</span><span class="code blue--text text--darken-1 mx2">Default: <strong>false</strong></span><p>Makes this ssh-pre box reactive to variable changes.</p></li><li><code>dark</code><span class="code cyan--text text--darken-3 mx2">{Boolean}</span><span class="code blue--text text--darken-1 mx2">Default: <strong>false</strong></span><p>Switches this ssh-pre box to a dark theme.</p></li><li><code>copy-button</code><span class="code cyan--text text--darken-3 mx2">{Boolean}</span><span class="code blue--text text--darken-1 mx2">Default: <strong>false</strong></span><p>Allow copying this ssh-pre box content to the clipboard.</p></li></ul><h2><a href="#copy-button">Copy button</a><a name="copy-button"></a></h2><p>With the option <span class="code">copy-button</span>, you can add a button that allows copying the\ncontent to the clipboard.</p><p>The button content can be customized through the <span class="code">copy-button</span> slot.</p>',5),Te={class:"w-flex wrap justify-center mxa mt2 responsive-block",style:{"max-width":"650px"}},xe={class:"grow basis-zero my2"},ve=s("div",{class:"text-bold"},"Default",-1),we=o('<body>\n  <div id="app"></div>\n</body>'),Ee=s("div",{class:"spacer mx1 no-grow"},null,-1),_e={class:"grow basis-zero my2"},Le=s("div",{class:"text-bold"},"Custom button content",-1),Se=o("material-icons content_copy"),Ne=o('<body>\n  <div id="app"></div>\n</body>'),ke=s("p",{class:"mt4"},[o("On copy button press, the "),s("span",{class:"code"},"copied"),o(" event is emitted containing the copied text."),s("br"),o("\nHere is how to use the copy-button slot and the copied event.\n")],-1),Ae=o('<ssh-pre language="html-vue" copy-button @copied="onCopiedDoSomething">\n  <template #copy-button>\n    <i class="icon material-icons">material-icons content_copy</i>\n  </template>\n  ...\n</ssh-pre>\n'),Oe=s("h2",null,[s("a",{href:"#examples"},"Examples of rendering with different languages"),s("a",{name:"examples"})],-1),Ie=s("h3",null,[s("a",{href:"#ex--javascript"},"javascript"),s("a",{name:"ex--javascript"})],-1),Re=o("/**\n * This is some\n * multiline comments.\n */\nimport Vue from 'vue'\nimport router from './router'\nimport Vuetify from 'vuetify'\nimport 'vuetify/dist/vuetify.min.css'\nimport '@fortawesome/fontawesome-free/css/all.css'\nimport './styles/index.scss'\n\nVue.use(Vuetify, {\n  iconfont: 'fa',\n  theme: {\n    primary: '#1b4',\n    secondary: '#666',\n    maintext: '#999',\n    lightgrey: '#eee'\n  }\n})\n\nnew Vue({ // eslint-disable-line no-new\n  el: '#app',\n  router,\n  template: "+c("require")+"('./template.pug'),\n  data: () => ({\n    offsetTop: 0,\n    goTopHidden: true\n  }),\n  methods: {\n    onScroll (e) {\n      this.offsetTop = window.pageYOffset || document.documentElement.scrollTop\n\n      this.goTopHidden = this.offsetTop < 200\n    }\n  }\n})\n"),Ce=s("h3",null,[s("a",{href:"#ex--css"},"CSS"),s("a",{name:"ex--css"})],-1),Ue=o('pre.ssh-pre {\n  position: relative;\n  padding: 0.5em;\n  margin: 2.5em 0 2em;\n  border: 1px solid rgba(0, 0, 0, 0.06);\n  background-color: rgba(0, 0, 0, 0.025);\n  border-radius: 4px;\n  display: block;\n  white-space: pre-wrap;\n  word-break: break-word;\n}\n\n.ssh-pre[data-label]:before {\n  content: attr(data-label);\n  position: absolute;\n  bottom: 100%;\n  right: 1em;\n  padding: 0.1em 0.5em;\n  background-color: #f8f8f8;\n  border: 1px solid rgba(0, 0, 0, 0.06);\n  border-bottom: none;\n  border-radius: 3px;\n  margin-bottom: -1px;\n  font-size: 11px;\n}\n\n/* Syntax highlighting */\n.ssh-pre .txt {color: #333;}\n.ssh-pre .comment {font-style: italic;color: #aaa;}\n.ssh-pre .comment * {color: inherit !important;}\n.ssh-pre .quote {color: #c11;}\n.ssh-pre .quote * {color: inherit !important;}\n.ssh-pre .number {color: #c11;}\n.ssh-pre .boolean {color: #c11;}\n.ssh-pre .keyword {color: #33c;font-weight: bold;}\n.ssh-pre .this {color: #c6d;font-weight: bold;}\n.ssh-pre .punctuation {color: #99f;}\n.ssh-pre .dollar,\n.ssh-pre .special {color: #f63;}\n.ssh-pre .variable {color: #29e;}\n.ssh-pre .obj-attr {color: #0bc;}\n\n.ssh-pre[data-type="shell"] .keyword {color: #ff5252;}\n.ssh-pre[data-type="shell"] .param {color: #f63;}\n\n.ssh-pre[data-type="html"] .doctype {color: #02027e;}\n.ssh-pre[data-type="html"] .tag-name {color: #11c;}\n.ssh-pre[data-type="html"] .attribute {color: #f63;}\n\n.ssh-pre[data-type="html-vue"] .doctype {color: #02027e;}\n.ssh-pre[data-type="html-vue"] .tag-name {color: #42b983;}\n.ssh-pre[data-type="html-vue"] .punctuation {color: #128953;}\n.ssh-pre[data-type="html-vue"] .attribute {color: #ff5252;}\n\n.ssh-pre[data-type="xml"] .doctype {color: #02027e;}\n.ssh-pre[data-type="xml"] .tag-name {color: #11c;}\n.ssh-pre[data-type="xml"] .attribute {color: #f93;}\n\n.ssh-pre[data-type="css"] .selector {color: #f0d;}\n.ssh-pre[data-type="css"] .class-id {color: #f0d;}\n.ssh-pre[data-type="css"] .pseudo {color: #f35;}\n.ssh-pre[data-type="css"] .keyword {color: #f5f;}\n.ssh-pre[data-type="css"] .vendor {color: #0c8;}\n.ssh-pre[data-type="css"] .keyword {color: #c06;}\n.ssh-pre[data-type="css"] .attribute {color: #70d;}\n.ssh-pre[data-type="css"] .keyword {color: #e28;}\n.ssh-pre[data-type="css"] .vendor {color: #0c8;}\n.ssh-pre[data-type="css"] .value {color: #c11;}\n.ssh-pre[data-type="css"] .value.vendor {color: #0c8;}\n.ssh-pre[data-type="css"] .color {background: #eee;padding: 0px 3px;border: 1px solid rgba(0,0,0,.1);border-radius: 3px;}\n.ssh-pre[data-type="css"] .unit {color: #0bc;}\n.ssh-pre[data-type="css"] .important {color: #f00;font-weight: bold;}\n\n.ssh-pre[data-type="sql"] .var-type {color: #f63;font-weight: bold;}\n'),$e=s("h3",null,[s("a",{href:"#ex--html"},"HTML"),s("a",{name:"ex--html"})],-1),Me=o('<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <meta http-equiv="X-UA-Compatible" content="ie=edge">\n  <meta http-equiv="Content-language" content="en">\n  <meta name="description" content="Some description.">\n  <meta name="keywords" content="Some keywords.">\n  <title>Title</title>\n  \x3c!-- <link href=\'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons\' rel="stylesheet"> --\x3e\n</head>\n<body>\n  <a name="top"></a>\n  <div id="app"></div>\n</body>\n</html>\n'),De=s("h3",null,[s("a",{href:"#ex--pug"},"Pug"),s("a",{name:"ex--pug"})],-1),qe=s("p",null,[o("Important: to put parenthesis inside quotes, you have to escape them with: "),s("code",null,"&amp;#40;"),o("\nfor "),s("code",null,"("),o(" and "),s("code",null,"&amp;#41;"),o(" for "),s("code",null,")"),o(".")],-1),He=o('//- This is pug.\ndiv.mb3.title3.black Github project\n\nw-flex.mb5(align-center shrink)\n  w-icon.mr4.lightgrey(size="40") fab fa-github\n  a(href="https://github.com/antoniandre/simple-syntax-highlighter" target="_blank")\n    | //github.com/antoniandre/simple-syntax-highlighter\n\nh2\n  a(href="#notes") Notes\n  a(name="notes")\np\n  | This is a lightweight yet efficient and reactive Vue JS syntax highlighter.\n  | '),je=s("br",null,null,-1),Pe=o('It reads the source code you give it and highlights it, for Humans.\nh3 Supported languages\nul\n  li XML\n  li HTML\n  li HTML Vue JS Template\n  li Pug\n  li Javascript\n  li JSON\n  li CSS\n  li PHP\n  li MySQL\n  li No support for nested languages\n\nh2\n  a(href="#installation") Installation\n  a(name="installation")\np You have two options: '),ze=s("em",null,"NPM",-1),Ve=o(),Fe=s("strong",{class:"mx2"},"or",-1),Be=o(),Ye=s("span",{class:"code"},"<script>",-1),Je=o(' tag.\nh3.mt8 Via NPM\nssh-pre(language="shell" label="Shell") npm i simple-syntax-highlighter\n\nh2\n  a(href="#how-to-use") How to use\n  a(name="how-to-use")\np Once included in your project, use as follows.'),Ge=s("h3",null,[s("a",{href:"#ex--json"},"JSON"),s("a",{name:"ex--json"})],-1),We=o('{\n  "name": "",\n  "version": "1.0.0",\n  "description": "",\n  "main": "index.js",\n  "scripts": {\n    "start": ""\n  },\n  "devDependencies": {\n    "vue": "^2.5.16",\n    "vue-loader": "^13.7.2",\n    "vuetify": "^1.1.1"\n  },\n  "repository": {\n  },\n  "dependencies": {},\n  "postcss": {\n    "plugins": {\n      "autoprefixer": {}\n    }\n  },\n  "browserslist": [\n    "last 5 version",\n    "ie 9",\n    "iOS >= 9"\n  ]\n}\n'),Ze=s("h3",null,[s("a",{href:"#ex--php"},"PHP"),s("a",{name:"ex--php"})],-1),Qe=o("<?php\n\nrequire_once __DIR__ . '/../autoload.php';\n$config = parse_ini_file('config.ini');\n\nif (!empty($_POST[\"session\"]))\n{\n    unset($_SESSION);\n    session_id($_POST[\"session\"]);\n}\n\nheader('Content-type: application/json');\n\ntry\n{\n    if (empty($_POST[\"user\"]))\n    {\n        throw new Exception(\"Bad Request:user\", 400);\n    }\n\n    if (empty($_POST[\"session\"]))\n    {\n        throw new Exception(\"Bad Request:session\", 400);\n    }\n\n    if (!$isLoggedIn)\n    {\n        throw new Exception(\"Cannot login.\");\n    }\n\n    echo json_encode(true);\n}\ncatch (Exception $e)\n{\n    if ($e->getCode() === 0)\n    {\n        header($_SERVER['SERVER_PROTOCOL'] . ' 500 Internal Server Error', true, 500);\n    }\n\n    else\n    {\n        header($_SERVER['SERVER_PROTOCOL'] . ' ' . $e->getCode() . ' ' . $e->getMessage(), true, $e->getCode());\n    }\n\n    error_log('There was an error here');\n\n    echo json_encode([\n        'exception' => [\n            'code' => $e->getCode(),\n            'message' => $e->getMessage()\n        ]\n    ]);\n}\nfinally\n{\n    // Something.\n}\n\n?>\n"),Ke=s("h3",null,[s("a",{href:"#ex--sql"},"SQL"),s("a",{name:"ex--sql"})],-1),Xe=o("SET SQL_MODE = \"NO_AUTO_VALUE_ON_ZERO\";\nSET time_zone = \"+00:00\";\n\n\n-- Table: `articles`\n\nCREATE TABLE `articles` (\n  `id` int(10) UNSIGNED NOT NULL,\n  `title` varchar(255) CHARACTER SET utf8 NOT NULL COMMENT 'The article title',\n  `content` longtext COLLATE utf8mb4_unicode_ci NOT NULL,\n  `author` mediumint(9) DEFAULT NULL,\n  `image` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,\n  `category` smallint(6) DEFAULT NULL,\n  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,\n  `updated` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,\n  `status` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'published'\n) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;\n\nINSERT INTO `articles` (`id`, `title`, `content`, `author`, `image`, `category`, `created`, `updated`, `status`) VALUES\n(1, 'Not found (404)', 'Lorem Ipsum.', 1, '', 1, '2019-04-24 22:30:35', NULL, 'published');\n\nALTER TABLE `articles` ADD PRIMARY KEY (`id`);\n\nALTER TABLE `articles`\n  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;\n\n\n-- Table: `users`\n\nCREATE TABLE `users` (\n  `id` int(10) UNSIGNED NOT NULL,\n  `type` enum('admin','user') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'user',\n  `user_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,\n  `first_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,\n  `last_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,\n  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,\n  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,\n  `created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,\n  `updated` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP\n) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;\n\nINSERT INTO `users` (`id`, `type`, `user_name`, `first_name`, `last_name`, `email`, `password`, `created`, `updated`) VALUES\n(1, 'user', 'test', 'first name', 'last name', 'test@test.com', '$2y$10$8TQo5uNyB.bnrVu4TrbxG.2mZxYtghHAswS3Fn/jcxI/WtMQkuewy', '2019-08-11 08:11:28', NULL);\n\nALTER TABLE `users`\n  ADD PRIMARY KEY (`id`),\n  ADD UNIQUE KEY `username` (`user_name`),\n  ADD UNIQUE KEY `email` (`email`);\n\nALTER TABLE `users`\n  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;\n"),et=s("h2",null,[s("a",{href:"#dark-mode"},"Dark mode"),s("a",{name:"dark-mode"})],-1),tt=s("p",null,[o("The "),s("span",{class:"code"},"dark"),o(" option switches the color theme to dark. Here is an example of Javascript code in dark mode.")],-1),nt=o("/**\n * This is some\n * multiline comments.\n */\nimport Vue from 'vue'\nimport router from './router'\nimport Vuetify from 'vuetify'\nimport 'vuetify/dist/vuetify.min.css'\nimport '@fortawesome/fontawesome-free/css/all.css'\nimport './styles/index.scss'\n\nVue.use(Vuetify, {\n  iconfont: 'fa',\n  theme: {\n    primary: '#1b4',\n    secondary: '#666',\n    maintext: '#999',\n    lightgrey: '#eee'\n  }\n})\n\nnew Vue({ // eslint-disable-line no-new\n  el: '#app',\n  router,\n  template: "+c("require")+"('./template.pug'),\n  data: () => ({\n    offsetTop: 0,\n    goTopHidden: true\n  }),\n  methods: {\n    onScroll (e) {\n      this.offsetTop = window.pageYOffset || document.documentElement.scrollTop\n\n      this.goTopHidden = this.offsetTop < 200\n    }\n  }\n})\n"),at=s("h2",null,[s("a",{href:"#custom-theme"},"Custom theme"),s("a",{name:"custom-theme"})],-1),st=s("p",null,"You can easily create your own color theme, as the highlighting is already done,\nyou just need to override the colors of these classes in your css:\n",-1),ot=o('.txt {color: #333;}\n.comment {color: #aaa;}\n.quote {color: #c11;}\n.number {color: #c11;}\n.boolean {color: #c11;}\n.keyword {color: #33c;}\n.this {color: #c6d;}\n.punctuation {color: #99f;}\n.external-var, .special {color: #f63;}\n.variable {color: #29e;}\n.obj-attr {color: #0bc;}\n\n[data-type="shell"] .keyword {color: #ff5252;}\n[data-type="shell"] .param {color: #f63;}\n\n[data-type="html"] .doctype {color: #02027e;}\n[data-type="html"] .tag-name {color: #11c;}\n[data-type="html"] .attribute {color: #f63;}\n\n[data-type="html-vue"] .doctype {color: #02027e;}\n[data-type="html-vue"] .tag-name {color: #42b983;}\n[data-type="html-vue"] .punctuation {color: #128953;}\n[data-type="html-vue"] .attribute {color: #ff5252;}\n\n[data-type="xml"] .doctype {color: #02027e;}\n[data-type="xml"] .tag-name {color: #11c;}\n[data-type="xml"] .attribute {color: #f93;}\n\n[data-type="css"] .selector {color: #f0d;}\n[data-type="css"] .class-id {color: #f0d;}\n[data-type="css"] .pseudo {color: #f35;}\n[data-type="css"] .keyword {color: #f5f;}\n[data-type="css"] .vendor {color: #0c8;}\n[data-type="css"] .keyword {color: #c06;}\n[data-type="css"] .attribute {color: #70d;}\n[data-type="css"] .keyword {color: #e28;}\n[data-type="css"] .vendor {color: #0c8;}\n[data-type="css"] .value {color: #c11;}\n[data-type="css"] .vendor {color: #0c8;}\n[data-type="css"] .color {background: #eee;}\n[data-type="css"] .unit {color: #0bc;}\n[data-type="css"] .important {color: #f00;}\n\n[data-type="sql"] .var-type {color: #f63;font-weight: bold;}');const lt={components:{sshPre:b,Highlight:v},render:function(n,a,o,r,c,p){const u=i("w-icon"),d=i("w-flex"),h=i("ssh-pre"),m=i("highlight");return e(),t("div",w,[E,s(d,{class:"mb5","align-center":"",shrink:""},{default:l((()=>[s(u,{class:"mr4 lightgrey",size:"40"},{default:l((()=>[_])),_:1}),L])),_:1}),S,N,k,s("h3",A,[s(u,{class:"ml-1"},{default:l((()=>[O])),_:1}),I]),R,s("h3",C,[s(u,{class:"ml-1"},{default:l((()=>[U])),_:1}),$]),M,s(h,{language:"shell"},{default:l((()=>[D])),_:1}),s(h,{language:"shell"},{default:l((()=>[q])),_:1}),H,j,s(h,{language:"js",label:"Javascript"},{default:l((()=>[P])),_:1}),s(m,{class:"mt4"},{default:l((()=>[z,V,F,s(h,{class:"my1",language:"js"},{default:l((()=>[B])),_:1}),Y,s(h,{class:"my1",language:"js"},{default:l((()=>[J])),_:1})])),_:1}),G,W,s(h,{language:"html",label:"HTML"},{default:l((()=>[Z])),_:1}),Q,K,X,s(d,{class:"responsive-block",wrap:"","align-center":"","justify-center":""},{default:l((()=>[s(h,{class:"grow basis-zero",language:"html-vue",label:"HTML Vue Template"},{default:l((()=>[ee])),_:1}),s("div",te,[ne,s(u,{xl:""},{default:l((()=>[ae])),_:1})]),s(h,{class:"grow basis-zero",language:"js",label:"Javascript"},{default:l((()=>[se])),_:1})])),_:1}),oe,s(m,{type:"warning"},{default:l((()=>[le,re,ie,ce,pe,ue,de])),_:1}),s(d,{class:"responsive-block",wrap:"","align-center":"","justify-center":""},{default:l((()=>[s(h,{class:"grow basis-zero",language:"html-vue",label:"HTML"},{default:l((()=>[he])),_:1}),s("div",me,[ge,s(u,{xl:""},{default:l((()=>[fe])),_:1})]),s(h,{class:"grow basis-zero",language:"html-vue",label:"HTML Vue Template"},{default:l((()=>[ye])),_:1})])),_:1}),be,s("div",Te,[s("div",xe,[ve,s(h,{language:"html","copy-button":""},{default:l((()=>[we])),_:1})]),Ee,s("div",_e,[Le,s(h,{language:"html","copy-button":""},{"copy-button":l((()=>[s(u,{small:"",color:"primary"},{default:l((()=>[Se])),_:1})])),default:l((()=>[Ne])),_:1})])]),ke,s(h,{language:"html-vue"},{default:l((()=>[Ae])),_:1}),Oe,Ie,s(h,{language:"js",label:"Javascript"},{default:l((()=>[Re])),_:1}),Ce,s(h,{language:"css",label:"styles.css"},{default:l((()=>[Ue])),_:1}),$e,s(h,{language:"xml",label:"index.html"},{default:l((()=>[Me])),_:1}),De,qe,s(h,{language:"pug",label:"index.pug"},{default:l((()=>[He,je,Pe,ze,Ve,Fe,Be,Ye,Je])),_:1}),Ge,s(h,{language:"json",label:"package.json"},{default:l((()=>[We])),_:1}),Ze,s(h,{language:"php",label:"index.php"},{default:l((()=>[Qe])),_:1}),Ke,s(h,{language:"sql",label:"SQL"},{default:l((()=>[Xe])),_:1}),et,tt,s(h,{language:"js",label:"Javascript",dark:""},{default:l((()=>[nt])),_:1}),at,st,s(h,{language:"css",label:"CSS"},{default:l((()=>[ot])),_:1})])}},rt={class:"container"},it={class:"primary top-bar__title"},ct={class:"top-bar__logo-link",href:"#top"},pt=o("fa fa-terminal"),ut=s("span",{class:"code mr3 lightgrey top-bar__ssh"},"SSH",-1),dt=s("div",{class:"top-bar__logo-title"},"Simple Syntax Highlighter",-1),ht={class:"copyright mr2"},mt=s("div",{class:"spacer"},null,-1),gt={class:"made-with"},ft={class:"mb1"},yt=o("This documentation is made with "),bt=o("fab fa-vuejs"),Tt=o(", "),xt=o("fab fa-html5"),vt=o(",\n"),wt=o("fab fa-css3"),Et=o(", "),_t=o("fab fa-sass"),Lt=o(" & "),St=o("material-icons favorite"),Nt=o("View project on "),kt={href:"https://github.com/antoniandre/simple-syntax-highlighter",target:"_blank"},At=o("fab fa-github"),Ot=o(" Github"),It=o(".");const Rt={name:"app",components:{documentation:lt},data:()=>({offsetTop:0,goTopHidden:!0}),methods:{onScroll(){this.offsetTop=window.pageYOffset||document.documentElement.scrollTop,this.goTopHidden=this.offsetTop<200}},render:function(n,a,o,r,p,u){const d=i("w-icon"),h=i("w-toolbar"),m=i("documentation"),g=i("w-flex"),f=i("w-app");return e(),t(f,null,{default:l((()=>[s("div",rt,[s(h,{class:["top-bar",{"top-bar--scrolled":n.offsetTop>104}]},{default:l((()=>[s("h1",it,[s("a",ct,[s(d,{class:"top-bar__logo mr1",color:"lightgrey",lg:""},{default:l((()=>[pt])),_:1}),ut,dt])])])),_:1},8,["class"]),s(m)]),s("footer",null,[s(g,{class:"container mxa grey-dark1",wrap:"","justify-center":""},{default:l((()=>[s("div",ht,"Copyright © "+c((new Date).getFullYear())+" Antoni André, all rights reserved.",1),mt,s("div",gt,[s("div",ft,[yt,s(d,null,{default:l((()=>[bt])),_:1}),Tt,s(d,null,{default:l((()=>[xt])),_:1}),vt,s(d,null,{default:l((()=>[wt])),_:1}),Et,s(d,null,{default:l((()=>[_t])),_:1}),Lt,s(d,{class:"heart"},{default:l((()=>[St])),_:1})]),Nt,s("a",kt,[s(d,{class:"ml1"},{default:l((()=>[At])),_:1}),Ot]),It])])),_:1})])])),_:1})}},Ct=u(Rt);new d(Ct,{icons:["md","fa"],iconsLigature:"material-icons",colors:{primary:"#1b4",secondary:"#666",maintext:"#999",lightgrey:"#eee"}}),Ct.mount("#app");