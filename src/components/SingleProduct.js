import React from "react";

import './SingleProduct.css'

const SingleProduct = ({ name, id, imgURL, price, features }) => {

    return (

        <div className="container-2">

            <div className="features">
                <h3>İşlemci Tipi. Intel Core i7. <br></br>
                    Ram (Sistem Belleği) {features["ram"]} GB.<br></br>
                    SSD Kapasitesi. {features["memory"]} GB.<br></br>
                    İşletim Sistemi. {features["isletimSistemi"]}.<br></br>
                    Garanti Tipi. {features["garanti"]}.</h3>
            </div>

        </div>
    )
}


export default SingleProduct;