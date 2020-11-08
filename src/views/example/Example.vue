<template>
  <div>
    <h2>Example</h2>
    <Child :name="name" />
    <v-text-field v-model="input" />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import Child from "./Child.vue";

@Component({
  components: {
    Child
  }
})
export default class Example extends Vue {
  private name: string = "Minseop Kim";
  private input: string = "Default";

  @Watch("input")
  private watchTest(val: string, oldVal: string) {
    console.log(val);
    console.log(oldVal);
  }
}
</script>
