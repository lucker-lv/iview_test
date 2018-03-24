<template>
    <div>
        <Row>
            <Col :md="{span:16, offset:4}" :lg="{span: 12, offset: 6}">
            <Card>
                <p slot="title">个人信息</p>
                <Form ref="formValidate"
                    :model="formValidate"
                    :rules="ruleValidate"
                    :label-width="60">
                    <FormItem label="姓名"
                        prop="name">
                        <Input v-model="formValidate.name"
                            placeholder="姓名"></Input>
                    </FormItem>
                    <FormItem label="邮箱"
                        prop="mail">
                        <Input v-model="formValidate.mail"
                            placeholder="邮箱"></Input>
                    </FormItem>
                    <FormItem label="地址"
                        prop="city">
                        <!-- <al-selector v-model="formValidate.city" /> -->
                        <al-cascader v-model="formValidate.city" />
                    </FormItem>
                    <!-- <FormItem label="Date">
                        <Row>
                            <Col span="11">
                            <FormItem prop="date">
                                <DatePicker type="date"
                                    placeholder="Select date"
                                    v-model="formValidate.date"></DatePicker>
                            </FormItem>
                            </Col>
                            <Col span="2"
                                style="text-align: center">-</Col>
                            <Col span="11">
                            <FormItem prop="time">
                                <TimePicker type="time"
                                    placeholder="Select time"
                                    v-model="formValidate.time"></TimePicker>
                            </FormItem>
                            </Col>
                        </Row>
                    </FormItem> -->
                    <FormItem>
                        <Button type="primary"
                            @click="handleSubmit('formValidate')">确认提交</Button>
                        <Button type="ghost"
                            @click="handleReset('formValidate')"
                            style="margin-left: 8px">重置</Button>
                    </FormItem>
                </Form>
            </Card>
            </Col>
        </Row>
    </div>
</template>

<script>
export default {
  name: 'PagePersonalInfo',
  data () {
    return {
      formValidate: {
        name: '',
        mail: '',
        city: []
      },
      ruleValidate: {
        name: [
          {
            required: true,
            message: '名字不能为空',
            trigger: 'blur'
          },
          {type: 'string', max: 12, message: '名字不能超过12个字符', trigger: 'blur'},
          {type: 'string', min: 2, message: '名字不能少于2个字符', trigger: 'blur'}
        ],
        mail: [
          {
            required: true,
            message: '邮箱不能为空',
            trigger: 'blur'
          },
          { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
        ],
        city: [
          {
            required: true,
            type: 'array',
            message: '请选择城市',
            trigger: 'change'
            // min: 3
          }
        ]
      }
    }
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success('提交成功!')
        } else {
          this.$Message.error('提交失败!')
        }
      })
    },
    handleReset (name) {
      this.$refs[name].resetFields()
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
