import { Component, Vue } from "vue-property-decorator";

@Component
export default class TestMixin extends Vue {
    private name: string = 'Test Mixin'
    
    private mounted(): void {
        console.log(`${this.name}`);
    }
}