import FormTools from "./FormTools.js";

const FORM = document.querySelector("form")

const FORM_TOOLS = new FormTools(FORM)
FORM_TOOLS.format().buildSelects()

FORM.addEventListener("submit", e => {
    e.preventDefault()
    const RESPONSE = FORM_TOOLS.validate()
    console.log(RESPONSE.valid)
    for (let pair of RESPONSE.data.entries()) {
        console.log(`${pair[0]} - ${pair[1]}`)
    }
})