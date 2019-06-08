import Taro, { Component, useState } from '@tarojs/taro'
import { View, Text, Checkbox } from '@tarojs/components'
import './index.scss'

function TodoItem (test) {
  console.log(test)
  const [value] = useState(123)
  return (
    <View className='todo-item'>

    </View>
  )
}

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <TodoItem test={1} />
      </View>
    )
  }
}
