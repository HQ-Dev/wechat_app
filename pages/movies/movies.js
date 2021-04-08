// pages/movies/movies.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 正在上映的电影
    inTheaters:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://t.talelin.com/v2/movie/in_theaters?start=0&count=3',
      // 使用剪头函数，下面的 this.setData 中的 this 可以正常获取，不然会报错误：cannot read property
      // 'setData' of undefined
      success : (res)=> {
        console.log(res)
        this.setData({
          inTheaters:res.data.subjects
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