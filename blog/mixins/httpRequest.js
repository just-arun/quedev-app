export default {
  methods: {
    async HttpServerRequest(method, path, data) {
      const initAxios = () => {
        if (data) {
          return {
            method,
            url: `${this.$store.state.config.PORT}${path}`,
            data
          };
        } else {
          return {
            method,
            url: `${this.$store.state.config.PORT}${path}`
          };
        }
      };
      return this.$axios(initAxios(), { withCredentials: true })
        .then(res => {
          return res;
        })
        .catch(err => {
          console.log("ERROR", err.response.statusText);
          this.$notification["error"]({
            message: err.response.statusText,
            description: err.response.data.error.message
          });
          Promise.reject(err);
        });
    }
  }
};
