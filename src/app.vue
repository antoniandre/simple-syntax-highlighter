<template lang="pug">
v-app(v-scroll="onScroll")
  v-container
    v-app-bar.top-bar(color="white" dense flat fixed align-center :class="{ scrolled: offsetTop > 104 }")
      v-toolbar-title.top-bar__title
        h1.primary--text
          a.top-bar__logo-link(href="#top")
            v-icon(color="lightgrey").top-bar__logo fa-terminal
            span.code.mr-3.lightgrey--text.top-bar__ssh SSH
            div.top-bar__logo-title Simple Syntax Highlighter

    documentation

  v-footer.px-2(color="white")
    v-layout.mx-auto.container.grey--text.text--darken-1(row wrap align-center justify-center)
      v-flex.xs12.sm6.text-center.text-sm-left.copyright.
        Copyright © {{ (new Date()).getFullYear() }} Antoni André, all rights reserved.
      v-flex.xs12.sm6.text-center.text-sm-right.made-with
        .mb-1 This documentation is made with #[v-icon fab fa-vuejs], #[v-icon fab fa-html5], #[v-icon fab fa-css3], #[v-icon fab fa-sass] &amp; #[v-icon.heart favorite]
        | View project on #[a(href="https://github.com/antoniandre/simple-syntax-highlighter" target="_blank") #[v-icon fab fa-github] Github].
</template>

<script>
import Vue from 'vue'
import Index from '@/views'

Vue.directive('scroll', {
  inserted: function (el, binding) {
    const f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', f)
  }
})

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
    }
  }
}
</script>

<style lang="scss">
$primary: #1b4;
$secondary: #666;
$main-text: #888;
$dark-text: #666;
$darker-text: #333;
$light-text: #ccc;
$lighter-text: #ddd;

// GLOBAL
// =================================================
a[name] {
  position: relative;
  top: -4em;
  display: block;
}

ul, ol {
  margin-top: 1em;
  padding-left: 1.3em;
}

body {
  font: 13px Roboto, Tahoma, Geneva, sans-serif;
  color: $main-text;
}

.application.theme--light,
.application .theme--light.v-card, .theme--light .v-card {
  color: inherit;
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
  border-bottom: 1px solid $lighter-text;
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
  color: inherit !important;
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

a {
  text-decoration: none;
}

p b {
  color: $darker-text;
  font-weight: 500;
}

// APPLICATION
// =================================================
#app {
  background-color: #fff !important;
  padding-top: 8em;
}

.application--wrap {
  padding-top: 16em;
  overflow-x: hidden;
}

.documentation {padding-top: 12em;}

// TOOLBAR
// =================================================
.top-bar {
  &.v-app-bar--fixed {
    z-index: 100;
    position: absolute;
    border-bottom: 1px solid transparent !important;
    transition: 0.3s ease-in-out all, 0.1s 0s ease-in-out border-color;
    top: 0;
  }

  .v-toolbar__content {
    padding-left: 0;
    padding-right: 0;
  }

  &__title {
    position: relative;
    overflow: visible;
    margin-left: auto !important;
    margin-right: auto !important;
    width: 35em;
    transition: 0.3s ease-in-out;
    font-size: 1em;
    padding: 0 1em;
    background-color: #000;
  }

  &__logo {
    vertical-align: middle;
    transition: 0.2s 0s ease-in-out;
  }

  &__logo-link {
    display: inline-block;
  }

  &__ssh {
    letter-spacing: -3px;
    font-size: 0.8em;
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

  &.scrolled {
    &.v-app-bar--fixed {
      transition: 0.6s ease-in-out all, 0.3s 0.5s ease-in-out border-color;
      border-bottom-color: $lighter-text !important;
      position: fixed;
    }

    & .top-bar__title {
      background-color: #fff;
      width: 100%;
      transition: 0.6s ease-in-out all, 0.3s 0.3s ease-in-out background-color;
    }

    & .top-bar__logo, & .top-bar__ssh {
      color: $dark-text !important;
    }

    & .top-bar__logo-title {
      font-size: 0.6em;
    }
  }
}

// FOOTER
// =================================================
.v-footer {
  font-size: 0.9em;
  font-style: italic;
  margin: 3em 0 3.5em;

  .v-icon {
    font-size: 1.2em;

    &.heart {transition: 1s ease-out;cursor: pointer;}
    &.heart:hover {animation: pulse 1.8s ease-out infinite;}
  }
}

@keyframes pulse {
  0%, 20%, 30%, 35%, 45%, 100% {transform: scale(1);}
  25%, 40% {transform: scale(1.3);}
}
</style>
