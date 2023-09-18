import React, { useState } from "react";
import { IRepo } from "../../types";
import RepositoryDetail from "../RepositoryDetail/RepositoryDetail";

export const RepositoryItem = ({ repo }: { repo: IRepo }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const isOpenHandler = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div
        className="flex border rounded-md cursor-pointer transition-opacity duration-300 hover:opacity-70"
        onClick={isOpenHandler}>
        <p className="text-lg ml-3 font-bold">{repo.name}</p>
        <p className="text-lg ml-3 font-bold">{repo.description}</p>
        <p className="text-lg ml-3 font-bold">{repo.stargazers_count}</p>
      </div>
      {isOpen && <RepositoryDetail repo={repo} />}
    </>
  );
};
