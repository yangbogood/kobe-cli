import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("User", ["getNewsResponse"])
  },
  methods: {
    ...mapActions("User", ["USER_LIST"])
  }
};
