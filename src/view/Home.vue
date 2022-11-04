<template>
  <div>
    home
  </div>
</template>

<script>

export default {
  name: "Home",
  data() {
    return {
      tableData: []
    };
  },
  mounted() {
    this.getHomeData();
  },
  methods: {
    getHomeData() {
      // getData().then(({ data }) => {
      //   this.tableData = data.data.tableData
      // });
    }
  },
  watch: {
    // orderData: function () {
    // }
  }
};
</script>

<style lang="less" scoped>
</style>
