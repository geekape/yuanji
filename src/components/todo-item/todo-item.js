import Taro, { useState } from '@tarojs/taro'
import { View, Label, Checkbox, Text } from '@tarojs/components'

import './index.scss'


function TodoItem() {

  const {value, checked} = this.props
  return (
    <View className='todo-item ym-row'>
      <View className='ym-row ym-row__direction--column'>
        <Label className='ym-row ym-row__align--center'>
          <Checkbox value={value} checked={checked} />
          <Text className='todo-item__title'>查看Vue官方文档</Text>
        </Label>
        <Text className='todo-item__time'>10:00</Text>
      </View>
    </View>
  )
}

export default TodoItem


