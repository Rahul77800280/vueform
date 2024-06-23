// Needed for testing only

export default {
  "vueform": {
    "elements": {
      "list": {
        "add": "+ Add",
        "remove": "&times;"
      },
      "file": {
        "defaultName": "File",
        "dndTitle": "Upload file",
        "dndDescription": "Drop file or click here to upload",
        "removeConfirm": "By removing the file it will be permanently deleted. Are you sure to continue?",
        "select": "Select file",
        "upload": "Upload"
      },
      "multifile": {
        "uploadButton": "Upload files",
        "dndTitle": "Upload files",
        "dndDescription": "Drop files or click here to upload"
      },
      "gallery": {
        "uploadButton": "Upload images",
        "dndTitle": "Upload images",
        "dndDescription": "Drop images or click here to upload"
      },
      "phone": {
        "ariaLabel": "Select a country"
      },
      "signature": {
        "type": "Type",
        "draw": "Draw",
        "upload": "Upload",
        "font": "Select typeface",
        "fontPlaceholder": "Your Name",
        "placeholder": "Sign here",
        "unsupportedFormat": "Unsupported file format. Accepted extenions are: :extensions"
      }
    },
    "steps": {
      "finish": "Finish",
      "next": "Next",
      "previous": "Previous"
    },
    "editor": {
      "acceptedMimesError": "Accepted mimes are: :mimes",
      "acceptedExtensionsError": "Accepted extenions are: :extensions"
    },
    "datepicker": {
      "weekdays": {
        "shorthand": [
          "Sun",
          "Mon",
          "Tue",
          "Wed",
          "Thu",
          "Fri",
          "Sat"
        ],
        "longhand": [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ]
      },
      "months": {
        "shorthand": [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ],
        "longhand": [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ]
      },
      "daysInMonth": [
        31,
        28,
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31
      ],
      "firstDayOfWeek": 0,
      "ordinal": function (nth) {
        var s = nth % 100;
        if (s > 3 && s < 21) return "th";
        switch (s % 10) {
          case 1:
            return "st";
          case 2:
            return "nd";
          case 3:
            return "rd";
          default:
            return "th";
        }
      },
      "rangeSeparator": " to ",
      "weekAbbreviation": "Wk",
      "scrollTitle": "Scroll to increment",
      "toggleTitle": "Click to toggle",
      "amPM": [
        "AM",
        "PM"
      ],
      "yearAriaLabel": "Year",
      "monthAriaLabel": "Month",
      "hourAriaLabel": "Hour",
      "minuteAriaLabel": "Minute"
    },
    "dateFormats": {
      "datetimeSeconds24": "YYYY-MM-DD HH:mm:ss",
      "datetimeSeconds12": "YYYY-MM-DD hh:mm:ss a",
      "datetime24": "YYYY-MM-DD HH:mm",
      "datetime12": "YYYY-MM-DD hh:mm a",
      "timeSeconds24": "HH:mm:ss",
      "timeSeconds12": "hh:mm:ss a",
      "time24": "HH:mm",
      "time12": "hh:mm a",
      "date": "YYYY-MM-DD"
    },
    "multiselect": {
      "multipleLabelOne": "1 option selected",
      "multipleLabelMore": ":options options selected",
      "noResults": "No options found",
      "noOptions": "The list is empty"
    },
    "defaultMessage": "Invalid field",
    "a11y": {
      "file": {
        "description": "Press Backspace to remove"
      },
      "list": {
        "remove": "Remove item button"
      }
    },
    "countries": {
      "AF": "Afghanistan",
      "AL": "Albania",
      "DZ": "Algeria",
      "AS": "American Samoa",
      "AD": "Andorra",
      "AO": "Angola",
      "AI": "Anguilla",
      "AG": "Antigua & Barbuda",
      "AR": "Argentina",
      "AM": "Armenia",
      "AW": "Aruba",
      "AC": "Ascension Island",
      "AU": "Australia",
      "AT": "Austria",
      "AZ": "Azerbaijan",
      "BS": "Bahamas",
      "BH": "Bahrain",
      "BD": "Bangladesh",
      "BB": "Barbados",
      "BY": "Belarus",
      "BE": "Belgium",
      "BZ": "Belize",
      "BJ": "Benin",
      "BM": "Bermuda",
      "BT": "Bhutan",
      "BO": "Bolivia",
      "BA": "Bosnia & Herzegovina",
      "BW": "Botswana",
      "BR": "Brazil",
      "IO": "British Indian Ocean Territory",
      "VG": "British Virgin Islands",
      "BN": "Brunei",
      "BG": "Bulgaria",
      "BF": "Burkina Faso",
      "BI": "Burundi",
      "KH": "Cambodia",
      "CM": "Cameroon",
      "CA": "Canada",
      "CV": "Cape Verde",
      "BQ": "Caribbean Netherlands",
      "KY": "Cayman Islands",
      "CF": "Central African Republic",
      "TD": "Chad",
      "CL": "Chile",
      "CN": "China",
      "CO": "Colombia",
      "KM": "Comoros",
      "CG": "Congo - Brazzaville",
      "CD": "Congo - Kinshasa",
      "CK": "Cook Islands",
      "CR": "Costa Rica",
      "CI": "Côte d’Ivoire",
      "HR": "Croatia",
      "CU": "Cuba",
      "CW": "Curaçao",
      "CY": "Cyprus",
      "CZ": "Czechia",
      "DK": "Denmark",
      "DJ": "Djibouti",
      "DM": "Dominica",
      "DO": "Dominican Republic",
      "EC": "Ecuador",
      "EG": "Egypt",
      "SV": "El Salvador",
      "GQ": "Equatorial Guinea",
      "ER": "Eritrea",
      "EE": "Estonia",
      "SZ": "Eswatini",
      "ET": "Ethiopia",
      "FK": "Falkland Islands (Islas Malvinas)",
      "FO": "Faroe Islands",
      "FJ": "Fiji",
      "FI": "Finland",
      "FR": "France",
      "GF": "French Guiana",
      "PF": "French Polynesia",
      "GA": "Gabon",
      "GM": "Gambia",
      "GE": "Georgia",
      "DE": "Germany",
      "GH": "Ghana",
      "GI": "Gibraltar",
      "GR": "Greece",
      "GL": "Greenland",
      "GD": "Grenada",
      "GP": "Guadeloupe",
      "GU": "Guam",
      "GT": "Guatemala",
      "GN": "Guinea",
      "GW": "Guinea-Bissau",
      "GY": "Guyana",
      "HT": "Haiti",
      "HN": "Honduras",
      "HK": "Hong Kong",
      "HU": "Hungary",
      "IS": "Iceland",
      "IN": "India",
      "ID": "Indonesia",
      "IR": "Iran",
      "IQ": "Iraq",
      "IE": "Ireland",
      "IL": "Israel",
      "IT": "Italy",
      "JM": "Jamaica",
      "JP": "Japan",
      "JO": "Jordan",
      "KZ": "Kazakhstan",
      "KE": "Kenya",
      "KI": "Kiribati",
      "XK": "Kosovo",
      "KW": "Kuwait",
      "KG": "Kyrgyzstan",
      "LA": "Laos",
      "LV": "Latvia",
      "LB": "Lebanon",
      "LS": "Lesotho",
      "LR": "Liberia",
      "LY": "Libya",
      "LI": "Liechtenstein",
      "LT": "Lithuania",
      "LU": "Luxembourg",
      "MO": "Macao",
      "MG": "Madagascar",
      "MW": "Malawi",
      "MY": "Malaysia",
      "MV": "Maldives",
      "ML": "Mali",
      "MT": "Malta",
      "MH": "Marshall Islands",
      "MQ": "Martinique",
      "MR": "Mauritania",
      "MU": "Mauritius",
      "MX": "Mexico",
      "FM": "Micronesia",
      "MD": "Moldova",
      "MC": "Monaco",
      "MN": "Mongolia",
      "ME": "Montenegro",
      "MS": "Montserrat",
      "MA": "Morocco",
      "MZ": "Mozambique",
      "MM": "Myanmar (Burma)",
      "NA": "Namibia",
      "NR": "Nauru",
      "NP": "Nepal",
      "NL": "Netherlands",
      "NC": "New Caledonia",
      "NZ": "New Zealand",
      "NI": "Nicaragua",
      "NE": "Niger",
      "NG": "Nigeria",
      "NU": "Niue",
      "NF": "Norfolk Island",
      "KP": "North Korea",
      "MK": "North Macedonia",
      "MP": "Northern Mariana Islands",
      "NO": "Norway",
      "OM": "Oman",
      "PK": "Pakistan",
      "PW": "Palau",
      "PS": "Palestine",
      "PA": "Panama",
      "PG": "Papua New Guinea",
      "PY": "Paraguay",
      "PE": "Peru",
      "PH": "Philippines",
      "PL": "Poland",
      "PT": "Portugal",
      "PR": "Puerto Rico",
      "QA": "Qatar",
      "RE": "Réunion",
      "RO": "Romania",
      "RU": "Russia",
      "RW": "Rwanda",
      "WS": "Samoa",
      "SM": "San Marino",
      "ST": "São Tomé & Príncipe",
      "SA": "Saudi Arabia",
      "SN": "Senegal",
      "RS": "Serbia",
      "SC": "Seychelles",
      "SL": "Sierra Leone",
      "SG": "Singapore",
      "SX": "Sint Maarten",
      "SK": "Slovakia",
      "SI": "Slovenia",
      "SB": "Solomon Islands",
      "SO": "Somalia",
      "ZA": "South Africa",
      "KR": "South Korea",
      "SS": "South Sudan",
      "ES": "Spain",
      "LK": "Sri Lanka",
      "BL": "St. Barthélemy",
      "SH": "St. Helena",
      "KN": "St. Kitts & Nevis",
      "LC": "St. Lucia",
      "MF": "St. Martin",
      "PM": "St. Pierre & Miquelon",
      "VC": "St. Vincent & Grenadines",
      "SD": "Sudan",
      "SR": "Suriname",
      "SE": "Sweden",
      "CH": "Switzerland",
      "SY": "Syria",
      "TW": "Taiwan",
      "TJ": "Tajikistan",
      "TZ": "Tanzania",
      "TH": "Thailand",
      "TL": "Timor-Leste",
      "TG": "Togo",
      "TK": "Tokelau",
      "TO": "Tonga",
      "TT": "Trinidad & Tobago",
      "TN": "Tunisia",
      "TR": "Türkiye",
      "TM": "Turkmenistan",
      "TC": "Turks & Caicos Islands",
      "TV": "Tuvalu",
      "VI": "U.S. Virgin Islands",
      "UG": "Uganda",
      "UA": "Ukraine",
      "AE": "United Arab Emirates",
      "GB": "United Kingdom",
      "US": "United States",
      "UY": "Uruguay",
      "UZ": "Uzbekistan",
      "VU": "Vanuatu",
      "VA": "Vatican City",
      "VE": "Venezuela",
      "VN": "Vietnam",
      "WF": "Wallis & Futuna",
      "YE": "Yemen",
      "ZM": "Zambia",
      "ZW": "Zimbabwe"
    }
  },
  "validation": {
    "accepted": "The :attribute must be accepted.",
    "active_url": "The :attribute is not a valid URL.",
    "after": "The :attribute must be a date after :date.",
    "after_or_equal": "The :attribute must be a date after or equal to :date.",
    "alpha": "The :attribute may only contain letters.",
    "alpha_dash": "The :attribute may only contain letters, numbers, dashes and underscores.",
    "alpha_num": "The :attribute may only contain letters and numbers.",
    "array": "The :attribute must be an array.",
    "before": "The :attribute must be a date before :date.",
    "before_or_equal": "The :attribute must be a date before or equal to :date.",
    "between": {
      "numeric": "The :attribute must be between :min and :max.",
      "file": "The :attribute must be between :min and :max kilobytes.",
      "string": "The :attribute must be between :min and :max characters.",
      "array": "The :attribute must have between :min and :max items."
    },
    "boolean": "The :attribute field must be true or false.",
    "captcha": "Please verify that you are not a robot.",
    "completed": "Please fill in a valid phone number.",
    "confirmed": "The :attribute confirmation does not match.",
    "date": "The :attribute is not a valid date.",
    "date_format": "The :attribute does not match the format :format.",
    "date_equals": "The :attribute must be equal to :date.",
    "different": "The :attribute and :other must be different.",
    "digits": "The :attribute must be :digits digits.",
    "digits_between": "The :attribute must be between :min and :max digits.",
    "dimensions": "The :attribute has invalid image dimensions.",
    "distinct": "The :attribute field has a duplicate value.",
    "email": "The :attribute must be a valid email address.",
    "exists": "The selected :attribute is invalid.",
    "file": "The :attribute must be a file.",
    "filled": "The :attribute field must have a value.",
    "gt": {
      "numeric": "The :attribute must be greater than :value.",
      "file": "The :attribute must be greater than :value kilobytes.",
      "string": "The :attribute must be greater than :value characters.",
      "array": "The :attribute must have more than :value items."
    },
    "gte": {
      "numeric": "The :attribute must be greater than or equal :value.",
      "file": "The :attribute must be greater than or equal :value kilobytes.",
      "string": "The :attribute must be greater than or equal :value characters.",
      "array": "The :attribute must have :value items or more."
    },
    "image": "The :attribute must be an image.",
    "in": "The selected :attribute is invalid.",
    "in_array": "The :attribute field does not exist in :other.",
    "integer": "The :attribute must be an integer.",
    "ip": "The :attribute must be a valid IP address.",
    "ipv4": "The :attribute must be a valid IPv4 address.",
    "ipv6": "The :attribute must be a valid IPv6 address.",
    "json": "The :attribute must be a valid JSON string.",
    "lt": {
      "numeric": "The :attribute must be less than :value.",
      "file": "The :attribute must be less than :value kilobytes.",
      "string": "The :attribute must be less than :value characters.",
      "array": "The :attribute must have less than :value items."
    },
    "lte": {
      "numeric": "The :attribute must be less than or equal :value.",
      "file": "The :attribute must be less than or equal :value kilobytes.",
      "string": "The :attribute must be less than or equal :value characters.",
      "array": "The :attribute must not have more than :value items."
    },
    "max": {
      "numeric": "The :attribute may not be greater than :max.",
      "file": "The :attribute may not be greater than :max kilobytes.",
      "string": "The :attribute may not be greater than :max characters.",
      "array": "The :attribute may not have more than :max items."
    },
    "mimes": "The :attribute must be a file of type: :values.",
    "mimetypes": "The :attribute must be a file of type: :values.",
    "min": {
      "numeric": "The :attribute must be at least :min.",
      "file": "The :attribute must be at least :min kilobytes.",
      "string": "The :attribute must be at least :min characters.",
      "array": "The :attribute must have at least :min items."
    },
    "not_in": "The selected :attribute is invalid.",
    "not_regex": "The :attribute format is invalid.",
    "numeric": "The :attribute must be a number.",
    "present": "The :attribute field must be present.",
    "regex": "The :attribute format is invalid.",
    "required": "The :attribute field is required.",
    "required_if": "The :attribute field is required when :other is :value.",
    "required_unless": "The :attribute field is required unless :other is in :values.",
    "required_with": "The :attribute field is required when :values is present.",
    "required_with_all": "The :attribute field is required when :values are present.",
    "required_without": "The :attribute field is required when :values is not present.",
    "required_without_all": "The :attribute field is required when none of :values are present.",
    "same": "The :attribute and :other must match.",
    "size": {
      "numeric": "The :attribute must be :size.",
      "file": "The :attribute must be :size kilobytes.",
      "string": "The :attribute must be :size characters.",
      "array": "The :attribute must contain :size items."
    },
    "string": "The :attribute must be a string.",
    "timezone": "The :attribute must be a valid zone.",
    "unique": "The :attribute has already been taken.",
    "uploaded": "The :attribute failed to upload.",
    "url": "The :attribute format is invalid.",
    "uuid": "The :attribute must be a valid UUID.",
    "remote": "The :attribute field is invalid."
  }
}