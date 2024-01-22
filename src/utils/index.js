import * as Validators from "./validators";
import * as Regex from "./regex";

function scrollToTop() {
  window.scroll({ top: 0, behavior: "smooth" });
}

export { Validators, Regex, scrollToTop };
