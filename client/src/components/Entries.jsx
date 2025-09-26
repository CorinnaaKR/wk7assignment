//TODO: redner the database sent through the server
//STORE DATA IN STATE
//FETCH VALUE FROM SERVER (USEEFFECT)
//PARSE DATA TO JSON
//UPDATE STATE, WITH FETCHED DATA (maybe some wrangling?)
//POLL DATABASE TO KEEP DATA UPDATED (effect)

app.get("/brain", async (_, res) => {
  //error handling
  //try ... catch
  try {
    //query the database to send me the biscuits data
    //test your query in the SQL editor first to check syntax
    const data = await db.query(`SELECT name, type, entry FROM brain;`);
    //wrangling the database data Result object
    res.json(data.rows);
  } catch (error) {
    console.error("Error in the brain route", error);
    res.status(500).json({ success: false });
  }
});
