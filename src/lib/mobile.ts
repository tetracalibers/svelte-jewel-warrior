export const disableOverScroll = () => {
  document.addEventListener('touchmove', () => {}, { passive: false })
}
