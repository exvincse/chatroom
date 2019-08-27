<template>
  <div>
    <nav class="top-nav d-flex bg-white align-items-center">
      <ul class="menu d-flex px-4 mb-0">
        <li>
          <router-link to="/index" class="py-3">首頁</router-link>
        </li>
      </ul>
      <div class="p-3 ml-auto bg-navy-blue text-white name">{{starttalk.name}}</div>
    </nav>

    <div class="top-banner p-3"
      :class="{'top-hide':tophide}">
      <span class="text-center">{{this.$route.query.roomname}}</span>
      <a href="#" @click.prevent="tophide = !tophide"></a>
    </div>
    <div ref="scroll-bottom"
        class="scroll-bottom d-flex flex-column px-3" style="height:400px;overflow-y:auto">
      <div v-for="(item, index) in totalmsg" :key="index">
        <template v-if="item.customkey !== starttalk.namekey">
          <div class="room-layout float-left mb-2">
            <div>{{item.custom}}</div>
              <div v-if="item.img">
                <img height="150" :src="item.img">
              </div>
              <div v-if="item.emoticon">
                <img height="150" :src="item.emoticon">
              </div>
            <div class="msg p-2" v-if="item.msg">{{item.msg}}</div>
          </div>
        </template>

        <template v-else>
          <div class="room-layout float-right text-right mb-2">
            <div>{{item.custom}}</div>
            <div v-if="item.img">
              <img height="150" :src="item.img">
            </div>
            <div v-if="item.emoticon">
              <img height="150" :src="item.emoticon">
            </div>
            <div class="msg msg-r p-2 text-left" v-if="item.msg">{{item.msg}}</div>
            <a href="#" class="d-block" @click.prevent="delmsg(item.id)">刪除</a>
          </div>
        </template>
      </div>
      <div v-if="progress" class="d-flex flex-column ml-auto">
        <h5>檔案傳送中</h5>
        <div class="progess"
          :style="{ width: progress + 'px' }"></div>
        <span class="text-center">{{progress}}</span>
      </div>
      <div v-if="imgerror">
        <p>請確認上傳的格式是否為jpeg,jpg,gif,bmp,png,swf</p>
      </div>
    </div>
    <div class="upmsg d-flex align-items-center p-3">
      <div class="mr-2">
        <input type="file" id="file" ref="file" style="width:0px;height:0px;position:absolute;opacity:0;" @change="upload()">
        <label for="file" class="file mb-0">
          <img src="../assets/img/picture.svg" width="25px" height="25px" alt="">
        </label>
      </div>

      <div class="emoticon-wrap" v-if="emoticonshow">
        <div class="d-flex emoticon">
          <a href="#" @click.prevent="emoticon='https://firebasestorage.googleapis.com/v0/b/test-e30fc.appspot.com/o/emoticon%2Femoticon_all.png?alt=media&token=2a6c63ba-e636-4d93-97c3-d17d66f73023'
              ,message(emoticon)">
            <img class="mr-2" src="https://firebasestorage.googleapis.com/v0/b/test-e30fc.appspot.com/o/emoticon%2Femoticon_all.png?alt=media&token=2a6c63ba-e636-4d93-97c3-d17d66f73023" width="70px" height="70px" alt="" srcset="">
          </a>
          <a href="#" @click.prevent="emoticon='https://firebasestorage.googleapis.com/v0/b/test-e30fc.appspot.com/o/emoticon%2Femoticon_bird.png?alt=media&token=5f8c98d4-ab99-4576-a972-d19211166f58'
              ,message(emoticon)">
            <img class="mr-2" src="https://firebasestorage.googleapis.com/v0/b/test-e30fc.appspot.com/o/emoticon%2Femoticon_bird.png?alt=media&token=5f8c98d4-ab99-4576-a972-d19211166f58" width="70px" height="70px" alt="" srcset="">
          </a>
          <a href="#" @click.prevent="emoticon='https://firebasestorage.googleapis.com/v0/b/test-e30fc.appspot.com/o/emoticon%2Femoticon_smell.png?alt=media&token=acb74989-d21c-4100-aed1-8a48cb5da624'
              ,message(emoticon)">
            <img class="mr-2" src="https://firebasestorage.googleapis.com/v0/b/test-e30fc.appspot.com/o/emoticon%2Femoticon_smell.png?alt=media&token=acb74989-d21c-4100-aed1-8a48cb5da624" width="70px" height="70px" alt="" srcset="">
          </a>
        </div>
      </div>

      <a href="#" @click.prevent="emoticonshow=!emoticonshow">
        <img class="mr-2" src="../assets/img/smile.svg" width="25px" height="25px" alt="" srcset="">
      </a>

      <input type="text" class="form-control mr-2 msg" v-model.trim="inputmsg"
        @keyup.enter="message()">
      <a href="#" @click.prevent="message()">
        <img src="../assets/img/right-arrow.svg" width="25px" height="25px" alt="" srcset="">
      </a>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      tophide: false,
      emoticonshow: false,
      emoticon: '',
      progress: 0,
      totalmsg: [],
      imgerror: false,
      file: '',
      inputmsg: '',
    };
  },
  created() {
    if (this.starttalk === '') this.$router.push('/');
    if (this.$route.query.room === '' || this.$route.query.roomid === '') this.$router.push('/index');
    this.inputmsg = '';
    this.file = '';
    this.updatemsg();
  },
  computed: {
    ...mapGetters(['starttalk']),
  },
  updated() {
    const h = this.$refs['scroll-bottom'].scrollHeight;
    $('.scroll-bottom').scrollTop(h);
  },
  methods: {
    upload() {
      const imgtype = ['image/jpeg', 'image/jpg', 'image/gif', 'image/bmp', 'image/png', 'image/swf'];
      const storageRef = this.$firebase.storage().ref();
      const file = this.$refs.file.files[0];
      if (file === undefined) return false;

      const len = imgtype.filter((item) => {
        return item.includes(file.type);
      });

      if (len.length === 0) {
        this.imgerror = true;
        return false;
      }
      this.imgerror = false;
      const uploadTask = storageRef.child(`images/${file.name}`).put(file);
      uploadTask.on('state_changed', (snapshot) => {
        this.progress = Math.ceil((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      }, () => {

      }, () => {
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          this.file = downloadURL;
        }).then(() => {
          this.message();
          this.inputmsg = '';
          this.file = '';
          this.progress = 0;
        });
      });
      return true;
    },
    updatemsg() {
      this.todaytopic = this.$route.query.room;
      this.room = this.$route.query.roomid;
      this.$firebase.database().ref(`/${this.$route.query.room}/${this.$route.query.roomid}/msg`).on('value', (snapshot) => {
        if (snapshot.val() === null) return false;
        this.totalmsg = [];
        const key = Object.keys(snapshot.val());
        const val = Object.values(snapshot.val());
        key.forEach((item, index) => {
          this.totalmsg.push({
            id: item,
            custom: val[index].custom,
            customkey: val[index].customkey,
            timestamp: val[index].timestamp,
            msg: val[index].msg,
            img: val[index].file,
            emoticon: val[index].emoticon,
          });
        });
        return true;
      });
      this.inputmsg = '';
      this.file = '';
      this.$nextTick(() => {
        const h = this.$refs['scroll-bottom'].scrollHeight;
        $('.scroll-bottom').animate({ scrollTop: h });
      });
    },
    delmsg(id) {
      this.$firebase.database().ref(`/${this.$route.query.room}/${this.$route.query.roomid}/msg`).child(id).remove();
      this.updatemsg(this.$route.query.roomid);
    },
    message(emoticon = '') {
      if (this.inputmsg === '' && this.file === '' && emoticon === '') return false;
      const timestamp = Math.floor(Date.now() / 100);
      this.$firebase.database().ref(`/${this.$route.query.room}/${this.$route.query.roomid}/msg`).push({
        custom: this.starttalk.name,
        customkey: this.starttalk.namekey,
        timestamp,
        msg: this.inputmsg,
        emoticon,
        file: this.file,
      });
      this.updatemsg(this.$route.query.roomid);
      this.inputmsg = '';
      this.file = '';
      return true;
    },
  },
};
</script>
