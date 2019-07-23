import humps from 'humps'
export default function({ $axios }) {
  $axios.onRequest((config) => {
    console.log('Making request to ' + JSON.stringify(config))
  })
  $axios.onResponse((response) => {
    response.data = humps.camelizeKeys(response.data)
  })
}
