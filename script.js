// Задание 1
// 1. Поиск в интернете (бесплатные api примеры).
// 2. Найти любые данные, на произвольную тему.
// 3. Создать файл data.js.
// 4. Создать переменную которая будет хранить данные из публичных api.

// Задание 2
// 1. Создать файл index.html.
// 2. Подключить data.js.
// 3. Сформировать контент из данных (картинка загловок и параграф).
// 4. Добавить данный контент в вёрстку.
// 5. * Добавить стили при необходимости (по желанию).


const data = JSON.parse(dataInfo);

const bodyHtml = document.querySelector('body');
console.log(bodyHtml);

const newDiv = document.createElement('div');
newDiv.classList.add('content');

bodyHtml.appendChild(newDiv);


data.users.forEach(element => {

    const newH2 = document.createElement('h2');
    newH2.classList.add('h2Element');
    newH2.innerHTML = element.firstName + '  ' + element.lastName;

    const newA = document.createElement('a');
    newA.setAttribute('href', element.photo);
    
    const newImg = document.createElement('img');
    newImg.classList.add('imgElement');
    newImg.setAttribute('src', element.photo);
    newImg.setAttribute('width', 100);
    newA.appendChild(newImg);

    const newPtel = document.createElement('p');
    newPtel.classList.add('pElementTel');
    newPtel.innerHTML = 'Tel: ' + element.phoneNumber;
    
    const newPeml = document.createElement('p');
    newPeml.classList.add('pElementEml');
    newPeml.innerHTML = element.emailAddress;

   newDiv.appendChild(newH2);
   newDiv.appendChild(newA);
   newDiv.appendChild(newPtel);
   newDiv.appendChild(newPeml);

    //console.log(element);

});



