<template>
  <el-container style='height: 100%'>
    <el-header>
      <el-button type="primary"
        icon="el-icon-search"
        @click="isCollapse = !isCollapse">toggle</el-button>
    </el-header>
    <el-container>
      <!-- <el-aside width='200px'> -->
      <el-menu default-active="2"
        router="router"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3"
          disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
      <!-- </el-aside> -->
      <el-container>
        <el-main>
          <el-table :data="tableData"
            border
            stripe
            height='300px'
            style="width: 100%">
            <el-table-column fixed
              prop="date"
              label="日期"
              width="150">
            </el-table-column>
            <el-table-column prop="name"
              label="姓名"
              width="120">
            </el-table-column>
            <el-table-column prop="province"
              label="省份"
              width="120">
            </el-table-column>
            <el-table-column prop="city"
              label="市区"
              width="120">
            </el-table-column>
            <el-table-column prop="address"
              label="地址"
              width="300">
            </el-table-column>
            <el-table-column prop="zip"
              label="邮编"
              width="120">
            </el-table-column>
            <el-table-column fixed="right"
              label="操作"
              width="100">
              <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)"
                  type="text"
                  size="small">查看</el-button>
                <el-button type="text"
                  size="small">编辑</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'LayoutUI',
  data () {
    return {
      isCollapse: false,
      router: true,
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ]
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  },
  components: {}
}
</script>

<style lang='stylus'>
.el-header, .el-footer
  background-color #B3C0D1
  color #333
  line-height 60px

.el-aside
  background-color #fff
  color #333

.el-menu-vertical-demo:not(.el-menu--collapse)
  width 200px
  min-height 400px

.el-main
  background-color #E9EEF3
  color #333

body > .el-container
  margin-bottom 40px
</style>
