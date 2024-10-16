import React, { useEffect, useState } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { FormDataType, dummyFormData } from "../../constants/constants";

const columnHelper = createColumnHelper<FormDataType>();

const columns = [
  columnHelper.accessor("date", {
    header: () => "Date",
    cell: (info) => (
      <span style={{ width: "100px", display: "block" }}>
        {info.getValue()}
      </span>
    ),
  }),
  columnHelper.accessor("problemTitle", {
    header: () => "Problem Title",
    cell: (info) => (
      <span style={{ width: "120px", display: "block" }}>
        {info.renderValue()}
      </span>
    ),
  }),
  columnHelper.accessor("result", {
    header: () => "Result",
    cell: (info) => (
      <span style={{ width: "100px", display: "block" }}>
        {info.renderValue()}
      </span>
    ),
  }),
  columnHelper.accessor("timeTaken", {
    header: () => "Time Taken",
    cell: (info) => (
      <span style={{ width: "70px", display: "block" }}>
        {info.renderValue()}
      </span>
    ),
  }),
  columnHelper.accessor("attemptNo", {
    header: () => "Attempt No",
    cell: (info) => (
      <span style={{ width: "70px", display: "block" }}>
        {info.renderValue()}
      </span>
    ),
  }),
  columnHelper.accessor("difficulty", {
    header: () => "Difficulty",
    cell: (info) => (
      <span style={{ width: "90px", display: "block" }}>
        {info.renderValue()}
      </span>
    ),
  }),
  columnHelper.accessor("problemCategory", {
    header: () => "Problem Category",
    cell: (info) => (
      <span style={{ width: "120px", display: "block" }}>
        {info
          .renderValue()
          ?.map((item, index, array) =>
            index < array.length - 1 ? `${item}, ` : item
          )}
      </span>
    ),
  }),
  columnHelper.accessor("problemPlatform", {
    header: () => "Problem Platform",
    cell: (info) => (
      <span style={{ width: "120px", display: "block" }}>
        {info.renderValue()}
      </span>
    ),
  }),
  columnHelper.accessor("problemLink", {
    header: () => "Problem Link",
    cell: (info) => (
      <a href={info.renderValue()} target="_blank" alt="problem link">
        {info.renderValue()}
      </a>
    ),
  }),
];

function TableComponent() {
  //   const [data] = React.useState<FormDataType[]>(dummyFormData);
  const [data, setData] = useState<FormDataType[]>([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("formData") || "[]");
    setData(storedData);
  }, []);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="text-slate-300 mt-16">
      <h2 className="text-2xl text-center mb-10">
        Solved Problems Summary Table
      </h2>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>

        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="h-4" />
    </div>
  );
}

export default TableComponent;
