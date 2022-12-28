<script>
  import Logo from '../components/logo.svelte'
  import Screen from './base/screen.svelte'
  import { activeScreen } from './base/screen.store'
</script>

<Screen active={$activeScreen === 'splash-screen'}>
  <section class="screen-content">
    <Logo headingLevel={1} />
    <button type="button" class="continue-button" on:click={activeScreen.toMainMenu}>
      Click to continue
    </button>
  </section>
</Screen>

<style>
  .screen-content {
    text-align: center;
    padding-top: 2.5em;
  }
  .continue-button {
    appearance: none;
    border: 0;
    background: inherit;
    font-family: inherit;
    color: inherit;
    cursor: pointer;
    font-size: 0.75em;
  }

  /** 横長 */
  @media (orientation: landscape) {
    .screen-content {
      font-size: 1em;
      padding-top: 7.5em;
    }

    /** タブレット */
    @media (min-device-width: 768px) {
      .screen-content {
        padding-top: 1.5em;
      }
    }
  }
</style>
