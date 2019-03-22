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
