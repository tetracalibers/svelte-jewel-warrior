<script lang="ts">
  export let active: boolean
</script>

<div class:active class="screen">
  <slot />
</div>

<style>
  .screen {
    display: none;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 10;
  }

  .screen.active {
    display: contents;
  }
</style>
