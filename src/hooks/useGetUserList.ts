import { useQuery } from "react-query"
import { apiKeys } from "../constants/apiKeys"
import { client } from "../constants/api";
import { apiRoutes } from "../constants/apiRoutes";
import { useState } from "react";
import { toast } from "react-toastify";

export const useGetUserList = () => {
   const [query, setQuery] = useState('');
   const [page, setPage] = useState<number>(0);

    const {data, isLoading, error}: any = useQuery(
        [apiKeys.userList, query], 
        async () => await client.get(apiRoutes.userList(query, page)), {
        enabled: !!query,
        onError: (error: {message: string}) => {
            toast.error(error.message, {
                position: 'top-left'
            })
            
        }
    })

    return {userList: data?.data?.items, isLoading, error, query, setQuery, page, setPage}
}