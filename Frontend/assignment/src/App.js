import UserData from "./components/UserData";
import { useState, useEffect } from "react";


function App() {

  // pagination
  const [page, setPage] = useState(1);
  const [perPage] = useState(3);

  // fecth user data
  const [data, setData] = useState([]);

  const getUserData = (page, perPage) => {

    fetch(`http://localhost:3001/api/data/users?_page=${page}&_limit=${perPage}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }).then(responce => responce.json())
      .then((responceData) => {
        console.log(responceData);
        setData(responceData.data);
      }).catch((err) => {
        console.log("error", err);
      })
  }

  useEffect(() => {
    getUserData(page, perPage);
  }, [page, perPage]);

  return (
    <>
      <UserData Data={data} page={page} setPage={setPage} perPage={perPage} />
    </>
  );
}

export default App;
