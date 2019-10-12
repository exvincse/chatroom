<template>
  <div>
    <div class="load" v-if="load">
      <div class="lo">
        <i class="fas fa-spinner fa-pulse fa-3x"></i>
        <span>請稍後</span>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      load: false,
    };
  },
  created() {
    this.$bus.$on('loading', (params) => {
      this.load = params;
    });
  },
  beforeDestroy() {
    this.$bus.$off('loading');
  },
};
</script>
<style lang="scss">
  @import "./assets/all";
  .load{
    position: fixed;
    width: 100%;
    height: 100%;
    background: #fff;
    opacity: 0.65;
    z-index: 300;
  }
  .lo{
    display: flex;
    flex-direction: column;
    position: fixed;
    z-index: 9999;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
</style>
