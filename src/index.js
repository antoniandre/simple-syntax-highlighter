import simpleSyntaxHighlighter from './components/simpleSyntaxHighlighter.vue'

// Expose component to global scope.
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('simple-syntax-highlighter', simpleSyntaxHighlighter)
}

export { simpleSyntaxHighlighter }
