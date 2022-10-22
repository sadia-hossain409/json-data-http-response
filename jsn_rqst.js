const expr=require('express');
const app=expr();

const prs= require('body-parser');

app.use(prs.urlencoded({ extended: false }));
app.use(prs.json());
app.post( (req,res)=>{
const id=req.body.id;
res.send(id);

});
app.listen(3001,()=>{

console.log('http://127.0.0.1:3001');

});


