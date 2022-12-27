<script>
  import GameScreen from './screens/game-screen.svelte'
  import HighScores from './screens/high-scores.svelte'
  import MainMenu from './screens/main-menu.svelte'
  import SplashScreen from './screens/splash-screen.svelte'
</script>

<div class="z-stack-screens game">
  <SplashScreen active={true} />
  <MainMenu />
  <GameScreen />
  <HighScores />
</div>

<style>
  .game {
    font-family: 'Geo';
    color: rgb(200, 200, 100);
    background-color: rgb(30, 30, 30);
  }

  .z-stack-screens {
    position: absolute;
    inset: 0;
    width: 320px;
    height: 480px;
  }
</style>
