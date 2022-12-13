import musiclist1 from "../../datas/musiclist1.js"
let App=getApp().globalData;
Page({
  data: {
  },
  onLoad: function(options) {
    this.setData({
      current: musiclist1.current
    })
    var Player=this.selectComponent("#player");
    App.musicPlayer=Player;
  },
})