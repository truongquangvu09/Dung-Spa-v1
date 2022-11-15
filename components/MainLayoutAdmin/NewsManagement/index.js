import * as React from 'react';
import { useState, useEffect } from 'react';

import { DataGrid, GridToolbar, GridActionsCellItem } from '@mui/x-data-grid';
import { Avatar } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import UploadIcon from '@mui/icons-material/Upload';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import { red } from '@mui/material/colors';

import { db } from '../../../FireBase/FireBase';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';

function DataTableNews() {
    // const [news, setNews] = useState([]);

    // useEffect(() => {
    //     const getNew = () => {
    //         const newsList = [];
    //         const path = 'news';
    //         getDocs(collection(db, path))
    //             .then((QuerySnapshot) => {
    //                 QuerySnapshot.forEach((doc) => {
    //                     newsList.push({
    //                         id: doc.data().newName,
    //                         img: doc.data().newImg,
    //                         time: doc.data().newTime,
    //                         description: doc.data().newDescription,
    //                         description_detail: doc.data().newDescriptionDetail,
    //                     });
    //                 });

    //                 setNews(newsList);
    //             })
    //             .catch((error) => {});
    //     };
    //     getNew();
    // }, []);
    const [data, setData] = useState([]);

    const handleDelete = async (id) => {
        try {
            await deleteDoc(doc(db, 'news', id));
            setData(data.filter((item) => item.id !== id));
        } catch (err) {}
    };

    useEffect(() => {
        const fetchData = async () => {
            let list = [];
            try {
                const QuerySnapshot = await getDocs(collection(db, 'news'));
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
        { field: 'newName', headerName: 'Tên bài viết', width: 200 },
        {
            field: 'newImg',
            headerName: 'Hình ảnh',
            width: 130,
            renderCell: (params) => (
                <div>
                    <Avatar sx={{ width: 50, height: 50 }} variant="square" src={params.row.newImg} alt="" />
                </div>
            ),
        },

        { field: 'newTime', headerName: 'Ngày đăng', type: 'number', width: 200 },
        { field: 'newDescription', headerName: 'Mô tả', width: 250 },
        { field: 'newDescriptionDetail', headerName: 'Mô tả chi tiết', width: 250 },
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
                    components={{ Toolbar: GridToolbar }}
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
export default DataTableNews;
