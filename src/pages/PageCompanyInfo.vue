<template>
  <div>
    <p>我是公司介绍页</p>
    <count></count>
    <Row :gutter="20">
      <Col span="8">
      <Input v-model="value1"
        size="large"
        placeholder="large size"></Input>
      </Col>
      <Col span="8">
      <Input v-model="value2"
        placeholder="default size"></Input>
      </Col>
      <Col span="8">
      <Input v-model="value3"
        size="small"
        placeholder="small size"></Input>
      </Col>
    </Row>
  </div>
</template>

<script>
import count from '@/components/count'
export default {
  name: 'PageCompanyInfo',
  data () {
    return {
      value1: '',
      value2: '',
      value3: ''
    }
  },
  components: {
    count
  }
}
</script>

<style lang="stylus" scoped>
</style>
