// ! DATES AND CUSTOM FORMATTING AND VALIDATION PATTERNS

/**
 * @file FormTools.js File for all items related to FormTools class
 * @since 9/14/2022
 * @author Tyler Riffle
 */

class FormTools {
    //#region Static Variables
    /**
     * @memberof FormTools
     * @name KEYS
     * @static
     */
     static KEYS = {
        numbers: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
        letters: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
        action: ["Backspace", "ArrowLeft", "ArrowRight", "Tab"]
    }
    /**
     * @memberof FormTools
     * @name REGEX
     * @static
     */
    static REGEX = {
        email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        phone: /\d{10}/,
        zip: /\d{5}/,
        mi: /[a-zA-Z]{1}/,
        social: /\d{9}/,
        url: /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/
    }

    /**
     * @memberof FormTools
     * @name STATES
     * @description All states with full names and abbreviations
     * @static
     */
    static STATES = [
        {
            "name": "Alabama",
            "abbreviation": "AL"
        },
        {
            "name": "Alaska",
            "abbreviation": "AK"
        },
        {
            "name": "Arizona",
            "abbreviation": "AZ"
        },
        {
            "name": "Arkansas",
            "abbreviation": "AR"
        },
        {
            "name": "California",
            "abbreviation": "CA"
        },
        {
            "name": "Colorado",
            "abbreviation": "CO"
        },
        {
            "name": "Connecticut",
            "abbreviation": "CT"
        },
        {
            "name": "Delaware",
            "abbreviation": "DE"
        },
        {
            "name": "Florida",
            "abbreviation": "FL"
        },
        {
            "name": "Georgia",
            "abbreviation": "GA"
        },
        {
            "name": "Hawaii",
            "abbreviation": "HI"
        },
        {
            "name": "Idaho",
            "abbreviation": "ID"
        },
        {
            "name": "Illinois",
            "abbreviation": "IL"
        },
        {
            "name": "Indiana",
            "abbreviation": "IN"
        },
        {
            "name": "Iowa",
            "abbreviation": "IA"
        },
        {
            "name": "Kansas",
            "abbreviation": "KS"
        },
        {
            "name": "Kentucky",
            "abbreviation": "KY"
        },
        {
            "name": "Louisiana",
            "abbreviation": "LA"
        },
        {
            "name": "Maine",
            "abbreviation": "ME"
        },
        {
            "name": "Maryland",
            "abbreviation": "MD"
        },
        {
            "name": "Massachusetts",
            "abbreviation": "MA"
        },
        {
            "name": "Michigan",
            "abbreviation": "MI"
        },
        {
            "name": "Minnesota",
            "abbreviation": "MN"
        },
        {
            "name": "Mississippi",
            "abbreviation": "MS"
        },
        {
            "name": "Missouri",
            "abbreviation": "MO"
        },
        {
            "name": "Montana",
            "abbreviation": "MT"
        },
        {
            "name": "Nebraska",
            "abbreviation": "NE"
        },
        {
            "name": "Nevada",
            "abbreviation": "NV"
        },
        {
            "name": "New Hampshire",
            "abbreviation": "NH"
        },
        {
            "name": "New Jersey",
            "abbreviation": "NJ"
        },
        {
            "name": "New Mexico",
            "abbreviation": "NM"
        },
        {
            "name": "New York",
            "abbreviation": "NY"
        },
        {
            "name": "North Carolina",
            "abbreviation": "NC"
        },
        {
            "name": "North Dakota",
            "abbreviation": "ND"
        },
        {
            "name": "Ohio",
            "abbreviation": "OH"
        },
        {
            "name": "Oklahoma",
            "abbreviation": "OK"
        },
        {
            "name": "Oregon",
            "abbreviation": "OR"
        },
        {
            "name": "Pennsylvania",
            "abbreviation": "PA"
        },
        {
            "name": "Rhode Island",
            "abbreviation": "RI"
        },
        {
            "name": "South Carolina",
            "abbreviation": "SC"
        },
        {
            "name": "South Dakota",
            "abbreviation": "SD"
        },
        {
            "name": "Tennessee",
            "abbreviation": "TN"
        },
        {
            "name": "Texas",
            "abbreviation": "TX"
        },
        {
            "name": "Utah",
            "abbreviation": "UT"
        },
        {
            "name": "Vermont",
            "abbreviation": "VT"
        },
        {
            "name": "Virginia",
            "abbreviation": "VA"
        },
        {
            "name": "Washington",
            "abbreviation": "WA"
        },
        {
            "name": "West Virginia",
            "abbreviation": "WV"
        },
        {
            "name": "Wisconsin",
            "abbreviation": "WI"
        },
        {
            "name": "Wyoming",
            "abbreviation": "WY"
        }
    ]

    /**
     * @memberof FormTools
     * @name COUNTRIES
     * @description All simple ISO 3166 country data including: 2-character, 3-character, full country name, phone code, and numeric code. Sorted alphabetical by country name (special characters on bottom)
     * @static
     */
    static COUNTRIES = [
        {
            "code": "AF",
            "code3": "AFG",
            "name": "Afghanistan",
            "number": "004",
            "phoneCode": "+93"
        },
        {
            "code": "AL",
            "code3": "ALB",
            "name": "Albania",
            "number": "008",
            "phoneCode": "+355"
        },
        {
            "code": "DZ",
            "code3": "DZA",
            "name": "Algeria",
            "number": "012",
            "phoneCode": "+213"
        },
        {
            "code": "AS",
            "code3": "ASM",
            "name": "American Samoa",
            "number": "016",
            "phoneCode": "+1684"
        },
        {
            "code": "AD",
            "code3": "AND",
            "name": "Andorra",
            "number": "020",
            "phoneCode": "+376"
        },
        {
            "code": "AO",
            "code3": "AGO",
            "name": "Angola",
            "number": "024",
            "phoneCode": "+244"
        },
        {
            "code": "AI",
            "code3": "AIA",
            "name": "Anguilla",
            "number": "660",
            "phoneCode": "+1264"
        },
        {
            "code": "AQ",
            "code3": "ATA",
            "name": "Antarctica",
            "number": "010",
            "phoneCode": "+672"
        },
        {
            "code": "AG",
            "code3": "ATG",
            "name": "Antigua and Barbuda",
            "number": "028",
            "phoneCode": "+1268"
        },
        {
            "code": "AR",
            "code3": "ARG",
            "name": "Argentina",
            "number": "032",
            "phoneCode": "+54"
        },
        {
            "code": "AM",
            "code3": "ARM",
            "name": "Armenia",
            "number": "051",
            "phoneCode": "+374"
        },
        {
            "code": "AW",
            "code3": "ABW",
            "name": "Aruba",
            "number": "533",
            "phoneCode": "+297"
        },
        {
            "code": "AU",
            "code3": "AUS",
            "name": "Australia",
            "number": "036",
            "phoneCode": "+61"
        },
        {
            "code": "AT",
            "code3": "AUT",
            "name": "Austria",
            "number": "040",
            "phoneCode": "+43"
        },
        {
            "code": "AZ",
            "code3": "AZE",
            "name": "Azerbaijan",
            "number": "031",
            "phoneCode": "+994"
        },
        {
            "code": "BS",
            "code3": "BHS",
            "name": "Bahamas",
            "number": "044",
            "phoneCode": "+1242"
        },
        {
            "code": "BH",
            "code3": "BHR",
            "name": "Bahrain",
            "number": "048",
            "phoneCode": "+973"
        },
        {
            "code": "BD",
            "code3": "BGD",
            "name": "Bangladesh",
            "number": "050",
            "phoneCode": "+880"
        },
        {
            "code": "BB",
            "code3": "BRB",
            "name": "Barbados",
            "number": "052",
            "phoneCode": "+1246"
        },
        {
            "code": "BY",
            "code3": "BLR",
            "name": "Belarus",
            "number": "112",
            "phoneCode": "+375"
        },
        {
            "code": "BE",
            "code3": "BEL",
            "name": "Belgium",
            "number": "056",
            "phoneCode": "+32"
        },
        {
            "code": "BZ",
            "code3": "BLZ",
            "name": "Belize",
            "number": "084",
            "phoneCode": "+501"
        },
        {
            "code": "BJ",
            "code3": "BEN",
            "name": "Benin",
            "number": "204",
            "phoneCode": "+229"
        },
        {
            "code": "BM",
            "code3": "BMU",
            "name": "Bermuda",
            "number": "060",
            "phoneCode": "+1441"
        },
        {
            "code": "BT",
            "code3": "BTN",
            "name": "Bhutan",
            "number": "064",
            "phoneCode": "+975"
        },
        {
            "code": "BO",
            "code3": "BOL",
            "name": "Bolivia (Plurinational State of)",
            "number": "068",
            "phoneCode": "+591"
        },
        {
            "code": "BQ",
            "code3": "BES",
            "name": "Bonaire, Sint Eustatius and Saba",
            "number": "535",
            "phoneCode": null
        },
        {
            "code": "BA",
            "code3": "BIH",
            "name": "Bosnia and Herzegovina",
            "number": "070",
            "phoneCode": "+387"
        },
        {
            "code": "BW",
            "code3": "BWA",
            "name": "Botswana",
            "number": "072",
            "phoneCode": "+267"
        },
        {
            "code": "BV",
            "code3": "BVT",
            "name": "Bouvet Island",
            "number": "074",
            "phoneCode": null
        },
        {
            "code": "BR",
            "code3": "BRA",
            "name": "Brazil",
            "number": "076",
            "phoneCode": "+55"
        },
        {
            "code": "IO",
            "code3": "IOT",
            "name": "British Indian Ocean Territory",
            "number": "086",
            "phoneCode": "+246"
        },
        {
            "code": "BN",
            "code3": "BRN",
            "name": "Brunei Darussalam",
            "number": "096",
            "phoneCode": "+673"
        },
        {
            "code": "BG",
            "code3": "BGR",
            "name": "Bulgaria",
            "number": "100",
            "phoneCode": "+359"
        },
        {
            "code": "BF",
            "code3": "BFA",
            "name": "Burkina Faso",
            "number": "854",
            "phoneCode": "+226"
        },
        {
            "code": "BI",
            "code3": "BDI",
            "name": "Burundi",
            "number": "108",
            "phoneCode": "+257"
        },
        {
            "code": "CV",
            "code3": "CPV",
            "name": "Cabo Verde",
            "number": "132",
            "phoneCode": "+238"
        },
        {
            "code": "KH",
            "code3": "KHM",
            "name": "Cambodia",
            "number": "116",
            "phoneCode": "+855"
        },
        {
            "code": "CM",
            "code3": "CMR",
            "name": "Cameroon",
            "number": "120",
            "phoneCode": "+237"
        },
        {
            "code": "CA",
            "code3": "CAN",
            "name": "Canada",
            "number": "124",
            "phoneCode": "+1"
        },
        {
            "code": "KY",
            "code3": "CYM",
            "name": "Cayman Islands",
            "number": "136",
            "phoneCode": "+ 345"
        },
        {
            "code": "CF",
            "code3": "CAF",
            "name": "Central African Republic",
            "number": "140",
            "phoneCode": "+236"
        },
        {
            "code": "TD",
            "code3": "TCD",
            "name": "Chad",
            "number": "148",
            "phoneCode": "+235"
        },
        {
            "code": "CL",
            "code3": "CHL",
            "name": "Chile",
            "number": "152",
            "phoneCode": "+56"
        },
        {
            "code": "CN",
            "code3": "CHN",
            "name": "China",
            "number": "156",
            "phoneCode": "+86"
        },
        {
            "code": "CX",
            "code3": "CXR",
            "name": "Christmas Island",
            "number": "162",
            "phoneCode": "+61"
        },
        {
            "code": "CC",
            "code3": "CCK",
            "name": "Cocos (Keeling) Islands",
            "number": "166",
            "phoneCode": "+61"
        },
        {
            "code": "CO",
            "code3": "COL",
            "name": "Colombia",
            "number": "170",
            "phoneCode": "+57"
        },
        {
            "code": "KM",
            "code3": "COM",
            "name": "Comoros",
            "number": "174",
            "phoneCode": "+269"
        },
        {
            "code": "CD",
            "code3": "COD",
            "name": "Congo (the Democratic Republic of the)",
            "number": "180",
            "phoneCode": "+243"
        },
        {
            "code": "CG",
            "code3": "COG",
            "name": "Congo",
            "number": "178",
            "phoneCode": "+242"
        },
        {
            "code": "CK",
            "code3": "COK",
            "name": "Cook Islands",
            "number": "184",
            "phoneCode": "+682"
        },
        {
            "code": "CR",
            "code3": "CRI",
            "name": "Costa Rica",
            "number": "188",
            "phoneCode": "+506"
        },
        {
            "code": "HR",
            "code3": "HRV",
            "name": "Croatia",
            "number": "191",
            "phoneCode": "+385"
        },
        {
            "code": "CU",
            "code3": "CUB",
            "name": "Cuba",
            "number": "192",
            "phoneCode": "+53"
        },
        {
            "code": "CW",
            "code3": "CUW",
            "name": "Curaçao",
            "number": "531",
            "phoneCode": null
        },
        {
            "code": "CY",
            "code3": "CYP",
            "name": "Cyprus",
            "number": "196",
            "phoneCode": "+357"
        },
        {
            "code": "CZ",
            "code3": "CZE",
            "name": "Czechia",
            "number": "203",
            "phoneCode": "+420"
        },
        {
            "code": "CI",
            "code3": "CIV",
            "name": "Côte d'Ivoire",
            "number": "384",
            "phoneCode": "+225"
        },
        {
            "code": "DK",
            "code3": "DNK",
            "name": "Denmark",
            "number": "208",
            "phoneCode": "+45"
        },
        {
            "code": "DJ",
            "code3": "DJI",
            "name": "Djibouti",
            "number": "262",
            "phoneCode": "+253"
        },
        {
            "code": "DM",
            "code3": "DMA",
            "name": "Dominica",
            "number": "212",
            "phoneCode": "+1767"
        },
        {
            "code": "DO",
            "code3": "DOM",
            "name": "Dominican Republic",
            "number": "214",
            "phoneCode": "+1849"
        },
        {
            "code": "EC",
            "code3": "ECU",
            "name": "Ecuador",
            "number": "218",
            "phoneCode": "+593"
        },
        {
            "code": "EG",
            "code3": "EGY",
            "name": "Egypt",
            "number": "818",
            "phoneCode": "+20"
        },
        {
            "code": "SV",
            "code3": "SLV",
            "name": "El Salvador",
            "number": "222",
            "phoneCode": "+503"
        },
        {
            "code": "GQ",
            "code3": "GNQ",
            "name": "Equatorial Guinea",
            "number": "226",
            "phoneCode": "+240"
        },
        {
            "code": "ER",
            "code3": "ERI",
            "name": "Eritrea",
            "number": "232",
            "phoneCode": "+291"
        },
        {
            "code": "EE",
            "code3": "EST",
            "name": "Estonia",
            "number": "233",
            "phoneCode": "+372"
        },
        {
            "code": "SZ",
            "code3": "SWZ",
            "name": "Eswatini",
            "number": "748",
            "phoneCode": "+268"
        },
        {
            "code": "ET",
            "code3": "ETH",
            "name": "Ethiopia",
            "number": "231",
            "phoneCode": "+251"
        },
        {
            "code": "FK",
            "code3": "FLK",
            "name": "Falkland Islands [Malvinas]",
            "number": "238",
            "phoneCode": "+500"
        },
        {
            "code": "FO",
            "code3": "FRO",
            "name": "Faroe Islands",
            "number": "234",
            "phoneCode": "+298"
        },
        {
            "code": "FJ",
            "code3": "FJI",
            "name": "Fiji",
            "number": "242",
            "phoneCode": "+679"
        },
        {
            "code": "FI",
            "code3": "FIN",
            "name": "Finland",
            "number": "246",
            "phoneCode": "+358"
        },
        {
            "code": "FR",
            "code3": "FRA",
            "name": "France",
            "number": "250",
            "phoneCode": "+33"
        },
        {
            "code": "GF",
            "code3": "GUF",
            "name": "French Guiana",
            "number": "254",
            "phoneCode": "+594"
        },
        {
            "code": "PF",
            "code3": "PYF",
            "name": "French Polynesia",
            "number": "258",
            "phoneCode": "+689"
        },
        {
            "code": "TF",
            "code3": "ATF",
            "name": "French Southern Territories",
            "number": "260",
            "phoneCode": null
        },
        {
            "code": "GA",
            "code3": "GAB",
            "name": "Gabon",
            "number": "266",
            "phoneCode": "+241"
        },
        {
            "code": "GM",
            "code3": "GMB",
            "name": "Gambia",
            "number": "270",
            "phoneCode": "+220"
        },
        {
            "code": "GE",
            "code3": "GEO",
            "name": "Georgia",
            "number": "268",
            "phoneCode": "+995"
        },
        {
            "code": "DE",
            "code3": "DEU",
            "name": "Germany",
            "number": "276",
            "phoneCode": "+49"
        },
        {
            "code": "GH",
            "code3": "GHA",
            "name": "Ghana",
            "number": "288",
            "phoneCode": "+233"
        },
        {
            "code": "GI",
            "code3": "GIB",
            "name": "Gibraltar",
            "number": "292",
            "phoneCode": "+350"
        },
        {
            "code": "GR",
            "code3": "GRC",
            "name": "Greece",
            "number": "300",
            "phoneCode": "+30"
        },
        {
            "code": "GL",
            "code3": "GRL",
            "name": "Greenland",
            "number": "304",
            "phoneCode": "+299"
        },
        {
            "code": "GD",
            "code3": "GRD",
            "name": "Grenada",
            "number": "308",
            "phoneCode": "+1473"
        },
        {
            "code": "GP",
            "code3": "GLP",
            "name": "Guadeloupe",
            "number": "312",
            "phoneCode": "+590"
        },
        {
            "code": "GU",
            "code3": "GUM",
            "name": "Guam",
            "number": "316",
            "phoneCode": "+1671"
        },
        {
            "code": "GT",
            "code3": "GTM",
            "name": "Guatemala",
            "number": "320",
            "phoneCode": "+502"
        },
        {
            "code": "GG",
            "code3": "GGY",
            "name": "Guernsey",
            "number": "831",
            "phoneCode": "+44"
        },
        {
            "code": "GN",
            "code3": "GIN",
            "name": "Guinea",
            "number": "324",
            "phoneCode": "+224"
        },
        {
            "code": "GW",
            "code3": "GNB",
            "name": "Guinea-Bissau",
            "number": "624",
            "phoneCode": "+245"
        },
        {
            "code": "GY",
            "code3": "GUY",
            "name": "Guyana",
            "number": "328",
            "phoneCode": "+595"
        },
        {
            "code": "HT",
            "code3": "HTI",
            "name": "Haiti",
            "number": "332",
            "phoneCode": "+509"
        },
        {
            "code": "HM",
            "code3": "HMD",
            "name": "Heard Island and McDonald Islands",
            "number": "334",
            "phoneCode": null
        },
        {
            "code": "VA",
            "code3": "VAT",
            "name": "Holy See",
            "number": "336",
            "phoneCode": "+379"
        },
        {
            "code": "HN",
            "code3": "HND",
            "name": "Honduras",
            "number": "340",
            "phoneCode": "+504"
        },
        {
            "code": "HK",
            "code3": "HKG",
            "name": "Hong Kong",
            "number": "344",
            "phoneCode": "+852"
        },
        {
            "code": "HU",
            "code3": "HUN",
            "name": "Hungary",
            "number": "348",
            "phoneCode": "+36"
        },
        {
            "code": "IS",
            "code3": "ISL",
            "name": "Iceland",
            "number": "352",
            "phoneCode": "+354"
        },
        {
            "code": "IN",
            "code3": "IND",
            "name": "India",
            "number": "356",
            "phoneCode": "+91"
        },
        {
            "code": "ID",
            "code3": "IDN",
            "name": "Indonesia",
            "number": "360",
            "phoneCode": "+62"
        },
        {
            "code": "IR",
            "code3": "IRN",
            "name": "Iran (Islamic Republic of)",
            "number": "364",
            "phoneCode": "+98"
        },
        {
            "code": "IQ",
            "code3": "IRQ",
            "name": "Iraq",
            "number": "368",
            "phoneCode": "+964"
        },
        {
            "code": "IE",
            "code3": "IRL",
            "name": "Ireland",
            "number": "372",
            "phoneCode": "+353"
        },
        {
            "code": "IM",
            "code3": "IMN",
            "name": "Isle of Man",
            "number": "833",
            "phoneCode": "+44"
        },
        {
            "code": "IL",
            "code3": "ISR",
            "name": "Israel",
            "number": "376",
            "phoneCode": "+972"
        },
        {
            "code": "IT",
            "code3": "ITA",
            "name": "Italy",
            "number": "380",
            "phoneCode": "+39"
        },
        {
            "code": "JM",
            "code3": "JAM",
            "name": "Jamaica",
            "number": "388",
            "phoneCode": "+1876"
        },
        {
            "code": "JP",
            "code3": "JPN",
            "name": "Japan",
            "number": "392",
            "phoneCode": "+81"
        },
        {
            "code": "JE",
            "code3": "JEY",
            "name": "Jersey",
            "number": "832",
            "phoneCode": "+44"
        },
        {
            "code": "JO",
            "code3": "JOR",
            "name": "Jordan",
            "number": "400",
            "phoneCode": "+962"
        },
        {
            "code": "KZ",
            "code3": "KAZ",
            "name": "Kazakhstan",
            "number": "398",
            "phoneCode": "+77"
        },
        {
            "code": "KE",
            "code3": "KEN",
            "name": "Kenya",
            "number": "404",
            "phoneCode": "+254"
        },
        {
            "code": "KI",
            "code3": "KIR",
            "name": "Kiribati",
            "number": "296",
            "phoneCode": "+686"
        },
        {
            "code": "KP",
            "code3": "PRK",
            "name": "Korea (the Democratic People's Republic of)",
            "number": "408",
            "phoneCode": "+850"
        },
        {
            "code": "KR",
            "code3": "KOR",
            "name": "Korea (the Republic of)",
            "number": "410",
            "phoneCode": "+82"
        },
        {
            "code": "KW",
            "code3": "KWT",
            "name": "Kuwait",
            "number": "414",
            "phoneCode": "+965"
        },
        {
            "code": "KG",
            "code3": "KGZ",
            "name": "Kyrgyzstan",
            "number": "417",
            "phoneCode": "+996"
        },
        {
            "code": "LA",
            "code3": "LAO",
            "name": "Lao People's Democratic Republic",
            "number": "418",
            "phoneCode": "+856"
        },
        {
            "code": "LV",
            "code3": "LVA",
            "name": "Latvia",
            "number": "428",
            "phoneCode": "+371"
        },
        {
            "code": "LB",
            "code3": "LBN",
            "name": "Lebanon",
            "number": "422",
            "phoneCode": "+961"
        },
        {
            "code": "LS",
            "code3": "LSO",
            "name": "Lesotho",
            "number": "426",
            "phoneCode": "+266"
        },
        {
            "code": "LR",
            "code3": "LBR",
            "name": "Liberia",
            "number": "430",
            "phoneCode": "+231"
        },
        {
            "code": "LY",
            "code3": "LBY",
            "name": "Libya",
            "number": "434",
            "phoneCode": "+218"
        },
        {
            "code": "LI",
            "code3": "LIE",
            "name": "Liechtenstein",
            "number": "438",
            "phoneCode": "+423"
        },
        {
            "code": "LT",
            "code3": "LTU",
            "name": "Lithuania",
            "number": "440",
            "phoneCode": "+370"
        },
        {
            "code": "LU",
            "code3": "LUX",
            "name": "Luxembourg",
            "number": "442",
            "phoneCode": "+352"
        },
        {
            "code": "MO",
            "code3": "MAC",
            "name": "Macao",
            "number": "446",
            "phoneCode": "+853"
        },
        {
            "code": "MG",
            "code3": "MDG",
            "name": "Madagascar",
            "number": "450",
            "phoneCode": "+261"
        },
        {
            "code": "MW",
            "code3": "MWI",
            "name": "Malawi",
            "number": "454",
            "phoneCode": "+265"
        },
        {
            "code": "MY",
            "code3": "MYS",
            "name": "Malaysia",
            "number": "458",
            "phoneCode": "+60"
        },
        {
            "code": "MV",
            "code3": "MDV",
            "name": "Maldives",
            "number": "462",
            "phoneCode": "+960"
        },
        {
            "code": "ML",
            "code3": "MLI",
            "name": "Mali",
            "number": "466",
            "phoneCode": "+223"
        },
        {
            "code": "MT",
            "code3": "MLT",
            "name": "Malta",
            "number": "470",
            "phoneCode": "+356"
        },
        {
            "code": "MH",
            "code3": "MHL",
            "name": "Marshall Islands",
            "number": "584",
            "phoneCode": "+692"
        },
        {
            "code": "MQ",
            "code3": "MTQ",
            "name": "Martinique",
            "number": "474",
            "phoneCode": "+596"
        },
        {
            "code": "MR",
            "code3": "MRT",
            "name": "Mauritania",
            "number": "478",
            "phoneCode": "+222"
        },
        {
            "code": "MU",
            "code3": "MUS",
            "name": "Mauritius",
            "number": "480",
            "phoneCode": "+230"
        },
        {
            "code": "YT",
            "code3": "MYT",
            "name": "Mayotte",
            "number": "175",
            "phoneCode": "+262"
        },
        {
            "code": "MX",
            "code3": "MEX",
            "name": "Mexico",
            "number": "484",
            "phoneCode": "+52"
        },
        {
            "code": "FM",
            "code3": "FSM",
            "name": "Micronesia (Federated States of)",
            "number": "583",
            "phoneCode": "+691"
        },
        {
            "code": "MD",
            "code3": "MDA",
            "name": "Moldova (the Republic of)",
            "number": "498",
            "phoneCode": "+373"
        },
        {
            "code": "MC",
            "code3": "MCO",
            "name": "Monaco",
            "number": "492",
            "phoneCode": "+377"
        },
        {
            "code": "MN",
            "code3": "MNG",
            "name": "Mongolia",
            "number": "496",
            "phoneCode": "+976"
        },
        {
            "code": "ME",
            "code3": "MNE",
            "name": "Montenegro",
            "number": "499",
            "phoneCode": "+382"
        },
        {
            "code": "MS",
            "code3": "MSR",
            "name": "Montserrat",
            "number": "500",
            "phoneCode": "+1664"
        },
        {
            "code": "MA",
            "code3": "MAR",
            "name": "Morocco",
            "number": "504",
            "phoneCode": "+212"
        },
        {
            "code": "MZ",
            "code3": "MOZ",
            "name": "Mozambique",
            "number": "508",
            "phoneCode": "+258"
        },
        {
            "code": "MM",
            "code3": "MMR",
            "name": "Myanmar",
            "number": "104",
            "phoneCode": "+95"
        },
        {
            "code": "NA",
            "code3": "NAM",
            "name": "Namibia",
            "number": "516",
            "phoneCode": "+264"
        },
        {
            "code": "NR",
            "code3": "NRU",
            "name": "Nauru",
            "number": "520",
            "phoneCode": "+674"
        },
        {
            "code": "NP",
            "code3": "NPL",
            "name": "Nepal",
            "number": "524",
            "phoneCode": "+977"
        },
        {
            "code": "NL",
            "code3": "NLD",
            "name": "Netherlands",
            "number": "528",
            "phoneCode": "+31"
        },
        {
            "code": "NC",
            "code3": "NCL",
            "name": "New Caledonia",
            "number": "540",
            "phoneCode": "+687"
        },
        {
            "code": "NZ",
            "code3": "NZL",
            "name": "New Zealand",
            "number": "554",
            "phoneCode": "+64"
        },
        {
            "code": "NI",
            "code3": "NIC",
            "name": "Nicaragua",
            "number": "558",
            "phoneCode": "+505"
        },
        {
            "code": "NE",
            "code3": "NER",
            "name": "Niger",
            "number": "562",
            "phoneCode": "+227"
        },
        {
            "code": "NG",
            "code3": "NGA",
            "name": "Nigeria",
            "number": "566",
            "phoneCode": "+234"
        },
        {
            "code": "NU",
            "code3": "NIU",
            "name": "Niue",
            "number": "570",
            "phoneCode": "+683"
        },
        {
            "code": "NF",
            "code3": "NFK",
            "name": "Norfolk Island",
            "number": "574",
            "phoneCode": "+672"
        },
        {
            "code": "MP",
            "code3": "MNP",
            "name": "Northern Mariana Islands",
            "number": "580",
            "phoneCode": "+1670"
        },
        {
            "code": "NO",
            "code3": "NOR",
            "name": "Norway",
            "number": "578",
            "phoneCode": "+47"
        },
        {
            "code": "OM",
            "code3": "OMN",
            "name": "Oman",
            "number": "512",
            "phoneCode": "+968"
        },
        {
            "code": "PK",
            "code3": "PAK",
            "name": "Pakistan",
            "number": "586",
            "phoneCode": "+92"
        },
        {
            "code": "PW",
            "code3": "PLW",
            "name": "Palau",
            "number": "585",
            "phoneCode": "+680"
        },
        {
            "code": "PS",
            "code3": "PSE",
            "name": "Palestine, State of",
            "number": "275",
            "phoneCode": "+970"
        },
        {
            "code": "PA",
            "code3": "PAN",
            "name": "Panama",
            "number": "591",
            "phoneCode": "+507"
        },
        {
            "code": "PG",
            "code3": "PNG",
            "name": "Papua New Guinea",
            "number": "598",
            "phoneCode": "+675"
        },
        {
            "code": "PY",
            "code3": "PRY",
            "name": "Paraguay",
            "number": "600",
            "phoneCode": "+595"
        },
        {
            "code": "PE",
            "code3": "PER",
            "name": "Peru",
            "number": "604",
            "phoneCode": "+51"
        },
        {
            "code": "PH",
            "code3": "PHL",
            "name": "Philippines",
            "number": "608",
            "phoneCode": "+63"
        },
        {
            "code": "PN",
            "code3": "PCN",
            "name": "Pitcairn",
            "number": "612",
            "phoneCode": "+872"
        },
        {
            "code": "PL",
            "code3": "POL",
            "name": "Poland",
            "number": "616",
            "phoneCode": "+48"
        },
        {
            "code": "PT",
            "code3": "PRT",
            "name": "Portugal",
            "number": "620",
            "phoneCode": "+351"
        },
        {
            "code": "PR",
            "code3": "PRI",
            "name": "Puerto Rico",
            "number": "630",
            "phoneCode": "+1939"
        },
        {
            "code": "QA",
            "code3": "QAT",
            "name": "Qatar",
            "number": "634",
            "phoneCode": "+974"
        },
        {
            "code": "MK",
            "code3": "MKD",
            "name": "Republic of North Macedonia",
            "number": "807",
            "phoneCode": "+389"
        },
        {
            "code": "RO",
            "code3": "ROU",
            "name": "Romania",
            "number": "642",
            "phoneCode": "+40"
        },
        {
            "code": "RU",
            "code3": "RUS",
            "name": "Russian Federation",
            "number": "643",
            "phoneCode": "+7"
        },
        {
            "code": "RW",
            "code3": "RWA",
            "name": "Rwanda",
            "number": "646",
            "phoneCode": "+250"
        },
        {
            "code": "RE",
            "code3": "REU",
            "name": "Réunion",
            "number": "638",
            "phoneCode": "+262"
        },
        {
            "code": "BL",
            "code3": "BLM",
            "name": "Saint Barthélemy",
            "number": "652",
            "phoneCode": "+590"
        },
        {
            "code": "SH",
            "code3": "SHN",
            "name": "Saint Helena, Ascension and Tristan da Cunha",
            "number": "654",
            "phoneCode": "+290"
        },
        {
            "code": "KN",
            "code3": "KNA",
            "name": "Saint Kitts and Nevis",
            "number": "659",
            "phoneCode": "+1869"
        },
        {
            "code": "LC",
            "code3": "LCA",
            "name": "Saint Lucia",
            "number": "662",
            "phoneCode": "+1758"
        },
        {
            "code": "MF",
            "code3": "MAF",
            "name": "Saint Martin (French part)",
            "number": "663",
            "phoneCode": "+590"
        },
        {
            "code": "PM",
            "code3": "SPM",
            "name": "Saint Pierre and Miquelon",
            "number": "666",
            "phoneCode": "+508"
        },
        {
            "code": "VC",
            "code3": "VCT",
            "name": "Saint Vincent and the Grenadines",
            "number": "670",
            "phoneCode": "+1784"
        },
        {
            "code": "WS",
            "code3": "WSM",
            "name": "Samoa",
            "number": "882",
            "phoneCode": "+685"
        },
        {
            "code": "SM",
            "code3": "SMR",
            "name": "San Marino",
            "number": "674",
            "phoneCode": "+378"
        },
        {
            "code": "ST",
            "code3": "STP",
            "name": "Sao Tome and Principe",
            "number": "678",
            "phoneCode": "+239"
        },
        {
            "code": "SA",
            "code3": "SAU",
            "name": "Saudi Arabia",
            "number": "682",
            "phoneCode": "+966"
        },
        {
            "code": "SN",
            "code3": "SEN",
            "name": "Senegal",
            "number": "686",
            "phoneCode": "+221"
        },
        {
            "code": "RS",
            "code3": "SRB",
            "name": "Serbia",
            "number": "688",
            "phoneCode": "+381"
        },
        {
            "code": "SC",
            "code3": "SYC",
            "name": "Seychelles",
            "number": "690",
            "phoneCode": "+248"
        },
        {
            "code": "SL",
            "code3": "SLE",
            "name": "Sierra Leone",
            "number": "694",
            "phoneCode": "+232"
        },
        {
            "code": "SG",
            "code3": "SGP",
            "name": "Singapore",
            "number": "702",
            "phoneCode": "+65"
        },
        {
            "code": "SX",
            "code3": "SXM",
            "name": "Sint Maarten (Dutch part)",
            "number": "534",
            "phoneCode": null
        },
        {
            "code": "SK",
            "code3": "SVK",
            "name": "Slovakia",
            "number": "703",
            "phoneCode": "+421"
        },
        {
            "code": "SI",
            "code3": "SVN",
            "name": "Slovenia",
            "number": "705",
            "phoneCode": "+386"
        },
        {
            "code": "SB",
            "code3": "SLB",
            "name": "Solomon Islands",
            "number": "090",
            "phoneCode": "+677"
        },
        {
            "code": "SO",
            "code3": "SOM",
            "name": "Somalia",
            "number": "706",
            "phoneCode": "+252"
        },
        {
            "code": "ZA",
            "code3": "ZAF",
            "name": "South Africa",
            "number": "710",
            "phoneCode": "+27"
        },
        {
            "code": "GS",
            "code3": "SGS",
            "name": "South Georgia and the South Sandwich Islands",
            "number": "239",
            "phoneCode": "+500"
        },
        {
            "code": "SS",
            "code3": "SSD",
            "name": "South Sudan",
            "number": "728",
            "phoneCode": "+211"
        },
        {
            "code": "ES",
            "code3": "ESP",
            "name": "Spain",
            "number": "724",
            "phoneCode": "+34"
        },
        {
            "code": "LK",
            "code3": "LKA",
            "name": "Sri Lanka",
            "number": "144",
            "phoneCode": "+94"
        },
        {
            "code": "SD",
            "code3": "SDN",
            "name": "Sudan",
            "number": "729",
            "phoneCode": "+249"
        },
        {
            "code": "SR",
            "code3": "SUR",
            "name": "Suriname",
            "number": "740",
            "phoneCode": "+597"
        },
        {
            "code": "SJ",
            "code3": "SJM",
            "name": "Svalbard and Jan Mayen",
            "number": "744",
            "phoneCode": "+47"
        },
        {
            "code": "SE",
            "code3": "SWE",
            "name": "Sweden",
            "number": "752",
            "phoneCode": "+46"
        },
        {
            "code": "CH",
            "code3": "CHE",
            "name": "Switzerland",
            "number": "756",
            "phoneCode": "+41"
        },
        {
            "code": "SY",
            "code3": "SYR",
            "name": "Syrian Arab Republic",
            "number": "760",
            "phoneCode": "+963"
        },
        {
            "code": "TW",
            "code3": "TWN",
            "name": "Taiwan",
            "number": "158",
            "phoneCode": "+886"
        },
        {
            "code": "TJ",
            "code3": "TJK",
            "name": "Tajikistan",
            "number": "762",
            "phoneCode": "+992"
        },
        {
            "code": "TZ",
            "code3": "TZA",
            "name": "Tanzania, United Republic of",
            "number": "834",
            "phoneCode": "+255"
        },
        {
            "code": "TH",
            "code3": "THA",
            "name": "Thailand",
            "number": "764",
            "phoneCode": "+66"
        },
        {
            "code": "TL",
            "code3": "TLS",
            "name": "Timor-Leste",
            "number": "626",
            "phoneCode": "+670"
        },
        {
            "code": "TG",
            "code3": "TGO",
            "name": "Togo",
            "number": "768",
            "phoneCode": "+228"
        },
        {
            "code": "TK",
            "code3": "TKL",
            "name": "Tokelau",
            "number": "772",
            "phoneCode": "+690"
        },
        {
            "code": "TO",
            "code3": "TON",
            "name": "Tonga",
            "number": "776",
            "phoneCode": "+676"
        },
        {
            "code": "TT",
            "code3": "TTO",
            "name": "Trinidad and Tobago",
            "number": "780",
            "phoneCode": "+1868"
        },
        {
            "code": "TN",
            "code3": "TUN",
            "name": "Tunisia",
            "number": "788",
            "phoneCode": "+216"
        },
        {
            "code": "TR",
            "code3": "TUR",
            "name": "Turkey",
            "number": "792",
            "phoneCode": "+90"
        },
        {
            "code": "TM",
            "code3": "TKM",
            "name": "Turkmenistan",
            "number": "795",
            "phoneCode": "+993"
        },
        {
            "code": "TC",
            "code3": "TCA",
            "name": "Turks and Caicos Islands",
            "number": "796",
            "phoneCode": "+1649"
        },
        {
            "code": "TV",
            "code3": "TUV",
            "name": "Tuvalu",
            "number": "798",
            "phoneCode": "+688"
        },
        {
            "code": "UG",
            "code3": "UGA",
            "name": "Uganda",
            "number": "800",
            "phoneCode": "+256"
        },
        {
            "code": "UA",
            "code3": "UKR",
            "name": "Ukraine",
            "number": "804",
            "phoneCode": "+380"
        },
        {
            "code": "AE",
            "code3": "ARE",
            "name": "United Arab Emirates",
            "number": "784",
            "phoneCode": "+971"
        },
        {
            "code": "GB",
            "code3": "GBR",
            "name": "United Kingdom of Great Britain and Northern Ireland",
            "number": "826",
            "phoneCode": "+44"
        },
        {
            "code": "UM",
            "code3": "UMI",
            "name": "United States Minor Outlying Islands",
            "number": "581",
            "phoneCode": null
        },
        {
            "code": "US",
            "code3": "USA",
            "name": "United States of America",
            "number": "840",
            "phoneCode": "+1"
        },
        {
            "code": "UY",
            "code3": "URY",
            "name": "Uruguay",
            "number": "858",
            "phoneCode": "+598"
        },
        {
            "code": "UZ",
            "code3": "UZB",
            "name": "Uzbekistan",
            "number": "860",
            "phoneCode": "+998"
        },
        {
            "code": "VU",
            "code3": "VUT",
            "name": "Vanuatu",
            "number": "548",
            "phoneCode": "+678"
        },
        {
            "code": "VE",
            "code3": "VEN",
            "name": "Venezuela (Bolivarian Republic of)",
            "number": "862",
            "phoneCode": "+58"
        },
        {
            "code": "VN",
            "code3": "VNM",
            "name": "Viet Nam",
            "number": "704",
            "phoneCode": "+84"
        },
        {
            "code": "VG",
            "code3": "VGB",
            "name": "Virgin Islands (British)",
            "number": "092",
            "phoneCode": "+1284"
        },
        {
            "code": "VI",
            "code3": "VIR",
            "name": "Virgin Islands (U.S.)",
            "number": "850",
            "phoneCode": "+1340"
        },
        {
            "code": "WF",
            "code3": "WLF",
            "name": "Wallis and Futuna",
            "number": "876",
            "phoneCode": "+681"
        },
        {
            "code": "EH",
            "code3": "ESH",
            "name": "Western Sahara",
            "number": "732",
            "phoneCode": null
        },
        {
            "code": "YE",
            "code3": "YEM",
            "name": "Yemen",
            "number": "887",
            "phoneCode": "+967"
        },
        {
            "code": "ZM",
            "code3": "ZMB",
            "name": "Zambia",
            "number": "894",
            "phoneCode": "+260"
        },
        {
            "code": "ZW",
            "code3": "ZWE",
            "name": "Zimbabwe",
            "number": "716",
            "phoneCode": "+263"
        },
        {
            "code": "AX",
            "code3": "ALA",
            "name": "Åland Islands",
            "number": "248",
            "phoneCode": "+358"
        }
    ]
    //#endregion

    //#region Static Util Functions
    /**
     * Function used to create a input selector string
     * @param {String} type input type
     * @returns {String} query selector string
     */
    static getInputSelectorString(type) { return `input[type='${type}']` }

    /**
     * Function used to create a select selector string
     * @param {String} type input type
     * @returns {String} query selector string
     */
     static getSelectSelectorString(type) { return `select[type='${type}']` }

    /**
     * Function for checking if key pressed was a number key
     * @param {Key} key key to check
     * @static
     * @memberof FormTools
     * @returns {Boolean}
     * @see KEYS
     */
    static isNumberKey(key) { return FormTools.KEYS.numbers.includes(key) }

    /**
     * Function for checking if key pressed was a letter key
     * @param {Key} key key to check
     * @static
     * @memberof FormTools
     * @returns {Boolean}
     * @see KEYS
     */
    static isLetterKey(key) { return FormTools.KEYS.letters.includes(key) }

    /**
     * Function for checking if key pressed was an action key
     * @param {Key} key key to check
     * @static
     * @memberof FormTools
     * @returns {Boolean}
     * @see KEYS
     */
    static isActionKey(key) { return FormTools.KEYS.action.includes(key) }

    /**
     * Function to remove all non-numbers from a string
     * @param {String} value value to remove numbers from
     * @static
     * @memberof FormTools
     * @returns {String} String with only the numbers remaining
     */
    static getNumbers(value) { return value.replace(/\D/g, "") }

    /**
     * Function for checking if value is notNull
     * @param {String} value value to check
     * @static
     * @memberof FormTools
     * @returns {Boolean}
     */
    static notNull(value) { return value != null && value != undefined && value != "" }
    //#endregion

    //#region Static Validation Functions
    /**
     * Function for validating phone inputs
     * @param {HTMLInputElement} input input to validate
     * @static
     * @memberof FormTools
     * @returns {Boolean}
     * @see REGEX
     */
    static validatePhone(input) {
        const VALUE = input.dataset.value ?? input.value
        if (!VALUE || VALUE === "") return false
        return VALUE.match(FormTools.REGEX.phone)
    }

    /**
     * Function for validating social inputs
     * @param {HTMLInputElement} input input to validate
     * @static
     * @memberof FormTools
     * @returns {Boolean}
     * @see REGEX
     */
     static validateSocial(input) {
        const VALUE = input.dataset.value ?? input.value
        if (!VALUE || VALUE === "") return false
        return VALUE.match(FormTools.REGEX.social)
    }

    /**
     * Function for validating email inputs
     * @param {HTMLInputElement} input input to validate
     * @static
     * @memberof FormTools
     * @returns {Boolean}
     * @see REGEX
     */
    static validateEmail(input) { return input.value.match(FormTools.REGEX.email) }

    /**
     * Function for validating URL inputs
     * @param {HTMLInputElement} input input to validate
     * @static
     * @memberof FormTools
     * @returns {Boolean}
     * @see REGEX
     */
    static validateURL(input) { return input.value.match(FormTools.REGEX.url) }

    /**
     * Function for validating zip inputs
     * @param {HTMLInputElement} input input to validate
     * @static
     * @memberof FormTools
     * @returns {Boolean}
     * @see REGEX
     */
    static validateZip(input) { return input.value.match(FormTools.REGEX.zip) }

    /**
     * Function for validating mi inputs
     * @param {HTMLInputElement} input input to validate
     * @static
     * @memberof FormTools
     * @returns {Boolean}
     * @see REGEX
     */
    static validateMI(input) { return input.value.match(FormTools.REGEX.mi) }
    //#endregion

    //#region Static Formatting Functions
    /**
     * Function for adding event listeners to format phone inputs
     * @param {HTMLInputElement} input input to format
     * @static
     * @memberof FormTools
     */
    static formatPhone(input) {
        const format = (target, number) => {
            if (number.length < 3) { }
            else if (number.length < 6) target.value = `(${number.substring(0, 3)}) ${number.substring(3)}`
            else target.value = `(${number.substring(0, 3)}) ${number.substring(3, 6)}-${number.substring(6)}`
        }

        input.dataset.value = input.value
        
        input.addEventListener("keydown", e => {
            if (!FormTools.isActionKey(e.key) && e.target.value.length === 14) return e.preventDefault()
            if (!FormTools.isNumberKey(e.key) && !FormTools.isActionKey(e.key)) return e.preventDefault()
        })

        input.addEventListener("keyup", e => {
            const NUMBER = FormTools.getNumbers(e.target.value)
            if (e.key != "Backspace") format(e.target, NUMBER)
            e.target.dataset.value = NUMBER
        })

        if (input.dataset.value != "") format(input, input.dataset.value)
    }

    /**
     * Function for adding event listeners to format zip inputs
     * @param {HTMLInputElement} input input to format
     * @static
     * @memberof FormTools
     */
    static formatZip(input) {
        input.addEventListener("keydown", e => {
            if (!FormTools.isActionKey(e.key) && e.target.value.length === 5) return e.preventDefault()
            if (!FormTools.isNumberKey(e.key) && !FormTools.isActionKey(e.key)) return e.preventDefault()
        })
    }
 
    /**
     * Function for adding event listeners to format mi inputs
     * @param {HTMLInputElement} input input to format
     * @static
     * @memberof FormTools
     */
    static formatMI(input) {
        input.addEventListener("keydown", e => {
            if (!FormTools.isActionKey(e.key) && e.target.value.length === 1) return e.preventDefault()
            if (!FormTools.isLetterKey(e.key) && !FormTools.isActionKey(e.key)) return e.preventDefault()
        })
    }

    /**
     * Function for adding event listeners to format social inputs
     * @param {HTMLInputElement} input input to format
     * @memberof FormTools
     */
    static formatSocial(input) {
        const format = (target, number) => {
            if (number.length < 3) { }
            else if (number.length < 5) target.value = `${number.substring(0, 3)}-${number.substring(3)}`
            else target.value = `${number.substring(0, 3)}-${number.substring(3, 5)}-${number.substring(5)}`
        }
        input.dataset.value = input.value
        
        input.addEventListener("keydown", e => {
            if (!FormTools.isActionKey(e.key) && e.target.value.length === 11) return e.preventDefault()
            if (!FormTools.isNumberKey(e.key) && !FormTools.isActionKey(e.key)) return e.preventDefault()
        })

        input.addEventListener("keyup", e => {
            const NUMBER = FormTools.getNumbers(e.target.value)
            if (e.key != "Backspace") format(e.target, NUMBER)
            e.target.dataset.value = NUMBER
        })

        if (input.dataset.value != "") format(input, input.dataset.value)
    }

    //#endregion

    //#region Static Builder
    /**
     * Function for building custom selects added by formatter
     * @param {HTMLSelectElement} select Select to add options to
     * @param {Object[]} values Array of objects containing the value and content for the options
     * @param {String[]} keys Array of the two keys to get data from the values object - [value, content]
     * @static
     * @memberof FormTools
     */
     static buildSelect({select, values, keys, nullString = "Select an Option"} = {}) {
        const addOption = (value, content) => {
            const OPTION = document.createElement("option")
            OPTION.value = value
            OPTION.innerText = content
            select.appendChild(OPTION)
        }

        if (nullString) addOption("", nullString)

        const LENGTH = values.length
        for (let index=0; index < LENGTH; index++) {
            addOption(values[index][keys[0]], values[index][keys[1]])
        }
    }
    //#endregion
    #parent

    #inputs = {
        phone: {
            validate: FormTools.validatePhone,
            format: FormTools.formatPhone
        },
        email: {
            validate: FormTools.validateEmail
        },
        url: {
            validate: FormTools.validateURL
        },
        zip: {
            validate: FormTools.validateZip,
            format: FormTools.formatZip
        },
        mi: {
            validate: FormTools.validateMI,
            format: FormTools.formatMI
        },
        social: {
            validate: FormTools.validateSocial,
            format: FormTools.formatSocial
        }
    }
    #selects = {
        state: {
            builder: FormTools.buildSelect,
            nullString: "Select a State",
            values: FormTools.STATES,
            keys: ["abbreviation", "name"]
        },
        country: {
            builder: FormTools.buildSelect,
            nullString: "Select a Country",
            values: FormTools.COUNTRIES,
            keys: ["code", "name"]
        }
    }

    constructor(form=null) {
        if (form && !(form instanceof HTMLFormElement)) throw new Error("property 'form' is not valid HTMLFormElement")
        this.#parent = form ?? document
    }

    /**
     * Function used to add a new input type to the formatter
     * @param {String} type type attribute to search for 
     * @param {Function|null} validate Function to use for validation
     * @param {Function|null} format Function to use for formatting 
     */
    addInput({ type, validate = null, format = null } = {}) {
        if (!type || typeof(type) != "string") throw new Error("Missing 'type' param or 'type' param is not a string")
        if (validate && typeof(validate) != "function") throw new Error("'validate' param is not a function")
        if (format && typeof(format) != "function") throw new Error("'format' param is not a function")

        this.inputs[type] = {
            validate,
            format
        }

        return this
    }

    /**
     * Function used to add a new select type to the formatter
     * @param {String} type type attribute to search for 
     * @param {Function|null} validate Function to use for validation
     * @param {Function|null} builder Function to use for building the select
     * @param {String|null} nullString Function to use for formatting 
     * @param {Object[]} values Array of objects to use as the value and content of the options
     * @param {String[]} keys Array of 2 strings, 0 = value, 1 = content
     */
    addSelect({ type, validate = FormTools.notNull, nullString = null, builder = FormTools.buildSelect, values, keys } = {}) {
        if (!type || typeof(type) != "string") throw new Error("Missing 'type' param or 'type' param is not a string")
        if (validate && typeof(validate) != "function") throw new Error("'validate' param is not a function")
        if (nullString && typeof(nullString) != "string") throw new Error("'nullString' param is not a string")
        if (builder && typeof(builder) != "function") throw new Error("'builder' param is not a function")
        if (!values) throw new Error("'values' param is missing")
        if (!keys) throw new Error("'keys' param is missing")

        this.selects[type] = {
            validate,
            builder,
            nullString,
            values,
            keys
        }
    }

    // ! CREATE NEW PATTERNS OR USER REGEX OR BOTH????
    /**
     * Function used to add a format pattern to a given input or input type - WIP
     * @param {String} pattern Pattern to format the input to
     * @param {HTMLInputElement|String} target Input element or input type to apply format to
     */
    addFormat(pattern, target) {
        if (target instanceof HTMLInputElement) {
            // Is Element
        }
        else {
            // Is type
        }
    }

    /**
     * Function used to format inputs using each input types format function
     * @returns {FormTools} this
     */
    format() {
        for (let inputType in this.#inputs) {
            if ('format' in this.#inputs[inputType] && this.#inputs[inputType].format != null) {
                this.#parent.querySelectorAll(FormTools.getInputSelectorString(inputType)).forEach(input => {
                    this.#inputs[inputType].format(input)
                })
            }
        }

        return this
    }

    /**
     * Function used to build all custom selects
     * @returns {FormTools} this
     */
    buildSelects() {
        for (let selectType in this.#selects) {
            let { values, keys, nullString } = this.#selects[selectType]
            const SELECTS = this.#parent.querySelectorAll(FormTools.getSelectSelectorString(selectType))
            SELECTS.forEach(select => this.#selects[selectType].builder({
                select,
                values,
                keys,
                nullString 
            }))
        }

        return this
    }

    /**
     * Function to add event listeners for submitting the form to validate the inputs and selects
     * @param {Function|null} callback function to call after validation has completed - will call callback with boolean if valid or not
     * @returns {FormFormatter} this
     */
    validate(callback = null) {
        const DATA = new FormData()
        let valid = true

        for (let inputType in this.#inputs) {
            if (!('validate' in this.#inputs[inputType]) || this.#inputs[inputType].validate == null) continue

            this.#parent.querySelectorAll(FormTools.getInputSelectorString(inputType)).forEach(input => {
                if (!this.#inputs[inputType].validate(input)) {
                    input.dataset.status = "error"
                    valid = false
                }
                else input.dataset.status = "valid"

                DATA.set(input.name, input.dataset.value ?? input.value)
            })
        }

        for (let selectType in this.#selects) {
            this.#parent.querySelectorAll(FormTools.getSelectSelectorString(selectType)).forEach(select => {
                if (FormTools.notNull(select.value)) {
                    select.dataset.status = "error"
                    valid = false
                }
                else select.dataset.status = "valid"

                DATA.set(select.name, select.dataset.value ?? select.value)
            })
        }

        const RESP = { valid, data: DATA }
        if (callback) return callback(RESP)
        return RESP
    }
}

export default FormTools