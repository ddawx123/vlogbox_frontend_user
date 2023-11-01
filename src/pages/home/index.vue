<template>
  <div class="card_box">
    <Card v-on:click.native="onCardClick(item.videoUrl)" v-for="(item, index) in videoList" :key="index" style="width:390px">
      <div style="text-align: center">
        <img :src="item.imgUrl">
        <h3>{{ item.description }}</h3>
      </div>
    </Card>
    <Modal :before-close="onModalClose" footer-hide v-model="playerModal" fullscreen title="视频浏览" style="width: inherit">
      <div style="width: inherit">
        <video autoplay controls loop ref="player" :src="playVideoUrl"></video>
      </div>
    </Modal>
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
      playVideoUrl: ''
    }
  },
  methods: {
    getVideoList () {
      let that = this
      HttpClient.get('/video/feed_list', {
        limit: 999
      }).then(function (result) {
        that.videoList = result.data.items
      })
    },
    onCardClick (e) {
      console.log(e)
      this.playVideoUrl = e
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
