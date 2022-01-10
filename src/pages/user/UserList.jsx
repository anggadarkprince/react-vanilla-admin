import React, {useState} from 'react'
import './UserList.css'
import {DataGrid, GridRowsProp, GridColDef} from '@mui/x-data-grid';
import {userRows} from "../../dummyData";
import {Link} from "react-router-dom";
import {Add, DeleteOutlined} from "@mui/icons-material";
import PageTitle from "../../components/pageTitle/PageTitle";

export default function UserList() {
    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const columns = [
        {field: 'id', headerName: 'ID', width: 70},
        {
            field: 'user', headerName: 'User', width: 220, renderCell: (params) => {
                return (
                    <div className="userListUser">
                        <img className="userListImage" src={params.row.avatar} alt={params.row.username}/>
                        {params.row.username}
                    </div>
                )
            }
        },
        {field: 'email', headerName: 'Email', width: 280},
        {field: 'status', headerName: 'Status', width: 150},
        {field: 'transaction', headerName: 'Transaction', width: 170},
        {
            field: "action",
            headerName: "Action",
            width: 130,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/users/" + params.row.id}>
                            <button className="userListEdit">Edit</button>
                        </Link>
                        <DeleteOutlined
                            className="userListDelete"
                            onClick={() => handleDelete(params.row.id)}
                        />
                    </>
                );
            },
        },
    ];

    const actions = [
        <Link to={"/users/create"} className="userListCreate">
            Create <Add/>
        </Link>
    ]

    return (
        <div className="userList">
            <PageTitle
                title="User List"
                subtitle="All register user accounts"
                actions={actions}/>

            <DataGrid
                rows={data}
                columns={columns}
                pageSize={10}
                checkboxSelection
                disableSelectionOnClick
                autoHeight/>
        </div>
    )
}