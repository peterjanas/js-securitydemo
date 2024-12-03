import { useState, useEffect } from 'react'
import facade from '../util/apiFacade'

function LoggedIn({ loggedIn }) {
  const [dataFromServer, setDataFromServer] = useState('Loading...')



  useEffect(() => {
    /*TODO*/
    facade.fetchData
  }, [])

  return (
    <div>
      {facade.hasUserAccess('admin', loggedIn) ? (
        <div>
          <h2>Data Received from server</h2>
          <h3>{dataFromServer}</h3>
        </div>
      ) : (
        <div>
          <h2>No go, dude!</h2>
        </div>
      )}
    </div>
  )
}

export default LoggedIn

 {/*
  import React, { useState, useEffect } from "react";
import facade from "../util/apiFacade";

function LoggedIn({ loggedIn }) {
  const [dataFromServer, setDataFromServer] = useState("Loading...");

  useEffect(() => {
    console.log("Fetching data...");
    facade
      .fetchData()
      .then((data) => {
        console.log("Data fetched:", data); // Se hvad der returneres
        setDataFromServer(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setDataFromServer([]); // Fallback til tom array
      });
  }, []);


  return (
    <div>
      <h2>Data Received from server</h2>
      {Array.isArray(dataFromServer) && dataFromServer.length > 0 ? (
        <ul>
          {dataFromServer.map((hotel) => (
            <li key={hotel.id}>
              <strong>{hotel.hotelName}</strong>, {hotel.hotelAddress} ({hotel.hotelType})
            </li>
          ))}
        </ul>
      ) : (
        <p>No data received or data format is incorrect</p>
      )}
    </div>
  );

}

export default LoggedIn;
*/}
