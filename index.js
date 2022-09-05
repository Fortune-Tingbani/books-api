const express=require("express")
const dotenv=require("dotenv")
const results=require("./results")
const router=require("./routes/booksRoute")

const app=express();
dotenv.config();
// middlewares
app.use(logger);

app.use(express.json())


//route
app.get("/", (req, res) => {
res.send("<h1>Welcome to our portal</h>")
})

// get all books
app.get("/books", (req, res)=> {
    res.json(books)
})

const PORT = process.env.PORT ||5000

app.listen(PORT, () =>
    console.log(`server is running on ${PORT}` )
)