import {dias}from "./dias"
import {registro} from "./decoradores"

@registro
class App {
  cadena=""
  constructor(){
    console.log("hola mundo",dias)
  }
  mensaje(){
    this.cadena="23"

  }
}
new App();