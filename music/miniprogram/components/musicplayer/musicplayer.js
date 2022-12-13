// components/musicplayer/musicplayer.js
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
    item: null,
    show: true,
  },
  lifetimes: {
    attached:function(){
      this.setData({item:App});
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    playAudio: function(){
      if(!App.playState) App.player.play();
        else App.player.pause();
      App.playState^=1;
      const temp={
        playState : App.playState,
        musicPic : App.musicPic,
        musicName : App.musicName,
        artistName : App.artistName,
      }
      App.musicPlayer.setData({item:temp});
      this.setData({item:App});
    },
  }
})
