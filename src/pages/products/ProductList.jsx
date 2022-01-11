import React, {useState} from 'react'
import './ProductList.css'
import {DataGrid} from '@mui/x-data-grid';
import {productRows} from "../../dummyData";
import {Link} from "react-router-dom";
import {Add, DeleteOutlined} from "@mui/icons-material";
import PageTitle from "../../components/pageTitle/PageTitle";

export default function ProductList() {
    const [data, setData] = useState(productRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const columns = [
        {field: 'id', headerName: 'ID', width: 70},
        {
            field: 'product', headerName: 'Product', width: 220, renderCell: (params) => {
                return (
                    <div className="productListItem">
                        <img className="productListImg" src={params.row.img} alt="" />
                        {params.row.name}
                    </div>
                )
            }
        },
        {field: 'stock', headerName: 'Stock', width: 280},
        {field: 'status', headerName: 'Status', width: 150},
        {field: 'price', headerName: 'Price', width: 170},
        {
            field: "action",
            headerName: "Action",
            width: 130,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/products/" + params.row.id}>
                            <button className="productListEdit">Edit</button>
                        </Link>
                        <DeleteOutlined
                            className="productListDelete"
                            onClick={() => handleDelete(params.row.id)}
                        />
                    </>
                );
            },
        },
    ];

    const actions = [
        <Link to={"/products/create"} className="productListCreate">
            Create <Add/>
        </Link>
    ]

    return (
        <div className="productList">
            <PageTitle
                title="Product List"
                subtitle="All available products"
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