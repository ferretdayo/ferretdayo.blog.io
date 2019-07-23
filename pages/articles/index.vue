<template>
  <v-layout :column="$vuetify.breakpoint.xsOnly" justify-center align-center>
    <v-flex xs12 sm8 md10>
      <v-list two-line>
        <template v-for="(article, index) in articles">
          <v-list-tile :key="article.id" :to="'/articles/' + article.id">
            <v-list-tile-content>
              <v-list-tile-title>{{ article.title }}</v-list-tile-title>
              <v-list-tile-sub-title>
                {{ article.metaDescription }}
              </v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-list-tile-action-text>
                {{ article.createdAt | dateFormat }}
              </v-list-tile-action-text>
            </v-list-tile-action>
          </v-list-tile>
          <v-divider
            v-if="index + 1 < articles.length"
            :key="index"
          ></v-divider>
        </template>
      </v-list>
      <!-- {{ item }} -->
    </v-flex>
    <!-- タブレット以上のサイドバー -->
    <v-flex xs12 sm4 md2>
      <h3>World</h3>
    </v-flex>
  </v-layout>
</template>

<script>
import moment from 'moment'
export default {
  components: {},
  filters: {
    dateFormat: function(date) {
      return moment(date).format('YYYY/MM/DD HH:mm:ss')
    }
  },
  async asyncData({ app }) {
    const response = await app.$axios.get(
      `${process.env.HEADLESS_CMS_ENDPOINT}/articles`
    )
    return { articles: response.data }
  }
}
</script>
