<template>
    <div>
        <div>Hello, I am about{{ id }} welcom to here ! :)</div>
        <Input v-model="value2"
            placeholder="default size"></Input>
        </Col>
    </div>
</template>

<script>
export default {
  name: 'PageAbout',
  props: ['id']
}
</script>
