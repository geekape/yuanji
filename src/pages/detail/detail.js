import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text, ScrollView } from '@tarojs/components'
import Head from '../../components/head/head'
import Footer from '../../components/footer/footer'
import TodoItem from '../../components/todo-item/todo-item'
import EditPopup from '../../components/edit-popup/edit-popup'


import './index.scss'



export default class Detail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list: Array(10).fill(
        {
          isDone: true, //是否完成
          title: '去银行办卡', //todo事项
          time: '18:00', //时间
        }
      ),
      isShow: false
    }
  }


  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    let { list, isShow } = this.state
    return (
      <View className='detail'>
        <Head></Head>

        <ScrollView scrollY className='container'>
          <View className='ym-row ym-row__direction--column'>
            <Text className='text title'>React学习</Text>
            <Text className='text sub-title'>11月11日</Text>
          </View>

          <View className='todo-list'>
            {
              list.map(item => (
                <TodoItem value={item.title} time={item.time} checked={item.isDone} key={item.title} />
              ))
            }
          </View>
        </ScrollView>

        <Footer />

        <EditPopup show={isShow} />
      </View>
    )
  }
}
