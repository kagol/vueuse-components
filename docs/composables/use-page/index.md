# usePage

:::demo

```vue
<template>
  <div>
    <button @click="prevPage">上一页</button>
    {{ pageIndex }}
    <button @click="nextPage">下一页</button>
  </div>
</template>
<script>
import { getCurrentInstance } from 'vue'

export default {
  setup() {
    const { usePage } = getCurrentInstance().appContext.config.globalProperties.useComponents
    const { pageIndex, prevPage, nextPage } = usePage(1)

    return {
      pageIndex, prevPage, nextPage
    }
  }
}
</script>
```

:::