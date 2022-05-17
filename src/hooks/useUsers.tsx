import { useEffect, useRef, useState } from "react"
import { ApiRequestService } from "../data/ApiRequestService"
import { ApiResponse, User } from "../interfaces/ApiResponse"

export const useUsers = () => {
    const pageRef = useRef(0)

    const [users, setUsers] = useState<User[]>([])

    
    useEffect(() => {
        loadUsers(1)
    }, [])
    
    const loadUsers = async(pageSelected: number) => {

        const response = await ApiRequestService.get<ApiResponse>('/users', {
            params: {
                page: pageRef.current
            }
        })
        if (pageSelected == 1){
            if (response.data.data.length > 0){
                setUsers(response.data.data);
                pageRef.current++;
            }else{
                alert('There are no more pages')
            }
        }else{
            if ( pageRef.current > 1){
                setUsers(response.data.data);
                pageRef.current--;
            }else{
                alert('There are no more pages')
            }
        }
        
    }

    return {
        users,
        loadUsers
    }
}
