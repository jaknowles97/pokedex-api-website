
import Layout from '../components/Layout'
import PokemonCard from '../components/PokemonCard';
import { getPokemons } from '../lib/pokemons';


export default function Home({ pokemons }) {
  console.log(pokemons)
  return (
    <Layout title="Online Pokedex">
      <h1 className='text-4xl mb-8 text-center'>Online Pokedex</h1>
      <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {pokemons.map((pokemon) => (
          <li key={pokemon.id}>

            <PokemonCard pokemon={pokemon} />
          </li> 
        ))}
      </ul>
    </Layout>
  )
}

export async function getStaticProps(context) {
  const pokemons = await getPokemons();
  return {
    props: {
      pokemons
    }
  }

}