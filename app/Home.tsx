import React from 'react'
import { SafeAreaView, Text, StyleSheet } from 'react-native'
import { fonts } from './modules/constants'

type Props = {}

function Home(props: Props) {
  return (
    <SafeAreaView>
      <Text style={styles.text}>Home</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  text: {
    fontFamily: fonts.BOLD,
  },
})
export default Home
