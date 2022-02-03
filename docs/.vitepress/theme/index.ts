import Theme from 'vitepress/dist/client/theme-default'

import { registerComponents } from './register-components.js'
import 'vitepress-theme-demoblock/theme/styles/index.css'

import useComponents from '../../../src'

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(useComponents)
    registerComponents(app)
  },
};
