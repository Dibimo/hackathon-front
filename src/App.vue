<script lang="ts">
import { useQuasar } from 'quasar';
import { defineComponent } from 'vue';


export default defineComponent({
  data () {
    
    return {
      message: 'Hello World!',
      name: null,
      age: null,
      accept: null
      
    }
  },
  methods: {
    teste(){
      this
    }
  },
  setup(){
    const $q = useQuasar();
    function alertCustom () {
      $q.dialog({
        title: 'Alert',
        message: 'Vitin é brabo demais',
      })

    }
    return { alertCustom }
  }
})
</script>

<template>
  <div>
    <!-- <q-form
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="name"
        label="Your name *"
        hint="Name and surname"
        lazy-rules
      />

      <q-input
        filled
        type="number"
        v-model="age"
        label="Your age *"
        lazy-rules
      />

      <q-toggle v-model="accept" label="I accept the license and terms" />

      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form> -->
    <div @click="alertCustom">teste</div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
