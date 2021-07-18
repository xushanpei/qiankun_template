import "./public-path";
import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import routes from "./router";

Vue.config.productionTip = false;

let router = null;
let instance = null;
function render(props = {}) {
  const { container } = props;
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? `${props.name}` : "/",
    mode: "history",
    routes,
  });
  Vue.use(VueRouter);
  instance = new Vue({
    router,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector("#app") : "#app");
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log("[vue2] vue app bootstraped");
}

function storeTest(props) {
  props.setGlobalState &&
    props.setGlobalState({
      id: `${props.name}_子应用`,
    });
  props.onGlobalStateChange &&
    props.onGlobalStateChange(
      (value, prev) =>
        console.log(`[onGlobalStateChange - ${props.name}]:`, value, prev),
      true
    );
}

export async function mount(props) {
  storeTest(props);
  render(props);
}

export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = "";
  instance = null;
  router = null;
}
