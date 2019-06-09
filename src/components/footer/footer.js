import Taro, { useState } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import PicBtn from '../../assets/img/pic-add.png'
import MIcon from '../m-icon/m-icon'

import './index.scss'


function Footer() {

  return (
    <View className='footer ym-row--center'>
      <MIcon value='icon-home' />
      <Image className='add-btn' src={PicBtn} />
      <MIcon value='icon-person' />
    </View>
  )
}

export default Footer


