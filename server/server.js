const express =require('express');
const app = express();
const PORT = 3080;
const { db,insert_data_in_db, drop_table, get_all_collection_objects } = require('./db');
const cors = require('cors');


app.use(cors());

app.get("/api", (req, res) => {
    get_all_collection_objects('rolls')
        .then(objects => {
            res.json({ objects });
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ error: "An error occurred while fetching data." });
        });
});


app.get("/catalogue/rolls",(req,res)=>{
    get_all_collection_objects('rolls')
        .then(objects => {
            res.json({ objects });
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ error: "An error occurred while fetching data." });
        });
});

app.get("/catalogue/pizza",(req,res)=>{
    get_all_collection_objects('pizza')
        .then(objects => {
            res.json({ objects });
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ error: "An error occurred while fetching data." });
        });

});

app.get("/catalogue/drinks",(req,res)=>{
    get_all_collection_objects('drinks')
        .then(objects => {
            res.json({ objects });
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ error: "An error occurred while fetching data." });
        });

});

app.get("/catalogue/snacks",(req,res)=>{
    get_all_collection_objects('snacks')
        .then(objects => {
            res.json({ objects });
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ error: "An error occurred while fetching data." });
        });

});

app.get("/catalogue/soups",(req,res)=>{
    get_all_collection_objects('soups')
        .then(objects => {
            res.json({ objects });
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ error: "An error occurred while fetching data." });
        });

});

app.get("/catalogue/rolls_sets",(req,res)=>{
    get_all_collection_objects('roll sets')
        .then(objects => {
            res.json({ objects });
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ error: "An error occurred while fetching data." });
        });
});

app.get("/catalogue/wok",(req,res)=>{
    get_all_collection_objects('wok')
        .then(objects => {
            res.json({ objects });
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ error: "An error occurred while fetching data." });
        });

});


app.listen(PORT, ()=> console.log("Server started!"));

//Caching
app.use(express.static('../client/components/FoodCategories.js', {
  maxAge: '10m',
}));

app.use(express.static('../client/styles', {
  maxAge: '10m',
}));

app.use(express.static('../client/pages/MainPage.js', {
  maxAge: '10m',
}));



