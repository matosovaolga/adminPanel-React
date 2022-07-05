import React, { Component } from 'react';
import './userlist.scss';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { DeleteOutlineOutlined } from '@mui/icons-material';


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
			<button className="userListEdit">Edit</button>
			<DeleteOutlineOutlined className="userListDelete" />
			</>
		);
	}
}
];

const rows = [
  { 
  	id: 1, 
  	username: 'Jon Snow',  
  	email: 'jon@gmail.com',
  	status: "active",
  	transaction: "$120.00",
  	avatar: "https://themesbrand.com/velzon/html/default/assets/images/users/avatar-1.jpg"
  },
  { 
  	id: 2, 
  	username: 'Jon Snow',  
  	email: 'jon@gmail.com',
  	status: "active",
  	transaction: "$120.00",
  	avatar: "https://themesbrand.com/velzon/html/default/assets/images/users/avatar-1.jpg"
  },

  { 
  	id: 3, 
  	username: 'Jon Snow',  
  	email: 'jon@gmail.com',
  	status: "active",
  	transaction: "$120.00",
  	avatar: "https://themesbrand.com/velzon/html/default/assets/images/users/avatar-1.jpg"
  }, { 
  	id: 4, 
  	username: 'Jon Snow',  
  	email: 'jon@gmail.com',
  	status: "active",
  	transaction: "$120.00",
  	avatar: "https://themesbrand.com/velzon/html/default/assets/images/users/avatar-1.jpg"
  } ,{ 
  	id: 5, 
  	username: 'Jon Snow',  
  	email: 'jon@gmail.com',
  	status: "active",
  	transaction: "$120.00",
  	avatar: "https://themesbrand.com/velzon/html/default/assets/images/users/avatar-1.jpg"
  }, { 
  	id: 6, 
  	username: 'Jon Snow',  
  	email: 'jon@gmail.com',
  	status: "active",
  	transaction: "$120.00",
  	avatar: "https://themesbrand.com/velzon/html/default/assets/images/users/avatar-1.jpg"
  }, { 
  	id: 7, 
  	username: 'Jon Snow',  
  	email: 'jon@gmail.com',
  	status: "active",
  	transaction: "$120.00",
  	avatar: "https://themesbrand.com/velzon/html/default/assets/images/users/avatar-1.jpg"
  }, { 
  	id: 8, 
  	username: 'Jon Snow',  
  	email: 'jon@gmail.com',
  	status: "active",
  	transaction: "$120.00",
  	avatar: "https://themesbrand.com/velzon/html/default/assets/images/users/avatar-1.jpg"
  }, { 
  	id: 9, 
  	username: 'Jon Snow',  
  	email: 'jon@gmail.com',
  	status: "active",
  	transaction: "$120.00",
  	avatar: "https://themesbrand.com/velzon/html/default/assets/images/users/avatar-1.jpg"
  }, { 
  	id: 10, 
  	username: 'Jon Snow',  
  	email: 'jon@gmail.com',
  	status: "active",
  	transaction: "$220.00",
  	avatar: "https://themesbrand.com/velzon/html/default/assets/images/users/avatar-1.jpg"
  } 
  	
];

export default class UserList extends Component {
	render() {
		return (
			<div className="userList">
				<DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
			</div>
		);
	}
}
