// pages/more-movie/more-movie.js

const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies:[],
    _movieType:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const movieType = options.type;
    this.data._movieType = movieType;
    wx.request({
      url: app.commonUrl + movieType,
      data:{
        start:0,
        count:11
      },
      success : (res)=> {
        this.setData({
          movies:res.data.subjects
        })
        wx.hideNavigationBarLoading();
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
    // wx.showNavigationBarLoading({
    //   success: (res) => {},
    // }),

    // 根据选择的电影类型显示不同的 barTitle
    let barTitle = "电影"
    switch(this.data._movieType) {
      case 'in_theaters':
        barTitle = "正在热映"
        break
      case 'coming_soon':
        barTitle = "即将上映"
        break 
      case 'top250':
        barTitle = "豆瓣top250"
        break
    }
    wx.setNavigationBarTitle({
      title: barTitle,
    })
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
    wx.showNavigationBarLoading();
    wx.request({
      url: app.commonUrl + this.data._movieType,
      data : {
        start:0,
        count:12
      },
      success:(res)=> {
        this.setData({
          movies:res.data.subjects
        })
        wx.hideNavigationBarLoading();
        wx.stopPullDownRefresh();
      }
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    wx.showNavigationBarLoading();
    wx.request({
      url: app.commonUrl + this.data._movieType,
      data:{
        start:this.data.movies.length,
        count:12
      },
      success : (res)=> {
        this.setData({
          movies:this.data.movies.concat(res.data.subjects)
        })
        wx.hideNavigationBarLoading();
      }
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})