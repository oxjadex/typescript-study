import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let e :(number | string) = 'oh';
  // union type (타입 두 개 합치기)
  // 가변적 타입
  e = 123;

  let array :(number | string)[]= [1,'2',3];
  // let array2 :number | string[]= [1,'2',3];
  // 두 개 가 다름
  let object :{ a : string | number }= { a : '123'};

  let na :any;
  na = 123;
  na = true;
  // any type : 아무거나
  // 그럼 타입쓰는 의미 업어짐 => 타입 버그 못 잡음

  let dd :unknown;
  dd = 123;
  dd = {}; 
  // any 보다 조금 더 안전
  // 왜냐면

  let l :string = na;
  // let l :string = dd;
  // 에러 줌

  // dd - 1 => error

  let aging :string | number;
  // aging + 1 => 엄격
  // string => 됨, number => 됨, string | number(새로운 타입) => 안 됨

  let aig :unknown = 1;
  // aig - 1; => error, 숫자 타입아니라서 
  
  let user :string = 'kim';
  let ages :undefined | number = undefined;
  let married :boolean = false;
  let arin :(string | (undefined | number) | boolean)[] = [user, ages, married];

  let school :{
    score : (number | boolean)[],
    teacher : string,
    friend : string | string[]
  }= {
    score : [100, 97, 84],
    teacher : 'Phillip',
    friend : 'yejin'
  }

  school.score[4] = false;
  school.friend = ['Lee', school.teacher];

  let name: string = 'kim';
  name = '123';
  let age: number = 50;
  let real: boolean = true;
  let d: undefined = undefined;

  let register: string[] = ['kim', 'park'];
  let re: { member1: string; member2: string } = {
    member1: 'kim',
    member2: 'park',
  }; // object
  let a: string = 'park';
  // 타입 지정을 안해도 됨 원래 자동으로 됨
  let dff = [1, 2, 3];
  let nam = 'dhdkfls';
  let ag = 3;
  let location = 'Busan';

  let song = ['loykim', 'sakura']; // x
  let ww: { song: string; singer: string } = {
    song: 'sakura',
    singer: 'loykim',
  };

  // let project :member:string[], days:number, started: boolean={
  //   member : ['kim', 'park'],
  //   days : 30,
  //   started : true,
  // } xx 하기 전에 중괄호 넣기

  let project1: { member: string[]; days: number; started: boolean } = {
    member: ['kim', 'park'],
    days: 30,
    started: true,
  }; //xx 하기 전에 중괄호 넣기

  let project2: {
    member: string[];
    days: number;
    started: boolean;
  } = {
    member: ['kim', 'park'],
    days: 30,
    started: true,
  };

  return <div className="App"></div>;
}

export default App;
