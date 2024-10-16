import FromComponent from "./components/form/Form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TableComponent from "./components/table/Table";
import Graph from "./components/graph/Graph";
import "./App.css";

function App() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl overflow-auto px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0 bg-slate-950 flex items-center flex-col">
      <h1 className="text-center text-3xl my-12 text-slate-200">
        Progress Tracker
      </h1>

      {/* FORM */}
      <FromComponent />

      {/* TABS */}
      <Tabs defaultValue="table" className="w-[80%] mt-10">
        <TabsList>
          <TabsTrigger value="table" className="bg-slate-950 text-slate-300">
            Table
          </TabsTrigger>
          <TabsTrigger value="graph" className="bg-slate-950 text-slate-300">
            Graph
          </TabsTrigger>
        </TabsList>
        <TabsContent value="table">
          <TableComponent />
        </TabsContent>
        <TabsContent value="graph">
          <Graph />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default App;
