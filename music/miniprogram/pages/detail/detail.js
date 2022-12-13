// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    author: null,
    poster: null,
    dataSource: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad :function(options){
    const{
      author,
      poster,
    }=options;
    this.setData({
      author: author,
      poster: poster,
    })
    const db=wx.cloud.database({env:'cloud1-8g1j33nk08d3d494'});
    db.collection('musiclist').get({
      success: res =>{
        let datas=new Array();
        res.data.forEach(function(item,index){
          if(item.author==author) datas.push(item);
        })
        this.setData({
          dataSource: datas
        })
      },
      fail: err =>{
        console.error(err);
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