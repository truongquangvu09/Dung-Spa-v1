import * as React from 'react';
import { useState, useEffect } from 'react';

import { DataGrid } from '@mui/x-data-grid';

import { auth, db } from '../../../FireBase/FireBase';
import { collection, query, where, getDocs } from 'firebase/firestore';

function DataTableProducts() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const getProduct = () => {
            const productList = [];
            const path = 'products';
            getDocs(collection(db, path))
                .then((QuerySnapshot) => {
                    QuerySnapshot.forEach((doc) => {
                        productList.push({ ...doc.data(), id: doc.id });
                        console.log(doc.id, '=>', doc.data());
                    });
                    setProducts(productList);
                })
                .catch((error) => {});
        };
        getProduct();
    }, []);

    const columns = [
        { field: 'id', headerName: 'Mã', width: 70 },
        { field: 'name', headerName: 'Tên sản phẩm', width: 200 },
        { field: 'img', headerName: 'Hình ảnh', width: 130 },

        {
            field: 'price',
            headerName: 'Giá',
            type: 'number',
            width: 130,
        },
        { field: 'price_discount', headerName: 'Giảm giá(%)', type: 'number', width: 130 },
        { field: 'description', headerName: 'Mô tả', width: 200 },
        { field: ' description_detail', headerName: 'Mô tả chi tiết', width: 200 },
    ];

    const rows = [
        {
            id: 1,
            name: 'Snow',
            img: 'Jon',
            price: 35,
            price_discount: 14,
            description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            description_detail: '',
        },
    ];

    return (
        <div style={{ height: 550, width: 1200, fontSize: 20 }}>
            <DataGrid
                style={{ fontSize: 20 }}
                rows={rows}
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    );
}
export default DataTableProducts;
