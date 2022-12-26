<template>
  <div>
    <div id="app">
        {{ $store.getters.fullName }}
        <button @click="$store.dispatch('addToFavorites')">+</button>
    </div>
    <toggle-input-outline/>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import ToggleInputOutline from '../components/Shop-Components/All-Inputs/Toggle-Input-Outline.vue';
export default {
  components: { ToggleInputOutline },
  name: "PlannerCdsadsaoset",

  computed: {
    count() {
      return this.$store.state.count;
    },
  },
  methods: mapMutations([
      'increment',
      'incrementBy'
  ]),
  data() {
    return {
      c: this.$store.state.count
    }
  },
}
</script>
