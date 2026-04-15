/**
 * Mongolia Official Administrative Divisions Data
 * Source: NSDI/GAZAR WFS (https://geo.nsdi.gov.mn/geoserver/ows)
 * Auto-generated from mn-admin-official.json
 * 
 * Contains:
 * - 22 Aimag/Niislel (provinces)
 * - 339 Sum/Duureg (districts)
 * - 1756 Bag/Khoroo (subdivisions)
 */

export interface AdminDivision {
  _id: string;
  name: string;
  parentId?: string;
}

const AIMAGS: AdminDivision[] = [
  {
    "_id": "gp_layer_c_2ndorder_administrativeunit_au_view.11",
    "name": "Улаанбаатар"
  },
  {
    "_id": "gp_layer_c_2ndorder_administrativeunit_au_view.21",
    "name": "Дорнод"
  },
  {
    "_id": "gp_layer_c_2ndorder_administrativeunit_au_view.22",
    "name": "Сүхбаатар"
  },
  {
    "_id": "gp_layer_c_2ndorder_administrativeunit_au_view.23",
    "name": "Хэнтий"
  },
  {
    "_id": "gp_layer_c_2ndorder_administrativeunit_au_view.41",
    "name": "Төв"
  },
  {
    "_id": "gp_layer_c_2ndorder_administrativeunit_au_view.42",
    "name": "Говьсүмбэр"
  },
  {
    "_id": "gp_layer_c_2ndorder_administrativeunit_au_view.43",
    "name": "Сэлэнгэ"
  },
  {
    "_id": "gp_layer_c_2ndorder_administrativeunit_au_view.44",
    "name": "Дорноговь"
  },
  {
    "_id": "gp_layer_c_2ndorder_administrativeunit_au_view.45",
    "name": "Дархан-Уул"
  },
  {
    "_id": "gp_layer_c_2ndorder_administrativeunit_au_view.46",
    "name": "Өмнөговь"
  },
  {
    "_id": "gp_layer_c_2ndorder_administrativeunit_au_view.48",
    "name": "Дундговь"
  },
  {
    "_id": "gp_layer_c_2ndorder_administrativeunit_au_view.61",
    "name": "Орхон"
  },
  {
    "_id": "gp_layer_c_2ndorder_administrativeunit_au_view.62",
    "name": "Өвөрхангай"
  },
  {
    "_id": "gp_layer_c_2ndorder_administrativeunit_au_view.63",
    "name": "Булган"
  },
  {
    "_id": "gp_layer_c_2ndorder_administrativeunit_au_view.64",
    "name": "Баянхонгор"
  },
  {
    "_id": "gp_layer_c_2ndorder_administrativeunit_au_view.65",
    "name": "Архангай"
  },
  {
    "_id": "gp_layer_c_2ndorder_administrativeunit_au_view.67",
    "name": "Хөвсгөл"
  },
  {
    "_id": "gp_layer_c_2ndorder_administrativeunit_au_view.81",
    "name": "Завхан"
  },
  {
    "_id": "gp_layer_c_2ndorder_administrativeunit_au_view.82",
    "name": "Говь-Алтай"
  },
  {
    "_id": "gp_layer_c_2ndorder_administrativeunit_au_view.83",
    "name": "Баян-Өлгий"
  },
  {
    "_id": "gp_layer_c_2ndorder_administrativeunit_au_view.84",
    "name": "Ховд"
  },
  {
    "_id": "gp_layer_c_2ndorder_administrativeunit_au_view.85",
    "name": "Увс"
  }
];

const SUMS: AdminDivision[] = [
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.1101",
    "name": "Багануур"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.1104",
    "name": "Багахангай"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.1107",
    "name": "Баянгол"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.1110",
    "name": "Баянзүрх"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.1113",
    "name": "Налайх"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.1116",
    "name": "Сонгинохайрхан"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.1119",
    "name": "Сүхбаатар"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.1122",
    "name": "Хан-Уул"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.1125",
    "name": "Чингэлтэй"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.2101",
    "name": "Хэрлэн"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.2104",
    "name": "Баяндун"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.2107",
    "name": "Баянтүмэн"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.2110",
    "name": "Баян-Уул"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.2113",
    "name": "Булган"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.2116",
    "name": "Гурванзагал"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.2119",
    "name": "Дашбалбар"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.2122",
    "name": "Матад"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.2125",
    "name": "Сэргэлэн"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.2128",
    "name": "Халхгол"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.2131",
    "name": "Хөлөнбуйр"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.2134",
    "name": "Цагаан-Овоо"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.2137",
    "name": "Чойбалсан"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.2140",
    "name": "Чулуунхороот"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.2201",
    "name": "Баруун-Урт"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.2204",
    "name": "Асгат"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.2207",
    "name": "Баяндэлгэр"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.2210",
    "name": "Дарьганга"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.2213",
    "name": "Мөнххаан"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.2216",
    "name": "Наран"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.2219",
    "name": "Онгон"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.2222",
    "name": "Сүхбаатар"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.2225",
    "name": "Түвшинширээ"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.2228",
    "name": "Түмэнцогт"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.2231",
    "name": "Уулбаян"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.2234",
    "name": "Халзан"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.2237",
    "name": "Эрдэнэцагаан"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.2301",
    "name": "Хэрлэн"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.2304",
    "name": "Батноров"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.2307",
    "name": "Батширээт"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.2310",
    "name": "Баян Адрага"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.2313",
    "name": "Баянмөнх"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.2316",
    "name": "Баян Овоо"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.2319",
    "name": "Баянхутаг"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.2322",
    "name": "Биндэр"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.2325",
    "name": "Галшир"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.2328",
    "name": "Дадал"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.2331",
    "name": "Дархан"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.2334",
    "name": "Дэлгэрхаан"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.2337",
    "name": "Жаргалтхаан"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.2340",
    "name": "Мөрөн"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.2343",
    "name": "Норовлин"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.2346",
    "name": "Өмнөдэлгэр"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.2349",
    "name": "Цэнхэрмандал"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.2352",
    "name": "Бор-Өндөр"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4101",
    "name": "Зуунмод"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4104",
    "name": "Алтанбулаг"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4107",
    "name": "Аргалант"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4110",
    "name": "Архуст"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4113",
    "name": "Батсүмбэр"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4116",
    "name": "Баян"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4119",
    "name": "Баяндэлгэр"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4122",
    "name": "Баянжаргалан"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4125",
    "name": "Баян-Өнжүүл"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4128",
    "name": "Баянхангай"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4131",
    "name": "Баянцагаан"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4134",
    "name": "Баянцогт"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4137",
    "name": "Баянчандмань"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4140",
    "name": "Борнуур"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4143",
    "name": "Бүрэн"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4146",
    "name": "Дэлгэрхаан"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4149",
    "name": "Жаргалант"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4152",
    "name": "Заамар"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4155",
    "name": "Лүн"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4158",
    "name": "Мөнгөнморьт"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4161",
    "name": "Өндөрширээт"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4164",
    "name": "Сүмбэр"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4167",
    "name": "Сэргэлэн"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4170",
    "name": "Угтаал"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4173",
    "name": "Цээл"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4176",
    "name": "Эрдэнэ"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4179",
    "name": "Эрдэнэсант"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4201",
    "name": "Сүмбэр"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4204",
    "name": "Баянтал"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4207",
    "name": "Шивээговь"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4301",
    "name": "Сүхбаатар"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4304",
    "name": "Алтанбулаг"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4307",
    "name": "Баруунбүрэн"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4310",
    "name": "Баянгол"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4313",
    "name": "Ерөө"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4316",
    "name": "Жавхлант"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4319",
    "name": "Зүүнбүрэн"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4322",
    "name": "Мандал"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4325",
    "name": "Орхон"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4328",
    "name": "Орхонтуул"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4331",
    "name": "Сайхан"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4334",
    "name": "Сант"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4337",
    "name": "Түшиг"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4340",
    "name": "Хүдэр"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4343",
    "name": "Хушаат"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4346",
    "name": "Цагааннуур"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4349",
    "name": "Шаамар"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4401",
    "name": "Сайншанд"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4404",
    "name": "Айраг"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4407",
    "name": "Алтанширээ"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4410",
    "name": "Даланжаргалан"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4413",
    "name": "Дэлгэрэх"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4416",
    "name": "Замын-Үүд"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4419",
    "name": "Иххэт"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4422",
    "name": "Мандах"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4425",
    "name": "Өргөн"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4428",
    "name": "Сайхандулаан"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4431",
    "name": "Улаанбадрах"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4434",
    "name": "Хатанбулаг"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4437",
    "name": "Хөвсгөл"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4440",
    "name": "Эрдэнэ"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4501",
    "name": "Дархан"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4504",
    "name": "Орхон"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4507",
    "name": "Хонгор"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4510",
    "name": "Шарынгол"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4601",
    "name": "Даланзадгад"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4604",
    "name": "Баяндалай"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4607",
    "name": "Баян-Овоо"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4610",
    "name": "Булган"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4613",
    "name": "Гурвантэс"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4616",
    "name": "Мандал-Овоо"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4619",
    "name": "Манлай"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4622",
    "name": "Ноён"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4625",
    "name": "Номгон"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4628",
    "name": "Сэврэй"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4631",
    "name": "Ханбогд"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4634",
    "name": "Ханхонгор"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4637",
    "name": "Хүрмэн"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4640",
    "name": "Цогт-Овоо"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4643",
    "name": "Цогтцэций"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4801",
    "name": "Сайнцагаан"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4804",
    "name": "Адаацаг"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4807",
    "name": "Баянжаргалан"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4810",
    "name": "Говь-Угтаал"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4813",
    "name": "Гурвансайхан"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4816",
    "name": "Дэлгэрхангай"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4819",
    "name": "Дэлгэрцогт"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4822",
    "name": "Дэрэн"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4825",
    "name": "Луус"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4828",
    "name": "Өлзийт"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4831",
    "name": "Өндөршил"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4834",
    "name": "Сайхан-Овоо"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4837",
    "name": "Хулд"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4840",
    "name": "Цагаандэлгэр"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.4843",
    "name": "Эрдэнэдалай"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6101",
    "name": "Баян Өндөр"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6104",
    "name": "Жаргалант"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6201",
    "name": "Арвайхээр"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6204",
    "name": "Баруунбаян-Улаан"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6207",
    "name": "Бат-өлзий"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6210",
    "name": "Баянгол"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6213",
    "name": "Баян-Өндөр"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6216",
    "name": "Богд"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6219",
    "name": "Бүрд"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6222",
    "name": "Гучин-Ус"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6225",
    "name": "Есөнзүйл"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6228",
    "name": "Зүүнбаян-Улаан"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6231",
    "name": "Нарийнтээл"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6234",
    "name": "Өлзийт"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6237",
    "name": "Сант"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6240",
    "name": "Тарагт"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6243",
    "name": "Төгрөг"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6246",
    "name": "Уянга"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6249",
    "name": "Хайрхандулаан"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6252",
    "name": "Хархорин"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6255",
    "name": "Хужирт"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6301",
    "name": "Булган"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6304",
    "name": "Баян агт"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6307",
    "name": "Баяннуур"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6310",
    "name": "Бугат"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6313",
    "name": "Бүрэгхангай"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6316",
    "name": "Гурванбулаг"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6319",
    "name": "Дашинчилэн"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6322",
    "name": "Могод"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6325",
    "name": "Орхон"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6328",
    "name": "Рашаант"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6331",
    "name": "Сайхан"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6334",
    "name": "Сэлэнгэ"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6337",
    "name": "Тэшиг"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6340",
    "name": "Хангал"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6343",
    "name": "Хишиг-Өндөр"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6346",
    "name": "Хутаг-Өндөр"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6401",
    "name": "Баянхонгор"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6404",
    "name": "Баацагаан"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6407",
    "name": "Баянбулаг"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6410",
    "name": "Баянговь"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6413",
    "name": "Баянлиг"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6416",
    "name": "Баян-Овоо"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6419",
    "name": "Баян-Өндөр"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6422",
    "name": "Баянцагаан"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6425",
    "name": "Өлзийт"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6428",
    "name": "Бөмбөгөр"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6431",
    "name": "Бууцагаан"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6434",
    "name": "Галуут"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6437",
    "name": "Гурванбулаг"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6440",
    "name": "Жаргалант"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6443",
    "name": "Жинст"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6446",
    "name": "Заг"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6449",
    "name": "Богд"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6452",
    "name": "Хүрээмарал"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6455",
    "name": "Шинэжинст"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6458",
    "name": "Эрдэнэцогт"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6501",
    "name": "Эрдэнэбулган"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6504",
    "name": "Батцэнгэл"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6507",
    "name": "Булган"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6510",
    "name": "Жаргалант"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6513",
    "name": "Их Тамир"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6516",
    "name": "Өгийнуур"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6519",
    "name": "Өлзийт"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6522",
    "name": "Өндөр Улаан"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6525",
    "name": "Тариат"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6528",
    "name": "Түвшрүүлэх"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6531",
    "name": "Хайрхан"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6534",
    "name": "Хангай"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6537",
    "name": "Хашаат"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6540",
    "name": "Хотонт"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6543",
    "name": "Цахир"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6546",
    "name": "Цэнхэр"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6549",
    "name": "Цэцэрлэг"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6552",
    "name": "Чулуут"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6555",
    "name": "Эрдэнэмандал"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6701",
    "name": "Мөрөн"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6704",
    "name": "Алаг-Эрдэнэ"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6707",
    "name": "Арбулаг"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6710",
    "name": "Баянзүрх"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6713",
    "name": "Бүрэнтогтох"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6716",
    "name": "Галт"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6719",
    "name": "Жаргалант"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6722",
    "name": "Их Уул"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6725",
    "name": "Рашаант"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6728",
    "name": "Ренчинлхүмбэ"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6731",
    "name": "Тариалан"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6734",
    "name": "Тосонцэнгэл"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6737",
    "name": "Төмөрбулаг"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6740",
    "name": "Түнэл"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6743",
    "name": "Улаан Уул"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6746",
    "name": "Ханх"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6749",
    "name": "Цагаан нуур"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6752",
    "name": "Цагаан-Уул"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6755",
    "name": "Цагаан Үүр"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6758",
    "name": "Цэцэрлэг"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6761",
    "name": "Чандмань Өндөр"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6764",
    "name": "Шинэ Идэр"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.6767",
    "name": "Эрдэнэбулган"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8101",
    "name": "Улиастай"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8104",
    "name": "Алдархаан"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8107",
    "name": "Асгат"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8110",
    "name": "Баянтэс"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8113",
    "name": "Баянхайрхан"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8116",
    "name": "Дөрвөлжин"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8119",
    "name": "Завханмандал"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8122",
    "name": "Идэр"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8125",
    "name": "Их-Уул"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8128",
    "name": "Нөмрөг"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8131",
    "name": "Отгон"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8134",
    "name": "Сантмаргац"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8137",
    "name": "Сонгино"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8140",
    "name": "Тосонцэнгэл"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8143",
    "name": "Түдэвтэй"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8146",
    "name": "Тэлмэн"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8149",
    "name": "Тэс"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8152",
    "name": "Ургамал"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8155",
    "name": "Цагаанхайрхан"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8158",
    "name": "Цагаанчулуут"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8161",
    "name": "Цэцэн-Уул"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8164",
    "name": "Шилүүстэй"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8167",
    "name": "Эрдэнэхайрхан"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8170",
    "name": "Яруу"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8201",
    "name": "Есөнбулаг"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8204",
    "name": "Алтай"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8207",
    "name": "Баян-Уул"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8210",
    "name": "Бигэр"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8213",
    "name": "Бугат"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8216",
    "name": "Дарив"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8219",
    "name": "Дэлгэр"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8222",
    "name": "Жаргалан"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8225",
    "name": "Тайшир"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8228",
    "name": "Тонхил"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8231",
    "name": "Төгрөг"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8234",
    "name": "Халиун"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8237",
    "name": "Хөхморьт"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8240",
    "name": "Цогт"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8243",
    "name": "Цээл"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8246",
    "name": "Чандмань"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8249",
    "name": "Шарга"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8252",
    "name": "Эрдэнэ"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8301",
    "name": "Өлгий"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8304",
    "name": "Алтай"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8307",
    "name": "Алтанцөгц"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8310",
    "name": "Баяннуур"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8313",
    "name": "Бугат"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8316",
    "name": "Булган"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8319",
    "name": "Буянт"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8322",
    "name": "Дэлүүн"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8325",
    "name": "Ногооннуур"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8328",
    "name": "Сагсай"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8331",
    "name": "Толбо"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8334",
    "name": "Улаанхус"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8337",
    "name": "Цэнгэл"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8401",
    "name": "Жаргалант"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8404",
    "name": "Алтай"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8407",
    "name": "Булган"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8410",
    "name": "Буянт"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8413",
    "name": "Дарви"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8416",
    "name": "Дөргөн"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8419",
    "name": "Дуут"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8422",
    "name": "Зэрэг"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8425",
    "name": "Манхан"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8428",
    "name": "Мөнххайрхан"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8431",
    "name": "Мөст"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8434",
    "name": "Мянгад"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8437",
    "name": "Үенч"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8440",
    "name": "Ховд"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8443",
    "name": "Цэцэг"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8446",
    "name": "Чандмань"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8449",
    "name": "Эрдэнэбүрэн"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8501",
    "name": "Улаангом"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8504",
    "name": "Баруунтуруун"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8507",
    "name": "Бөхмөрөн"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8510",
    "name": "Давст"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8513",
    "name": "Завхан"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8516",
    "name": "Зүүнговь"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8519",
    "name": "Зүүнхангай"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8522",
    "name": "Малчин"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8525",
    "name": "Наранбулаг"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8528",
    "name": "Өлгий"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8531",
    "name": "Өмнөговь"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8534",
    "name": "Өндөрхангай"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8537",
    "name": "Сагил"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8540",
    "name": "Тариалан"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8543",
    "name": "Түргэн"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8546",
    "name": "Тэс"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8549",
    "name": "Ховд"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8552",
    "name": "Хяргас"
  },
  {
    "_id": "gp_layer_c_3rdorder_administrativeunit_au_view.8555",
    "name": "Цагаанхайрхан"
  }
];

const BAG_KHOROOS: AdminDivision[] = [
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.110151",
    "name": "1-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.110153",
    "name": "2-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.110155",
    "name": "3-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.110157",
    "name": "4-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.110159",
    "name": "5-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.110451",
    "name": "1-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.110453",
    "name": "2-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.110751",
    "name": "1-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.110753",
    "name": "2-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.110755",
    "name": "3-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.110757",
    "name": "4-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.110759",
    "name": "5-рхороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.110761",
    "name": "6-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.110763",
    "name": "7-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.110765",
    "name": "8-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.110767",
    "name": "9-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.110769",
    "name": "10-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.110771",
    "name": "11-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.110773",
    "name": "12-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.110775",
    "name": "13-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.110777",
    "name": "14-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.110779",
    "name": "15-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.110781",
    "name": "16-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.110783",
    "name": "17-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.110785",
    "name": "18-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.110787",
    "name": "19-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.110789",
    "name": "20-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.110791",
    "name": "21-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.110793",
    "name": "22-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.110795",
    "name": "23-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.110797",
    "name": "24-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.110799",
    "name": "25-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111051",
    "name": "1-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111052",
    "name": "26-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111053",
    "name": "2-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111054",
    "name": "27-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111055",
    "name": "3-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111056",
    "name": "28-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111057",
    "name": "4-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111059",
    "name": "5-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111061",
    "name": "6-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111063",
    "name": "7-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111065",
    "name": "8-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111067",
    "name": "9-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111069",
    "name": "10-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111071",
    "name": "11-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111073",
    "name": "12-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111075",
    "name": "13-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111077",
    "name": "14-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111079",
    "name": "15-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111081",
    "name": "16-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111083",
    "name": "17-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111085",
    "name": "18-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111087",
    "name": "19-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111089",
    "name": "20-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111091",
    "name": "21-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111093",
    "name": "22-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111095",
    "name": "23-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111097",
    "name": "24-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111099",
    "name": "25-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111351",
    "name": "1-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111353",
    "name": "2-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111355",
    "name": "3-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111357",
    "name": "4-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111359",
    "name": "5-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111361",
    "name": "6-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111363",
    "name": "7-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111365",
    "name": "8-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111651",
    "name": "1-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111652",
    "name": "26-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111653",
    "name": "2-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111654",
    "name": "27-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111655",
    "name": "3-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111656",
    "name": "28-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111657",
    "name": "4-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111658",
    "name": "29-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111659",
    "name": "5-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111660",
    "name": "30-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111661",
    "name": "6-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111662",
    "name": "31-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111663",
    "name": "7-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111664",
    "name": "32-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111665",
    "name": "8-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111666",
    "name": "33-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111667",
    "name": "9-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111668",
    "name": "34-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111669",
    "name": "10-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111670",
    "name": "35-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111671",
    "name": "11-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111672",
    "name": "36-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111673",
    "name": "12-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111674",
    "name": "37-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111675",
    "name": "13-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111676",
    "name": "38-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111677",
    "name": "14-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111678",
    "name": "39-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111679",
    "name": "15-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111680",
    "name": "40-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111681",
    "name": "16-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111682",
    "name": "41-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111683",
    "name": "17-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111684",
    "name": "42-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111685",
    "name": "18-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111686",
    "name": "43-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111687",
    "name": "19-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111689",
    "name": "20-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111691",
    "name": "21-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111693",
    "name": "22-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111695",
    "name": "23-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111697",
    "name": "24-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111699",
    "name": "25-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111951",
    "name": "1-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111953",
    "name": "2-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111955",
    "name": "3-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111957",
    "name": "4-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111959",
    "name": "5-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111961",
    "name": "6-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111963",
    "name": "7-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111965",
    "name": "8-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111967",
    "name": "9-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111969",
    "name": "10-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111971",
    "name": "11-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111973",
    "name": "12-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111975",
    "name": "13-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111977",
    "name": "14-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111979",
    "name": "15-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111981",
    "name": "16-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111983",
    "name": "17-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111985",
    "name": "18-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111987",
    "name": "19-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.111989",
    "name": "20-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.112251",
    "name": "1-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.112253",
    "name": "2-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.112255",
    "name": "3-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.112257",
    "name": "4-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.112259",
    "name": "5-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.112261",
    "name": "6-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.112263",
    "name": "7-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.112265",
    "name": "8-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.112267",
    "name": "9-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.112269",
    "name": "10-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.112271",
    "name": "11-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.112273",
    "name": "12-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.112275",
    "name": "13-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.112277",
    "name": "14-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.112279",
    "name": "15-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.112281",
    "name": "16-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.112283",
    "name": "17-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.112285",
    "name": "18-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.112287",
    "name": "19-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.112289",
    "name": "20-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.112291",
    "name": "21-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.112551",
    "name": "1-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.112553",
    "name": "2-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.112555",
    "name": "3-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.112557",
    "name": "4-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.112559",
    "name": "5-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.112561",
    "name": "6-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.112563",
    "name": "7-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.112565",
    "name": "8-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.112567",
    "name": "9-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.112569",
    "name": "10-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.112571",
    "name": "11-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.112573",
    "name": "12-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.112575",
    "name": "13-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.112577",
    "name": "14-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.112579",
    "name": "15-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.112581",
    "name": "16-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.112583",
    "name": "17-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.112585",
    "name": "18-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.112587",
    "name": "19-р хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.210151",
    "name": "1-р баг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.210153",
    "name": "2-р баг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.210155",
    "name": "3-р баг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.210157",
    "name": "4-р баг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.210159",
    "name": "5-р баг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.210161",
    "name": "6-р баг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.210163",
    "name": "7-р баг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.210165",
    "name": "8-р баг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.210167",
    "name": "9-р баг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.210169",
    "name": "10-р баг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.210171",
    "name": "11-р баг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.210451",
    "name": "1-р баг, Түргэн"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.210453",
    "name": "2-р баг, Хайрхан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.210455",
    "name": "3-р баг, Яргай"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.210457",
    "name": "4-р баг, Наран"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.210751",
    "name": "1-р баг, Цагаан дэрст"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.210753",
    "name": "2-р баг, Жаргалант"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.210755",
    "name": "3-р баг, Өлзийт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.210757",
    "name": "4-р баг, Хотонт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.211051",
    "name": "1-р баг, Заяат"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.211053",
    "name": "2-р баг, Харчулуут"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.211055",
    "name": "3-р баг, Урт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.211057",
    "name": "4-р баг, Бэрх"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.211059",
    "name": "5-р баг, Улз"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.211061",
    "name": "6-р баг, Өвөр-Эрээн"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.211351",
    "name": "1-р баг Өндөр хошуу"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.211353",
    "name": "2-р баг, Хулсан шанд"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.211355",
    "name": "3-р баг, Баян-Уул"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.211357",
    "name": "4-р баг, Чулуут"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.211651",
    "name": "1-р баг, Рашаант"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.211653",
    "name": "2-р баг, Цагаанхошуу"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.211655",
    "name": "3-р баг, Сүмийн булаг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.211951",
    "name": "1-р баг,Сэвсүүл жараахай"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.211953",
    "name": "2-р баг, Харзат"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.211955",
    "name": "3-р баг, Чух"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.211957",
    "name": "4-р баг, Номинт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.211959",
    "name": "5-р баг, Улз"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.212251",
    "name": "1-р баг, Жаргалант"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.212253",
    "name": "2-р баг, Баянхангай"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.212255",
    "name": "3-р баг, Түмэнхаан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.212257",
    "name": "4-р баг, Буян-Өндөр"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.212259",
    "name": "5-р баг, Мэнэн"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.212261",
    "name": "6-р баг, Эрдэнэбадрах"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.212551",
    "name": "1-р баг, Барчин"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.212553",
    "name": "2-р баг, Ар хоолой"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.212555",
    "name": "3-р баг, Баян"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.212557",
    "name": "4-р баг, Очирхүрээ"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.212559",
    "name": "5-р баг, Галын гол"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.212851",
    "name": "1-р баг, Цогтсүмбэр"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.212853",
    "name": "2-р баг, Ялалт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.212855",
    "name": "3-р баг, Ташгай"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.213151",
    "name": "1-р баг, Баян-Өлзийт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.213153",
    "name": "2-р баг, Батхаан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.213155",
    "name": "3-р баг, Баян-Уул"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.213451",
    "name": "1-р баг, Баянгол"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.213453",
    "name": "2-р баг, Элст-Боон"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.213455",
    "name": "3-р баг, Зүрх"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.213457",
    "name": "4-р баг, Хүрээт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.213459",
    "name": "5-р баг, Гүн-Цэнгэлэг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.213461",
    "name": "6-р баг, Хөөвөр"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.213751",
    "name": "1-р баг, Хулстай"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.213753",
    "name": "2-р баг, Сүмбэр"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.213755",
    "name": "3-р баг, Энгэршанд"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.213757",
    "name": "4-р баг, Хөхнуур"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.214051",
    "name": "1-р баг, Дэлгэр"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.214053",
    "name": "2-р баг, Галуут"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.214055",
    "name": "3-р баг, Цагаанчулуут"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.220151",
    "name": "1-р баг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.220153",
    "name": "2-р баг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.220155",
    "name": "3-р баг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.220157",
    "name": "4-р баг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.220159",
    "name": "5-р баг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.220161",
    "name": "6-р баг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.220163",
    "name": "7-р баг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.220165",
    "name": "8-р баг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.220167",
    "name": "9-р баг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.220451",
    "name": "1-р баг, Өлзийт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.220453",
    "name": "2-р баг, Дөхөм"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.220455",
    "name": "3-р баг, Их-Уул"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.220457",
    "name": "4-р баг, Жаргалант"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.220751",
    "name": "1-р баг, Баян"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.220753",
    "name": "2-р баг, Дэлгэр"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.220757",
    "name": "4-р баг, Дөхөм"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.220759",
    "name": "5-р баг, Хонгор"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.220761",
    "name": "6-р баг, Ширээт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.221051",
    "name": "1-р баг, Өрнөдэрс"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.221053",
    "name": "2-р баг, Бадрах"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.221055",
    "name": "3-р баг, Аман-Ус"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.221057",
    "name": "4-р баг, Овоот"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.221351",
    "name": "1-р баг, Баянтэрэм"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.221353",
    "name": "2-р баг, Баян-Уул"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.221357",
    "name": "4-р баг, Баясгалант"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.221359",
    "name": "5-р баг, Бүрэнцогт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.221651",
    "name": "1-р баг, Гүнхудаг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.221655",
    "name": "3-р баг, Наранбулаг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.221951",
    "name": "1-р баг, Ихбулаг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.221953",
    "name": "2-р баг, Шарбүрд"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.221959",
    "name": "5-р баг, Хавирга"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.222251",
    "name": "1-р баг, Баянгол"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.222253",
    "name": "2-р баг, Хайлаастай"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.222255",
    "name": "3-р баг, Хулгар"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.222257",
    "name": "4-р баг, Ланз"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.222259",
    "name": "5-р баг, Шинэбулаг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.222551",
    "name": "1-р баг, Сэргэлэн"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.222555",
    "name": "3-р баг, Үнэгд"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.222557",
    "name": "4-р баг, Дэлгэрхаан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.222559",
    "name": "5-р баг, Өгөөмөр"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.222853",
    "name": "2-р баг, Баянцагаан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.222855",
    "name": "3-р баг, Баян-Овоо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.223151",
    "name": "1-р баг, Баян"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.223153",
    "name": "2-р баг, Жаргалант"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.223155",
    "name": "3-р баг, Тэгш"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.223157",
    "name": "4-р баг, Жавхлант"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.223159",
    "name": "5-р баг, Дэлгэр"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.223451",
    "name": "1-р баг, Халзаншанд"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.223453",
    "name": "2-р баг, Сахиул"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.223455",
    "name": "3-р баг, Сайншанд"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.223457",
    "name": "4-р баг, Хатавч"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.223751",
    "name": "1-р баг, Хөндлөн хайлааст"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.223753",
    "name": "2-р баг, Цагаан овоо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.223755",
    "name": "3-р баг, Бадрах"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.223757",
    "name": "4-р баг, Хонгор"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.223761",
    "name": "6-р баг, Жаргалант"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.223763",
    "name": "7-р баг, Хадын булаг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.223765",
    "name": "8-р баг, Алтан овоо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.230151",
    "name": "1-р баг, Хэрлэн"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.230153",
    "name": "2-р баг, Булаг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.230155",
    "name": "3-р баг, Баянмөнх"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.230157",
    "name": "4-р баг, Сариг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.230159",
    "name": "5-р баг, Өндөрхаан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.230161",
    "name": "6-р баг, Цогт-Өндөр"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.230163",
    "name": "7-р баг, Номгон"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.230165",
    "name": "8-р баг, Ишгэн толгой"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.230451",
    "name": "1-р баг, Эрдэнэчандмань"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.230453",
    "name": "2-р баг, Эхэнбүрд"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.230455",
    "name": "3-р баг, Баян"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.230457",
    "name": "4-р баг, Баянбулаг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.230459",
    "name": "5-р баг, Идэрмэг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.230461",
    "name": "6-р баг, Дундбүрд"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.230463",
    "name": "7-р баг, Бэрх"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.230751",
    "name": "1-р баг, Онон"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.230753",
    "name": "2-р баг, Барх"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.230755",
    "name": "3-р баг, Хурх"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.230757",
    "name": "4-р баг, Норовлин"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.231051",
    "name": "1-р баг, Сайхан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.231053",
    "name": "2-р баг, Жаргалант"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.231055",
    "name": "3-р баг, Адарга"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.231057",
    "name": "4-р баг, Дуурлиг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.231351",
    "name": "1-р баг, Баянбулаг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.231353",
    "name": "2-р баг, Хэрлэн"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.231355",
    "name": "3-р баг, Дулаан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.231357",
    "name": "4-р баг, Улаан-Эрэг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.231651",
    "name": "1-р баг, Дэлгэрхаан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.231653",
    "name": "2-р баг, Наран"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.231655",
    "name": "3-р баг, Сүмбэр"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.231657",
    "name": "4-р баг, Жавхлант"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.231951",
    "name": "1-р баг, Жаргалант"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.231953",
    "name": "2-р баг, Улаан-Өндөр"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.231955",
    "name": "3-р баг, Цантын хоолой"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.232251",
    "name": "1-р баг, Баян-Өндөр"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.232253",
    "name": "2-р баг, Мандалхаан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.232255",
    "name": "3-р баг, Баянгол"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.232257",
    "name": "4-р баг, Дэлгэрхаан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.232259",
    "name": "5-р баг, Онон"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.232551",
    "name": "1-р баг, Арвин"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.232553",
    "name": "2-р баг, Оч"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.232555",
    "name": "3-р баг, Баянбадрал"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.232557",
    "name": "4-р баг, Сангийн далай"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.232559",
    "name": "5-р баг, Жаргалант"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.232561",
    "name": "6-р баг, Буянтбулаг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.232851",
    "name": "1-р баг, Онон"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.232853",
    "name": "2-р баг, Агац"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.232855",
    "name": "3-р баг, Балж"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.232857",
    "name": "4-р баг, Баян-Овоо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.233151",
    "name": "1-р баг, Дотуур булаг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.233153",
    "name": "2-р баг, Хараат"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.233155",
    "name": "3-р баг, Шажин"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.233157",
    "name": "4-р баг, Мэргэн хошуу"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.233451",
    "name": "1-р баг, Хэрлэнбаян-Улаан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.233453",
    "name": "2-р баг, Долоод"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.233455",
    "name": "3-р баг, Аварга"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.233457",
    "name": "4-р баг, Хэрлэн тооно"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.233751",
    "name": "1-р баг, Гичгэнэ"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.233753",
    "name": "2-р баг, Баянцогт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.233755",
    "name": "3-р баг, Баян-Эрдэнэ"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.233757",
    "name": "4-р баг, Чулуут"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.233759",
    "name": "5-р баг, Төвийн"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.234051",
    "name": "1-р баг, Зөөлөн"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.234053",
    "name": "2-р баг, Өлзийт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.234055",
    "name": "3-р баг, Бүрээт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.234057",
    "name": "4-р баг, Цагаан толгой"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.234059",
    "name": "5-р баг, Чандган"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.234351",
    "name": "1-р баг, Баян-Өлзийт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.234353",
    "name": "2-р баг, Ангирт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.234355",
    "name": "3-р баг, Онон"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.234357",
    "name": "4-р баг, Жаргалант"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.234651",
    "name": "1-р баг, Наран"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.234653",
    "name": "2-р баг, Баянзүрх"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.234655",
    "name": "3-р баг, Хэнтий"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.234657",
    "name": "4-р баг, Талын булаг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.234659",
    "name": "5-р баг, Чандган"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.234661",
    "name": "6-р баг, Төвийн"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.234663",
    "name": "7-р баг, Гурванбаян"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.234951",
    "name": "1-р баг, Нугаар"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.234953",
    "name": "2-р баг, Согоот"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.234955",
    "name": "3-р баг, Хужхан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.235251",
    "name": "1-р баг, Бор-Өндөр"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.235253",
    "name": "2-р баг, Холбоо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.235255",
    "name": "3-р баг, Бумбат"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.235257",
    "name": "4-р баг, Уурхайчин"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.235259",
    "name": "5-р баг, Хүйх"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.235261",
    "name": "6-р баг, Өлгий"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.410151",
    "name": "1-р баг, Номт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.410153",
    "name": "2-р баг, Ланс"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.410155",
    "name": "3-р баг, Баянхошуу"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.410159",
    "name": "5-р баг, Нацагдорж"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.410161",
    "name": "6-р баг, Баруун зуунмод"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.410451",
    "name": "1-р баг, Сумт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.410453",
    "name": "2-р баг, Аргал"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.410455",
    "name": "3-р баг, Алтан-Овоо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.410457",
    "name": "4-р баг, Замт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.410751",
    "name": "1-р баг, Аргалын уул"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.410753",
    "name": "2-р баг, Хөшөөт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.411051",
    "name": "1-р баг, Ноён шанд"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.411053",
    "name": "2-р баг, Нарст"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.411351",
    "name": "1-р баг, Мандал"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.411353",
    "name": "2-р баг, Цогт-Өндөр"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.411355",
    "name": "3-р баг, Баянгол"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.411357",
    "name": "4-р баг, Үдлэг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.411651",
    "name": "1-р баг, Цант"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.411653",
    "name": "2-р баг, Өгөөмөр"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.411655",
    "name": "3-р баг, Цавчир"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.411951",
    "name": "1-р баг, Байдлаг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.411953",
    "name": "2-р баг, Галуут"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.412251",
    "name": "1-р баг, Жаргалант"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.412253",
    "name": "2-р баг, Улаан ухаа"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.412255",
    "name": "3-р баг, Эрдэнэ"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.412551",
    "name": "1-р баг, Бараат"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.412553",
    "name": "2-р баг, Цээл"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.412555",
    "name": "3-р баг, Бүрд"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.412851",
    "name": "1-р баг, Найрамдал"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.412853",
    "name": "2-р баг, Хөшөөт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.413151",
    "name": "1-р баг, Өлзийт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.413153",
    "name": "2-р баг, Баян айраг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.413155",
    "name": "3-р баг, Гурван түрүү"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.413157",
    "name": "4-р баг, Алтат"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.413159",
    "name": "5-р баг, Зогсоол"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.413451",
    "name": "1-р баг, Гуна"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.413453",
    "name": "2-р баг, Сарлаг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.413455",
    "name": "3-р баг, Даргиат"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.413751",
    "name": "1-р баг, Чандмань"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.413753",
    "name": "2-р баг, Замт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.413755",
    "name": "3-р баг, Эрдэнэ"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.414051",
    "name": "1-р баг, Өгөөмөр"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.414053",
    "name": "2-р баг, Мандал"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.414055",
    "name": "3-р баг, Бичигт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.414057",
    "name": "4-р баг, Нарт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.414351",
    "name": "1-р баг, Төхөм"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.414353",
    "name": "2-р баг, Баянцогт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.414355",
    "name": "3-р баг, Монгол"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.414357",
    "name": "4-р баг, Эрдэнэхангай"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.414359",
    "name": "5-р баг, Өнжүүл"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.414651",
    "name": "1-р баг, Тарган"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.414653",
    "name": "2-р баг, Дуут-Хуримт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.414655",
    "name": "3-р баг, Давст"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.414951",
    "name": "1-р баг, Буурал"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.414953",
    "name": "2-р баг, Өгөөмөр"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.414955",
    "name": "3-р баг, Баянбупаг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.414957",
    "name": "4-р баг, Загдал"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.415251",
    "name": "1-р баг, Тосон"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.415253",
    "name": "2-р баг, Төмстэй"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.415255",
    "name": "3-р баг, Хайлааст"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.415257",
    "name": "4-р баг, Төв"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.415551",
    "name": "1-р баг, Цагаан уул"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.415553",
    "name": "2-р баг, Өгөөмөр"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.415555",
    "name": "3-р баг, Төв"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.415851",
    "name": "1-р баг, Жаргалант"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.415853",
    "name": "2-р баг, Байдлаг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.415855",
    "name": "3-р баг, Булаг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.416151",
    "name": "1-р баг, Баянтуул"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.416153",
    "name": "2-р баг, Хайрхан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.416155",
    "name": "3-р баг, Уянга"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.416157",
    "name": "4-р баг, Сант"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.416451",
    "name": "1-р баг, Сүмбэр"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.416453",
    "name": "2-р баг, Жавхлант"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.416751",
    "name": "1-р баг, Баянбүрд"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.416753",
    "name": "2-р баг, Хайрхан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.416755",
    "name": "3-р баг, Хөшиг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.416757",
    "name": "4-р баг, Эрдэнэ-Уул"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.416759",
    "name": "5-р баг, Авдар"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.417051",
    "name": "1-р баг, Талын уул"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.417053",
    "name": "2-р баг, Хар чулуут"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.417055",
    "name": "3-р баг, Асгат"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.417351",
    "name": "1-р баг, Оргил"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.417353",
    "name": "2-р баг, Талын хайрхан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.417355",
    "name": "3-р баг, Майхан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.417357",
    "name": "4-р баг, Сүүл буга"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.417359",
    "name": "5-р баг, Хүүлэй хан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.417651",
    "name": "1-р баг, Өгөөмөр"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.417653",
    "name": "2-р баг, Чулуут"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.417655",
    "name": "3-р баг, Баянтуул"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.417657",
    "name": "4-р баг, Хушинга"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.417659",
    "name": "5-р баг, Тамган"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.417951",
    "name": "1-р баг, Баян-Уул"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.417953",
    "name": "2-р баг, Баргилт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.417955",
    "name": "3-р баг, Буянт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.417957",
    "name": "4-р баг, Угалзат"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.417959",
    "name": "5-р баг, Улаанхудаг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.420151",
    "name": "1-р баг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.420153",
    "name": "2-р баг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.420155",
    "name": "3-р баг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.420157",
    "name": "4-р баг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.420159",
    "name": "5-р баг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.420161",
    "name": "6-р баг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.420451",
    "name": "1-р баг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.420453",
    "name": "2-р баг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.420751",
    "name": "1-р баг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.420753",
    "name": "2-р баг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.430151",
    "name": "1-р баг, Хонгорморьт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.430153",
    "name": "2-р баг, Цагаан-Эрэг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.430155",
    "name": "3-р баг, Салхит"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.430157",
    "name": "4-р баг, Баянхаан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.430159",
    "name": "5-р баг, Боргүвээ"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.430161",
    "name": "6-р баг, Орхон"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.430163",
    "name": "7-р баг, Ган зам"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.430165",
    "name": "8-р баг, Буур хээр"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.430451",
    "name": "1-р баг, Бүргэдэй"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.430453",
    "name": "2-р баг, Суварга"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.430455",
    "name": "3-р баг, Цөх"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.430751",
    "name": "1-р баг, Ивэн"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.430753",
    "name": "2-р баг, Бургалтай"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.430755",
    "name": "3-р баг, Цагаан-Овоо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.431051",
    "name": "1-р баг, Хараа"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.431053",
    "name": "2-р баг, Баян"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.431055",
    "name": "3-р баг, Гонир"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.431351",
    "name": "1-р баг, Тавин"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.431353",
    "name": "2-р баг, Буурагчин"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.431355",
    "name": "3-р баг, Бугант"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.431651",
    "name": "1-р баг, Бумбат"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.431653",
    "name": "2-р баг, Моностой"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.431951",
    "name": "1-р баг, Жаргалант"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.431953",
    "name": "2-р баг, Бэлчир"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.431955",
    "name": "3-р баг, Мангирт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.432251",
    "name": "1-р баг, Төмөр зам"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.432253",
    "name": "2-р баг, Ширхэнцэг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.432255",
    "name": "3-р баг, Баянсуудал"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.432257",
    "name": "4-р баг, Хэрх"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.432259",
    "name": "5-р баг, Түнхэл"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.432261",
    "name": "6-р баг, Баянхангай"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.432263",
    "name": "7-р баг, Минжийн хангай"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.432265",
    "name": "8-р баг, Тарни"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.432267",
    "name": "9-р баг, Баян-Арцат"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.432551",
    "name": "1-р баг, Орхон"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.432553",
    "name": "2-р баг, Бэлэндалай"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.432851",
    "name": "1-р баг, Рашаант"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.432853",
    "name": "2-р баг, Баянцогт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.432855",
    "name": "3-р баг, Хонгор-Овоо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.433151",
    "name": "1-р баг, Хөтөл"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.433153",
    "name": "2-р баг, Гавшгай"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.433155",
    "name": "3-р баг, Номгон"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.433157",
    "name": "4-р баг, Дөмбөн"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.433451",
    "name": "1-р баг, Ивэн"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.433453",
    "name": "2-р баг, Хушаат"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.433751",
    "name": "1-р баг, Жаргалмандах"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.433753",
    "name": "2-р баг, Ар нуга"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.434051",
    "name": "1-р баг, Тарвагатай"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.434053",
    "name": "2-р баг, Баянцагаан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.434351",
    "name": "1-р баг, Даагат"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.434353",
    "name": "2-р баг, Мөнхтолгой"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.434651",
    "name": "1-р баг, Оргих"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.434653",
    "name": "2-р баг, Хуурч"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.434655",
    "name": "3-р баг, Тийрэг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.434951",
    "name": "1-р баг, Дэлгэрхаан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.434953",
    "name": "2-р баг, Охиндий"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.434955",
    "name": "3-р баг, Дулаанхаан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.440151",
    "name": "1-р баг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.440153",
    "name": "2-р баг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.440155",
    "name": "3-р баг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.440157",
    "name": "4-р баг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.440159",
    "name": "5-р баг, Зүүнбаян"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.440161",
    "name": "6-р баг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.440163",
    "name": "7-р баг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.440451",
    "name": "1-р баг, Нард"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.440453",
    "name": "2-р баг, Сайн-Ус"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.440455",
    "name": "3-р баг, Нүдэн"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.440457",
    "name": "4-р баг, Цагаан дөрвөлж"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.440751",
    "name": "1-р баг, Тойг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.440753",
    "name": "2-р баг, Зараа"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.440755",
    "name": "3-р баг, Хаяа"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.440757",
    "name": "4-р баг, Чулуун гишгэр"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.441051",
    "name": "1-р баг, Элдэв"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.441053",
    "name": "2-р баг, Өнгөт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.441055",
    "name": "3-р баг, Бичигт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.441057",
    "name": "4-р баг, Цомог"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.441059",
    "name": "5-р баг, Олон-Овоо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.441351",
    "name": "1-р баг, Цагаанхад"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.441353",
    "name": "2-р баг, Аман шанд"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.441355",
    "name": "3-р баг, Бумбат"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.441357",
    "name": "4-р баг, Хонгор"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.441651",
    "name": "1-р баг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.441653",
    "name": "2-р баг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.441655",
    "name": "3-р баг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.441657",
    "name": "4-р баг, Сүлд"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.441659",
    "name": "5-р баг, Борхойн"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.441951",
    "name": "1-р баг, Бүрдэнэ"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.441953",
    "name": "2-р баг, Баян"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.441955",
    "name": "3-р баг, Зүлэгт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.442251",
    "name": "1-р баг, Алхантээг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.442253",
    "name": "2-р баг, Баянхошуу"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.442255",
    "name": "3-р баг, Өехий"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.442257",
    "name": "4-р баг, Сэрвэн баянхошуу"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.442259",
    "name": "5-р баг, Төхөм"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.442551",
    "name": "1-р баг, Сүмийн булаг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.442553",
    "name": "2-р баг, Сүмбэр"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.442555",
    "name": "3-р баг, Баянмөнх"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.442557",
    "name": "4-р баг, Сэнж"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.442851",
    "name": "1-р баг, Улаан шороот"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.442853",
    "name": "2-р баг, Жаргалант"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.442855",
    "name": "3-р баг, Цохио"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.442857",
    "name": "4-р баг, Өлзийт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.443151",
    "name": "1-р баг, Сангийн далай"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.443153",
    "name": "2-р баг, Баянбогд"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.443155",
    "name": "3-р баг, Аргалант"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.443157",
    "name": "4-р баг, Нүдэн"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.443451",
    "name": "1-р баг, Халив"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.443453",
    "name": "2-р баг, Эргэл"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.443455",
    "name": "3-р баг, Агаруут"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.443457",
    "name": "4-р баг, Сулинхээр"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.443459",
    "name": "5-р баг, Аман-Ус"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.443751",
    "name": "1-р баг, Жавхлант"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.443753",
    "name": "2-р баг, Чулуут"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.443755",
    "name": "3-р баг, Элст"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.443757",
    "name": "4-р баг, Хөвсгөл"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.444051",
    "name": "1-р баг, Бүрдэнэ"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.444053",
    "name": "2-р баг, Еншөөв"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.444057",
    "name": "4-р баг, Дөрвөлж"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.444059",
    "name": "5-р баг, Улаан-Уул"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.450151",
    "name": "1-р баг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.450153",
    "name": "2-р баг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.450155",
    "name": "3-р баг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.450157",
    "name": "4-р баг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.450159",
    "name": "5-р баг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.450161",
    "name": "6-р баг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.450163",
    "name": "7-р баг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.450165",
    "name": "8-р баг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.450167",
    "name": "9-р баг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.450169",
    "name": "10-р баг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.450171",
    "name": "11-р баг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.450173",
    "name": "12-р баг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.450175",
    "name": "13-р баг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.450177",
    "name": "14-р баг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.450179",
    "name": "15-р баг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.450181",
    "name": "16-р баг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.450183",
    "name": "17-р баг, Өргөө"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.450185",
    "name": "18-р баг, Малчин"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.450451",
    "name": "1-р баг, Баян-Өлзийт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.450453",
    "name": "2-р баг, Энхтал"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.450751",
    "name": "1-р баг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.450753",
    "name": "2-р баг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.450755",
    "name": "3-р баг, Салхит"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.451051",
    "name": "1-р баг, Хайрхан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.451053",
    "name": "2-р баг, Дархан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.451055",
    "name": "3-р баг, Санжинт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.460151",
    "name": "1-р баг, Баруунсайхан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.460153",
    "name": "2-р баг, Хан-Уул"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.460155",
    "name": "3-р баг, Далан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.460157",
    "name": "4-р баг, Дундсайхан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.460159",
    "name": "5-р баг, Зүүнсайхан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.460161",
    "name": "6-р баг, Их уул"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.460163",
    "name": "7-р баг, Оюут"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.460165",
    "name": "8-р баг, Цагаан булаг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.460451",
    "name": "1-р баг, Баян"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.460453",
    "name": "2-р баг, Наран"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.460455",
    "name": "3-р баг, Төхөм"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.460751",
    "name": "1-р баг, Могойт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.460753",
    "name": "2-р баг, Харзаг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.460755",
    "name": "3-р баг, Налих"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.461051",
    "name": "1-р баг, Дэн"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.461053",
    "name": "2-р баг, Дал"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.461055",
    "name": "3-р баг, Хавцгайт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.461057",
    "name": "4-р баг, Булган"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.461351",
    "name": "1-р баг, Гоёот"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.461353",
    "name": "2-р баг, Баясах"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.461355",
    "name": "3-р баг, Тост"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.461357",
    "name": "4-р баг, Урт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.461359",
    "name": "5-р баг, Бага-Овоо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.461651",
    "name": "1-р баг, Өтгөн"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.461653",
    "name": "2-р баг, Баянхошуу"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.461655",
    "name": "3-р баг, Мандал"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.461951",
    "name": "1-р баг, Өехий"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.461953",
    "name": "2-р баг, Өгөөмөр"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.461955",
    "name": "3-р баг, Жаргалант"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.461957",
    "name": "4-р баг, Далай"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.462251",
    "name": "1-р баг, Сайран"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.462253",
    "name": "2-р баг, Ганзагад"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.462551",
    "name": "1-р баг, Хармагтай"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.462553",
    "name": "2-р баг, Төхөм"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.462555",
    "name": "3-р баг, Дэрсэнэ-Ус"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.462557",
    "name": "4-р баг, Эмгэнбулаг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.462559",
    "name": "5-р баг, Богт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.462851",
    "name": "1-р баг, Сайншанд"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.462853",
    "name": "2-р баг, Хоолт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.462855",
    "name": "3-р баг, Бүйлсэн"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.463151",
    "name": "1-р баг, Номгон"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.463153",
    "name": "2-р баг, Гавилууд"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.463155",
    "name": "3-р баг, Жавхлант"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.463157",
    "name": "4-р баг, Баян"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.463159",
    "name": "5-р баг, Хайрхан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.463451",
    "name": "1-р баг, Мандах"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.463453",
    "name": "2-р баг, Өгөөмөр"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.463455",
    "name": "3-р баг, Хондот"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.463457",
    "name": "4-р баг, Жаргалант"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.463751",
    "name": "1-р баг, Жанжин"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.463753",
    "name": "2-р баг, Тулга"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.463755",
    "name": "3-р баг, Хүрмэн"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.464051",
    "name": "1-р баг,Замын шанд"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.464053",
    "name": "2-р баг, Бортээг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.464055",
    "name": "3-р баг, Найз"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.464351",
    "name": "1-р баг, Сийрст"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.464353",
    "name": "2-р баг, Билгэх"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.464355",
    "name": "3-р баг, Цагаан-Овоо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.464357",
    "name": "4-р баг, Өгөөмөр"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.480151",
    "name": "1-р баг, Наран"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.480153",
    "name": "2-р баг, Тэвш"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.480155",
    "name": "3-р баг, Далай"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.480157",
    "name": "4-р баг, Үйзэн"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.480159",
    "name": "5-р баг, Аривжих"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.480161",
    "name": "6-р баг, Боржигон"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.480163",
    "name": "7-р баг, Нарлаг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.480165",
    "name": "8-р баг, Айраг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.480167",
    "name": "9-р баг, Мандал"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.480451",
    "name": "1-р баг, Тавин"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.480453",
    "name": "2-р баг, Ар-Урт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.480455",
    "name": "3-р баг, Өвөр-Урт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.480457",
    "name": "4-р баг, Сүм"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.480459",
    "name": "5-р баг, Хашаат"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.480751",
    "name": "1-р баг, Шилийн гол"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.480753",
    "name": "2-р баг, Энгэр-Ус"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.480755",
    "name": "3-р баг, Аргатай"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.481051",
    "name": "1-р баг, Ажирхай"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.481053",
    "name": "2-р баг, Морьт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.481055",
    "name": "3-р баг, Хонгор"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.481351",
    "name": "1-р баг, Элгэн"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.481353",
    "name": "2-р баг, Дэрсэнэ ус"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.481355",
    "name": "3-р баг, Чулуут"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.481357",
    "name": "4-р баг, Гурвансайхан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.481359",
    "name": "5-р баг, Суугаант"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.481651",
    "name": "1-р баг, Толь"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.481653",
    "name": "2-р баг, Таргат"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.481655",
    "name": "3-р баг, Ар шавагтай"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.481657",
    "name": "4-р баг, Номгон"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.481951",
    "name": "1-р баг, Баянбулаг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.481953",
    "name": "2-р баг, Цахиурт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.481955",
    "name": "3-р баг, Дэлгэр-Эмт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.482251",
    "name": "1-р баг, Алаг-Өндөр"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.482253",
    "name": "2-р баг, Саруул"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.482255",
    "name": "3-р баг, Долоод"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.482257",
    "name": "4-р баг, Бумбат"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.482551",
    "name": "1-р баг, Суварга"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.482553",
    "name": "2-р баг, Наран"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.482555",
    "name": "3-р баг, Буянт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.482851",
    "name": "1-р баг, Буянт 1"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.482853",
    "name": "2-р баг, Буянт 2"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.482855",
    "name": "3-р баг, Тагт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.482857",
    "name": "4-р баг, Дэрт 1"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.482859",
    "name": "5-р баг, Дэрт 2"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.483151",
    "name": "1-р баг, Цог"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.483153",
    "name": "2-р баг, Талын нар"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.483155",
    "name": "3-р баг, Бөхт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.483451",
    "name": "1-р баг, Онги"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.483453",
    "name": "2-р баг, Мааньт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.483457",
    "name": "4-р баг, Төгрөг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.483751",
    "name": "1-р баг, Шувуутай"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.483753",
    "name": "2-р баг, Олдох"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.483755",
    "name": "3-р баг, Уул"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.483757",
    "name": "4-р баг, Бүлээн"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.484051",
    "name": "1-р баг, Хараат"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.484053",
    "name": "2-р баг, Дэлгэрэх зам"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.484055",
    "name": "3-р баг, Жаргалант"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.484057",
    "name": "4-р баг, Замын-Улаан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.484351",
    "name": "1-р баг, Цавчир"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.484353",
    "name": "2-р баг, Өнгөт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.484355",
    "name": "3-р баг, Тэнгэлэг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.484357",
    "name": "4-р баг, Рашаант"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.484359",
    "name": "5-р баг, Цагаан-Овоо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.484361",
    "name": "6-р баг, Сангийн далай"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.484363",
    "name": "7-р баг, Сумын төв"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.610151",
    "name": "1-р баг, Зэст"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.610153",
    "name": "2-р баг, Оюут"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.610155",
    "name": "3-р баг, Уурхайчин"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.610157",
    "name": "4-р баг, Хүрэнбулаг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.610159",
    "name": "5-р баг, Уртбулаг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.610161",
    "name": "6-р баг, Согоот"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.610163",
    "name": "7-р баг, Дэнж"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.610165",
    "name": "8-р баг, Бүрэнбүст"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.610167",
    "name": "9-р баг, Шанд"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.610169",
    "name": "10-р баг, Наран"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.610171",
    "name": "11-р баг, Цагаанчулуут"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.610173",
    "name": "12-р баг, Булаг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.610175",
    "name": "13-р баг, Баянцагаан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.610177",
    "name": "14-р баг, Говил"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.610179",
    "name": "15-р баг, Рашаант"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.610183",
    "name": "17-р баг, Эрдэнэ"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.610185",
    "name": "18-р баг, Баянбулаг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.610187",
    "name": "19-р баг, Их залуу"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.610189",
    "name": "20-р баг, Даваат"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.610191",
    "name": "21-р баг, Уртын гол"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.610193",
    "name": "22-р баг, Яргуйт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.610451",
    "name": "1-р баг, Улаантолгой"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.610453",
    "name": "2-р баг, Жаргалант"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.610455",
    "name": "3-р баг, Дулаан-Уул"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.620151",
    "name": "1-р баг, Согоот"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.620153",
    "name": "2-р баг, Эмт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.620155",
    "name": "3-р баг, Дэлгэрэх"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.620157",
    "name": "4-р баг, Өлзийт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.620159",
    "name": "5-р баг, Арвайхээр"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.620161",
    "name": "6-р баг, Ягаантолгой"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.620163",
    "name": "7-р баг, Дэлгэрэхийн дэнж"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.620165",
    "name": "8-р баг, Рашаант"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.620167",
    "name": "9-р баг, Бурхи"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.620169",
    "name": "10-р баг, Ноён"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.620171",
    "name": "11-р баг, Хүйс толгой"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.620173",
    "name": "12-р баг, Зүлэгт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.620175",
    "name": "13-р баг, Онги"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.620451",
    "name": "1-р баг, Цагаан овоо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.620453",
    "name": "2-р баг, Хүүхдийн-Ус"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.620455",
    "name": "3-р баг, Өлзийт хошуу"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.620457",
    "name": "4-р баг, Хөөвөр"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.620751",
    "name": "1-р баг, Улаан-Ам"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.620753",
    "name": "2-р баг, Бүрэгтий"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.620755",
    "name": "3-р баг, Өвт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.620757",
    "name": "4-р баг, Зөрүүлэг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.620759",
    "name": "5-р баг, Хүйтэн булаг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.621051",
    "name": "1-р баг, Өндөр өнц"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.621053",
    "name": "2-р баг, Эргэн дэнж"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.621055",
    "name": "3-р баг, Цагаан булан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.621057",
    "name": "4-р баг, Хаяа"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.621059",
    "name": "5-р баг, Цавын-Ихэр"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.621061",
    "name": "6-р баг, Ширээ"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.621351",
    "name": "1-р баг, Бөмбий"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.621353",
    "name": "2-р баг, Батхаан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.621355",
    "name": "3-р баг, Өвөр зүлэгт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.621357",
    "name": "4-р баг, Хар тойром"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.621359",
    "name": "5-р баг, Бумбат"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.621651",
    "name": "1-р баг, Өлзийт хошуу"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.621653",
    "name": "2-р баг, Хөөвөр"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.621655",
    "name": "3-р баг, Баян төхөм"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.621657",
    "name": "4-р баг, Гүн-Ус"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.621659",
    "name": "5-р баг, Далан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.621661",
    "name": "6-р баг, Ялаатай"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.621663",
    "name": "7-р баг, Ховд"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.621951",
    "name": "1-р баг, Ар жаргалант"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.621953",
    "name": "2-р баг, Их боригдой"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.621955",
    "name": "3-р баг, Донгит"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.621957",
    "name": "4-р баг, Ар хөшөөт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.621959",
    "name": "5-р баг, Онгон"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.622251",
    "name": "1-р баг, Хөөвөр"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.622253",
    "name": "2-р баг, Гучин"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.622255",
    "name": "3-р баг, Аргалант"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.622257",
    "name": "4-р баг, Аргуйт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.622551",
    "name": "1-р баг, Тахилга"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.622553",
    "name": "2-р баг, Мөнхбулаг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.622555",
    "name": "3-р баг, Хайрхан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.622557",
    "name": "4-р баг, Эрээн"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.622851",
    "name": "1-р баг, Эмгэд"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.622853",
    "name": "2-р баг, Цахиурт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.622855",
    "name": "3-р баг, Цохиот"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.622857",
    "name": "4-р баг, Баян-Улаан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.622859",
    "name": "5-р баг, Хад"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.622861",
    "name": "6-р баг, Дэвшил"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.623151",
    "name": "1-р баг, Шарга"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.623153",
    "name": "2-р баг, Баянтээг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.623155",
    "name": "3-р баг, Өндөрхөмөг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.623157",
    "name": "4-р баг, Цагаан-Овоо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.623451",
    "name": "1-р баг, Бор хошуут"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.623453",
    "name": "2-р баг, Агуйт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.623455",
    "name": "3-р баг, Яргайт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.623457",
    "name": "4-р баг, Гуулин"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.623751",
    "name": "1-р баг, Царги"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.623753",
    "name": "2-р баг, Цахиурт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.623755",
    "name": "3-р баг, Улаан-Овоо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.623757",
    "name": "4-р баг, Залаа"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.623759",
    "name": "5-р баг, Майхан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.624051",
    "name": "1-р баг, Туяа"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.624053",
    "name": "2-р баг, Арвайнтал"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.624055",
    "name": "3-р баг, Хүрэмт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.624057",
    "name": "4-р баг, Урт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.624059",
    "name": "5-р баг, Их булаг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.624061",
    "name": "6-р баг, Алтантал"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.624351",
    "name": "1-р баг, Хоолт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.624353",
    "name": "2-р баг, Их-Ус"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.624355",
    "name": "3-р баг, Мазар"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.624357",
    "name": "4-р баг, Сайн төгрөг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.624359",
    "name": "5-р баг, Баян"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.624651",
    "name": "1-р баг, Жаргалант"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.624653",
    "name": "2-р баг, Таац"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.624655",
    "name": "3-р баг, Шивээ-Овоо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.624657",
    "name": "4-р баг, Шуранга"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.624659",
    "name": "5-р баг, Бадрал"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.624661",
    "name": "6-р баг, Бөөрөлжүүт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.624663",
    "name": "7-р баг, Өлт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.624665",
    "name": "8-р баг, Онги"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.624951",
    "name": "1-р баг, Бурхант"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.624953",
    "name": "2-р баг, Нарт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.624955",
    "name": "3-р баг, Эмээлт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.624957",
    "name": "4-р баг, Дэрсэн хонхор"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.624959",
    "name": "5-р баг, Ар агуйт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.624961",
    "name": "6-р баг, Марзат"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.625251",
    "name": "1-р баг, Вангийн-Овоо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.625253",
    "name": "2-р баг, Ганган-Орхон"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.625255",
    "name": "3-р баг, Эрдэнэтолгой"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.625257",
    "name": "4-р баг, Нарийн хүр"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.625259",
    "name": "5-р баг, Онгоцон-Ухаа"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.625261",
    "name": "6-р баг, Жалбаа"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.625263",
    "name": "7-р баг, Шанх"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.625265",
    "name": "8-р баг, Орхон"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.625551",
    "name": "1-р баг, Өвөр модот"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.625553",
    "name": "2-р баг, Уужим"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.625555",
    "name": "3-р баг, Бэрх"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.625557",
    "name": "4-р баг, Шивээт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.625559",
    "name": "5-р баг, Шунхлай"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.625561",
    "name": "6-р баг, Дулаан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.630151",
    "name": "1-р баг, Ачуут баг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.630153",
    "name": "2-р баг, Хужирт баг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.630155",
    "name": "3-р баг, Агуйт баг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.630157",
    "name": "4-р баг, Рашаант баг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.630159",
    "name": "5-р баг, Жаргалант"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.630161",
    "name": "6-р баг, Булган"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.630451",
    "name": "1-р баг, Шарга"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.630453",
    "name": "2-р баг, Баянзүрх"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.630455",
    "name": "3-р баг, Баянхайрхан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.630457",
    "name": "4-р баг, Дулаанхаан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.630459",
    "name": "5-р баг, Халтар"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.630461",
    "name": "6-р баг, Хүрэмт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.630751",
    "name": "1-р баг, Өлзийт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.630753",
    "name": "2-р баг, Шар тал"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.631051",
    "name": "1-р баг, Баянтөгөл"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.631053",
    "name": "2-р баг, Ханжаргалант"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.631055",
    "name": "3-р баг, Найрамдал"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.631351",
    "name": "1-р баг, Бумбат"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.631353",
    "name": "2-р баг, Цахт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.631355",
    "name": "3-р баг, Дэрст"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.631357",
    "name": "4-р баг, Дархан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.631651",
    "name": "1-р баг, Тогоо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.631653",
    "name": "2-р баг, Авзага"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.631655",
    "name": "3-р баг, Агьт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.631657",
    "name": "4-р баг, Бэрх"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.631659",
    "name": "5-р баг, Хөгнө"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.631661",
    "name": "6-р баг, Хулст"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.631951",
    "name": "1-р баг, Хараат"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.631953",
    "name": "2-р баг, Лах"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.631955",
    "name": "3-р баг, Доргонт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.631957",
    "name": "4-р баг, Төв"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.632251",
    "name": "1-р баг, Жаргалант"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.632253",
    "name": "2-р баг, Баясгалант"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.632255",
    "name": "3-р баг, Баянгол"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.632257",
    "name": "4-р баг, Баян-Уул"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.632259",
    "name": "5-р баг, Эрхт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.632551",
    "name": "1-р баг, Арбулаг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.632553",
    "name": "2-р баг, Халиун"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.632555",
    "name": "3-р баг, Бүхт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.632557",
    "name": "4-р баг, Мааньт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.632559",
    "name": "5-р баг, Сумын төв"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.632851",
    "name": "1-р баг, Хөгнө хан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.632853",
    "name": "2-р баг, Хар чулуут"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.632855",
    "name": "3-р баг, Улаан шивээт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.633151",
    "name": "1-р баг, Мануулт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.633153",
    "name": "2-р баг, Угалз"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.633155",
    "name": "3-р баг, Хульж"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.633157",
    "name": "4-р баг, Ундрах"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.633159",
    "name": "5-р баг, Их Хүрэмт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.633161",
    "name": "6-р баг, Сайхан-Овоо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.633451",
    "name": "1-р баг, Таримал"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.633453",
    "name": "2-р баг, Тариахтай"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.633455",
    "name": "3-р баг, Сэлэнгэбүрэн"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.633457",
    "name": "4-р баг, Сангалтай"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.633459",
    "name": "5-р баг, Ингэт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.633751",
    "name": "1-р баг, Хужирт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.633753",
    "name": "2-р баг, Харгал"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.633755",
    "name": "3-р баг, Далан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.633757",
    "name": "4-р баг, Эрэн"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.633759",
    "name": "5-р баг, Жаргалант"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.634051",
    "name": "1-р баг, Сөрт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.634053",
    "name": "2-р баг, Урт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.634055",
    "name": "3-р баг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.634351",
    "name": "1-р баг, Банзар"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.634353",
    "name": "2-р баг, Хүрэмт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.634355",
    "name": "3-р баг, Тээг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.634357",
    "name": "4-р баг, Жаргалант"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.634359",
    "name": "5-р баг, Мааньт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.634651",
    "name": "1-р баг, Хутаг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.634653",
    "name": "2-р баг, Хантай"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.634655",
    "name": "3-р баг, Уньт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.634657",
    "name": "4-р баг, Тээл"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.634659",
    "name": "5-р баг, Хонгор"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.640151",
    "name": "1-р баг, Номгон"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.640153",
    "name": "2-р баг, Эрдэнэмандал"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.640155",
    "name": "3-р баг, Дуурсах"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.640157",
    "name": "4-р баг, Угалз"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.640159",
    "name": "5-р баг, Цагаанчулуут"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.640161",
    "name": "6-р баг, Гэгээн шавь"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.640163",
    "name": "7-р баг, Цахир"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.640167",
    "name": "9-р баг, Есөнбулаг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.640169",
    "name": "10-р баг, Рашаант"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.640451",
    "name": "1-р баг, Баянбулаг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.640453",
    "name": "2-р баг, Оройн бууц"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.640455",
    "name": "3-р баг, Буйлсан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.640457",
    "name": "4-р баг, Могой"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.640459",
    "name": "5-р баг, Товгор"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.640461",
    "name": "6-р баг, Зүүнхаяа"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.640463",
    "name": "7-р баг, Баянсайр"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.640751",
    "name": "1-р баг, Сангийн далай"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.640753",
    "name": "2-р баг, Ар жаргалант"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.640755",
    "name": "3-р баг, Хангал"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.640757",
    "name": "4-р баг, Бүрд"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.641051",
    "name": "1-р баг, Хэлтгий булаг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.641053",
    "name": "2-р баг, Өрхт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.641055",
    "name": "3-р баг, Залаа"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.641057",
    "name": "4-р баг, Цоохор"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.641059",
    "name": "5-р баг, Өргөн"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.641351",
    "name": "1-р баг, Их халбагант"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.641353",
    "name": "2-р баг, Баян-Аараг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.641355",
    "name": "3-р баг, Бага баян"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.641357",
    "name": "4-р баг, Их баян"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.641359",
    "name": "5-р баг, Хатан суудал"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.641651",
    "name": "1-р баг, Мандалхайрхан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.641653",
    "name": "2-р баг, Уранхайрхан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.641655",
    "name": "3-р баг, Асгамба"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.641657",
    "name": "4-р баг, Мэргэн"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.641951",
    "name": "1-р баг, Улаан үзүүр"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.641953",
    "name": "2-р баг, Элгэн"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.641955",
    "name": "3-р баг, Булган"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.641957",
    "name": "4-р баг, Идрэн"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.642251",
    "name": "1-р баг, Гичгэнэ"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.642253",
    "name": "2-р баг, Дэлгэрэх"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.642255",
    "name": "3-р баг, Цэцэн"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.642259",
    "name": "5-р баг, Баянбулаг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.642551",
    "name": "1-р баг, Луугар"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.642553",
    "name": "2-р баг, Гурван гол"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.642555",
    "name": "3-р баг, Алтай"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.642557",
    "name": "4-р баг, Цэлгэр"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.642559",
    "name": "5-р баг, Буянт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.642561",
    "name": "6-р баг, Хориулт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.642851",
    "name": "1-р баг, Улаан сайр"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.642853",
    "name": "2-р баг, Хөх толгой"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.642855",
    "name": "3-р баг, Бургас"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.642857",
    "name": "4-р баг, Задгай"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.643151",
    "name": "1-р баг, Тэмээт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.643153",
    "name": "2-р баг, Баян"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.643155",
    "name": "3-р баг, Өлзийт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.643157",
    "name": "4-р баг, Баянбүрд"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.643159",
    "name": "5-р баг, Наран"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.643161",
    "name": "6-р баг, Буянт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.643451",
    "name": "1-р баг, Хайрхан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.643453",
    "name": "2-р баг, Сүмбэр"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.643455",
    "name": "3-р баг, Үнэгт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.643457",
    "name": "4-р баг, Баяннуур"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.643459",
    "name": "5-р баг, Мандал"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.643461",
    "name": "6-р баг, Баянхошуу"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.643751",
    "name": "1-р баг, Цэнгэл"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.643753",
    "name": "2-р баг, Давааны ам"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.643755",
    "name": "3-р баг, Буга"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.643757",
    "name": "4-р баг, Хөвийн ам"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.643759",
    "name": "5-р баг, Пионер толгой"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.644051",
    "name": "1-р баг, Намтолгой"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.644053",
    "name": "2-р баг, Өлзийт-Өндөр"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.644055",
    "name": "3-р баг, Хөндлөн булаг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.644057",
    "name": "4-р баг, Эмээл толгой"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.644351",
    "name": "1-р баг, Уу-булан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.644353",
    "name": "2-р баг, Хүйс"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.644355",
    "name": "3-р баг, Хөнөг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.644357",
    "name": "4-р баг, Цагаан ус"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.644359",
    "name": "5-р баг, Бодь"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.644651",
    "name": "1-р баг, Баянбулаг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.644653",
    "name": "2-р баг, Баян-Улаан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.644655",
    "name": "3-р баг, Чандмань-Овоо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.644657",
    "name": "4-р баг, Залаа-Овоо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.644951",
    "name": "1-р баг, Бурхант"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.644953",
    "name": "2-р баг, Байн ам"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.644955",
    "name": "3-р баг, Ёлын ам"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.644957",
    "name": "4-р баг, Худаг урт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.644959",
    "name": "5-р баг, Бийрийн уулзвар"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.644961",
    "name": "6-р баг, Улаан уул"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.645251",
    "name": "1-р баг, Хөх бүрд"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.645253",
    "name": "2-р баг, Сонор"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.645255",
    "name": "3-р баг, Норовлин"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.645257",
    "name": "4-р баг, Цорж"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.645259",
    "name": "5-р баг, Дэлгэр мөрөн"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.645551",
    "name": "1-р баг, Зараа"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.645553",
    "name": "2-р баг, Уртын гол"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.645555",
    "name": "3-р баг, Эрдэнэшанд"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.645557",
    "name": "4-р баг, Эхэн хавцгай"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.645851",
    "name": "1-р баг, Сэнжит"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.645853",
    "name": "2-р баг, Ямаат"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.645855",
    "name": "3-р баг, Өвгөнжаргалант"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.645857",
    "name": "4-р баг, Жанжин"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.645859",
    "name": "5-р баг, Эрхэт хайрхан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.645861",
    "name": "6-р баг, Цагаан дэнж"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.650151",
    "name": "1-р баг, Цагаан даваа"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.650153",
    "name": "2-р баг, Арслан цохио"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.650155",
    "name": "3-р баг, Цагдуулт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.650157",
    "name": "4-р баг, Бор толгой"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.650159",
    "name": "5-р баг, Наранбулаг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.650161",
    "name": "6-р баг, Цагаан дэл"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.650163",
    "name": "7-р баг, Тамир"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.650451",
    "name": "1-р баг, Улаанчулуу"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.650453",
    "name": "2-р баг, Хөнөг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.650455",
    "name": "3-р баг, Дэл"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.650457",
    "name": "4-р баг, Баян-Уул"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.650459",
    "name": "5-р баг, Цац"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.650461",
    "name": "6-р баг, Дайрбор"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.650751",
    "name": "1-р баг, Тусгалт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.650753",
    "name": "2-р баг, Зуунмод"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.650755",
    "name": "3-р баг, Тамир"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.650757",
    "name": "4-р баг, Баянбулаг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.651051",
    "name": "1-р баг, Асайт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.651053",
    "name": "2-р баг, Хоолт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.651055",
    "name": "3-р баг, Эрдэнэ-Уул"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.651057",
    "name": "4-р баг, Зуслан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.651059",
    "name": "5-р баг, Баянцагаан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.651351",
    "name": "1-р баг, Хөхнуур"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.651353",
    "name": "2-р баг, Хан-Өндөр"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.651355",
    "name": "3-р баг, Борт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.651357",
    "name": "4-р баг, Бугат"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.651359",
    "name": "5-р баг, Тайхар"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.651361",
    "name": "6-р баг, Эрдэнэтолгой"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.651651",
    "name": "1-р баг, Тоглох"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.651653",
    "name": "2-р баг, Дойт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.651655",
    "name": "3-р баг, Өгий"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.651657",
    "name": "4-р баг, Орхон"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.651659",
    "name": "5-р баг, Зэгстэй"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.651951",
    "name": "1-р баг, Ямаат"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.651953",
    "name": "2-р баг, Бодонт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.651955",
    "name": "3-р баг, Байшир"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.651957",
    "name": "4-р баг, Хөшөөт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.652251",
    "name": "1-р баг, Азарга"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.652253",
    "name": "2-р баг, Хануй"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.652255",
    "name": "3-р баг, Донгой"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.652257",
    "name": "4-р баг, Бэлхи"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.652259",
    "name": "5-р баг, Тээл"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.652551",
    "name": "1-р баг, Тэрх"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.652553",
    "name": "2-р баг, Цагааннуур"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.652555",
    "name": "3-р баг, Хорго"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.652557",
    "name": "4-р баг, Суман"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.652559",
    "name": "5-р баг, Бөөрөлжүүт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.652561",
    "name": "6-р баг, Мөрөн"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.652563",
    "name": "7-р баг, Алтайд"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.652851",
    "name": "1-р баг, Хөх сүм"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.652853",
    "name": "2-р баг, Баян-Өндөр"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.652855",
    "name": "3-р баг, Урантолгой"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.652857",
    "name": "4-р баг, Өртөнт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.653151",
    "name": "1-р баг, Хайрхан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.653153",
    "name": "2-р баг, Асгат"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.653155",
    "name": "3-р баг, Жарантай"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.653157",
    "name": "4-р баг, Могой"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.653159",
    "name": "5-р баг, Өгөөмөр"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.653451",
    "name": "1-р баг, Чандмань"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.653453",
    "name": "2-р баг, Гичгэнэ"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.653455",
    "name": "3-р баг, Арбаясгалан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.653457",
    "name": "4-р баг, Баян-Улаан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.653459",
    "name": "5-р баг, Тэрх"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.653461",
    "name": "6-р баг, Ноён хангай"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.653751",
    "name": "1-р баг, Жаргалант"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.653753",
    "name": "2-р баг, Номгон"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.653755",
    "name": "3-р баг, Цайдам"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.653757",
    "name": "4-р баг, Цагаан хад"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.653759",
    "name": "5-р баг, Баян"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.654051",
    "name": "1-р баг, Хотонт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.654053",
    "name": "2-р баг, Хөөвөр"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.654055",
    "name": "3-р баг, Бургалтай"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.654057",
    "name": "4-р баг, Улаан чулуу"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.654059",
    "name": "5-р баг, Орхон"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.654061",
    "name": "6-р баг, Өндөр сант"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.654351",
    "name": "1-р баг, Баянгол"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.654353",
    "name": "2-р баг, Хан-уул"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.654355",
    "name": "3-р баг, Цахир"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.654357",
    "name": "4-р баг, Жинст"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.654651",
    "name": "1-р баг, Орхон"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.654653",
    "name": "2-р баг, Цэцэрлэг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.654655",
    "name": "3-р баг, Цэнхэр"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.654657",
    "name": "4-р баг, Алтан-Овоо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.654659",
    "name": "5-р баг, Буйлан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.654951",
    "name": "1-р баг, Чулуут"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.654953",
    "name": "2-р баг, Туулант"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.654955",
    "name": "3-р баг, Хужирт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.654957",
    "name": "4-р баг, Хонгорж"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.654959",
    "name": "5-р баг, Ихбулаг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.655251",
    "name": "1-р баг, Өлзийт гол"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.655253",
    "name": "2-р баг, Зуунмод"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.655255",
    "name": "3-р баг, Халуун-Ус"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.655257",
    "name": "4-р баг, Хайрхан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.655259",
    "name": "5-р баг, Хүрэм"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.655551",
    "name": "1-р баг, Алаг-Уул"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.655553",
    "name": "2-р баг, Идэр-Улаан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.655555",
    "name": "3-р баг, Эрдэнэ-Уул"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.655557",
    "name": "4-р баг, Хан-Өндөр"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.655559",
    "name": "5-р баг, Тээл"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.655561",
    "name": "6-р баг, Өлзийт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.670151",
    "name": "1-р баг, Нисэх"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.670153",
    "name": "2-р баг, Сүх"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.670155",
    "name": "3-р баг, Хужирт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.670157",
    "name": "4-р баг, Дулаан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.670159",
    "name": "5-р баг, Уст"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.670161",
    "name": "6-р баг, Мандал"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.670163",
    "name": "7-р баг, Элст"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.670165",
    "name": "8-р баг, Уран дөш"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.670167",
    "name": "9-р баг, Үерт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.670169",
    "name": "10-р баг, Жилчиг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.670171",
    "name": "11-р баг, Наран"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.670173",
    "name": "12-р баг, Эрхэл"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.670175",
    "name": "13-р баг, Эрчим"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.670177",
    "name": "14-р баг, Баян"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.670451",
    "name": "1-р баг, Шувуут"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.670453",
    "name": "2-р баг, Ужиг /Цагаан бэлчир/"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.670455",
    "name": "3-р баг, Яргис"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.670457",
    "name": "4-р баг, Цагаан бургас"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.670459",
    "name": "5-р баг, Манхан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.670461",
    "name": "6-р баг, Хатгал тосгон"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.670751",
    "name": "1-р баг, Хавтага"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.670753",
    "name": "2-р баг, Бор гол"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.670755",
    "name": "3-р баг, Бэл булаг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.670757",
    "name": "4-р баг, Сүмбэр"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.670759",
    "name": "5-р баг, Тарган нуур"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.670761",
    "name": "6-р баг, Урт булаг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.671051",
    "name": "1-р баг, Эмт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.671053",
    "name": "2-р баг, Хайс"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.671055",
    "name": "3-р баг, Тоом"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.671057",
    "name": "4-р баг, Агар"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.671059",
    "name": "5-р баг, Бэлтэс"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.671351",
    "name": "1-р баг, Сангийн далай"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.671353",
    "name": "2-р баг, Бүрэнхаан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.671355",
    "name": "3-р баг, Их уул"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.671357",
    "name": "4-р баг, Баянхошуу"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.671359",
    "name": "5-р баг, Туяа"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.671361",
    "name": "6-р баг, Эрчим"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.671651",
    "name": "1-р баг, Нүхт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.671653",
    "name": "2-р баг, Зүрх"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.671655",
    "name": "3-р баг, Рашаант"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.671657",
    "name": "4-р баг, Хужирт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.671659",
    "name": "5-р баг, Галт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.671951",
    "name": "1-р баг, Хөнжил"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.671953",
    "name": "2-р баг, Цэцүүх"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.671955",
    "name": "3-р баг, Цагаан бургас"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.671957",
    "name": "4-р баг, Харгана"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.671959",
    "name": "5-р баг, Оргил"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.672251",
    "name": "1-р баг, Шивээ"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.672253",
    "name": "2-р баг, Их-уул"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.672255",
    "name": "3-р баг, Асгат"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.672257",
    "name": "4-р баг, Мандал"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.672259",
    "name": "5-р баг, Сэлэнгэ"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.672551",
    "name": "1-р баг, Тээл"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.672553",
    "name": "2-р баг, Талын ус"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.672555",
    "name": "3-р баг, Энх тал"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.672557",
    "name": "4-р баг, Цэнгэл"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.672559",
    "name": "5-р баг, Их ац"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.672851",
    "name": "1-р баг, Хөндий"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.672853",
    "name": "2-р баг, Хоолойн зах"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.672855",
    "name": "3-р баг, Ходон"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.672857",
    "name": "4-р баг, Далайн зах"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.672859",
    "name": "5-р баг, Ёлт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.672861",
    "name": "6-р баг, Зөөлөн"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.673151",
    "name": "1-р баг, Мандал"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.673153",
    "name": "2-р баг, Ар тархи"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.673155",
    "name": "3-р баг, Таван толгой"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.673157",
    "name": "4-р баг, Сэлэнгэ"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.673159",
    "name": "5-р баг, Баянхошуу"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.673161",
    "name": "6-р баг, Давааны ар"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.673163",
    "name": "7-р баг, Бадрах"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.673451",
    "name": "1-р баг, Мухар хөндий"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.673453",
    "name": "2-р баг, Сэлэнгэ"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.673455",
    "name": "3-р баг, Тээл"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.673457",
    "name": "4-р баг, Сүүл Улаан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.673459",
    "name": "5-р баг, Цэнгэл"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.673751",
    "name": "1-р баг, Жаргалант"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.673753",
    "name": "2-р баг, Нарийн"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.673755",
    "name": "3-р баг, Тариат"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.673757",
    "name": "4-р баг, Тээл"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.673759",
    "name": "5-р баг, Сумын төв"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.674051",
    "name": "1-р баг, Зуны гол"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.674053",
    "name": "2-р баг, Навчилтай"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.674055",
    "name": "3-р баг, Баян-Эрхэт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.674057",
    "name": "4-р баг, Алтгана"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.674059",
    "name": "5-р баг, Бийж"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.674061",
    "name": "6-р баг, Булаг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.674351",
    "name": "1-р баг, Шивлэг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.674353",
    "name": "2-р баг, Тоом"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.674355",
    "name": "3-р баг, Мунгараг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.674357",
    "name": "4-р баг, Соёо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.674359",
    "name": "5-р баг, Төгөл"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.674651",
    "name": "1-р баг, Тураг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.674653",
    "name": "2-р баг, Хороо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.674655",
    "name": "3-р баг, Турт /төвийн баг/"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.674657",
    "name": "4-р баг Баясгалант"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.674951",
    "name": "1-р баг, Гурван сайхан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.674953",
    "name": "2-р баг, Хармай"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.675251",
    "name": "1-р баг, Агар"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.675253",
    "name": "2-р баг, Өвгөд"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.675255",
    "name": "3-р баг, Тосон"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.675257",
    "name": "4-р баг, Хужирт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.675259",
    "name": "5-р баг, Шарга"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.675261",
    "name": "6-р баг, Жаргалант"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.675551",
    "name": "1-р баг, Уялган"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.675553",
    "name": "2-р баг, Үүр"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.675555",
    "name": "3-р баг, Дархинт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.675557",
    "name": "4-р баг, Булган"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.675851",
    "name": "1-р баг, Дэлгэрхаан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.675853",
    "name": "2-р баг, Зуун мод"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.675855",
    "name": "3-р баг, Могой /Рэнчинжугнай/"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.675857",
    "name": "4-р баг, Согоот"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.675859",
    "name": "5-р баг, Халбан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.675861",
    "name": "6-р баг, Жаргалант"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.675863",
    "name": "7-р баг, Бүрхээр"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.676151",
    "name": "1-р баг, Шивэрт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.676153",
    "name": "2-р баг, Ёлгос"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.676155",
    "name": "3-р баг, Улаан асга"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.676157",
    "name": "4-р баг, Хөхөө"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.676159",
    "name": "5-р баг, Хайрхан толгой"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.676451",
    "name": "1-р баг, Сангийн далай"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.676453",
    "name": "2-р баг, Баяннуур"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.676455",
    "name": "3-р баг, Баянзүрх"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.676457",
    "name": "4-р баг, Нүхт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.676751",
    "name": "1-р баг, Бөөрөлж"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.676753",
    "name": "2-р баг, Булган тал"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.676755",
    "name": "3-р баг, Зэрлэг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.676757",
    "name": "4-р баг, Дуурга"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.676759",
    "name": "5-р баг, Удган"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.810151",
    "name": "1-р баг, Жинст"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.810153",
    "name": "2-р баг, Жаргалант"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.810155",
    "name": "3-р баг, Чигэстэй"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.810157",
    "name": "4-р баг, Богдын гол"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.810159",
    "name": "5-р баг, Товцог"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.810161",
    "name": "6-р баг, Өлзийт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.810451",
    "name": "1-р баг, Алдар"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.810453",
    "name": "2-р баг, Аргалант"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.810455",
    "name": "3-р баг, Богдын гол"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.810457",
    "name": "4-р баг, Өгөөмөр"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.810459",
    "name": "5-р баг, Чигэстэй"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.810461",
    "name": "6-р баг, Мандаат"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.810751",
    "name": "1-р баг, Аргалант"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.810753",
    "name": "2-р баг, Суварга"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.811051",
    "name": "1-р баг, Бужир"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.811053",
    "name": "2-р баг, Жавхлан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.811055",
    "name": "3-р баг, Зайгал"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.811057",
    "name": "4-р баг, Хачиг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.811351",
    "name": "1-р баг, Асгат"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.811353",
    "name": "2-р баг, Минж"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.811355",
    "name": "3-р баг, Наран"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.811357",
    "name": "4-р баг, Төөнт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.811651",
    "name": "1-р баг, Буга"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.811653",
    "name": "2-р баг, Цогт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.811655",
    "name": "3-р баг, Тавантолгой"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.811657",
    "name": "4-р баг, Буурал"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.811659",
    "name": "5-р баг, Онц"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.811951",
    "name": "1-р баг, Мандал"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.811953",
    "name": "2-р баг, Олонбулаг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.811955",
    "name": "3-р баг, Олонтүрүү"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.811957",
    "name": "4-р баг, Нуга"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.812251",
    "name": "1-р баг, Мануустай"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.812253",
    "name": "2-р баг, Цэцэрлэг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.812255",
    "name": "3-р баг, Загастай"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.812257",
    "name": "4-р баг, Дархан-Уул"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.812551",
    "name": "1-р баг, Баян-Ухаа"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.812553",
    "name": "2-р баг, Үржил"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.812555",
    "name": "3-р баг, Хуягт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.812557",
    "name": "4-р баг, Хонгор"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.812559",
    "name": "5-р баг, Цэцүүх"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.812561",
    "name": "6-р баг, Зарт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.812851",
    "name": "1-р баг, Хөдрөг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.812853",
    "name": "2-р баг, Баянзүрх"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.812855",
    "name": "3-р баг, Дархан-Уул"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.812857",
    "name": "4-р баг, Нуур"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.812859",
    "name": "5-р баг, Хайрхан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.813151",
    "name": "1-р баг, Буянт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.813153",
    "name": "2-р баг, Баянбулаг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.813155",
    "name": "3-р баг, Бадрал"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.813157",
    "name": "4-р баг, Соёл"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.813159",
    "name": "5-р баг, Онц"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.813161",
    "name": "6-р баг, Хужирт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.813451",
    "name": "1-р баг, Баян-Улаан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.813453",
    "name": "2-р баг, Баяннуур"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.813455",
    "name": "3-р баг, Баяндавс"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.813457",
    "name": "4-р баг, Холбоо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.813751",
    "name": "1-р баг, Баян-Айраг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.813753",
    "name": "2-р баг, Айраг нуур"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.813755",
    "name": "3-р баг, Шар нуруу"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.813757",
    "name": "4-р баг, Тариат"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.813759",
    "name": "5-р баг, Бор-Өндөр"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.814051",
    "name": "1-р баг, Дархан-Уул"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.814053",
    "name": "2-р баг, Хайрхан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.814055",
    "name": "3-р баг, Улаантолгой"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.814057",
    "name": "4-р баг, Рашаант"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.814059",
    "name": "5-р баг, Баян-Улаан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.814061",
    "name": "6-р баг, Идэр"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.814063",
    "name": "7-р баг, Оргих"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.814351",
    "name": "1-р баг, Баянцагаан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.814355",
    "name": "3-р баг, Цорго"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.814357",
    "name": "4-р баг, Ойгон"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.814359",
    "name": "5-р баг, Шар нуруу"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.814651",
    "name": "1-р баг, Өгөөмөр"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.814653",
    "name": "2-р баг, Шургах"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.814655",
    "name": "3-р баг, Нуур"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.814657",
    "name": "4-р баг, Баянтэгш"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.814659",
    "name": "5-р баг, Өвөгдий"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.814661",
    "name": "6-р баг, Баян-Айраг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.814951",
    "name": "1-р баг, Дооно"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.814957",
    "name": "4-р баг, Зүр"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.815251",
    "name": "1-р баг, Тосгуур"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.815253",
    "name": "2-р баг, Хульж"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.815255",
    "name": "3-р баг, Нуур зөөхий"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.815257",
    "name": "4-р баг, Хүнгий"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.815259",
    "name": "5-р баг, Баян-Улаан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.815551",
    "name": "1-р баг, Цэцэрлэг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.815553",
    "name": "2-р баг, Онц"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.815555",
    "name": "3-р баг, Баянбулаг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.815557",
    "name": "4-р баг, Агьт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.815851",
    "name": "1-р баг, Арц"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.815853",
    "name": "2-р баг, Жавцаг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.815855",
    "name": "3-р баг, Дэлгэр"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.815857",
    "name": "4-р баг, Баянхайрхан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.816151",
    "name": "1-р баг, Оройн товгор"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.816153",
    "name": "2-р баг, Жаргалант"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.816155",
    "name": "3-р баг, Сангийн далай"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.816157",
    "name": "4-р баг, Шотой"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.816159",
    "name": "5-р баг, Батсуурь"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.816451",
    "name": "1-р баг, Чандмань"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.816453",
    "name": "2-р баг, Баян-Улаан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.816455",
    "name": "3-р баг, Хөгжил"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.816457",
    "name": "4-р баг, Сайхан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.816751",
    "name": "1-р баг, Багануур"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.816753",
    "name": "2-р баг, Баянзүрх"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.816755",
    "name": "3-р баг, Алтан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.816757",
    "name": "4-р баг, Мөсөн"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.816759",
    "name": "5-р баг, Хайрхан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.817051",
    "name": "1-р баг, Зүйл"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.817053",
    "name": "2-р баг, Жаргалант"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.817055",
    "name": "3-р баг, Өргөн"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.817057",
    "name": "4-р баг, Хэц-Улаан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.817059",
    "name": "5-р баг, Чандмань"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.820151",
    "name": "1-р баг, Баянхайрхан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.820153",
    "name": "2-р баг, Баяншанд"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.820155",
    "name": "3-р баг, Жаргалант"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.820157",
    "name": "4-р баг, Харзат"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.820159",
    "name": "5-р баг, Рашаант"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.820161",
    "name": "6-р баг, Наран"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.820163",
    "name": "7-р баг, Жинст"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.820165",
    "name": "8-р баг, Индэрт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.820167",
    "name": "9-р баг, Түмэн"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.820169",
    "name": "10-р баг, Оргил"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.820451",
    "name": "1-р баг, Бадрал"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.820453",
    "name": "2-р баг, Баянцагаан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.820455",
    "name": "3-р баг, Урт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.820457",
    "name": "4-р баг, Баян-Овоо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.820751",
    "name": "1-р баг, Баян богд"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.820753",
    "name": "2-р баг, Чандмань хайрхан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.820755",
    "name": "3-р баг, Баянхайрхан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.820757",
    "name": "4-р баг, Хүйсийн говь"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.820759",
    "name": "5-р баг, Баянговь"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.820761",
    "name": "6-р баг, Алтангадас"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.821051",
    "name": "1-р баг, Мянгай"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.821053",
    "name": "2-р баг, Урт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.821055",
    "name": "3-р баг, Их булаг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.821057",
    "name": "4-р баг, Буудай"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.821059",
    "name": "5-р баг, Хүрэмт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.821351",
    "name": "1-р баг, Биж"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.821353",
    "name": "2-р баг, Ферм"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.821355",
    "name": "3-р баг, Гаханч"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.821357",
    "name": "4-р баг, Сүж"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.821651",
    "name": "1-р баг, Ихэс"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.821653",
    "name": "2-р баг, Хужирт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.821655",
    "name": "3-р баг, Жавхлант"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.821657",
    "name": "4-р баг, Үйлдвэр"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.821951",
    "name": "1-р баг, Баян-Өндөр"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.821953",
    "name": "2-р баг, Баянхонгор"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.821955",
    "name": "3-р баг, Баянбуурал"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.821957",
    "name": "4-р баг, Баянсан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.821959",
    "name": "5-р баг, Гуулин"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.822251",
    "name": "1-р баг, Бүрэн"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.822253",
    "name": "2-р баг, Тээл"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.822255",
    "name": "3-р баг, Завхан гол"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.822551",
    "name": "1-р баг, Хуримт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.822553",
    "name": "2-р баг, Галуут"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.822555",
    "name": "3-р баг, Далан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.822851",
    "name": "1-р баг, Бүс-Уул"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.822853",
    "name": "2-р баг, Тамч"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.822855",
    "name": "3-р баг, Зүйл"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.822857",
    "name": "4-р баг, Алтансоёмбо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.822859",
    "name": "5-р баг, Алтайн-Оргил"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.823151",
    "name": "1-р баг, Хүрэн гол"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.823153",
    "name": "2-р баг, Төгрөгийн эх"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.823155",
    "name": "3-р баг, Мааньт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.823157",
    "name": "4-р баг, Цагаан хайрхан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.823159",
    "name": "5-р баг, Тунгалаг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.823451",
    "name": "1-р баг, Сүүж"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.823453",
    "name": "2-р баг, Гүү бариач"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.823455",
    "name": "3-р баг, Олон булаг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.823457",
    "name": "4-р баг, Чацран"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.823751",
    "name": "1-р баг, Цоохор"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.823753",
    "name": "2-р баг, Завхан гол"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.823755",
    "name": "3-р баг, Сангийн далай"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.823757",
    "name": "4-р баг, Хүйсийн говь"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.824051",
    "name": "1-р баг, Рашаант"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.824053",
    "name": "2-р баг, Далан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.824055",
    "name": "3-р баг, Гэгээт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.824057",
    "name": "4-р баг, Төгрөг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.824059",
    "name": "5-р баг, Баян-Өндөр"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.824061",
    "name": "6-р баг, Баян-Улаан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.824063",
    "name": "7-р баг, Баян тоорой"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.824351",
    "name": "1-р баг, Бүрэн"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.824353",
    "name": "2-р баг, Баянгол"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.824355",
    "name": "3-р баг, Дэрстэй"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.824357",
    "name": "4-р баг, Жаргалт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.824651",
    "name": "1-р баг, Чандмань-Уул"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.824653",
    "name": "2-р баг, Өлзийбулаг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.824655",
    "name": "3-р баг, Эрдэнэ-Уул"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.824657",
    "name": "4-р баг, Хүрхрээ"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.824659",
    "name": "5-р баг, Талын шанд"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.824951",
    "name": "1-р баг, Баянгол"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.824953",
    "name": "2-р баг, Хамтын хүч"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.824955",
    "name": "3-р баг, Сондуулт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.824957",
    "name": "4-р баг, Улаан туг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.825251",
    "name": "1-р баг, Сангийн далай"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.825253",
    "name": "2-р баг, Цэцэг нуур"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.825255",
    "name": "3-р баг, Цагаан-Уул"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.825257",
    "name": "4-р баг, Өлзийт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.830151",
    "name": "1-р баг, Хуст арал"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.830153",
    "name": "2-р баг, Цагаан эрэг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.830155",
    "name": "3-р баг, Бөхөн-Уул"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.830157",
    "name": "4-р баг, Их булан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.830159",
    "name": "5-р баг, Ховд гол"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.830161",
    "name": "6-р баг, Хөх толгой"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.830163",
    "name": "7-р баг, Хотгор"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.830165",
    "name": "8-р баг, Ах хус тау"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.830167",
    "name": "9-р баг, Хөх хад"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.830169",
    "name": "10-р баг, Харасай"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.830171",
    "name": "11-р баг, Бүркит"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.830173",
    "name": "12-р баг, Жасыл бах"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.830175",
    "name": "13-р баг, Жана ауыл"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.830451",
    "name": "1-р баг, Хар нуур"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.830453",
    "name": "2-р баг, Улаан хад"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.830455",
    "name": "3-р баг, Бардам"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.830457",
    "name": "4-р баг, Чихэртэй"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.830459",
    "name": "5-р баг, Борбургас"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.830751",
    "name": "1-р баг, Хаш"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.830753",
    "name": "2-р баг, Баянбулаг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.830755",
    "name": "3-р баг, Улаанхаргана"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.830757",
    "name": "4-р баг, Цагаан түнгэ"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.831051",
    "name": "1-р баг, Цэцэгт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.831053",
    "name": "2-р баг, Баяннуур"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.831055",
    "name": "3-р баг, Цагаан арал"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.831057",
    "name": "4-р баг, Шар цэхээ"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.831059",
    "name": "5-р баг, Цул улаан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.831351",
    "name": "1-р баг, Хатуу"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.831353",
    "name": "2-р баг, Улаан толгой"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.831357",
    "name": "4-р баг, Буга"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.831651",
    "name": "1-р баг, Улаагчин"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.831653",
    "name": "2-р баг, Сайхан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.831655",
    "name": "3-р баг, Булган"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.831657",
    "name": "4-р баг, Жаргалант"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.831659",
    "name": "5-р баг, Хужирт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.831661",
    "name": "6-р баг, Сөнхөл"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.831663",
    "name": "7-р баг, Улаанхус"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.831951",
    "name": "1-р баг, Хөх эрэг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.831953",
    "name": "2-р баг, Хөлцөөт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.831955",
    "name": "3-р баг, Өмнөгол"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.832251",
    "name": "1-р баг, Далакөл"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.832253",
    "name": "2-р баг, Саралахаз"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.832255",
    "name": "3-р баг, Хар уул"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.832257",
    "name": "4-р баг, Чихэртэй"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.832259",
    "name": "5-р баг, Рашаант"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.832261",
    "name": "6-р баг, Бугат"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.832263",
    "name": "7-р баг, Хөх сэрх"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.832265",
    "name": "8-р баг, Бүргэд"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.832267",
    "name": "9-р баг, Хөх толгой"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.832269",
    "name": "10-р баг, Хүйтэн нуур"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.832551",
    "name": "1-р баг, Бахлаг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.832553",
    "name": "2-р баг, Чихтэй"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.832555",
    "name": "3-р баг, Ховд"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.832557",
    "name": "4-р баг, Улаанчулуун"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.832559",
    "name": "5-р баг, Ямаат"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.832561",
    "name": "6-р баг, Хызылхайын"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.832853",
    "name": "2-р баг, Хол агаш"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.832855",
    "name": "3-р баг, Ахкорим"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.832857",
    "name": "4-р баг, Хаг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.832859",
    "name": "5-р баг, Уужим"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.833151",
    "name": "1-р баг, Хош"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.833153",
    "name": "2-р баг, Толбо нуур"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.833155",
    "name": "3-р баг, Хонгор өлөн"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.833157",
    "name": "4-р баг, Дөрөө нуур"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.833159",
    "name": "5-р баг, Хөх толгой"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.833161",
    "name": "6-р баг, Бураат"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.833451",
    "name": "1-р баг, Их ойгор"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.833453",
    "name": "2-р баг, Хөх хөтөл"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.833455",
    "name": "3-р баг, Хулжаа"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.833457",
    "name": "4-р баг, Согоог"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.833459",
    "name": "5-р баг, Баян зүрх"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.833461",
    "name": "6-р баг, Даян"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.833463",
    "name": "7-р баг, Билүү"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.833465",
    "name": "8-р баг, Билүү 2"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.833467",
    "name": "9-р баг, Улаан эрэг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.833751",
    "name": "1-р баг, Шарговь"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.833753",
    "name": "2-р баг, Загаст нуур"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.833755",
    "name": "3-р баг, Цагаан түнгэ"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.833757",
    "name": "4-р баг, Хар уул"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.833759",
    "name": "5-р баг, Бор бургас"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.833761",
    "name": "6-р баг, Уст тохой"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.833763",
    "name": "7-р баг, Долоон гаталга"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.833765",
    "name": "8-р баг, Партизан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.833767",
    "name": "9-р баг, Хөшөөт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.840151",
    "name": "1-р баг, Алагтолгой"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.840153",
    "name": "2-р баг, Баатархайрхан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.840155",
    "name": "3-р баг, Бичигт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.840157",
    "name": "4-р баг, Бугат"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.840159",
    "name": "5-р баг, Буянт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.840161",
    "name": "6-р баг, Жаргалан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.840163",
    "name": "7-р баг, Магсаржав"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.840165",
    "name": "8-р баг, Наран"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.840167",
    "name": "9-р баг, Рашаант"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.840169",
    "name": "10-р баг, Тахилт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.840171",
    "name": "11-р баг, Хайрхан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.840173",
    "name": "12-р баг, Цамбагарав"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.840451",
    "name": "1-р баг, Бодонч"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.840453",
    "name": "2-р баг, Алтангадас"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.840455",
    "name": "3-р баг, Барлаг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.840457",
    "name": "4-р баг, Тахилт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.840751",
    "name": "1-р баг, Баянгол"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.840755",
    "name": "3-р баг, Байтаг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.840757",
    "name": "4-р баг, Алагтолгой"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.840759",
    "name": "5-р баг, Далт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.840761",
    "name": "6-р баг, Бүрэнхайрхан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.841051",
    "name": "1-р баг, Нарийн гол"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.841053",
    "name": "2-р баг, Цагаанбургас"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.841055",
    "name": "3-р баг, Наранхайрхан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.841057",
    "name": "4-р баг, Цагаан-Эрэг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.841059",
    "name": "5-р баг, Норжинхайрхан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.841351",
    "name": "1-р баг, Булаг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.841353",
    "name": "2-р баг, Дэлгэр"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.841355",
    "name": "3-р баг, Мөрөн"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.841357",
    "name": "4-р баг, Мөнгөн аяга"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.841359",
    "name": "5-р баг, Булган"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.841651",
    "name": "1-р баг, Агваш"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.841653",
    "name": "2-р баг, Сээр"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.841655",
    "name": "3-р баг, Аргалант"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.841657",
    "name": "4-р баг, Өгөөмөр"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.841951",
    "name": "1-р баг, Шивэр"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.841953",
    "name": "2-р баг, Хөх бэлчир"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.841955",
    "name": "3-р баг, Цагаан бургас"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.841957",
    "name": "4-р баг, Босго"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.842251",
    "name": "1-р баг, Гүвээ"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.842253",
    "name": "2-р баг, Бургасан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.842255",
    "name": "3-р баг, Бураа"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.842257",
    "name": "4-р баг, Эхэн"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.842259",
    "name": "5-р баг, Хөндлөн"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.842551",
    "name": "1-р баг, Тахилт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.842553",
    "name": "2-р баг, Зэрэг гол"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.842555",
    "name": "3-р баг, Улаан хүрээ"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.842557",
    "name": "4-р баг, Баянгол"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.842559",
    "name": "5-р баг, Ботгон"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.842561",
    "name": "6-р баг, Төгрөг гол"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.842851",
    "name": "1-р баг, Алаг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.842853",
    "name": "2-р баг, Борт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.842855",
    "name": "3-р баг, Хаг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.842857",
    "name": "4-р баг, Сэнхэр"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.843151",
    "name": "1-р баг, Цэцэг гол"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.843153",
    "name": "2-р баг, Хужирт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.843155",
    "name": "3-р баг, Баянхайрхан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.843157",
    "name": "4-р баг, Давст"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.843159",
    "name": "5-р баг, Улаантолгой"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.843451",
    "name": "1-р баг, Чацаргант"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.843453",
    "name": "2-р баг, Баянбулаг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.843455",
    "name": "3-р баг, Гахайт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.843457",
    "name": "4-р баг, Цагаанбулан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.843459",
    "name": "5-р баг, Баянхошуу"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.843751",
    "name": "1-р баг, Цагаантүнгэ"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.843753",
    "name": "2-р баг, Нарийн гол"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.843755",
    "name": "3-р баг, Жаргалан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.843757",
    "name": "4-р баг, Улиаст"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.843759",
    "name": "5-р баг, Хөх үзүүр"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.844051",
    "name": "1-р баг, Баянбулаг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.844053",
    "name": "2-р баг, Цагаанбургас"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.844055",
    "name": "3-р баг, Баруун салаа"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.844057",
    "name": "4-р баг, Улаанбураа"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.844059",
    "name": "5-р баг, Дунд ус"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.844351",
    "name": "1-р баг, Хажинга"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.844353",
    "name": "2-р баг, Баянгол"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.844355",
    "name": "3-р баг, Баян-Овоо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.844357",
    "name": "4-р баг, Цэцэг нуур"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.844651",
    "name": "1-р баг, Талын булаг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.844653",
    "name": "2-р баг, Тахилт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.844655",
    "name": "3-р баг, Баянхайрхан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.844657",
    "name": "4-р баг, Сүлжээ"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.844659",
    "name": "5-р баг, Урд гол"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.844661",
    "name": "6-р баг, Жаргалант"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.844951",
    "name": "1-р баг, Баянгол"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.844953",
    "name": "2-р баг, Намаржин"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.844955",
    "name": "3-р баг, Хонгио"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.844957",
    "name": "4-р баг, Шураг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.844959",
    "name": "5-р баг, Хар ус"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.850151",
    "name": "1-р баг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.850153",
    "name": "2-р баг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.850155",
    "name": "3-р баг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.850157",
    "name": "4-р баг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.850159",
    "name": "5-р баг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.850161",
    "name": "6-р баг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.850163",
    "name": "7-р баг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.850165",
    "name": "8-р баг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.850167",
    "name": "9-р баг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.850169",
    "name": "10-р баг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.850171",
    "name": "11-р баг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.850173",
    "name": "12-р баг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.850451",
    "name": "1-р баг, Шанд"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.850453",
    "name": "2-р баг, Зүүн туруун"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.850455",
    "name": "3-р баг, Туруун"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.850457",
    "name": "4-р баг, Баян-Айраг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.850751",
    "name": "1-р баг, Гурван жигэртэй"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.850753",
    "name": "2-р баг, Хар алтат"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.850755",
    "name": "3-р баг, Байшинт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.851051",
    "name": "1-р баг, Торхилог"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.851053",
    "name": "2-р баг, Зүүнхөвөө"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.851055",
    "name": "3-р баг, Хандгайт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.851351",
    "name": "1-р баг, Айраг нуур"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.851353",
    "name": "2-р баг, Хармагт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.851355",
    "name": "3-р баг, Хяргас нуур"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.851357",
    "name": "4-р баг, Шар булаг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.851651",
    "name": "1-р баг, Баяннуур"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.851653",
    "name": "2-р баг, Өгөөмөр"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.851655",
    "name": "3-р баг, Суврага"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.851657",
    "name": "4-р баг, Тохой"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.851659",
    "name": "5-р баг, Зэлийн гол"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.851951",
    "name": "1-р баг, Даланбулаг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.851953",
    "name": "2-р баг, Баянгол"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.851955",
    "name": "3-р баг, Жаргалант"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.851957",
    "name": "4-р баг, Хайрхан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.852251",
    "name": "1-р баг, Баянмандал"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.852253",
    "name": "2-р баг, Цалгар"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.852255",
    "name": "3-р баг, Баянхайрхан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.852257",
    "name": "4-р баг, Баян-Эрдэнэ"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.852551",
    "name": "1-р баг, Гүн бүрд"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.852553",
    "name": "2-р баг, Алдар"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.852555",
    "name": "3-р баг, Хужирт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.852557",
    "name": "4-р баг, Улаан-Үзүүр"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.852851",
    "name": "1-р баг, Чаргат"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.852853",
    "name": "2-р баг, Өлгий нуур"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.852855",
    "name": "3-р баг, Хулст нуур"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.852857",
    "name": "4-р баг, Хөдөлмөр"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.853151",
    "name": "1-р баг, Холбоо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.853153",
    "name": "2-р баг, Улиаст"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.853155",
    "name": "3-р баг, Орлого"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.853157",
    "name": "4-р баг, Баянгол"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.853159",
    "name": "5-р баг, Намир"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.853451",
    "name": "1-р баг, Цалуу"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.853453",
    "name": "2-р баг, Батсайхан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.853455",
    "name": "3-р баг, Цагааннуур"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.853457",
    "name": "4-р баг, Жаргалант"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.853459",
    "name": "5-р баг, Цэцэрлэг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.853751",
    "name": "1-р баг, Баянзүрх"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.853753",
    "name": "2-р баг, Боршоо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.853755",
    "name": "3-р баг, Өндөр мод"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.853757",
    "name": "4-р баг, Үүрэг нуур"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.853759",
    "name": "5-р баг, Хар мод"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.854051",
    "name": "1-р баг, Бургастай"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.854053",
    "name": "2-р баг, Тарвагатай"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.854351",
    "name": "1-р баг, Баянхайрхан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.854353",
    "name": "2-р баг, Рашаант"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.854355",
    "name": "3-р баг, Эрдэнэхайрхан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.854651",
    "name": "1-р баг, Нуур"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.854653",
    "name": "2-р баг, Баян-Овоо"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.854655",
    "name": "3-р баг, Суварга"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.854657",
    "name": "4-р баг, Ханжид"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.854659",
    "name": "5-р баг, Ендөрт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.854661",
    "name": "6-р баг, Тооромт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.854663",
    "name": "7-р баг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.854665",
    "name": "8-р баг, Нурагт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.854667",
    "name": "9-р баг, Цагаан толгой"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.854951",
    "name": "1-р баг, Ховд"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.854953",
    "name": "2-р баг, Шивэр"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.854955",
    "name": "3-р баг, Ачит"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.854957",
    "name": "4-р баг, Халиунбулаг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.855251",
    "name": "1-р баг, Хангай"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.855253",
    "name": "2-р баг, Бугат"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.855255",
    "name": "3-р баг, Хайрхан"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.855257",
    "name": "4-р баг, Дэлгэр"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.855551",
    "name": "1-р баг, Хунт"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.855553",
    "name": "2-р баг, Хулж"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.855555",
    "name": "3-р баг, Арбулаг"
  },
  {
    "_id": "gp_layer_c_4thorder_administrativeunit_au_view.855557",
    "name": "4-р баг, Даланхуруу"
  }
];

export { AIMAGS, SUMS, BAG_KHOROOS };
