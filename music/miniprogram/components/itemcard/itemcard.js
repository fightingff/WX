// components/itemcard/itemcard.js
let App=getApp().globalData;
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    item: {
      type: Object,
      value: {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
  },
  /**
   * 组件的方法列表
   */

  methods: {

    playAudio: function(e){
      let item=e.currentTarget.dataset.item;
      App.player.src=item.src;
      console.log(e);
      App.player.play(),App.playState=1;
      App.musicPic=item.poster;
      App.musicName=item.name;
      App.artistName=item.author;
      const temp={
        playState : 1,
        musicPic : item.poster,
        musicName : item.name,
        artistName : item.author,
      }
      App.musicPlayer.setData({
        item: temp
      })
    },
    todetail: function(){
      wx.navigateTo({
        url: `../../pages/detail/detail?author=${this.data.item.author}&poster=${this.data.item.man}`,
      })
    }
  }
})
