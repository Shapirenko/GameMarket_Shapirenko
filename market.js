
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
    {
        title:"Мотокоса 43",
        image:"Img/Мотокоса.png",
        mono:"6",
        pb:"8",
        price_standart:"5499",
        price_discount:"4497",
        price_coupon:"4395",

    },
    {
        title:"Електричний тример 110",
        image:"https://content2.rozetka.com.ua/goods/images/big/261583913.jpg",
        mono:"5",
        pb:"7",
        price_standart:"4497",
        price_discount:"3498",
        price_coupon:"3396",

    },
    {
        title:"Електрична газонокосарка 32",
        image:"https://images.prom.ua/3772468812_w640_h640_gazonokosilka-elektricheskaya-dnipro-m.jpg",
        mono:"8",
        pb:"10",
        price_standart:"4497",
        price_discount:"3297",
        price_coupon:"3195",

    },
    {
        title:"Акумуляторни оприскувач 12 N",
        image:"https://hotline.ua/img/tx/449/4492289865.jpg",
        mono:"9",
        pb:"6",
        price_standart:"2190",
        price_discount:"1698",
        price_coupon:"1596",

    },
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
        <div class="">${item.title}</div>
        <img src="${item.image}" alt="Електрична газонокосарка 32">
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
