import * as React from 'react';
import { useState, useEffect } from 'react';

import { DataGrid } from '@mui/x-data-grid';

import { auth, db } from '../../../FireBase/FireBase';
import { collection, query, where, getDocs } from 'firebase/firestore';

function DataTableNews() {
    function GetCurrentUser() {
        const [user, setUser] = useState('');
        const usersCollectionRef = collection(db, 'users');

        useEffect(() => {
            auth.onAuthStateChanged((userLogged) => {
                if (userLogged) {
                    const getUSers = async () => {
                        const q = query(collection(db, 'users'), where('uid', '==', userLogged.uid));
                        const data = await getDocs(q);
                        setUser(
                            data.docs.map((doc) => ({
                                ...doc.data(),
                                id: doc.id,
                            })),
                        );
                    };
                    getUSers();
                } else {
                    setUser(null);
                }
            });
        }, []);
        return user;
    }
    const loggedUser = GetCurrentUser();
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Tên', width: 200 },
        { field: 'img', headerName: 'Hình ảnh', width: 130 },
        {
            field: 'date',
            headerName: 'Ngày đăng',
            type: 'number',
            width: 130,
            valueGetter: (params) => `${params.row.day || ''} ${params.row.month || ''} ${params.row.year || ''}`,
        },
        { field: 'blog', headerName: 'Mô tả', width: 200 },
        { field: 'why', headerName: 'Vấn đề', width: 200 },
    ];
    const rows = [
        {
            id: 1,
            name: 'Snow',
            img: 'Jon',
            blog: 'abc',
            why: 'abc',
            day: 1,
            month: 1,
            year: 2022,
        },
        {
            id: 1,
            name: 'Snow',
            img: 'Jon',
            blog: 'abc',
            why: 'abc',
            day: 1,
            month: 1,
            year: 2022,
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
export default DataTableNews;
