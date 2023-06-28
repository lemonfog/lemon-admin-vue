<script setup lang='ts'>
import { LayoutHeader, InputSearch, Row } from 'ant-design-vue';
import { menuClosed, toggleMenuClosed } from '@/store/app'
import { useUserStore } from '@/store';
import { Icon } from '@iconify/vue'
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
const { logout } = useUserStore()
const keywords = ref('')

const router = useRouter()
const onSearch = (value: string) => {
  console.log(value);

}

const onLogout = () => {
  logout()
  router.push({ path: '/login' })
}

</script>

<template>
  <LayoutHeader class="flex items-center justify-between" style="color:aliceblue;padding-inline: 24px;">
    <div class="flex gap-4 ">
      <Icon class="cursor-pointer" height="32" :inline="true" @click="toggleMenuClosed"
        :icon="menuClosed ? 'ant-design:menu-unfold-outlined' : 'ant-design:menu-fold-outlined'"></Icon>
      <div class="search-box flex">
        <InputSearch v-model:value="keywords" placeholder="请输入关键词 " enter-button style="width: 200px"
          @search="onSearch" />
        <!-- 结果列表 -->
      </div>
    </div>
    <div class="flex gap-8 ">
      <div class="theme-settings flex">
        <iconify-icon class="cursor-pointer" width="30" icon="heroicons:cog-8-tooth"></iconify-icon>
      </div>
      <div class="flex gap-3">
        <img class="rounded-50% w-30px h-30px cursor-pointer" src="/user.jpg" alt="">
        <div class="flex flex-col line-height-4">
          <span class="nickname">柠檬</span>
          <span class="email text-2">lemonfog@qq.com</span>
        </div>

        <span class="cursor-pointer line-height-8" @click="onLogout">logout</span>
      </div>

    </div>
    <!-- </Button> -->

  </LayoutHeader>
</template>

<style lang="scss" scoped></style>