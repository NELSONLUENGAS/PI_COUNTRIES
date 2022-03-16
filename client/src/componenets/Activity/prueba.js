const newArray = [
    {
    "id": "COL",
    "name": "Colombia",
    "image": "https://flagcdn.com/co.svg",
    "continents": "South America",
    "capital": [
    "Bogotá"
    ],
    "subregion": "South America",
    "area": 1141748,
    "population": 50882884,
    "activities": [
    {
    "name": "Rapel",
    "difficulty": "3",
    "duration": "2 dias",
    "season": "Verano"
    }
    ]
    },
    {
    "id": "VEN",
    "name": "Venezuela",
    "image": "https://flagcdn.com/ve.svg",
    "continents": "South America",
    "capital": [
    "Caracas"
    ],
    "subregion": "South America",
    "area": 916445,
    "population": 28435943,
    "activities": [
    {
    "name": "Rapel",
    "difficulty": "4",
    "duration": "2 dias",
    "season": "Primavera"
    }
    ]
    },
    {
    "id": "BRA",
    "name": "Brazil",
    "image": "https://flagcdn.com/br.svg",
    "continents": "South America",
    "capital": [
    "Brasília"
    ],
    "subregion": "South America",
    "area": 8515767,
    "population": 212559409,
    "activities": [
    {
    "name": "Rapel",
    "difficulty": "5",
    "duration": "2 dias",
    "season": "Otoño"
    }
    ]
    },
    {
    "id": "ATF",
    "name": "French Southern and Antarctic Lands",
    "image": "https://flagcdn.com/tf.svg",
    "continents": "Antarctica",
    "capital": [
    "Port-aux-Français"
    ],
    "subregion": "Has no Subregion",
    "area": 7747,
    "population": 400,
    "activities": [ ]
    },
    {
    "id": "TJK",
    "name": "Tajikistan",
    "image": "https://flagcdn.com/tj.svg",
    "continents": "Asia",
    "capital": [
    "Dushanbe"
    ],
    "subregion": "Central Asia",
    "area": 143100,
    "population": 9537642,
    "activities": [ ]
    }]
    
    function filter(newArray, string, Array = []){
        for(let el of newArray){
            if(el.activities.length){
                for(let act of el.activities){
                    if(act.name === string){
                        Array.push(el)
                    }
                }
            }
        }
        return Array;
    }