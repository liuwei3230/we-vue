<template>
  <div class="page-with-padding">
    <wv-button type="default" @click.native="showPopup">显示弹出层</wv-button>

    <wv-picker :visible="pickerVisible"></wv-picker>
  </div>
</template>

<script type="text/babel">
export default {
  data () {
    return {
      pickerVisible: true
    }
  },

  methods: {
    showPopup () {
      this.pickerVisible = true
    }
  }
}
</script>

<style scoped lang="scss">
  .popup-body {
    display: block;
    overflow: hidden;
    background: white;
  }
</style>
