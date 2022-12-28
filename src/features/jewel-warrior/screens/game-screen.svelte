<script>
  import Screen from './screen.svelte'
  import { activeScreen } from './screens.store'
</script>

<Screen active={$activeScreen === 'game-screen'} />
