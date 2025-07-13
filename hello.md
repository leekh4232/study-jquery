

## #01. 요소의 판별

### `index()` 함수

특정 요소가 부모 태그 안에서 갖는 인덱스번호를 리턴하는 함수 (0부터 시작함)

```html
<div>
    <a href="#">...</a>
    <div id='hello'></div>
    <p class="memo"></p>
</div>

<script>
    // 부모 <div>를 기준으로 2번째 요소이므로 인덱스 1이 리턴된다.
    var idx = $("#hello").index();
</script>
```

### 요소의 숨김,표시 처리

| 함수                            | 설명                                                                      |
| ------------------------------- | ------------------------------------------------------------------------- |
| show([time, [function]])        | 요소를 표시한다.                                                          |
| hide([time, [function]])        | 요소를 숨긴다.                                                            |
| toggle([time, [function]])      | 요소의 숨김과 표시를 자동 반복한다.                                       |
| fadeIn([time, [function]])      | 패이드 효과를 적용하여 요소를 표시한다.                                   |
| fadeOut([time, [function]])     | 패이드 효과를 적용하여 요소를 숨긴다.                                     |
| fadeToggle([time, [function]])  | 패이드 효과를 적용하여 요소의 숨김과 표시를 자동 반복한다.                |
| slideDown([time, [function]])   | 요소를 아래로 펼쳐서 표시한다.                                            |
| slideUp([time, [function]])     | 요소를 위로 접어서 요소를 숨긴다.                                         |
| slideToggle([time, [function]]) | 요소를 위,아래로 접고 펼치는 효과를 사용하여 숨김과 표시를 자동 반복한다. |

- 시간값은 1/1000초 단위로 지정한다.
- 두 번째 파라미터인 콜백함수는 처리가 완료된 후 호출된다.

## #05. not()

- 복수 요소를 지정하고 있는 jQuery객체 중에서 특정 요소를 제외한 항목들을 지정하는 기능.

### this와 함께 사용하는 경우

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
