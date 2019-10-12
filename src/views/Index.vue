<template>
  <div>
    <nav class="nav">
      <img src="../assets/img/Group 465.svg" width="126px" height="26px" alt="" srcset="">
      <button class="btn btn-primary btn-sm"
        @click="show=!show">
        <i class="fas fa-bars"></i>
      </button>
    </nav>

    <div class="content">
      <div class="left-block" :class="{'show':show}">
        <div class="client">
          <div class="logout px-3 mb-3">
            <h2>Aurora Hunters</h2>
            <a href="#" @click.prevent="loginout()">
              <img src="../assets/img/iconmonstr-log-out-11.svg" width="30px" height="30px" alt="">
            </a>
          </div>
          <div class="client-msg p-3">
            <div>
              <img class="mr-4" :src="require(`../assets/img/hu${cookie.nowavatar}.svg`)" width="42px" height="42px" alt="">
              <span>{{cookie.name}}</span>
            </div>
            <div class="connect"></div>
          </div>
        </div>

        <div class="choose-room">
          <div class="room-title p-3">
            <h2>Choose Room</h2>
            <a href="#" @click.prevent="modal = !modal">新增房間</a>
          </div>

          <div class="choose-room-h">
            <template v-for="item in uesrstory">
              <div class="choose-room-msg p-3" :key="item.id"
                :title="item.name"
                @click.prevent="updatemsg(item.id, item.name),show=false">
                <h4>{{item.name}}</h4>
                <span>對話數:{{item.num}}</span>
              </div>
            </template>
          </div>
        </div>
      </div>

      <div class="right-block">
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
