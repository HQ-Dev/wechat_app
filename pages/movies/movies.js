// pages/movies/movies.js

const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 正在上映的电影
    inTheaters:[],
    comingSoon:[],
    top250:[],
    searchResult:false,
    searchData:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: app.commonUrl + 'in_theaters',
      // 使用剪头函数，下面的 this.setData 中的 this 可以正常获取，不然会报错误：cannot read property
      // 'setData' of undefined
      data:{
        start:0,
        count:3
      },
      success : (res)=> {
        console.log(res)
        this.setData({
          inTheaters:res.data.subjects
        })
      }
    }),
    wx.request({
      url: app.commonUrl + 'coming_soon?start=0&count=3',
      success : (res)=> {
        console.log(res)
        this.setData({
          comingSoon:res.data.subjects
        })
      }
    }),
    // doMovieRequest(top250)
    wx.request({
      url: app.commonUrl + 'top250?start=0&count=3',
      success : (res)=> {
        console.log(res)
        this.setData({
          top250:res.data.subjects
        })
      }
    })
    
  },

  onGoToMore: function(event) {
    const type = event.currentTarget.dataset.type;
    wx.navigateTo({
      url: '/pages/more-movie/more-movie?type='+type,
    })
  },

  listenConfirm(event) {
    const searchContent = event.detail.value;
    console.log(event)
    wx.request({
      url: app.commonUrl + 'search?q=',
      data: {
        q: searchContent
      },
      success: (res) => {
        console.log(res);
        this.setData({
          searchResult:true,
          searchData:res.data.subjects
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})