"use client";
import "./globals.css";

import { useEffect, useRef, useState } from "react";
import { SearchContainer, SearchTable } from "@/components/SearchComponents";

export default function Home() {
  const [advocates, setAdvocates] = useState([]);
  const [filteredAdvocates, setFilteredAdvocates] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterName, setFilterName] = useState("firstName");

  useEffect(() => {
    console.log("fetching advocates...");
    fetch("/api/advocates").then((response) => {
      response.json().then((jsonResponse) => {
        setAdvocates(jsonResponse.data);
        setFilteredAdvocates(jsonResponse.data);
      });
    });
  }, []);

  const onSearch = (search, filterBy = filterName) => {
    setSearchTerm(search);
    const filteredAdvocates = advocates.filter((advocate) => {
      if (filterBy === "specialties") {
        return (
          advocate.specialties.filter((specialty) =>
            specialty.toLowerCase().includes(search)
          ).length > 0
        );
      }
      return advocate[filterBy]
        .toString()
        .toLowerCase()
        .includes(search);
    });

    setFilteredAdvocates(filteredAdvocates);
  };

  const onSelectFilter = (e) => {
    setFilterName(e.target.value);
    onSearch(searchTerm, e.target.value)
  };

  const onResetSearch = () => {
    setSearchTerm("");
    setFilterName('firstName')
    setFilteredAdvocates(advocates);
  };

  return (
    <main style={{ margin: "24px" }}>
      <h1 className="text-xl pb-10 pl-10 pt-10">Solace Advocates</h1>

      <SearchContainer
        searchTerm={searchTerm}
        onChange={onSearch}
        onSelectFilter={onSelectFilter}
        onResetSearch={onResetSearch}
      />

      <SearchTable filteredAdvocates={filteredAdvocates} />
    </main>
  );
}
