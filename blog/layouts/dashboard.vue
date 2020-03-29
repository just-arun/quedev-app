<template>
  <a-layout id="components-layout-demo-custom-trigger" class="dashboard-layout">
    <a-layout-sider theme="light" :trigger="null" collapsible v-model="collapsed">
      <div class="logo" />
      <a-menu mode="inline" :defaultSelectedKeys="[curentLink]">
        <a-menu-item v-for="(item) in navLinks" :key="item.link">
          <nuxt-link :to="item.link">
            <a-icon v-if="item.icon" :type="item.icon" />
            <a-icon v-if="!item.icon" :component="item.component" />
            <span>{{item.text}}</span>
          </nuxt-link>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="()=> collapsed = !collapsed"
        />
      </a-layout-header>
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      > 
        <nuxt />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import Dashboard from '@/assets/icons/blog.svg'
export default {
  components: {
    Dashboard
  },
  data() {
    return {
      collapsed: true,
      curentLink: "",
      navLinks: [
        {
          text: "Dashboard",
					link: "/dashboard",
					icon: 'dashboard'
        },
        {
          text: "Posts",
          link: "/dashboard/posts",
					component: 'Dashboard'
        },
        {
          text: "profile",
          link: "/dashboard/profile",
					icon: 'user'
        }
      ]
    };
  },
  methods: {
    initFun() {
      this.curentLink = this.$route.path;
    }
  },
  created() {
    this.initFun();
  }
};
</script>
<style lang="scss">
#components-layout-demo-custom-trigger {
  min-height: 100vh;
  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
  }
  .trigger:hover {
    color: #1890ff;
  }
  .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
}
</style>
