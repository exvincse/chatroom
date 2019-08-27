<template>
  <div class="wrap">
    <nav class="top-nav d-flex bg-white align-items-center justify-content-between">
      <ul class="menu d-flex px-4 mb-0">
        <li>
          <router-link to="/index" class="py-3">首頁</router-link>
        </li>
      </ul>
      <div class="login-layout">
        <a href="#" class="p-3 btn btn-navy-blue login-out"
          @click.prevent="loginout()">登出</a>
        <a href="#" class="p-3 btn bg-navy-blue text-white name">{{cookie.name}}</a>
      </div>
    </nav>
    <header class="top-bg py-5"></header>
    <section class="container" style="transform: translateY(-15%);">
      <div class="row">
        <div class="col-12 mb-4">
          <div class="today-topic">
            <h2 class="col-12 hot-title">本日話題</h2>
            <div class="theme">
              <a href="#" class="d-flex justify-content-center align-items-center text-center"
                @click.prevent="updatemsg(todaytopic.id, todaytopic.name, 'today')">
                <div class="content d-flex flex-column">
                <span class="mb-3">#{{todaytopic.name}}</span>
                  <span>{{todaytopic.num}}<i class="fas fa-comment-dots ml-2"></i></span>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div class="col-12 d-flex flex-wrap hot">
          <h2 class="col-12 hot-title">熱門偷偷說</h2>
          <div class="col-5 d-flex flex-column hot-topic" v-for="item in uesrstory" :key="item.id">
            <p class="mb-4 flex-content">{{item.name}}</p>
            <div class="d-flex flex-footer justify-content-between align-items-center">
              <span style="font-size:12px;">{{item.creatcustom}}</span>
              <div>
                <span class="mr-2">{{item.num}}</span>
                <img src="../assets/img/comment.svg" width="15px" height="15px" alt="">
              </div>
            </div>
            <a href="#" :title="item.name" @click.prevent="updatemsg(item.id, item.name)"></a>
          </div>
          <a href="#" class="addroom-btn text-center"
            @click.prevent="modal = !modal">
            <i class="fas fa-pencil-alt fa-lg text-navy-blue"></i>
          </a>
        </div>
      </div>
    </section>
    <div class="addroom p-5" v-show="modal">
      <h4 class="text-center">新增聊天室</h4>
      <div class="modal-hide">
        <a href="#" @click.prevent="modal=!modal">
          <i class="fas fa-times fa-lg"></i>
        </a>
      </div>
      <div class="input-group">
        <textarea cols="30" rows="10" style="resize:none" v-model="Addroom"></textarea>
        <button class="btn btn-primary ml-auto mt-3" @click="addroom(),modal=false">新增</button>
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
    this.updateroom('today');
    this.updateroom();
  },
  methods: {
    // 新增聊天室
    addroom() {
      if (this.Addroom === '') return false;
      const timestamp = Math.floor(Date.now() / 100);
      this.$firebase.database().ref('/room/').push({
        creatcustom: this.cookie,
        name: this.Addroom,
        timestamp,
      });
      this.Addroom = '';
      this.updateroom();
      return true;
    },
    // 更新聊天室
    updateroom(room = 'room') {
      this.$firebase.database().ref(`/${room}/`).on('value', (snapshot) => {
        if (snapshot.val() === null) return false;
        const id = Object.keys(snapshot.val());
        const name = Object.values(snapshot.val());
        const obj = [];
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

        obj.sort((a, b) => {
          return b.num - a.num;
        });

        if (room === 'room') {
          this.uesrstory = obj;
        } else {
          this.todaytopic = obj[0];
        }
        return true;
      });
    },
    updatemsg(roomid, roomname, room = 'room') {
      this.$router.push({
        path: 'roommsg',
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
<style lang="scss" scope>
  .top-bg{
    background: linear-gradient(45deg, rgba(255, 255, 255, 0.28) 9%, #F3E171 0, #F3E171 50%, rgba(255, 255, 255, 0.28) 0, rgba(255, 255, 255, 0.28) 57%, #F3E171 0);
    background-size: 5px 5px;
    height: 100px;
  }
  .theme{
    background-image: url('../assets/img/dog.jpg');
    background-position: center;
    background-size: cover;
    position: relative;
    height: 173px;
    border: 1px solid #102977;
    border-radius: 5px;
    >a{
      position: absolute;
      text-decoration: none;
      color: #000000;
      height: 100%;
      z-index: 100;
      top: 0;
      left: 0;
      right: 0;
    }
    &::after{
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 5px;
      background: rgba(255,255,255,0.70);
    }
  }
</style>
