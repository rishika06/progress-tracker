import React, { forwardRef, useId } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelectProps {
  options: { key: string; value: string }[];
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

const SelectComp = forwardRef(
  ({ options, label, placeholder, value, onChange }: SelectProps, ref) => {
    const id = useId();
    return (
      <div className="w-full">
        {label && (
          <label htmlFor={id} className="text-sm">
            {label}
          </label>
        )}
        <Select value={value} onValueChange={onChange}>
          <SelectTrigger className="w-64 mt-2">
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent className="bg-slate-950 text-gray-400">
            {options?.map((item) => (
              <SelectItem key={item.key} value={item.value}>
                {item.value}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    );
  }
);

export default SelectComp;
