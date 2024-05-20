//Перевірка підключеного файлу 
console.log('Перевірка підключеного файлу скриптів market.js')

//визначення масиву товарів
let itemsArray = [
    'Газонокосарка 43',
    'Електричний тример 110',
    'Електрична газонокосарка 32',
    'Фкумуляторний оприскувач 12N',
]

//отримання елементу з ідентифікатором items
let itemsDiv=document.getElementById("items");

//перевірка існування знайденого блоку
if (itemsDiv) {
    //вивід елементу масиву
    itemsArray.forEach((item)=>{
        //console.log(item) 
        itemsDiv.innerHTML +=`<div class = "item">${item}</div>`
    })

} else {
    //вивід повідомлення про не знайдений блок
    console.log('Блок товарів не знайдено')
}