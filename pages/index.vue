<template>
  <v-layout :column="$vuetify.breakpoint.xsOnly" justify-center align-center>
    <v-flex xs12 sm8 md10>
      <NuxtLink to="/articles">
        記事へ
      </NuxtLink>
    </v-flex>
    <!-- タブレット以上のサイドバー -->
    <v-flex xs12 sm4 md2>
      <h3>World</h3>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  components: {}
}
</script>
