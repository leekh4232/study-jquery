# HTML 요소의 생성

## #01. HTMLElement 객체 생성

### `<body>`태그 안에 명시된 태그 요소를 객체화 하는 경우

태그 이름을 $() 함수에 전달한다.

```javascript
const obj = $("div");
```

### `<body>`태그 안에 명시되지 않은 태그 요소를 객체화 하는 경우

태그 이름을 `<>`로 감싸서 $() 함수에 전달한다.

```javascript
const obj = $("<div>");
```

이렇게 생성된 요소들은 jQuery의 기능들을 적용할 수 있다.

```javascript
const obj = $("div");
obj.attr('id', 'hello').css(...).addClass('item');
```


### 기존에 존재하는 요소 복사하기

```javascript
const obj = $("#foo").clone();
obj.attr('id', 'helloworld');
```

모든 속성을 동일하게 복사하므로 id속성값 같은 경우(중복되어서는 안되므로)는 다른 값으로 변경해 주어야 한다.


## #02. 동적으로 생성된 요소를 HTML 문서에 삽입/삭제하기

| 함수              | 설명                                                         |
| ----------------- | ------------------------------------------------------------ |
| A.html(B)         | A의 시작태그와 끝태그 사이의 내용을 B로 대체한다.            |
| A.append(B)       | A의 마지막 자식으로 B를 추가한다. |
| B.appendTo(A)     | B를 A의 마지막 자식으로 추가한다. |
| A.prepend(B)      | A의 첫 번째 자식으로 B를 추가한다. |
| B.prependTo(A)    | B를 A의 첫 번째 자식으로 추가한다. |
| A.insertBefore(B) | A를 B의 직전에 삽입한다.                                     |
| A.insertAfter(B)  | A를 B의 직후에 삽입한다.                                     |
| A.empty()         | A의 모든 내용을 비운다.                                      |
| A.remove()         | A 자체를 제거한다.                                     |



## #03. HTML요소의 위치 변경

append(), prepend(), insertBefore(), insertAfter() 함수등을 동적 요소가 아닌 기존에 존재하는 HTML요소끼리 사용하면 서로 위치를 바꿀 수 있다.

```html
<div id="foo"></div>
<div id="bar"></div>

<script>
// #foo의 위치가 #bar 다음으로 이동하게 된다.
$("#foo").insertAfter("#bar");
</script>
```