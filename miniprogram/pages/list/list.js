// pages/41/41.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    select:false,
    kkk:true,
    begin:true,
    morebegin:true,
    pingdan:[],
    grade_name:'位置',
    grades:[
      '位置',
      '东区大食堂',
      '临湖餐厅',
      '麦斯威餐厅',
      '玉湖食堂',
      '银泉食堂'
    ],
    inputValue:"",
    zhong:[]
  },
  comTime(){
    var kkk=this.data.kkk
    var pingdan=this.data.pingdan
    function sortDownDate(a,b){
      return Date.parse(a.date)-Date.parse(b.date);
    }
    function sortUpDate(a,b){
      return Date.parse(b.date)-Date.parse(a.date)
    }
    console.log(pingdan.sort(sortDownDate))
    if(kkk==true){
    this.setData({
      pingdan:pingdan.sort(sortDownDate),
      kkk:false
    })
    console.log("kkk",kkk)
  }else{
      this.setData({
       pingdan:pingdan.sort(sortUpDate),
        kkk:true
      })
      console.log("kkk",kkk)
    }
  },
  comMoney:function(e){
    let pingdan1=this.data.pingdan
    var begin=this.data.begin
    if(begin){
    pingdan1.sort(function(a,b){
      return b.money-a.money
    }
    )
    console.log(pingdan1)
    this.setData({
      pingdan:pingdan1,
      begin:false,
    })
   }else{
     pingdan1.sort(function(a,b){
       return a.money-b.money
     }
     )
     console.log(pingdan1)
     this.setData({
       pingdan:pingdan1,
       begin:true,
     })
   }
  },
  bindShowMsg(){
    this.setData({
      select:!this.data.select
    })
 },
 mySelect(e){
   console.log(e)
   var name=e.currentTarget.dataset.name
   this.setData({
     grade_name:name,
     select:false
   })
   var grade_name=this.data.grade_name
    switch(grade_name){
      
      case "大食堂":
        var zhong=this.data.zhong
        this.setData({
          pingdan:zhong
        })
        var list3=this.data.pingdan
        console.log(list3)
        var list4=[];
        for(var i=0;i<list3.length;i++){
          var string = list3[i].location;
          if(string.indexOf(grade_name)>=0){
            list4.push(list3[i]);
          }
        }
      
       this.setData({
         pingdan:list4
       })

      break;
      
      case "麦斯威餐厅":
        var zhong=this.data.zhong
        this.setData({
          pingdan:zhong
        })
        var list3=this.data.pingdan
        console.log(list3)
        var list4=[];
        for(var i=0;i<list3.length;i++){
          var string = list3[i].location;
          if(string.indexOf(grade_name)>=0){
            list4.push(list3[i]);
          }
        }
      
       this.setData({
         pingdan:list4
       })

      break;
      
      case "银泉餐厅":
      
        var zhong=this.data.zhong
        this.setData({
          pingdan:zhong
        })
        var list3=this.data.pingdan
        console.log(list3)
        var list4=[];
        for(var i=0;i<list3.length;i++){
          var string = list3[i].location;
          if(string.indexOf(grade_name)>=0){
            list4.push(list3[i]);
          }
        }
      
       this.setData({
         pingdan:list4
       })
      break;
      case "留学生食堂":
        var zhong=this.data.zhong
        this.setData({
          pingdan:zhong
        })
        var list3=this.data.pingdan
        console.log(list3)
        var list4=[];
        for(var i=0;i<list3.length;i++){
          var string = list3[i].location;
          if(string.indexOf(grade_name)>=0){
            list4.push(list3[i]);
          }
        }
      
       this.setData({
         pingdan:list4
       })

      break;
      case "位置":
       var zhong=this.data.zhong
       this.setData({
         pingdan:zhong
       })
    
    }
 },
  inputCom:function(e){
    this.setData({
     inputValue:e.detail.value
    })
    console.log(this.data.inputValue)
   },
   query(e){
        var zhong=this.data.zhong
        this.setData({
          pingdan:zhong
        })
        var list=this.data.pingdan
        console.log(list)
        var list2=[];
        for(var i=0;i<list.length;i++){
          var string = list[i].name;
          if(string.indexOf(this.data.inputValue)>=0){
            list2.push(list[i]);
          }
        }
        console.log(list2)
       if(e.detail.value==""){
         this.setData({
           pingdan:list
         })
       }else{
         this.setData({
           pingdan:list2
         })
       }
     
   },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const db=wx.cloud.database();
    var tp=[];
    db.collection('tasklist').get().then(res=>{
      res.data.forEach(item => {
        tp.unshift(item.task);
      });
    });
     this.setData({
       pingdan:tp,
       zhong:tp
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
    const db=wx.cloud.database();
    var tp=[];
    db.collection('tasklist').get().then(res=>{
      res.data.forEach(item => {
        tp.unshift(item.task);
      });
    });
     this.setData({
       pingdan:tp,
       zhong:tp
     })
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
    const db=wx.cloud.database();
    var tp=[];
    db.collection('tasklist').get().then(res=>{
      res.data.forEach(item => {
        tp.unshift(item.task);
      });
    });
     this.setData({
       pingdan:tp,
       zhong:tp
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