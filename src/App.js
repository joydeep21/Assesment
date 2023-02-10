import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './components/MovieList';
import NavBar from './components/NavBar';
import Search from './components/Search';
import { useState } from 'react';



const App = () => {
  const [search, setSearch] = useState("");
  const [rating, setRating] = useState(0);
  const [category, setCategory] = useState("");

  const data = [
    {
      title: "The Matrix",
      rating: 7.5,
      category: "Action",
    },

    {
      title: "Focus",
      rating: 6.9,
      category: "Comedy",
    },
    {
      title: "The Lazarus Effect",
      rating: 6.4,
      category: "Thriller",
    },
    {
      title: "Everly",
      rating: 5.0,
      category: "Action",
    },
    {
      title: "Maps to the Stars",
      rating: 7.5,
      category: "Drama",
    },
  ]


  const searchData = (e) => {
    setSearch(e.target.value);
  }

  const selectedRating = (value) => {
    setRating(value);
    console.log(value);
  }

  const selectedCategory = (e) => {
    setCategory(e.target.value);
  }

  const filterData = data.filter(product => {
    if (rating && product.rating >= rating) {
      return false;
    }
    if (category && product.category !== category) {
      return false;
    }
    if (search && !product.title.toLowerCase().includes(search.toLowerCase())) {
      return false;
    }
    return true;
  });

  return (
    <>
      <NavBar />
      <Search data={data} selectedRating={selectedRating} selectedCategory={selectedCategory} searchData={searchData} />
      <MovieList filterData={filterData} />
    </>
  );
}

export default App;
