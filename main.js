var app = new Vue({
  el: '#app',
  data: {
    showModal: false,
    tweets: [
      'This is second tweet',
      'This is first tweet',
    ],
    newTweet: '',
    maxChars: 140,
    loading: false
  },
  computed: {
    charactersRemaining: function () {
      return this.maxChars - this.newTweet.length;
    }
  },
  methods: {}
});