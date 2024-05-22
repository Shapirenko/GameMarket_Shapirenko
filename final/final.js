
//перевірка підключеного файлу скриптів
console.log('Перевірка підключеного файлу скрипту market.js')



//Вивід знайдкного елементу
// console.log(itemsDiv)

//Визначення масиву товарів
let itemsArray = [
    // 'Газонокосарка 43',
    // 'Електричний тример 110',
    // 'Електрична газонокосарка 32',
    // 'Акумуляторний оприскувач 12 N',
    // 'Газонокосарка 430',
    // 'Електричний тример 130',
    // 'Електрична газонокосарка 320',
    // 'Акумуляторний оприскувач 12 E',
    // {
    //     firstName: "Віталій ",
    //     lastName: "Шатківський ",
    //     age: 43,
    //     subject: "CS",
    //     photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/03/dsc07815-683x1024.jpg",
    //     url: "https://lyceum.ztu.edu.ua/team/shatkivskyy-v-m/",
    // },
    // {
    //     firstName: "Наталія",
    //     lastName: "Венцель",
    //     age: 18,
    //     subject: "адміністратор",
    //     photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/ventsel-nataliya-vasylivna-683x1024.jpg",
    //     url: "https://lyceum.ztu.edu.ua/team/ventsel-n-v/",
    // },
    // {
    //     firstName: "Олена",
    //     lastName: "Геча",
    //     age: 18,
    //     subject: "Історія",
    //     photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/hecha-olena-anatoliyivna-683x1024.jpg",
    //     url: "https://lyceum.ztu.edu.ua/team/hecha-o-a/",
    // },
    // {
    //     firstName: "Вікторія",
    //     lastName: "Нелипович",
    //     age: 18,
    //     subject: "Фізика",
    //     photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/nelypovych-viktoriya-vitaliyivna-683x1024.jpg",
    //     url: "https://lyceum.ztu.edu.ua/team/nelypovych-viktoriya-vitaliyivna/",
    // },
    // {
    //     firstName: "Василь",
    //     lastName: "Бабій",
    //     age: 18,
    //     subject: "Фізична культура",
    //     photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/babiy-vasyl-dmytrovych-683x1024.jpg",
    //     url: "https://lyceum.ztu.edu.ua/team/babiy-vasyl-dmytrovych/",
    // },
    // {
    //     firstName: "Тарас",
    //     lastName: "Савінков",
    //     age: 18,
    //     subject: "Англійська мова",
    //     photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/savinkov-taras-yevhenovych-683x1024.jpg",
    //     url: "https://lyceum.ztu.edu.ua/team/savinkov-taras-yevhenovych/",
    // },
    // {
    //     firstName: "Анжела",
    //     lastName: "Лознюк",
    //     age: 18,
    //     subject: "Українська мова й література та зарубіжна література",
    //     photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/10/photo_2023-10-25_15-46-33-1-693x1024.jpg",
    //     url: "https://lyceum.ztu.edu.ua/team/loznyuk-anzhela-leonidivna/",
    // },
    // {
    //     firstName: "Ірина",
    //     lastName: "Боровська-Карандюк",
    //     age: 18,
    //     subject: "Українська мова й література та зарубіжна література",
    //     photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/borovska-karandyuk-iryna-anatoliyivna-683x1024.jpg",
    //     url: "https://lyceum.ztu.edu.ua/team/borovska-karandyuk-iryna-anatoliyivna/",
    // },
    // {
    //     firstName: "Марія",
    //     lastName: "Медведєва",
    //     age: 18,
    //     subject: "Географія",
    //     photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/medvedyeva-mariya-vasylivna-683x1024.jpg",
    //     url: "https://lyceum.ztu.edu.ua/team/medvedyeva-mariya-vasylivna/",
    // },
    // {
    //     firstName: "Наталія",
    //     lastName: "Зинюк",
    //     age: 18,
    //     subject: "Хімія",
    //     photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2024/01/zynjuk-natalija-mykolayivna-683x1024.jpg",
    //     url: "https://lyceum.ztu.edu.ua/team/zynyuk-nataliya-mykolayivna/",
    // },
    // {
    //     firstName: "Наталія",
    //     lastName: "Гончарук",
    //     age: 18,
    //     subject: "Англійська мова",
    //     photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/honcharuk-nataliya-oleksandrivna-682x1024.jpg",
    //     url: "https://lyceum.ztu.edu.ua/team/honcharuk-n-o/",
    // },
    // {
    //     firstName: "Марія",
    //     lastName: "Гетманська",
    //     age: 18,
    //     subject: "Практичний психолог",
    //     photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/hetmanska-mariya-oleksandrivna-683x1024.jpg",
    //     url: "https://lyceum.ztu.edu.ua/team/hetmanska-m-o/",
    // },
    // 
    {
        email: "23b_lam@liceum.ztu.edu.ua",
        group: "10-Б 2",
        fullName: "Лещенко Настя",
        gameTitle: "dude настюшкі",
        authorPhoto: "Лещенко.jpg",
        gamePhoto: "",
        githubRepo: "https://github.com/Leschenko1001/Phaser2ndGame1?authuser=0",
        githubPages: "https://leschenko1001.github.io/Phaser2ndGame1/?authuser=0",
        documentationFolder: "https://drive.google.com/drive/folders/1CqBXUS5Rk1u8nhEq3_l7LYMjDalYqPgW?usp=classroom_web&authuser=0",
        surveyForm: "https://forms.gle/aLmXJ7nEnjo6PGuZ8?authuser=0",
        gameMarketRepo: "https://github.com/Leschenko1001/GameMarket_Leschenko",
        gameMarketPages: "https://leschenko1001.github.io/GameMarket_Leschenko/?authuser=0",
        finalGameMarketPage: "https://leschenko1001.github.io/GameMarket_Leschenko/market.html?authuser=0"
    },
    // {
    //     email: "23b_lsa@liceum.ztu.edu.ua",
    //     group: "10-Б 2",
    //     fullName: "Лобода Софія",
    //     gameTitle: "MOKOSH",
    //     authorPhoto: "Лобода.jpg",
    //     gamePhoto: "",
    //     githubRepo: "https://github.com/Lobodass/project.git",
    //     githubPages: "https://lobodass.github.io/project/",
    //     documentationFolder: "https://drive.google.com/drive/folders/1-0efrhem62Vc__8Ir6qIFuatZJ_FjV50?usp=classroom_web&authuser=0",
    //     surveyForm: "https://forms.gle/5DBw7bJ5v33uCqbt5",
    //     gameMarketRepo: "https://github.com/Lobodass/siteinf.git",
    //     gameMarketPages: "https://lobodass.github.io/siteinf/",
    //     finalGameMarketPage: "https://lobodass.github.io/siteinf/marcet.html?authuser=0"
    // },
    // {
    //     email: "23b_nar@liceum.ztu.edu.ua",
    //     group: "10-Б 2",
    //     fullName: "Найбородін Артем",
    //     gameTitle: "BestGame",
    //     authorPhoto: "Лещенко.jpg",
    //     gamePhoto: "",
    //     githubRepo: "https://github.com/Nayborodin/MyGame",
    //     githubPages: "https://nayborodin.github.io/MyGame/",
    //     documentationFolder: "https://drive.google.com/drive/folders/1G102lDz-nuYjqtOjxfLFwW2zB1R3BCgE",
    //     surveyForm: "https://forms.gle/vitg4Rk5EUm3MZe38",
    //     gameMarketRepo: "https://github.com/Nayborodin/GameMarket_Nayborodin",
    //     gameMarketPages: "https://nayborodin.github.io/GameMarket_Nayborodin/",
    //     finalGameMarketPage: "https://nayborodin.github.io/GameMarket_Nayborodin/market.html"
    // },
    // {
    //     email: "23b_nod@liceum.ztu.edu.ua",
    //     group: "10-Б 2",
    //     fullName: "Нікітіч Олександр",
    //     gameTitle: "Лещенко.jpg",
    //     authorPhoto: "",
    //     gamePhoto: "",
    //     githubRepo: "https://github.com/SashaNikitich/Phaser2ndGame-2",
    //     githubPages: "https://sashanikitich.github.io/Phaser2ndGame-2/",
    //     documentationFolder: "https://docs.google.com/forms/d/e/1FAIpQLSdfx9mrL6L9s8P2Ratdn_TG0xqCTmyDBL3GfhUYM_27OnUmFA/viewform?usp=sharing, https://docs.google.com/document/d/14x-Cgw9X0pmnKD30qmBAKMQsE__y0-XQ/edit?usp=sharing&ouid=111241578456250236357&rtpof=true&sd=true",
    //     surveyForm: "https://forms.gle/k4FbZfE31MSNpNoe6?authuser=0",
    //     gameMarketRepo: "https://github.com/SashaNikitich/Phaser2ndGame-2",
    //     gameMarketPages: "https://sashanikitich.github.io/Phaser2ndGame-2/"
    // },
    // {
    //     email: "23b_pos@liceum.ztu.edu.ua",
    //     group: "10-Б 2",
    //     fullName: "Продоус Олександр",
    //     gameTitle: "SuperGame",
    //     authorPhoto: "Лещенко.jpg",
    //     gamePhoto: "",
    //     githubRepo: "https://github.com/Oleksandrpr321/-Phaser2ndGame.git",
    //     githubPages: "https://oleksandrpr321.github.io/-Phaser2ndGame/",
    //     documentationFolder: "https://drive.google.com/drive/folders/15dRiiBT-A6CAsZa0mXBR7k9_2edGz6bP?usp=drive_link",
    //     surveyForm: "https://forms.gle/Y3SEVntm9Tr7znXu9",
    //     gameMarketRepo: "https://github.com/Oleksandrpr321/-GameMarket_Prodous.git",
    //     gameMarketPages: "https://oleksandrpr321.github.io/-GameMarket_Prodous/",
    //     finalGameMarketPage: "https://oleksandrpr321.github.io/-GameMarket_Prodous/market.html"
    // },
    // {
    //     email: "23b_pds@liceum.ztu.edu.ua",
    //     group: "10-Б 2",
    //     fullName: "Прокопчук Денис",
    //     gameTitle: "Апокаліпсіс",
    //     authorPhoto: "Лещенко.jpg",
    //     gamePhoto: "",
    //     githubRepo: "https://github.com/Denis16543/Phaser2ndGame",
    //     githubPages: "https://denis16543.github.io/Phaser2ndGame/",
    //     documentationFolder: "https://drive.google.com/drive/folders/1KKIoePi4fkPjpWY4mAYEOL99wByIXX_t?usp=drive_link",
    //     surveyForm: "https://forms.gle/yn4n8Gsu67vAtx8S9",
    //     gameMarketRepo: "https://github.com/Denis16543/GameMarket",
    //     gameMarketPages: "https://denis16543.github.io/GameMarket/"
    // },
    // {
    //     email: "23b_syei@liceum.ztu.edu.ua",
    //     group: "10-Б 2",
    //     fullName: "Савицкьий Єгор",
    //     gameTitle: "Falcon",
    //     authorPhoto: "Лещенко.jpg",
    //     gamePhoto: "",
    //     githubRepo: "https://github.com/HellcatFalcon/game.git",
    //     githubPages: "https://github.com/HellcatFalcon/Faclon/settings/pages",
    //     documentationFolder: "https://drive.google.com/drive/folders/1yCCzefMmd5BGGz9UBrljEXQWQThK9ImN?usp=drive_link",
    //     surveyForm: "https://forms.gle/jAf9YW87aQqeoj4v6",
    //     gameMarketRepo: "https://github.com/HellcatFalcon/GameMarket_Savitskiy.git",
    //     gameMarketPages: "https://hellcatfalcon.github.io/GameMarket_Savitskiy/",
    //     finalGameMarketPage: "http://127.0.0.1:5500/market.html"
    // },
    // {
    //     email: "23b_stv@liceum.ztu.edu.ua",
    //     group: "10-Б 2",
    //     fullName: "Саух Тимофій",
    //     gameTitle: "якісь колодязі",
    //     authorPhoto: "Лещенко.jpg",
    //     gamePhoto: "",
    //     githubRepo: "https://github.com/imnottimaw/Phaser2ndGame",
    //     githubPages: "https://imnottimaw.github.io/Phaser2ndGame/",
    //     documentationFolder: "https://drive.google.com/drive/folders/1YvPNGVqCD6BBzWr4azgHLxwar91rtT6H?usp=sharing",
    //     surveyForm: "https://forms.gle/a58ghZiZdVJfZVLg6",
    //     gameMarketRepo: "https://github.com/imnottimaw/GameMarket_Saukh",
    //     gameMarketPages: "https://imnottimaw.github.io/GameMarket_Saukh/",
    //     finalGameMarketPage: "https://imnottimaw.github.io/GameMarket_Saukh/final/final.html"
    // },
    // {
    //     email: "23b_som@liceum.ztu.edu.ua",
    //     group: "10-Б 2",
    //     fullName: "Скримінська Оксана",
    //     gameTitle: "",
    //     authorPhoto: "Лещенко.jpg",
    //     gamePhoto: "",
    //     githubRepo: "https://github.com/skryminska/Phaser2ndGame",
    //     githubPages: "https://skryminska.github.io/Phaser2ndGame/",
    //     documentationFolder: "https://docs.google.com/document/d/19B0k9awxwUCrPf3vL68ekIFYvMzU3q-tIg8Q3hMjbHQ/edit?usp=classroom_web&authuser=0, https://drive.google.com/drive/folders/12oLl0iIBZfpF77V-npksuc8hWW8cyCnd?usp=classroom_web&authuser=0",
    //     surveyForm: "",
    //     gameMarketRepo: "https://github.com/skryminska/GameMarket_Skryminska",
    //     gameMarketPages: "https://skryminska.github.io/GameMarket_Skryminska/"
    // },
    // {
    //     email: "23b_sns@liceum.ztu.edu.ua",
    //     group: "10-Б 2",
    //     fullName: "Смолянова Ніка",
    //     gameTitle: "Exiting way",
    //     authorPhoto: "Лещенко.jpg",
    //     gamePhoto: "",
    //     githubRepo: "https://github.com/Nikasms/-Phaser2ndGame.git",
    //     githubPages: "https://nikasms.github.io/-Phaser2ndGame/",
    //     documentationFolder: "https://drive.google.com/drive/folders/1oNBngdHeURy6zi-iwPPfUc8XsuIx5Ekk",
    //     surveyForm: "https://forms.gle/MU9K5RhTwm4SJAXeA",
    //     gameMarketRepo: "https://github.com/Nikasms/GameMarket_Smolianova.git",
    //     gameMarketPages: "https://nikasms.github.io/GameMarket_Smolianova/",
    //     finalGameMarketPage: "https://nikasms.github.io/GameMarket_Smolianova/market.html"
    // },
    // {
    //     email: "23b_tdp@liceum.ztu.edu.ua",
    //     group: "10-Б 2",
    //     fullName: "Терський Дмитро",
    //     gameTitle: "Лещенко.jpg",
    //     authorPhoto: "",
    //     gamePhoto: "",
    //     githubRepo: "https://github.com/dmitro321w/GameMarket_-/tree/main",
    //     githubPages: "https://github.com/dmitro321w/GameMarket_-/tree/main",
    //     documentationFolder: "https://drive.google.com/drive/folders/1izA5dAz4VlfRCffwQCXKGeLpKX3qpDGA?usp=drive_link",
    //     surveyForm: "1",
    //     gameMarketRepo: "https://github.com/dmitro321w/GameMarket_-/tree/main",
    //     gameMarketPages: "https://dmitro321w.github.io/GameMarket_-/"
    // },
    // {
    //     email: "23b_shmv@liceum.ztu.edu.ua",
    //     group: "10-Б 2",
    //     fullName: "Шапіренко Максим",
    //     gameTitle: "Roborun",
    //     authorPhoto: "Лещенко.jpg",
    //     gamePhoto: "",
    //     githubRepo: "https://github.com/Shapirenko/Roborun",
    //     githubPages: "https://shapirenko.github.io/Roborun/",
    //     documentationFolder: "https://drive.google.com/drive/folders/1j-uM3IKdJUH3IbqpNKxAvkDJvP_XrunA?usp=classroom_web&authuser=0",
    //     surveyForm: "https://forms.gle/Ty19Ttoo6CWEGdp78?authuser=0",
    //     gameMarketRepo: "https://github.com/Shapirenko/GameMarket_Shapirenko?authuser=0",
    //     gameMarketPages: "https://shapirenko.github.io/GameMarket_Shapirenko/?authuser=0",
    //     finalGameMarketPage: "https://shapirenko.github.io/GameMarket_Shapirenko/market.html?hl=ru&authuser=0"
    // },
    // {
    //     email: "23b_svyu@liceum.ztu.edu.ua",
    //     group: "10-Б 2",
    //     fullName: "Соколовська Вікторія",
    //     gameTitle: "Космічне сміття",
    //     authorPhoto: "Лещенко.jpg",
    //     gamePhoto: "",
    //     githubRepo: "https://github.com/VikaSokol/Space-Trash-",
    //     githubPages: "https://vikasokol.github.io/Space-Trash-/",
    //     documentationFolder: "https://drive.google.com/drive/folders/10W9NbLTXlXtVCFWZfdoyVVfpVku7qJwA?usp=drive_link",
    //     surveyForm: "https://drive.google.com/drive/folders/10W9NbLTXlXtVCFWZfdoyVVfpVku7qJwA?usp=drive_link",
    //     gameMarketRepo: "https://github.com/VikaSokol/GameMarket_Sokolovska",
    //     gameMarketPages: "https://vikasokol.github.io/Space-Trash-/",
    //     finalGameMarketPage: "https://vikasokol.github.io/market/market.html?authuser=0"
    // }
]

//Отримання елементу з ідентифікатором items
let itemsDiv = document.getElementById("items")

//Перевірка існування знайденого блоку
if (itemsDiv) {

    //Виведення елементів масиву
    itemsArray.forEach((item, index) => {
        // console.log(item)
        // itemsDiv.innerHTML += `<div class="item">
        // <h2>${index}</h2>
        // <p>${item}</p>
        // </div>`
        itemsDiv.innerHTML +=
            // `
            // <div class="item">
            //     <h2>Вчитель № ${index+1} з ${itemsArray.length}</h2>
            //     <p>${item.firstName} ${item.lastName}</p>
            //     <p>Предмет: ${item.subject}</p>
            //     <p><img src = "${item.photo}" class = "item-image"></p>
            //     <p><a href = "${item.url}" target = "_blank" class = "btn01">Профіль</a></p>
            //     <p><a href = "mailto:${item.email}?subject=Питання&body=Доброго дня" target = "_blank" class = "btn02">Написати</a></p>
            //     </div>
            // `

            `
    <div class="item">
        <div class="">${item.gameTitle}</div>
        <div>
        <div>${item.fullName}</div>
        <div>${item.group}</div>
        </div> 
        <img src="${item.gamePhoto}" alt="Електрична газонокосарка 32">
        <div class="parts-pay">
            <div><img src="Img/lapka.png" alt="">${item.mono}</div>
            <div><img src="Img/pb.png" alt="">${item.pb}</div>
        </div>
        <div class="btn01">
            <div><span>${item.price_standart} </span><sup>грн</sup></div>
            <div><span>${item.price_discount} </span><sup>грн</sup></div>
        </div>
        <div class="btn02">
            <div>Ціна з купоном</div>
            <div><span>${item.price_coupon} </span><sup>грн</sup></div>
        </div>
    </div>


        `

    })
    // Вивід знайденого елементу
    // console.log(itemsDiv)

    // //Вивід значення поля знайденого елементу
    // // console.log('Поле classList:', itemsDiv.classList)
    // // console.log('Поле id:', itemsDiv.id)
    // // console.log('Поле clientWidth:', itemsDiv.clientWidth)
    // // console.log('Поле innerHTML:', itemsDiv.innerHTML)

    // //Додавання тексту в блок
    // // itemsDiv.innerHTML = 'Перший Програмно доданий текст'
    // // // itemsDiv.innerHTML = 'Другий Програмно доданий текст'
    // // itemsDiv.innerHTML += 'Другий Програмно доданий текст'
    // //Додавання відформатованого HTML коду в блок
    // // itemsDiv.innerHTML = '<div  class = item></div>'
    // // itemsDiv.innerHTML += '<div  class = "item"></div>'
    // // itemsDiv.innerHTML += '<div  class = "item"></div>'
    // // itemsDiv.innerHTML += '<div  class = "item"></div>'
    // // itemsDiv.innerHTML += '<div  class = "item"></div>'
    // for (let i = 0; i < 50; i++) {
    //     itemsDiv.innerHTML += '<div  class = "row"><div class="item"></div><div class="item"></div></div>'
    //     console.log('item')
    // }

} else {
    //Вивід знайденого елементу
    console.log('Блок товарів не знайдено')
}



// itemsArray.sort().forEach((item) =>{
//     console.log(index + '-й елемент: ', item)
// })


//Сортування масиву
// itemsArray = itemsArray.sort()
// //Виведення в консоль масиву
// console.log(itemsArray)

// //Виведення в консоль номерів та значеннь масиву
// for (let i = 0; i < itemsArray.length; i++) {
//     console.log(i + '-й елемент: ',itemsArray[i])
// }
