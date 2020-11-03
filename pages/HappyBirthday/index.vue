<template>
  <div class="happy-birthday">
    <p class="neon cross-bar-glitch" data-slice="20">
      生日快乐
    </p>
  </div>
</template>

<style lang="scss" scoped>
.happy-birthday {
  width: 100%;
  height: 100vh;
  background-color: #333333;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  > p{
    color: #ffffff;
    font-size: 48px;
  }
  .neon {
    color: #cce7f8;
    text-transform: uppercase;
    animation: shining 0.1s alternate infinite;
  }
  @keyframes shining {
    from {
      text-shadow: 0 0 6px rgba(182, 211, 207, 0.9),
        0 0 30px rgba(182, 211, 207, 0.3), 0 0 12px rgba(15, 115, 223, 0.5),
        0 0 21px rgba(15, 115, 223, 0.9), 0 0 34px rgba(15, 115, 223, 0.8),
        0 0 54px rgba(15, 115, 223, 0.9);
    }
    to {
      text-shadow: 0 0 6px rgba(182, 211, 207, 1),
        0 0 30px rgba(182, 211, 207, 0.4), 0 0 12px rgba(15, 115, 223, 0.6),
        0 0 22px rgba(15, 115, 223, 0.8), 0 0 38px rgba(15, 115, 223, 0.9),
        0 0 60px rgba(15, 115, 223, 1);
    }
  }
  .cross-bar-glitch {
    position: relative;
    .bars {
      $bars-dalay: 0.3s, 0.2s, 0.5s, 0.3s, 0.4s;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      .bar {
        width: 100%;
        flex: 1;
        background: currentColor;
        border-radius: 50px;
        animation: 0.6s cubic-bezier(0.4, 0.2, 0.175, 1) forwards; // ease-in-out-quartic
        &:nth-child(odd) {
          transform: translateX(100%);
          animation-name: slide-left;
        }
        &:nth-child(even) {
          transform: translateX(-100%);
          animation-name: slide-right;
        }
        @for $i from 1 through 5 {
          &:nth-child(#{$i}) {
            animation-delay: nth($bars-dalay, $i);
          }
        }
      }
    }
    .glitch {
      opacity: 0;
      animation: reveal forwards 0.3s;
      animation-delay: 0.6s;
      span {
        &:not(:last-child) {
          --ratio: calc(100% / var(--slice-count));
          --top: calc(var(--ratio) * (var(--i) - 1));
          --bottom: calc(var(--ratio) * (var(--slice-count) - var(--i)));
          position: absolute;
          white-space: nowrap;
          clip-path: inset(var(--top) 0 var(--bottom) 0);
          animation-duration: 0.3s;
        }
        &:nth-child(odd) {
          animation-name: slide-from-left;
        }
        &:nth-child(even) {
          animation-name: slide-from-right;
        }
        &:last-child {
          opacity: 0;
          animation: reveal steps(1) forwards;
          animation-delay: 0.6s + 0.6s;
        }
      }
    }
  }
  @keyframes slide-from-left {
    from {
      transform: translateX(-20%);
    }
    to {
      transform: translateX(0);
    }
  }
  @keyframes slide-from-right {
    from {
      transform: translateX(20%);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes reveal {
    to {
      opacity: 1;
    }
  }

  @keyframes slide-left {
    to {
      transform: translateX(-100%);
    }
  }

  @keyframes slide-right {
    to {
      transform: translateX(100%);
    }
  }
}
</style>
