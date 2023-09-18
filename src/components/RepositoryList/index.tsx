import { IRepo } from "../../types";
import { RepositoryItem } from "../RepositoryItem";

export const RepositoryList = ({ repositories }: { repositories: IRepo[] }) => {
  return (
    <div className="mt-3 gap-2 grid grid-col-1">
      {(repositories || []).map((repo: IRepo) => (
        <div key={repo.node_id}>
          <RepositoryItem repo={repo} />
        </div>
      ))}
    </div>
  );
};
