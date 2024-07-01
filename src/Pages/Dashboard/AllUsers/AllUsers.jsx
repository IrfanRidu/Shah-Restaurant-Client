import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { FaTrashAlt } from 'react-icons/fa';
import { FaUsers } from 'react-icons/fa6';
import Swal from 'sweetalert2';

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })
    const handleMakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            // console.log(user._id)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        title: `${user.name} is an admin now!`,
                        timer: 800,
                        showClass: {
                            popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `
                        },
                        hideClass: {
                            popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `
                        }
                    });

                }
            })
    }
    const handleDeleteUser = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        // console.log(res);
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });

    }
    return (
        <div>
            <div className='flex justify-evenly my-4'>
                <h2 className='text-3-xl'>All Users</h2>
                <h2 className='text-3-xl'>Total Users: {users.length}</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>

                            </th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1} </th>
                                <td>
                                    {user.name}
                                </td>
                                <td>
                                    {user.email}
                                </td>
                                <td>
                                    {user.role === 'admin' ? 'Admin' : <button onClick={() => handleMakeAdmin(user)} className="btn bg-orange-500  text-red-600"><FaUsers className='' /></button>
                                    }
                                </td>

                                <td>  <button onClick={() => handleDeleteUser(user)} className="btn btn-ghost btn-xs text-red-600"><FaTrashAlt className='text-white text-2xl' /></button></td>

                                <th>

                                </th>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllUsers;

