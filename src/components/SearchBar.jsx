import React, { useState } from "react";
import {
  Dropdown,
  DropdownButton,
  DropdownHeading,
  DropdownItem,
  DropdownMenu,
} from "../catalyst/dropdown";
import { ArrowsUpDownIcon, CalendarIcon } from "@heroicons/react/24/outline";
import { Button } from "../catalyst/button";
import Profile from "./Profile";
import { searchTitle } from "../api/api";
import { useNavigate } from "react-router-dom";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/solid";
function SearchBar({ setSearch }) {
  const [title, setTitle] = useState("");
  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState(false);

  const navigate = useNavigate();
  const handleSearch = async () => {
    try {
      const data = await searchTitle(title);
      setResults(data);
      setSearched(true);
      setSearch(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="  md:w-[80vw]  w-full  flex rounded-xl gap-4 justify-center  items-center ">
        <input
          type="text"
          className="border p-2 px-4 w-full rounded-xl "
          placeholder="Search Documents"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key == "Enter") {
              handleSearch();
            }
          }}
        />
        <div className=" w-24 block md:hidden">
          <MagnifyingGlassCircleIcon
            className=" "
            onClick={() => handleSearch()}
          />
        </div>
        <div className="hidden md:block">
          <Button className=" " onClick={() => handleSearch()}>
            Search
          </Button>
        </div>

        <Dropdown>
          <DropdownButton outline className="h-full  px-2">
            <ArrowsUpDownIcon className="h-5 w-10 !text-black" color="red" />
          </DropdownButton>
          <DropdownMenu className="border rounded-md shadow-md bg-white">
            <DropdownItem>
              <CalendarIcon className="h-4 w-4 mr-2" />
              Last 7 days
            </DropdownItem>
            <DropdownItem>
              <CalendarIcon className="h-4 w-4 mr-2" />
              Last 30 days
            </DropdownItem>
            <DropdownItem>
              <CalendarIcon className="h-4 w-4 mr-2" />
              Last 6 Months
            </DropdownItem>
            <DropdownItem>
              <CalendarIcon className="h-4 w-4 mr-2" />
              Last 1 year
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Profile />
      </div>

      <div>
        {results.length > 0 ? (
          <div>
            {results.map((doc) => (
              <div
                key={doc._id}
                onClick={() => navigate(`/edit-document/${doc._id}`)}
                className="
        border rounded-lg p-4 cursor-pointer 
        hover:bg-gray-50 hover:shadow transition
      "
              >
                <h3 className="font-semibold text-lg">{doc.title}</h3>
                {doc.description && (
                  <p className="text-gray-500 text-sm mt-1 line-clamp-2">
                    {doc.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        ) : (
          ""
        )}

        {searched && results.length === 0 && title && (
          <div className="text-gray-500 text-center">No results found</div>
        )}
      </div>
    </>
  );
}

export default SearchBar;
