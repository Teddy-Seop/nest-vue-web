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

  private async mounted() {
    const arr = Array(10).fill(1);
    arr.forEach(async (item) => {
      await setTimeout(() => {
        console.log(item);
      }, 100);
    });

    // for (const item of arr) {
    //   // this.test();
    //   await setTimeout(() => {
    //     console.log(item);
    //   }, 100);
    // }
    console.log('done');
  }

  @Watch("input")
  private watchTest(val: string, oldVal: string) {
    console.log(val);
    console.log(oldVal);
  }
}
</script>
