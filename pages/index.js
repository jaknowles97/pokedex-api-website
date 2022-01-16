
import Layout from '../components/Layout'
import { getPokemons } from '../lib/pokemons';


export default function Home({ pokemons }) {
  console.log(pokemons)
  return (
    <Layout title="Online Pokedex">
      <h1 className='text-4xl mb-8 text-center'>Online Pokedex</h1>
      <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center'>
        {pokemons.map((pokemon) => (
          <li key={pokemon.id}>
            <p>{pokemon.name}</p>
            <p>image url: {pokemon.imgUrl}</p>
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