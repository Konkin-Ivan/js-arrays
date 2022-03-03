Сформировать массив из 10 целых чисел, выбранных случайным образом из
интервала [10, 50]. Найти максимальный среди элементов с четными индексами.

1 Делаю интервал чисел [10, 50].

> Был использован метод масива [.push()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/push), для записи данных в конец пустого массива.

2 Формирую массив из 10 чисел, выбранных случайным образом из
интервала [10, 50].

> Был использован метод масива [.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort), для рандомной сортировки элементов массива.

> Был использован метод масива [.slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice), для преобразования массива из 41 элементов в 10.

3 Нахожу максимальный среди элементов с четными индексами.

> Был использован метод [Math.max](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/max), для нахождения максимального элемента массива.