import React, { useState } from 'react';
import './userlist.scss';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { DeleteOutlineOutlined } from '@mui/icons-material';
import {userRows} from "../../dummyData";
import { Link } from "react-router-dom";




export default function UserList() {
  const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'user', headerName: 'Username', width: 200, renderCell: (params) => {
      
    return (

    <div className="userListUser"> 
      <img src={params.row.avatar} className="userImg" alt="" />
      {params.row.username}
    </div>
      )
  } },
  { field: 'email', headerName: 'Email', width: 200 },
  {
    field: 'status',
    headerName: 'Status',
    width: 120
  },
  {
    field: 'transaction',
    headerName: 'Transaction Volume',
  width: 160
},
{
  field: 'action',
  headerName: "Action",
  width: 150,
  renderCell: (params) => {
    return(
    <>
      <Link to={"/user/" + params.row.id}>
        <button className="userListEdit">Edit</button>
      </Link>
      
      <DeleteOutlineOutlined  
        className="userListDelete"
        onClick={() =>handleDelete(params.row.id)} 
        />
      </>
    );
  }
}
];

  const [data, setData] = useState(userRows);
  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id ));
  }

		return (
			<div className="userList">
				<DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
			</div>
		);
	
}
