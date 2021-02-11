// pages/posts/posts.js

// var postData = require("../../data/data.js")
// console.log(postData)

import {postList} from "../../data/data"
console.log(postList)

Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      console.log("onLoad")
    //   var content = [
    // ]
      this.setData({post:postList});
  },

  onJumpToDetail(event) {

    const pid = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/post-detail/post-detail?pid='+pid
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onReady");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("onShow")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("onHide...切后台...页面隐藏...");
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