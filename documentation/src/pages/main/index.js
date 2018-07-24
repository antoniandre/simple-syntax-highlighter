import { simpleSyntaxHighlighter } from '../../../../dist/simple-syntax-highlighter'
import { highlight } from '../../components/highlight-message'

import './style.scss'
import './examples.scss'

export default {
  components: { sshPre: simpleSyntaxHighlighter, highlight },
  template: require('./template.pug'),
  data: () => ({
  }),
  methods: {
  },
  created () {
  }
}
