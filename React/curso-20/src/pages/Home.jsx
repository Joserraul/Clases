import Button from "../components/general/Button";
import Article from "../components/Article";

function Home (){
    return (
      <>
        <section>
          Header
          <Button className="p-2 rounded-md bg-blue-600 text-white">Hola Mundo</Button>
          <Article>
            <h2>Titulo</h2>
            <p>parrafo</p>
          </Article>
        </section>
        <section>
          Products
        </section>
        <section>
          More Products
        </section>
      </>
    )
}

export default Home;