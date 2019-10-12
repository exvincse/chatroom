<template>
  <div>
    <div class="login-bg">
      <div class="login">
        <div class="pic mb-4">
          <img src="../assets/img/Logo.svg" width="138px" height="74px" alt="" srcset="">
        </div>
        <div class="item p-5">
          <small>You are invited to a chat room</small>
          <h2>Aurora Hunters</h2>
          <div class="avatar" :class="{'bg-bg1':avatar}">
            <a href="#" @click.prevent="avatar=!avatar">
              <img :src="require(`../assets/img/hu${nowavatar}.svg`)" width="64px" height="64px" alt="">
            </a>
            <ul class="avatar-menu" :class="{'menu-show':avatar}">
              <template v-for="item in 5">
                <li :key="item" v-if="item !== nowavatar">
                  <a href="#"
                    @click.prevent="nowavatar = item">
                    <img :src="require(`../assets/img/hu${item}.svg`)" width="64px" height="64px" alt="">
                  </a>
                </li>
              </template>
            </ul>
          </div>
          <span>How to call you?</span>
          <input type="text" class="form-control mb-4 rounded-0" placeholder="Meyer"
            v-model="name" @keyup.enter="start()">
          <input type="button" class="btn btn-primary rounded-0" value="Let’s Chat"
            @click="start()">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      namekey: '',
      avatar:false,
      nowavatar:1,
    };
  },
  created() {
    if (this.$cookie.get('name') !== undefined && this.$cookie.get('name') !== 'clear') {
      this.$router.push('/index');
    }
  },
  methods: {
    start() {
      if (this.name === '') return false;
      const name = this.name;
      const namekey = Math.random().toString(36).split('.')[1];
      const obj = {
        name,
        namekey,
        nowavatar:this.nowavatar,
      };
      this.$cookie.set('name', obj);
      this.$router.push('/index');
      return true;
    },
  },
};
</script>
<style lang="scss" scope="this api replaced by slot-scope in 2.5.0+">
  .login-bg{
    background-image: url('../assets/img/Group 27.svg');
  }
</style>
