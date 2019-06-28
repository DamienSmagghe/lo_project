export const datas = {
    institutions: [
      {
        name: "ONU",
        description: "L'ONU est une institution mondiale qui comprend 193 pays. Créée en 1945, l'ONU a remplacé la Société des Nations. Elle a pour principal but de préserver la paix et la sécurité dans le monde par la diplomatie.",
        position: {
          lat: 40.7808,
          long: -73.9772
        },
        interventions: 
        [
          {
            countryISO: "COD",
            name: "Conflit d'Ituri",
            countryUN: 180,
            date: 1999,
            engagedForce: 2000
          },
          {
            countryISO: "LBN",
            name: "Force Intérimaire des Nations unies au Liban",
            countryUN: 422,
            date: 1978,
            engagedForce: 11271
          },
          {
            countryISO: "SDN",
            name: "Force intérimaire de sécurité des Nations unies pour Abiyé",
            countryUN: 729,
            date: 2011,
            engagedForce: 3948
          },
          {
            countryISO: "MLI",
            name: "Mission multidimensionnelle intégrée des Nations unies pour la stabilisation au Mali",
            countryUN: 466,
            date: 2013,
            engagedForce: 10000
          },
          {
            countryISO: "ESH",
            name: "	Mission des Nations unies pour l'Organisation d'un Référendum au Sahara Occidental",
            countryUN: 732,
            date: 1991,
            engagedForce: 3000
          },
        ],
      },
    ],
    countries: [
        {
        name: "Etats-Unis",

        countryISO: "USA",
        countryUN: 842,
        description: "Un des états possédant le plus de puissance militaire",
        interventions: 
        [
          {
            countryISO: "PHL",
            name: "Insurection Moro aux phillipines",
            countryUN: 608,
            date: "2002"
          },
          {
            countryISO: "NGA",
            name: "Insurrection djihadiste au Nigeria",
            countryUN: 566,
            date: "2002"
          },
          {
            countryISO: "SYR",
            name: "Guerre civile syrienne",
            countryUN: 760,
            date: 2011
          },
          {
            countryISO: "YEM",
            name: "Guerre civile yémenite",
            countryUN: 720
          },
          {
            countryISO: "LBY",
            name: "Deuxième guerre civile libyenne",
            countryUN: 434
          },
          {
            countryISO: "AFG",
            name: "Guerre d'Afghanistan",
            countryUN: 4
          },
          {
            countryISO: "PAK",
            name: "Conflit armé du Nord-Ouest du Pakistan",
            countryUN: 586,
          },
        ]
      },
      {
        name: "Australie",
        countryISO: "AUS",
        countryUN: 36,
        description: "L'Australie est un pays de l'hémisphère sud dont la superficie couvre la plus grande partie de l'Océanie. Il intervient militairement dans un certain nombre de pays",
        interventions: [
          {
            countryISO: "PHL",
            name: "Insurection Moro aux phillipines",
            countryUN: 608
          },
          {
              countryISO: "SYR",
              name: "Guerre civile syrienne",
              countryUN: 760,
              date: 2011
          },
          {
              countryISO: "AFG",
              name: "Guerre d'Afghanistan",
              countryUN: 4
          },
        ]
      },
      {
        name: "Cameroun",
        countryISO: "CMR",
        countryUN: 120,
        description: "Le Cameroun est un pays de centre Afrique, il intervient dans les pays voisins pour assiter les gouvernements",
        interventions: [
          {
              countryISO: "NGA",
              name: "Insurrection djihadiste au Nigeria",
              countryUN: 566
          }
        ]
      },
      {
          name: "Tchad",
          countryISO: "TCD",
          countryUN: 148,
          description: "Le Tchad est un pays de centre Afrique, il intervient dans les pays voisins pour assiter les gouvernements",
          interventions: [
            {
              countryISO: "NGA",
              name: "Insurrection djihadiste au Nigeria",
              countryUN: 566
            }
          ]
          
      },
      {
        name: "Niger",
        countryISO: "NER",
        countryUN: 562,
        description: "Le Niger est un pays de centre Afrique, il intervient dans les pays voisins pour assiter les gouvernements",
        interventions: [
          {
              countryISO: "NGA",
              name: "Insurrection djihadiste au Nigeria",
              countryUN: 566
          }
        ]
      },
      {
          name: "France",
          countryISO: "FRA",
          countryUN: 251,
          description: "La France est un des pays européen qui intervient la plus militairement à l'international",
          interventions: [
              {
                  countryISO: "NGA",
                  name: "Insurrection djihadiste au Nigeria",
                  countryUN: 566
              },
              {
                  countryISO: "SYR",
                  name: "Guerre civile syrienne",
                  countryUN: 760,
                  date: 2011
              },
            ]
      },
      {
          name: "Royaume-Unis",
          countryISO: "GBR",
          countryUN: 826,
          description: "Le Royaume-Unis est un pays européen intervenant en de rares occasions à l'international",
          interventions: [
              {
                  countryISO: "SYR",
                  name: "Guerre civile syrienne",
                  countryUN: 760,
                  date: 2011
              },
            ]
          
      },
      {
          name: "Émirats arabes unis",
          countryISO: "ARE",
          countryUN: 784,
          description: "Les Émirats arabes unis interviennent uniquement dans ses pays environnents",
          interventions: [
              {
                  countryISO: "SYR",
                  name: "Guerre civile syrienne",
                  countryUN: 760,
                  date: 2011
              },
            ]
      },
      {
          name: "Pays-Bas",
          countryISO: "NLD",
          countryUN: 528,
          description: "Le Pays-Bas est un pays européen intervenant en de rares occasions à l'international",
          interventions: [
              {
                  countryISO: "SYR",
                  name: "Guerre civile syrienne",
                  countryUN: 760,
                  date: 2011
              },
            ]
      },
      {
        name: "Chine",
        countryISO: "CHN",
        countryUN: 156,
        description: "La Chine dévellope de plus en plus son arcenal militaire et commence à intervenir à l'international",
        interventions: [
          {
            countryISO: 'MMR',
            name: 'Conflit armé birman',
            countryUN: 104,
            date : 1947
          },
        ]
      },
      {
        name: "Birmanie",
        countryISO: "MMR",
        countryUN: 104,
        description: "La Birmanie est un petit pays d'Asie qui intervient rarement à l'international",
        interventions: [
          {
            countryISO: 'IND',
            name: `Insurrections au Nord-Est de l'Inde`,
            countryUN: 699,
            date : 1963
          },
        ]
      },
      {
        name: "Bangladesh",
        countryISO: "BGD",
        countryUN: 50,
        description: "La Bangladesh est un petit pays d'Asie qui intervient rarement à l'international",
        interventions: [
          {
            countryISO: 'IND',
            name: `Insurrections au Nord-Est de l'Inde`,
            countryUN: 699,
            date : 1963
          },
        ]
      },
      {
        name: "Bhoutan",
        countryISO: "BTN",
        countryUN: 64,
        description: "La Bhoutan est un petit pays d'Asie qui intervient rarement à l'international",
        interventions: [
          {
            countryISO: 'IND',
            name: `Insurrections au Nord-Est de l'Inde`,
            countryUN: 699,
            date : 1963
          },
        ]
      },
      {
        name: "Russie",
        countryISO: "RUS",
        countryUN: 643,
        description: "La Russie est un pays gardant une certaine puissance militaire. Il intervient dans surtout dans ses pays frontaliers",
        interventions: [
          {
            countryISO: 'MMR',
            name: 'Conflit armé birman',
            countryUN: 104,
            date : 1947
          },
          {
              countryISO: "SYR",
              name: "Guerre civile syrienne",
              countryUN: 760,
              date: 2011
            },
          ]
        
      },
      {
        name: "Pakistan",
        countryISO: "PAK",
        countryUN: 586,
        description: "La Pakistan est un petit pays du moyen orient qui est souvent sujet au conflit avec ses pays frontaliers",
        interventions: [
          {
            countryISO: "AFG",
            name: "Guerres baloutches",
            countryUN: 4,
            date: 1948,
            engagedForce: 40000
          },
          {
            countryISO: "IRN",
            name: "Guerres baloutches",
            countryUN: 364,
            date: 1948,
            engagedForce: 40000
          }
        ]
        
      },
      {
        name: "Iran",
        countryISO: "IRN",
        countryUN: 364,
        description: "L'Iran est un petit pays du moyen orient qui est souvent sujet au conflit avec ses pays frontaliers",
        interventions: [
          {
            countryISO: "AFG",
            name: "Guerres baloutches",
            countryUN: 4,
            date: 1948,
            engagedForce: 3000
          },
          {
            countryISO: "PAK",
            name: "Guerres baloutches",
            countryUN: 586,
            date: 1948,
            engagedForce: 3000
          },
          {
            countryISO: "SYR",
            name: "Guerre civile syrienne",
            countryUN: 760
          },
        ]
      },
      {
        name: "Ouganda",
        countryISO: "UGA",
        countryUN: 800,
        description: "L'Ouganda est un petit pays du moyen orient qui intervient rarement à l'international",
        interventions: [
          {
            countryISO: "COD",
            name: "Conflit d'Ituri",
            countryUN: 180,
            date: 1999,
            engagedForce: 750
          },
          {
            countryISO: "SDN",
            name: "Guerre du Darfour",
            countryUN: 729,
            date: 2003
          },
        ]
      },
      {
        name: "Soudan du Sud",
        countryISO: "SSD",
        countryUN: 728,
        description: "Le Soudan du Sud rencontre actuellement des conflits internes et internationals important.",
        interventions: [
          {
            countryISO: "SDN",
            name: "Guerre du Darfour",
            countryUN: 729,
            date: 2003
          },
        ]
      },
      {
        name: "Israël",
        countryISO: "ISR",
        countryUN: 376,
        description: "L'Israël est un pays en conflit depuis des années avec son voisin, la Palestine",
        interventions: [
          {
            countryISO: "PSE",
            name: "Conflit israélo-palestinien",
            countryUN: 275,
            date: 1948,
            engagedForce: 100000
          }
        ]
        
      },
      {
        name: "Palestine",
        countryISO: "PSE",
        countryUN: 275,
        description: "La Palestine est un pays en conflit depuis des années avec son voisin, la Israël",
        interventions: [
          {
            countryISO: "ISR",
            name: "Conflit israélo-palestinien",
            countryUN: 376,
            date: 1948,
            engagedForce: 25500
          }
        ]
        
      },
      {
        name: "Afghanistan",
        countryISO: "AFG",
        countryUN: 4,
        description: "L'Afghanistan est un pays régulièrement un conflit interne et international",
        interventions:
        [
          {
            countryISO: "IRN",
            name: "Guerres baloutches",
            countryUN: 364,
            date: 1948,
          }, 
          {
            countryISO: "PAK",
            name: "Guerres baloutches",
            countryUN: 586,
            date: 1948,
          },
        ]
      }
    ]
  }
