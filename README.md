# vue-cms

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 编写newsList界面
1.绘制界面，使用mui中media-list
2.通过axios获取数据
3.渲染真实数据

### 实现 新闻资讯列表 点击跳转到新闻详情
1.把列表中的每一项改为router-link，同时提供唯一的id
2.创建新闻详情的组件界面 NewInfo.vue
3.在路由模块，将新闻详情的 路由地址和组件页面

### 阉割图片模块
由于顶部滑动栏在vue-cli3无法解决，只能阉割此功能

###尝试在手机上进行项目的预览和调试
    1.手机正常运行
    2.保证手机和开发的电脑处于同一个wifi中

###props data vuex 区别
    props更多是父子组件间，parent->child
    data是一个组件内
    vuex可以类比于一个公共管理的仓库
###vuex
    数据都在state上
    获取数据，可以使用this.$store.state.XXX
    如果要修改数据，使用mutations提供的方法，需要通过this.$store.commit(XXXfun,唯一的参数);
    如果需要对数据进行封装，那么我们就需要使用getters
