"use client";
import { getSectionsDB } from "@/Homepage/getSections";
import { all } from "axios";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const pathname = usePathname();
  console.log(pathname);

  const removeChar = "/";
  const currentSection = pathname.replace(removeChar, "");
  console.log(currentSection);

  const [allSections, setAllSections] = useState([]);
  useEffect(() => {
    const loadSections = async () => {
      const sections = await getSectionsDB();
      setAllSections(sections.services);
    };
  }, [pathname]);

  const [substationData, setSubstationData] = useState([]);
  const loadData = async () => {
    const resp = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/substation/api/${currentSection}`);
    const result = await resp.json();
    console.log(result.sectionList);
    setSubstationData(result.sectionList);
  };
  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="mt-2 p-4">
      <h1 className="text-center underline text-1xl m-1">
        33KV Substation & Adex Engg Related Work Lists
      </h1>

      <div className="overflow-x-auto mt-5">
        <table className="table table-xs">
          <thead className="text-left">
            <tr>
              <th></th>
              <th>Task Name</th>
              <th>Description</th>
              <th>Date</th>
              <th>Tag</th>
              <th className="text-center">Status</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
            {substationData.map((substation, index) => (
              <tr key={substation._id}>
                <th>{index + 1}</th>
                <td>{substation.name}</td>
                <td>{substation.description}</td>
                <td>{substation.date}</td>
                <td>{substation.tag}</td>
                <td
                  className={`text-${
                    substation.status === "Pending" ? "red" : "green"
                  }-400 bg-${
                    substation.status === "Pending" ? "red" : ""
                  }-900 rounded-2xl text-center font-bold`}
                >
                  {substation.status}
                </td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
