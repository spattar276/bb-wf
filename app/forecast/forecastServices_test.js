describe("weatherReportApp.forecast module: testing the factory", function () {
    var cityList = [{
        "id": 6255149,
        "name": "North America",
        "country": "",
        "coord": {
            "lon": -100.546883,
            "lat": 46.073231
        }
    },
        {
            "id": 3575514,
            "name": "Brumaire",
            "country": "KN",
            "coord": {
                "lon": -62.73333,
                "lat": 17.299999
            }
        },
        {
            "id": 1861387,
            "name": "Ishikawa-ken",
            "country": "JP",
            "coord": {
                "lon": 136.770493,
                "lat": 36.77145
            }
        },
        {
            "id": 1857578,
            "name": "Matoba",
            "country": "JP",
            "coord": {
                "lon": 133.949997,
                "lat": 34.25
            }
        },
        {
            "id": 1299298,
            "name": "Pya",
            "country": "MM",
            "coord": {
                "lon": 95.599998,
                "lat": 21.51667
            }
        },
        {
            "id": 3256023,
            "name": "Kalanac",
            "country": "BA",
            "coord": {
                "lon": 18.78389,
                "lat": 44.86861
            }
        },
        {
            "id": 2921044,
            "name": "Federal Republic of Germany",
            "country": "DE",
            "coord": {
                "lon": 10.5,
                "lat": 51.5
            }
        },
        {
            "id": 2861876,
            "name": "Land Nordrhein-Westfalen",
            "country": "DE",
            "coord": {
                "lon": 7,
                "lat": 51.5
            }
        },
        {
            "id": 802899,
            "name": "Mutaykutan",
            "country": "RU",
            "coord": {
                "lon": 47.660641,
                "lat": 42.818859
            }
        },
        {
            "id": 523523,
            "name": "Nalchik",
            "country": "RU",
            "coord": {
                "lon": 43.618889,
                "lat": 43.498058
            }
        },
        {
            "id": 546448,
            "name": "Kolganov",
            "country": "RU",
            "coord": {
                "lon": 40.066669,
                "lat": 44.366669
            }
        },
        {
            "id": 500023,
            "name": "Rybatskiy",
            "country": "RU",
            "coord": {
                "lon": 44.166389,
                "lat": 44.799171
            }
        },
        {
            "id": 2207349,
            "name": "Bellara",
            "country": "AU",
            "coord": {
                "lon": 153.149597,
                "lat": -27.063919
            }
        },
        {
            "id": 7870412,
            "name": "Bartlett",
            "country": "ZA",
            "coord": {
                "lon": 28.25263,
                "lat": -26.17061
            }
        },
        {
            "id": 961935,
            "name": "Rietfontein",
            "country": "ZA",
            "coord": {
                "lon": 29.200001,
                "lat": -25.5
            }
        },
        {
            "id": 3371200,
            "name": "Hardap",
            "country": "NA",
            "coord": {
                "lon": 17.25,
                "lat": -24.5
            }
        },
        {
            "id": 1016666,
            "name": "Botswana",
            "country": "ZA",
            "coord": {
                "lon": 30.533331,
                "lat": -24.33333
            }
        },
        {
            "id": 3858204,
            "name": "El Destierro",
            "country": "AR",
            "coord": {
                "lon": -62.47662,
                "lat": -24.1
            }
        },
        {
            "id": 4070245,
            "name": "Jones Crossroads",
            "country": "US",
            "coord": {
                "lon": -85.484657,
                "lat": 31.21073
            }
        },
        {
            "id": 4344544,
            "name": "Vernon Parish",
            "country": "US",
            "coord": {
                "lon": -93.183502,
                "lat": 31.11685
            }
        },
        {
            "id": 4215307,
            "name": "Pennick",
            "country": "US",
            "coord": {
                "lon": -81.55899,
                "lat": 31.313
            }
        },
        {
            "id": 5285039,
            "name": "Black Bear Spring",
            "country": "US",
            "coord": {
                "lon": -110.288139,
                "lat": 31.386209
            }
        },
        {
            "id": 4673179,
            "name": "Bee House",
            "country": "US",
            "coord": {
                "lon": -98.081139,
                "lat": 31.40266
            }
        },
        {
            "id": 6078447,
            "name": "Morden",
            "country": "CA",
            "coord": {
                "lon": -98.101357,
                "lat": 49.191898
            }
        },
        {
            "id": 2201316,
            "name": "Nasirotu",
            "country": "FJ",
            "coord": {
                "lon": 178.25,
                "lat": -18.033331
            }
        },
        {
            "id": 1938756,
            "name": "Sisali",
            "country": "ID",
            "coord": {
                "lon": 124.531387,
                "lat": -9.19167
            }
        },
        {
            "id": 2009359,
            "name": "Puntan",
            "country": "ID",
            "coord": {
                "lon": 110.553329,
                "lat": -7.51944
            }
        },
        {
            "id": 2566086,
            "name": "Tsiémé-Mandiélé",
            "country": "CG",
            "coord": {
                "lon": 15.2875,
                "lat": -4.22694
            }
        },
        {
            "id": 154733,
            "name": "Masama",
            "country": "TZ",
            "coord": {
                "lon": 37.183331,
                "lat": -3.23333
            }
        },
        {
            "id": 1630349,
            "name": "Purukcahu",
            "country": "ID",
            "coord": {
                "lon": 114.583328,
                "lat": -0.58333
            }
        },
        {
            "id": 2224928,
            "name": "Néméyong II",
            "country": "CM",
            "coord": {
                "lon": 13.5,
                "lat": 2.91667
            }
        },
        {
            "id": 6716279,
            "name": "Pondok Genteng",
            "country": "ID",
            "coord": {
                "lon": 99.0709,
                "lat": 3.2245
            }
        },
        {
            "id": 2384618,
            "name": "Mbongoté",
            "country": "CF",
            "coord": {
                "lon": 18.283331,
                "lat": 4.25
            }
        },
        {
            "id": 378867,
            "name": "Amiling",
            "country": "SS",
            "coord": {
                "lon": 32.355831,
                "lat": 4.19417
            }
        },
        {
            "id": 2230362,
            "name": "Kélkoto",
            "country": "CM",
            "coord": {
                "lon": 11.16667,
                "lat": 4.43333
            }
        },
        {
            "id": 343846,
            "name": "Angetu",
            "country": "ET",
            "coord": {
                "lon": 39.48333,
                "lat": 6.33333
            }
        },
        {
            "id": 370366,
            "name": "Massa",
            "country": "SD",
            "coord": {
                "lon": 29.466669,
                "lat": 10.98333
            }
        },
        {
            "id": 365618,
            "name": "Tumko",
            "country": "SD",
            "coord": {
                "lon": 24.6,
                "lat": 12.01667
            }
        },
        {
            "id": 524894,
            "name": "Moskva",
            "country": "RU",
            "coord": {
                "lon": 37.606667,
                "lat": 55.761665
            }
        },
        {
            "id": 1861060,
            "name": "Japan",
            "country": "JP",
            "coord": {
                "lon": 139.753098,
                "lat": 35.68536
            }
        },
        {
            "id": 2130037,
            "name": "Hokkaidō",
            "country": "JP",
            "coord": {
                "lon": 141.346603,
                "lat": 43.06451
            }
        },
        {
            "id": 6199126,
            "name": "Sanggrahan",
            "country": "ID",
            "coord": {
                "lon": 110.246109,
                "lat": -7.46056
            }
        },
        {
            "id": 6388445,
            "name": "Karangmangle",
            "country": "ID",
            "coord": {
                "lon": 109.0075,
                "lat": -7.43028
            }
        },
        {
            "id": 494806,
            "name": "Sheremetyevskiy",
            "country": "RU",
            "coord": {
                "lon": 37.491112,
                "lat": 55.98
            }
        },
        {
            "id": 467104,
            "name": "Yershovo",
            "country": "RU",
            "coord": {
                "lon": 36.858055,
                "lat": 55.771111
            }
        },
        {
            "id": 462352,
            "name": "Znamenka",
            "country": "RU",
            "coord": {
                "lon": 35.981392,
                "lat": 52.896671
            }
        },
        {
            "id": 2267057,
            "name": "Lisbon",
            "country": "PT",
            "coord": {
                "lon": -9.13333,
                "lat": 38.716671
            }
        },
        {
            "id": 3082707,
            "name": "Walbrzych",
            "country": "PL",
            "coord": {
                "lon": 16.284321,
                "lat": 50.771412
            }
        },
        {
            "id": 3091150,
            "name": "Naklo nad Notecia",
            "country": "PL",
            "coord": {
                "lon": 17.60181,
                "lat": 53.142139
            }
        },
        {
            "id": 1784658,
            "name": "Zhengzhou",
            "country": "CN",
            "coord": {
                "lon": 113.648613,
                "lat": 34.757778
            }
        },
        {
            "id": 7301040,
            "name": "Tonyrefail",
            "country": "GB",
            "coord": {
                "lon": -3.41503,
                "lat": 51.580238
            }
        },
        {
            "id": 1348747,
            "name": "Bankra",
            "country": "IN",
            "coord": {
                "lon": 88.298058,
                "lat": 22.627501
            }
        },
        {
            "id": 6255148,
            "name": "Europe",
            "country": "",
            "coord": {
                "lon": 9.140625,
                "lat": 48.69096
            }
        }];
    var citydetails = {"cod":"200","message":0.0036,"cnt":40,"list":[{"dt":1485799200,"main":{"temp":261.45,"temp_min":259.086,"temp_max":261.45,"pressure":1023.48,"sea_level":1045.39,"grnd_level":1023.48,"humidity":79,"temp_kf":2.37},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"02n"}],"clouds":{"all":8},"wind":{"speed":4.77,"deg":232.505},"snow":{},"sys":{"pod":"n"},"dt_txt":"2017-01-30 18:00:00"},{"dt":1485810000,"main":{"temp":261.41,"temp_min":259.638,"temp_max":261.41,"pressure":1022.41,"sea_level":1044.35,"grnd_level":1022.41,"humidity":76,"temp_kf":1.78},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":32},"wind":{"speed":4.76,"deg":240.503},"snow":{"3h":0.011},"sys":{"pod":"n"},"dt_txt":"2017-01-30 21:00:00"},{"dt":1485820800,"main":{"temp":261.76,"temp_min":260.571,"temp_max":261.76,"pressure":1021.34,"sea_level":1043.21,"grnd_level":1021.34,"humidity":84,"temp_kf":1.18},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13n"}],"clouds":{"all":68},"wind":{"speed":4.71,"deg":243},"snow":{"3h":0.058},"sys":{"pod":"n"},"dt_txt":"2017-01-31 00:00:00"},{"dt":1485831600,"main":{"temp":261.46,"temp_min":260.865,"temp_max":261.46,"pressure":1019.95,"sea_level":1041.79,"grnd_level":1019.95,"humidity":82,"temp_kf":0.59},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13n"}],"clouds":{"all":68},"wind":{"speed":4.46,"deg":244.5},"snow":{"3h":0.05225},"sys":{"pod":"n"},"dt_txt":"2017-01-31 03:00:00"},{"dt":1485842400,"main":{"temp":260.981,"temp_min":260.981,"temp_max":260.981,"pressure":1018.96,"sea_level":1040.84,"grnd_level":1018.96,"humidity":81,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"clouds":{"all":80},"wind":{"speed":4.21,"deg":245.005},"snow":{"3h":0.19625},"sys":{"pod":"d"},"dt_txt":"2017-01-31 06:00:00"},{"dt":1485853200,"main":{"temp":262.308,"temp_min":262.308,"temp_max":262.308,"pressure":1018.1,"sea_level":1039.77,"grnd_level":1018.1,"humidity":91,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"clouds":{"all":88},"wind":{"speed":4.1,"deg":249.006},"snow":{"3h":0.535},"sys":{"pod":"d"},"dt_txt":"2017-01-31 09:00:00"},{"dt":1485864000,"main":{"temp":263.76,"temp_min":263.76,"temp_max":263.76,"pressure":1016.86,"sea_level":1038.4,"grnd_level":1016.86,"humidity":87,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"clouds":{"all":68},"wind":{"speed":3.87,"deg":254.5},"snow":{"3h":0.21},"sys":{"pod":"d"},"dt_txt":"2017-01-31 12:00:00"},{"dt":1485874800,"main":{"temp":264.182,"temp_min":264.182,"temp_max":264.182,"pressure":1016.19,"sea_level":1037.77,"grnd_level":1016.19,"humidity":89,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13n"}],"clouds":{"all":76},"wind":{"speed":3.67,"deg":257.001},"snow":{"3h":0.1375},"sys":{"pod":"n"},"dt_txt":"2017-01-31 15:00:00"},{"dt":1485885600,"main":{"temp":264.67,"temp_min":264.67,"temp_max":264.67,"pressure":1015.32,"sea_level":1036.94,"grnd_level":1015.32,"humidity":86,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13n"}],"clouds":{"all":88},"wind":{"speed":3.61,"deg":262.503},"snow":{"3h":0.1425},"sys":{"pod":"n"},"dt_txt":"2017-01-31 18:00:00"},{"dt":1485896400,"main":{"temp":265.436,"temp_min":265.436,"temp_max":265.436,"pressure":1014.27,"sea_level":1035.76,"grnd_level":1014.27,"humidity":90,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13n"}],"clouds":{"all":80},"wind":{"speed":3.67,"deg":266.5},"snow":{"3h":0.1625},"sys":{"pod":"n"},"dt_txt":"2017-01-31 21:00:00"},{"dt":1485907200,"main":{"temp":266.104,"temp_min":266.104,"temp_max":266.104,"pressure":1013.1,"sea_level":1034.62,"grnd_level":1013.1,"humidity":90,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13n"}],"clouds":{"all":80},"wind":{"speed":3.81,"deg":269.004},"snow":{"3h":0.1025},"sys":{"pod":"n"},"dt_txt":"2017-02-01 00:00:00"},{"dt":1485918000,"main":{"temp":266.904,"temp_min":266.904,"temp_max":266.904,"pressure":1011.96,"sea_level":1033.47,"grnd_level":1011.96,"humidity":89,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13n"}],"clouds":{"all":76},"wind":{"speed":4.26,"deg":274.002},"snow":{"3h":0.12},"sys":{"pod":"n"},"dt_txt":"2017-02-01 03:00:00"},{"dt":1485928800,"main":{"temp":268.102,"temp_min":268.102,"temp_max":268.102,"pressure":1011.23,"sea_level":1032.62,"grnd_level":1011.23,"humidity":89,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"clouds":{"all":76},"wind":{"speed":4.4,"deg":283.501},"snow":{"3h":0.13},"sys":{"pod":"d"},"dt_txt":"2017-02-01 06:00:00"},{"dt":1485939600,"main":{"temp":270.269,"temp_min":270.269,"temp_max":270.269,"pressure":1010.85,"sea_level":1032.1,"grnd_level":1010.85,"humidity":92,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"clouds":{"all":64},"wind":{"speed":4.53,"deg":297.5},"snow":{"3h":0.1875},"sys":{"pod":"d"},"dt_txt":"2017-02-01 09:00:00"},{"dt":1485950400,"main":{"temp":270.585,"temp_min":270.585,"temp_max":270.585,"pressure":1010.49,"sea_level":1031.65,"grnd_level":1010.49,"humidity":89,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"clouds":{"all":76},"wind":{"speed":4.31,"deg":302.004},"snow":{"3h":0.065},"sys":{"pod":"d"},"dt_txt":"2017-02-01 12:00:00"},{"dt":1485961200,"main":{"temp":269.661,"temp_min":269.661,"temp_max":269.661,"pressure":1010.22,"sea_level":1031.49,"grnd_level":1010.22,"humidity":89,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13n"}],"clouds":{"all":68},"wind":{"speed":4.91,"deg":296.5},"snow":{"3h":0.0825},"sys":{"pod":"n"},"dt_txt":"2017-02-01 15:00:00"},{"dt":1485972000,"main":{"temp":269.155,"temp_min":269.155,"temp_max":269.155,"pressure":1009.95,"sea_level":1031.3,"grnd_level":1009.95,"humidity":89,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13n"}],"clouds":{"all":80},"wind":{"speed":5.7,"deg":310.501},"snow":{"3h":0.11},"sys":{"pod":"n"},"dt_txt":"2017-02-01 18:00:00"},{"dt":1485982800,"main":{"temp":268.056,"temp_min":268.056,"temp_max":268.056,"pressure":1011.21,"sea_level":1032.49,"grnd_level":1011.21,"humidity":89,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13n"}],"clouds":{"all":68},"wind":{"speed":5.56,"deg":333},"snow":{"3h":0.225},"sys":{"pod":"n"},"dt_txt":"2017-02-01 21:00:00"},{"dt":1485993600,"main":{"temp":265.803,"temp_min":265.803,"temp_max":265.803,"pressure":1013.79,"sea_level":1035.06,"grnd_level":1013.79,"humidity":83,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13n"}],"clouds":{"all":8},"wind":{"speed":4.8,"deg":355.004},"snow":{"3h":0.03},"sys":{"pod":"n"},"dt_txt":"2017-02-02 00:00:00"},{"dt":1486004400,"main":{"temp":263.381,"temp_min":263.381,"temp_max":263.381,"pressure":1015.66,"sea_level":1037.16,"grnd_level":1015.66,"humidity":84,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":4.2,"deg":348.503},"snow":{},"sys":{"pod":"n"},"dt_txt":"2017-02-02 03:00:00"},{"dt":1486015200,"main":{"temp":261.85,"temp_min":261.85,"temp_max":261.85,"pressure":1017.63,"sea_level":1039.22,"grnd_level":1017.63,"humidity":76,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":3.81,"deg":345.502},"snow":{},"sys":{"pod":"d"},"dt_txt":"2017-02-02 06:00:00"},{"dt":1486026000,"main":{"temp":263.455,"temp_min":263.455,"temp_max":263.455,"pressure":1019.32,"sea_level":1040.84,"grnd_level":1019.32,"humidity":84,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":3.06,"deg":344.004},"snow":{},"sys":{"pod":"d"},"dt_txt":"2017-02-02 09:00:00"},{"dt":1486036800,"main":{"temp":264.015,"temp_min":264.015,"temp_max":264.015,"pressure":1020.41,"sea_level":1041.88,"grnd_level":1020.41,"humidity":85,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":2.52,"deg":334.501},"snow":{},"sys":{"pod":"d"},"dt_txt":"2017-02-02 12:00:00"},{"dt":1486047600,"main":{"temp":259.684,"temp_min":259.684,"temp_max":259.684,"pressure":1021.52,"sea_level":1043.21,"grnd_level":1021.52,"humidity":76,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":2.48,"deg":320.501},"snow":{"3h":0.0024999999999999},"sys":{"pod":"n"},"dt_txt":"2017-02-02 15:00:00"},{"dt":1486058400,"main":{"temp":255.188,"temp_min":255.188,"temp_max":255.188,"pressure":1022.09,"sea_level":1044.09,"grnd_level":1022.09,"humidity":66,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02n"}],"clouds":{"all":24},"wind":{"speed":1.23,"deg":283.003},"snow":{},"sys":{"pod":"n"},"dt_txt":"2017-02-02 18:00:00"},{"dt":1486069200,"main":{"temp":255.594,"temp_min":255.594,"temp_max":255.594,"pressure":1022.03,"sea_level":1044.12,"grnd_level":1022.03,"humidity":64,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"clouds":{"all":48},"wind":{"speed":1.22,"deg":244.502},"snow":{},"sys":{"pod":"n"},"dt_txt":"2017-02-02 21:00:00"},{"dt":1486080000,"main":{"temp":256.96,"temp_min":256.96,"temp_max":256.96,"pressure":1021.8,"sea_level":1043.77,"grnd_level":1021.8,"humidity":66,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"clouds":{"all":44},"wind":{"speed":1.23,"deg":237.506},"snow":{},"sys":{"pod":"n"},"dt_txt":"2017-02-03 00:00:00"},{"dt":1486090800,"main":{"temp":258.109,"temp_min":258.109,"temp_max":258.109,"pressure":1020.97,"sea_level":1042.99,"grnd_level":1020.97,"humidity":77,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"clouds":{"all":80},"wind":{"speed":1.21,"deg":234.502},"snow":{},"sys":{"pod":"n"},"dt_txt":"2017-02-03 03:00:00"},{"dt":1486101600,"main":{"temp":259.533,"temp_min":259.533,"temp_max":259.533,"pressure":1020.56,"sea_level":1042.53,"grnd_level":1020.56,"humidity":76,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"clouds":{"all":68},"wind":{"speed":1.21,"deg":229.509},"snow":{},"sys":{"pod":"d"},"dt_txt":"2017-02-03 06:00:00"},{"dt":1486112400,"main":{"temp":263.438,"temp_min":263.438,"temp_max":263.438,"pressure":1020.46,"sea_level":1042.15,"grnd_level":1020.46,"humidity":84,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"clouds":{"all":56},"wind":{"speed":1.51,"deg":242.503},"snow":{},"sys":{"pod":"d"},"dt_txt":"2017-02-03 09:00:00"},{"dt":1486123200,"main":{"temp":264.228,"temp_min":264.228,"temp_max":264.228,"pressure":1019.58,"sea_level":1041.24,"grnd_level":1019.58,"humidity":89,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"clouds":{"all":56},"wind":{"speed":1.58,"deg":242.503},"snow":{},"sys":{"pod":"d"},"dt_txt":"2017-02-03 12:00:00"},{"dt":1486134000,"main":{"temp":261.153,"temp_min":261.153,"temp_max":261.153,"pressure":1019.63,"sea_level":1041.42,"grnd_level":1019.63,"humidity":80,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":76},"wind":{"speed":1.21,"deg":198.501},"snow":{"3h":0.0049999999999999},"sys":{"pod":"n"},"dt_txt":"2017-02-03 15:00:00"},{"dt":1486144800,"main":{"temp":258.818,"temp_min":258.818,"temp_max":258.818,"pressure":1020.18,"sea_level":1042.03,"grnd_level":1020.18,"humidity":73,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"clouds":{"all":64},"wind":{"speed":1.21,"deg":209.002},"snow":{},"sys":{"pod":"n"},"dt_txt":"2017-02-03 18:00:00"},{"dt":1486155600,"main":{"temp":257.218,"temp_min":257.218,"temp_max":257.218,"pressure":1020.43,"sea_level":1042.38,"grnd_level":1020.43,"humidity":65,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"clouds":{"all":44},"wind":{"speed":1.17,"deg":194.501},"snow":{},"sys":{"pod":"n"},"dt_txt":"2017-02-03 21:00:00"},{"dt":1486166400,"main":{"temp":255.782,"temp_min":255.782,"temp_max":255.782,"pressure":1020.57,"sea_level":1042.75,"grnd_level":1020.57,"humidity":73,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"clouds":{"all":56},"wind":{"speed":1.21,"deg":175.001},"snow":{},"sys":{"pod":"n"},"dt_txt":"2017-02-04 00:00:00"},{"dt":1486177200,"main":{"temp":254.819,"temp_min":254.819,"temp_max":254.819,"pressure":1020.99,"sea_level":1043.11,"grnd_level":1020.99,"humidity":68,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":44},"wind":{"speed":1.22,"deg":122.001},"snow":{"3h":0.0049999999999999},"sys":{"pod":"n"},"dt_txt":"2017-02-04 03:00:00"},{"dt":1486188000,"main":{"temp":257.488,"temp_min":257.488,"temp_max":257.488,"pressure":1021.31,"sea_level":1043.48,"grnd_level":1021.31,"humidity":63,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"clouds":{"all":68},"wind":{"speed":2.13,"deg":155.501},"snow":{"3h":0.04},"sys":{"pod":"d"},"dt_txt":"2017-02-04 06:00:00"},{"dt":1486198800,"main":{"temp":259.827,"temp_min":259.827,"temp_max":259.827,"pressure":1021.81,"sea_level":1043.67,"grnd_level":1021.81,"humidity":90,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"clouds":{"all":68},"wind":{"speed":2.07,"deg":170.005},"snow":{"3h":0.03},"sys":{"pod":"d"},"dt_txt":"2017-02-04 09:00:00"},{"dt":1486209600,"main":{"temp":261.256,"temp_min":261.256,"temp_max":261.256,"pressure":1021.31,"sea_level":1043.05,"grnd_level":1021.31,"humidity":86,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":76},"wind":{"speed":2.32,"deg":175.001},"snow":{"3h":0.0049999999999999},"sys":{"pod":"d"},"dt_txt":"2017-02-04 12:00:00"},{"dt":1486220400,"main":{"temp":260.26,"temp_min":260.26,"temp_max":260.26,"pressure":1021,"sea_level":1042.96,"grnd_level":1021,"humidity":86,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"clouds":{"all":56},"wind":{"speed":2.47,"deg":180.501},"snow":{},"sys":{"pod":"n"},"dt_txt":"2017-02-04 15:00:00"}],"city":{"id":524901,"name":"Moscow","coord":{"lat":55.7522,"lon":37.6156},"country":"none"}}
    var restService, $httpBackend;

    beforeEach(module("weatherReportApp.forecast"));

    beforeEach(inject(function (_restService_, _$httpBackend_) {
        restService = _restService_;
        $httpBackend = _$httpBackend_;
    }));

    it("should define the factory", function () {
        expect(restService).toBeDefined();
        expect(restService.getCityDetails()).toBeDefined();
        expect(restService.getCities()).toBeDefined();
    });

    it("should return the list of cities", function () {
        var response = [];
        $httpBackend.when('GET','/data/city.listmin.json').respond(200, cityList);
        restService.getCities().then(function (data) {
            response = data;

        });
        $httpBackend.flush();
        expect(response.data).toEqual(cityList);

    });

    it("should return the city details", function () {
        var response = [];
        $httpBackend.when('GET','http://samples.openweathermap.org/data/2.5/forecast?id='+
            '1299298'+'&appid=7d9d4e9924c51e63759d7674cbd6fd46').respond(200, citydetails);
        restService.getCityDetails(1299298).then(function (data) {
            response = data;

        });
        $httpBackend.flush();
        expect(response.data).toEqual(citydetails);

    });

});