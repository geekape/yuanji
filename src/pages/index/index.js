import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text, ScrollView } from '@tarojs/components'
import Head from '../../components/head/head'
import Footer from '../../components/footer/footer'
import Card from '../../components/card/card'
import Bg from '../../assets/img/bg.png'


import './index.scss'



export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {

    return (
      <View className='index'>
        <Image className='index-bg' src={Bg} />
        <Head>
          <Text className='text title'>嘿，猿梦</Text>
          <Text className='text sub-title'>今天做点什么</Text>
        </Head>

        <View className='container'>

          {/* 卡片 */}
          <ScrollView
            className='scrollview-card'
            scrollX
          >

            {
              [1, 2, 3].map(item => {
                return (
                    <Card />
                )
              })
            }
          </ScrollView>

        </View>

        <Footer />
      </View>
    )
  }
}
