import { ComponentProps, forwardRef, useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import useDebounce from "../../hooks/useDebounce";

interface SearchBarProps extends Omit<ComponentProps<"div">, "className"> {
  onFetchUsers: (query: string) => void;
}

const SearchBar = forwardRef<
  HTMLDivElement,
  SearchBarProps
>(({ onFetchUsers, ...rest }, ref) => {
  const [searchQuery, setSearchQuery] = useState<string>('')
  const debouncedQuery = useDebounce(searchQuery, 500)
 
  useEffect(() => {
    onFetchUsers(debouncedQuery);
  }, [debouncedQuery])

  return (
    <>
      <div ref={ref} {...rest} className="w-full" >
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <FiSearch />
          </div>
          <input onChange={(e) => setSearchQuery(e.target.value)} type="search" id="default-search" className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-100 rounded-lg bg-gray-50 focus:ring-transparent focus:border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-transparent dark:focus:border-gray-800 focus-visible:ring-transparent dark:focus-visible:outline-none focus-visible:outline-none" placeholder="Search username" />
          <button type="button" onClick={() => onFetchUsers(debouncedQuery)} disabled={searchQuery === "" ? true : false} className="text-white absolute right-2.5 bottom-1.5 bg-gray-700 hover:bg-gray-800 focus:ring-0 focus:outline-none focus:ring-transparent font-medium rounded-lg text-sm px-4 py-1.5 dark:bg-gray-800 dark:hover:bg-gray-900 dark:focus:ring-gray-800 disabled:text-gray-300 disabled:bg-gray-100 dark:disabled:text-gray-700 dark:disabled:bg-gray-600">Search</button>
        </div>
      </div>
    </>
  );
});

export default SearchBar;
