<template>
  <div>
    <nav class="nav">
      <img src="../assets/img/Group 465.svg" width="126px" height="26px" alt="" srcset="">
      <button class="btn btn-primary btn-sm"
        @click="show=!show">
        <i class="fas fa-bars"></i>
      </button>
    </nav>
    <div class="wrap">
      <div class="left-pos">
        <div class="left-msg" :class="{'show':show}">
          <div class="client">
            <div class="logout px-3 mb-3">
              <h2>Aurora Hunters</h2>
              <a href="#" @click.prevent="loginout()">
                <img src="../assets/img/iconmonstr-log-out-11.svg" width="30px" height="30px" alt="">
              </a>
            </div>
            <div class="msg p-3">
              <div>
                <img class="mr-4" :src="require(`../assets/img/hu${cookie.nowavatar}.svg`)" width="42px" height="42px" alt="">
                <span>{{cookie.name}}</span>
              </div>
              <div class="connect"></div>
            </div>
          </div>
          <div class="room">
            <div class="l-room-title p-3">
              <h2>Choose Room</h2>
              <a href="#" @click.prevent="modal = !modal">新增房間</a>
            </div>
            <div class="room-h">
              <template v-for="item in uesrstory">
                <div class="l-room p-3" :key="item.id"
                  :title="item.name"
                  @click.prevent="updatemsg(item.id, item.name),show=false">
                  <h4>{{item.name}}</h4>
                  <span>對話數:{{item.num}}</span>
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
      <div class="right-msg">
        <div :class="{slidebg:show}" @click="show=false"></div>
        <router-view></router-view>
      </div>
    </div>
    <div class="addroom p-5" v-show="modal">
      <h4 class="text-center">新增聊天室</h4>
      <div class="modal-hide">
        <a href="#" @click.prevent="modal=!modal">
          <i class="fas fa-times fa-lg"></i>
        </a>
      </div>
      <div class="input-group d-flex flex-column">
        <input type="text" v-model.trim="Addroom">
        <button class="btn btn-primary mt-3" @click="addroom(),modal=false">新增</button>
      </div>
    </div>
    <div :class="{'modal-bg':modal}"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modal: false,
      Addroom: '',
      cookie: {},
      todaytopic: {},
      uesrstory: [],
      show: false,
    };
  },
  created() {
    if (this.$cookie.get('name') === undefined || this.$cookie.get('name') === 'clear') {
      this.$router.push('/');
    } else {
      this.cookie = JSON.parse(this.$cookie.get('name'));
    }
  },
  mounted() {
    this.updateroom('room');
  },
  methods: {
    // 新增聊天室
    addroom() {
      if (this.Addroom === '') {
        alert('請輸入名稱');
        return false;
      }
      const timestamp = Math.floor(Date.now() / 100);
      this.$firebase.database().ref('/room').push({
        creatcustom: this.cookie,
        name: this.Addroom,
        timestamp,
      });
      this.Addroom = '';
      this.updateroom();
      return true;
    },
    // 更新聊天室
    updateroom(room) {
      this.$bus.$emit('loading', true);
      this.$firebase.database().ref(`/${room}`).on('value', (snapshot) => {
        const obj = [];
        if (snapshot.val() === null) return false;
        const id = Object.keys(snapshot.val());
        const name = Object.values(snapshot.val());
        let num = 0;
        let custom = '';
        id.forEach((item, index) => {
          if (name[index].msg === undefined) {
            num = 0;
            custom = '';
          } else {
            num = Object.keys(name[index].msg).length;
            custom = Object.values(name[index].msg)[num - 1].custom;
          }
          obj.push({
            id: item,
            creatcustom: name[index].creatcustom.name,
            name: name[index].name,
            num,
            custom,
          });
        });

        obj.sort((a, b) => b.num - a.num);

        if (room === 'room') {
          this.uesrstory = obj;
        } else {
          this.todaytopic = obj[0];
        }
        this.$bus.$emit('loading', false);
        return true;
      });
    },
    updatemsg(roomid, roomname, room = 'room') {
      this.$router.push({
        path: '/index/roommsg',
        query: {
          room,
          roomid,
          roomname,
        },
      });
    },
    loginout() {
      this.$cookie.set('name', 'clear');
      this.$router.push('/');
    },
  },
};
</script>
<style lang="scss" scope="this api replaced by slot-scope in 2.5.0+">
  .nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background:#171717;
    position: fixed;
    width: 100%;
    z-index: 60;
    padding: 16px 25px;
    button{
      display: none;
      @media (max-width:768px) {
        display: block;
      }
    }
  }
  .wrap{
    display: flex;
    min-height: 100vh;
    padding-top: 58px;
  }
  .left-pos{
    position: fixed;
    z-index: 50;
    height: 100%;
  }
  .left-msg{
    width: 399px;
    background: #272727;
    position: relative;
    height: 100%;
    z-index: 120;
    padding-top: 40px;
    @media (max-width:768px) {
      position: absolute;
      top: 0;
      max-width: 280px;
      transform: translateX(-399px);
      transition: 0.5s;
      z-index: 120;
    }
  }
  .show{
    transform: translateX(0);
  }
  .right-msg{
    width: 100%;
    padding-left: 399px;
    overflow: hidden;
    background: #1D1D1D;
    display: flex;
    flex-direction: column;
    position: relative;
    .slidebg{
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.65);
      z-index: 20;
    }
    @media (max-width:768px) {
      width: 100%;
      padding: 0;
    }
  }
  .client{
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #403F3F;
  }
  .msg{
      display: flex;
      justify-content: space-between;
      align-items: center;
      .connect{
        width: 15px;
        height: 15px;
        border-radius: 15px;
        background: #98D693;
      }
      span{
        color: #fff;
      }
    }
  .logout{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 768px) {
      flex-direction: column;
    }
    h2{
      margin: 0;
      color: #DBDBDB;
    }
    a{
      height: 30px;
    }
    img{
      vertical-align: middle;
    }
  }

  .room{
    display: flex;
    align-items: center;
    flex-direction: column;
    color: #fff;
    .l-room,.l-room-title{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .l-room-title{
      @media (max-width: 768px) {
        flex-direction: column;
      }
    }
  }
  .room-h{
    width: 100%;
    max-height: 275px;
    overflow-y: auto;
    @media (max-width:320px) {
      max-height: 200px;
    }
    .l-room{
      cursor: pointer;
      &:hover{
        box-shadow: 0px 0px 20px #000;
      }
    }
  }
</style>
