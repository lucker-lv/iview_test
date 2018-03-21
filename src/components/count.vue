<template>
    <button @click="click">{{ this.data }}</button>
</template>

<script>
export default {
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
