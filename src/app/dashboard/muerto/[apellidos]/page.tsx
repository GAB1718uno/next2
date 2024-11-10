
import { SimpleFallecido } from "@/fallecidos";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import FallecidoItem from "@/fallecidos/components/FallecidoItem";

// Asi es como se formatea fecha en React facilmente
/* var date = new Date("2016-01-30");
var formattedDate = format(date, "dd-MM-yyyy");
console.log(formattedDate); */

interface Props {
  params: { apellidos: string };
}

/* export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const fallecido = await obtenerFallecidoPorApellido(params.apellidos);

  try {
    return {
      title: `${fallecido![0].name}${" "}${fallecido![0].apellidos}`,
      description: `Esta página está dedicada en memoria de ${
        fallecido![0].name
      }${" "}${fallecido![0].apellidos}`,
    };
  } catch (error) {
    return {
      title: "Fallecido no encontrado",
      description: "No se encuentra fallecido con las especificaciones dadas",
    };
  }
}
 */
export const obtenerFallecidoPorApellido = async (
  apellidos: string
): Promise<SimpleFallecido[] | undefined> => {
  try {
    const fallecidosPorApellido = await fetch(
      `http://167.71.36.17/api/muertos/busqueda/apellido/${apellidos}`,
      {
        cache: "force-cache",
        /* next: {
          revalidate: 600,
        }, */
      }
    ).then((response) => response.json());

    console.log(fallecidosPorApellido);

    return fallecidosPorApellido;
  } catch (error) {
    return notFound();
  }
};

export default async function MuertoPage({ params }: Props) {
  const fallecidoN = await obtenerFallecidoPorApellido(params.apellidos);
  console.log(fallecidoN);



  return (
    <div className=" mb-3">
      <p className=" text-4xl"> ESto que EEESSSSS</p>
      {fallecidoN?.map((fallecido) => (
        <FallecidoItem fallecidos={fallecido} />
      ))}
    </div>
  );
}
