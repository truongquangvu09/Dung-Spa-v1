import * as React from 'react';
import { useState, useEffect } from 'react';

import { DataGrid } from '@mui/x-data-grid';

import { auth, db } from '../../../FireBase/FireBase';
import { collection, query, where, getDocs } from 'firebase/firestore';

function DataTableUsers() {
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
        { field: 'name', headerName: 'Tên người dùng', width: 200 },
        { field: 'email', headerName: 'Email', width: 200 },

        {
            field: 'phone',
            headerName: 'Điện thoại',
            type: 'number',
            width: 200,
        },
    ];
    const rows = [
        {
            id: loggedUser[0].uid,
            name: loggedUser[0].name,
            email: loggedUser[0].email,
            phone: loggedUser[0].phone,
        },
    ];
    return (
        <div style={{ height: 550, width: 1250, fontSize: 20 }}>
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
export default DataTableUsers;
