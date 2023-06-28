<script setup lang="ts">
import type { MenuClickEventHandler } from 'ant-design-vue/es/menu/src/interface';
import { LayoutSider, Menu, SubMenu, MenuItem } from 'ant-design-vue';
import { Icon } from '@iconify/vue';
import { menuClosed, setMenuClosed } from '@/store/app';
import { useRouter } from 'vue-router';


const router = useRouter()
const go: MenuClickEventHandler = ({ key }) => {
  router.push({ path: key as string })
}

const items = [
  {
    icon: 'heroicons:home',
    title: '首页',
    href: '/'
  },
  {
    icon: 'heroicons:pencil-square',
    title: '创作',
    children: [
      {
        title: '撰写文章',
        href: '/write-article'
      }, {
        title: '新建页面',
        href: '/write-page'
      }]
  },
  {
    icon: 'heroicons:window',
    title: '管理',
    children: [{
      title: '文章',
      href: '/manage-articles'
    }, {
      title: '页面',
      href: '/manage-pages'
    }, {
      title: '友链',
      href: '/manage-links'
    }, {
      title: '标签',
      href: '/manage-tags'
    }, {
      title: '评论',
      href: '/manage-comments'
    }, {
      title: '用户',
      href: '/manage-users'
    },]
  },
  {
    icon: 'heroicons:calendar',
    title: '分类',
    children: [
      {
        title: '文章分类',
        href: '/manage-article-sorts'
      }, {
        title: '友链分组',
        href: '/manage-link-sorts'
      }
    ]
  },
  {
    icon: 'heroicons:heart',
    title: '个人资料',
    href: '/profile'
  },
  {
    icon: 'heroicons:cog-8-tooth',
    title: '系统配置',
    href: '/settings'
  },
  {
    icon: 'heroicons:cube',
    title: '文件系统',
    href: '/file-system'
  }
]

</script>

<template>
  <LayoutSider breakpoint="lg" @breakpoint="setMenuClosed" :collapsed="menuClosed" collapsible :trigger="null">

    <!-- bg-[#001529] -->
    <!-- <div class="  "> -->
    <RouterLink to="/" class="block text-center w-100% h-64px line-height-64px text-white">
      <img :class="menuClosed ? 'h-32px' : 'h-48px'" :src="`/logo/${menuClosed ? 'logo_160x160' : 'logo'}.png`" alt="">
    </RouterLink>
    <div class="mdi-left"></div>
    <Menu mode="inline" theme="dark" :collapsed="menuClosed" @click="go">
      <template v-for="i in items">
        <!-- <li class="line-height-20px ml-2 text-3" >{{ i.title }}</li> -->

        <!-- <template v-for="j in i.children"> -->
        <SubMenu v-if="i.children" :key="i.title">
          <template #icon>
            <!-- <div :class="i.icon"></div> -->
            <Icon :icon="i.icon" :inline="true" height="20" />
          </template>
          <template #title>{{ i.title }}</template>
          <MenuItem v-for="m in i.children" :key="m.href">
          {{ m.title }}</MenuItem>
        </SubMenu>
        <MenuItem v-else="i.children" :key="i.href">
        <template #icon>
          <Icon :icon="i.icon" :inline="true" height="20" />
        </template>
        {{ i.title }}
        </MenuItem>
        <!-- </template> -->
      </template>
    </Menu>
    <!-- </div> -->
  </LayoutSider>
</template>
<style></style>
