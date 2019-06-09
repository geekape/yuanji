import Taro, { useState } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import TodoItem from '../todo-item/todo-item'

import './index.scss'


function Card() {

  return (
    <View className='card'>
      <View className='card-head'>
        <Text className='card-head__title'>React学习</Text>
        <Text className='card-head__view'>View all</Text>
      </View>
      <View className='card-body'>
        <TodoItem />
      </View>
    </View>
  )
}

export default Card


