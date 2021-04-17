// components/post/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    res:Object,
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    ontap(event) {
      console.log(this.properties.res)
      const pid = event.currentTarget.dataset.id;
      this.triggerEvent('posttap',{
        pid,
      });
      // const pid = event.currentTarget.dataset.id;
      // wx.navigateTo({
      //   url: '/pages/post-detail/post-detail?pid='+pid
      // })
    },
  }
})
