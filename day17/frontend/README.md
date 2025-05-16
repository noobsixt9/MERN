#Day 17

Inorder to reuse code we can make them as component, export them and import wherever we want. If we want to make component dynamic we can ue `props` to create dynamic component.

`Note: props data always transfers as an object[key: value] form`

```

 <button className="bg-green-600" type="button">
        {props.name}
      </button>
```

We can also do distructoring as the place of props

```
function Button({ name }) {
  return (
    <>
      <button className="bg-blue-800 text-white">
        {name}
      </button>
    </>
  );
}

export default Button;
```

While creating a link in react we can use `<a href=>` but if we use anchor tag the browser will create a new DOM and redraw all of the html elements which is time consuming so, we choose `<Link to="/single-page">` element which is provided by react and is smoother than anchor tag.
