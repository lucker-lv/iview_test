<template>
    <div>
        <div>Hello, I am about{{ id }} welcom to here ! :)</div>
        <Input v-model="data.value2"
            placeholder="default size"></Input>
        </Col>
    </div>
</template>

<script>
export default {
  name: 'PageAbout',
  props: ['id'],
  data () {
    return {
      data: {
        value2: ''
      }
    }
  }
  // computed: {
  //   fromTabPath: function () {
  //     return this.$store.getters.fromTabPath
  //   }
  // },
  // activated () {
  //   var beforeData = localStorage.getItem(this.$route.path)
  //   if (beforeData) {
  //     this.data = JSON.parse(beforeData)
  //   }
  // },
  // deactivated () {
  //   var exitTab = this.$store.getters.options.find((element) => {
  //     return element.name === this.fromTabPath
  //   })
  //   if (exitTab) {
  //     localStorage.setItem(this.fromTabPath, JSON.stringify(this.data))
  //   }
  // },
  // beforeRouteUpdate (to, from, next) {
  //   // 在当前路由改变，但是该组件被复用时调用
  //   // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
  //   // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
  //   this.$store.commit('set_from_tab_path', from.path)
  //   next()
  // },
  // beforeRouteLeave (to, from, next) {
  //   this.$store.commit('set_from_tab_path', from.path)
  //   next()
  // }
}
</script>
