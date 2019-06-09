import Taro, { useState } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'

import './index.scss'


function Icon() {
  const {value} = this.props
  const classNames = `icon ${value}`
  return (
    <View className={classNames}>
      
    </View>
  )
}

export default Icon


