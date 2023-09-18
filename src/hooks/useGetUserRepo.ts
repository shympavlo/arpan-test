import { useQuery } from "react-query"
import { apiKeys } from "../constants/apiKeys"
import { client } from "../constants/api"
import { apiRoutes } from "../constants/apiRoutes"

export const useGetUserRepo = (username: string) => {
    const {data, isLoading: isRepoLoading, error} = useQuery(
        [apiKeys.userRepo, username], 
        async () => await client.get(apiRoutes.userRepo(username)),
        {enabled: !!username}
    )

    return {userRepos: data?.data, isRepoLoading, error};
}