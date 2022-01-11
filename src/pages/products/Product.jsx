import { Link } from "react-router-dom";
import "./Product.css";
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
                title="Product List"
                subtitle="All available products"
                actions={actions}/>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={productData} dataKey="Sales" title="Sales Performance"/>
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="productInfoImg" />
                        <span className="productName">Apple Airpods</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id:</span>
                            <span className="productInfoValue">123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">sales:</span>
                            <span className="productInfoValue">5123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">active:</span>
                            <span className="productInfoValue">yes</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">in stock:</span>
                            <span className="productInfoValue">no</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <div className="productFormSection">
                            <label>Product Name</label>
                            <input type="text" placeholder="Apple AirPod" />
                        </div>
                        <div className="productFormSection">
                            <label>In Stock</label>
                            <select name="inStock" id="idStock">
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                        <div className="productFormSection">
                        <label>Active</label>
                            <select name="active" id="active">
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="productUploadImg" />
                            <div>
                                <label htmlFor="file" className="buttonPickImage">
                                    <UploadFileOutlined className="pickImageIcon" /> Pick Image
                                </label>
                                <input type="file" id="file" style={{display:"none"}} />
                            </div>
                        </div>
                        <button className="productButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
}