// pages/home/home.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude:"",
    longitude:"",
    destination:"",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log('loading...');
    var that = this
    wx.getLocation({
      type:'wgs84',
      success: function (res) {
        console.log("当前纬度" + res.latitude);
        console.log("当前经度" + res.longitude);
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },
  select:function(e){
    wx.reLaunch({
      url: '../list/list',
    })
  },
  handle_menu: function(e) {
    wx.showActionSheet({
      itemList: ['东区大食堂','临湖餐厅','麦斯威餐厅','玉湖食堂','银泉食堂'],
      success: function (res) {
        if(!res.cancel) {
          let pos= ['东区大食堂','临湖餐厅','麦斯威餐厅','玉湖食堂','银泉食堂'];
          app.globalData.destination = pos[res.tapIndex]
          console.log(app.globalData.destination)
          wx.navigateTo({
            url: '../index/index',
          })
        }
      }
    })
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }

})