//@ts-nocheck

import React, { useEffect, useState } from "react";
import {
  Column,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  PaginationState,
  getPaginationRowModel,
  ColumnFiltersState,
  RowData,
  getFilteredRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  FormDataType,
  difficultyOptions,
  resultOptions,
  problemPlatformOptions,
  problemCategoryOptions,
} from "../../constants/constants";
import useDummyData from "@/hooks/useDummyData";

declare module "@tanstack/react-table" {
  interface ColumnMeta<TData extends RowData, TValue> {
    filterVariant?: "text" | "select";
  }
}

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
    meta: {
      filterVariant: "select",
    },
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
    meta: {
      filterVariant: "select",
    },
  }),
  columnHelper.accessor("problemCategory", {
    header: () => "Problem Category",
    cell: (info) => (
      <span style={{ width: "150px", display: "block" }}>
        {info
          .renderValue()
          ?.map((item, index, array) =>
            index < array.length - 1 ? `${item}, ` : item
          )}
      </span>
    ),
    meta: {
      filterVariant: "select",
    },
  }),
  columnHelper.accessor("problemPlatform", {
    header: () => "Problem Platform",
    cell: (info) => (
      <span style={{ width: "120px", display: "block" }}>
        {info.renderValue()}
      </span>
    ),
    meta: {
      filterVariant: "select",
    },
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
  const data = useDummyData(50);
  // const [data, setData] = useState<FormDataType[]>([]);

  // useEffect(() => {
  //   const storedData = JSON.parse(localStorage.getItem("formData") || "[]");
  //   setData(storedData);
  // }, []);

  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );

  const table = useReactTable({
    data,
    columns,
    filterFns: {},
    state: {
      pagination,
      columnFilters,
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
    debugHeaders: true,
    debugColumns: false,
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
                  {header.isPlaceholder ? null : (
                    <>
                      <div
                        {...{
                          className: header.column.getCanSort()
                            ? "cursor-pointer select-none"
                            : "",
                          onClick: header.column.getToggleSortingHandler(),
                        }}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: " 🔼",
                          desc: " 🔽",
                        }[header.column.getIsSorted() as string] ?? null}
                      </div>

                      {header.column.getCanFilter() ? (
                        <div>
                          <Filter column={header.column} />
                        </div>
                      ) : null}
                    </>
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

      {/* PAGINATION */}
      {data.length > 10 && (
        <div className="flex items-center justify-between my-8 text-sm">
          <div className="flex items-center gap-4">
            <button
              className="border rounded-sm px-1 cursor-pointer"
              onClick={() => table.firstPage()}
              disabled={!table.getCanPreviousPage()}
            >
              {"<<"}
            </button>
            <button
              className="border rounded-sm px-1 cursor-pointer"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              {"<"}
            </button>
            <button
              className="border rounded-sm px-1 cursor-pointer"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              {">"}
            </button>
            <button
              className="border rounded-sm px-1 cursor-pointer"
              onClick={() => table.lastPage()}
              disabled={!table.getCanNextPage()}
            >
              {">>"}
            </button>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <div>Page</div>
              <span>
                {table.getState().pagination.pageIndex + 1} of{" "}
                {table.getPageCount().toLocaleString()}
              </span>
            </span>
            <span className="flex items-center gap-1">
              | Go to page :
              <input
                type="number"
                min="1"
                max={table.getPageCount()}
                defaultValue={table.getState().pagination.pageIndex + 1}
                onChange={(e) => {
                  const page = e.target.value ? Number(e.target.value) - 1 : 0;
                  table.setPageIndex(page);
                }}
                className="border bg-slate-950 rounded-sm w-16 pl-2 ml-1"
              />
            </span>
            <select
              value={table.getState().pagination.pageSize}
              onChange={(e) => {
                table.setPageSize(Number(e.target.value));
              }}
              className="border bg-slate-950 rounded-sm px-1"
            >
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </div>
  );
}

function Filter({ column }: { column: Column<any, unknown> }) {
  const columnFilterValue = column.getFilterValue();
  const { filterVariant } = column.columnDef.meta ?? {};
  const { accessorKey } = column.columnDef ?? {};

  const [filterOptions, setFilterOptions] = useState<any[]>([]);

  useEffect(() => {
    switch (accessorKey) {
      case "result":
        setFilterOptions(resultOptions);
        break;
      case "problemPlatform":
        setFilterOptions(problemPlatformOptions);
        break;
      case "difficulty":
        setFilterOptions(difficultyOptions);
        break;
      case "problemCategory":
        setFilterOptions(problemCategoryOptions);
        break;
      default:
        setFilterOptions([]);
        break;
    }
  }, [accessorKey]);

  return filterVariant === "select" ? (
    <select
      onChange={(e) => column.setFilterValue(e.target.value)}
      value={columnFilterValue?.toString()}
      className="rounded-sm px-2 py-1 bg-slate-950 border border-slate-300 my-2"
    >
      <option value="">All</option>
      {filterOptions &&
        filterOptions?.map((item: any) => (
          <option key={item.key} value={item.key}>
            {item.value}
          </option>
        ))}
    </select>
  ) : accessorKey === "problemTitle" ? (
    <DebouncedInput
      className="rounded-sm px-2 py-1 bg-slate-950 border border-slate-300 my-2"
      onChange={(value) => column.setFilterValue(value)}
      placeholder={`Search...`}
      type="text"
      value={(columnFilterValue ?? "") as string}
    />
  ) : null;
}

function DebouncedInput({
  value: initialValue,
  onChange,
  debounce = 500,
  ...props
}: {
  value: string | number;
  onChange: (value: string | number) => void;
  debounce?: number;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange">) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => clearTimeout(timeout);
  }, [value, debounce]);

  return (
    <input
      {...props}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

export default TableComponent;
