
//Перевірка підключеного файлу 
console.log('Перевірка підключеного файлу скриптів market.js')

//отримання елементу з ідентифікатором items
let itemsDiv=document.getElementById("items");

//перевірка існування знайденого блоку
if (itemsDiv) {
    //вивід знайденого елементу
    console.log(itemsDiv)
    //вивід значення поля знайденого елементу
    console.log('Поле classList: ', itemsDiv.classList)
    console.log('Поле id: ', itemsDiv.id)
    console.log('Поле clientWidth: ', itemsDiv.clientWidth)
    console.log('Поле innerHTML: ', itemsDiv.innerHTML)

    for (i=0; i < 100; i++) {
        itemsDiv.innerHTML += '<div class="item"></div>'
    }
} else {
    //вивід повідомлення про не знайдений блок
    console.log('Блок товарів не знайдено')
}