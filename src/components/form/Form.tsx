import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import DatePicker from "../datepicker/DatePicker";
import SelectComp from "../select/Select";
import {
  Difficulty,
  difficultyOptions,
  Result,
  resultOptions,
  ProblemPlatform,
  problemPlatformOptions,
  problemCategoryOptions,
} from "../../constants/constants";
import CustomMultiSelect from "../custom-multi-select/customMultiSelect";
import { useEffect, useState } from "react";
import { formatDate } from "@/lib/utils";

const options = [
  { label: "React", value: "react" },
  { label: "Vue", value: "vue" },
  { label: "Svelte", value: "svelte" },
];

interface IFormData {
  problemTitle: string;
  problemCategory: string[];
  difficulty: Difficulty;
  timeTaken: number;
  date: Date | string;
  attemptNo: number;
  result: Result;
  problemPlatform: ProblemPlatform;
  problemLink: string;
}

const formSchema = yup.object().shape({
  problemTitle: yup.string().required("Problem title is required"),
  difficulty: yup
    .mixed<Difficulty>()
    .oneOf(Object.values(Difficulty), "Invalid difficulty value")
    .required("Difficulty is required"),
  problemCategory: yup
    .array()
    .of(yup.string())
    .required("Problem category is required"),
  timeTaken: yup
    .number()
    .typeError("Time taken must be a number")
    .required("Time taken is required")
    .positive("Time taken must be a positive number")
    .integer("Time taken must be an integer"),
  date: yup.date().required("Date is required"),
  attemptNo: yup
    .number()
    .typeError("Time taken must be a number")
    .required("Time taken is required")
    .positive("Time taken must be a positive number")
    .integer("Time taken must be an integer"),
  result: yup
    .mixed<Result>()
    .oneOf(Object.values(Result), "Invalid result value")
    .required("Result is required"),
  problemPlatform: yup
    .mixed<ProblemPlatform>()
    .oneOf(Object.values(ProblemPlatform), "Invalid problem platform value")
    .required("Problem Platform is required"),
  problemLink: yup
    .string()
    .url("Enter a valid URL")
    .required("Problem link is required"),
});

function FromComponent() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<IFormData>({
    resolver: yupResolver(formSchema),
    defaultValues: {
      problemCategory: [],
    },
  });

  const [formData, setFormData] = useState<IFormData[]>([]);

  const onSubmit = (data: IFormData) => {
    const { date, ...restData } = data;
    const formattedDate = formatDate(date);

    const formattedData = {
      date: formattedDate,
      ...restData,
    };

    setFormData((prevData) => [...prevData, formattedData]);
    // reset();
  };

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);
  console.log(formData);

  return (
    <div className="">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 gap-x-12 text-slate-300 text-opacity-90 mb-6">
          <div className="w-64">
            <label className="text-xs">Problem Title</label>
            <Input
              {...register("problemTitle")}
              placeholder="Enter Problem Title"
              className="mt-2"
            />
            {errors.problemTitle && (
              <span className="text-xs text-red-500">
                {errors.problemTitle.message}
              </span>
            )}
          </div>

          <div className="w-64">
            <label className="text-xs">Time Taken</label>
            <Input
              {...register("timeTaken")}
              placeholder="Time Taken (in mins)"
              className="mt-2"
            />
            {errors.timeTaken && (
              <span className="text-xs text-red-500">
                {errors.timeTaken.message}
              </span>
            )}
          </div>

          <div className="flex flex-col mt-1 w-64">
            <label className="text-xs">Date</label>
            <Controller
              name="date"
              control={control}
              render={({ field }) => (
                <DatePicker value={field.value} onChange={field.onChange} />
              )}
            />
            {errors.date && (
              <span className="text-xs text-red-500">
                {errors.date.message}
              </span>
            )}
          </div>

          <div className="w-64">
            <label className="text-xs">Problem Category</label>
            <Controller
              name="problemCategory"
              control={control}
              render={({ field }) => (
                <CustomMultiSelect
                  value={field.value}
                  onChange={field.onChange}
                  options={problemCategoryOptions}
                  placeholder="Select multiple category"
                />
              )}
            />

            {errors.problemCategory && (
              <span className="text-xs text-red-500">
                {errors.problemCategory.message}
              </span>
            )}
          </div>

          <div className="w-64">
            <Controller
              name="difficulty"
              control={control}
              render={({ field }) => (
                <SelectComp
                  options={difficultyOptions}
                  label="Difficulty"
                  placeholder="Select difficulty"
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
            {errors.difficulty && (
              <span className="text-xs text-red-500">
                {errors.difficulty.message}
              </span>
            )}
          </div>

          <div className="w-64">
            <label className="text-xs">Attempt Number</label>
            <Input
              {...register("attemptNo")}
              placeholder="Enter Attempt Number"
              className="mt-2"
            />
            {errors.problemTitle && (
              <span className="text-xs text-red-500">
                {errors.problemTitle.message}
              </span>
            )}
          </div>

          <div className="w-64">
            <Controller
              name="result"
              control={control}
              render={({ field }) => (
                <SelectComp
                  options={resultOptions}
                  label="Result"
                  placeholder="Select result"
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
            {errors.result && (
              <span className="text-xs text-red-500">
                {errors.result.message}
              </span>
            )}
          </div>

          <div className="w-64">
            <Controller
              name="problemPlatform"
              control={control}
              render={({ field }) => (
                <SelectComp
                  options={problemPlatformOptions}
                  label="Problem Platform"
                  placeholder="Select problem platform"
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
            {errors.problemPlatform && (
              <span className="text-xs text-red-500">
                {errors.problemPlatform.message}
              </span>
            )}
          </div>

          <div className="w-64">
            <label className="text-xs">Problem Link</label>
            <Input
              {...register("problemLink")}
              placeholder="Problem Link"
              className="mt-2"
            />
            {errors.problemLink && (
              <span className="text-xs text-red-500">
                {errors.problemLink.message}
              </span>
            )}
          </div>
        </div>

        <div className="flex justify-between items-center pt-4">
          <Button type="submit" className="btn px-16 py-6 bg-slate-800">
            Submit
          </Button>
          <div className="text-teal-300 text-xs">* All fields are required</div>
        </div>
      </form>
      <hr className="border-t-2 border-slate-300 opacity-20 mt-10" />
    </div>
  );
}

export default FromComponent;
