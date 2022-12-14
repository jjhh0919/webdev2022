---
layout: post
title: Chapter10
date: 2022-11-07
category: JavaScript
image: assets/img/blog/JavaScript.png
author: 문준혁
tags: study
---

모던 자바스크립트 10장(객체 리터럴)

### 객체란?

* 자바스크립트는 객체 지반의 프로그래밍 언어
* 자바스크립트를 구성하는 거의 "모든 것"이 객체(원시 값을 제외한 나머지 값(함수, 배열, 정규 표현식 등)은 모두 객체)
* 다양한 타입의 값(원시 값 또는 다른 객체)을 하나의 단위로 구성한 복합적인 자료구조
* 변경 가능한 값
* 0개 이상의 프로퍼티로 구성된 집합(프로퍼티는 키와 값으로 구성)
* 사용할 수 있는 모든 값은 프로퍼티 값이 될 수 있음(함수의 경우 메서드라 부름)
* 프로퍼티 : 객체의 상태를 나타내는 값(data)
* 메서드 : 프로퍼티(싱태 데이터)를 참조하고 조작할 수 있는 동작(behavior)
* 객체자향 프로그래밍 : 객체의 집합으로 프로그램을 표현하려는 프로그래밍 패러다임

### 객체 리터럴에 의한 객체 생성

* 클래스 기반 객체지향 언어는 클래스를 사전에 정의하고 필요한 시점에 new 연산자와 함께 생성자를 호출하여 인스턴스를 생성하는 방식으로 객체를 생성
* 자바스크립트는 프로토타입 기반 객체지향 언어로서 클래스 기반 객체지향 언어와는 달리 다양한 객체 생성 방법을 지원)
* 객체 리터럴, Object 생성자 함수, 생성자 함수, Object.create 메서드, 클래스(ES6)

```
객체 리터럴

const object1 = {};
const object2 = {
  name: 'Object',
  print() {
    console.log(`${name}`);
  }
};

객체 리터럴의 중괄호는 코드 블록을 의미하지 않음(끝에 세미콜론)
```

### 프로퍼티

* 나열할 때는 쉼표(,)로 구분(마지막은 사용하지 않아도 되고, 사용해도 됨)
* 프로퍼티 키 : 빈 문자열을 포함하는 모든 문자열 또는 심벌 값
* 프로퍼티 값 : 자바스크립트에서 사용할 수 있는 모든 값
* 프로퍼티 키는 프로퍼티 값에 접근할 수 있는 이름으로서 식별자 역할을 함
* 프로퍼티 키는 식별자 네이밍 규칙을 준수하는 이름에는 따옴표를 생략 가능, 식별자 네이밍 규칙을 따르지 않는 이름에는 반드시 따옴표 사용
* 문자열 또는 문자열로 평가할 수 있는 표현식을 사용해 프로퍼티 키를 동적으로 생성할 수도 있음
* 프로퍼티 키에 문자열이나 심벌 값 외의 값을 사용하면 암묵적 타입 변환을 통해 문자열이 됨
* 프로퍼티 키를 중복 선언하면 나중에 선언한 프로퍼티를 덮어씀

### 메서드

* 자바스크립트 함수는 객체(일급 객체)
* 메서드 내부에서 사용한 this 키워드 : 객체 자신을 가리키는 참조변수

### 프로퍼티 접근

* 마침표 프로퍼티 접근 연산자(.)를 사용하는 마침표 표기법
* 대괄호 프로퍼티 접근 연산자([...])를 사용하는 대괄호 표기법
* 대괄호 표기법을 사용하는 경우 대괄호 프로퍼티 접근 연산자 내부에 지정하는 프로퍼티 키는 반드시 따옴표로 감싼 문자열
* 프로퍼티 키가 식별자 네이밍 규칙을 준수하지 않는 이름인 경우 반드시 대괄호 표기법을 사용

### 프로퍼티 값 갱신

* 이미 존재하는 프로퍼티에 값을 할당하면 프로퍼티 값이 갱신

### 프로퍼티 동적 생성

* 존재하지 않는 프로퍼티에 값을 할당하면 프로퍼티가 동적으로 생성되어 추가되고 프로퍼티 값이 할당

### 프로퍼티 삭제

* delete 연산자는 객체의 프로퍼티를 삭제
* delete 연산자의 피연산자는 프로퍼티 값에 접근할 수 있는 표현식이어야 함
* 존재하지 않는 프로퍼를 삭제하면 무시

### ES6에서 추가된 객체 리터럴의 확장 기능

#### 프로퍼티 축약 표현

* 프로퍼티 값으로 변수를 사용하는 경우 변수 이름과 프로퍼티 키가 동일한 이름일 때 프로퍼티 키를 생략 가능

```
const obj = {
  x: x;
  y: y;
}

// ES6
const obj = { x, y };
```

#### 계산된 프로퍼티 이름

* 문자열 또는 문자열로 타입 변환할 수 있는 값으로 평가되는 표현식을 사용해 프로퍼티 키를 동적으로 생성 가능
* 프로퍼티 키를 사용할 표현식을 대괄호([...])로 묶어야 함

```
const prefix = 'prop';
let i = 0;
const obj = {};

obj[prefix + '-' + ++i] = i;
obj[prefix + '-' + ++i] = i;
obj[prefix + '-' + ++i] = i;

// ES6
const prefix = 'prop';
let i = 0;

const obj = {
  [`${prefix}-${++i}`]:i],
  [`${prefix}-${++i}`]:i],
  [`${prefix}-${++i}`]:i]
};
```

#### 메서드 축약 표현

* 메서드를 정의할 때 function 키워드를 생략한 축약 표현을 사용
* 메서드 축약 표현으로 정의한 메서드는 프로퍼티에 할당한 함수와 다르게 동작

```
const obj = {
  string: 'string',
  show: function() {
    console.log(this.string);
  }
};

// ES6
const obj = {
  string: 'string',
  show() {
    console.log(this.string);
  }
};
```