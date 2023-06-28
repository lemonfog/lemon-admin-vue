<script setup lang='ts'>
import { Layout, LayoutContent } from 'ant-design-vue';
import LeftSide from '@/components/LeftSide.vue';
import TopNav from '@/components/TopNav.vue';
import Footer from '@/components/Footer.vue';

</script>

<template>
  <Layout class="min-h-100vh">
    <LeftSide></LeftSide>
    <Layout>
      <TopNav></TopNav>
      <LayoutContent class="p-6 bg-[#fafafe]">
        <router-view v-slot="{ Component }">
          <transition name="fade">
            <component :is="Component" />
          </transition>
        </router-view>
      </LayoutContent>
      <Footer></Footer>
    </Layout>
  </Layout>
</template>

<style lang="css"></style>