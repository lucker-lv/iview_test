# my-project

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

动态参数组件缓存现状：
    如果存在一个实例，其他相同组件的实例即使关闭标签也会被缓存
    如果不存在任何一个实例，include中不保存这个组件实例，就不会缓存了
