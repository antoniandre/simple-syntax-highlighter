<template lang="pug">
.documentation
  div.mb-3.title Github project
  v-layout.mb-5(align-center shrink)
    v-icon.pr-4.lightgrey--text(x-large) fab fa-github
    a(href="https://github.com/antoniandre/simple-syntax-highlighter" target="_blank") //github.com/antoniandre/simple-syntax-highlighter

  h2
    a(href="#notes") Notes
    a(name="notes")
  p.
    This is a lightweight yet efficient and reactive Vue JS syntax highlighter.#[br]
    It reads the source code you give it and highlights it, for Humans.
  h3 Supports Vue 2 &amp; Vue 3
  p
    | All the features of Simple Syntax Highlighter are working as expected in Vue 3.#[br]
    | but if you use Vue CLI, Vue 3 compiler doesn't support whitespace preserving yet.#[br]
    | Check the status of this PR (and add a thumb-up!):
    a.ml-2(href="https://github.com/vuejs/vue-next/pull/1600" target="_blank")
      | feat(compiler-core): whitespace handling strategy
  h3 Supported languages
  ul
    li XML
    li HTML
    li HTML Vue JS Template
    li Pug
    li Javascript
    li JSON
    li CSS
    li PHP
    li MySQL
    li No support for nested languages

  h2
    a(href="#installation") Installation
    a(name="installation")
  p You have two options: #[em NPM] #[strong.mx-2 or] #[span.code &lt;script&gt;] tag.
  h3.mt-8 Via NPM
  ssh-pre(language="shell").
    npm i simple-syntax-highlighter # Vue 2.x.

  ssh-pre(language="shell").
    npm i simple-syntax-highlighter@next # Vue 3.

  p.mt-2 Then import the component and use it:
  ssh-pre(language="js" label="Javascript").
    // In your VueJS component.
    import SshPre from 'simple-syntax-highlighter'
    import 'simple-syntax-highlighter/dist/sshpre.css'
    ...

    export default {
      components: { SshPre },
      ...
    }
  highlight.mt-4
    | In some cases, like in vue-cli, you might need to preserve the white spaces in the project
    | if you see a minified output from Simple Syntax Highlighter.#[br]
    | Here is how to preserve whitespaces, add this in your vue.config.js file:
    ssh-pre.my-1(language="js").
      module.exports = {
        chainWebpack: config =&gt; {
          // Preserve white spaces for ssh-pre component.
          config.module
            .rule('vue')
            .use('vue-loader')
            .loader('vue-loader')
            .tap(options =&gt; {
              options.compilerOptions.whitespace = 'preserve'
              return options
            })
        }
      }

    .mt-4
      | Vue 3 compiler doesn't support whitespace preserving yet.#[br]
      | Check the status of this PR (and add a thumb-up!):
      a.ml-2(href="https://github.com/vuejs/vue-next/pull/1600" target="_blank")
        | feat(compiler-core): whitespace handling strategy

  h3.mt-8 Via #[span.code &lt;script&gt;] tag
  p Include the Simple Syntax Highlighter script in your document #[span.code &lt;head&gt;] as follows:
  ssh-pre(language="html" label="HTML").
    &lt;head&gt;
      ...
      &lt;script src="https://unpkg.com/vue"&gt;&lt;/script&gt;
      &lt;script src="https://unpkg.com/simple-syntax-highlighter"&gt;&lt;/script&gt;
      &lt;link href="https://unpkg.com/simple-syntax-highlighter/dist/sshpre.css" rel="stylesheet"&gt;
    &lt;/head&gt;

  h2
    a(href="#how-to-use") How to use
    a(name="how-to-use")
  p.
    Once included in your project, use as follows.

  h3.mt-8 For any other language than HTML
  v-layout(wrap align-center justify-center)
    ssh-pre.flex(language="html-vue" label="HTML Vue Template").
      &lt;ssh-pre language="js" label="Javascript"&gt;
        const i = 3;
        // Some more Javascript content.
      &lt;/ssh-pre&gt;
    div.mx-4.text-center
      div renders as:
      v-icon arrow_right_alt
    ssh-pre.flex(language="js" label="Javascript").
      const i = 3;
      // Some more Javascript content.

  h3.mt-8 For XML based languages
  highlight(type="warning")
    strong To use XML/HTML-like languages: you must escape the chevrons: #[code &amp;lt;] for #[code &lt;] and #[code &amp;gt;] for #[code &gt;].
    | #[br]If you want to display an #[code &amp;] character, you need to escape it with: #[code &amp;amp;amp;].
  v-layout(wrap align-center justify-center)
    ssh-pre.flex(language="html-vue" label="HTML").
      &lt;ssh-pre language="html" label="HTML Vue Template"&gt;
        &amp;amp;lt;html lang="en"&amp;amp;gt;
          &amp;amp;lt;head&amp;amp;gt;
            &amp;amp;lt;title&amp;amp;gt;Title&amp;amp;lt;/title&amp;amp;gt;
          &amp;amp;lt;/head&amp;amp;gt;
          &amp;amp;lt;body&amp;amp;gt;
            Some content.
          &amp;amp;lt;/body&amp;amp;gt;
        &amp;amp;lt;/html&amp;amp;gt;
      &lt;/ssh-pre&gt;
    div.mx-4.text-center
      div renders as:
      v-icon arrow_right_alt
    ssh-pre.flex(language="html-vue" label="HTML Vue Template").
      &lt;html lang="en"&gt;
        &lt;head&gt;
          &lt;title&gt;Title&lt;/title&gt;
        &lt;/head&gt;
        &lt;body&gt;
          Some content.
        &lt;/body&gt;
      &lt;/html&gt;

  h2
    a(href="#options") Options
    a(name="options")
  ul
    li
      code label
      span.code.cyan--text.text--darken-3.mx-2 {String}
      span.code.blue--text.text--darken-1.mx-2 Default: #[strong '']
      p A label to show on the top right of the ssh-pre box. If empty no label will show up.
    li
      code language
      span.code.cyan--text.text--darken-3.mx-2 {String}
      span.code.blue--text.text--darken-1.mx-2 Default: #[strong '']
      p One of the supported programming languages to syntax highlight.
    li
      code reactive
      span.code.cyan--text.text--darken-3.mx-2 {Boolean}
      span.code.blue--text.text--darken-1.mx-2 Default: #[strong false]
      p Makes this ssh-pre box reactive to variable changes.
    li
      code dark
      span.code.cyan--text.text--darken-3.mx-2 {Boolean}
      span.code.blue--text.text--darken-1.mx-2 Default: #[strong false]
      p Switches this ssh-pre box to a dark theme.
    li
      code copy-button
      span.code.cyan--text.text--darken-3.mx-2 {Boolean}
      span.code.blue--text.text--darken-1.mx-2 Default: #[strong false]
      p Allow copying this ssh-pre box content to the clipboard.

  h2
    a(href="#copy-button") Copy button
    a(name="copy-button")
  p.
    With the option #[span.code copy-button], you can add a button that allows copying the
    content to the clipboard.
  p The button content can be customized through the #[span.code copy-button] slot.

  .layout.wrap.justify-center
    div.flex.mr-4(style="max-width: 300px")
      .subtitle-2 Default
      ssh-pre(language="html" copy-button).
        &lt;body&gt;
          &lt;div id="app"&gt;&lt;/div&gt;
        &lt;/body&gt;
    div.flex(style="max-width: 300px")
      .subtitle-2 Custom button content
      ssh-pre(language="html" copy-button)
        template(#copy-button)
          v-icon(small color="primary") content_copy
        | &lt;body&gt;
        |   &lt;div id="app"&gt;&lt;/div&gt;
        | &lt;/body&gt;

  p.mt-4.
    On copy button press, the #[span.code copied] event is emitted containing the copied text.#[br]
    Here is how to use the copy-button slot and the copied event.

  ssh-pre(language="html-vue").
    &lt;ssh-pre language="html-vue" copy-button @copied="onCopiedDoSomething"&gt;
      &lt;template v-slot:copy-button&gt;
        &lt;i class="icon material-icons"&gt;content_copy&lt;/i&gt;
      &lt;/template&gt;
      ...
    &lt;/ssh-pre&gt;

  h2
    a(href="#examples") Examples of rendering with different languages
    a(name="examples")

  h3
    a(href="#ex--javascript") javascript
    a(name="ex--javascript")
  ssh-pre(language="js" label="Javascript").
    /**
     * This is some
     * multiline comments.
     */
    import Vue from 'vue'
    import router from './router'
    import Vuetify from 'vuetify'
    import 'vuetify/dist/vuetify.min.css'
    import '@fortawesome/fontawesome-free/css/all.css'
    import './styles/index.scss'

    Vue.use(Vuetify, {
      iconfont: 'fa',
      theme: {
        primary: '#1b4',
        secondary: '#666',
        maintext: '#999',
        lightgrey: '#eee'
      }
    })

    new Vue({ // eslint-disable-line no-new
      el: '#app',
      router,
      template: require('./template.pug'),
      data: () => ({
        offsetTop: 0,
        goTopHidden: true
      }),
      methods: {
        onScroll (e) {
          this.offsetTop = window.pageYOffset || document.documentElement.scrollTop

          this.goTopHidden = this.offsetTop &lt; 200
        }
      }
    })

  h3
    a(href="#ex--css") CSS
    a(name="ex--css")
  ssh-pre(language="css" label="styles.css").
    pre.ssh-pre {
      position: relative;
      padding: 0.5em;
      margin: 2.5em 0 2em;
      border: 1px solid rgba(0, 0, 0, 0.06);
      background-color: rgba(0, 0, 0, 0.025);
      border-radius: 4px;
      display: block;
      white-space: pre-wrap;
      word-break: break-word;
    }

    .ssh-pre[data-label]:before {
      content: attr(data-label);
      position: absolute;
      bottom: 100%;
      right: 1em;
      padding: 0.1em 0.5em;
      background-color: #f8f8f8;
      border: 1px solid rgba(0, 0, 0, 0.06);
      border-bottom: none;
      border-radius: 3px;
      margin-bottom: -1px;
      font-size: 11px;
    }

    /* Syntax highlighting */
    .ssh-pre .txt {color: #333;}
    .ssh-pre .comment {font-style: italic;color: #aaa;}
    .ssh-pre .comment * {color: inherit !important;}
    .ssh-pre .quote {color: #c11;}
    .ssh-pre .quote * {color: inherit !important;}
    .ssh-pre .number {color: #c11;}
    .ssh-pre .boolean {color: #c11;}
    .ssh-pre .keyword {color: #33c;font-weight: bold;}
    .ssh-pre .this {color: #c6d;font-weight: bold;}
    .ssh-pre .punctuation {color: #99f;}
    .ssh-pre .dollar,
    .ssh-pre .special {color: #f63;}
    .ssh-pre .variable {color: #29e;}
    .ssh-pre .obj-attr {color: #0bc;}

    .ssh-pre[data-type="shell"] .keyword {color: #ff5252;}
    .ssh-pre[data-type="shell"] .param {color: #f63;}

    .ssh-pre[data-type="html"] .doctype {color: #02027e;}
    .ssh-pre[data-type="html"] .tag-name {color: #11c;}
    .ssh-pre[data-type="html"] .attribute {color: #f63;}

    .ssh-pre[data-type="html-vue"] .doctype {color: #02027e;}
    .ssh-pre[data-type="html-vue"] .tag-name {color: #42b983;}
    .ssh-pre[data-type="html-vue"] .punctuation {color: #128953;}
    .ssh-pre[data-type="html-vue"] .attribute {color: #ff5252;}

    .ssh-pre[data-type="xml"] .doctype {color: #02027e;}
    .ssh-pre[data-type="xml"] .tag-name {color: #11c;}
    .ssh-pre[data-type="xml"] .attribute {color: #f93;}

    .ssh-pre[data-type="css"] .selector {color: #f0d;}
    .ssh-pre[data-type="css"] .class-id {color: #f0d;}
    .ssh-pre[data-type="css"] .pseudo {color: #f35;}
    .ssh-pre[data-type="css"] .keyword {color: #f5f;}
    .ssh-pre[data-type="css"] .vendor {color: #0c8;}
    .ssh-pre[data-type="css"] .keyword {color: #c06;}
    .ssh-pre[data-type="css"] .attribute {color: #70d;}
    .ssh-pre[data-type="css"] .keyword {color: #e28;}
    .ssh-pre[data-type="css"] .vendor {color: #0c8;}
    .ssh-pre[data-type="css"] .value {color: #c11;}
    .ssh-pre[data-type="css"] .value.vendor {color: #0c8;}
    .ssh-pre[data-type="css"] .color {background: #eee;padding: 0px 3px;border: 1px solid rgba(0,0,0,.1);border-radius: 3px;}
    .ssh-pre[data-type="css"] .unit {color: #0bc;}
    .ssh-pre[data-type="css"] .important {color: #f00;font-weight: bold;}

  h3
    a(href="#ex--html") HTML
    a(name="ex--html")
  ssh-pre(language="xml" label="index.html").
    &lt;!DOCTYPE html&gt;
    &lt;html lang="en"&gt;
    &lt;head&gt;
      &lt;meta charset="UTF-8"&gt;
      &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
      &lt;meta http-equiv="X-UA-Compatible" content="ie=edge"&gt;
      &lt;meta http-equiv="Content-language" content="en"&gt;
      &lt;meta name="description" content="Some description."&gt;
      &lt;meta name="keywords" content="Some keywords."&gt;
      &lt;title&gt;Title&lt;/title&gt;
      &lt;!-- &lt;link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' rel="stylesheet"&gt; --&gt;
    &lt;/head&gt;
    &lt;body&gt;
      &lt;a name="top"&gt;&lt;/a&gt;
      &lt;div id="app"&gt;&lt;/div&gt;
    &lt;/body&gt;
    &lt;/html&gt;

  h3
    a(href="#ex--pug") Pug
    a(name="ex--pug")
  p.
    Important: to put parenthesis inside quotes, you have to escape them with: #[code="&amp;#40;"]
    for #[code (] and #[code="&amp;#41;"] for #[code )].
  ssh-pre(language="pug" label="index.pug").
    //- This is pug.
    div.mb-3.title Github project

    v-layout.mb-5(align-center shrink)
      v-icon.pr-4.lightgrey--text(x-large) fab fa-github
      a(href="https://github.com/antoniandre/simple-syntax-highlighter" target="_blank")
        | //github.com/antoniandre/simple-syntax-highlighter

    h2
      a(href="#notes") Notes
      a(name="notes")
    p
      | This is a lightweight yet efficient and reactive Vue JS syntax highlighter.
      | #[br]It reads the source code you give it and highlights it, for Humans.
    h3 Supported languages
    ul
      li XML
      li HTML
      li HTML Vue JS Template
      li Pug
      li Javascript
      li JSON
      li CSS
      li PHP
      li MySQL
      li No support for nested languages

    h2
      a(href="#installation") Installation
      a(name="installation")
    p You have two options: #[em NPM] #[strong.mx-2 or] #[span.code &lt;script&gt;] tag.
    h3.mt-8 Via NPM
    ssh-pre(language="shell" label="Shell") npm i --S simple-syntax-highlighter

    h2
      a(href="#how-to-use") How to use
      a(name="how-to-use")
    p Once included in your project, use as follows.
  h3
    a(href="#ex--json") JSON
    a(name="ex--json")
  ssh-pre(language="json" label="package.json").
    {
      "name": "",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
        "start": ""
      },
      "devDependencies": {
        "vue": "^2.5.16",
        "vue-loader": "^13.7.2",
        "vuetify": "^1.1.1"
      },
      "repository": {
      },
      "dependencies": {},
      "postcss": {
        "plugins": {
          "autoprefixer": {}
        }
      },
      "browserslist": [
        "last 5 version",
        "ie 9",
        "iOS >= 9"
      ]
    }

  h3
    a(href="#ex--php") PHP
    a(name="ex--php")
  ssh-pre(language="php" label="index.php").
    &lt;?php

    require_once __DIR__ . '/../autoload.php';
    $config = parse_ini_file('config.ini');

    if (!empty($_POST["session"]))
    {
        unset($_SESSION);
        session_id($_POST["session"]);
    }

    header('Content-type: application/json');

    try
    {
        if (empty($_POST["user"]))
        {
            throw new Exception("Bad Request:user", 400);
        }

        if (empty($_POST["session"]))
        {
            throw new Exception("Bad Request:session", 400);
        }

        if (!$isLoggedIn)
        {
            throw new Exception("Cannot login.");
        }

        echo json_encode(true);
    }
    catch (Exception $e)
    {
        if ($e->getCode() === 0)
        {
            header($_SERVER['SERVER_PROTOCOL'] . ' 500 Internal Server Error', true, 500);
        }

        else
        {
            header($_SERVER['SERVER_PROTOCOL'] . ' ' . $e->getCode() . ' ' . $e->getMessage(), true, $e->getCode());
        }

        error_log('There was an error here');

        echo json_encode([
            'exception' => [
                'code' => $e->getCode(),
                'message' => $e->getMessage()
            ]
        ]);
    }
    finally
    {
        // Something.
    }

    ?&gt;

  h2
    a(href="#dark-mode") Dark mode
    a(name="dark-mode")
  p The #[span.code dark] option switches the color theme to dark. Here is an example of Javascript code in dark mode.

  ssh-pre(language="js" label="Javascript" dark).
    /**
     * This is some
     * multiline comments.
     */
    import Vue from 'vue'
    import router from './router'
    import Vuetify from 'vuetify'
    import 'vuetify/dist/vuetify.min.css'
    import '@fortawesome/fontawesome-free/css/all.css'
    import './styles/index.scss'

    Vue.use(Vuetify, {
      iconfont: 'fa',
      theme: {
        primary: '#1b4',
        secondary: '#666',
        maintext: '#999',
        lightgrey: '#eee'
      }
    })

    new Vue({ // eslint-disable-line no-new
      el: '#app',
      router,
      template: require('./template.pug'),
      data: () => ({
        offsetTop: 0,
        goTopHidden: true
      }),
      methods: {
        onScroll (e) {
          this.offsetTop = window.pageYOffset || document.documentElement.scrollTop

          this.goTopHidden = this.offsetTop &lt; 200
        }
      }
    })

  h2
    a(href="#custom-theme") Custom theme
    a(name="custom-theme")
  p.
    You can easily create your own color theme, as the highlighting is already done,
    you just need to override the colors of these classes in your css:

  ssh-pre(language="css" label="CSS").
    .txt {color: #333;}
    .comment {color: #aaa;}
    .quote {color: #c11;}
    .number {color: #c11;}
    .boolean {color: #c11;}
    .keyword {color: #33c;}
    .this {color: #c6d;}
    .punctuation {color: #99f;}
    .external-var, .special {color: #f63;}
    .variable {color: #29e;}
    .obj-attr {color: #0bc;}

    [data-type="shell"] .keyword {color: #ff5252;}
    [data-type="shell"] .param {color: #f63;}

    [data-type="html"] .doctype {color: #02027e;}
    [data-type="html"] .tag-name {color: #11c;}
    [data-type="html"] .attribute {color: #f63;}

    [data-type="html-vue"] .doctype {color: #02027e;}
    [data-type="html-vue"] .tag-name {color: #42b983;}
    [data-type="html-vue"] .punctuation {color: #128953;}
    [data-type="html-vue"] .attribute {color: #ff5252;}

    [data-type="xml"] .doctype {color: #02027e;}
    [data-type="xml"] .tag-name {color: #11c;}
    [data-type="xml"] .attribute {color: #f93;}

    [data-type="css"] .selector {color: #f0d;}
    [data-type="css"] .class-id {color: #f0d;}
    [data-type="css"] .pseudo {color: #f35;}
    [data-type="css"] .keyword {color: #f5f;}
    [data-type="css"] .vendor {color: #0c8;}
    [data-type="css"] .keyword {color: #c06;}
    [data-type="css"] .attribute {color: #70d;}
    [data-type="css"] .keyword {color: #e28;}
    [data-type="css"] .vendor {color: #0c8;}
    [data-type="css"] .value {color: #c11;}
    [data-type="css"] .vendor {color: #0c8;}
    [data-type="css"] .color {background: #eee;}
    [data-type="css"] .unit {color: #0bc;}
    [data-type="css"] .important {color: #f00;}
</template>

<script>
import SimpleSyntaxHighlighter from '@/components/simple-syntax-highlighter'
import Highlight from '@/components/highlight-message'

export default {
  components: { sshPre: SimpleSyntaxHighlighter, Highlight }
}
</script>

<style lang="scss">
.layout .ssh-pre {flex-basis: 0;}
.code {
  font-family: monospace, monospace;
}
</style>
