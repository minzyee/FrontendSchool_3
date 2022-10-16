// 생성자 함수를 사용하는 이유 -> 객체 생성 용도 / 프로퍼티의 집합을 만들기 위해
let book = {
  책이름: 'JavaScript',
  책가격: 1000,
  저자: '홍길동',
  출판일: '22.10.11'
}

// let data = new Book('CSS', 10, '유진', '20.12.30');
// console.log(data); // undefined

let newBook = {};

newBook['책이름'] = 'JavaScript' // 예를 들어 사용자에게 form 에서 입력 받은 값
newBook['책가격'] = 1000000
newBook['저자'] = '세원, 석규, 슬기'
newBook['출판일'] = '22.10.30'

function Book(책이름, 책가격, 저자, 출판일){
  // this = {};
  this.책이름 = 책이름;
  this.책가격 = 책가격;
  this.저자 = 저자;
  this.출판일 = 출판일;
  // return this;
}

// let data = Book('CSS', 10, '유진', '22.12.30')
// console.log(data) // undefined

let book1 = new Book('HTML', 10, '유진', '22.12.30')
let book2 = Book('CSS', 20, '유진', '23.12.30')
let book3 = new Book('JS', 30, '유진', '24.12.30')

console.log(book1, book2, book3);
// Book {책이름: 'HTML', 책가격: 10, 저자: '유진', 출판일: '22.12.30'} undefined
// Book {책이름: 'JS', 책가격: 30, 저자: '유진', 출판일: '24.12.30'}


// new 키워드를 사용했을 경우
function Book(책이름, 책가격, 저자, 출판일){
  // this = {}
  this.책이름 = 책이름
  this.책가격 = 책가격
  this.저자 = 저자
  this.출판일 = 출판일
  // return this
}