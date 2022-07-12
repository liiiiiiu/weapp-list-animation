# Weapp List Animation

**微信小程序列表动画代码片段。**

## 预览

[代码片段](https://developers.weixin.qq.com/s/Lf6nnHmZ7vAL)

## 使用

页面中为每个动画元素添加 `animation` 动画以及初始样式 `vertical-item-origin-animation`。

```html
<view wx:for="{{ verticalLists }}" wx:key="index" animation="{{ verticalAnimations[index] }}" class="vertical-item-origin-animation">
  垂直列表：item{{ index + 1 }}
</view>
```

样式文件中添加初始动画样式。

```css
/* 垂直列表初始动画样式 */
.vertical-item-origin-animation {
  opacity: 0;
  transform: translateY(36px);
}
```

最后按照 `index.js` 中的逻辑进行动画生成及渲染。