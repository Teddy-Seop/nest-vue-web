import Vue from "vue";
import Component from "vue-class-component";
import { Validations } from "vuelidate-property-decorators";
import { ISignupInfo } from "./signup.interface";
import { email, minLength, required } from "vuelidate/lib/validators";

@Component
export default class Signup extends Vue {
  private signupInfo: ISignupInfo = {
    email: "",
    password: "",
    passwordCheck: "",
    name: ""
  };

  @Validations()
  validations = {
    signupInfo: {
      email: { required, email },
      password: { required, minLength: minLength(4) },
      passwordCheck: { required, minLength: minLength(4) },
      name: { required }
    }
  };

  private signup() {
    console.log(this.signupInfo);
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

    if (this.signupInfo.password !== this.signupInfo.passwordCheck) {
      error.push("Password do not match");
    }

    return error;
  }

  private passwordCheckFormatValidation() {
    const error: string[] = [];

    if (!this.$v.signupInfo.passwordCheck?.required) {
      error.push("Password is required");
    }

    if (!this.$v.signupInfo.passwordCheck?.minLength) {
      error.push("Password must be at least 4 characters");
    }

    if (this.signupInfo.password !== this.signupInfo.passwordCheck) {
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
