<template>
  <div id="app"
    class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal"
          theme="dark"
          active-name="1">
          <div class="layout-logo"></div>
          <!-- <Icon @click.native="collapsedSider"
            :class="rotateIcon"
            :style="{margin: '20px 20px 0',float: 'left'}"
            type="navicon-round"
            size="24"></Icon> -->
          <div class="layout-nav">
            <MenuItem name="1">
            <Icon type="ios-navigate"></Icon>
            Item 1
            </MenuItem>
            <MenuItem name="2">
            <Icon type="ios-keypad"></Icon>
            Item 2
            </MenuItem>
            <MenuItem name="3">
            <Icon type="ios-analytics"></Icon>
            Item 3
            </MenuItem>
            <MenuItem name="4">
            <Icon type="ios-paper"></Icon>
            Item 4
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Layout>
        <Sider ref="leftNav"
          collapsible
          :collapsed-width="0"
          breakpoint="md"
          v-model="isCollapsed"
          :style="{background: '#fff', borderRight:'1px solid #dddee1'}">
          <!-- :open-names="['1']" -->
          <Menu ref="leftMenu"
            theme="light"
            width="auto"
            :class="menuitemClasses"
            :active-name="menuActiveName"
            @on-select="route"
            :style="{height:'100%', overflowY: 'auto'}">
            <MenuItem name="/"> 首页
            </MenuItem>
            <!-- <router-link to="/companyInfo">公司介绍</router-link> -->
            <MenuItem name="/companyInfo">公司介绍</MenuItem>
            <MenuItem name="/companyInfo2">公司介绍2</MenuItem>
            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-keypad"></Icon>
                Item 2
              </template>
              <MenuItem name="/about/1">关于1</MenuItem>
              <MenuItem name="/about/2">关于2</MenuItem>
            </Submenu>
          </Menu>
        </Sider>
        <Layout>
          <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
            <Tabs type="card"
              closable
              class="tabs-menu"
              :value="$route.path"
              @on-tab-remove="handleTabRemove"
              @on-click="route">
              <TabPane v-for="tab in options"
                :key="tab.name"
                :name="tab.name"
                :closable="tab.closable"
                :label="tab.label">
                <!-- {{ tab.name }} -->
              </TabPane>
            </Tabs>

            <Breadcrumb :style="{margin: '24px 0'}">
              <BreadcrumbItem>Home</BreadcrumbItem>
              <BreadcrumbItem>Components</BreadcrumbItem>
              <BreadcrumbItem>Layout</BreadcrumbItem>
            </Breadcrumb>

            <!-- <keep-alive :include="pagesArr"> -->
              <router-view :key="$route.path"/>
            <!-- </keep-alive> -->

            <!-- <keep-alive :include="pagesArr">
              <router-view :key="$route.path" v-if="$route.meta.keepAlive">
              </router-view>
            </keep-alive>
            <router-view :key="$route.path" v-if="!$route.meta.keepAlive">
            </router-view> -->

          </Content>
          <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  data () {
    return {
      value: [20, 40],
      isCollapsed: false
    }
  },
  computed: {
    ...mapGetters({
      options: 'options',
      deleteIndex: 'deleteIndex',
      pagesArr: 'pagesArr'
    }),
    menuitemClasses: function () {
      return ['menu-item', this.isCollapsed ? 'collapsed-menu' : '']
    },
    menuActiveName: function () {
      return this.$route.path
    }
  },
  watch: {
    $route (to) {
      let index = this.options.findIndex((value, index) => value.name === to.path)
      // console.log(this.$store.state)
      if (index === -1) {
        this.$store.dispatch('add_tabs', {
          tab: {
            name: to.path,
            label: to.meta.label
          }
        })
      }
    }
  },
  methods: {
    handleTabRemove (name) {
      this.$store.dispatch('delete_tab', name)
      if (name === this.$route.path) {
        this.$router.push(this.options[this.deleteIndex - 1].name)
      }
    },
    route (name) {
      this.$router.push(name)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='stylus'>
.layout
  border 1px solid #d7dde4
  background #f5f7f9
  position relative
  border-radius 4px
  overflow hidden
  height 100%

.ivu-layout
  height 100%

.layout-logo
  width 100px
  height 30px
  background #5b6270
  border-radius 3px
  float left
  position relative
  top 15px
  left 20px

.layout-nav
  width 420px
  margin 0 auto
  margin-right 20px

.layout-con
  height 100%
  width 100%

.nav-active
  color #2d8cf0 !important

.ivu-menu-light.ivu-menu-vertical .ivu-menu-item a
  color #495060

.menu-item span
  display inline-block
  overflow hidden
  width 69px
  text-overflow ellipsis
  white-space nowrap
  vertical-align bottom
  transition width 0.2s ease 0.2s

.menu-item i
  transform translateX(0px)
  transition font-size 0.2s ease, transform 0.2s ease
  vertical-align middle
  font-size 16px

.collapsed-menu span
  width 0px
  transition width 0.2s ease

.collapsed-menu i
  transform translateX(5px)
  transition font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s
  vertical-align middle
  font-size 22px

.ivu-menu-vertical.ivu-menu-light:after
  display none

.tabs-menu
  /deep/ .ivu-tabs-bar
    margin-bottom 0
    + .ivu-tabs-content
      display none

.ivu-layout-footer
  text-align center
</style>
