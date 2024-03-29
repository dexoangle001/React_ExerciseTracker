import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component";
import ExerciseList from "./components/exercises-list.components"
import EditExercise from "./components/edit-exercises.component";
import CreateExercise from "./components/create-exercises.components";
import CreateUser from "./components/create-user.components";


function App(){
  return(
    <Router>
      <div className="container">
      <Navbar />
      <br />
      <Route path="/" exact component={ExerciseList} />
      <Route path="/edit/:id"  exact component={EditExercise} />
      <Route path="/create" exact component={CreateExercise} />
      <Route path="/user"  exact component={CreateUser} />

      </div>
    
    </Router>
  );
}

//npm install bootstrap

export default App;