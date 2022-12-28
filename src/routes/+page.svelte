<script>
  import JewelWarriorGame from '@/features/jewel-warrior/jewel-warrior-game.svelte'
</script>

<svelte:head>
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="black" />
  <title>Jewel Warrior</title>
</svelte:head>

<JewelWarriorGame />

<style>
  :global(body) {
    user-select: none;
    text-size-adjust: none; /** テキストサイズ自動調整無効化 */
  }
</style>
