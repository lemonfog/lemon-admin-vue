<template>
  <div class="auth-page flex min-h-100vh flex-col items-center  ">
    <div class="flex-1 flex items-center justify-cneter">
      <div class="form-box pb-6 bg-white rounded">
        <div class="text-center color-white py-4 rounded-t bg-[#1677ff]">
          <img class="w-50%" src="/logo/logo.png" alt="" srcset="">
        </div>
        <slot />
      </div>
    </div>
    <footer class="flex flex-col items-center justify-center py-8 gap-2 !text-[#98a6a6] overflow-hidden">
      <span>众里寻他千百度，慕然回首，那人正在灯火阑珊处。</span>
      <span>Copyright © 2023 <a href="github.com/lemonfog">lemonfog</a> | <a href="#">备案号</a></span>
    </footer>
  </div>
</template>
<style scoped>
/** 
edge ie flex col布局   row没有测试不知道
bug 
  父元素没有溢出却出现滚动条 计算出0.125px左右高度溢出
  firefox不会出现这种情况
重现步骤 
  最后一个子元素没有设置flex-grow:1 
  其他子元素至少有一个设置flex-grow:1
  并且子元素都没有设置高度 或者有子元素设置的高度小于实际高度0.125px左右溢出会导致父元素出现滚动条,而子元素没有 
解决办法 
  法1：给任意一个未设置flex-grow:1的子元素设置overflow:hidden 
  法2：给父元素设置overflow:hidden 
原因分析
  给父元素和所有子元素都设置overflow:hidden 会发现即使最后一个元素没有设置“过小”高度它也会出现滚动条 
  也就是说在这种情况下导致最后一个子元素高度计算错误 
  如果不对最后一个子元素overflow处理 它会导致父元素高度计算错误，从而让父元素出现滚动条
  */


.auth-page {
  background: url('@/assets/bg-pattern-light.svg') no-repeat;
  background-size: cover;
  background-position: center;

}

.form-box {
  max-width: 450px;
  min-width: 350px;
  /* box-shadow: 0 0 20px 0 rgb(0, 0, 0, .15); */
}
</style>
 