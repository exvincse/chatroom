<template>
  <div>
    <div class="t-bg">
      <div class="login">
        <div class="pic mb-4">
          <img src="../assets/img/Logo.svg" width="138px" height="74px" alt="" srcset="">
        </div>
        <div class="login-item p-5">
          <small>You are invited to a chat room</small>
          <h2>Aurora Hunters</h2>
          <div class="avatar-menu" :class="{'bg-bg1':avatar}">
            <a href="#" @click.prevent="avatar=!avatar">
              <img :src="require(`../assets/img/hu${nowavatar}.svg`)" width="64px" height="64px" alt="">
            </a>
            <ul class="menu" :class="{'menu-show':avatar}">
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
    // randomname() {
    //   this.name = Math.random().toString(36).split('.')[1];
    // },
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
  .t-bg{
    background-image: url('../assets/img/Group 27.svg');
    background-position: center;
    background-size: cover;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .pic{
    text-align: center;
  }
  .login-item{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #1D1D1D;
    border: 1px solid #fff;
    small{
      color:#66EAD5;
    }
    h2{
      color: #fff;
    }
    span{
      align-self: flex-start;
      color: #fff;
    }
    input[type="button"]{
      width: 100%;
    }
  }
  .avatar-menu{
    position: relative;
    border-radius: 50px 0 0 50px;
    >a{
      display: block;
      padding: 10px;
    }
    ul{
      border-radius: 0 50px 50px 0;
      background: #D6D6D6;
      margin: 0;
      position: absolute;
      top: 0;
      left: 74px;
      list-style: none;
      display: flex;
      li{
        padding: 10px;
      }
    }
  }
  .menu{
    width: 0;
    padding: 0;
    transition: width .3s;
    overflow: hidden;
  }
  .menu-show{
    width: 350px;
  }
</style>
