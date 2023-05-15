import ListCategories from "../componentes/ListCategories"
import ListPosts from "../componentes/ListPosts"

const Home = () => {
  return (
    <main>
      <div className="container">
        <h2 className="title-page">Pet noticias</h2>
      </div>
      <ListCategories></ListCategories>
      <ListPosts url="/posts"></ListPosts>
    </main>
  )
}

export default Home
