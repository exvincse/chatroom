<template>
  <div>
    <header class="bg py-5"></header>
    <main class="bottom-bg d-flex justify-content-center">
      <div class="custom-name p-5 text-center">
        <span>你的名字是⋯⋯？</span>
        <div class="input-group mt-4">
          <input type="text" class="form-control" placeholder="輸入暱稱" style="background-color:#F2F2F2"
            v-model.trim="name">
          <div class="input-group-append">
            <a href="#" @click.prevent="randomname()" class="btn btn-navy-blue">
              <i class="fas fa-dice fa-lg"></i>
            </a>
          </div>
        </div>
        <button @click.prevent="start()"
          class="btn btn-navy-blue mt-4">開始聊天</button>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      namekey: '',
    };
  },
  created() {
    if (this.$cookie.get('name') !== undefined && this.$cookie.get('name') !== 'clear') {
      this.$router.push('/index');
    }
  },
  methods: {
    randomname() {
      this.name = Math.random().toString(36).split('.')[1];
    },
    start() {
      if (this.name === '') return false;
      const name = this.name;
      const namekey = Math.random().toString(36).split('.')[1];
      const obj = {
        name,
        namekey,
      };
      this.$cookie.set('name', obj);
      this.$router.push('/index');
      return true;
    },
  },
};
</script>
<style lang="scss" scope>
  .bg{
    position: relative;
    background: linear-gradient(45deg, rgba(255, 255, 255, 0.28) 9%, #ECC15B 0, #ECC15B 50%, rgba(255, 255, 255, 0.28) 0, rgba(255, 255, 255, 0.28) 57%, #ECC15B 0);
    background-size: 5px 5px;
    height: 233px;
    &::after{
        position: absolute;
        content: '';
        width: 173px;
        height: 150px;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        background: url('../assets/img/logo.png') no-repeat;
    }
}
</style>
