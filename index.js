const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Connection to the database "recipe-app"
const recipe = async function() {
  try{
    const x = await mongoose.connect(MONGODB_URI)
    console.log(`connected to ${x.connection.name}`)
     deleteRecipe()
     updateRecipe()
     addRecipe()
     addManyRecipe()
     const y = await mongoose.disconnect()
     console.log(`disconnected`)
  } catch (err){
    console.log(err)
  }
}


const deleteRecipe = async function (delet){
  try{
    const recipe = await Recipe.deleteOne({title: delet})
  } catch(err){
    console.log(err)
  }
}

const updateRecipe = async function(name) {
  try{
    const recipe = await Recipe.updateOne({title: name}, {duration: 100})
    console.log("updated to 100m")
  } catch(err){
    console.log(err)
  }
}

const addManyRecipe = async function(){
  try{
    const recipe = await Recipe.insertMany(data)
  } catch(err){
    console.log(err)
  }
}

// const addManyRecipe() => Recipe.insertMany(data)
//                               .then(user => console.log('The user is saved and its value is: ', user))
//                               .catch(error => console.log('An error happened while saving a new user:', error));
 


const addRecipe = async function() {
  try {
    const recipe = await Recipe.create({ title: "Empanadas", cuisine: "Argentina" });
  } catch (err){
    console.log(err)
  }
}



recipe()