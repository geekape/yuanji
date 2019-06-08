import Taro, { useState } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'

import './index.scss'

function Head() {

  const { titleText } = this.props
  return (
    <View className='head'>
      <View className='head-box'>
          <Image className='head-img' src='//img1.imgtn.bdimg.com/it/u=1937445174,2133528823&fm=26&gp=0.jpg' />
        <View className='icon-Data'></View>
      </View>

      <View className='head-text'>
        {titleText}
      </View>
    </View>
  )
}

export default Head


