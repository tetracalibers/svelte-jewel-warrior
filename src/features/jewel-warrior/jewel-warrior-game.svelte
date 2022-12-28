<script lang="ts">
  import GameScreen from './screens/game-screen.svelte'
  import HighScores from './screens/high-scores.svelte'
  import MainMenu from './screens/main-menu.svelte'
  import SplashScreen from './screens/splash-screen.svelte'
</script>

<div class="z-stack-screens game-root">
  <SplashScreen />
  <MainMenu />
  <GameScreen />
  <HighScores />
</div>

<style>
  .game-root {
    font-family: 'Geo';
    font-size: 40px;
    width: 8em;
    height: 12em;
    color: rgb(200, 200, 100);
    background-color: rgb(30, 30, 30);
  }

  .z-stack-screens {
    position: absolute;
    inset: 0;
  }
</style>
