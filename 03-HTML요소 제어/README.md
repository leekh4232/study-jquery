# HTML 요소 제어

## #01. HTML 요소의 속성 제어

### 특정 요소에 적용되어 있는 속성값 조회하기

```javascript
var foo = $("#bar").attr('속성이름');
```

### 특정 요소의 적용하기

#### 개별적용

```javascript
$("#bar").attr('속성이름', '값');
```

#### 일괄적용 (json형태 사용)

```javascript
$("#bar").attr({
        속성이름: '값',
        속성이름: '값',
        속성이름: '값'
        ...
    });
```

- 속성이름에 공백이나 `-`기호가 포함된 경우는 반드시 따옴표 적용.
- 그 외에는 따옴표 처리가 필수는 아님

### 프로퍼티 설정

- HTML 태그에서 값을 갖지 않는 속성 : property
- 값을 갖는 속성 : attribute

#### 프로퍼티의 적용 여부 조회

특정 프로퍼티의 적용여부를 boolean 값으로 조회한다.

```javascript
const is = $("셀렉터").prop('프로퍼티 이름');
```


#### 프로퍼티의 설정/해제

prop 함수에 두 번째 파라미터로 boolean값을 전달하면 프토퍼티를 강제로 설정하거나 해제할 수 있다.

```javascript
$("셀렉터").prop('disabled', true|false);
```

## #02. data-* 속성

`data-OOO`형태로 개발자가 필요에 따라 직접 정의하는 속성.<br/>
JAVASCRIPT에서 사용할 변수값을 숨겨놓기 위한 목적으로 사용한다.
```html
<div id="foo" data-hello="안녕하세요" data-world="jQuery">
    ...
</div>
```

### data속성값 조회하기

```javascript
var foo = $("#bar").data('hello');
```

### data속성값 적용/변경하기

```javascript
$("#bar").data('hello', '반갑습니다');
```

## #03. HTML 요소의 CSS 속성 제어

### 특정 요소에 적용되어 있는 속성값 조회하기
```javascript
var foo = $("#bar").css('속성이름');
```

### 특정 요소의 적용하기

#### 개별적용

```javascript
$("#bar").css('속성이름', '값');
```

#### 일괄적용 (json형태 사용)

```javascript
$("#bar").css({
        속성이름: '값',
        속성이름: '값',
        속성이름: '값'
        ...
    });
```


## #04. HTML요소의 CSS 클래스 제어

### CSS 클래스 적용여부 검사

```javascript
var foo = $("#bar").hasClass('클래스이름'); // true,false 리턴
```

### CSS 클래스 적용

```javascript
$("#bar").addClass('클래스이름  클래스이름 ...');
```

- 두 개 이상의 클래스를 적용하고자 하는 경우 공백으로 구분.

### CSS 클래스 삭제

```javascript
$("#bar").removeClass('클래스이름  클래스이름 ...');
```

두 개 이상의 클래스를 삭제하고자 하는 경우 공백으로 구분.

### CSS 클래스 적용/삭제 자동 반복

```javascript
$("#bar").toggleClass('클래스이름  클래스이름 ...');
```

두 개 이상의 클래스를 처리하고자 하는 경우 공백으로 구분.
