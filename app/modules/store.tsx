import { store, autoEffect } from '@risingstack/react-easy-state'
import AsyncStorage from '@react-native-community/async-storage'

export type State = {
  isPlaying: boolean
}

export const state = store<State>({
  isPlaying: false,
})
