import "../style/style.css";
import Card from "../components/Card";
import { useState } from "react";

function Main() {
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  function delHandler(ind) {
    var x = user.filter((element, index) => {
      return index !== ind;
    });
    setUser(x);
  }

  function getHandler() {
    setIsLoading(true);
    fetch(` https://swapi.dev/api/people/${Math.floor(Math.random() * 83)}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUser([data, ...user]);
      })
      .catch((err) => {
        console.log("Server Error");
      });
    setIsLoading(false);
  }
  return (
    <div className="main-cont">
      <div className="add-con">
        <button onClick={getHandler} disabled={isLoading}>
          Add
        </button>
      </div>
      {!isLoading? user.map((element, index) => {
        console.log(element, index);
        return (
          <Card
            key={index}
            userData={element}
            index={index}
            updater={delHandler}
            all={user}
          ></Card>
        );
      }): <span>Loading...</span>}
    </div>
  );
}

export default Main;
