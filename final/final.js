//Перевірка підключеного файлу 
console.log('Перевірка підключеного файлу скриптів market.js')

//визначення масиву товарів
let itemsArray = [
    {
        firsName:"Віталій",
        lastName:"Шатківський",
        Surname:"Миколайович",
        subject:"CS",
        photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/03/dsc07815-683x1024.jpg",
        url:"https://lyceum.ztu.edu.ua/team/shatkivskyy-v-m/",
    },
    {
        firsName:"Анжела",
        lastName:"Лознюк",
        Surname:"Леонідівна",
        subject:"Українська мова",
        photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/10/photo_2023-10-25_15-46-33-1-693x1024.jpg",
        url:"https://lyceum.ztu.edu.ua/team/loznyuk-anzhela-leonidivna/",
    },
    {
        firsName:"Наталія",
        lastName:"Зинюк",
        Surname:"Миколаївна",
        subject:"Хімія та білогія",
        photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2024/01/zynjuk-natalija-mykolayivna-683x1024.jpg",
        url:"https://lyceum.ztu.edu.ua/team/zynyuk-nataliya-mykolayivna/",
    },
    {
        firsName:"Наталія",
        lastName:"Венцель",
        Surname:"Василівна",
        subject:"Директор",
        photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/ventsel-nataliya-vasylivna-683x1024.jpg",
        url:"https://lyceum.ztu.edu.ua/team/ventsel-n-v/",
    },
    {
        firsName:"Лариса",
        lastName:"Забелло",
        Surname:"Олександрівна",
        subject:"Англійська мова",
        photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/zabello-larysa-oleksandrivna-682x1024.jpg",
        url:"https://lyceum.ztu.edu.ua/team/zabello-l-o/",
    },
    {
        firsName:"Ірина",
        lastName:"Глібко",
        Surname:"Анатоліївна",
        subject:"Англійська мова",
        photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/01/hlibko-iryna-anatoliyevna.jpg",
        url:"https://lyceum.ztu.edu.ua/team/hlibko-iryna-anatoliyivna/",
    },
    {
        firsName:"Ірина",
        lastName:"Боровська-Карандюк",
        Surname:"Анатоліївна",
        subject:"Українська мова",
        photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/borovska-karandyuk-iryna-anatoliyivna-683x1024.jpg",
        url:"https://lyceum.ztu.edu.ua/team/borovska-karandyuk-iryna-anatoliyivna/",
    },
    {
        firsName:"Василь",
        lastName:"Бабій",
        Surname:"Дмитрович",
        subject:"Фізична культура",
        photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/babiy-vasyl-dmytrovych-683x1024.jpg",
        url:"https://lyceum.ztu.edu.ua/team/babiy-vasyl-dmytrovych/",
    },
    {
        firsName:"Тарас",
        lastName:"Савінков",
        Surname:"Євгенович",
        subject:"Англійська мова",
        photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/savinkov-taras-yevhenovych-683x1024.jpg",
        url:"https://lyceum.ztu.edu.ua/team/savinkov-taras-yevhenovych/",
    },
    {
        firsName:"Марія",
        lastName:"Медведєва",
        Surname:"Василівна",
        subject:"Географія",
        photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/medvedyeva-mariya-vasylivna-683x1024.jpg",
        url:"https://lyceum.ztu.edu.ua/team/medvedyeva-mariya-vasylivna/",
    },
    {
        firsName:"Вікторія",
        lastName:"Нелипович",
        Surname:"Віталіївна",
        subject:"Математика",
        photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/nelypovych-viktoriya-vitaliyivna-683x1024.jpg",
        url:"https://lyceum.ztu.edu.ua/team/nelypovych-viktoriya-vitaliyivna/",
    },
    {
        firsName:"Олена",
        lastName:"Чугунова",
        Surname:"Василівна",
        subject:"Математика",
        photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/chuhunova-olena-vasylivna-683x1024.jpg",
        url:"https://lyceum.ztu.edu.ua/team/chuhunova-o-v/",
    },
    {
        firsName:"Наталія",
        lastName:"Гончарук",
        Surname:"Олександрівна",
        subject:"Англійська мова",
        photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/honcharuk-nataliya-oleksandrivna-682x1024.jpg",
        url:"https://lyceum.ztu.edu.ua/team/honcharuk-n-o/",
    },
    {
        firsName:"Діна",
        lastName:"Варганова",
        Surname:"Олександрівна",
        subject:"Англійська мова",
        photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/varhanova-dina-oleksandrivna-683x1024.jpg",
        url:"https://lyceum.ztu.edu.ua/team/borysyuk-o-m/",
    },
    {
        firsName:"Марія",
        lastName:"Гетманська",
        Surname:"Олександрівна",
        subject:"Психолог",
        photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/hetmanska-mariya-oleksandrivna-683x1024.jpg",
        url:"https://lyceum.ztu.edu.ua/team/hetmanska-m-o/",
    },
    {
        firsName:"Наталія",
        lastName:"Кучер",
        Surname:"Вікторівна",
        subject:"Фізика",
        photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/kucher-nataliya-viktorivna-683x1024.jpg",
        url:"https://lyceum.ztu.edu.ua/team/kucher-n-v/",
    },
    {
        firsName:"Олена",
        lastName:"Геча",
        Surname:"Анатоіївна",
        subject:"Історія",
        photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/hecha-olena-anatoliyivna-683x1024.jpg",
        url:"https://lyceum.ztu.edu.ua/team/hecha-o-a/",
    },
];
console.log(itemsArray)

let itemsDiv=document.getElementById("items")

//Перевірка існування знайденого блоку
if (itemsDiv) {
    itemsArray
    .forEach((item, index) => {
        itemsDiv.innerHTML +=
        `
        <div class="item">
            <h2>Вчитель №${index+1} з ${itemsArray.length}</h2>
            <p>${item.lastName} ${item.firsName}</p>
            <p>${item.Surname} </p>
            <p>Предмет:${item.subject}</p>
            <p><img src=${item.photo}" class= "item-image"></p>
            <p><a href="${item.url}" target="_blank" class="bonus price">Профіль</a></p>
        </div>
        `
    })
} 
else {
    console.log('Блок товарів не знайдено');
}
