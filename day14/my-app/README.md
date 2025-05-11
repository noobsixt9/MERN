# Day 14

## useEffect() Hook

useEffect is a React Hook that lets you perform side effects in function components.

A side effect is anything that affects something outside the component:

    Fetching data
    Setting up subscriptions
    Changing the document title
    Manipulating DOM directly
    Setting timers

we use this hook because we want

    run code when component first loads
    run code when state or props change
    clean up when component is loaded

useEffect() have 2 arguement the second one arguement is options
syntax:
`useEffect(function, Dependecny)`

function: This is the callback function.
Dependency array or list:

## Types of useEffect()

Type 1: When the component is loaded at first a callback function is triggered.

```
  useEffect()
    useEffect(() => {
      console.log("hello world");
    }, []);
```

Type 2:
When there are changes in any state then we can add the state value in dependency array arguement in useEffect(state). In dependecy array arguement we have to give the state that we want to trigger useEffect when the state changes.

```
  const [num, setNum] = useState(0);
  const increasenum = () => {
    setNum(num + 1);
  };

  useEffect(() => {
    console.log("useEffect() triggreed");
  }, [num]);
```

Type 3:

in this type we don't pass any dependency arguement in useEffect(). It will trigger everytime the state changes [without mentioning any states] and also when the page is loaded.

```
  useEffect(() => {
    console.log("type 3 triggered");
  });
```

## Callback Function

A function which is passed as an arguement in another function is called a callback function.

```
function(()={
  alert('callback function')
})

```
