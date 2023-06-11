import { useState } from "react";
import SearchBar from "../../components/SearchBar/search-bar";
import { useAxios } from "../../hooks/useAxios";
import { Accordion } from 'flowbite-react';
import Spinner from "../../components/Spinner/spinner";
import { AiFillStar } from "react-icons/ai";

const BASE_API = import.meta.env.VITE_API_URL;

function Home() {

  const [isOpen] = useState(false)
  const [users, setUsers] = useState([])
  const { request, loading } = useAxios();

  const fetchUsers = async (debouncedQuery: string) => {
    if (debouncedQuery === "") {
      return;
    }
    const response = await request(`${BASE_API}?q=${debouncedQuery}&per_page=5&page=1`);
    const data = await response.items;
    let filteredUsers: any = [];

    //fetch repos
    await Promise.all(
      data.map(async (user: any) => {
        const repos = await request(user.repos_url);
        // const repos = await reposResponse.json();

        filteredUsers.push({
          ...user,
          repos: repos,
        });
      })
    );

    console.log('filteredUsers', filteredUsers)
    setUsers(filteredUsers);
    return filteredUsers
  }

  return (
    <div className="flex w-full px-5 md:px-20 py-[30px] md:py-[56px] flex-col">
      <div className="w-full">
        <SearchBar onFetchUsers={fetchUsers} />
        <p></p>
      </div>

      <div className="w-full py-20">
        <p className="text-2xl text-center py-3">Searched User Lists</p>
        {loading &&
          <div className="flex w-full justify-center">
            <Spinner />
          </div>
        }
        {!loading && users.length <= 0 &&
          <div className="flex w-full justify-center">
            No Users
          </div>
        }

        {!loading && users.length > 0 && (
          <Accordion collapseAll>
            {users?.map((user: any) => (
              <Accordion.Panel key={user.id} isOpen={isOpen} >
                <Accordion.Title className="dark:bg-gray-800 focus:!ring-0 focus dark:focus:bg-gray-700" >
                  {user.login}
                </Accordion.Title>
                <Accordion.Content className="dark:!bg-gray-800">
                  {user.repos !== undefined && user.repos.length !== 0 && user.repos.map((repo: any) => (
                    <div className="border border-gray-500 mb-3 px-8 py-3" key={repo.id}>
                      <div className="font-bold flex justify-between" >
                        <p>{repo.name}</p>
                        <div className="flex items-center">
                          <p className="mr-2">{repo.stargazers_count}</p>
                          <AiFillStar />
                        </div>
                      </div>
                      <div>{repo.description}</div>
                    </div>
                  ))}
                  {user.repos !== undefined && user.repos.length === 0 && (
                    <div className="border border-gray-500 mb-3 px-8 py-3">
                      No Repositories!!!
                    </div>
                  )}
                </Accordion.Content>
              </Accordion.Panel>
            ))}
          </Accordion>
        )}
      </div>
    </div>
  )
}

export default Home;
