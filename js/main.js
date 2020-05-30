// 在 #app 标签下渲染一个按钮组件
new Vue({
    el: '#app',
    template: `<van-button>按钮</van-button>`,
});

// 调用函数组件，弹出一个 Toast
vant.Toast('提示');

// 通过 CDN 引入时不会自动注册 Lazyload 组件
// 可以通过下面的方式手动注册
Vue.use(vant.Lazyload);