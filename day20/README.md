#Day 20

Fetching data of a single book based on dynamic id from the url. Inorder to do that first we must get hold of the id parameter from the url, we can use `useparam()` hook to get the dynamic parameters from the urls and then we have to pass that id to the singlepagedata fetch api route.

```
const [book, setBook] = useState({});
  const bookid = useParams();

  const fetchsinglebook = async () => {
    const res = await axios.get("http://localhost:3000/api/books/" + bookid.id);
    setBook(res.data.datas);
  };

  useEffect(() => {
    fetchsinglebook();
  }, []);

```

## Delete Single Book

Now we will do the same thing as fetching single book based on id, we will delete the book based on the id.

`<button onClick={deletebook()}>` : if we want our function to trigger automatically then we add ()
after function name

`<button onClick={deletebook}>` : This way the function wont get trigger automatically and only after the click is pressed

`<button onClick={(param)=>deletebook(param)}>`: if we have to passs parameter in the function this is how we do it.

```
const deletebook = async () => {
    const res = await axios.delete(
      "http://localhost:3000/api/books/" + bookid.id
    );
    if (res.status == 200) {
      navigate("/");
    } else {
      alert("Something went wrong!");
    }
  };

```

After sucessfull delete we redirect user to the homepage, inorder to do so we use `<Link to="/"></Link>`

### Note: we can only use from <Link > from the jsx code that means we can use it from return () only otherwise we have to use `usenavigate()`
