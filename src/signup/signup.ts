import Vue from "vue";
import Component from "vue-class-component";
import gql from "graphql-tag";
import { Validations } from "vuelidate-property-decorators";
import { ISignupInfo } from "./signup.interface";
import { email, minLength, required } from "vuelidate/lib/validators";

@Component
export default class Signup extends Vue {
  private passwordCheck: string = "";
  private signupInfo: ISignupInfo = {
    email: "",
    password: "",
    name: ""
  };

  @Validations()
  validations = {
    signupInfo: {
      email: { required, email },
      password: { required, minLength: minLength(4) },
      name: { required }
    },
    passwordCheck: { required, minLength: minLength(4) }
  };

  private async signup() {
    await this.$apollo.mutate({
      mutation: gql`
        mutation($signupInfo: SaveUserInputType!) {
          saveUser(user: $signupInfo)
        }
      `,
      variables: {
        signupInfo: this.signupInfo
      }
    });

    alert("Signup Success");

    this.$router.push("/");
  }

  private emailFormatValidation() {
    const error: string[] = [];
    if (!this.$v.signupInfo.email?.required) {
      error.push("Email is required");
    }

    if (!this.$v.signupInfo.email?.email) {
      error.push("Format should be email");
    }

    return error;
  }

  private passwordFormatValidation() {
    const error: string[] = [];

    if (!this.$v.signupInfo.password?.required) {
      error.push("Password is required");
    }

    if (!this.$v.signupInfo.password?.minLength) {
      error.push("Password must be at least 4 characters");
    }

    if (this.signupInfo.password !== this.passwordCheck) {
      error.push("Password do not match");
    }

    return error;
  }

  private passwordCheckFormatValidation() {
    const error: string[] = [];

    if (!this.$v.passwordCheck?.required) {
      error.push("Password is required");
    }

    if (!this.$v.passwordCheck?.minLength) {
      error.push("Password must be at least 4 characters");
    }

    if (this.signupInfo.password !== this.passwordCheck) {
      error.push("Password do not match");
    }

    return error;
  }

  private nameFormatValidation() {
    const error: string[] = [];

    if (!this.$v.signupInfo.name?.required) {
      error.push("Name is required");
    }

    return error;
  }
}
