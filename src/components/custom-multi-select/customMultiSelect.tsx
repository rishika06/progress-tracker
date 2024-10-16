import { useState } from "react";
import {
  MultiSelector,
  MultiSelectorTrigger,
  MultiSelectorInput,
  MultiSelectorContent,
  MultiSelectorList,
  MultiSelectorItem,
} from "../ui/multi-select";

interface CustomMultiSelectProps {
  options: { label: string; value: string }[];
  placeholder: string;
  value: string[];
  onChange: (value: string[]) => void;
}

const CustomMultiSelect = ({
  options,
  placeholder,
  value,
  onChange,
}: CustomMultiSelectProps) => {
  // const [value, setValue] = useState<string[]>([]);
  console.log(value);
  return (
    <MultiSelector values={value} onValuesChange={onChange} loop={false}>
      <MultiSelectorTrigger>
        <MultiSelectorInput
          placeholder={value.length > 0 ? "" : placeholder}
          className="border-slate-200 text-slate-300 text-sm py-1"
        />
      </MultiSelectorTrigger>
      <MultiSelectorContent>
        <MultiSelectorList className="bg-slate-950 text-slate-300">
          {options?.map((option, i) => (
            <MultiSelectorItem key={i} value={option.value}>
              {option.label}
            </MultiSelectorItem>
          ))}
        </MultiSelectorList>
      </MultiSelectorContent>
    </MultiSelector>
  );
};

export default CustomMultiSelect;
