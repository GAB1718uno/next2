import { FallecidoGrid } from "@/fallecidos";
import { obtenerFallecidoPorApellido } from "./[apellidos]/page";

async function obtenerFallecidos(apelli:string) {
  
  if (!apelli) return [];
  /* const handleSubmit = async (event:any) => {
    event.preventDefault();

    const apelli = event.target.elements.apelli.value
 */
    const fallecidos = obtenerFallecidoPorApellido(apelli);
    console.log(fallecidos)
    return fallecidos || []
  }


export default async function PageMuerto({searchParams}: {searchParams: {apelli?:string}}) {
  
const apelli = searchParams?.apelli || '';
const fallecidos = await obtenerFallecidos(apelli)
  
  
  return (
    <>
    <div>
      <div className=" bg-cyan-500 p-2 rounded-md">Buscar por Apellidos</div>
      <div className=" mt-1"> </div>
      <form method="GET" className=" mt-3">
      <label className=" p-2" htmlFor="apellidos">
        {" "}
        Apellido(s){" "}
      </label>
      <input
        type="text"
        className=" border-2 rounded-md"
        name="apelli"
        id="apellidos"
        defaultValue={apelli}
        />
      <div>
      < input
        type="submit" 
        className=" border-t-2 bg-blue-700 py-1 px-2 text-white rounded hover:bg-blue-500 transition-all"
        value="Enviar"/>

      </div>
    </form> 
  
    </div>
    <div>
      { fallecidos && fallecidos?.length > 0 ? ( 
      <div className=" mt-4">
        <h3>Resultados</h3>
        <FallecidoGrid fallecidos={fallecidos} />
        {/* <ul>
          {fallecidos?.map((fallecido) => (
            <li key={fallecido.id} className=" mb-4">
              <h1 className=" mt-5 font-bold text-blue-700 text-3xl"> {fallecido.name}</h1>
              <h5>{fallecido.apellidos}</h5>
            </li>
          ))}
        </ul> */}
      </div>
      ) : (apelli && <p>No se encontró nadie con el apellido propuesto</p>)}
      
      
      </div>

        </>
  );
}