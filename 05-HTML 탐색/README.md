# HTML 요소의 탐색

## #01. 메서드 체인

- 하나의 jQuery요소에 대하여 메서드를 연속적으로 호출하는 기법.
- 특별한 경우가 아닌 이상 jQuery()의 함수들은 객체 자신을 리턴한다.

```javascript
$("#foo").attr(key, value)
         .css(key, value)
         .addClass(cls)
         .on("click", () => {});
```

## #02. 요소의 탐색

### 주변 요소 탐색하기

| 함수       | 설명                      |
| ---------- | ------------------------- |
| prev()     | 이전 요소를 리턴한다.     |
| next()     | 다음 요소를 리턴한다.     |
| parent()   | 상위 요소를 리턴한다.     |
| children() | 하위 요소(들)을 리턴한다. |
| eq(n)      | n번째 요소를 리턴한다.    |

### 부모 요소 얻기

주어진 셀렉터를 갖는 가장 인접한 부모 요소를 리턴한다.

```javascript
$("#foo").parents("셀렉터");
```

### 자식 요소 얻기

주어진 셀렉터를 갖는 가장 인접한 자식 요소를 리턴한다.

```javascript
$("#foo").find("셀렉터");
```

## #02. not()

- 복수 요소를 지정하고 있는 jQuery객체 중에서 특정 요소를 제외한 항목들을 지정하는 기능.

### `e.currentTarget`과 함께 사용하는 경우

```js
$(".btn").on("click", (e) => {
    // ".btn"중에서 클릭된 요소.
    $(e.currentTarget)
    // '.btn'중에서 클릭되지 않은 나머지 요소(들)
    $(".btn").not(e.currentTarget)
});
```

### jQuery 객체를 사용하여 not() 함수 사용

".btn"중에서 id값이 "#hello"인 요소 제외

```javascript
$(".btn").not( $("#hello" ) )
```

".btn"중에서 3번째 요소만 제외

```javascript
$(".btn").not( $(".btn:nth-child(3)" ) )    // 1부터 카운트
$(".btn").not( $(".btn:eq(2)" ) )           // 0부터 카운트
```

### css 셀렉터를 사용하여 not() 함수 사용

".btn"중에서 id값이 "#hello"인 요소 제외

```javascript
$(".btn").not( "#hello" )
```

".btn"중에서 3번째 요소만 제외

```javascript
$(".btn").not( ".btn:nth-child(3)" )    // 1부터 카운트
$(".btn").not( ".btn:eq(2)" )           // 0부터 카운트
```
