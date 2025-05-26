#Day 21

Today we will create a form and send this data to backend database. Inorder to do this we firs need a component for forms which have all the respective input fields such as in database inorder to enter details. There are mutiple ways of sending form details to backend

## First Approach

- Then we have to store first the form data in frontend using `useState()`
  `const [bookName, setbookName] = useState("")`
- Then we have to store the input in frontend

```<input onChange=((e)=>{setbookName(e.target.value)})>

```

- `e` stands for event every html attribute function have event arguement in it which is an object and hold different methods and attributes, e.target is the source from which element the function is triggered

### Problems using First Approach

- we have to create useState for every input, which makes it less effective

## Second Approach

- Here we create one useState with empty object and all of the keys empty

```
  const [bookData, setbookData] = useState({
    bookName: "",
    bookAuthor: "",
    bookGenre: "",
    bookPrice: "",
  });
```

- Then we have to create a function for handling changes

```
  const handleChange = (event) => {
    // let value = event.target.value;
    // let name = event.target.name;
    let { name, value } = event.target;
    setbookData({
      ...bookData,
      [name]: value,
    });
  };
```

- `...bookData` this is a spread operator which is used to spread or collect values, here we say open the bookData and leave it as it is do not change any data and only change the new data. [name] referes to the objects key names and values refers to the values assigned to that key.
