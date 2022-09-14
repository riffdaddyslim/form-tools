const fs = require("fs")

const COUNTRIES = require("./countries.json")
const PHONE_CODES = require("./phoneCodes.json")


const NEW_DATA = []
for (let country of COUNTRIES) {
    country.phoneCode = PHONE_CODES.find(item => item.code == country.code)?.dial_code ?? null
    NEW_DATA.push(country)
}

fs.writeFileSync("./newData.json", JSON.stringify(NEW_DATA))