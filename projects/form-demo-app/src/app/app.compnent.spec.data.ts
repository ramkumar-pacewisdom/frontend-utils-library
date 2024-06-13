export const sampleData = [
    {
        "name": "title",
        "label": "Enter your name",
        "value": "",
        "type": "text",
        "placeHolder": "Ex. John",
        "errorMessage": {
            "required": "Enter your name",
            "minlength":"Min length should be 5",
        },
        "validators": {
            "required": true,
            "minLength": 10
        }
    },
    {
        "name": "recommented_duration",
        "label": "Recommended duration",
        "value": "",
        "class": "",
        "type": "subFields",
        "placeHolder": "",
        "subfields": [
            {
                "name": "number",
                "label": "",
                "value": "",
                "class": "",
                "type": "text",
                "placeHolder": "Number",
                "position": "floating",
                "errorMessage": {
                    "required": "Enter duration in numbers"
                },
                "validators": {
                    "required": true,
                    "maxLength": 255
                }
            },
            {
                "name": "duration",
                "label": "",
                "value": "",
                "class": "",
                "type": "select",
                "placeHolder": "Weeks",
                "position": "floating",
                "errorMessage": {
                    "required": "Enter duration"
                },
                "validators": {
                    "required": true
                },
                "options": [
                    {'value':'1','label':1},
                    {'value':'2','label':2},
                    {'value':'3','label':3}
                ],
                "meta": {
                    "entityType": "duration"
                },
                "multiple": false
            }
        ],
        "position": "floating",
        "errorMessage": {
            "required": "Enter project title"
        },
        "validators": {
            "required": true
        }
    },
    {
        "name": "learning_resources",
        "label": "Project resource (You can add learning resource(s) as a project level)",
        "value": "",
        "class": "",
        "icon": "add_circle",
        "type": "addResource",
        "textForLink": "Add learning resource(s)",
        "placeHolder": "",
        "position": "floating",
        "listIcon": "videocam_off",
        "listLabel": "Video information",
        "dialogData": {
            "header": "Add learning resource(s)",
            "headerCss": "flex flex-row justify-between items-center bg-[#0a4f9d] h-10",
            "resource": [
                [
                    {
                        "name": "nameOfResource",
                        "label": "Name of the resource",
                        "value": "",
                        "class": "",
                        "type": "text",
                        "placeHolder": "Name",
                        "position": "floating",
                        "errorMessage": {
                            "required": "Enter recommended for"
                        },
                        "validators": {
                            "required": true
                        }
                    },
                    {
                        "name": "linkToResource",
                        "label": "Link to the resource",
                        "value": "",
                        "class": "",
                        "type": "text",
                        "placeHolder": "Link",
                        "position": "floating",
                        "errorMessage": {
                            "required": "Enter recommended for"
                        },
                        "validators": {
                            "required": true
                        }
                    }
                ]
            ],
            "confirmButton": "Save",
            "cancelButton": "Cancel",
            "addButton": "Add learning resource(s)"
        },
        "errorMessage": {
            "required": "Enter project title"
        },
        "validators": {
            "required": true,
            "maxLength": 255
        }
    },
    {
        "name": "description",
        "label": "Description",
        "value":"",
        "type": "textarea",
        "placeHolder": "Tell the community something about yourself",
        "errorMessage": {
            "required": "Enter description"
        },
        "validators": {
            "required": false,
            "maxLength": 255
        }
    },
    {
        "name": "password",
        "label": "Enter the password",
        "value":"",
        "type": "password",
        "placeHolder": "Type your password here",
        "errorMessage": {
            "required": "Password is required",
        },
        "validators": {
            "required": false,
        }
    },
    {
        "name": "location",
        "label": "Select your location",
        "value":"",
        "type": "select",
        "errorMessage": {
            "required": "Please select your location"
        },
        "validators": {
            "required": false
        },
        "options": [
            {
                "label": "Andhra Pradesh",
                "value": "ap"
            },
            {
                "label": "Arunachal Pradesh",
                "value": "ar"
            },
            {
                "label": "Assam",
                "value": "as"
            },
            {
                "label": "Bihar",
                "value": "br"
            },
            {
                "label": "Chhattisgarh",
                "value": "cg"
            },
            {
                "label": "Goa",
                "value": "ga"
            },
        ],
        "meta": {
            "entityType": "location",
            "errorLabel": "Location"
        },
        "multiple": false
    },
    {
        "name": "recommended_for",
        "label": "Recommended for",
        "value":"",
        "type": "chip",
        "disabled": false,
        "errorMessage": {
            "required": "Enter recommended for"
        },
        "validators": {
            "required": false
        },
        "options": [
            {
                "label": "Block education officer",
                "value": "beo"
            },
            {
                "label": "Cluster officials",
                "value": "co"
            },
            {
                "label": "District education officer",
                "value": "deo"
            },
            {
                "label": "Head master",
                "value": "hm"
            },
            {
                "label": "Teacher",
                "value": "te"
            }
        ],
        "meta": {
            "entityType": "recommended_for",
            "addNewPopupHeader": "Recommended for",
            "addNewPopupSubHeader": "Who is this session for?",
            "showSelectAll": true,
            "showAddOption": true
        },
        "multiple": true
    },
    {
        "name": "range_value",
        "label": "Select difficulty level",
        "value":"0",
        "type": "range",
        "min": "0",
        "max": "50",
        "step": "1",
        "placeHolder": "Select a range value",
        "errorMessage": {
            "required": "Select a value"
        },
        "validators": {
            "required": false
        },
        "showThumbLabel":true
    },
    {
        "name": "rating",
        "label": "How do you rate this",
        "value":"",
        "type": "rating",
        "errorMessage": {
            "required": "Select a rating value"
        },
        "validators": {
            "required": false
        },
        "noOfstars":5
    },
    {
        "name": "categories",
        "label": "Checkbox Input",
        "value":"",
        "type": "checkbox",
        "errorMessage": {
            "required": "Select a category"
        },
        "validators": {
            "required": false
        },
        "options": [
            {
                "label": "Block education officer",
                "value": "beo"
            },
            {
                "label": "Cluster officials",
                "value": "co"
            },
            {
                "label": "District education officer",
                "value": "deo"
            },
            {
                "label": "Head master",
                "value": "hm"
            },
            {
                "label": "Teacher",
                "value": "te"
            },
            {
                "label": "District education officer",
                "value": "deo"
            }
        ]
    },
    {
        "name": "gender",
        "label": "Radio Input",
        "value":"",
        "type": "radio",
        "errorMessage": {
            "required": "Select a value"
        },
        "validators": {
            "required": true
        },
        "options": [
            {
                "label": "Male",
                "value": "m"
            },
            {
                "label": "female",
                "value": "f"
            },
            {
                "label": "not to disclose",
                "value": "n"
            }
        ]
    },
    {
        "name": "accept",
        "label": "Terms and conditions",
        "value": false,
        "type": "toggle",
        "errorMessage": {
            "required": "You need to accept"
        },
        "validators": {
            "required": false
        }
    }
]
