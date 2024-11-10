import { Sidebar } from "../../components";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" overflow-y-scroll w-screen h-screen antialiased text-slate-700 selection:bg-blue-600 selection:text-white">
      <div className="flex">
        <Sidebar />
        <div className=" w-full bg-slate-100 text-slate-700">{children}</div>
      </div>
    </div>
  );
}
