<script lang="ts">
  import Logo from '../components/logo.svelte'
  import Screen from './base/screen.svelte'
  import { activeScreen } from './base/screen.store'

  interface MenuItem {
    label: string
    onClick: () => void
  }

  const menuitems: MenuItem[] = [
    {
      label: 'Play',
      onClick: () => console.log('play')
    },
    {
      label: 'Highscore',
      onClick: () => console.log('highscore')
    },
    {
      label: 'About',
      onClick: () => console.log('about')
    },
    {
      label: 'Exit',
      onClick: () => console.log('exit')
    }
  ]
</script>

<Screen active={$activeScreen === 'main-menu'}>
  <section class="screen-content">
    <Logo headingLevel={2} />
    <ul class="menu">
      {#each menuitems as { label, onClick }}
        <li class="menuitem">
          <button type="button" on:click={onClick} class="action-button">{label}</button>
        </li>
      {/each}
    </ul>
  </section>
</Screen>

<style>
  .screen-content {
    padding-top: 1em;
  }
  .menu {
    text-align: center;
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .menuitem {
    margin: 0.8em 0;
  }
  .action-button {
    font-family: 'Slackey', sans-serif;
    font-size: 0.6em;
    color: rgb(100, 120, 0);
    width: 10em;
    height: 1.5em;
    background: rgb(10, 20, 0);
    border: 0.1em solid rgb(255, 255, 0);
    border-radius: 0.5em;
    box-shadow: 0.2em 0.2em 0.3em rgb(0, 0, 0);
  }

  .action-button:hover {
    background: rgb(30, 40, 0);
  }

  .action-button:active {
    color: rgb(255, 255, 0);
    background: rgb(30, 40, 0);
  }

  /** 横長 */
  @media (orientation: landscape) {
    .screen-content {
      font-size: 1em;
      padding-top: 7.5em;
    }
    .menuitem {
      display: inline-block;
      margin: 0;
    }
    .action-button {
      margin: 0.5em;
      font-size: 0.5em;
    }

    /** 小さい画面 */
    @media (max-device-width: 480px) {
      .action-button {
        font-size: 0.4em;
      }
    }

    /** タブレット */
    @media (min-device-width: 768px) {
      .screen-content {
        padding-top: 1.5em;
      }
    }
  }
</style>
