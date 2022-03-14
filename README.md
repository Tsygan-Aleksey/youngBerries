<div id="top"></div>

  <h1 align="center">WILDBERRIES</h1>

<details>
  <summary>Навигация</summary>
  <ol>
    <li>
      <a href="#О-проекте">О проекте</a>
    </li>
    <li><a href="#Установка-и-запуск проекта">Установка и запуск проекта</a></li>
    <li>
        <a href="#Элементы-проекта">Элементы проекта</a>
        <ul>
            <li><a href="#Шапка">Шапка</a></li>
            <li><a href="#Слайдер">Слайдер</a></li>
            <li><a href="#Карточки-товаров">Карточки товаров</a></li>
            <li><a href="#Быстрый-просмотр">Быстрый просмотр</a></li>
            <li><a href="#Тост">Тост</a></li>
        </ul>
    </li>
    <li><a href="#Команда">Команда</a></li>
    <li><a href="#Благодарность">Благодарность</a></li>
    
  </ol>
</details>

## О проекте
Проект "YoungWildberries"- это упрощенная версия известного международного интернет-магазина WILDBERRIES.

[<img alt="проект" src="https://github.com/Tsygan-Aleksey/youngBerries/blob/dev-YB-25/readME-image/wildberries.jpg"/>]()

<p align="right">(<a href="#top">Вверх</a>)</p>

### Установка и запуск проекта

Необходимо выполнить следующие действия:

1. Скопировать репозиторий
   ```sh
   git clone https://github.com/Tsygan-Aleksey/youngBerries.git
   ```
2. Установить NPM модули
   ```sh
   npm install
   ```
3. Запустить проект
   ```sh
   npm run dev
   ```
   <p align="right">(<a href="#top">Вверх</a>)</p>

<div id="usage"></div>

# Элементы проекта

## Шапка

[<img src="https://github.com/Tsygan-Aleksey/youngBerries/blob/dev-YB-25/readME-image/header.jpg"/>]()

1. Логотип сайта.
2. Поиск - с помощью которого Вы легко найдете нужный товар. Он реализован таким образом, что при введении первого символа он сразу начинает подбирать товар.
3. Корзина - это кнопка для открытия модального окна с товарами, которые Вы выберите для себя и возможно захотите купить.

    [<img height="170" alt="Корзина" width="500" src="https://github.com/Tsygan-Aleksey/youngBerries/blob/dev-YB-25/readME-image/basket.jpg"/>]()
    
   Модальное окне с товарами:
  
    - Здесь отображается наименование товара, его цена, количество и общая сумма всех товаров.
    - Кнопки для увеличения и уменьшения количества товаров, кро этого можно удалить тот или иной товар, либо очистить корзину полность.
    - После перезгрузки сайта, данные в корзине останутся без изменений, это позволит Вам в любой момент вернуться к зазазу.

## Слайдер

[<img alt="слайдер" src="https://github.com/Tsygan-Aleksey/youngBerries/blob/dev-YB-25/readME-image/slider.jpg"/>]()

Слева и справа есть кнопки для переключения между слайдами. Внизу слайдера по центр есть кнопки в виде точек, для быстрого переключения к интересующему Вас слайду

## Карточки товаров

Под слайдером находится раздел Хиты продаж, в котором располагаются товары

[<img alt="карточки" height="" src="https://github.com/Tsygan-Aleksey/youngBerries/blob/dev-YB-25/readME-image/cards.jpg" width=""/>]() 

- У каждой карточки товара есть наименвание, цена и изоброжение
- На карточке есть кнопка "В корзину" для быстрого добавления товара в корзину
- Для более подробной информации о товаре, можно навести на карточку и нажать кнопку "быстрый просмотр", откроется модальное окно с более подробной информацией.

## Быстрый просмотр

[<img height="500" width="300" alt="быстрый просмотр" src="https://github.com/Tsygan-Aleksey/youngBerries/blob/dev-YB-25/readME-image/quick-view.jpg"/>]()

Окно быстрого просмотра представляет собой увеличенную карточку товара c информацией о ней. В перспективе в данном окне будет появляться более подробная информация о товаре.

## Тост

[<img alt="тост" height="100" width="500" src="https://github.com/Tsygan-Aleksey/youngBerries/blob/dev-YB-25/readME-image/toast.jpg"/>]()

Так же на проекте реализован тост. Тост — это ненавязчивое уведомление, имитирующие push-уведомления. В проекте тост несет в себе информацию он том, кем был созда сайт. Оно появляется спусня 15 секунд после загрузки сайта

На нашем проекте мы использовали

- scss
- javascript

В javascript использовали функции конструкторы, классы, так же наши карточки мы получаем с сервера на котором они хранятся.

<p align="right">(<a href="#top">Вверх</a>)</p>

## Команда

- Алексей - [@linkedIn](https://www.linkedin.com/in/aleksey-tsygan-978a6a228/) - newrety1996@gmail.com
- Александр [Zhibul-Alexander](https://github.com/Zhibul-Alexander) - alexanderzhibul@mail.ru
- Киррил [Kirill-Bukin](https://github.com/Kirill-Bukin)
- Екатерина [Kate-Levchuk](https://github.com/Kate-Levchuk)

Ссылка на проект: [https://github.com/Tsygan-Aleksey/youngBerries](https://github.com/Tsygan-Aleksey/youngBerries)

<p align="right">(<a href="#top">Вверх</a>)</p>

# Благодарность

Отдельная благодарность нашему преподавателю за невероятную помощь при создании проекта.

Олег - [Oleg-Kolosov](https://github.com/Oleg-Kolosov)

Полезные ссылки:
- [Учебник по javascript](https://learn.javascript.ru/)
- [Рекомендации по коммитам](https://github.com/Oleg-Kolosov/Requirements-for-Commit-Names)
- [Рекомендации по названию функций](https://github.com/Oleg-Kolosov/Recommendations-for-naming-functions)
- [Рекомендации по правильному написанию css](https://github.com/Oleg-Kolosov/Organization-css-property)
- [Полезная информация developer.mozilla](https://developer.mozilla.org/en-US/)

<p align="right">(<a href="#top">Вверх</a>)</p>
