//TODO: redner the database sent through the server
//STORE DATA IN STATE
//FETCH VALUE FROM SERVER (USEEFFECT)
//PARSE DATA TO JSON
//UPDATE STATE, WITH FETCHED DATA (maybe some wrangling?)
//POLL DATABASE TO KEEP DATA UPDATED (effect)

//display entries from table /add-brain

import { useState, useEffect } from "react";

export default function Entries() {
  const [Entries, setEntries] = useState([]);

  useEffect(() => {
    async function getEntryData() {
      try {
        //fetch data from the server
        const response = await fetch("http://localhost:8080/brain");
        const data = await response.json();
        console.log(data);
        setEntries(data);
      } catch (error) {
        console.error("Data failed to fetch", error);
      }
    }
    getEntryData();

    const EntryInterval = setInterval(getEntryData, 3000);

    return () => clearInterval(EntryInterval);
  }, []);
  console.log(Entries);
  return (
    <>
      {Entries.map((entry) => {
        return (
          <div>
            <h3>{entry.name}</h3>
            <p>{entry.title}</p>
            <p>{entry.entry}</p>
          </div>
        );
      })}
    </>
  );
}
