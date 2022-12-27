<script>
  import GameScreen from './screens/game-screen.svelte'
  import HighScores from './screens/high-scores.svelte'
  import MainMenu from './screens/main-menu.svelte'
  import SplashScreen from './screens/splash-screen.svelte'
</script>

<div class="z-stack-screens">
  <SplashScreen active={true} />
  <MainMenu />
  <GameScreen />
  <HighScores />
</div>

<style>
  .z-stack-screens {
    position: absolute;
    inset: 0;
    width: 320px;
    height: 480px;
    background-color: rgb(30, 30, 30);
  }

  .z-stack-screens :global(> *) {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 10;
  }
</style>
