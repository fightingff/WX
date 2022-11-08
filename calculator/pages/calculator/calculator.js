// pages/calculator/calculator.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      A:{
        a:[1,2,3,'*']
      },
      B:{
        a:[4,5,6,'/']
      },
      C:{
        a:[7,8,9,'+']
      },
      D:{
        a:['c',0,'-','=']
      },
      Ans : "",
      Newinput: 1,
  },
  Add : function(e){
      if(this.data.Newinput) this.Clear(),this.data.Newinput=0;
      this.setData({
        Ans : this.data.Ans + e.currentTarget.dataset.num,
      })
  },
  Clear : function(){
      this.setData({
        Ans: "",
      })
  },
  Solve : function(){
      var s=this.data.Ans+'=';
      var res=0,op="",flg=1;
      var stk=[],tp=0;
      for(var i=0;i<s.length;i++){
        var ch=s.charAt(i);
        let val=ch-'0';
        if(val>=0&&val<=9) {res=res*10+val,flg=1;continue;}
        if(!flg) {
          this.setData({
            Ans: "Wrong Input!",
            Newinput: 1,
          })
          return;
        }
        stk[++tp]=res,res=flg=0;
        switch(op){
          case '-':stk[tp]=-stk[tp];break;
          case '*':stk[tp-1]*=stk[tp],tp--;break;
          case '/':stk[tp-1]/=stk[tp],tp--;break;
        }
        op=ch;
      }
      res=0;
      for(var i=1;i<=tp;i++) res+=stk[i],stk[i]=0;
      this.setData({
        Ans: res.toString(),
        Newinput: 1,
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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