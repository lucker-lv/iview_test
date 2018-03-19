<template>
    <div>
        <p>我是公司介绍页</p>
        <button @click="click">{{ this.data }}</button>
    </div>
</template>

<script>
export default {
  name: 'PageCompanyInfo',
  data () {
    return {
      data: 0
    }
  },
  methods: {
    click () {
      this.data++
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
