<template>
  <div>
    <div class="d-flex flex-column px-3" style="padding-bottom: 44px;" v-if="totalmsg.length">
      <div v-for="(item, index) in totalmsg" :key="index">
        <template v-if="item.customkey !== cookie.namekey">
          <div class="room-client">
            <div class="item">
              <div class="pic" :style="{backgroundImage:'url('+require(`../assets/img/hu${item.avatar}.svg`)+')'}"></div>
              <div class="name" :title="item.custom">{{item.custom}}</div>
            </div>
            <div class="msg-w">
              <div class="msg" v-if="item.msg">{{item.msg}}</div>
              <div class="mx-3" v-if="item.img">
                <img max-width="200" height="150"
                  v-if="item.type"
                  :src="item.img"
                  >
                <div class="msg-file" v-else>
                  <i class="fas fa-file fa-4x"></i>
                  <span>{{item.name}}</span>
                  <a :href="item.img" target="_blank">下載</a>
                </div>
              </div>
              <!-- <div class="mx-3" v-if="item.emoticon">
                <img max-width="200" height="150" :src="item.emoticon">
              </div> -->
              <span>{{item.timestamp}}</span>
            </div>
          </div>
        </template>

        <template v-else>
          <div class="room-client local">
            <div class="item">
              <div class="pic" :style="{backgroundImage:'url('+require(`../assets/img/hu${item.avatar}.svg`)+')'}"></div>
              <div class="name" :title="item.custom">{{item.custom}}</div>
            </div>
            <div class="msg-w">
              <div class="msg" v-if="item.msg">{{item.msg}}</div>
              <div class="mx-3" v-if="item.img">
                <img max-width="200" height="150"
                  v-if="item.type"
                  :src="item.img"
                  >
                <div class="msg-file" v-else>
                  <i class="fas fa-file fa-4x"></i>
                  <span>{{item.name}}</span>
                  <a :href="item.img" target="_blank">下載</a>
                </div>
              </div>
              <!-- <div class="mx-3" v-if="item.emoticon">
                <img width="150" height="150" :src="item.emoticon">
              </div> -->
              <span>
                <a href="#" class="d-block" @click.prevent="delmsg(item.id)">刪除</a>
                {{item.timestamp}}
              </span>
            </div>
          </div>
        </template>
      </div>
      <div v-if="progress" class="d-flex flex-column ml-auto">
        <h5 class="text-white">檔案傳送中</h5>
        <div class="progess"
          :style="{ width: progress + 'px' }"></div>
        <span class="text-center">{{progress}}</span>
      </div>
      <p v-if="imgerror" class="text-right text-white">
        {{errormsg}}
      </p>
    </div>

    <div class="chat-pos">
      <div class="chat-msg">
        <input type="text" placeholder="輸入聊天訊息" v-model.trim="inputmsg"
          @keyup.enter="sendmsg()">

        <div class="chat-group">
          <a href="#">
            <img src="../assets/img/Group 428.svg" width="20px" height="30px" alt="">
          </a>
          <a href="#" style="position:relative;">
            <input type="file" id="file" ref="file" style="width:0px;height:0px;position:absolute;opacity:0;" @change="upload(false)">
            <label for="file" class="file mb-0">
              <img src="../assets/img/Group 429.svg" width="20px" height="30px" alt="">
            </label>
          </a>
          <a href="#" style="position:relative;">
            <input type="file" id="img" ref="img" style="width:0px;height:0px;position:absolute;opacity:0;" @change="upload()">
            <label for="img" class="file mb-0">
              <img src="../assets/img/Group 430.svg" width="20px" height="30px" alt="">
            </label>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  data() {
    return {
      tophide: false,
      emoticonshow: false,
      emoticon: '',
      cookie: {},
      progress: 0,
      totalmsg: [],
      imgerror: false,
      file: '',
      inputmsg: '',
      errormsg: '',
    };
  },
  created() {
    // 驗證是否設定cookie
    if (this.$cookie.get('name') === undefined || this.$cookie.get('name') === 'clear') {
      this.$router.push('/');
      return false;
    }
    this.cookie = JSON.parse(this.$cookie.get('name'));

    if (this.$route.query.roomid === '') this.$router.push('/index');
    this.inputmsg = '';
    this.file = '';
    this.updatemsg();
    this.$nextTick(() => {
      const h = $('html,body').prop('scrollHeight');
      $('html,body').scrollTop(h);
    });
    return true;
  },
  watch: {
    // 監聽路由更新聊天室
    '$route'() {
      this.updatemsg();
    },
  },
  updated() {
    // 更新時自動滑到最底層訊息
    const h = $('html,body').prop('scrollHeight');
    $('html,body').scrollTop(h);
  },
  methods: {
    // 上傳圖片或檔案
    upload(filupload = true) {
      this.$bus.$emit('loading', true);
      const imgtype = ['image/jpeg', 'image/jpg', 'image/gif', 'image/bmp', 'image/png', 'image/swf'];
      const storageRef = this.$firebase.storage().ref();
      let file = null;
      if (filupload) {
        file = this.$refs.img.files[0];
      } else {
        file = this.$refs.file.files[0];
      }
      if (file === undefined) return false;
      const len = imgtype.filter((item) => {
        return item.includes(file.type);
      });
      if (filupload && len.length === 0) {
        const time = setTimeout(() => {
          this.imgerror = false;
          clearTimeout(time);
        }, 2000);
        this.imgerror = true;
        this.errormsg = '請確認上傳的格式是否為jpeg,jpg,gif,bmp,png,swf';
        this.$refs.img.value = '';
        this.$bus.$emit('loading', false);
        return false;
      }
      if (!filupload && len.length !== 0) {
        const time = setTimeout(() => {
          this.imgerror = false;
          clearTimeout(time);
        }, 2000);
        this.imgerror = true;
        this.errormsg = '請確認上傳的格式是否為文件格式';
        this.$refs.file.value = '';
        this.$bus.$emit('loading', false);
        return false;
      }
      const uploadTask = storageRef.child(`images/${file.name}`).put(file);
      uploadTask.on('state_changed', (snapshot) => {
        this.progress = Math.ceil((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      }, () => {

      }, () => {
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          this.file = {
            downloadURL,
            name: file.name,
            type: file.type,
          };
        }).then(() => {
          this.sendmsg();
          this.$bus.$emit('loading', false);
          this.$refs.file.value = '';
          this.$refs.img.value = '';
          this.inputmsg = '';
          this.file = '';
          this.progress = 0;
        });
      });
    },
    // 更新聊天室對話
    updatemsg() {
      this.$bus.$emit('loading', true);
      this.room = this.$route.query.roomid;
      this.$firebase.database().ref(`/${this.$route.query.roomid}/msg`).on('value', (snapshot) => {
        this.totalmsg = [];
        if (snapshot.val() === null) {
          this.$bus.$emit('loading', false);
          return false;
        }
        const key = Object.keys(snapshot.val());
        const val = Object.values(snapshot.val());
        key.forEach((item, index) => {
          const hour = new Date(val[index].timestamp * 100).getHours();
          let min = new Date(val[index].timestamp * 100).getMinutes();
          let str = '';
          if (min <= 9) {
            min = `0${min}`;
          }
          if (hour >= 12) {
            str = `下午${hour}:${min}`;
          } else {
            str = `上午${hour}:${min}`;
          }
          const imgtype = ['image/jpeg', 'image/jpg', 'image/gif', 'image/bmp', 'image/png', 'image/swf'];
          const len = imgtype.some((item) => {
            return item.includes(val[index].type);
          });
          this.totalmsg.push({
            id: item,
            custom: val[index].custom,
            customkey: val[index].customkey,
            timestamp: str,
            avatar: val[index].avatar,
            type: len,
            name: val[index].name,
            msg: val[index].msg,
            img: val[index].file,
            emoticon: val[index].emoticon,
          });
          this.$bus.$emit('loading', false);
        });
      });
      this.inputmsg = '';
      this.file = '';
    },
    // 刪除自己發送對話
    delmsg(id) {
      this.$firebase.database().ref(`/${this.$route.query.roomid}/msg`).child(id).remove();
      this.updatemsg(this.$route.query.roomid);
    },
    // 發送對話
    sendmsg(emoticon = '') {
      if (this.inputmsg === '' && this.file === '' && emoticon === '') return false;
      const timestamp = Math.floor(Date.now() / 100);
      this.$firebase.database().ref(`/${this.$route.query.roomid}/msg`).push({
        custom: this.cookie.name,
        customkey: this.cookie.namekey,
        timestamp,
        msg: this.inputmsg,
        avatar: this.cookie.nowavatar,
        name: this.file.name || '',
        file: this.file.downloadURL || '',
        type: this.file.type || '',
        emoticon,
      });

      this.updatemsg(this.$route.query.roomid);
      this.inputmsg = '';
      this.file = '';
      return true;
    },
    // 登出
    loginout() {
      this.$cookie.set('name', 'clear');
      this.$router.push('/');
    },
  },
};
</script>
