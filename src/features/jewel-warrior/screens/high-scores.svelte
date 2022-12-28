<script>
  import Screen from './base/screen.svelte'
  import { activeScreen } from './base/screen.store'
</script>

<Screen active={$activeScreen === 'high-scores'} />
