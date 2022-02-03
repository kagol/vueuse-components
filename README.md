# Vueuse Components

用于 Vue3 组件库的 vueuse。

## 快速开始

Step 1: 安装`vueuse-components`：

```
yarn add vueuse-components
```

Step 2: 单独引入`usePage`，在`App.vue`中编写以下代码：

```
import { usePage } from 'vueuse-components'
```

Step 3: 使用`usePage`，在`App.vue`中编写以下代码：

```vue
<script setup lang="ts">
import { usePage } from 'vueuse-components'

// 新增
const { pageIndex, prevPage, nextPage } = usePage(1)
</script>

<template>
  <div>
    <button @click="prevPage">上一页</button>
    {{ pageIndex }}
    <button @click="nextPage">下一页</button>
  </div>
</template>
```

除了局部使用`Composable`，还可以全局注册`vueuse-components`插件。

引入`vueuse-components`插件，在`main.ts`中编写以下代码：
```
import useComponents from 'vueuse-components'

app.use(useComponents).mount('#app')
```

在`App.vue`中编写以下代码：

```vue
<script setup lang="ts">
import { getCurrentInstance } from 'vue'

const { usePage } = getCurrentInstance().appContext.config.globalProperties.useComponents
const { pageIndex, prevPage, nextPage } = usePage(1)
</script>

<template>
  <div>
    <button @click="prevPage">上一页</button>
    {{ pageIndex }}
    <button @click="nextPage">下一页</button>
  </div>
</template>
```
