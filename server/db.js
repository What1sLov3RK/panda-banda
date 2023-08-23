const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://reaperking:1@panda-db.y9gwfjg.mongodb.net/?retryWrites=true&w=majority";
const fs = require('fs');
const {json} = require("express");


const client = new MongoClient(uri,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db_name = "db";
const db = client.db(db_name);

const drop_table = async function (table_name){
  try {
    await client.connect();
    await db.collection(table_name).deleteMany({});
  }catch(e){
    console.log(e);
  }finally {
    await client.close();
  }
}


const insert_data_in_db = async function (collection, name_set, price_set, ingridients_set, weight_set, amount_set, discount_set, image_path_set) {

  try {
    await client.connect();
    const pizza = db.collection(collection);
    let new_pizza = { name: name_set, price: price_set, ingridients: ingridients_set, weight:weight_set, amount:amount_set, discount:discount_set, image_path:image_path_set };
    await pizza.insertOne(new_pizza);
  } catch (e) {
    console.error(e);
  } finally {

  }
};


const get_all_collection_objects = async function(collection_name){
  let objects = [];
  try{
    await client.connect();
    let cursor = db.collection(collection_name).find();
    for await (const doc of cursor){
      objects.push(doc);
    }
    return objects;
  }catch(e){
    console.log(e);
  }finally{

  }
}




module.exports = {
  db,
  insert_data_in_db,
  get_all_collection_objects,
  drop_table,
};
