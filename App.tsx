import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import 'react-native-gesture-handler'
import { view } from '@risingstack/react-easy-state'

import Game from './app/screens/game/Game'
import Home from './app/Home'

require('react-native').unstable_enableLogBox()
const Stack = createStackNavigator()

function GameStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Game" component={Game} />
    </Stack.Navigator>
  )
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Settings" component={GameStack} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default view(App)
