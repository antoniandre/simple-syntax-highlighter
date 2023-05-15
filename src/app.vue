<template lang="pug">
w-app
  //- Scroll directive from Wave UI.
  div(v-scroll="onScroll")
    .container
      w-toolbar.top-bar(:class="{ 'top-bar--scrolled': offsetTop > 104 }")
        h1.primary.top-bar__title
          a.top-bar__logo-link(href="#top")
            w-icon.top-bar__logo.mr1(color="lightgrey" lg) fa fa-terminal
            span.code.mr3.lightgrey.top-bar__ssh SSH
            div.top-bar__logo-title Simple Syntax Highlighter

      documentation
      w-transition-bounce(v-if="!goTopHidden" appear)
        w-button.go-top.mb8.mr2(
          icon="wi-chevron-up"
          fixed
          bottom
          right
          xl
          color="base-color"
          @click="scrollTop")

    footer
      w-flex.container.mxa.grey-dark1(wrap justify-center)
        .copyright.mr2 Copyright © {{ (new Date()).getFullYear() }} Antoni André, all rights reserved.
        .spacer
        .made-with
          .mb1.
            This documentation is made with #[w-icon(title="Vue.js") fab fa-vuejs], #[w-icon(title="Wave UI") wi-wave], #[w-icon(title="HTML 5 & Pug") fab fa-html5],
            #[w-icon(title="CSS 3") fab fa-css3], #[w-icon(title="Sass") fab fa-sass] &amp; #[w-icon.heart(title="Love") material-icons favorite]
          | View project on #[a(href="https://github.com/antoniandre/simple-syntax-highlighter" target="_blank") #[w-icon.ml1 fab fa-github] Github].
</template>

<script>
import Index from '@/views/index.vue'

export default {
  name: 'app',
  components: { documentation: Index },
  data: () => ({
    offsetTop: 0,
    goTopHidden: true
  }),
  methods: {
    onScroll () {
      this.offsetTop = window.pageYOffset || document.documentElement.scrollTop
      this.goTopHidden = this.offsetTop < 200
    },
    async scrollTop () {
      await this.$nextTick()
      document.documentElement.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
}
</script>

<style lang="scss">
$primary: var(--w-primary-color);
$secondary: var(--w-secondary-color);
$main-text: var(--w-main-text);
$dark-text: #666;
$darker-text: #333;
$light-text: #ccc;
$lighter-text: #ddd;

// GLOBAL
// ========================================================
:root[data-theme=light] {
  --w-base-bg-color-rgb: 255, 255, 255; // #fff.
  --w-base-color-rgb: 51, 51, 51; // #333.
  --w-contrast-bg-color-rgb: 0, 0, 0; // #000.
  --w-contrast-color-rgb: 255, 255, 255; // #fff.
  --w-disabled-color-rgb: 204, 204, 204; // #ccc.
}

:root[data-theme=dark] {
  --w-base-bg-color-rgb: 34, 34, 34; // #222.
  --w-base-color-rgb: 255, 255, 255; // #fff.
  --w-contrast-bg-color-rgb: 255, 255, 255; // #fff.
  --w-contrast-color-rgb: 0, 0, 0; // #000.
  --w-disabled-color-rgb: 74, 74, 74; // #4a4a4a.
}

html {
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  scroll-behavior: smooth;
}

body {
  font: 13px/1.4 Roboto, Tahoma, Geneva, sans-serif;
}

.application.theme--light,
.application .theme--light.v-card, .theme--light .v-card {
  color: inherit;
}

.lh0 {line-height: 1;}
.lh1 {line-height: 1.2;}
.lh2 {line-height: 1.4;}
.lh3 {line-height: 1.6;}
.lh4 {line-height: 1.8;}
.lh5 {line-height: 2;}

a {
  color: $primary;
  text-decoration: none;
}

a.anchor {
  position: relative;
  top: -4em;
  display: block;
}

ul, ol {
  margin-top: 1em;
  padding-left: 1.3em;
}

h1, h2, h3, h4 {
  font-weight: normal;
  margin-bottom: 0.5em;
}

h1 {
  font-size: 2.5em;
  margin-bottom: 0;
}

h2 {
  margin-top: 3em;
  font-size: 2em;
  color: $primary;
  padding-bottom: 0.3em;
  border-bottom: 1px solid rgba(var(--w-base-color-rgb), 0.15);
}

h3 {
  font-size: 1.5em;
  margin-top: 4em;
  color: $secondary;
}

h2 + h3,
h2 + a[name] + h3 {
  margin-top: 0;
}

h3 a[href] {
  color: inherit;
}

h3 a[href]:before {
  content: "# ";
  color: $lighter-text;
  font-size: 1.2em;
  transition: 0.3s;
}

h3 a[href]:hover:before {
  color: $light-text;
}

h4 {
  margin-top: 2em;
  font-size: 1.2em;
  color: $dark-text;
}

p b {
  color: $darker-text;
  font-weight: 500;
}

code {
  padding: 0 4px 1px;
  background-color: rgba(128, 99, 99, 0.1);
  border-radius: 3px;
  line-height: 1.2;
  color: #c33;
}

.code {
  font-family: monospace, monospace;
}

// APPLICATION
// ========================================================
.w-app {padding-top: 8em;}

.container {
  overflow-x: hidden;
  padding-top: 16em;
  position: relative;
  width: 100%;
  padding: 12px;
  margin-right: auto;
  margin-left: auto
}

@media (min-width: 960px) {
  .container {max-width: 900px;}
}

@media (min-width: 1264px) {
  .container {max-width: 1185px;}
}

@media (min-width: 1904px) {
  .container {max-width: 1785px;}
}

.documentation {padding-top: 12em;}

// TOOLBAR
// ========================================================
.top-bar {
  z-index: 100;
  position: absolute;
  border-bottom: 1px solid transparent !important;
  transition: 0.1s 0s ease-in-out border-color;
  top: 0;
  left: 0;
  right: 0;

  &__title {
    position: relative;
    overflow: visible;
    margin-left: auto !important;
    margin-right: auto !important;
    width: 35em;
    transition: 0.3s ease-in-out;
    font-size: 1em;
    padding: 5px 1em;
    background-color: #000;
  }

  &__logo {
    vertical-align: middle;
    transition: 0.2s 0s ease-in-out;
  }

  &__logo-link {
    display: flex;
    align-items: center;
  }

  &__ssh {
    letter-spacing: -3px;
    font-size: 2em;
  }

  & .top-bar__logo, & .top-bar__ssh {
    transition: 0.4s ease-in-out;
  }

  &__logo-title {
    display: inline-block;
    vertical-align: middle;
    transition: 0.3s ease-in-out;
    font: 28px monospace, sans-serif;
    letter-spacing: -3px;
    word-spacing: -5px;
  }

  &--scrolled {
    transition: 0.6s ease-in-out all, 0.3s 0.3s ease-in-out border-color;
    border-bottom-color: rgba(var(--w-contrast-bg-color-rgb), 0.1) !important;
    position: fixed;
    padding-top: 4px;
    padding-bottom: 4px;

    & .top-bar__title {
      background-color: rgb(var(--w-base-bg-color-rgb));
      width: 100%;
      padding: 0;
      transition: 0.3s ease-in-out all, 0.25s ease-in-out background-color;
    }

    & .top-bar__logo, & .top-bar__ssh {
      color: $dark-text !important;
      font-size: 1.8em;
    }
    & .top-bar__logo {font-size: 1.3em;}

    & .top-bar__logo-title {
      font-size: 1.4em;
      letter-spacing: -1.5px;
    }
  }
}

.go-top {
  backdrop-filter: blur(6px);
}

// FOOTER
// ========================================================
footer {
  font-size: 0.9em;
  font-style: italic;
  margin: 3em 0 3.5em;

  .w-icon {
    font-size: 1.2em;

    &.heart {transition: 1s ease-out;cursor: pointer;}
    &.heart:hover {animation: pulse 1.8s ease-out infinite;}
  }

  .made-with {text-align: right;}
}

@keyframes pulse {
  0%, 20%, 30%, 35%, 45%, 100% {transform: scale(1);}
  25%, 40% {transform: scale(1.3);}
}

@media screen and (max-width: 580px) {
  .top-bar--scrolled {
    .top-bar__logo, .top-bar__ssh {font-size: 1.5em;}
  }

  footer {
    .container {flex-direction: column;}

    .copyright, .made-with {text-align: center;}
    .made-with {margin-top: 20px;}
    .spacer {display: none;}
  }
}
</style>
