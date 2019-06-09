import Taro, { useState, useEffect } from '@tarojs/taro'
import { View, Button, Text, Textarea } from '@tarojs/components'
import MIcon from '../m-icon/m-icon'

import './index.scss'


function EditPopup(props) {
  const { value, setValue } = useState('')

  useEffect(() => {
    console.log(props)
  }, []);

  const { show } = props
  return (
    show &&
    <View className='edit-popup'>
      <MIcon value='icon-close' />

      <Textarea className='edit-textarea' vlaue={value} onInput={setValue} placeholder='Write Tast here' />

      <View className='ym-list'>
        <View className='ym-list__item'>
          <MIcon value='icon-clock' />
          <Text className='ym-list__item-title'>10:00 AM</Text>
        </View>
        <View className='ym-list__item'>
          <MIcon value='icon-tag' />
          <Text className='ym-list__item-title'>React</Text>
        </View>
      </View>

      <Button className='edit-btn'>Add</Button>
    </View>
  )
}

export default EditPopup


