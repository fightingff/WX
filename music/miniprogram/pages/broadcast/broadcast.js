// broadcast/broadcast.js
import broadcastlist from "../../datas/broadcastlist.js"
let App=getApp().globalData;
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      list: broadcastlist.list
    })
  },
})