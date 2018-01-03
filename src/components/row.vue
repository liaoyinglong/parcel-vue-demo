
<script>
export default {
  computed: {
    colSpan() {
      let defaultSlots = this.$slots.default
      const slotNum = defaultSlots.reduce((count, vnode) => (vnode.tag ? ++count : count), 0)
      return Math.floor(24 / slotNum)
    },
  },
  render(h) {
    return <div>2222</div>
  },
}
</script>
