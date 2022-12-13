// user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    motto: "Enjoy MUSIC every day!",
    userInfo: {},
    hasUserInfo: false,
    canIUseGetUserProfile: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    wx.getUserProfile({
      desc: '展示用户信息', 
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
    const db=wx.cloud.database({env:'cloud1-8g1j33nk08d3d494'});
    db.collection('music_favor').get({
      success: res =>{
        let favorMusics= new Array();
        res.data.forEach(function(item,index){
          console.log(item);
          favorMusics.push({
            name: item.name,
            author: item.singer,
          })
        })
        console.log(favorMusics);
        this.setData({
          favorMusics: favorMusics
        })
      },
      fail: err =>{
        wx.showToast({
          icon: 'none',
          title: '查询失败',
        })
        console.error(err);
      }
    })
  },
  get:function(){
    wx.getUserProfile({
      desc: '展示用户信息', 
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
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