import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import './DataFrontend.css'

const DataFrontend = () => {
  const [carname, setCarName] = useState();
  const [model, setmModel] = useState(0);
  const [color, setColor] = useState();
  const [numberplate, setNumberPlate] = useState();
  const [listOfUsers, setListOfUsers] = useState([]);

  const addUser = () => {
    Axios.post("http://localhost:3001/addUser", {
      carname: carname,
      model: model,
      color: color,
     numberplate:numberplate,
    })
      .then(() => {
        alert("Sended  Data");
      })
      .catch(() => {
        alert("not sendned");
      });
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/read", {
      carname: carname,
      model: model,
      color: color,
     numberplate:numberplate,
    })
      .then((response) => {
        setListOfUsers(response.data);
      })
      .catch(() => {
        console.log("not get");
      });
  }, []);

  return (
    <>
    <div className="mainContainer">
      <label>Car Name:</label>
      <input
        type="text"
        name="name"
        onChange={(event) => {
          setCarName(event.target.value);
        }}
      />

      <br></br>
      <br></br>

      <label>model:</label>
      <input
        type="number"
        name="model"
        onChange={(event) => {
          setmModel(event.target.value);
        }}
      />

      <br></br>
      <br></br>

      <label>color:</label>
      <input
        type="text"
        name="color"
        onChange={(event) => {
          setColor(event.target.value);
        }}
      />

      <br></br>
      <br></br>

      <label>Number Plate</label>
      <input
        type="number"
        name="number"
        onChange={(event) => {
          setNumberPlate(event.target.value);
        }}
      />
    <br></br>

      <button onClick={addUser}>Submit</button>
      </div>

      <div>
      <h1>Data</h1>
      {listOfUsers.map((val) => {
        return (
          <div>
            {/* {" "}
            {val.name}
            {val.age}
            {val.email}
            {val.passowrd} */}
            <table style={{ border: "2px solid red"  , padding :"10px"}}>
              {/* <tr >
                <th>name</th>
                <th>age</th>
                <th>email</th>
              </tr> */}
              <tr className="rows">
                <td>{val.carname}</td>
                <td>{val.model}</td>
                <td>{val.color}</td>
                <td>{numberplate}</td>
                <td>{listOfUsers}</td>
              </tr>
            </table>
          </div>
        );
      })}
    </div>
    </>
  );
};

export default DataFrontend;
