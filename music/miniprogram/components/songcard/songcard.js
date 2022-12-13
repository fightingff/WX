// components/songcard/songcard.js
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
    favor: false,
    counterID: '',
    count: null,
  },
  lifetimes:{
    attached: function(){
      console.log("yes");
      let states=App.favorMusics;
      let index=this.properties.item.id;
      this.setData({
        favor: states.musics[index],
        counterID: states.counterIDs[index],
      })
      console.log("yes");
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    playAudio: function(e){
      let item=e.currentTarget.dataset.item;
      console.log(item.src);
      App.player.src=item.src;
      console.log(App.player.src);
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
    love:function(){
      this.setData({favor:!this.data.favor});
      if(this.data.favor){
        this.favormusic();
      }else{
        this.disfavormusic();
      }
    },
    favormusic: function(){
      const db=wx.cloud.database({env:'cloud1-8g1j33nk08d3d494'});
      db.collection('music_favor').add({
        data:{
        sid: this.properties.item.id,
        name: this.properties.item.name,
        singer: this.properties.item.author,
        },
        success: res =>{
          this.setData({
            counterID: res._id,
            count: 1
          })
          wx.showToast({
            title: '已收藏',
          })
          let ID=this.properties.item.id;
          App.favorMusics.musics[ID]=true
          App.favorMusics.counterIDs[ID]=this.data.counterID
          console.log(res._id);
        },
        fail: err =>{
          wx.showToast({
            icon: 'none',
            title: '收藏失败',
          })
          console.error(err);
        }
      })
    },
    disfavormusic: function(){
      if(this.data.counterID){
        const db=wx.cloud.database({env:'cloud1-8g1j33nk08d3d494'});
        db.collection('music_favor').doc(this.data.counterID).remove({
          success: res =>{
            wx.showToast({
              title: '已取消收藏',
            })
            this.setData({
              counterID: '',
              count: null,
            })
            let ID=this.properties.item.id;
            App.favorMusics.musics[ID]=false
            App.favorMusics.counterIDs[ID]=this.data.null
          },
          fail: err =>{
            wx.showToast({
              icon: 'none',
              title: '删除失败',
            })
            console.error(err);
          }
        })
      }else wx.showToast({
        title: '尚未收藏',
      })
    },
  }
})
