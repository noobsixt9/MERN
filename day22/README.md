#Day 22
Today we will submit the use input data which is stored in useState.

- Create new function responsible for submitting data to the backend api.We can only send data to the backend as an Object. `axios.post("https://localhost:3000/api/books",{bookName: "c++", bookAuthor: "john doe"})` below we just used bookData cause that is already an Object. Axios already stringfy[in josn format] the object data.

```
  const submitData = () => {
    axios.post("http://localhost:3000/api/books", bookData);
  };
```

- We have to pass event.preventDefault(), this is used to stop default behaviour of an event from happening. here when we submit data the page will reload itself, data will sent in url. 

```
  const submitData = async (event) => {
    event.preventDeault();
    console.log("submit vayo");
    const res = await axios.post("http://localhost:3000/api/books", bookData);
  };
```
