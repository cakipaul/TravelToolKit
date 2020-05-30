Vue.use(vant.Lazyload);

new Vue({
    el: '#app',
    methods: {
        onClickLeft() {
            $v.Toast('暂时还没有 menu 哦~');
        },
        onClickRight() {
            this.navToggle("search");
        },
        onSearch() {
            $v.Toast('暂时不支持搜索哦~');
            this.navToggle("nav");
        },
        onSearchCancel() {
            this.navToggle("nav");
        },
        navToggle(name) {
            switch (name) {
                case "none": {
                    this.nav.showSearch = false;
                    this.nav.showNav = false;
                }
                case "nav": {
                    this.nav.showSearch = false;
                    this.nav.showNav = true;
                } break;
                case "search": {
                    this.nav.showSearch = true;
                    this.nav.showNav = false;
                } break;
                default: {
                    this.nav.showSearch = false;
                    this.nav.showNav = true;
                }
            }
        },
        onRefresh() {
            this.content.showFloatButton = false;
            setTimeout(() => {
                $v.Toast('刷新成功（模拟）');
                this.content.loading = false;
                this.content.showFloatButton = true;
            }, 1000);
        },
        popContentDetial(item) {
            let type = item.type ? item.type : '';
            let typeName = '';
            switch (type) {//event consume idea
                case 'event': {
                    typeName = '事件'
                } break;
                case 'consume': {
                    typeName = '消费'
                } break;
                case 'idea': {
                    typeName = '灵感'
                } break;
            }
            $v.Toast("type:" + typeName + "\n尚未完工~");
        }
    },
    data() {
        return {
            nav: {//导航栏
                showNav: true,
                showSearch: false,
                title: 'potato',
                leftText: '',
                rightText: '',
                leftArrow: false,
                leftIcon: 'bars',
                rightIcon: 'search',
                fixed: true,//固定标题头
                searchVal: ''
            },
            content: {//主页面
                loading: true,
                iconColor: '#07c160',
                data: [],
                showFloatButton: true
            }
        };
    },
    mounted() {
        //伪数据
        this.content.data = [
            {
                loading: false,
                title: '参考road map',
                type: 'event',//event consume idea
                icon: 'todo-list',
                content: [
                    { key: 'log', tags: [{ type: 'success', tag: 'plan' }], val: '2 h' },
                ],
                datetime: '2020-05-30 17:12:00'
            },
            {
                loading: false,
                title: '晚餐',
                type: 'consume',//event consume idea
                icon: 'balance-list',
                content: [
                    { key: '面', tags: [{ type: 'primary', tag: '餐饮' }, { type: 'warning', tag: '测试' }], val: '18 元' },
                    { key: '可乐', tags: [{ type: 'primary', tag: '餐饮' }], val: '3 元' }
                ],
                datetime: '2020-05-30 18:30:00'
            },
            {
                loading: false,
                title: '设计potato网页',
                type: 'idea',//event consume idea
                icon: 'smile',
                content: [
                    { key: '闪念', tags: [{ type: 'success', tag: '闪念' }], val: '如此如此，不可言说' },
                    { key: '这段文字太长了这段文字太长了这段文字太长了这段文字太长了', tags: [], val: '这段文字太长了这段文字太长了这段文字太长了这段文字太长了' },
                ],
                datetime: '2020-05-30 22:12:00'
            },
            {
                loading: true,
                title: 'title',
                type: 'event',
                icon: 'gift',
                content: [
                    { key: '闪念', tags: [], val: '' },
                ],
                datetime: ''
            },
            {
                loading: true,
                title: 'title',
                type: 'event',
                icon: 'gift',
                content: [
                    { key: '闪念', val: '' },
                ],
                datetime: ''
            },
            {
                loading: true,
                title: 'title',
                type: 'event',
                icon: 'gift',
                content: [
                    { key: '闪念', val: '' },
                ],
                datetime: ''
            },
        ]
    },
});

