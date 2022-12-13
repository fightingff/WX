import DEFAULT_MUSIC from './config/index';
App({
  globalData:{
    player: wx.createInnerAudioContext(),
    playState: DEFAULT_MUSIC.DEFAULT_MUSIC.playState,
    musicPic: DEFAULT_MUSIC.DEFAULT_MUSIC.musicPic,
    musicName: DEFAULT_MUSIC.DEFAULT_MUSIC.musicName,
    musicUrl: DEFAULT_MUSIC.DEFAULT_MUSIC.musicUrl,
    artistName:DEFAULT_MUSIC.DEFAULT_MUSIC.artistName,
    icon: DEFAULT_MUSIC.DEFAULT_MUSIC.icon,
    musicPlayer : null,
    favorMusics: {},
  },
  onLaunch: function () {
    if(!wx.cloud){
      console.erroe('请使用 2.2.3 或以上的基础库实现云开发')
    } else {
      wx.cloud.init({
        env: 'course-dem',
        traceUser: true,
      })
    }
    this.getFavorMusics();
  },
  getFavorMusics: function(){
    const db=wx.cloud.database({env:'cloud1-8g1j33nk08d3d494'});
    db.collection('music_favor').field({
      sid: true,
      _id: true,
    }).get({
      success: res =>{
        let musics= new Array(res.data.length+1);
        let counterIDs= new Array(res.data.length+1);
        res.data.forEach(function(item,index){
          musics[item.sid]=true
          counterIDs[item.sid]=item._id
          console.log(item.sid);
        })
        this.globalData.favorMusics={
          musics: musics,
          counterIDs: counterIDs,
        }
      },
      fail: err =>{
        wx.showToast({
          icon: 'none',
          title: '查询失败',
        })
        console.error(err);
      }
    })
  }
})
