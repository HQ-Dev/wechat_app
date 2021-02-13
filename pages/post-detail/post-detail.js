// pages/post-detail/post-detail.js

import {postList} from "../../data/data"
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    postData:{},
    _pid:null
  },


  /**
   * 生命周期函数--监听页面加载
   */
   onLoad: async function (options) {
    const postData = postList[options.pid]
    this.data._pid = options.pid
    this.setData({postData})
    console.log(app.test)

    wx.setStorageSync('flag', 2)
    const flag = await wx.getStorage({
      key: 'flag',
    })
    console.log(flag)
  },

  onCollected(event) {
    const status = {}
    status[this.data._pid]  = true
    wx.setStorageSync('posts_collected', status)
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