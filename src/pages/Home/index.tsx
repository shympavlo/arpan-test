import React, { useState } from "react";
import { SearchBar } from "../../components/SearchBar";
import { useGetUserRepo } from "../../hooks/useGetUserRepo";
import { RepositoryList } from "../../components/RepositoryList";

function HomePage() {
  const [search, setSearch] = useState("");
  const { userRepos, isRepoLoading }: any = useGetUserRepo(search);

  console.log(userRepos, "userRepos");

  return (
    <div className="p-2 max-w-3xl my-0 mx-auto py-16">
      <SearchBar value={search} setValue={setSearch} />

      {!isRepoLoading ? (
        <RepositoryList repositories={userRepos} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default HomePage;
