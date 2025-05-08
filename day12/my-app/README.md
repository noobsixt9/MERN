# Day 12

## Component Vs Function

A function is js is a resuable block of code that performs certain sepcific tasks or return a value.

function add(a, b)
{
return a+b;
}

A react component is a special function that returns JSX and is used to build UI.

function Mycomponent(){
return <h1>Hello, World </h1>;
}

All of the variables, arrays and objects in ract are written above the return statement in component

function App()
{
let name = "rajan";

    return
    (
        <div><h1>{name} </h1></div>
    )

}

## Naming conventions

1. camelCase : First word is lowercase and next word starts with uppercase; userName, handleClick; JS uses it.

1. PascalCase: Like camelCase but the first word is uppercase as well; UserName, HandleClick. used in REACT

1. snake*case : All lowercase but words are separated by *
   user_name, handle_click

1. kebab-case : All lowercase but words are separated by a - .
   user-name , handle-click

## REACT Routing

React doesn't give routing feature because its not a framework but its a library. Vue.js have routing feature.

We need to use `react-router-dom` package to use react routing.

`npm install react-router-dom` and we need to import it before use it. This package contains lots of methods and objects but we only need routing so we only import only routing feature from it using following import command from it.

`import {BrowserRouter, Routes, Route} from 'react-router-dom'`

```

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>This is the index page </h1>} />
          <Route path="/about" element={<h1>This is about page</h1>} />
          <Route
            path="/contact"
            element={
              <div>
                <h1>This is contact page</h1>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

```

react-router-dom reuqire above exact syntax and <Route /> must have two attribues return (
    <>
    <BrowserRouter>
     <Routes>
         <Route />
      </Routes>
    </BrowserRouter>
    </>
    );called `path=""` for the path that client request and `element={html elements}` that the clients see when visits the route.
