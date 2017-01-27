<template>
  <div class="page-with-padding">
    <wv-button type="default" @click.native="showPopup">显示弹出层</wv-button>

    <wv-picker :visible="pickerVisible" :slots="slots"></wv-picker>
  </div>
</template>

<script type="text/babel">
export default {
  data () {
    return {
      pickerVisible: true,
      slots: [
        {
          values: [
            '汽车票',
            '飞机票',
            '火车票',
            '轮船票',
            '其它'
          ],
          valueIndex: 1
        }
      ]
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
