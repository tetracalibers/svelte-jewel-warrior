import { writable } from 'svelte/store'

export type ScreenNames = 'splash-screen' | 'main-menu' | 'game-screen' | 'high-scores'

const createActiveScreenSwitch = () => {
  const { subscribe, set } = writable<ScreenNames>('splash-screen')

  return {
    subscribe,
    toSplashScreen: () => set('splash-screen'),
    toMainMenu: () => set('main-menu'),
    toGameScreen: () => set('game-screen'),
    toHighScores: () => set('high-scores')
  }
}

export const activeScreen = createActiveScreenSwitch()
