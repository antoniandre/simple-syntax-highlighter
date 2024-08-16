<script setup>
import SshPre from '@/components/simple-syntax-highlighter.vue'
import Highlight from '@/components/highlight-message.vue'
</script>

<template lang="pug">
.documentation
  w-button.mr1.theme-switch(
    fixed
    top
    right
    :icon="`mdi ${$waveui.theme === 'light' ? 'mdi-weather-night' : 'mdi-white-balance-sunny'}`"
    @click="$waveui.switchTheme($waveui.theme === 'light' ? 'dark' : 'light')")

  div.mb3.title3 Github project
  w-flex.mb5(align-center shrink)
    w-icon.mr4.lightgrey(size="40") mdi mdi-github
    a(href="https://github.com/antoniandre/simple-syntax-highlighter" target="_blank") //github.com/antoniandre/simple-syntax-highlighter

  h2
    a(href="#what-is-it") No chi-chi syntax highlighter for Vue.js 3 (and 2).
    a#what-is-it.anchor
  .title4.mt4.lh3
    ul.checklist.lh2
      li #[span.wi-check.w-icon.success] Easy to use
      li #[span.wi-check.w-icon.success] Easy to customize
      li #[span.wi-check.w-icon.success] Very light weight
      li #[span.wi-check.w-icon.success] Support multiple languages
      li #[span.wi-check.w-icon.success] Support both reading and editing
      li #[span.wi-check.w-icon.success] Built-in copy to clipboard button
      li #[span.wi-check.w-icon.success] Built-in light and dark modes

  h3.mt8.ml6.mb2 Supported languages
  ul.checklist.lh2.ml2.mt0
    li #[span.wi-check.w-icon.success] XML
    li #[span.wi-check.w-icon.success] HTML
    li #[span.wi-check.w-icon.success] HTML Vue JS Template
    li #[span.wi-check.w-icon.success] Pug
    li #[span.wi-check.w-icon.success] JavaScript
    li #[span.wi-check.w-icon.success] JSON
    li #[span.wi-check.w-icon.success] CSS
    li #[span.wi-check.w-icon.success] PHP
    li #[span.wi-check.w-icon.success] MySQL
    li #[span.wi-cross.w-icon.error] No support for mixed nested languages


  h2
    a(href="#demo") demo - try it!
    a#demo.anchor
  ssh-pre(
    language="js"
    label="Javascript"
    :dark="$waveui.theme === 'dark'"
    editable).
    /**
     * I can syntax-highlight your JavaScript code.
     * Try to type some code!
     */

    import Vue from 'vue'

    const radius = 25 // Radius in pixels.
    console.log(2 * Math.Pi * radius)

  h2
    a(href="#installation") Installation
    a#installation.anchor
  p You have two options: #[em NPM] #[strong.mx2 or] #[span.code &lt;script&gt;] tag.

  h3.mt8 Via NPM
  .w-flex.align-center.my4.xs-column
    ssh-pre.my0(language="shell" :dark="$waveui.theme === 'dark'") npm i simple-syntax-highlighter # Vue 3
    span.mx6 or
    ssh-pre.my0(language="shell" :dark="$waveui.theme === 'dark'") npm i simple-syntax-highlighter@legacy # Vue 2

  p.grey--text.text--darken-1
    | Edit a Vue 3 example on Codepen:
    a.ml2(href="https://codepen.io/antoniandre/pen/jOqgoKR" target="_blank") //codepen.io/antoniandre/pen/jOqgoKR

  p.mt12 Then import the component and use it:
  ssh-pre(language="js" label="Javascript" :dark="$waveui.theme === 'dark'").
    // In your VueJS component.
    import SshPre from 'simple-syntax-highlighter'
    import 'simple-syntax-highlighter/dist/sshpre.css'
    ...

    export default {
      components: { SshPre },
      ...
    }
  highlight.mt4
    | In some cases, like in vue-cli or Vite, you might need to preserve the white spaces in the project
    | (if you see all the ssh-pre contents on a single line).#[br]
    | Here is how to preserve whitespaces in Vue. Add this in your vue.config.js file:
    ssh-pre.my1(language="js" :dark="$waveui.theme === 'dark'").
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
    p Or in Vite, add this in your vite.config.js file:
    ssh-pre.my1(language="js" :dark="$waveui.theme === 'dark'").
      export default defineConfig({
        plugins: [
          createVuePlugin({
            vueTemplateOptions: {
              compilerOptions: {
                whitespace: 'preserve'
              }
            }
          })
        ]
      }

  h3.mt8 Via #[span.code &lt;script&gt;] tag
  p Include the Simple Syntax Highlighter script in your document #[span.code &lt;head&gt;] as follows:

  w-tabs.my4(:items="2" content-class="pa0")
    template(#item-title.1) Vue 3
    template(#item-content.1)
      ssh-pre.ma0(language="html" :dark="$waveui.theme === 'dark'").
        &lt;head&gt;
          ...
          &lt;script src="https://unpkg.com/vue"&gt;&lt;/script&gt;
          &lt;script src="https://unpkg.com/vue-cal"&gt;&lt;/script&gt;
          &lt;link href="https://unpkg.com/vue-cal/dist/vuecal.css" rel="stylesheet"&gt;
        &lt;/head&gt;

    template(#item-title.2) Vue 2
    template(#item-content.2)
      ssh-pre.ma0(language="html" :dark="$waveui.theme === 'dark'").
        &lt;head&gt;
          ...
          &lt;script src="https://unpkg.com/vue@legacy"&gt;&lt;/script&gt;
          &lt;script src="https://unpkg.com/vue-cal@legacy"&gt;&lt;/script&gt;
          &lt;link href="https://unpkg.com/vue-cal@legacy/dist/vuecal.css" rel="stylesheet"&gt;
        &lt;/head&gt;

  h2
    a(href="#how-to-use") How to use
    a#how-to-use.anchor
  p.
    Once included in your project, use as follows.

  h3.mt8 For any other language than HTML
  w-flex.responsive-block(wrap align-center justify-center)
    ssh-pre.grow.basis-zero(
      language="html-vue"
      label="HTML Vue Template"
      :dark="$waveui.theme === 'dark'").
      &lt;ssh-pre language="js" label="Javascript"&gt;
        const i = 3;
        // Some more Javascript content.
      &lt;/ssh-pre&gt;
    div.mt8.mx4.text-center.arrow-block
      div renders as:
      w-icon(xl) material-icons arrow_right_alt
    ssh-pre.grow.basis-zero(
      language="js"
      label="Javascript"
      :dark="$waveui.theme === 'dark'").
      const i = 3;
      // Some more Javascript content.

  h3.mt8 For XML based languages
  highlight(type="warning")
    strong To use XML/HTML-like languages: you must escape the chevrons: #[code &amp;lt;] for #[code &lt;] and #[code &amp;gt;] for #[code &gt;].
    | #[br]If you want to display an #[code &amp;] character, you need to escape it with: #[code &amp;amp;amp;].
  w-flex.responsive-block(wrap align-center justify-center)
    ssh-pre.grow.basis-zero(
      language="html-vue"
      label="HTML"
      :dark="$waveui.theme === 'dark'").
      &lt;ssh-pre language="html" label="HTML Vue Template"&gt;
        &amp;lt;html lang="en"&amp;gt;
          &amp;lt;head&amp;gt;
            &amp;lt;title&amp;gt;Title&amp;lt;/title&amp;gt;
          &amp;lt;/head&amp;gt;
          &amp;lt;body&amp;gt;
            Some content.
          &amp;lt;/body&amp;gt;
        &amp;lt;/html&amp;gt;
      &lt;/ssh-pre&gt;
    div.mx4.text-center.arrow-block
      div renders as:
      w-icon(xl) material-icons arrow_right_alt
    ssh-pre.grow.basis-zero(
      language="html-vue"
      label="HTML Vue Template"
      :dark="$waveui.theme === 'dark'").
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
    a#options.anchor
  ul
    li
      code copy-button
      span.code.cyan--text.text--darken-3.mx2 {Boolean}
      span.code.blue--text.text--darken-1.mx2 Default: #[strong false]
      p Allow copying this ssh-pre box content to the clipboard.
    li
      code dark
      span.code.cyan--text.text--darken-3.mx2 {Boolean}
      span.code.blue--text.text--darken-1.mx2 Default: #[strong false]
      p Switches this ssh-pre box to a dark theme.
    li
      code editable
      span.code.cyan--text.text--darken-3.mx2 {Boolean}
      span.code.blue--text.text--darken-1.mx2 Default: #[strong false]
      p Make this ssh-pre box editable and syntax-highlight as you type.
    li
      code label
      span.code.cyan--text.text--darken-3.mx2 {String}
      span.code.blue--text.text--darken-1.mx2 Default: #[strong '']
      p A label to show on the top right of the ssh-pre box. If empty no label will show up.
    li
      code language
      span.code.cyan--text.text--darken-3.mx2 {String}
      span.code.blue--text.text--darken-1.mx2 Default: #[strong '']
      p One of the supported programming languages to syntax highlight.
    li
      code reactive (prior v.3.0 &amp; 1.6.0)
      span.code.cyan--text.text--darken-3.mx2 {Boolean}
      span.code.blue--text.text--darken-1.mx2 Default: #[strong false]
      p Makes this ssh-pre box reactive to variable changes (not needed from version 3+ or 1.6+).

  h2
    a(href="#copy-button") Copy button
    a#copy-button.anchor
  p.
    With the option #[span.code copy-button], you can add a button that allows copying the
    content to the clipboard.
  p The button content can be customized through the #[span.code copy-button] slot.

  .w-flex.wrap.justify-center.mxa.mt2.responsive-block(style="max-width: 650px")
    div.grow.basis-zero.my2
      .text-bold Default
      ssh-pre(
        language="html"
        copy-button
        @copied="$waveui.notify('copied to clipboard!', 'success')"
        :dark="$waveui.theme === 'dark'").
        &lt;body&gt;
          &lt;div id="app"&gt;&lt;/div&gt;
        &lt;/body&gt;
    .spacer.mx1.no-grow
    div.grow.basis-zero.my2
      .text-bold Custom button content
      ssh-pre(
        language="html"
        copy-button
        @copied="$waveui.notify('copied to clipboard!', 'success')"
        :dark="$waveui.theme === 'dark'")
        template(#copy-button)
          w-icon(small color="primary") material-icons content_copy
        | &lt;body&gt;
        |   &lt;div id="app"&gt;&lt;/div&gt;
        | &lt;/body&gt;

  p.mt4.
    On copy button press, the #[span.code copied] event is emitted containing the copied text.#[br]
    Here is how to use the copy-button slot and the copied event.

  ssh-pre(language="html-vue" :dark="$waveui.theme === 'dark'").
    &lt;ssh-pre language="html-vue" copy-button @copied="onCopiedDoSomething"&gt;
      &lt;template #copy-button&gt;
        &lt;i class="icon material-icons"&gt;material-icons content_copy&lt;/i&gt;
      &lt;/template&gt;
      ...
    &lt;/ssh-pre&gt;

  h2
    a(href="#examples") Examples of rendering with different languages
    a#examples.anchor

  h3
    a(href="#ex--javascript") javascript
    a#ex--javascript.anchor
  ssh-pre(language="js" label="Javascript" :dark="$waveui.theme === 'dark'").
    /**
     * This is a
     * multiline comment.
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
      template: {{ 'require' }}('./template.pug'),
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
    a#ex--css.anchor
  ssh-pre(language="css" label="styles.css" :dark="$waveui.theme === 'dark'").
    :root {
      --primary-color: green;
    }

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

    .ssh-pre[data-type="sql"] .var-type {color: #f63;font-weight: bold;}

  h3
    a(href="#ex--html") HTML
    a#ex--html.anchor
  ssh-pre(language="xml" label="index.html" :dark="$waveui.theme === 'dark'").
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
    a#ex--pug.anchor
  p.
    Important: to put parenthesis inside quotes, you have to escape them with: #[code="&amp;#40;"]
    for #[code (] and #[code="&amp;#41;"] for #[code )].
  ssh-pre(language="pug" label="index.pug" :dark="$waveui.theme === 'dark'").
    //- This is pug.
    div.mb3.title3.black Github project

    w-flex.mb5(align-center shrink)
      w-icon.mr4.lightgrey(size="40") mdi mdi-github
      a(href="https://github.com/antoniandre/simple-syntax-highlighter" target="_blank")
        | //github.com/antoniandre/simple-syntax-highlighter

    h2
      a(href="#notes") Notes
      a#notes.anchor
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
      a#installation.anchor
    p You have two options: #[em NPM] #[strong.mx2 or] #[span.code &lt;script&gt;] tag.
    h3.mt8 Via NPM
    ssh-pre(language="shell" label="Shell") npm i simple-syntax-highlighter

    h2
      a(href="#how-to-use") How to use
      a#how-to-use.anchor
    p Once included in your project, use as follows.
  h3
    a(href="#ex--json") JSON
    a#ex--json.anchor
  ssh-pre(language="json" label="package.json" :dark="$waveui.theme === 'dark'").
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
    a#ex--php.anchor
  ssh-pre(language="php" label="index.php" :dark="$waveui.theme === 'dark'").
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

  h3
    a(href="#ex--sql") SQL
    a#ex--sql.anchor

  ssh-pre(language="sql" label="SQL" :dark="$waveui.theme === 'dark'").
    SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
    SET time_zone = "+00:00";

    -- Table: `articles`

    CREATE TABLE `articles` (
      `id` int(10) UNSIGNED NOT NULL,
      `title` varchar(255) CHARACTER SET utf8 NOT NULL COMMENT 'The article title',
      `content` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
      `author` mediumint(9) DEFAULT NULL,
      `image` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      `category` smallint(6) DEFAULT NULL,
      `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
      `updated` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      `status` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'published'
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

    INSERT INTO `articles` (`id`, `title`, `content`, `author`, `image`, `category`, `created`, `updated`, `status`) VALUES
    (1, 'Not found (404)', 'Lorem Ipsum.', 1, '', 1, '2019-04-24 22:30:35', NULL, 'published');

    ALTER TABLE `articles` ADD PRIMARY KEY (`id`);

    ALTER TABLE `articles`
      MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

    -- Table: `users`

    CREATE TABLE `users` (
      `id` int(10) UNSIGNED NOT NULL,
      `type` enum('admin','user') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'user',
      `user_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
      `first_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
      `last_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
      `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
      `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
      `created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
      `updated` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

    INSERT INTO `users` (`id`, `type`, `user_name`, `first_name`, `last_name`, `email`, `password`, `created`, `updated`) VALUES
    (1, 'user', 'test', 'first name', 'last name', 'test@test.com', '$2y$10$8TQo5uNyB.bnrVu4TrbxG.2mZxYtghHAswS3Fn/jcxI/WtMQkuewy', '2019-08-11 08:11:28', NULL);

    ALTER TABLE `users`
      ADD PRIMARY KEY (`id`),
      ADD UNIQUE KEY `username` (`user_name`),
      ADD UNIQUE KEY `email` (`email`);

    ALTER TABLE `users`
      MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

  h2
    a(href="#dark-mode") Dark mode
    a#dark-mode.anchor
  p The #[span.code dark] option switches the color theme to dark.
  p.text-bold(v-if="$waveui.theme === 'dark'").
    You are already viewing this page in dark mode, but you could try switching to light mode
    to view the difference.
  p(v-else).
    The #[span.code dark] option switches the color theme to dark. Here is an example of Javascript
    code in dark mode.

  ssh-pre(language="js" label="Javascript" dark).
    /**
     * This is a
     * multiline comment.
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
      template: {{ 'require' }}('./template.pug'),
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
    a#custom-theme.anchor
  p.
    You can easily create your own color theme, as the highlighting is already done,
    you just need to override the colors of these classes in your css:

  ssh-pre(language="css" label="CSS" :dark="$waveui.theme === 'dark'").
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

    [data-type="sql"] .var-type {color: #f63;font-weight: bold;}
</template>

<style lang="scss">
.theme-switch {z-index: 100;}
.checklist {list-style-type: none;}

@media screen and (max-width: 640px) {
  .responsive-block {
    flex-direction: column;

    .ssh-pre {width: 100%;}
    .arrow-block {
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      margin-top: 2em;
    }
    .w-icon {transform: rotate(90deg);}
  }
}
</style>
