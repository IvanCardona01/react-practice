import React, { useRef } from 'react'
import { useEffect, useState } from 'react';
import { ApiRequestService } from '../data/ApiRequestService';
import { ApiResponse, User } from '../interfaces/ApiResponse';
import { useUsers } from '../hooks/useUsers';




export const Users = () => {

    const {users, loadUsers} = useUsers()

    const renderUser = ( {id, first_name, last_name, email, avatar}: User) => {
        return (
            <tr key={id.toString()}>
                <td>
                    <img 
                        src={avatar} 
                        alt={first_name} 
                        style={{
                            width: 35,
                            borderRadius: 100
                        }}/>
                </td>
                <td>{first_name} {last_name}</td>
                <td>{email}</td>
            </tr>
        )
    }

  return (
    <>
        <h2>Http Request</h2>
        <br />
        <table className='table'>
            <thead>
                <tr>
                    <th>Avatar</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>

            <tbody>
                {
                    users.map( user => renderUser(user))
                }
            </tbody>
        </table>
        <button className='btn btn-primary' onClick={page => loadUsers(-1)} >
            Back
        </button>
        &nbsp;
        <button className='btn btn-primary' onClick={page => loadUsers(1)}>
            Next
        </button>
    </>
  )
}
