/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

function Component1() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data:", error);
      });
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "title", headerName: "Title", width: 300 },
    { field: "body", headerName: "Body", width: 400 },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <h3>Posts:</h3>
      <DataGrid
        rows={posts}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5, 10, 20]}
        disableSelectionOnClick
        checkboxSelection
      />
    </div>
  );
}

export default Component1;
