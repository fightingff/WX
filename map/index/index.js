Page({
  data: {
    latitude: 23.099994,
    longitude: 113.324520,
    title: "T.I.T 创意园",
    markers: [{
      id: 1,
      latitude: 23.099994,
      longitude: 113.324520,
      title: 'T.I.T 创意园',
      width: "30",  
      height: "50"  
    }],
  },
  onReady: function (e) {
    this.mapCtx = wx.createMapContext('myMap')
  },
  getCenterLocation: function () {
    this.mapCtx.getCenterLocation({
      success: function(res){
        console.log(res.longitude)
        console.log(res.latitude)
      }
    })
  },
  Updata: function(){
    let that=this;
    this.mapCtx.getCenterLocation({
      success: function(res){
        console.log(res)
        that.setData({
          longitude: res.longitude,
          latitude: res.latitude,
        })
      }
    })
  },
  moveToLocation: function () {
    this.mapCtx.moveToLocation();
    this.title="当前位置";
    this.Updata();
  },
  backToLocation: function(event){
    console.log(event);
    this.mapCtx.moveToLocation({
      latitude: 23.099994,
      longitude: 113.324520,
      title: "T.I.T 创意园",
    });
    this.Updata();
  },
  translateMarker: function() {
    this.mapCtx.translateMarker({
      markerId: 1,
      autoRotate: true,
      duration: 1000,
      destination: {
        latitude: 23.099994,
        longitude: 113.324520,
      },
      animationEnd() {
        console.log('animation end')
      }
    })
  },
  includePoints: function() {
    this.mapCtx.includePoints({
      padding: [10],
      points: [{
        latitude:23.10229,
        longitude:113.3345211,
      }, {
        latitude:23.00229,
        longitude:113.3345211,
      }]
    })
  },
  onShareAppMessage(){
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve({
          title: "a simple trying"
        })
      }, 2000)
    })
    return {
      title: "a simple trying",
      path :"/pages/index/index",
      promise
    }
  }
})
