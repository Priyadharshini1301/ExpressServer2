const express=require("express");
const app=express();
const portnum=3002;

app.use(express.json());

const studentslist=[
    {
        name:"Priya",
        age:19
    },
    {
        name:"Kavi",
        age:20
    }
]

const bookslist=[
    {
        book:"Wings Of Fire",
        author:"Abdul Kalam"
    },
    {
        book:"Queen Of Fire",
        author:"Devika Rangachari"
    }
]

const languagelist=[
    {
        lang:"C++"
    },
    {
        lang:"Python"
    },
    {
        lang:"Java"
    }
]

app.listen(portnum,()=>{console.log(`Server is running on port number: ${portnum}`)});


app.get('/namelist',(request,response)=>
{
    response.send(studentslist);
});
app.get('/booklist',(request,response)=>
{
    response.send(bookslist);
});
app.get('/langlist',(request,response)=>
{
    response.send(languagelist);
});


app.post('/namelist',(request,response)=>{
    console.log(request.body);
    studentslist.push(request.body);
    response.send(studentslist);
    response.send(201);
})
app.post('/booklist',(request,response)=>{
    console.log(request.body);
    bookslist.push(request.body);
    response.send(bookslist);
    response.send(201);
})
app.post('/langlist',(request,response)=>{
    console.log(request.body);
    languagelist.push(request.body);
    response.send(languagelist);
    response.send(201);
})
