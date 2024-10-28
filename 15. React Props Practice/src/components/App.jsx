import React from "react";
import Card from "./Card";
import Avatar from "./Avatar.jsx";
import contacts from "../contacts.js";

function App() {
    return (
      <div>
        <h1 className="heading">My Contacts</h1>
        <Avatar img="https://avatarfiles.alphacoders.com/375/375108.png"/>
        {contacts.map((contact) => (
          <Card
            key={contact.id}
            id={contact.id}
            name={contact.name}
            img={contact.imgURL}
            tel={contact.phone}
            email={contact.email}
          />
        ))}
        ;
      </div>
    );
}
  
export default App;