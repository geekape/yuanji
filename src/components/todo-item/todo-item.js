import Taro, { useState } from '@tarojs/taro'
import { View, Label, Checkbox, Text } from '@tarojs/components'

import './index.scss'


function TodoItem() {

  const {value, checked, time} = this.props
  return (
    <View className='todo-item ym-row'>
      <View className='ym-row ym-row__direction--column'>
        <Label className='ym-row ym-row__align--center'>
          <Checkbox value={value} checked={checked} />
          <Text className={checked ? 'todo-item__title active' : 'todo-item__title'}>{value}</Text>
        </Label>
        <Text className='todo-item__time'>{time}</Text>
      </View>
    </View>
  )
}

export default TodoItem


