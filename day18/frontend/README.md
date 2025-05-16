#Day 18

Integrating frontend and backend. Inorder to do so we have to request the backend api which is responsible for fetching and submitting data to the database.

`fetch()`: this is a method provided by JS which is used to make request to a network which we will use to request to the backend api.

`axios`: This is a node package that is an alternative of fetch() method, axios can be used with multiple different programming language and frameworks. axios and fetch work in similar and axios simplified the use of fetch() method.

`npm install axios`

## CORS

Without Cross Origin Resource Sharing we can't acess the resource from different origin where origin means the schema,hostname, port of URL. we can do this using node package called `cors` which we first need to install it in the our backend code and allow the origin of our frontend

```
app.use(
  cors({
    origin: "http://localhost.com",
    origin : ["https://localhost","https://google.com","https://evil.com"]
    methods: ['GET','POST']
    credentials: true
  })
);
```
