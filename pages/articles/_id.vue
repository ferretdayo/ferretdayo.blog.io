<template>
  <v-layout :column="$vuetify.breakpoint.xsOnly" justify-center align-center>
    <v-flex xs12 sm8 md10>
      <article v-html="$md.render(article.content)" />
    </v-flex>
    <!-- タブレット以上のサイドバー -->
    <v-flex xs12 sm4 md2>
      <h3>World</h3>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  components: {},
  async asyncData({ app, params }) {
    const response = await app.$axios.get(
      `${process.env.HEADLESS_CMS_ENDPOINT}/articles/${params.id}`
    )
    return { article: response.data }
  }
}
</script>

<style lang="scss" scoped>
article {
  line-height: 2;
  letter-spacing: 1.3px;
  /deep/ {
    code[class^='language-'] {
      width: 100%;
      padding: 6px 14px;
      margin: 10px 0;
      background-color: #e7e7e7;
    }
    code:not([class^='language-']) {
      background-color: inherit;
      color: rgb(255, 95, 95);
      margin: 0 2px;
    }
    img {
      width: 100%;
    }
  }
}
</style>
