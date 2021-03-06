Сформировать массив из 15 целых чисел, выбранных случайным образом из
интервала [10, 90]. Поменять местами первый и минимальный элементы.

1 Делаю интервал чисел [10, 90].

> Был использован метод масива [.push()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/push), для записи данных в конец пустого массива.

2 Формирую массив из 15 чисел, выбранных случайным образом из
интервала [10, 90].

> Был использован метод масива [.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort), для рандомной сортировки элементов массива.

> Был использован метод масива [.slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice).

3 Меняю местами первый и минимальный элементы.

> Был использован метод [Math.max](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/max), для нахождения минимального элемента массива.

1. [Math.max](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/max) возвращает наименьшее значение из аргументов.

2. чтобы передать массив вместо списка, используется [apply()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)

3. получив само наименьшее значение, остаётся найти его индекс в массиве через метод массива [indexOf()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf).

Не очень эффективно, т.к. фактически массив перебирается дважды: в поиске минимума и в поиске индекса. Можно сделать за один проход, запоминая вместе с найденным минимальным значением его позицию: Функция [indexMin()](https://github.com/Konkin-Ivan/js-arrays/tree/main/3_swap_first_minimum_elements/function-index-min.js).

```js
function indexMin() {
  
  let result = 0
  for( let f = 0; f < num.length; f++) {
    if (num[f] < num[result] ) {
      result = f
    }
    
  }
  
  return result
}
```


P.S.: Впроцессе решения, обращался за помощью: [StackOverflow](https://ru.stackoverflow.com/questions/1379244/js-%d0%bf%d0%be%d0%bc%d0%b5%d0%bd%d1%8f%d1%82%d1%8c-%d1%8d%d0%bb%d0%b5%d0%bc%d0%b5%d0%bd%d1%82%d1%8b-%d0%bc%d0%b0%d1%81%d1%81%d0%b8%d0%b2%d0%b0-%d0%bf%d0%b5%d1%80%d0%b2%d1%8b%d0%b9-%d1%81-%d0%bd%d0%b0%d0%b8%d0%bc%d0%b5%d0%bd%d1%8c%d1%88%d0%b8%d0%bc/1379270#1379270). Здесь же, показан результат работы.