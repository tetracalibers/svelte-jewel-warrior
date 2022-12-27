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
    padding-top: 100px;
  }
  .logo {
    font-family: 'Slackey';
    font-size: 60px;
    line-height: 60px;
    margin: 0;
    text-align: center;
    color: rgb(70, 120, 20);
    text-shadow: 1px 1px 2px rgb(255, 255, 0), -1px -1px 2px rgb(255, 255, 0),
      5px 8px 8px rgb(0, 0, 0);
  }
  .continue-button {
    appearance: none;
    border: 0;
    background: inherit;
    font-family: inherit;
    color: inherit;
    cursor: pointer;
    font-size: 30px;
  }
</style>
