// components/DisplayData.js
import Link from 'next/link';
import style from '/styles/style.module.css';

const DisplayData = ({ data }) => {
  // تحقق من وجود البيانات وتأكد من أنها مصفوفة
  if (!data || !Array.isArray(data)) {
    return <p>No data available</p>;
  }

  return (
    <div className={style.container}>
      {data.slice(0, 246).map((country, index) => (
        <div key={index} className={style.card_container}>
          <Link href={`/country/${country.cca3}`} className={style.link}>
            <div className={style.img_container}>
              <img className={style.image} src={country.flags.png} alt={country.name.common} />
            </div>
            <h2 className={style.title}>{country.name.common}</h2>
            <p className={style.text}>Capital: {country.capital}</p>
            <p className={style.text}>Population: {country.population}</p>
            <p className={style.text}>Region: {country.region}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default DisplayData;
