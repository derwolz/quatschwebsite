import React from "react";
const Search = () => {
    return (
        <>
        <form method={"GET"} className="mx-4 my-2">
            
            <input type="search" className="border mx-4"/>
            <button className="rounded-full bg-orange-500 px-4 py-1" type={"submit"}>Search</button>
        </form>
        </>
    )
}
export default Search;