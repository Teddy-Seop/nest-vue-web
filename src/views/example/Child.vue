<template>
  <div>
    <h3>Child Component</h3>
    <h4>{{ name }}</h4>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Child extends Vue {
  @Prop(String) private name: string;
}
</script>
