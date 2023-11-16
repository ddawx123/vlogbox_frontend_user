<template>
  <div>
    <div>
      <Divider size="default" orientation="center" style="background-color: rgba(255, 255, 255, 0.7); border-radius: 10px; font-weight: bold">视频墙 &middot; PC网页端</Divider>
    </div>
    <div class="card_box">
      <Card v-on:click.native="onCardClick(item)" v-for="(item, index) in videoList" :key="index" style="width: 390px; background-color: rgba(255, 255, 255, 0.7); backdrop-filter: blur(2px); -webkit-backdrop-filter: blur(2px)">
        <div style="text-align: center">
          <img :src="item.imgUrl">
          <h3>{{ item.description }}</h3>
        </div>
      </Card>
      <Modal :before-close="onModalClose" footer-hide v-model="playerModal" fullscreen :title="playVideoTitle" style="width: inherit">
        <div style="width: inherit">
          <video autoplay controls loop ref="player" :src="playVideoUrl"></video>
        </div>
      </Modal>
    </div>
  </div>
</template>

<script>
import HttpClient from '../../api/HttpClient'
export default {
  name: 'index',
  data () {
    return {
      dataList: [1, 2, 3, 4, 5, 6, 7],
      videoList: [],
      playerModal: false,
      playVideoUrl: '',
      playVideoTitle: ''
    }
  },
  methods: {
    getVideoList () {
      this.$Loading.start()
      let that = this
      HttpClient.get('/video/feed_list', {
        limit: 999
      }).then(function (result) {
        that.videoList = result.data.items
        that.$Loading.finish()
      }).catch(function (e) {
        console.log(e)
        that.$Loading.error()
        that.$Notice.error({
          title: e.message,
          render: h => {
            return h('h3', [
              '后端无法访问，请核实服务是否正常运行'
            ])
          },
          duration: 0
        })
      })
    },
    onCardClick (e) {
      this.playVideoUrl = e.videoUrl
      this.playVideoTitle = '正在播放中 ' + e.description
      this.playerModal = true
      this.$refs.player.play()
    },
    onModalClose () {
      this.$refs.player.pause()
    }
  },
  beforeCreate () {
    console.log('beforeCreate hook')
  },
  created () {
    console.log('created hook')
    HttpClient.post('/common/open-api/bing/wallpaper').then(function (result) {
      document.body.style.backgroundImage = 'url("' + result.data.img_url + '")'
      document.body.style.backgroundAttachment = 'fixed'
      document.body.style.backgroundSize = '100% 100%'
    }).catch(function (e) {
      console.log(e)
      document.body.style.background = 'linear-gradient(15deg, #0064bd, #00ff9f)'
      document.body.style.backgroundAttachment = 'fixed'
    })
  },
  beforeMount () {
    console.log('beforeMount hook')
  },
  mounted () {
    console.log('mounted hook')
    this.getVideoList()
  },
  beforeUpdate () {
    console.log('beforeUpdate hook')
  },
  updated () {
    console.log('updated hook')
  },
  beforeDestroy () {
    console.log('beforeDestroy hook')
  },
  destroyed () {
    console.log('destroyed hook')
  }
}
</script>

<style scoped>
  .card_box {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    cursor: pointer;
    user-select: none;
  }
  img {
    width: 355px;
  }
  video {
    width: inherit;
  }
</style>
