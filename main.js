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
    charsRemaining: function () {
      return this.maxChars - this.newTweet.length;
    }
  },
  methods: {
    showmodal() {
      this.showModal = true;
      // this.$nextTick()
      document.getElementsByClassName('textarea').focus();
    },
  }
});