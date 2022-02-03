import { ref } from "vue";
function usePage(defaultPageIndex = 1) {
  const pageIndex = ref(defaultPageIndex);
  const setPageIndex = (current) => {
    pageIndex.value = current;
  };
  const jumpPage = (page) => {
    pageIndex.value += page;
  };
  const prevPage = () => jumpPage(-1);
  const nextPage = () => jumpPage(1);
  return { pageIndex, setPageIndex, jumpPage, prevPage, nextPage };
}
var index = {
  install(app) {
    app.config.globalProperties.useComponents = {
      usePage
    };
  }
};
export { index as default, usePage };
