<script>
  import Screen from './screen.svelte'

  export let active = false
</script>

<Screen {active}>
  <section class="screen-content">
    <h1 class="logo">Jewel <br />Warrior</h1>
    <button type="button" class="continue-button">Click to continue</button>
  </section>
</Screen>

<style>
  .screen-content {
    text-align: center;
    padding-top: 2.5em;
  }
  .logo {
    font-family: 'Slackey';
    font-size: 1.5em;
    line-height: 0.9em;
    margin: 0;
    text-align: center;
    color: rgb(70, 120, 20);
    text-shadow: 0.03em 0.03em 0.03em rgb(255, 255, 0), -0.03em -0.03em 0.03em rgb(255, 255, 0),
      0.1em 0.15em 0.15em rgb(0, 0, 0);
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
</style>
