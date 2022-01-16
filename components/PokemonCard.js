import Link from "next/Link";
import Image from "next/Image";

function PokemonCard({ pokemon }) {
  return (
    <div className="border w-80 shadow hover:shadow-xl mx-auto">
      <Link href={`/pokemon/${pokemon.id}`}>
        <a>
            <Image loader={() => pokemon.imgUrl} src={pokemon.imgUrl} alt={pokemon.name}
                width={320} height={240}
            />
           
            <div className="p-2 flex justify-between items-baseline">
                <h2 className="text-lg font-bold text-center">
                {pokemon.name}
                </h2>
            </div>
        </a>
      </Link>
    </div>
  );
}

export default PokemonCard;
