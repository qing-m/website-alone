<template>
  <div>
    <div class="header">
      <p class="english slide-bar delay1">
        Hi,宝贝,你看到这里说明我不在
      </p>
      <p class="translation slide-bar delay2">
        人家是去拿蛋糕了 嘤嘤嘤QAQ
      </p>
      <p class="english slide-bar delay3">
        请你站在心型花瓣上面
      </p>
      <p class="translation slide-bar delay4">
        当心脚下，小寿星
      </p>
      <p class="english slide-bar delay5">
        10秒之后我将出现
      </p>
      <p class="translation slide-bar delay6">
        不要忘记点下面的按钮!!
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.slide-bar {
  position: relative;
  color: transparent;
  animation: fill-text-white 2s 1.6s forwards;
  &::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 80%;
    height: 100%;
    background: #FFFFFF;
    transform: scaleX(0);
    transform-origin: left;
    animation: slide-in-out 2s cubic-bezier(0.75, 0, 0, 1) forwards;
  }
}
@keyframes slide-in-out {
  50% {
    transform: scaleX(1);
    transform-origin: left;
  }
  50.1% {
    transform-origin: right;
  }
  100% {
    transform: scaleX(0);
    transform-origin: right;
  }
}
@keyframes fill-text-white {
  to {
    color: white;
  }
}
.english{
  margin-bottom: 10px;
  font-size: 28px;
  font-family: Lato, sans-serif;
  height: 100%;
  text-align: justify;
  &::before {
    background: #FFFFFF;
  }
}
.translation{
  margin-bottom: 10px;
  font-size: 16px;
  font-family: Lato, sans-serif;
  height: 100%;
  &::before {
    background: #FFFFFF;
  }
}
.delay1 {
  width: 600px;
  animation-delay: 2s;
  &::before {
    animation-delay: 1.5s;
  }
}
.delay2 {
  width: 400px;
  animation-delay: 4.5s;
  &::before {
    animation-delay: 4s;
  }
}
.delay3 {
  animation-delay: 6.5s;
  &::before {
    animation-delay: 6s;
  }
}
.delay4 {
  animation-delay: 8.5s;
  &::before {
    animation-delay: 8s;
  }
}
.delay5 {
  animation-delay: 10.5s;
  &::before {
    animation-delay: 10s;
  }
}
.delay6 {
  width: 400px;
  animation-delay: 12.5s;
  &::before {
    animation-delay: 12s;
  }
}
</style>
