<script setup lang='ts'>

</script>

<template>
  <div class="page404">
    <svg viewBox="0 0 800 600">
      <symbol id="s-text">
        <text text-anchor="middle" x="50%" y="40%" class="text--line">
          404
        </text>
        <text text-anchor="middle" x="50%" y="60%" class="text--line2">
          对不起，页面找不到了！
        </text>
      </symbol>
      <g class="g-ants">
        <use xlink:href="#s-text" class="text-copy"></use>
        <use xlink:href="#s-text" class="text-copy"></use>
        <use xlink:href="#s-text" class="text-copy"></use>
        <use xlink:href="#s-text" class="text-copy"></use>
        <use xlink:href="#s-text" class="text-copy"></use>
      </g>
    </svg>
  </div>
</template>
<style scoped>
#app {
  background-size: .12em 100%;
  font: 16em/1 arial;
}

.page404 {
  height: 100vh;
  background: #05141b;
  font-size: 16em;

}

.text--line {
  font-size: .5em;
}

.text--line2 {
  font-size: .2em;
}

svg {
  position: absolute;
  width: 100%;
  height: 100%;
}

.text-copy {
  fill: none;
  stroke: white;
  stroke-dasharray: 7% 28%;
  stroke-width: 3px;
  /* -webkit-animation: stroke-offset 9s infinite linear; */
  animation: stroke-offset 5s linear, ;
}

.text-copy:nth-child(1) {
  stroke: #360745;
  stroke-dashoffset: 7%;
}

.text-copy:nth-child(2) {
  stroke: #d61c59;
  stroke-dashoffset: 14%;
}

.text-copy:nth-child(3) {
  stroke: #e7d84b;
  stroke-dashoffset: 21%;
}

.text-copy:nth-child(4) {
  stroke: #efeac5;
  stroke-dashoffset: 28%;
}

.text-copy:nth-child(5) {
  stroke: #1b8798;
  stroke-dashoffset: 35%;
}

@keyframes stroke-offset {
  50% {
    stroke-dashoffset: 35%;
    stroke-dasharray: 0 87.5%;
  }

}
</style>