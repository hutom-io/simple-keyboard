import Keyboard from "../lib";
import "./css/BasicDemo.css";
import Hangul from "hangul-js";

const setDOM = () => {
  document.querySelector("#root").innerHTML = `
    <input class="input" placeholder="Tap on the virtual keyboard to start" />
    <div class="simple-keyboard"></div>
  `;
};

let buttonArray = [];
let inputKorean = "";

class Demo {
  constructor() {
    setDOM();

    /**
     * Demo Start
     */
    this.keyboard = new Keyboard({
      onChange: input => this.onChange(input),
      onKeyPress: button => this.onKeyPress(button)
    });

    /**
     * Update simple-keyboard when input is changed directly
     */
    document.querySelector(".input").addEventListener("input", event => {
      this.keyboard.setInput(event.target.value);
    });
  }

  onChange(input) {
    document.querySelector(".input").value = inputKorean;
    console.log("Input changed", input);
  }

  onKeyPress(button) {
    console.log("Button pressed", button);
    if (
      button !== "{shift}" &&
      button !== "{language}" &&
      button !== "{enter}" &&
      button !== "{tab}" &&
      button !== "{bksp}" &&
      button !== "{space}"
    ) {
      buttonArray.push(button);
    }
    if (button === "{bksp}") {
      buttonArray.pop();
    }
    inputKorean = Hangul.assemble(buttonArray);

    /**
     * If you want to handle the shift and caps lock buttons
     */
    if (button === "{shift}") this.handleShift();
    if (button === "{language}") this.handleLanguage();
  }

  handleShift() {
    const currentLayout = this.keyboard.options.layoutName;
    const shiftToggle = currentLayout === "default" ? "shift" : "default";

    this.keyboard.setOptions({
      layoutName: shiftToggle
    });

    console.log(this.keyboard.options);
  }

  handleLanguage() {
    console.log("here");
    const currentLanguage = this.keyboard.options.language;
    const languageToggle =
      currentLanguage === "default" ? "english" : "default";

    this.keyboard.setOptions({
      language: languageToggle
    });

    console.log(this.keyboard.options);
  }
}

export default Demo;
