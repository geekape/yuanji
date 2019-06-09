import Taro, { useState } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import MIcon from '../m-icon/m-icon'

import './index.scss'


function Head() {

  const { children } = this.props
  return (
    <View className='head'>
      <View className='ym-row ym-row__align--center ym-row__justify--between'>
        <Image className='head-img' src='//img1.imgtn.bdimg.com/it/u=1937445174,2133528823&fm=26&gp=0.jpg' />
        <MIcon value='icon-data' />
      </View>

      <View className='head-text'>
        {children}
      </View>

    </View>
  )
}

export default Head


