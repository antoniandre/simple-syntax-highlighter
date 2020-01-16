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
    This syntax highlighter is for Vue JS only.
    #[br]This is a basic syntax highlighter, but new features will come soon along with more languages support.
    #[br]You will be able to provide your own vocabulary and color theme.
  h3 Supported languages
  ul
    li XML
    li HTML
    li HTML Vue JS Template
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
  h3 Via NPM
  ssh-pre(language="shell" label="Shell") npm i --S simple-syntax-highlighter
  p Then import the component and use it:
  ssh-pre(language="js" label="Javascript").
    // In your VueJS component.
    import SshPre from 'simple-syntax-highlighter'
    import 'simple-syntax-highlighter/dist/sshpre.css'
    ...

    export default {
      components: { SshPre },
      data: () => ({
        ...
      }),
      ...
    }

  h3 Via #[span.code &lt;script&gt;] tag
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
    Once included in your project, use as follows.#[br]
    Check the #[a(href="#examples") examples] &amp; #[a(href="#ssh-pre--api") API] sections to know more.

  h3 Any other language than HTML
  ssh-pre(language="html-vue" label="HTML Vue Template").
    &lt;ssh-pre language="js" label="Javascript"&gt;
      // Some Javascript content.
    &lt;/ssh-pre&gt;

  h3 XML based languages
  highlight(type="warning")
    strong To use XML/HTML-like languages, you must escape the chevrons: #[code &amp;lt;] for #[code &lt;] and #[code &amp;gt;] for #[code &gt;]

  ssh-pre(language="html-vue" label="HTML Vue Template").
    &lt;ssh-pre language="html" label="HTML"&gt;
      &amp;amp;lt;html lang="en"&amp;amp;gt;
        &amp;amp;lt;head&amp;amp;gt;
          &amp;amp;lt;title&amp;amp;gt;Title&amp;amp;lt;/title&amp;amp;gt;
        &amp;amp;lt;/head&amp;amp;gt;
        &amp;amp;lt;body&amp;amp;gt;
          Some content.
        &amp;amp;lt;/body&amp;amp;gt;
      &amp;amp;lt;/html&amp;amp;gt;
    &lt;/ssh-pre&gt;

  h2
    a(href="#examples") Examples of rendering with different languages
    a(name="examples")

  h3
    a(href="#ex--javascript") javascript
    a(name="ex--javascript")
  ssh-pre(language="js" label="Javascript").
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

          this.goTopHidden = this.offsetTop < 200
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
    .ssh-pre .comment * {color: #aaa !important;}
    .ssh-pre .quote {color: #c11;}
    .ssh-pre .quote * {color: #c11 !important;}
    .ssh-pre .number {color: #c11;}
    .ssh-pre .boolean {color: #c11;}
    .ssh-pre .keyword {color: #33c;font-weight: bold;}
    .ssh-pre .this {color: #c6d;font-weight: bold;}
    .ssh-pre .punctuation {color: #99f;}
    .ssh-pre .dollar,
    .ssh-pre .special {color: #f63;}
    .ssh-pre .variable {color: #29e;}
    .ssh-pre .objAttr {color: #0bc;}

    .ssh-pre[data-type="shell"] .keyword {color: #ff5252;}
    .ssh-pre[data-type="shell"] .param {color: #f63;}

    .ssh-pre[data-type="html"] .tag-name {color: #11c;}
    .ssh-pre[data-type="html"] .attribute {color: #f63;}

    .ssh-pre[data-type="html-vue"] .tag-name {color: #42b983;}
    .ssh-pre[data-type="html-vue"] .punctuation {color: #128953;}
    .ssh-pre[data-type="html-vue"] .attribute {color: #ff5252;}

    .ssh-pre[data-type="xml"] .tag-name {color: #11c;}
    .ssh-pre[data-type="xml"] .attribute {color: #f93;}

    .ssh-pre[data-type="css"] .selector {color: #f0d;}
    .ssh-pre[data-type="css"] .selector.class-id {color: #f0d;}
    .ssh-pre[data-type="css"] .pseudo {color: #f35;}
    .ssh-pre[data-type="css"] .selector.keyword {color: #f5f;}
    .ssh-pre[data-type="css"] .selector.keyword.vendor {color: #0c8;}
    .ssh-pre[data-type="css"] .keyword {color: #c06;}
    .ssh-pre[data-type="css"] .attribute {color: #70d;}
    .ssh-pre[data-type="css"] .attribute.keyword {color: #e28;}
    .ssh-pre[data-type="css"] .attribute.keyword.vendor {color: #0c8;}
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
</template>

<script>
import SimpleSyntaxHighlighter from '@/components/simple-syntax-highlighter'
import Highlight from '@/components/highlight-message'

export default {
  components: { sshPre: SimpleSyntaxHighlighter, Highlight }
}
</script>

<style lang="scss">
.code {
  font-family: monospace, monospace;
}
</style>
