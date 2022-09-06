const express=require("express")
const dotenv=require("dotenv")
const router=require("./routes/booksRoute")
const books =require("./books")
const logger =require('./middlewares/books.logger')

const app=express();
dotenv.config();
// middlewares
app.use(express.json())
app.use(logger);

//route
app.get("/", (req, res) => {
res.send("<h1>Welcome to our portal</h>")
})

// get all books
app.get("/books", (req, res)=> {
    res.json(books)
})

const PORT = process.env.PORT ||5600

app.listen(PORT, () =>
    console.log(`server is running on ${PORT}` )
)