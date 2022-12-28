<script lang="ts">
  export let headingLevel: 1 | 2 | 3 | 4 | 5 | 6 = 1
  const heading = `h${headingLevel}`
</script>

<svelte:element this={heading} class="logo">
  Jewel <br />Warrior
</svelte:element>

<style>
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
</style>
