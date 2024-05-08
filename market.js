
//перевірка підключеного файлу скриптів
console.log('Перевірка підключеного файлу скрипту market.js')



//Вивід знайдкного елементу
// console.log(itemsDiv)

//Визначення масиву товарів
let itemsArray = ['Газонокосарка 43',
    'Електричний тример 110',
    'Електрична газонокосарка 32',
    'Акумуляторний оприскувач 12 N',
    // 'Газонокосарка 430',
    // 'Електричний тример 130',
    // 'Електрична газонокосарка 320',
    // 'Акумуляторний оприскувач 12 E',

]

//Отримання елементу з ідентифікатором items
let itemsDiv = document.getElementById("items")

//Перевірка існування знайденого блоку
if (itemsDiv) {

    //Виведення елементів масиву
    itemsArray.forEach((item) => {
        // console.log(item)
        itemsDiv.innerHTML += '<div  class = "row"><div class="item"></div><div class="item"></div></div>'
    })
    //Вивід знайденого елементу
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
