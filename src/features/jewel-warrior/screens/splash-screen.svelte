<script>
  export let active = false
</script>

<div class:active class="screen" />

<style>
  .screen {
    display: none;
  }

  .screen.active {
    display: block;
  }
</style>
