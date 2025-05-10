# Day 13

Today we will create a sperate files and function while setting up routes in App.jsx. The file name should be named with first letter uppercase as VS Code helps it by giving suggestions.

Create a new file inside src>assets and put file extension .jsx. Inside the newly created .jsx file we have to create component using the following syntax

````
function Home(){
  return (
    <h1>This is home component and we have exported the component using ``` export default Home; ``` in other files</h1>
  )
}
````

Above `export default Home;` can only be used when we have only one component/function to export. other ways of exporting multiple components are

`export.function Home1(){}`
`export {Home1, Home2} `
`export Home1; export Home2`

## How to invoke a component?

Components are special functions in react js thats why they need separate way of invoking them.

function Home(){}

we can call the component with `<Home />`

## Props and State

Props are short form of properties that are read only data which are passed into a child component from a parent component in react js. Allows component resuability.

example of props

```
function Gereeting(props)
{
  return <h1>Hello {propls.name} </h1>
}

function App()
{
  return <Greeting name="rajan" />
}
```

State
This is the data managed within a component. State is mutable meaning it can change over time whenever there are any user actions or events that performs certain operations. It is managed using `useState` hook in function component

example

```
import {useState} from 'react';

function counter(){
  const [count, setcount] = useState(0);

  return (
    <>
      <p>You clicked {coutn} times</p>
      <button onclick={()=> setcount(count +1)}>
        click me
      </button>
    </>
  )
}
```

The count state changes when the button is clicked, causing the component to re-render.

## HOOKS

Hooks are predefined function given by react and react developer. Hooks naming is always starts from `use` keyword and example: useState, useEffect, useRef. We can also create our own hooks.

Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed.Before hooks, only class components could manage state, lifecycle methods, and side effects. Hooks brought these capabilities to function components, which are now the standard.

## 1. useState Hook

React Can't render changes on browser done in variables without using useState hook. we need to specify the vairable that is prone for future changes in useState.

useState is used to remeber values(states)
between render. When we want to change values based on user inputs or events. It automatically re-redners the component when there are changes.

useState() returns an array of 2 which inclues first index is variable and the next one is a function. The first index simply returns whatever we put there. It can be number, string, character, array, object etc.

Inorder to use useState we first need to import it.
`import {useState} from 'react' `

After importing we first have to initialize a vairable and a function which will set the value for the variable that will be rendered on the browser.

```
let [number, setNumber] = useState(0);
// This will set the number= 0 and the function() = setNumber() which will be used further to access and modify the number
```

After setting the variable and function then we have to create function for the functionality of the vairable

```
function increaseNum()
{
  setNumber(number += 1 )
}

```

Lastly we can pass this function to any user events and when they occur, this function will work.

```
<button onclick="increaseNum">Click me </button>
```
