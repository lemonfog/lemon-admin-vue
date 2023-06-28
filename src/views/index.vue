<script setup lang="ts">
import { Row, Col, Card } from 'ant-design-vue';
import CountCard from '@/components/common/CountCard.vue';
import { reactive } from 'vue';
import Link from '@/components/tool/Link.vue'
const counts = reactive({
  article: 20,
  sort: 1,
  comment: 123,
  myComment: 10,
  link: 20,
  linkSort: 2
})

</script>
<!-- xs sm md lg xl -->
<template>
  <Row :gutter="24">
    <Col :span="10" :md="12">
    <Row :gutter="24">
      <Col :span="24" :lg="12">
      <CountCard title="文章" :count="counts.article" icon="heroicons:cog">
        您的文章有<span class="text-green">{{ counts.article }}</span>个标签
      </CountCard>
      </Col>
      <Col :span="24" :lg="12">
      <CountCard title="分类" :count="counts.sort" description="" icon="heroicons:cog">
        您的文章分类
      </CountCard>
      </Col>
    </Row>
    <Row :gutter="24">
      <Col :span="24" :lg="12">
      <CountCard title="评论" :count="counts.comment" icon="heroicons:cog">
        您参与了<span class="text-green">{{ counts.myComment }}</span>条评论
      </CountCard>
      </Col>
      <Col :span="24" :lg="12">
      <CountCard icon="heroicons:cog" title="友链" :count="counts.link">
        您拥有{{ counts.linkSort }}个友链分类
      </CountCard>
      </Col>
    </Row>
    </Col>

    <Col :span="14" :md="12">
    <div class="bg-green h-100%">

      123
    </div>
    </Col>
  </Row>

  <!-- <teleport to="body"> -->
  <!-- <Link tag="script" src="https://cdn.jsdelivr.net/npm/echarts@5.4.2"></Link> -->
  <!-- <script src="https://cdn.jsdelivr.net/npm/echarts@5.4.2"></script> -->
  <!-- <script src="https://cdn.jsdelivr.net/npm/vue-echarts@6.6.0"></script> -->
  <!-- </teleport> -->
</template> 
