import * as React from 'react';
import { useState, useEffect } from 'react';

import { DataGrid, GridToolbar, GridActionsCellItem } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import UploadIcon from '@mui/icons-material/Upload';
import { red } from '@mui/material/colors';
import { Avatar } from '@mui/material';

import { auth, db } from '../../../FireBase/FireBase';
import { collection, query, where, getDocs, deleteDoc, doc } from 'firebase/firestore';

import Loader from '../../Layout/Loader/Loader';

function DataTableProducts() {
    const [data, setData] = useState([]);
    const [isLoader, setIsLoader] = useState(false);

    const handleDelete = async (id) => {
        try {
            await deleteDoc(doc(db, 'products', id));
            setData(data.filter((item) => item.id !== id));
        } catch (err) {}
    };

    useEffect(() => {
        const fetchData = async () => {
            let list = [];
            try {
                const QuerySnapshot = await getDocs(collection(db, 'products'));
                QuerySnapshot.forEach((doc) => {
                    list.push({ id: doc.id, ...doc.data() });
                });
                setData(list);
            } catch (err) {}
        };
        fetchData();
    }, []);
    console.log(data);

    const columns = [
        { field: 'productId', headerName: 'Mã', width: 100, editable: true },
        { field: 'productName', headerName: 'Tên sản phẩm', width: 200, editable: true },
        {
            field: 'productImg',
            headerName: 'Hình ảnh',
            width: 130,
            renderCell: (params) => (
                <div>
                    <Avatar sx={{ width: 50, height: 50 }} variant="square" src={params.row.productImg} alt="" />
                </div>
            ),
        },
        {
            field: 'productPrice',
            headerName: 'Giá(đ)',
            type: 'number',
            width: 130,
        },
        { field: 'productDiscount', headerName: 'Giảm giá(%)', type: 'number', width: 130, editable: true },
        { field: 'productDescription', headerName: 'Mô tả', width: 200, editable: true },
        { field: 'productDescriptionDetail', headerName: 'Mô tả chi tiết', width: 200, editable: true },
        {
            field: 'actions',
            type: 'actions',
            width: 100,
            getActions: (params) => [
                <GridActionsCellItem
                    fontSize="large"
                    icon={<UploadIcon sx={{ fontSize: 20 }} color="success" />}
                    label="Upload"
                />,
                <GridActionsCellItem
                    onClick={() => handleDelete(params.row.id)}
                    icon={<DeleteIcon sx={{ color: red[500], fontSize: 20 }} />}
                    label="Delete"
                />,
            ],
        },
    ];

    return (
        <div style={{ height: 550, width: 1200, fontSize: 20 }}>
            {data.length > 0 ? (
                <DataGrid
                    style={{ fontSize: 20 }}
                    rows={data}
                    columns={columns}
                    pageSize={8}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    components={{
                        Toolbar: GridToolbar,
                    }}
                    componentsProps={{
                        toolbar: {
                            showQuickFilter: true,
                            quickFilterProps: { debounceMs: 500 },
                        },
                    }}
                />
            ) : null}
        </div>
    );
}
export default DataTableProducts;
