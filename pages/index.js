// pages/index.js
import { useState } from 'react';
import dynamic from 'next/dynamic';
import Header from './Header';
import Search from './Search';
import NavBar from './Nav-bar';


const DisplayData = dynamic(() => import('./Data'), {
  ssr: false,
});

export default function Home({ data }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [region, setRegion] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleRegionFilter = (region) => {
    setRegion(region);
  };
  if (!data) {
    return <div>Loading...</div>;
    
  }

  const filteredData = data.filter((country) => {
    return (
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (region ? country.region === region : true)
    );
  });

  return (
    <>
      <Header />
      <Search handleSearch={handleSearch} />
      <NavBar handleRegionFilter={handleRegionFilter} />
      <DisplayData data={filteredData} />
    </>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch('https://restcountries.com/v3.1/all');
    const data = await res.json();
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        data: [],
      },
    };
  }
}
