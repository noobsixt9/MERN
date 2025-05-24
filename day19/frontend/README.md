#Day 19

Today we are showing the fetched data from backend in the frontend.
we are currently using `useState` in order to store the data that has been recieved from the backend but the disadvantage of useState is that we can't use the data stored in it in other pages, So later we will use `redux`, `useContext`.

```
const [books, setBook] = useState([])
//we are using an empty array [] as parameter cause we know that the datatype returned is an array
setBook(res.data.data)
```

Now, we have to show that data in the frontend using the cards, we use map method cause it reuturns data.

```
<div className="flex flex-wrap pt-30 px-32 ">
        {books.map((book) => {
          return <Cards />;
        })}
      </div>

```
in this loop, it creates a loop in books object which is an array of object and based on it, it returns <Card /> component.