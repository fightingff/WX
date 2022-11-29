import musiclist1 from "../datas/musiclist1.js"
Page({
  data: {
    audioAction: {
      method: 'pause'
    }
  },
  onLoad: function(options) {
    this.setData({
      current: musiclist1.current
    })
    console.log(musiclist1);
    console.log(musiclist1.current);
  },
  audioPlayed: function (e) {
    console.log('audio is played')
  },
  audioTimeUpdated: function (e) {
    this.duration = e.detail.duration;
  },

  timeSliderChanged: function (e) {
    if (!this.duration)
      return;

    var time = this.duration * e.detail.value / 100;

    this.setData({
      audioAction: {
        method: 'setCurrentTime',
        data: time
      }
    });
  },
  playbackRateSliderChanged: function (e) {
    this.setData({
      audioAction: {
        method: 'setPlaybackRate',
        data: e.detail.value
      }
    })
  },

  playAudio: function (id) {
    wx.createAudioContext('id');
  },
  pauseAudio: function () {
    this.setData({
      audioAction: {
        method: 'pause'
      }
    });
  }
})