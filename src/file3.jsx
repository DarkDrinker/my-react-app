import React from "react";
import {persons} from "./file2";


export function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

function WelcomePerson({person}) {
    return (
        <div>
            <h1>Hello, {person.firstName}</h1>
            <h2>{person.lastName}</h2>
            <h2>{person.gender}</h2>
            <h2>{person.email}</h2>
            <h2>{person.phone}</h2>
        </div>
    );
  }

export function MultiWelcome() {
    return (
      <div>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edith" />
        <WelcomePerson person={persons[0]} />
        {persons.map((person, index) => <WelcomePerson key={index} person={person} />)}
      </div>
    );
  }

  


