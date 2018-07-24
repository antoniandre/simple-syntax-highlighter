import { simpleSyntaxHighlighter } from '../../../../dist/simple-syntax-highlighter'
import { highlight } from '../../components/highlight-message'

import '../../../../dist/simple-syntax-highlighter.min.css'
import './style.scss'
import './examples.scss'

export default {
  components: { sshPre: simpleSyntaxHighlighter, highlight },
  template: require('./template.pug')
}
