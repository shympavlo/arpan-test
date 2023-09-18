export const apiRoutes = {
  userList: (query: string, page: number) =>
    `search/users?q=${query}&page=${page}`,
  userRepo: (username: string) => `users/${username}/repos`,
};
