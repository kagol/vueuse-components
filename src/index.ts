import type { App } from 'vue'
import usePage from './use-page'

export {
  usePage,
}

export default {
  install(app: App) {
    app.config.globalProperties.useComponents = {
      usePage,
    }
  }
}
