import React, { useState } from "react";
import {
  Dropdown,
  DropdownButton,
  DropdownItem,
  DropdownMenu,
} from "../catalyst/dropdown";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import SwapVertRoundedIcon from "@mui/icons-material/SwapVertRounded";
import { Button } from "../catalyst/button";
import Profile from "./Profile";
import { searchTitle } from "../api/api";
import { useNavigate } from "react-router-dom";
function SearchBar({ setSearch }) {
  const [title, setTitle] = useState("");
  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState(false);

  const navigate = useNavigate();
  const handleSearch = async () => {
    try {
      if (title.trim() == "") {
        alert("Enter a title to search");
        return;
      }
      const userId = localStorage.getItem("fmd_user_id");
      const data = await searchTitle(title, userId);
      console.log(title);
      setResults(data);
      setSearched(true);
      setSearch(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="  md:w-[80vw]   w-full  flex rounded-xl gap-4 justify-center  items-center ">
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
        <div className="  block md:hidden">
          <SearchRoundedIcon className=" " onClick={() => handleSearch()} />
        </div>
        <div className="hidden md:block">
          <Button className=" " onClick={() => handleSearch()}>
            Search
          </Button>
        </div>

        {/* <Dropdown>
          <DropdownButton outline className="h-full  px-2">
            <SwapVertRoundedIcon className="h-5 w-10 !text-black" color="red" />
          </DropdownButton>
          <DropdownMenu className=" rounded-md shadow-md bg-white">
            <DropdownItem>
              <CalendarMonthRoundedIcon className="h-4 w-4 mr-2" />
              Last 7 days
            </DropdownItem>
            <DropdownItem>
              <CalendarMonthRoundedIcon className="h-4 w-4 mr-2" />
              Last 30 days
            </DropdownItem>
            <DropdownItem>
              <CalendarMonthRoundedIcon className="h-4 w-4 mr-2" />
              Last 6 Months
            </DropdownItem>
            <DropdownItem>
              <CalendarMonthRoundedIcon className="h-4 w-4 mr-2" />
              Last 1 year
            </DropdownItem>
          </DropdownMenu>
        </Dropdown> */}
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
        hover:bg-gray-50 hover:shadow transition mt-10
      "
              >
                {console.log(doc)}
                <h3 className="font-semibold text-lg">{doc.title}</h3>
                {doc.text && (
                  <p
                    className="text-gray-500 text-sm mt-1 line-clamp-2"
                    dangerouslySetInnerHTML={{ __html: doc.text }}
                  ></p>
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
