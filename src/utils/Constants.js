import ApiService from "./ApiService";

export const ApiBaseUrl = "https://productfinder.sandpaper.com/api"

export const baseUrl = "/pages/product-finder"
export const resultPageUrl = `${baseUrl}/results`

export const apiService = ApiService();
export const PFShopId = window.PFStoreDetails.shopId;
export const PFShopDomain = window.PFStoreDetails.shopDomain;



export const materials = {
    Discs: {
        'Shape Description': [
            'discs'
        ],
        'SizesPerDevice': {
            'Disc Orbital Sander': [
                '3',
                '5',
                '6',
                '8'
            ],
            'Benchtop Sander': [
                '8',
                '9',
                '10',
                '11',
                '12'
            ]
        },
        'Attachment Types': {
            'PSA (Sticky back)': {
                Values: [
                    'DL',
                    'DP',
                    'DR',
                    'DS'
                ],
                Selectable: true
            },
            'Hook & Loop (Uneevel)': {
                Values: [
                    'DU',
                    'DV'
                ],
                Selectable: true
            },
            'Plain Backing': {
                Values: [
                    'DI'
                ],
                Selectable: true
            }
        },
        'Center Holes': {
            'Center hole': [],
            'No center hole': []
        },
        'Vented Holes': [
            'No holes',
            'Multi-Hole',
            'Festool',
            '5',
            '6',
            '8'
        ]
    },
    Belts: {
        'Shape Description': [
            'narrow belt',
            'wide belt',
            'portable belt'
        ],
        'Sizes': [
            '50x103',
            '52x103',
            '52x128',
            '52x75',
            '36x60',
            '37x75',
            '1x42',
            '2x72',
            '3x21',
            '4x24',
            '4x36',
            '6x48'
        ],
        'SizesPerDevice': {
            'Wide Belt Sander': [
                '50x103',
                '52x103',
                '52x128',
                '52x75',
                '36x60',
                '37x75'
            ],
            'Narrow Belt Sander': [
                '1x42',
                '2x72',
                '3x21',
                '4x24',
                '4x36',
                '6x48'
            ],
            'Portable Belt Sander': [
                '3x21',
                '3x24',
                '4x21',
                '4x24',
                '4x26',
                '6x48'
            ]
        }
    },
    Sheets: {
        'Shape Description': [
            'psa sheet',
            'sheet',
            'uneevel sheet'
        ],
        // 'Sizes': ['9x11', '3x4', '4 1/2x11', '4 1/2x5 1/2', '3 2/3x9', '5 1/2x9'],  
        'SizesPerDevice': {
            'Rectangular Orbital Sander': [],
            'Hand Sanding': []
        },
        'Attachment Types': {
            'PSA (Sticky back)': {
                Values: [
                    'PS'
                ],
                Selectable: true
            },
            'Plain': {
                Values: [
                    'SH'
                ],
                Selectable: true
            },
            'Hook & Loop (Uneevel)': {
                Values: [
                    'VS'
                ],
                Selectable: true
            }
        },
        'Vented Holes': [
            'No holes',
            '4',
            '8',
            '14',
            'Festool'
        ]
    },
    Rolls: {
        'Shape Description': [
            'finished roll',
            'psa finished roll',
            'slashed finished roll',
            'uneevel finished roll'
        ],
        'Sizes': [
            '2 3/4x23',
            '2 3/4x9',
            '3x25',
            '4 1/2x9',
            '4x25',
            '6x25'
        ],
        'Attachment Types': {
            'PSA (Sticky back)': {
                Values: [
                    'PF'
                ],
                Selectable: true
            },
            'Plain': {
                Values: [
                    'RF'
                ],
                Selectable: true
            },
            'Hook & Loop (Uneevel)': {
                Values: [
                    'VF'
                ],
                Selectable: true
            }
        }
    },
    Sponges: {
        'Shape Description': [
            'ekadiamond',
            'ekasilk',
            'ekasilk plus',
            'uneesponge'
        ],
        'SizesPerDevice': {
            'Disc Orbital Sander': [
                '3',
                '5',
                '6',
                '8'
            ],
            'Rectangular Orbital Sander': []
        },
        'Vented Holes': [
            'No holes',
            '4',
            '5',
            '6',
            'Festool'
        ]
    }
};

export const devices = {
    'Disc Orbital Sander': {
        'material': 'Discs',
        'Materials': [
            'Discs'
        ],
        'Machine': [
            'Orbital Sander'
        ]
    },
    'Rectangular Orbital Sander': {
        'material': 'Sheets',
        'Materials': [
            'Sheets',
            'Sponges'
        ],
        'Machine': [
            'Rectangular Orbital Sander'
        ]
    },
    'Wide Belt Sander': {
        'material': 'Belts',
        'Materials': [
            'Belts'
        ],
        'Machine': []
    },
    'Narrow Belt Sander': {
        'material': 'Belts',
        'Materials': [
            'Belts'
        ],
        'Machine': []
    },
    'Portable Belt Sander': {
        'material': 'Belts',
        'Materials': [
            'Belts'
        ],
        'Machine': []
    },
    'Drum Sander': {
        'material': 'Rolls',
        'Materials': [
            'Rolls'
        ],
        'Machine': []
    },
    'Benchtop Sander': {
        'material': 'Discs',
        'Materials': [
            'Discs'
        ],
        'Machine': []
    },
    'Hand Sanding': {
        'material': '',
        'Materials': [
            'Sheets',
            'Sponges'
        ],
        'Machine': [
            'Hand Sanding'
        ]
    }
};

export const application_groups = {
    'Wood': [
        'Hardwood',
        'Softwood',
        'Particle Board',
        'Veneer',
        'Sealer',
        'Lacquer',
        'MDF',
        'Abrasive Planing'
    ],
    'Metal': [
        'Metal',
        'Mild Steel',
        'Non-Ferrous Metals',
        'Stainless Steel',
        'Aluminum',
        'Exotic Alloys'
    ],
    'Composites': [
        'Glass',
        'Plastic',
        'Plaster',
        'Fiberglass',
        'Polyester'
    ],
    'Solid Surfaces': [
        'Granite',
        'Marble'
    ]
};

export const center_hole_sizes = {
    '1/4': '1/4',
    '1/2': '1/2'
};

export const other_center_hole_sizes = {
    '5/16': '5/16',
    '11/16': '11/16',
    '7/8': '7/8',
    '3': '3',
    '5': '5'
};

export const backing_materials = {
    'Cloth': 'Cloth',
    'Paper': 'Paper',
    'Film': 'Film'
};

export const backing_materials_rolls = {
    'Cloth': 'Cloth',
    'Paper': 'Paper',
    'Film': 'Film',
    'Non-woven': 'Non-woven'
};

export const backing_materials_sheets = {
    'Cloth': 'Cloth',
    'Paper': 'Paper',
    'Film': 'Film',
    'Non-woven': 'Non-woven'
};

export const backing_materials_belts = {
    'Cloth': 'Cloth',
    'Paper': 'Paper'
};

export const thicknesses = [
    '1"',
    '1/2"',
    '10mm',
    '5mm'
];

export const defaultAppValue = {
    initialized: false,
    materials,
    devices,
    application_groups,
    step: '',
    device: '',
    material: '',
    pickedData: {},
    resultsCount: 0,
    filtersLoading: false,
    availableFilters: {},
    setStep: (step) => { },
    getSizes: () => {
        return [];
    },
    getThicknesses: () => {
        return [];
    },
    getAttachments: () => {
        return [];
    },
    getCenterHoles: () => {
        return [];
    },
    getCenterHoleSizes: () => {
        return {};
    },
    getOtherCenterHoleSizes: () => {
        return {};
    },
    getVentedHoles: () => {
        return [];
    },
    getBackingMaterials: () => {
        return [];
    },
    getStringifiedQuery: (data) => {
        return '';
    },
    pickStep: (step) => { },
    pickMaterial: function (material) {
        let switch_device = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    },
    pickDevice: function (device) {
        let switch_material = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true, switch_size = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
    },
    pickSize: (width, height) => { },
    pickAttachment: (attachment) => { },
    pickCenterHole: (hole) => { },
    pickCenterHoleSize: (hole) => { },
    pickVentedHole: (hole) => { },
    pickApplication: (application) => { },
    pickBackingMaterial: (mat) => { },
    pickThickness: (thick) => { },
    pickAdditionalFilters: (filters) => { },
    
    resetData: (redirect) => { },
    replaceData: (data) => { },
    resetSomeData: (key) => { }
};


export const configuration_namespaceObject = {
    "L": [
        {
            "Shape Description": "",
            "Machine": "Hand Sanding",
            "Sizes": [
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "",
                    "Attachments": []
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "9",
                    "Attachments": []
                }
            ]
        },
        {
            "Shape Description": "discs",
            "Machine": "",
            "Sizes": [
                {
                    "Dim 1 Description Fraction": "5 1/2",
                    "Dim 2 Description Fraction": "",
                    "Attachments": [
                        "DV"
                    ]
                }
            ]
        },
        {
            "Shape Description": "discs",
            "Machine": "Benchtop Sander",
            "Sizes": [
                {
                    "Dim 1 Description Fraction": "9",
                    "Dim 2 Description Fraction": "3",
                    "Attachments": [
                        "DP",
                        "DV",
                        "DS",
                        "DI"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "9",
                    "Dim 2 Description Fraction": "",
                    "Attachments": [
                        "DP",
                        "DV",
                        "DS",
                        "DI"
                    ]
                }
            ]
        },
        {
            "Shape Description": "discs",
            "Machine": "Benchtop Sander, Floor Sander",
            "Sizes": [
                {
                    "Dim 1 Description Fraction": "10",
                    "Dim 2 Description Fraction": "",
                    "Attachments": [
                        "DP",
                        "DS"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "12",
                    "Dim 2 Description Fraction": "",
                    "Attachments": [
                        "DP",
                        "DS",
                        "DV"
                    ]
                }
            ]
        },
        {
            "Shape Description": "discs",
            "Machine": "Orbital Sander",
            "Sizes": [
                {
                    "Dim 1 Description Fraction": "14",
                    "Dim 2 Description Fraction": "",
                    "Attachments": [
                        "DP",
                        "DI"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "15",
                    "Dim 2 Description Fraction": "",
                    "Attachments": [
                        "DP",
                        "DS",
                        "DV"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "15",
                    "Dim 2 Description Fraction": "2",
                    "Attachments": [
                        "DP",
                        "DS",
                        "DV"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "16",
                    "Dim 2 Description Fraction": "",
                    "Attachments": [
                        "DP",
                        "DS"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "18",
                    "Dim 2 Description Fraction": "14",
                    "Attachments": [
                        "DP"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "18",
                    "Dim 2 Description Fraction": "14 1/4",
                    "Attachments": [
                        "DP"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "18",
                    "Dim 2 Description Fraction": "",
                    "Attachments": [
                        "DP"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2",
                    "Dim 2 Description Fraction": "",
                    "Attachments": [
                        "DV",
                        "DP"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "20",
                    "Dim 2 Description Fraction": "",
                    "Attachments": [
                        "DP",
                        "DS",
                        "DI"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "22",
                    "Dim 2 Description Fraction": "",
                    "Attachments": [
                        "DP"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "24",
                    "Dim 2 Description Fraction": "",
                    "Attachments": [
                        "DP",
                        "DI"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "",
                    "Attachments": [
                        "DV",
                        "DL",
                        "DP",
                        "DS",
                        "DI",
                        "DR"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3 1/2",
                    "Dim 2 Description Fraction": "",
                    "Attachments": [
                        "DP",
                        "DL",
                        "DS",
                        "DV"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "30",
                    "Dim 2 Description Fraction": "",
                    "Attachments": [
                        "DP"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "1/2",
                    "Attachments": [
                        "DV",
                        "DI",
                        "DS",
                        "DP"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "",
                    "Attachments": [
                        "DV",
                        "DI",
                        "DS",
                        "DP"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5",
                    "Dim 2 Description Fraction": "",
                    "Attachments": [
                        "DV",
                        "DS",
                        "DI",
                        "DL",
                        "DP",
                        "DR"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5",
                    "Dim 2 Description Fraction": "5/16",
                    "Attachments": [
                        "DV",
                        "DS",
                        "DI",
                        "DL",
                        "DP",
                        "DR"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5",
                    "Dim 2 Description Fraction": "3 1/2",
                    "Attachments": [
                        "DV",
                        "DS",
                        "DI",
                        "DL",
                        "DP",
                        "DR"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5",
                    "Dim 2 Description Fraction": "3/8",
                    "Attachments": [
                        "DV",
                        "DS",
                        "DI",
                        "DL",
                        "DP",
                        "DR"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5",
                    "Dim 2 Description Fraction": "15/16",
                    "Attachments": [
                        "DV",
                        "DS",
                        "DI",
                        "DL",
                        "DP",
                        "DR"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5",
                    "Dim 2 Description Fraction": "11/16",
                    "Attachments": [
                        "DV",
                        "DS",
                        "DI",
                        "DL",
                        "DP",
                        "DR"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "50",
                    "Dim 2 Description Fraction": "",
                    "Attachments": [
                        "DS"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "",
                    "Attachments": [
                        "DV",
                        "DS",
                        "DI",
                        "DP",
                        "DL",
                        "DR"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "11/16",
                    "Attachments": [
                        "DV",
                        "DS",
                        "DI",
                        "DP",
                        "DL",
                        "DR"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "7/8",
                    "Attachments": [
                        "DV",
                        "DS",
                        "DI",
                        "DP",
                        "DL",
                        "DR"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "5/16",
                    "Attachments": [
                        "DV",
                        "DS",
                        "DI",
                        "DP",
                        "DL",
                        "DR"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "1/2",
                    "Attachments": [
                        "DV",
                        "DS",
                        "DI",
                        "DP",
                        "DL",
                        "DR"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "8",
                    "Attachments": [
                        "DV",
                        "DS",
                        "DI",
                        "DP",
                        "DL",
                        "DR"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "7",
                    "Dim 2 Description Fraction": "7/8",
                    "Attachments": [
                        "DI",
                        "DV",
                        "DP",
                        "DS"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "7",
                    "Dim 2 Description Fraction": "",
                    "Attachments": [
                        "DI",
                        "DV",
                        "DP",
                        "DS"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "7",
                    "Dim 2 Description Fraction": "1/2",
                    "Attachments": [
                        "DI",
                        "DV",
                        "DP",
                        "DS"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "7",
                    "Dim 2 Description Fraction": "8-Jul",
                    "Attachments": [
                        "DI",
                        "DV",
                        "DP",
                        "DS"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "",
                    "Attachments": [
                        "DS",
                        "DV"
                    ]
                }
            ]
        },
        {
            "Shape Description": "discs",
            "Machine": "Orbital Sander, Benchtop Sander",
            "Sizes": [
                {
                    "Dim 1 Description Fraction": "11",
                    "Dim 2 Description Fraction": "",
                    "Attachments": [
                        "DI",
                        "DV",
                        "DP"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "11",
                    "Dim 2 Description Fraction": "5",
                    "Attachments": [
                        "DI",
                        "DV",
                        "DP"
                    ]
                }
            ]
        },
        {
            "Shape Description": "discs",
            "Machine": "Orbital Sander, Benchtop Sander, Floor Sander",
            "Sizes": [
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "",
                    "Attachments": [
                        "DP",
                        "DI",
                        "DS",
                        "DV"
                    ]
                }
            ]
        },
        {
            "Shape Description": "ekadiamond",
            "Machine": "Hand Sanding",
            "Sizes": [
                {
                    "Dim 1 Description Fraction": "4 3/4",
                    "Dim 2 Description Fraction": "4 1/2",
                    "Attachments": []
                }
            ]
        },
        {
            "Shape Description": "ekasilk plus",
            "Machine": "Orbital sander",
            "Sizes": [
                {
                    "Dim 1 Description Fraction": "11",
                    "Dim 2 Description Fraction": "",
                    "Attachments": [
                        "EP"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "",
                    "Attachments": [
                        "EP"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3 3/4",
                    "Dim 2 Description Fraction": "5 3/4",
                    "Attachments": [
                        "EP"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5",
                    "Dim 2 Description Fraction": "",
                    "Attachments": [
                        "EP"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "",
                    "Attachments": [
                        "EP"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "",
                    "Attachments": [
                        "EP"
                    ]
                }
            ]
        },
        {
            "Shape Description": "ekasilk plus",
            "Machine": "Rectangular Orbital Sander",
            "Sizes": [
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "4",
                    "Attachments": [
                        "EP"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3 1/8",
                    "Dim 2 Description Fraction": "5 1/4",
                    "Attachments": [
                        "EP"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3 2/3",
                    "Dim 2 Description Fraction": "7",
                    "Attachments": [
                        "EP"
                    ]
                }
            ]
        },
        {
            "Shape Description": "finished roll",
            "Machine": "Drum Sander, Hand Sanding",
            "Sizes": [
                {
                    "Dim 1 Description Fraction": "2 3/4",
                    "Dim 2 Description Fraction": "50",
                    "Attachments": [
                        "RF"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2 3/4",
                    "Dim 2 Description Fraction": "48",
                    "Attachments": [
                        "RF"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2 3/4",
                    "Dim 2 Description Fraction": "46",
                    "Attachments": [
                        "RF"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2 3/4",
                    "Dim 2 Description Fraction": "1",
                    "Attachments": [
                        "RF"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2 3/4",
                    "Dim 2 Description Fraction": "23",
                    "Attachments": [
                        "RF"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "9",
                    "Attachments": [
                        "RF"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "25",
                    "Attachments": [
                        "RF"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "23",
                    "Attachments": [
                        "RF"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "50",
                    "Attachments": [
                        "RF"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "9",
                    "Attachments": [
                        "RF"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "25",
                    "Attachments": [
                        "RF"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4 1/2",
                    "Dim 2 Description Fraction": "9",
                    "Attachments": [
                        "RF"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4 1/2",
                    "Dim 2 Description Fraction": "25",
                    "Attachments": [
                        "RF"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4 1/2",
                    "Dim 2 Description Fraction": "8",
                    "Attachments": [
                        "RF"
                    ]
                }
            ]
        },
        {
            "Shape Description": "narrow belt",
            "Machine": "Narrow Belt Sander",
            "Sizes": [
                {
                    "Dim 1 Description Fraction": "1",
                    "Dim 2 Description Fraction": "42",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1",
                    "Dim 2 Description Fraction": "72",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1",
                    "Dim 2 Description Fraction": "30",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1",
                    "Dim 2 Description Fraction": "108",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1",
                    "Dim 2 Description Fraction": "18",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1",
                    "Dim 2 Description Fraction": "60",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1",
                    "Dim 2 Description Fraction": "113",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1",
                    "Dim 2 Description Fraction": "132",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1",
                    "Dim 2 Description Fraction": "64",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1",
                    "Dim 2 Description Fraction": "78 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1",
                    "Dim 2 Description Fraction": "78 3/4",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1",
                    "Dim 2 Description Fraction": "40",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1",
                    "Dim 2 Description Fraction": "148",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1",
                    "Dim 2 Description Fraction": "77",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1",
                    "Dim 2 Description Fraction": "48",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1",
                    "Dim 2 Description Fraction": "44",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1",
                    "Dim 2 Description Fraction": "21",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1",
                    "Dim 2 Description Fraction": "92",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1",
                    "Dim 2 Description Fraction": "90",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1",
                    "Dim 2 Description Fraction": "20",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1",
                    "Dim 2 Description Fraction": "15",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1",
                    "Dim 2 Description Fraction": "70 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1",
                    "Dim 2 Description Fraction": "65",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1",
                    "Dim 2 Description Fraction": "91",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1",
                    "Dim 2 Description Fraction": "103",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1",
                    "Dim 2 Description Fraction": "118",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1",
                    "Dim 2 Description Fraction": "24",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1",
                    "Dim 2 Description Fraction": "106",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1",
                    "Dim 2 Description Fraction": "54",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1",
                    "Dim 2 Description Fraction": "20 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1",
                    "Dim 2 Description Fraction": "30 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1",
                    "Dim 2 Description Fraction": "125",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1",
                    "Dim 2 Description Fraction": "15 3/4",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1",
                    "Dim 2 Description Fraction": "70",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1",
                    "Dim 2 Description Fraction": "85",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1",
                    "Dim 2 Description Fraction": "43",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1",
                    "Dim 2 Description Fraction": "10 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1",
                    "Dim 2 Description Fraction": "150",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1",
                    "Dim 2 Description Fraction": "11",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1",
                    "Dim 2 Description Fraction": "74 3/4",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1",
                    "Dim 2 Description Fraction": "89",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1",
                    "Dim 2 Description Fraction": "120",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1",
                    "Dim 2 Description Fraction": "12 5/8",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1",
                    "Dim 2 Description Fraction": "110",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1",
                    "Dim 2 Description Fraction": "126 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1",
                    "Dim 2 Description Fraction": "3",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1 1/2",
                    "Dim 2 Description Fraction": "132",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1 1/2",
                    "Dim 2 Description Fraction": "72",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1 1/2",
                    "Dim 2 Description Fraction": "77",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1 1/2",
                    "Dim 2 Description Fraction": "60",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1 1/2",
                    "Dim 2 Description Fraction": "15 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1 1/2",
                    "Dim 2 Description Fraction": "92",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1 1/2",
                    "Dim 2 Description Fraction": "70",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1 1/2",
                    "Dim 2 Description Fraction": "30",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1 1/2",
                    "Dim 2 Description Fraction": "71 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1 1/2",
                    "Dim 2 Description Fraction": "103",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1 1/2",
                    "Dim 2 Description Fraction": "142",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1 1/2",
                    "Dim 2 Description Fraction": "30 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1 1/2",
                    "Dim 2 Description Fraction": "117 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1 1/2",
                    "Dim 2 Description Fraction": "118",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1 1/2",
                    "Dim 2 Description Fraction": "48",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1 1/2",
                    "Dim 2 Description Fraction": "24",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1 1/2",
                    "Dim 2 Description Fraction": "21 31/32",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1 1/2",
                    "Dim 2 Description Fraction": "18 15/16",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1 1/2",
                    "Dim 2 Description Fraction": "12",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1 1/2",
                    "Dim 2 Description Fraction": "32",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1 1/2",
                    "Dim 2 Description Fraction": "43",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1 1/2",
                    "Dim 2 Description Fraction": "107",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1 1/2",
                    "Dim 2 Description Fraction": "91",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1 1/2",
                    "Dim 2 Description Fraction": "126 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1 1/2",
                    "Dim 2 Description Fraction": "76",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1 1/4",
                    "Dim 2 Description Fraction": "118",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1 1/4",
                    "Dim 2 Description Fraction": "71",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1 1/4",
                    "Dim 2 Description Fraction": "132",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1 1/4",
                    "Dim 2 Description Fraction": "91",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1 1/4",
                    "Dim 2 Description Fraction": "117 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1 1/4",
                    "Dim 2 Description Fraction": "60",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1 1/4",
                    "Dim 2 Description Fraction": "42",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1 1/4",
                    "Dim 2 Description Fraction": "77",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1 1/4",
                    "Dim 2 Description Fraction": "70",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1 1/8",
                    "Dim 2 Description Fraction": "21",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1 1/8",
                    "Dim 2 Description Fraction": "42",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1 1/8",
                    "Dim 2 Description Fraction": "40",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1 1/8",
                    "Dim 2 Description Fraction": "77",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1 15/16",
                    "Dim 2 Description Fraction": "9",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1 3/4",
                    "Dim 2 Description Fraction": "110",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1 3/4",
                    "Dim 2 Description Fraction": "54",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1 3/4",
                    "Dim 2 Description Fraction": "31 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1 3/4",
                    "Dim 2 Description Fraction": "60",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1 3/4",
                    "Dim 2 Description Fraction": "146",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1 3/4",
                    "Dim 2 Description Fraction": "103",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1 3/4",
                    "Dim 2 Description Fraction": "77",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1 3/4",
                    "Dim 2 Description Fraction": "168",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1 3/4",
                    "Dim 2 Description Fraction": "18",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1 3/4",
                    "Dim 2 Description Fraction": "91",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1 3/4",
                    "Dim 2 Description Fraction": "43",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1 3/8",
                    "Dim 2 Description Fraction": "132",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1 3/8",
                    "Dim 2 Description Fraction": "25 9/16",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1 3/8",
                    "Dim 2 Description Fraction": "76 3/4",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1 5/8",
                    "Dim 2 Description Fraction": "30 3/4",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1 5/8",
                    "Dim 2 Description Fraction": "91",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1 5/8",
                    "Dim 2 Description Fraction": "34",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1 7/16",
                    "Dim 2 Description Fraction": "24",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1 7/8",
                    "Dim 2 Description Fraction": "60",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1 7/8",
                    "Dim 2 Description Fraction": "66",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1 7/8",
                    "Dim 2 Description Fraction": "91",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1 9/16",
                    "Dim 2 Description Fraction": "32",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1/2",
                    "Dim 2 Description Fraction": "24",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1/2",
                    "Dim 2 Description Fraction": "18",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1/2",
                    "Dim 2 Description Fraction": "72",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1/2",
                    "Dim 2 Description Fraction": "44",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1/2",
                    "Dim 2 Description Fraction": "12",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1/2",
                    "Dim 2 Description Fraction": "64",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1/2",
                    "Dim 2 Description Fraction": "30",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1/2",
                    "Dim 2 Description Fraction": "48",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1/2",
                    "Dim 2 Description Fraction": "103",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1/2",
                    "Dim 2 Description Fraction": "16",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1/2",
                    "Dim 2 Description Fraction": "20 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1/2",
                    "Dim 2 Description Fraction": "16 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1/2",
                    "Dim 2 Description Fraction": "62",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1/2",
                    "Dim 2 Description Fraction": "17 5/8",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1/2",
                    "Dim 2 Description Fraction": "13",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1/2",
                    "Dim 2 Description Fraction": "92 1/4",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1/2",
                    "Dim 2 Description Fraction": "85",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1/2",
                    "Dim 2 Description Fraction": "107",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1/2",
                    "Dim 2 Description Fraction": "12 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1/2",
                    "Dim 2 Description Fraction": "65",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1/2",
                    "Dim 2 Description Fraction": "10",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1/4",
                    "Dim 2 Description Fraction": "18",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1/4",
                    "Dim 2 Description Fraction": "24",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1/4",
                    "Dim 2 Description Fraction": "30",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1/4",
                    "Dim 2 Description Fraction": "64",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1/4",
                    "Dim 2 Description Fraction": "70",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1/4",
                    "Dim 2 Description Fraction": "72",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1/4",
                    "Dim 2 Description Fraction": "42",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1/4",
                    "Dim 2 Description Fraction": "13",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1/4",
                    "Dim 2 Description Fraction": "44",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1/4",
                    "Dim 2 Description Fraction": "85",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1/4",
                    "Dim 2 Description Fraction": "48",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1/8",
                    "Dim 2 Description Fraction": "18",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1/8",
                    "Dim 2 Description Fraction": "24",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "10",
                    "Dim 2 Description Fraction": "164",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "10",
                    "Dim 2 Description Fraction": "148",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "10",
                    "Dim 2 Description Fraction": "160",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "10",
                    "Dim 2 Description Fraction": "346",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "10",
                    "Dim 2 Description Fraction": "90",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "10",
                    "Dim 2 Description Fraction": "108",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "10",
                    "Dim 2 Description Fraction": "97",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "10",
                    "Dim 2 Description Fraction": "132",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "10",
                    "Dim 2 Description Fraction": "180",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "10",
                    "Dim 2 Description Fraction": "71 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "10",
                    "Dim 2 Description Fraction": "172",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "10",
                    "Dim 2 Description Fraction": "70 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "10",
                    "Dim 2 Description Fraction": "71 1/4",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "10",
                    "Dim 2 Description Fraction": "138",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "10",
                    "Dim 2 Description Fraction": "91",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "10",
                    "Dim 2 Description Fraction": "141",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "10",
                    "Dim 2 Description Fraction": "171",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "10",
                    "Dim 2 Description Fraction": "170",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "10",
                    "Dim 2 Description Fraction": "85",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "10",
                    "Dim 2 Description Fraction": "17",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "10",
                    "Dim 2 Description Fraction": "144",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "10",
                    "Dim 2 Description Fraction": "169 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "10",
                    "Dim 2 Description Fraction": "86",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "10",
                    "Dim 2 Description Fraction": "70",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "11 7/8",
                    "Dim 2 Description Fraction": "29 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "11 7/8",
                    "Dim 2 Description Fraction": "31 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "11 7/8",
                    "Dim 2 Description Fraction": "89",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "11 7/8",
                    "Dim 2 Description Fraction": "44 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "12",
                    "Dim 2 Description Fraction": "180",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "12",
                    "Dim 2 Description Fraction": "170",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "12",
                    "Dim 2 Description Fraction": "78 3/4",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "12",
                    "Dim 2 Description Fraction": "175",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "12",
                    "Dim 2 Description Fraction": "55",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "12",
                    "Dim 2 Description Fraction": "145",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "12",
                    "Dim 2 Description Fraction": "98 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "12",
                    "Dim 2 Description Fraction": "113",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "12",
                    "Dim 2 Description Fraction": "91",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "12",
                    "Dim 2 Description Fraction": "126",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "12",
                    "Dim 2 Description Fraction": "166",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "12",
                    "Dim 2 Description Fraction": "108",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "12",
                    "Dim 2 Description Fraction": "110",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "12",
                    "Dim 2 Description Fraction": "168",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "12",
                    "Dim 2 Description Fraction": "144",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "12",
                    "Dim 2 Description Fraction": "12",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "12",
                    "Dim 2 Description Fraction": "120",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "12",
                    "Dim 2 Description Fraction": "185",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "12",
                    "Dim 2 Description Fraction": "190",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "12",
                    "Dim 2 Description Fraction": "196",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "12",
                    "Dim 2 Description Fraction": "169",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "12",
                    "Dim 2 Description Fraction": "142",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "12",
                    "Dim 2 Description Fraction": "98",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "12",
                    "Dim 2 Description Fraction": "181",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "12",
                    "Dim 2 Description Fraction": "89",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "12",
                    "Dim 2 Description Fraction": "70 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "12",
                    "Dim 2 Description Fraction": "101",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "12",
                    "Dim 2 Description Fraction": "165",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "12",
                    "Dim 2 Description Fraction": "79",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "12",
                    "Dim 2 Description Fraction": "65",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "12",
                    "Dim 2 Description Fraction": "99",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "12",
                    "Dim 2 Description Fraction": "85",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "12",
                    "Dim 2 Description Fraction": "167 11/16",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "13",
                    "Dim 2 Description Fraction": "140",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "13",
                    "Dim 2 Description Fraction": "60",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "13",
                    "Dim 2 Description Fraction": "98 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "13",
                    "Dim 2 Description Fraction": "96",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "13",
                    "Dim 2 Description Fraction": "48",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "13",
                    "Dim 2 Description Fraction": "98",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "13",
                    "Dim 2 Description Fraction": "373",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "13",
                    "Dim 2 Description Fraction": "60 1/4",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "13",
                    "Dim 2 Description Fraction": "75",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "13",
                    "Dim 2 Description Fraction": "170",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "14",
                    "Dim 2 Description Fraction": "172",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "14",
                    "Dim 2 Description Fraction": "185",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "14",
                    "Dim 2 Description Fraction": "128",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "14",
                    "Dim 2 Description Fraction": "85",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "14",
                    "Dim 2 Description Fraction": "107",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "14",
                    "Dim 2 Description Fraction": "132",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "14",
                    "Dim 2 Description Fraction": "172 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "14",
                    "Dim 2 Description Fraction": "180",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "14",
                    "Dim 2 Description Fraction": "59",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "14",
                    "Dim 2 Description Fraction": "70",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "14",
                    "Dim 2 Description Fraction": "144",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "14",
                    "Dim 2 Description Fraction": "103",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "14",
                    "Dim 2 Description Fraction": "133",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "14",
                    "Dim 2 Description Fraction": "107 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "14",
                    "Dim 2 Description Fraction": "63",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "14",
                    "Dim 2 Description Fraction": "86 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "14",
                    "Dim 2 Description Fraction": "187",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "14",
                    "Dim 2 Description Fraction": "117",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "14",
                    "Dim 2 Description Fraction": "190",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "14 1/2",
                    "Dim 2 Description Fraction": "75",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "14 1/2",
                    "Dim 2 Description Fraction": "73",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "15",
                    "Dim 2 Description Fraction": "132",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "15",
                    "Dim 2 Description Fraction": "48",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "15",
                    "Dim 2 Description Fraction": "54",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "15",
                    "Dim 2 Description Fraction": "55",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "15",
                    "Dim 2 Description Fraction": "133",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "15",
                    "Dim 2 Description Fraction": "39 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "15",
                    "Dim 2 Description Fraction": "74",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "15",
                    "Dim 2 Description Fraction": "110",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "15",
                    "Dim 2 Description Fraction": "127 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "15",
                    "Dim 2 Description Fraction": "39",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "15",
                    "Dim 2 Description Fraction": "60",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "15",
                    "Dim 2 Description Fraction": "30",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "15",
                    "Dim 2 Description Fraction": "180",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "15",
                    "Dim 2 Description Fraction": "134",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "15 1/2",
                    "Dim 2 Description Fraction": "54 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "15 3/4",
                    "Dim 2 Description Fraction": "75",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "16",
                    "Dim 2 Description Fraction": "48",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "16",
                    "Dim 2 Description Fraction": "24",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "16",
                    "Dim 2 Description Fraction": "79",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "16",
                    "Dim 2 Description Fraction": "144",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "16",
                    "Dim 2 Description Fraction": "132",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "16",
                    "Dim 2 Description Fraction": "54",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "16",
                    "Dim 2 Description Fraction": "43 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "16",
                    "Dim 2 Description Fraction": "143",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "16",
                    "Dim 2 Description Fraction": "43",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "17",
                    "Dim 2 Description Fraction": "54",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "17",
                    "Dim 2 Description Fraction": "52",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "17 3/4",
                    "Dim 2 Description Fraction": "52 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "17 3/4",
                    "Dim 2 Description Fraction": "51 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "17 3/4",
                    "Dim 2 Description Fraction": "43",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "17 3/4",
                    "Dim 2 Description Fraction": "78 3/4",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "18",
                    "Dim 2 Description Fraction": "72",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "18",
                    "Dim 2 Description Fraction": "85",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2",
                    "Dim 2 Description Fraction": "72",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2",
                    "Dim 2 Description Fraction": "100",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2",
                    "Dim 2 Description Fraction": "118",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2",
                    "Dim 2 Description Fraction": "132",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2",
                    "Dim 2 Description Fraction": "82",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2",
                    "Dim 2 Description Fraction": "110",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2",
                    "Dim 2 Description Fraction": "146",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2",
                    "Dim 2 Description Fraction": "218",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2",
                    "Dim 2 Description Fraction": "48",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2",
                    "Dim 2 Description Fraction": "236",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2",
                    "Dim 2 Description Fraction": "42",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2",
                    "Dim 2 Description Fraction": "98 3/8",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2",
                    "Dim 2 Description Fraction": "60",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2",
                    "Dim 2 Description Fraction": "36",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2",
                    "Dim 2 Description Fraction": "94",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2",
                    "Dim 2 Description Fraction": "29 1/8",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2",
                    "Dim 2 Description Fraction": "90",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2",
                    "Dim 2 Description Fraction": "116 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2",
                    "Dim 2 Description Fraction": "168",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2",
                    "Dim 2 Description Fraction": "92",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2",
                    "Dim 2 Description Fraction": "18 15/16",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2",
                    "Dim 2 Description Fraction": "80",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2",
                    "Dim 2 Description Fraction": "64",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2",
                    "Dim 2 Description Fraction": "131 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2",
                    "Dim 2 Description Fraction": "18 7/8",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2",
                    "Dim 2 Description Fraction": "123 1/4",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2",
                    "Dim 2 Description Fraction": "18 13/16",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2",
                    "Dim 2 Description Fraction": "85",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2",
                    "Dim 2 Description Fraction": "113",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2",
                    "Dim 2 Description Fraction": "78 1/4",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2",
                    "Dim 2 Description Fraction": "86 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2",
                    "Dim 2 Description Fraction": "20",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2",
                    "Dim 2 Description Fraction": "14",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2",
                    "Dim 2 Description Fraction": "109",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2",
                    "Dim 2 Description Fraction": "59 3/4",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2",
                    "Dim 2 Description Fraction": "34",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2",
                    "Dim 2 Description Fraction": "106",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2",
                    "Dim 2 Description Fraction": "103",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2",
                    "Dim 2 Description Fraction": "37",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2",
                    "Dim 2 Description Fraction": "62",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2",
                    "Dim 2 Description Fraction": "52",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2",
                    "Dim 2 Description Fraction": "30",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2",
                    "Dim 2 Description Fraction": "139",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2",
                    "Dim 2 Description Fraction": "41 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2",
                    "Dim 2 Description Fraction": "27",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2",
                    "Dim 2 Description Fraction": "71",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2",
                    "Dim 2 Description Fraction": "12 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2",
                    "Dim 2 Description Fraction": "33 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2",
                    "Dim 2 Description Fraction": "54",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2",
                    "Dim 2 Description Fraction": "15 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2",
                    "Dim 2 Description Fraction": "131",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2",
                    "Dim 2 Description Fraction": "25 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2",
                    "Dim 2 Description Fraction": "24",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2",
                    "Dim 2 Description Fraction": "19",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2",
                    "Dim 2 Description Fraction": "98",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2",
                    "Dim 2 Description Fraction": "70",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2",
                    "Dim 2 Description Fraction": "31",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2",
                    "Dim 2 Description Fraction": "96",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2",
                    "Dim 2 Description Fraction": "43",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2",
                    "Dim 2 Description Fraction": "27 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2",
                    "Dim 2 Description Fraction": "39",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2",
                    "Dim 2 Description Fraction": "91",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2",
                    "Dim 2 Description Fraction": "86",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2",
                    "Dim 2 Description Fraction": "45",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2",
                    "Dim 2 Description Fraction": "36 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2",
                    "Dim 2 Description Fraction": "126 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2",
                    "Dim 2 Description Fraction": "138",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2",
                    "Dim 2 Description Fraction": "97 1/4",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2",
                    "Dim 2 Description Fraction": "65",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2",
                    "Dim 2 Description Fraction": "93",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2",
                    "Dim 2 Description Fraction": "78 3/4",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2",
                    "Dim 2 Description Fraction": "350",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2 1/2",
                    "Dim 2 Description Fraction": "16",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2 1/2",
                    "Dim 2 Description Fraction": "103",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2 1/2",
                    "Dim 2 Description Fraction": "110",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2 1/2",
                    "Dim 2 Description Fraction": "134",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2 1/2",
                    "Dim 2 Description Fraction": "108 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2 1/2",
                    "Dim 2 Description Fraction": "37",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2 1/2",
                    "Dim 2 Description Fraction": "60",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2 1/2",
                    "Dim 2 Description Fraction": "80",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2 1/2",
                    "Dim 2 Description Fraction": "81",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2 1/2",
                    "Dim 2 Description Fraction": "14",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2 1/2",
                    "Dim 2 Description Fraction": "108",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2 1/2",
                    "Dim 2 Description Fraction": "97 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2 1/2",
                    "Dim 2 Description Fraction": "112",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2 1/2",
                    "Dim 2 Description Fraction": "18 15/16",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2 1/2",
                    "Dim 2 Description Fraction": "132",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2 1/2",
                    "Dim 2 Description Fraction": "50",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2 1/2",
                    "Dim 2 Description Fraction": "72",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2 1/2",
                    "Dim 2 Description Fraction": "220",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2 1/2",
                    "Dim 2 Description Fraction": "146",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2 1/2",
                    "Dim 2 Description Fraction": "118",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2 1/2",
                    "Dim 2 Description Fraction": "96 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2 1/2",
                    "Dim 2 Description Fraction": "54",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2 1/2",
                    "Dim 2 Description Fraction": "48",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2 1/2",
                    "Dim 2 Description Fraction": "97 1/8",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2 1/2",
                    "Dim 2 Description Fraction": "115",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2 1/2",
                    "Dim 2 Description Fraction": "200",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2 1/2",
                    "Dim 2 Description Fraction": "74 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2 1/2",
                    "Dim 2 Description Fraction": "114",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2 1/2",
                    "Dim 2 Description Fraction": "15",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2 1/2",
                    "Dim 2 Description Fraction": "109",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2 1/2",
                    "Dim 2 Description Fraction": "55",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2 1/2",
                    "Dim 2 Description Fraction": "80 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2 1/2",
                    "Dim 2 Description Fraction": "98",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2 1/2",
                    "Dim 2 Description Fraction": "83",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2 1/2",
                    "Dim 2 Description Fraction": "49 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2 1/2",
                    "Dim 2 Description Fraction": "37 3/8",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2 1/2",
                    "Dim 2 Description Fraction": "92",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2 1/4",
                    "Dim 2 Description Fraction": "80",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2 1/4",
                    "Dim 2 Description Fraction": "196",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2 1/4",
                    "Dim 2 Description Fraction": "14",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2 1/4",
                    "Dim 2 Description Fraction": "132",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2 1/4",
                    "Dim 2 Description Fraction": "103",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2 1/4",
                    "Dim 2 Description Fraction": "48",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2 1/4",
                    "Dim 2 Description Fraction": "70",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2 1/4",
                    "Dim 2 Description Fraction": "92",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2 1/4",
                    "Dim 2 Description Fraction": "94",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2 1/4",
                    "Dim 2 Description Fraction": "72",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2 1/4",
                    "Dim 2 Description Fraction": "146",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2 1/4",
                    "Dim 2 Description Fraction": "99 3/4",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2 1/4",
                    "Dim 2 Description Fraction": "50",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2 1/4",
                    "Dim 2 Description Fraction": "168",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2 1/4",
                    "Dim 2 Description Fraction": "36",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2 1/4",
                    "Dim 2 Description Fraction": "100",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2 3/4",
                    "Dim 2 Description Fraction": "109 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2 3/4",
                    "Dim 2 Description Fraction": "114",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2 3/4",
                    "Dim 2 Description Fraction": "15 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2 3/4",
                    "Dim 2 Description Fraction": "48",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2 3/4",
                    "Dim 2 Description Fraction": "103",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2 3/4",
                    "Dim 2 Description Fraction": "49",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2 3/8",
                    "Dim 2 Description Fraction": "90 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2 3/8",
                    "Dim 2 Description Fraction": "90 1/8",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2 3/8",
                    "Dim 2 Description Fraction": "109 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2 3/8",
                    "Dim 2 Description Fraction": "132",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2 3/8",
                    "Dim 2 Description Fraction": "125 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2 3/8",
                    "Dim 2 Description Fraction": "100 1/4",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2 3/8",
                    "Dim 2 Description Fraction": "104 3/4",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2 3/8",
                    "Dim 2 Description Fraction": "104 3/8",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2 3/8",
                    "Dim 2 Description Fraction": "109",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2 3/8",
                    "Dim 2 Description Fraction": "88 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2 5/8",
                    "Dim 2 Description Fraction": "109",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "118",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "80",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "81 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "98",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "103",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "146",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "184",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "50",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "110",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "21",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "24",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "132",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "168",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "96",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "107",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "182",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "120",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "60",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "287",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "85",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "84",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "220",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "90",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "98 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "116",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "78 3/4",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "72",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "90 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "18",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "25 1/8",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "204",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "159",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "10 11/16",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "25 7/32",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "81",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "79",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "88 5/8",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "18 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "140",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "100",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "91",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "48",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "109",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "80 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "106",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "61",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "75",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "36",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "163",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "19",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "89",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "52",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "148",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "128",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "109 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "130",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "314",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "91 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "96 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "114",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "104",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "42",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "77",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "97 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "10 39/64",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "89 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "183",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "9",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "310",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "40",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "44 13/16",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "66",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "39 7/8",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "129",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "150",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "94",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "126",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "226",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "82",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "88",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "154",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "23",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "138",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "1",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "49",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3 1/2",
                    "Dim 2 Description Fraction": "103",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3 1/2",
                    "Dim 2 Description Fraction": "109",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3 1/2",
                    "Dim 2 Description Fraction": "15 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3 1/2",
                    "Dim 2 Description Fraction": "148",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3 1/2",
                    "Dim 2 Description Fraction": "107",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3 1/2",
                    "Dim 2 Description Fraction": "76",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3 1/2",
                    "Dim 2 Description Fraction": "78 3/4",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3 1/2",
                    "Dim 2 Description Fraction": "106 1/4",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3 1/2",
                    "Dim 2 Description Fraction": "132",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3 1/2",
                    "Dim 2 Description Fraction": "5 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3 1/2",
                    "Dim 2 Description Fraction": "59",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3 1/2",
                    "Dim 2 Description Fraction": "80 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3 1/2",
                    "Dim 2 Description Fraction": "98 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3 3/4",
                    "Dim 2 Description Fraction": "36",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3 3/4",
                    "Dim 2 Description Fraction": "80 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3 3/4",
                    "Dim 2 Description Fraction": "103",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3/4",
                    "Dim 2 Description Fraction": "62",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3/4",
                    "Dim 2 Description Fraction": "20 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3/4",
                    "Dim 2 Description Fraction": "18",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3/4",
                    "Dim 2 Description Fraction": "132",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3/4",
                    "Dim 2 Description Fraction": "34",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3/4",
                    "Dim 2 Description Fraction": "32",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3/4",
                    "Dim 2 Description Fraction": "115",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3/4",
                    "Dim 2 Description Fraction": "66",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3/4",
                    "Dim 2 Description Fraction": "77 1/4",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3/4",
                    "Dim 2 Description Fraction": "92 1/4",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3/4",
                    "Dim 2 Description Fraction": "20",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3/4",
                    "Dim 2 Description Fraction": "75",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3/4",
                    "Dim 2 Description Fraction": "65",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3/4",
                    "Dim 2 Description Fraction": "78 3/4",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3/4",
                    "Dim 2 Description Fraction": "12",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3/8",
                    "Dim 2 Description Fraction": "21",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3/8",
                    "Dim 2 Description Fraction": "30",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3/8",
                    "Dim 2 Description Fraction": "12",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3/8",
                    "Dim 2 Description Fraction": "18",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3/8",
                    "Dim 2 Description Fraction": "13",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3/8",
                    "Dim 2 Description Fraction": "24",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3/8",
                    "Dim 2 Description Fraction": "15",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3/8",
                    "Dim 2 Description Fraction": "120",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "80",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "132",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "220",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "24",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "133",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "180",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "183",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "84",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "48",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "120",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "75",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "233",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "231",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "106",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "36",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "92",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "108",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "151 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "343",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "52",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "54",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "168",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "298",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "59",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "96",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "90 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "37 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "68",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "118",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "59 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "374",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "158",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "73",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "212",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "78 3/4",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "42",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "97",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "104",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "90",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "148",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "91",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "32",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "63",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "64",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "266",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "252",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "103",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "229",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "79",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "3 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "76",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "163",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "150",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "37 13/16",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "115",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "131",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "142",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "60",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "52 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "11",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "8 15/16",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "90 3/4",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "8",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "156",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "134",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "160",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "11 1/16",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "170",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "88",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "98 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "11 1/8",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "23",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "300",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "62",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "121",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "169",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "61",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "99",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "146",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "429",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "434",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "100",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "232",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "82",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "128",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "138",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "226 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "12 5/8",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "138 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "110",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "197",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "46",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "145",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "189",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "53",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "80 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "200",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "358",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "289 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "186",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "89",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "227",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "131 7/8",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "21 3/4",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "66",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "284",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "102",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "147",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "147 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "20",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "78",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "280",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "21",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "9",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "172",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "113",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "51",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "72",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "354",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "78 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "36 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "13",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "134 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "130",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "77 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "383",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "155",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "109 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "43",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "40 3/4",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "91 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4 1/2",
                    "Dim 2 Description Fraction": "236",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4 1/2",
                    "Dim 2 Description Fraction": "83",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4 1/2",
                    "Dim 2 Description Fraction": "429",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4 1/2",
                    "Dim 2 Description Fraction": "91",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4 1/2",
                    "Dim 2 Description Fraction": "26",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4 3/4",
                    "Dim 2 Description Fraction": "83 3/4",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4 3/4",
                    "Dim 2 Description Fraction": "82 11/16",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4 3/4",
                    "Dim 2 Description Fraction": "82 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4 3/4",
                    "Dim 2 Description Fraction": "72 7/8",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4 3/4",
                    "Dim 2 Description Fraction": "59",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4 3/4",
                    "Dim 2 Description Fraction": "334",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4 3/4",
                    "Dim 2 Description Fraction": "7 7/8",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4 3/4",
                    "Dim 2 Description Fraction": "72 3/4",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4 3/4",
                    "Dim 2 Description Fraction": "354",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4 7/8",
                    "Dim 2 Description Fraction": "220",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5",
                    "Dim 2 Description Fraction": "88",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5",
                    "Dim 2 Description Fraction": "73",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5",
                    "Dim 2 Description Fraction": "272",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5",
                    "Dim 2 Description Fraction": "100",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5",
                    "Dim 2 Description Fraction": "270",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5",
                    "Dim 2 Description Fraction": "271",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5",
                    "Dim 2 Description Fraction": "59",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5",
                    "Dim 2 Description Fraction": "132",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5",
                    "Dim 2 Description Fraction": "163",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5",
                    "Dim 2 Description Fraction": "320",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5",
                    "Dim 2 Description Fraction": "168",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5",
                    "Dim 2 Description Fraction": "103",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5",
                    "Dim 2 Description Fraction": "158",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5",
                    "Dim 2 Description Fraction": "73 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5",
                    "Dim 2 Description Fraction": "128",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5",
                    "Dim 2 Description Fraction": "122",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5",
                    "Dim 2 Description Fraction": "83",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5",
                    "Dim 2 Description Fraction": "362 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5",
                    "Dim 2 Description Fraction": "364",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5",
                    "Dim 2 Description Fraction": "114 3/4",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5",
                    "Dim 2 Description Fraction": "199",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5",
                    "Dim 2 Description Fraction": "118",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5",
                    "Dim 2 Description Fraction": "96",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5",
                    "Dim 2 Description Fraction": "198",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5",
                    "Dim 2 Description Fraction": "60",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5",
                    "Dim 2 Description Fraction": "33",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5",
                    "Dim 2 Description Fraction": "148",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5",
                    "Dim 2 Description Fraction": "319",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5",
                    "Dim 2 Description Fraction": "262",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5",
                    "Dim 2 Description Fraction": "186",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5",
                    "Dim 2 Description Fraction": "274",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5",
                    "Dim 2 Description Fraction": "40",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5",
                    "Dim 2 Description Fraction": "268",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5",
                    "Dim 2 Description Fraction": "129",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5",
                    "Dim 2 Description Fraction": "152",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5",
                    "Dim 2 Description Fraction": "104",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5",
                    "Dim 2 Description Fraction": "310",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5",
                    "Dim 2 Description Fraction": "292",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5",
                    "Dim 2 Description Fraction": "131",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5",
                    "Dim 2 Description Fraction": "108",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5",
                    "Dim 2 Description Fraction": "299",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5",
                    "Dim 2 Description Fraction": "82",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5",
                    "Dim 2 Description Fraction": "80",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5",
                    "Dim 2 Description Fraction": "117",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5",
                    "Dim 2 Description Fraction": "75",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5",
                    "Dim 2 Description Fraction": "170",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5",
                    "Dim 2 Description Fraction": "120",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5",
                    "Dim 2 Description Fraction": "72",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5",
                    "Dim 2 Description Fraction": "164",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5",
                    "Dim 2 Description Fraction": "325",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5",
                    "Dim 2 Description Fraction": "246",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5",
                    "Dim 2 Description Fraction": "220",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5",
                    "Dim 2 Description Fraction": "258",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5",
                    "Dim 2 Description Fraction": "354",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5 1/2",
                    "Dim 2 Description Fraction": "104",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5 1/2",
                    "Dim 2 Description Fraction": "370",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5 1/2",
                    "Dim 2 Description Fraction": "86",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5 1/2",
                    "Dim 2 Description Fraction": "143 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5 1/2",
                    "Dim 2 Description Fraction": "145 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5 1/2",
                    "Dim 2 Description Fraction": "146 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5 1/2",
                    "Dim 2 Description Fraction": "147 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5 1/2",
                    "Dim 2 Description Fraction": "429",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5 1/2",
                    "Dim 2 Description Fraction": "213",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5 1/2",
                    "Dim 2 Description Fraction": "110",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5 1/2",
                    "Dim 2 Description Fraction": "18",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5 1/2",
                    "Dim 2 Description Fraction": "141",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5 3/8",
                    "Dim 2 Description Fraction": "11 5/8",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5 7/8",
                    "Dim 2 Description Fraction": "265 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5 7/8",
                    "Dim 2 Description Fraction": "259 13/16",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5 7/8",
                    "Dim 2 Description Fraction": "212",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5 7/8",
                    "Dim 2 Description Fraction": "333",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5 7/8",
                    "Dim 2 Description Fraction": "212 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5 7/8",
                    "Dim 2 Description Fraction": "334",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5 7/8",
                    "Dim 2 Description Fraction": "185",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5 7/8",
                    "Dim 2 Description Fraction": "342 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5 7/8",
                    "Dim 2 Description Fraction": "122",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5 7/8",
                    "Dim 2 Description Fraction": "200 3/4",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5 7/8",
                    "Dim 2 Description Fraction": "244",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5 7/8",
                    "Dim 2 Description Fraction": "289",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5 7/8",
                    "Dim 2 Description Fraction": "86 5/8",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5/8",
                    "Dim 2 Description Fraction": "44",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5/8",
                    "Dim 2 Description Fraction": "18",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5/8",
                    "Dim 2 Description Fraction": "91",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5/8",
                    "Dim 2 Description Fraction": "120",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "212",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "213",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "280",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "289",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "346",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "396",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "80",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "89",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "108",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "132",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "120",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "190",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "198",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "300",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "373",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "257",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "258",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "348",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "48",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "128",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "134",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "158",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "168",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "240",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "189",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "298",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "305",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "144",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "125",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "335",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "334 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "394",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "264",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "86 5/8",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "288",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "306",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "334",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "79",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "196",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "60",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "169 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "314",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "127",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "244",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "170",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "360",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "160",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "186",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "388",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "185",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "72",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "202",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "104",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "102",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "272",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "99",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "150",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "290",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "343",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "270",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "312",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "320 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "274",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "123",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "536",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "260",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "277",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "256",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "271",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "349",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "247",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "296",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "339",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "275",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "268",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "25",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "19 7/8",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "340",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "163",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "214",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "220",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "103",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "125 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "85",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "225",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "516",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "165",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "124",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "107",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "166",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "216 3/4",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "138",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "291 1/4",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "105",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "271 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "90",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "212 9/16",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "122",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "324",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "169",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "216",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "212 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "384",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "96",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "124 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "54 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "303",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "297",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "320",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "332",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "208",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "185 3/8",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "321",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "225 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "182",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "78 3/4",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "183",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "194",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "355",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "162",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "317 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "180",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "374",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "78",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "311",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "248",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "299",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "233",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "400",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "352 1/4",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "246",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "100",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "131",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "84",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "148",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "259",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "89 3/8",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "278",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "109",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "307",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "350",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "282",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "215",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "75",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "443",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "276",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "265",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "214 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "126",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "69",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "315",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "85 1/8",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "78 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "354",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "406",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "164",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "227",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "308",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "211",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "249",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "345",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "110",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "218",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "520",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "40",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "362 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "54",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "28",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "395",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "344",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "102 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "205",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "217",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "228",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "284",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "224",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "315 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "393 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "392",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "176",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "422",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "85 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "192",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "172",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "336",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "232",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "86 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "309",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "103 3/4",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "222 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "216 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "254",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "319",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "174",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "175",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "112",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "156",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "181",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "286",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "380 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "167 1/3",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "157",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "146",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "330",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "13 1/4",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "91",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "177",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "221",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "158 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "334 5/8",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "135",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "310",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "448",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "115",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "201",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "622",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "138 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "255",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "316",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "157 3/4",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "328",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "200 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "250",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "347",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "193",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "145",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "126 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "331",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "108 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "101",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "106",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "356",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "447",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "690",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "133",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "13 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "200",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "184",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "188",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "594",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "140",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "167 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "237",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "147",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "82",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "230",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "7 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "149 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "187",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "152",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "87",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "550",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "452",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "98",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "154",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "416",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "110 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "201 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "393 3/4",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "231",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "149 1/4",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "287",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "34",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "129",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "118",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "234",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "90 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "123 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "77",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "210",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "427",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "79 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "64",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "142",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "168 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "88 3/4",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "200 3/4",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "105 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "10",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "102 3/8",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "24",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "36",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "331 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "222",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "212 5/8",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "153",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "206",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "283 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "264 3/4",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "197",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "252",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "209 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "143",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "262",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "168 3/4",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "261",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "217 1/4",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "9",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "242",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "178",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "238",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "137",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "109 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "167",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "342",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "253",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "278 3/4",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "159",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "223",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6 1/2",
                    "Dim 2 Description Fraction": "70",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6 1/2",
                    "Dim 2 Description Fraction": "100",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6 1/2",
                    "Dim 2 Description Fraction": "89",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6 1/2",
                    "Dim 2 Description Fraction": "86 5/8",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6 1/4",
                    "Dim 2 Description Fraction": "118 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6 1/4",
                    "Dim 2 Description Fraction": "110 1/4",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6 1/4",
                    "Dim 2 Description Fraction": "109 3/4",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6 3/4",
                    "Dim 2 Description Fraction": "98",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6 3/4",
                    "Dim 2 Description Fraction": "56",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6 3/4",
                    "Dim 2 Description Fraction": "78 3/4",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "7",
                    "Dim 2 Description Fraction": "348",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "7",
                    "Dim 2 Description Fraction": "227",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "7",
                    "Dim 2 Description Fraction": "300",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "7",
                    "Dim 2 Description Fraction": "336",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "7",
                    "Dim 2 Description Fraction": "335",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "7",
                    "Dim 2 Description Fraction": "354",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "7",
                    "Dim 2 Description Fraction": "203",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "7",
                    "Dim 2 Description Fraction": "311",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "7",
                    "Dim 2 Description Fraction": "144",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "7",
                    "Dim 2 Description Fraction": "164",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "7",
                    "Dim 2 Description Fraction": "163",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "7",
                    "Dim 2 Description Fraction": "250",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "7",
                    "Dim 2 Description Fraction": "175",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "7",
                    "Dim 2 Description Fraction": "277",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "7",
                    "Dim 2 Description Fraction": "170",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "7",
                    "Dim 2 Description Fraction": "202",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "7",
                    "Dim 2 Description Fraction": "132",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "7",
                    "Dim 2 Description Fraction": "176",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "7",
                    "Dim 2 Description Fraction": "345",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "7",
                    "Dim 2 Description Fraction": "142",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "7",
                    "Dim 2 Description Fraction": "351",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "7",
                    "Dim 2 Description Fraction": "84 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "7",
                    "Dim 2 Description Fraction": "178",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "7",
                    "Dim 2 Description Fraction": "149",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "7",
                    "Dim 2 Description Fraction": "167",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "7",
                    "Dim 2 Description Fraction": "150",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "7",
                    "Dim 2 Description Fraction": "171",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "7",
                    "Dim 2 Description Fraction": "90",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "7",
                    "Dim 2 Description Fraction": "87",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "7",
                    "Dim 2 Description Fraction": "145",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "7",
                    "Dim 2 Description Fraction": "346",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "7",
                    "Dim 2 Description Fraction": "298",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "7",
                    "Dim 2 Description Fraction": "166",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "7",
                    "Dim 2 Description Fraction": "208",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "7",
                    "Dim 2 Description Fraction": "324",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "7",
                    "Dim 2 Description Fraction": "185",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "7",
                    "Dim 2 Description Fraction": "248",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "7",
                    "Dim 2 Description Fraction": "323",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "7",
                    "Dim 2 Description Fraction": "296",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "7",
                    "Dim 2 Description Fraction": "10 5/8",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "7",
                    "Dim 2 Description Fraction": "125",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "7",
                    "Dim 2 Description Fraction": "86",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "7",
                    "Dim 2 Description Fraction": "127",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "7",
                    "Dim 2 Description Fraction": "297",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "7",
                    "Dim 2 Description Fraction": "148",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "7",
                    "Dim 2 Description Fraction": "19 7/8",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "7",
                    "Dim 2 Description Fraction": "191",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "7",
                    "Dim 2 Description Fraction": "394",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "7",
                    "Dim 2 Description Fraction": "103",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "7",
                    "Dim 2 Description Fraction": "190",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "7",
                    "Dim 2 Description Fraction": "59",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "7",
                    "Dim 2 Description Fraction": "39",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "7",
                    "Dim 2 Description Fraction": "13 3/4",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "7",
                    "Dim 2 Description Fraction": "350",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "7",
                    "Dim 2 Description Fraction": "123",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "7",
                    "Dim 2 Description Fraction": "126",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "7",
                    "Dim 2 Description Fraction": "228",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "7",
                    "Dim 2 Description Fraction": "168",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "7",
                    "Dim 2 Description Fraction": "130",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "7",
                    "Dim 2 Description Fraction": "165",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "7",
                    "Dim 2 Description Fraction": "98",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "7",
                    "Dim 2 Description Fraction": "20",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "7",
                    "Dim 2 Description Fraction": "164 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "7",
                    "Dim 2 Description Fraction": "137",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "7",
                    "Dim 2 Description Fraction": "16 3/16",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "7",
                    "Dim 2 Description Fraction": "106",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "7",
                    "Dim 2 Description Fraction": "159",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "7",
                    "Dim 2 Description Fraction": "265",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "7",
                    "Dim 2 Description Fraction": "255",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "7",
                    "Dim 2 Description Fraction": "93 3/4",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "7 1/2",
                    "Dim 2 Description Fraction": "48",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "7 1/2",
                    "Dim 2 Description Fraction": "148",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "7 1/2",
                    "Dim 2 Description Fraction": "118",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "7 1/2",
                    "Dim 2 Description Fraction": "115",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "7 1/2",
                    "Dim 2 Description Fraction": "227",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "7 1/2",
                    "Dim 2 Description Fraction": "78 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "7 1/8",
                    "Dim 2 Description Fraction": "86 5/8",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "7 1/8",
                    "Dim 2 Description Fraction": "78 3/4",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "7 1/8",
                    "Dim 2 Description Fraction": "94 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "7 3/4",
                    "Dim 2 Description Fraction": "53 3/4",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "7 3/4",
                    "Dim 2 Description Fraction": "118",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "7 3/4",
                    "Dim 2 Description Fraction": "78 3/4",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "7 7/8",
                    "Dim 2 Description Fraction": "29 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "7 7/8",
                    "Dim 2 Description Fraction": "78 3/4",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "7 7/8",
                    "Dim 2 Description Fraction": "15 3/16",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "148",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "150",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "178",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "202",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "172",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "171",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "166",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "144",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "164",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "79",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "162",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "165",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "160",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "108",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "170",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "123",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "138",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "168",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "77",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "194",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "152",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "139",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "78 5/8",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "141",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "236",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "149",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "88",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "360",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "77 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "85",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "143",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "324",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "125",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "146",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "176",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "66",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "128",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "226",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "179",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "102",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "416",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "110",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "103",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "18 3/4",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "18 1/4",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "163",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "225",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "78",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "115",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "221",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "7 3/8",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "61 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "167",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "200",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "205",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "106",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "80",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "212",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "270",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "107",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "151",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "78 7/8",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "308",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "134",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "280",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "126",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "216",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "130",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "19",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "11 25/32",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "295",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "147",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "282",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "10 1/4",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "15 1/4",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "132",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "120 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "159",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "174",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "272",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "26 1/8",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "180",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "62",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "265",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "158",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "190",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "136",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "78 3/4",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "303",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "169",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "156",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "156 1/4",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "210",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "261 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "60",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "314",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "155 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "102 1/4",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "107 1/4",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "89",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8",
                    "Dim 2 Description Fraction": "145",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8 1/4",
                    "Dim 2 Description Fraction": "241",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8 1/4",
                    "Dim 2 Description Fraction": "59",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8 1/4",
                    "Dim 2 Description Fraction": "78 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8 3/4",
                    "Dim 2 Description Fraction": "93",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8 3/4",
                    "Dim 2 Description Fraction": "102 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "8 3/4",
                    "Dim 2 Description Fraction": "145",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "9",
                    "Dim 2 Description Fraction": "138 3/4",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "9",
                    "Dim 2 Description Fraction": "171",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "9",
                    "Dim 2 Description Fraction": "125",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "9",
                    "Dim 2 Description Fraction": "148",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "9",
                    "Dim 2 Description Fraction": "138 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "9",
                    "Dim 2 Description Fraction": "138",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "9",
                    "Dim 2 Description Fraction": "49 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "9",
                    "Dim 2 Description Fraction": "170",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "9",
                    "Dim 2 Description Fraction": "175",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "9",
                    "Dim 2 Description Fraction": "165",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "9",
                    "Dim 2 Description Fraction": "139",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "9",
                    "Dim 2 Description Fraction": "48",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "9",
                    "Dim 2 Description Fraction": "60",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "9",
                    "Dim 2 Description Fraction": "208",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "9",
                    "Dim 2 Description Fraction": "166",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "9",
                    "Dim 2 Description Fraction": "129",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "9",
                    "Dim 2 Description Fraction": "130",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "9",
                    "Dim 2 Description Fraction": "27",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "9",
                    "Dim 2 Description Fraction": "108",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "9",
                    "Dim 2 Description Fraction": "134",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "9",
                    "Dim 2 Description Fraction": "180 1/4",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "9",
                    "Dim 2 Description Fraction": "194",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "9",
                    "Dim 2 Description Fraction": "104",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "9",
                    "Dim 2 Description Fraction": "172",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "9",
                    "Dim 2 Description Fraction": "132",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "9",
                    "Dim 2 Description Fraction": "149",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "9",
                    "Dim 2 Description Fraction": "127",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "9",
                    "Dim 2 Description Fraction": "118",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "9",
                    "Dim 2 Description Fraction": "20",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "9",
                    "Dim 2 Description Fraction": "115",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "9",
                    "Dim 2 Description Fraction": "135",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "9",
                    "Dim 2 Description Fraction": "140",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "9",
                    "Dim 2 Description Fraction": "186",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "9",
                    "Dim 2 Description Fraction": "133",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "9",
                    "Dim 2 Description Fraction": "10 39/64",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "9",
                    "Dim 2 Description Fraction": "13 5/8",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "9",
                    "Dim 2 Description Fraction": "13 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "9",
                    "Dim 2 Description Fraction": "168",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "9",
                    "Dim 2 Description Fraction": "132 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "9",
                    "Dim 2 Description Fraction": "139 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "9",
                    "Dim 2 Description Fraction": "26 5/16",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "9",
                    "Dim 2 Description Fraction": "163 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "9",
                    "Dim 2 Description Fraction": "26 1/4",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "9",
                    "Dim 2 Description Fraction": "142",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "9",
                    "Dim 2 Description Fraction": "150",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "9",
                    "Dim 2 Description Fraction": "128 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "9",
                    "Dim 2 Description Fraction": "198",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "9",
                    "Dim 2 Description Fraction": "128",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "9",
                    "Dim 2 Description Fraction": "78",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "9",
                    "Dim 2 Description Fraction": "38 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "9",
                    "Dim 2 Description Fraction": "108 3/4",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "9",
                    "Dim 2 Description Fraction": "10 1/2",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "9",
                    "Dim 2 Description Fraction": "13 3/4",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "9",
                    "Dim 2 Description Fraction": "6",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "9",
                    "Dim 2 Description Fraction": "85",
                    "Attachments": [
                        "BN"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "9",
                    "Dim 2 Description Fraction": "164",
                    "Attachments": [
                        "BN"
                    ]
                }
            ]
        },
        {
            "Shape Description": "psa finished roll",
            "Machine": "Drum Sander, Hand Sanding",
            "Sizes": [
                {
                    "Dim 1 Description Fraction": "2 3/4",
                    "Dim 2 Description Fraction": "23",
                    "Attachments": [
                        "PF"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2 3/4",
                    "Dim 2 Description Fraction": "42",
                    "Attachments": [
                        "PF"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2 3/4",
                    "Dim 2 Description Fraction": "9",
                    "Attachments": [
                        "PF"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2 3/4",
                    "Dim 2 Description Fraction": "46",
                    "Attachments": [
                        "PF"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2 3/4",
                    "Dim 2 Description Fraction": "1",
                    "Attachments": [
                        "PF"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "9",
                    "Attachments": [
                        "PF"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "23",
                    "Attachments": [
                        "PF"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "55",
                    "Attachments": [
                        "PF"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "46",
                    "Attachments": [
                        "PF"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4 1/2",
                    "Dim 2 Description Fraction": "9",
                    "Attachments": [
                        "PF"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4 1/2",
                    "Dim 2 Description Fraction": "25",
                    "Attachments": [
                        "PF"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4 1/2",
                    "Dim 2 Description Fraction": "23",
                    "Attachments": [
                        "PF"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4 1/2",
                    "Dim 2 Description Fraction": "5",
                    "Attachments": [
                        "PF"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4 1/2",
                    "Dim 2 Description Fraction": "50",
                    "Attachments": [
                        "PF"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4 1/2",
                    "Dim 2 Description Fraction": "10",
                    "Attachments": [
                        "PF"
                    ]
                }
            ]
        },
        {
            "Shape Description": "psa sheet",
            "Machine": "Hand Sanding",
            "Sizes": [
                {
                    "Dim 1 Description Fraction": "4 1/2",
                    "Dim 2 Description Fraction": "11",
                    "Attachments": [
                        "PS"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "9",
                    "Dim 2 Description Fraction": "11",
                    "Attachments": [
                        "PS"
                    ]
                }
            ]
        },
        {
            "Shape Description": "psa sheet",
            "Machine": "Hand Sanding, Longboard Sander",
            "Sizes": [
                {
                    "Dim 1 Description Fraction": "2 3/4",
                    "Dim 2 Description Fraction": "16 1/2",
                    "Attachments": [
                        "PS"
                    ]
                }
            ]
        },
        {
            "Shape Description": "psa sheet",
            "Machine": "Hand Sanding, Palm Sander",
            "Sizes": [
                {
                    "Dim 1 Description Fraction": "4 1/2",
                    "Dim 2 Description Fraction": "5 1/2",
                    "Attachments": [
                        "PS"
                    ]
                }
            ]
        },
        {
            "Shape Description": "psa sheet",
            "Machine": "Rectangular Orbital Sander",
            "Sizes": [
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "4",
                    "Attachments": [
                        "PS"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3 2/3",
                    "Dim 2 Description Fraction": "7",
                    "Attachments": [
                        "PS"
                    ]
                }
            ]
        },
        {
            "Shape Description": "psa�finished�roll",
            "Machine": "Drum Sander, Hand Sanding",
            "Sizes": [
                {
                    "Dim 1 Description Fraction": "2 3/4",
                    "Dim 2 Description Fraction": "9",
                    "Attachments": [
                        "PF"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4 1/2",
                    "Dim 2 Description Fraction": "9",
                    "Attachments": [
                        "PF"
                    ]
                }
            ]
        },
        {
            "Shape Description": "portable belt",
            "Machine": "Portable Belt Sander, Narrow Belt Sander",
            "Sizes": [
                {
                    "Dim 1 Description Fraction": "1",
                    "Dim 2 Description Fraction": "42",
                    "Attachments": [
                        "BP"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1",
                    "Dim 2 Description Fraction": "30",
                    "Attachments": [
                        "BP"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1",
                    "Dim 2 Description Fraction": "21",
                    "Attachments": [
                        "BP"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "1 1/8",
                    "Dim 2 Description Fraction": "21",
                    "Attachments": [
                        "BP"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2",
                    "Dim 2 Description Fraction": "42",
                    "Attachments": [
                        "BP"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2 1/2",
                    "Dim 2 Description Fraction": "14",
                    "Attachments": [
                        "BP"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2 1/2",
                    "Dim 2 Description Fraction": "16",
                    "Attachments": [
                        "BP"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "21",
                    "Attachments": [
                        "BP"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "24",
                    "Attachments": [
                        "BP"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "18",
                    "Attachments": [
                        "BP"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "21 3/4",
                    "Attachments": [
                        "BP"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "27",
                    "Attachments": [
                        "BP"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "23 3/4",
                    "Attachments": [
                        "BP"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "28",
                    "Attachments": [
                        "BP"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "19",
                    "Attachments": [
                        "BP"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "23 7/8",
                    "Attachments": [
                        "BP"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "16",
                    "Attachments": [
                        "BP"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "24",
                    "Attachments": [
                        "BP"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "21",
                    "Attachments": [
                        "BP"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "21 3/4",
                    "Attachments": [
                        "BP"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "36",
                    "Attachments": [
                        "BP"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "39 1/2",
                    "Attachments": [
                        "BP"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "42",
                    "Attachments": [
                        "BP"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "48",
                    "Attachments": [
                        "BP"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "24",
                    "Attachments": [
                        "BP"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "36",
                    "Attachments": [
                        "BP"
                    ]
                }
            ]
        },
        {
            "Shape Description": "sheet",
            "Machine": "",
            "Sizes": [
                {
                    "Dim 1 Description Fraction": "9",
                    "Dim 2 Description Fraction": "11",
                    "Attachments": [
                        "SH"
                    ]
                }
            ]
        },
        {
            "Shape Description": "sheet",
            "Machine": "Hand Sanding",
            "Sizes": [
                {
                    "Dim 1 Description Fraction": "3 2/3",
                    "Dim 2 Description Fraction": "9",
                    "Attachments": [
                        "SH"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4 1/2",
                    "Dim 2 Description Fraction": "11",
                    "Attachments": [
                        "SH"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5 1/2",
                    "Dim 2 Description Fraction": "9",
                    "Attachments": [
                        "SH"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5 1/2",
                    "Dim 2 Description Fraction": "11",
                    "Attachments": [
                        "SH"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "9",
                    "Dim 2 Description Fraction": "11",
                    "Attachments": [
                        "SH"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "9",
                    "Dim 2 Description Fraction": "17",
                    "Attachments": [
                        "SH"
                    ]
                }
            ]
        },
        {
            "Shape Description": "sheet",
            "Machine": "Hand Sanding, Longboard Sander",
            "Sizes": [
                {
                    "Dim 1 Description Fraction": "2 3/4",
                    "Dim 2 Description Fraction": "16 1/2",
                    "Attachments": [
                        "SH"
                    ]
                }
            ]
        },
        {
            "Shape Description": "sheet",
            "Machine": "Hand Sanding, Palm Sander",
            "Sizes": [
                {
                    "Dim 1 Description Fraction": "4 1/2",
                    "Dim 2 Description Fraction": "5 1/2",
                    "Attachments": [
                        "SH"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "5 1/2",
                    "Dim 2 Description Fraction": "9",
                    "Attachments": [
                        "SH"
                    ]
                }
            ]
        },
        {
            "Shape Description": "sheet",
            "Machine": "Rectangular Orbital Sander",
            "Sizes": [
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "4",
                    "Attachments": [
                        "SH"
                    ]
                }
            ]
        },
        {
            "Shape Description": "uneesponge",
            "Machine": "Hand Sanding",
            "Sizes": [
                {
                    "Dim 1 Description Fraction": "3 1/2",
                    "Dim 2 Description Fraction": "2 1/2",
                    "Attachments": []
                },
                {
                    "Dim 1 Description Fraction": "4 1/2",
                    "Dim 2 Description Fraction": "3 1/2",
                    "Attachments": []
                },
                {
                    "Dim 1 Description Fraction": "5 1/2",
                    "Dim 2 Description Fraction": "4 1/2",
                    "Attachments": []
                }
            ]
        },
        {
            "Shape Description": "uneevel finished roll",
            "Machine": "Drum Sander, Hand Sanding",
            "Sizes": [
                {
                    "Dim 1 Description Fraction": "2 3/4",
                    "Dim 2 Description Fraction": "23",
                    "Attachments": [
                        "VF"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2 3/4",
                    "Dim 2 Description Fraction": "25",
                    "Attachments": [
                        "VF"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2 3/4",
                    "Dim 2 Description Fraction": "15",
                    "Attachments": [
                        "VF"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "2 3/4",
                    "Dim 2 Description Fraction": "9",
                    "Attachments": [
                        "VF"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "9",
                    "Attachments": [
                        "VF"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "50",
                    "Attachments": [
                        "VF"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "25",
                    "Attachments": [
                        "VF"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4",
                    "Dim 2 Description Fraction": "23",
                    "Attachments": [
                        "VF"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "4 1/2",
                    "Dim 2 Description Fraction": "9",
                    "Attachments": [
                        "VF"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "9",
                    "Attachments": [
                        "VF"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "25",
                    "Attachments": [
                        "VF"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "6",
                    "Dim 2 Description Fraction": "45",
                    "Attachments": [
                        "VF"
                    ]
                }
            ]
        },
        {
            "Shape Description": "uneevel sheet",
            "Machine": "Hand Sanding",
            "Sizes": [
                {
                    "Dim 1 Description Fraction": "9",
                    "Dim 2 Description Fraction": "11",
                    "Attachments": [
                        "VS"
                    ]
                }
            ]
        },
        {
            "Shape Description": "uneevel sheet",
            "Machine": "Hand Sanding, Longboard Sander",
            "Sizes": [
                {
                    "Dim 1 Description Fraction": "2 3/4",
                    "Dim 2 Description Fraction": "16 1/2",
                    "Attachments": [
                        "VS"
                    ]
                }
            ]
        },
        {
            "Shape Description": "uneevel sheet",
            "Machine": "Rectangular Orbital Sander",
            "Sizes": [
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "4",
                    "Attachments": [
                        "VS"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "4 1/4",
                    "Attachments": [
                        "VS"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "5 1/2",
                    "Attachments": [
                        "VS"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3",
                    "Dim 2 Description Fraction": "5",
                    "Attachments": [
                        "VS"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3 1/8",
                    "Dim 2 Description Fraction": "5 1/4",
                    "Attachments": [
                        "VS"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "3 2/3",
                    "Dim 2 Description Fraction": "7",
                    "Attachments": [
                        "VS"
                    ]
                }
            ]
        },
        {
            "Shape Description": "wide belt",
            "Machine": "Wide Belt Sander",
            "Sizes": [
                {
                    "Dim 1 Description Fraction": "18",
                    "Dim 2 Description Fraction": "48",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "18",
                    "Dim 2 Description Fraction": "85",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "18",
                    "Dim 2 Description Fraction": "72",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "18",
                    "Dim 2 Description Fraction": "75",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "18",
                    "Dim 2 Description Fraction": "144",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "18",
                    "Dim 2 Description Fraction": "177 1/2",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "18",
                    "Dim 2 Description Fraction": "90",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "18",
                    "Dim 2 Description Fraction": "85 1/2",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "18",
                    "Dim 2 Description Fraction": "48 1/2",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "18",
                    "Dim 2 Description Fraction": "36",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "18",
                    "Dim 2 Description Fraction": "89",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "18",
                    "Dim 2 Description Fraction": "170",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "18 1/2",
                    "Dim 2 Description Fraction": "75",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "18 1/2",
                    "Dim 2 Description Fraction": "48",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "19",
                    "Dim 2 Description Fraction": "48",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "19",
                    "Dim 2 Description Fraction": "60",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "19",
                    "Dim 2 Description Fraction": "75",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "19",
                    "Dim 2 Description Fraction": "85 1/2",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "20",
                    "Dim 2 Description Fraction": "60",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "20",
                    "Dim 2 Description Fraction": "144",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "20",
                    "Dim 2 Description Fraction": "48",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "20",
                    "Dim 2 Description Fraction": "145",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "20",
                    "Dim 2 Description Fraction": "75",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "20",
                    "Dim 2 Description Fraction": "147",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "20 1/2",
                    "Dim 2 Description Fraction": "48",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "22",
                    "Dim 2 Description Fraction": "65",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "22",
                    "Dim 2 Description Fraction": "62",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "22",
                    "Dim 2 Description Fraction": "48",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "22",
                    "Dim 2 Description Fraction": "47 1/2",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "23",
                    "Dim 2 Description Fraction": "48",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "23",
                    "Dim 2 Description Fraction": "68",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "24",
                    "Dim 2 Description Fraction": "84",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "24",
                    "Dim 2 Description Fraction": "48",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "24",
                    "Dim 2 Description Fraction": "92",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "24",
                    "Dim 2 Description Fraction": "74",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "24",
                    "Dim 2 Description Fraction": "75",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "24",
                    "Dim 2 Description Fraction": "60",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "24",
                    "Dim 2 Description Fraction": "54",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "24",
                    "Dim 2 Description Fraction": "71",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "24",
                    "Dim 2 Description Fraction": "62",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "24",
                    "Dim 2 Description Fraction": "55",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "24",
                    "Dim 2 Description Fraction": "34",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "24",
                    "Dim 2 Description Fraction": "63",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "24",
                    "Dim 2 Description Fraction": "133",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "25",
                    "Dim 2 Description Fraction": "60",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "25",
                    "Dim 2 Description Fraction": "75",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "25",
                    "Dim 2 Description Fraction": "85",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "25",
                    "Dim 2 Description Fraction": "48",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "25",
                    "Dim 2 Description Fraction": "54",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "25",
                    "Dim 2 Description Fraction": "72",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "25",
                    "Dim 2 Description Fraction": "103",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "25",
                    "Dim 2 Description Fraction": "55",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "25",
                    "Dim 2 Description Fraction": "71",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "25",
                    "Dim 2 Description Fraction": "60 1/4",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "25",
                    "Dim 2 Description Fraction": "59 3/4",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "25",
                    "Dim 2 Description Fraction": "123",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "25",
                    "Dim 2 Description Fraction": "36",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "25",
                    "Dim 2 Description Fraction": "83",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "26",
                    "Dim 2 Description Fraction": "48",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "26",
                    "Dim 2 Description Fraction": "103",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "26",
                    "Dim 2 Description Fraction": "75",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "27",
                    "Dim 2 Description Fraction": "75",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "27",
                    "Dim 2 Description Fraction": "60",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "27",
                    "Dim 2 Description Fraction": "130",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "27",
                    "Dim 2 Description Fraction": "86 1/2",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "28",
                    "Dim 2 Description Fraction": "75",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "30",
                    "Dim 2 Description Fraction": "72",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "30",
                    "Dim 2 Description Fraction": "103",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "30",
                    "Dim 2 Description Fraction": "252",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "30",
                    "Dim 2 Description Fraction": "60",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "30",
                    "Dim 2 Description Fraction": "55",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "30",
                    "Dim 2 Description Fraction": "75",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "30",
                    "Dim 2 Description Fraction": "34",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "30",
                    "Dim 2 Description Fraction": "81",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "34",
                    "Dim 2 Description Fraction": "68",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "34",
                    "Dim 2 Description Fraction": "75",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "35",
                    "Dim 2 Description Fraction": "66",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "35",
                    "Dim 2 Description Fraction": "67",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "36",
                    "Dim 2 Description Fraction": "75",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "36",
                    "Dim 2 Description Fraction": "103",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "36",
                    "Dim 2 Description Fraction": "60",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "36",
                    "Dim 2 Description Fraction": "48",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "36",
                    "Dim 2 Description Fraction": "84",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "36",
                    "Dim 2 Description Fraction": "55",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "36",
                    "Dim 2 Description Fraction": "86",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "36",
                    "Dim 2 Description Fraction": "72",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "36",
                    "Dim 2 Description Fraction": "70",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "36",
                    "Dim 2 Description Fraction": "74 3/4",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "36",
                    "Dim 2 Description Fraction": "74",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "36",
                    "Dim 2 Description Fraction": "89 7/8",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "36",
                    "Dim 2 Description Fraction": "58",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "36",
                    "Dim 2 Description Fraction": "102",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "36",
                    "Dim 2 Description Fraction": "74 1/2",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "36",
                    "Dim 2 Description Fraction": "37",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "36",
                    "Dim 2 Description Fraction": "90",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "36",
                    "Dim 2 Description Fraction": "40",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "36",
                    "Dim 2 Description Fraction": "67",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "36",
                    "Dim 2 Description Fraction": "90 1/2",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "36",
                    "Dim 2 Description Fraction": "64",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "36",
                    "Dim 2 Description Fraction": "49",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "36 3/4",
                    "Dim 2 Description Fraction": "60",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "37",
                    "Dim 2 Description Fraction": "75",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "37",
                    "Dim 2 Description Fraction": "60",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "37",
                    "Dim 2 Description Fraction": "103",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "37",
                    "Dim 2 Description Fraction": "85",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "37",
                    "Dim 2 Description Fraction": "72",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "37",
                    "Dim 2 Description Fraction": "74 3/4",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "37",
                    "Dim 2 Description Fraction": "50",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "37",
                    "Dim 2 Description Fraction": "84",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "37",
                    "Dim 2 Description Fraction": "86",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "37",
                    "Dim 2 Description Fraction": "67",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "37",
                    "Dim 2 Description Fraction": "74",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "37",
                    "Dim 2 Description Fraction": "83",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "37",
                    "Dim 2 Description Fraction": "57",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "37 3/4",
                    "Dim 2 Description Fraction": "60",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "38",
                    "Dim 2 Description Fraction": "75",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "38",
                    "Dim 2 Description Fraction": "103",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "38",
                    "Dim 2 Description Fraction": "60",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "38",
                    "Dim 2 Description Fraction": "68",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "38",
                    "Dim 2 Description Fraction": "74 1/2",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "38",
                    "Dim 2 Description Fraction": "85",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "38",
                    "Dim 2 Description Fraction": "83",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "38",
                    "Dim 2 Description Fraction": "26",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "38",
                    "Dim 2 Description Fraction": "52",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "38",
                    "Dim 2 Description Fraction": "67",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "38",
                    "Dim 2 Description Fraction": "72",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "39",
                    "Dim 2 Description Fraction": "75",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "39",
                    "Dim 2 Description Fraction": "103",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "39",
                    "Dim 2 Description Fraction": "85",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "39",
                    "Dim 2 Description Fraction": "78 3/4",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "40",
                    "Dim 2 Description Fraction": "75",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "40",
                    "Dim 2 Description Fraction": "103",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "40",
                    "Dim 2 Description Fraction": "130",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "40",
                    "Dim 2 Description Fraction": "86 1/2",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "40",
                    "Dim 2 Description Fraction": "60",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "40",
                    "Dim 2 Description Fraction": "85",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "40",
                    "Dim 2 Description Fraction": "86",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "40",
                    "Dim 2 Description Fraction": "79 1/2",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "40",
                    "Dim 2 Description Fraction": "76 3/4",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "40",
                    "Dim 2 Description Fraction": "78 3/4",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "40 1/2",
                    "Dim 2 Description Fraction": "86 11/16",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "40 1/2",
                    "Dim 2 Description Fraction": "75",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "41",
                    "Dim 2 Description Fraction": "75",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "41",
                    "Dim 2 Description Fraction": "103",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "41",
                    "Dim 2 Description Fraction": "79",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "41",
                    "Dim 2 Description Fraction": "86",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "42",
                    "Dim 2 Description Fraction": "103",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "42",
                    "Dim 2 Description Fraction": "72",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "42",
                    "Dim 2 Description Fraction": "75",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "42",
                    "Dim 2 Description Fraction": "84",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "42",
                    "Dim 2 Description Fraction": "60",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "42",
                    "Dim 2 Description Fraction": "79",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "43",
                    "Dim 2 Description Fraction": "60",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "43",
                    "Dim 2 Description Fraction": "75",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "43",
                    "Dim 2 Description Fraction": "85",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "43",
                    "Dim 2 Description Fraction": "103",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "43",
                    "Dim 2 Description Fraction": "84",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "43",
                    "Dim 2 Description Fraction": "86",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "43",
                    "Dim 2 Description Fraction": "87",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "43",
                    "Dim 2 Description Fraction": "102",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "43",
                    "Dim 2 Description Fraction": "107",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "43",
                    "Dim 2 Description Fraction": "72",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "43",
                    "Dim 2 Description Fraction": "92",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "43",
                    "Dim 2 Description Fraction": "90",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "43",
                    "Dim 2 Description Fraction": "84 1/2",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "43",
                    "Dim 2 Description Fraction": "91",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "43",
                    "Dim 2 Description Fraction": "86 1/2",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "43",
                    "Dim 2 Description Fraction": "79",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "43",
                    "Dim 2 Description Fraction": "74",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "43",
                    "Dim 2 Description Fraction": "48",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "43",
                    "Dim 2 Description Fraction": "101",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "43 1/2",
                    "Dim 2 Description Fraction": "84 1/2",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "43 1/2",
                    "Dim 2 Description Fraction": "90 1/2",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "43 1/2",
                    "Dim 2 Description Fraction": "84 3/4",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "43 1/2",
                    "Dim 2 Description Fraction": "75",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "43 1/4",
                    "Dim 2 Description Fraction": "85",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "43 1/4",
                    "Dim 2 Description Fraction": "74 3/4",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "43 3/4",
                    "Dim 2 Description Fraction": "75",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "43 3/4",
                    "Dim 2 Description Fraction": "103",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "43 3/4",
                    "Dim 2 Description Fraction": "74 3/4",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "43 3/4",
                    "Dim 2 Description Fraction": "74 1/2",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "43 3/4",
                    "Dim 2 Description Fraction": "84",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "43 3/4",
                    "Dim 2 Description Fraction": "84 1/2",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "44",
                    "Dim 2 Description Fraction": "103",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "44",
                    "Dim 2 Description Fraction": "75",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "44",
                    "Dim 2 Description Fraction": "82 1/2",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "44",
                    "Dim 2 Description Fraction": "84",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "44",
                    "Dim 2 Description Fraction": "85",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "44",
                    "Dim 2 Description Fraction": "84 1/2",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "44",
                    "Dim 2 Description Fraction": "87",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "44",
                    "Dim 2 Description Fraction": "84 5/8",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "44",
                    "Dim 2 Description Fraction": "98 13/32",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "44",
                    "Dim 2 Description Fraction": "66",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "44",
                    "Dim 2 Description Fraction": "86",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "44",
                    "Dim 2 Description Fraction": "98",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "44",
                    "Dim 2 Description Fraction": "86 1/2",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "44",
                    "Dim 2 Description Fraction": "98 1/2",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "44",
                    "Dim 2 Description Fraction": "74",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "44",
                    "Dim 2 Description Fraction": "78 3/4",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "44",
                    "Dim 2 Description Fraction": "79",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "44",
                    "Dim 2 Description Fraction": "104",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "44",
                    "Dim 2 Description Fraction": "1 1/16",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "44",
                    "Dim 2 Description Fraction": "60",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "44 1/2",
                    "Dim 2 Description Fraction": "86 1/2",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "44 1/2",
                    "Dim 2 Description Fraction": "103",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "44 1/2",
                    "Dim 2 Description Fraction": "86 5/8",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "44 1/2",
                    "Dim 2 Description Fraction": "75",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "44 1/2",
                    "Dim 2 Description Fraction": "86",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "44 1/2",
                    "Dim 2 Description Fraction": "98 1/2",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "44 1/2",
                    "Dim 2 Description Fraction": "87",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "44 1/2",
                    "Dim 2 Description Fraction": "128",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "44 1/4",
                    "Dim 2 Description Fraction": "75",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "44 1/4",
                    "Dim 2 Description Fraction": "103",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "44 3/4",
                    "Dim 2 Description Fraction": "86 1/2",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "44 3/4",
                    "Dim 2 Description Fraction": "75",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "45",
                    "Dim 2 Description Fraction": "87",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "45",
                    "Dim 2 Description Fraction": "86",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "45",
                    "Dim 2 Description Fraction": "75",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "45",
                    "Dim 2 Description Fraction": "103",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "45 1/2",
                    "Dim 2 Description Fraction": "86 5/8",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "45 1/2",
                    "Dim 2 Description Fraction": "87",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "46",
                    "Dim 2 Description Fraction": "103",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "46",
                    "Dim 2 Description Fraction": "86",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "46",
                    "Dim 2 Description Fraction": "75",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "46",
                    "Dim 2 Description Fraction": "86 1/2",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "46",
                    "Dim 2 Description Fraction": "105",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "46 1/2",
                    "Dim 2 Description Fraction": "86 1/2",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "46 1/2",
                    "Dim 2 Description Fraction": "87",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "46 1/2",
                    "Dim 2 Description Fraction": "86 5/8",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "46 1/2",
                    "Dim 2 Description Fraction": "103",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "47",
                    "Dim 2 Description Fraction": "103",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "47",
                    "Dim 2 Description Fraction": "85",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "48",
                    "Dim 2 Description Fraction": "75",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "48",
                    "Dim 2 Description Fraction": "84 1/2",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "50",
                    "Dim 2 Description Fraction": "103",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "50",
                    "Dim 2 Description Fraction": "75",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "50",
                    "Dim 2 Description Fraction": "84",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "50",
                    "Dim 2 Description Fraction": "85",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "50",
                    "Dim 2 Description Fraction": "102 1/2",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "50",
                    "Dim 2 Description Fraction": "82 1/2",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "50",
                    "Dim 2 Description Fraction": "126",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "50",
                    "Dim 2 Description Fraction": "99",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "50",
                    "Dim 2 Description Fraction": "98 7/16",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "50",
                    "Dim 2 Description Fraction": "72",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "50",
                    "Dim 2 Description Fraction": "73",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "51",
                    "Dim 2 Description Fraction": "103",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "51",
                    "Dim 2 Description Fraction": "75",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "51",
                    "Dim 2 Description Fraction": "84",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "51",
                    "Dim 2 Description Fraction": "102 1/2",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "51",
                    "Dim 2 Description Fraction": "60",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "51",
                    "Dim 2 Description Fraction": "85",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "51",
                    "Dim 2 Description Fraction": "126",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "51",
                    "Dim 2 Description Fraction": "74 1/2",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "51 1/2",
                    "Dim 2 Description Fraction": "75",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "51 3/4",
                    "Dim 2 Description Fraction": "85",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "51 3/4",
                    "Dim 2 Description Fraction": "103",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "52",
                    "Dim 2 Description Fraction": "75",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "52",
                    "Dim 2 Description Fraction": "103",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "52",
                    "Dim 2 Description Fraction": "128",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "52",
                    "Dim 2 Description Fraction": "90",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "52",
                    "Dim 2 Description Fraction": "85",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "52",
                    "Dim 2 Description Fraction": "60",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "52",
                    "Dim 2 Description Fraction": "102 1/2",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "52",
                    "Dim 2 Description Fraction": "104",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "52",
                    "Dim 2 Description Fraction": "86 1/2",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "52",
                    "Dim 2 Description Fraction": "136 1/2",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "52",
                    "Dim 2 Description Fraction": "84 1/2",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "52",
                    "Dim 2 Description Fraction": "86 5/8",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "52",
                    "Dim 2 Description Fraction": "86",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "52",
                    "Dim 2 Description Fraction": "84",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "52",
                    "Dim 2 Description Fraction": "87",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "52",
                    "Dim 2 Description Fraction": "126",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "52",
                    "Dim 2 Description Fraction": "102",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "52",
                    "Dim 2 Description Fraction": "79",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "52",
                    "Dim 2 Description Fraction": "127 13/16",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "52",
                    "Dim 2 Description Fraction": "132 1/2",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "52",
                    "Dim 2 Description Fraction": "99",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "52",
                    "Dim 2 Description Fraction": "51",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "52 1/2",
                    "Dim 2 Description Fraction": "75",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "52 1/2",
                    "Dim 2 Description Fraction": "98 1/2",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "52 1/2",
                    "Dim 2 Description Fraction": "86 3/4",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "52 3/4",
                    "Dim 2 Description Fraction": "103",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "53",
                    "Dim 2 Description Fraction": "75",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "53",
                    "Dim 2 Description Fraction": "103",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "53",
                    "Dim 2 Description Fraction": "85",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "53",
                    "Dim 2 Description Fraction": "86 1/2",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "53",
                    "Dim 2 Description Fraction": "128",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "53",
                    "Dim 2 Description Fraction": "102",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "53",
                    "Dim 2 Description Fraction": "73",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "53",
                    "Dim 2 Description Fraction": "119",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "53",
                    "Dim 2 Description Fraction": "110",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "53",
                    "Dim 2 Description Fraction": "84 1/2",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "53",
                    "Dim 2 Description Fraction": "80",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "53",
                    "Dim 2 Description Fraction": "83",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "53",
                    "Dim 2 Description Fraction": "86",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "53",
                    "Dim 2 Description Fraction": "84 5/8",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "53",
                    "Dim 2 Description Fraction": "105",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "53",
                    "Dim 2 Description Fraction": "102 5/8",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "53",
                    "Dim 2 Description Fraction": "79",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "53",
                    "Dim 2 Description Fraction": "104",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "53",
                    "Dim 2 Description Fraction": "74",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "53 1/2",
                    "Dim 2 Description Fraction": "103",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "53 1/2",
                    "Dim 2 Description Fraction": "75",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "54",
                    "Dim 2 Description Fraction": "75",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "54",
                    "Dim 2 Description Fraction": "103",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "54",
                    "Dim 2 Description Fraction": "86 1/2",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "54",
                    "Dim 2 Description Fraction": "85",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "54",
                    "Dim 2 Description Fraction": "128",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "54",
                    "Dim 2 Description Fraction": "84 1/2",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "54",
                    "Dim 2 Description Fraction": "104",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "54",
                    "Dim 2 Description Fraction": "64",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "54",
                    "Dim 2 Description Fraction": "84 5/8",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "54",
                    "Dim 2 Description Fraction": "86 3/4",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "54",
                    "Dim 2 Description Fraction": "84 3/4",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "54",
                    "Dim 2 Description Fraction": "86",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "54",
                    "Dim 2 Description Fraction": "136",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "54",
                    "Dim 2 Description Fraction": "87",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "54",
                    "Dim 2 Description Fraction": "84",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "54",
                    "Dim 2 Description Fraction": "86 5/8",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "54",
                    "Dim 2 Description Fraction": "85 1/2",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "54",
                    "Dim 2 Description Fraction": "106",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "54",
                    "Dim 2 Description Fraction": "84 7/8",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "54",
                    "Dim 2 Description Fraction": "126",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "54 1/2",
                    "Dim 2 Description Fraction": "103",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "54 1/2",
                    "Dim 2 Description Fraction": "128",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "54 1/2",
                    "Dim 2 Description Fraction": "84 5/8",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "54 1/2",
                    "Dim 2 Description Fraction": "86 1/2",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "55",
                    "Dim 2 Description Fraction": "84 1/2",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "55",
                    "Dim 2 Description Fraction": "128",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "55",
                    "Dim 2 Description Fraction": "103",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "55",
                    "Dim 2 Description Fraction": "85",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "55",
                    "Dim 2 Description Fraction": "75",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "55",
                    "Dim 2 Description Fraction": "103 11/32",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "55",
                    "Dim 2 Description Fraction": "87",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "57",
                    "Dim 2 Description Fraction": "103",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "62",
                    "Dim 2 Description Fraction": "103",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "63",
                    "Dim 2 Description Fraction": "103",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "63",
                    "Dim 2 Description Fraction": "75",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "64",
                    "Dim 2 Description Fraction": "103",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "64",
                    "Dim 2 Description Fraction": "128",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "64",
                    "Dim 2 Description Fraction": "85",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "64",
                    "Dim 2 Description Fraction": "110",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "64",
                    "Dim 2 Description Fraction": "102 1/2",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "64",
                    "Dim 2 Description Fraction": "102",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "64",
                    "Dim 2 Description Fraction": "86",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "64",
                    "Dim 2 Description Fraction": "85 1/2",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "65",
                    "Dim 2 Description Fraction": "128",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "65",
                    "Dim 2 Description Fraction": "103",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "65",
                    "Dim 2 Description Fraction": "128 3/8",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "65",
                    "Dim 2 Description Fraction": "85",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "65",
                    "Dim 2 Description Fraction": "103 3/16",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "65 3/4",
                    "Dim 2 Description Fraction": "103",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "66",
                    "Dim 2 Description Fraction": "103",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "66",
                    "Dim 2 Description Fraction": "128",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "66 1/2",
                    "Dim 2 Description Fraction": "103",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "67",
                    "Dim 2 Description Fraction": "103",
                    "Attachments": [
                        "BW"
                    ]
                },
                {
                    "Dim 1 Description Fraction": "75",
                    "Dim 2 Description Fraction": "104",
                    "Attachments": [
                        "BW"
                    ]
                }
            ]
        }
    ]
}