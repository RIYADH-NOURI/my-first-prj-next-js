// pages/country/[cca3].js
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import Header from '/pages/Header.js';  
import style from '/styles/Displaydata.module.css';
import Link from 'next/link';
import Image from 'next/image';


const CountryDetails = ({ country }) => {
  const router = useRouter();
  const { cca3 } = router.query;

  if (!country) {
    return <div>Loading...</div>;
  }

  const nativeName = country.name.nativeName 
    ? Object.values(country.name.nativeName)[0]?.common || 'N/A'
    : 'N/A';
  const topLevelDomain = country.tld ? country.tld[0] : 'N/A';
  const currencies = country.currencies 
    ? Object.values(country.currencies).map((currency) => currency.name).join(', ') 
    : 'N/A';
    const borders = country.borders
    ? Object.values(country.borders).map ((border) => border).join(', ') 
    : 'N/A';
  
   
  const languages = country.languages 
    ? Object.values(country.languages).join(', ') 
    : 'N/A';
  
  return (
    <>
      <Header />
      <Link className={style.back_link} href="/">
      <div className={style.back_container}>
       
          <i className={`fa-solid fa-arrow-left ${style.icon}`}></i> Back
      </div>
      </Link>

      <div className={style.container}>
        <div className={style.image_container}>
          <Image
            className={style.image}
            src={country.flags.png}
            alt={country.name.common}
            width={400}
            height={300}
          />
        </div>
        <div className={style.info_container}>
          <div className={style.left_info}>
            <h1 className={style.title}>{country.name.common}</h1>
            <p><strong>Native Name:</strong> {nativeName}</p>
            <p><strong>Population:</strong> {country.population}</p>
            <p><strong>Region:</strong> {country.region}</p>
            <p><strong>Subregion:</strong> {country.subregion}</p>
            <p><strong>Capital:</strong> {country.capital}</p>
          </div>
          <div className={style.right_info}>
            <p><strong>Top Level Domain:</strong> {topLevelDomain}</p>
            <p><strong>Currencies:</strong> {currencies}</p>
            <p><strong>Languages:</strong> {languages}</p>
          </div>
          <div className={style.bottom_info}>
            <p><strong>Border Countries :</strong></p>
            <ul className={style.borders}>
              {borders.split(', ').map((border) => (
                <li  className={style.border} key={border}>
                  <Link href={`/country/${border}`} className={style.link}>
                    {border}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps({ params }) {
  try {
    const res = await fetch(`https://restcountries.com/v3.1/alpha/${params.cca3}`);
    if (!res.ok) {
      throw new Error('Failed to fetch country data');
    }
    const data = await res.json();

    return {
      props: {
        country: data[0],
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        country: null,
      },
    };
  }
}

export default CountryDetails;
