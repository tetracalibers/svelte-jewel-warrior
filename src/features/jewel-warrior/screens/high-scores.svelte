<script>
  import Screen from './screen.svelte'
  import { activeScreen } from './screen.store'
</script>

<Screen active={$activeScreen === 'high-scores'} />
