
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
    const cols = this.$slots.default.map(item => {
      if (item.tag) {
        return <el-col span={this.colSpan}>{item}</el-col>
      }
      return item
    })
    return <el-row gutter={30}>{cols}</el-row>
  },
}
</script>
