import Vue from "vue";
import Component from "vue-class-component";
import { Validate } from "vuelidate-property-decorators";
import { required, email } from "vuelidate/lib/validators";
import gql from "graphql-tag";
import { ILoginUser } from "./type/login.interface";

@Component
export default class Login extends Vue {
  @Validate({ required, email })
  private email = "";

  @Validate({ required })
  private password = "";

  private async submit() {
    if (this.$v.$invalid === false) {
      const response = await this.$apollo.query({
        query: gql`
          query($user: UserLoginInputType!) {
            login(user: $user) {
              accessToken
              userId
              email
              name
            }
          }
        `,
        variables: {
          user: {
            email: this.email,
            password: this.password
          }
        }
      });

      if (response.data.login.accessToken === "fail") {
        alert("login fail");
      } else {
        localStorage.setItem("userId", response.data.login.userId);
        Vue.$cookies.set("access_token", response.data.login.accessToken, "1h");

        const user: ILoginUser = {
          id: response.data.login.userId,
          email: response.data.login.email,
          name: response.data.login.name,
          accessToken: response.data.login.accessToken
        };

        this.$store.dispatch("login", user);
        this.$router.push("main");
      }
    }
  }

  private signup() {
    console.log("signup");
    this.$router.push("/signup");
  }

  private valdateEmail() {
    const error: string[] = [];
    if (!this.$v.email.required) {
      error.push("Email is required");
    } else if (!this.$v.email.email) {
      error.push("Format should be email");
    }
    return error;
  }

  private validatePassword() {
    const error: string[] = [];
    if (!this.$v.password.required) {
      error.push("Password is required");
    }
    return error;
  }
}
