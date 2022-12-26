import { createApp } from "vue";
import { createStore } from "vuex";
import App from "/src/App.vue";

const store = createStore({
  state: {
    b: 17,
    count: 4,
    favorites: []
  },
  getters: {
    fullName: function (state) {
      return `${state.count}`
    }
  },
  mutations: {
    changebMut(state) {
      console.log("b before: ", state.b);
      state.b++;  
      console.log("b after: ", state.b);
    },
    increment (state) {
      console.log(state.count)
      state.count++
      // this.$set(state, 'count', 3)
      console.log(state.count)
      console.log(state)
    },
    UPDATE_FAVORITES(state) {
      state.count = 11
    }
  },
  actions: {
    addToFavorites(context) {
      context.commit('increment')
    }
  }
});

const app = createApp({ App });

app.use(store);

export default store;