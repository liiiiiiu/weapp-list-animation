/**
 * 使用 wx.createAnimation 生成列表动画
 *
 * @param {number} count 列表长度
 * @param {Object} stepOption 动画相关
 * @param {number} direction 列表方向 `vertical` 或者 `horizontal`
 * 
 * @returns 返回动画数组
 */
const createListAnimation = (
  count,
  stepOption,
  direction='vertical') => {
  let animations = Array.from({ length: count }, () => '')
  let i = 0

  while (i < count) {
    const animation = wx.createAnimation({
      duration: (stepOption && stepOption.duration) || 300,
      timingFunction: (stepOption && stepOption.timingFunction) || 'ease',
      delay: i * ((stepOption && stepOption.delay) || 100)
    })
    direction === 'vertical'
      ? animation.translateY(0).opacity(1).step()
      : animation.translateX(0).opacity(1).step()
    animations[i] = animation.export()

    i += 1
  }

  return animations
}

Page({
  data: {
    // 展示垂直方向列表动画
    verticalLists: [],
    verticalAnimations: [],

    // 展示水平方向列表动画
    horizontalLists: [],
    horizontalAnimations: [],
  },

  showAnimation() {
    // 先重置列表数据
    this.setData({
      verticalLists: [],
      verticalAnimations: [],
  
      horizontalLists: [],
      horizontalAnimations: [],
    }, () => {
      // 再给列表加几条假数据
      this.setData({
        verticalLists: [,,,,,,],
        horizontalLists: [,,,,]
      }, () => {
        // 在列表数据 `setData` 之后渲染列表动画
        this.setData({
          verticalAnimations: createListAnimation(6),
          horizontalAnimations: createListAnimation(4, undefined, 'horizontal')
        })
      })
    })
  }
})
