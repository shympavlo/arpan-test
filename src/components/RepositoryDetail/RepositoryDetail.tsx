import React from "react";
import { IRepo } from "../../types";

const RepositoryDetail = ({ repo }: { repo: IRepo }) => {
  return (
    <ul className="border rounded-md p-4">
      <li>
        <b>Repo name:</b> {repo.name}
      </li>
      <li>
        <b>Description:</b> {repo.description}
      </li>
      <li>
        <b>Owner:</b> {repo.owner?.login}
      </li>
      <li>
        <b>Rating: ⭐</b> {repo.stargazers_count}
      </li>
      <li>
        <b>Rating:</b>{" "}
        <a href={repo.clone_url} target="_blank" rel="noreferrer">
          {repo.clone_url}
        </a>
      </li>
    </ul>
  );
};

export default RepositoryDetail;
