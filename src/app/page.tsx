"use client";
import "./globals.css";

import { useEffect, useRef, useState } from "react";
import { SearchContainer,  SearchTable } from "@/components/SearchComponents";

export default function Home() {
  const [advocates, setAdvocates] = useState([]);
  const [filteredAdvocates, setFilteredAdvocates] = useState([]);
  const [searchTerm, setSearchTerm] = useState(null);

  useEffect(() => {
    console.log("fetching advocates...");
    fetch("/api/advocates").then((response) => {
      response.json().then((jsonResponse) => {
        setAdvocates(jsonResponse.data);
        setFilteredAdvocates(jsonResponse.data);
      });
    });
  }, []);

  const onSearch = (e) => {
    setSearchTerm(e.target.value);
    const filteredAdvocates = advocates.filter((advocate) => {
      return (
        advocate.firstName.toLowerCase().includes(e.target.value) ||
        advocate.lastName.toLowerCase().includes(e.target.value) ||
        advocate.city.toLowerCase().includes(e.target.value) ||
        advocate.degree.toLowerCase().includes(e.target.value) ||
        advocate.specialties.filter((specialty) =>
          specialty.toLowerCase().includes(e.target.value)
        ).length > 0 ||
        advocate.yearsOfExperience.toString().includes(e.target.value)
      );
    });

    setFilteredAdvocates(filteredAdvocates);
  };

  const onResetSearch = () => {
    setSearchTerm(null)
    setFilteredAdvocates(advocates);
  };

  

  return (
    <main style={{ margin: "24px" }}>
      <h1>Solace Advocates</h1>

      <SearchContainer
        searchTerm={searchTerm}
        onChange={onSearch}
        onResetSearch={onResetSearch}
      />

      <SearchTable filteredAdvocates={filteredAdvocates} />
    </main>
  );
}
