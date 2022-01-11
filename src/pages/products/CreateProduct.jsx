import { Link } from "react-router-dom";
import "./CreateProduct.css";
import Chart from "../../components/chart/Chart"
import {productData} from "../../dummyData"
import React from "react";
import {Add, UploadFileOutlined} from "@mui/icons-material";
import PageTitle from "../../components/pageTitle/PageTitle";

export default function Product() {
    const actions = [
        <Link to={"/products/create"} className="productAddButton">
            Create <Add/>
        </Link>
    ]

    return (
        <div className="product">
            <PageTitle
                title="Create Product"
                subtitle="Create new products"/>
            <form className="addProductForm">
                <div className="addProductItem">
                    <label>Image</label>
                    <input type="file" id="file" />
                </div>
                <div className="addProductItem">
                    <label>Name</label>
                    <input type="text" placeholder="Apple Airpods" />
                </div>
                <div className="addProductItem">
                    <label>Stock</label>
                    <input type="text" placeholder="123" />
                </div>
                <div className="addProductItem">
                    <label>Active</label>
                    <select name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button className="addProductButton">Create</button>
            </form>
        </div>
    );
}