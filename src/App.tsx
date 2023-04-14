import React from 'react';
import logo from './logo.svg';
import './App.css';



let s: string = "10";
/////////////////////////////////
let names: Array<string> = ["Kolya", "Oleg", "Andrey",]
// or
let names2: string[] = ["Kolya", "Oleg", "Andrey",]
/////////////////////////////////
names.forEach(n => {
  //alert(n)
})
/////////////////////////////////
let sex: "male" | "female";
sex = "male"
/////////////////////////////////
type AddressType = {
  country: string | null
  city?: string | null
  street?: string | null
}
type UserType = {
  sayHello?: (message: string) => void,
  name: string,
  age: number,
  isSamurai: boolean,
  address: AddressType | null,
}
let user: UserType = {
  sayHello() { alert('yo') },
  name: "Kolya",
  age: 32,
  isSamurai: true,
  address: null,
}
console.log(user.age)
/////////////////////////////////
const summ: (a: number, b: number) => number = (a: number, b: number) => {
  return a + b
}
console.log(summ(10, -3))
/////////////////////////////////
let initialState = {
  name: null as string | null,
  age: null as number | null,
  isSamurai: null as boolean | null,
  address: {
    country: null,
    city: null,
  } as AddressType,
  counter: 0,
}

export type InitialStateType = typeof initialState;

let state: InitialStateType = {
  address: {
    country: "ssdsd",
    city: "asdasda",
  },
  age: 32,
  counter: 20,
  isSamurai: false,
  name: "lox",
}
/////////////////////////////////
let GET_TASKS = "APP/GET_TASKS"

let GET_TEST = "APP/GET_TEST"
type GetTasksActionType = {
  id: number,
  type: typeof GET_TASKS, 
}
let action: GetTasksActionType = {
  type: GET_TEST,
  id: 12,
}




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
