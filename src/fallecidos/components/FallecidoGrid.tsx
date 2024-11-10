import { FallecidoCard, SimpleFallecido } from "..";

interface Props {
  fallecidos: SimpleFallecido[];
}

export const FallecidoGrid = ({ fallecidos }: Props) => {
  return (
    <div className=" flex flex-wrap gap-10 items-center justify-center">
      {fallecidos.map((fallecido) => (
          <div className=" flex flex-col items-center">
            <FallecidoCard fallecidos={fallecido} />
          </div>
        
      ))}
    </div>
  );
};
