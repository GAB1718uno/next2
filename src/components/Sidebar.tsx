import Image from "next/image";
import { IoAddCircle, IoAppsSharp, IoAt, IoFootball } from "react-icons/io5";
import { SidebarMenuItem } from "./SidebarMenuItem";

const menuItems = [
  {
    path: "/dashboard/main",
    icon: <IoAppsSharp size={50} />,
    title: "Principal",
    subTitle: "Visión Global de los servicios prestados",
  },
  {
    path: "/dashboard/counter",
    icon: <IoAddCircle size={50} />,
    title: "Contador",
    subTitle: "Contador de informes",
  },
  {
    path: "/dashboard/reducciones",
    icon: <IoAt size={50} />,
    title: "Reducciones",
    subTitle: "Trabajos de Reducciones",
  },
  {
    path: "/dashboard/fallecidos",
    icon: <IoFootball size={50} />,
    title: "Fallecidos",
    subTitle: "Relación de fallecidos",
  },
  {
    path: "/dashboard/muerto/",
    icon: <IoFootball size={50} />,
    title: "Por Apellidos",
    subTitle: "Relación de fallecidos con un mismo apellido",
  },
];

export const Sidebar = () => {
  return (
    <div
      id="menu"
      style={{ width: "500px" }}
      className=" p-2 pr-2 bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 h-screen-full overflow-y-scroll"
    >
      <div id="logo" className="my-4 px-6">
        <h1 className="text-lg md:text-2xl font-bold text-white">
          Cementerio<span className="text-blue-500 ">.com.es</span>
        </h1>
        <p className="text-slate-500 text-sm">
          Administra tus acciones y actividades
        </p>
      </div>
      <div id="profile" className="px-6 py-5">
        <p className="text-slate-500 pb-2">Bienvenido de vuelta,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            {
              <Image
                className="rounded-full"
                src="/gilson_dni0002_2.jpg"
                loading="lazy"
                alt="Avatar del Usuario"
                width={40}
                height={55}
              />
            }
            {/* https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80 */}
          </span>
          <span className="text-sm md:text-base font-bold">
            Gilson Albino Barbosa
          </span>
        </a>
      </div>
      <div id="nav" className="w-full px-3">
        {menuItems.map((menuItemsMapeado) => (
          <SidebarMenuItem key={menuItemsMapeado.path} {...menuItemsMapeado} />
        ))}
      </div>
    </div>
  );
};
