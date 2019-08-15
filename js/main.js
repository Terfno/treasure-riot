import * as riot from "riot";
import App from "../tags/app.tag";

const mountApp = riot.component(App);

const app = mountApp(document.getElementById("root"), {
  message: "hello world"
});
