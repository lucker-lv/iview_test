<template>
    <div>
        <!-- <Button @click="handleSelectAll(true)">Set all selected</Button>
              <Button @click="handleSelectAll(false)">Cancel all selected</Button> -->
        <Table stripe
            ref="selection"
            height="200"
            :style="{marginBottom: '10px'}"
            highlight-row
            :loading="loading"
            :columns="columns1"
            :data="data1"></Table>
        Change Loading Status
        <i-switch v-model="loading"></i-switch>
    </div>
</template>

<script>
export default {
  name: 'PageHome',
  data () {
    return {
      columns1: [
        {
          type: 'selection',
          width: 60,
          align: 'center'
          // fixed: 'left'
        },
        {
          title: 'Name',
          key: 'name',
          width: 100
        },
        {
          title: 'Age',
          key: 'age',
          width: 120,
          sortable: true,
          filters: [
            {
              label: '大于25',
              value: 1
            },
            {
              label: '小于25',
              value: 2
            }
          ],
          filterMultiple: false,
          filterMethod (value, row) {
            if (value === 1) {
              return row.age > 25
            } else if (value === 2) {
              return row.age < 25
            }
          }
        },
        {
          title: 'Address',
          key: 'address',
          Width: 300
        },
        {
          title: 'Action',
          key: 'action',
          // fixed: 'right',
          width: 140,
          render: (h, params) => {
            return h('div', [
              h(
                'Button',
                {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.show(params.index)
                    }
                  }
                },
                'View'
              ),
              h(
                'Button',
                {
                  props: {
                    type: 'error',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      this.remove(params.index)
                    }
                  }
                },
                'Delete'
              )
            ])
          }
        }
      ],
      data1: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        }
      ],
      loading: true,
      handleSelectAll (status) {
        this.$refs.selection.selectAll(status)
      },
      show (index) {
        this.$Modal.info({
          title: 'User Info',
          content: `Name：${this.data1[index].name}<br>Age：${
            this.data1[index].age
          }<br>Address：${this.data1[index].address}`
        })
      },
      remove (index) {
        this.data1.splice(index, 1)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
