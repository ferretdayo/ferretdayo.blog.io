<template>
  <v-layout :column="$vuetify.breakpoint.xsOnly" justify-center align-center>
    <v-flex xs12 sm8 md10>
      {{ article }}
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
