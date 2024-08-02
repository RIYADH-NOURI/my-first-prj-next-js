import Head from 'next/head';
import style from '/styles/style.module.css'


// components/ExampleComponent.js
const Search = ({handleSearch}) => {
 
  
  return (
    <>
    <div className={style.search_container}>
    <button className={style.search_button}>  <i className={`fa-solid fa-magnifying-glass ${style.icon_search}`}></i>
    </button>
      <input onChange={handleSearch} className={style.search_input} type="text" placeholder="Search for a country..." />
     
    </div>
    </>
  )
}

export default Search