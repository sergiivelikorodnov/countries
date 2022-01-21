import { Controls } from '../components/controls/Controls';
import axios from 'axios';
import { useEffect, useState } from 'react'
import { ALL_COUNTRIES } from '../config';
import { List } from '../components/list/List';
import { Card } from '../components/card/Card';
import { useNavigate } from 'react-router-dom';

export const Home = ({countries, setCountries}) => {
    const history = useNavigate();
    const [filteredCountries, setFilteredCountries] = useState(countries);

    const handlerSearch = (search, region) =>{
        let data = [...countries];

        if(region){
            data = data.filter(country => country.region.includes(region))
        }

        if(search){
            data = data.filter(country => country.name.toLowerCase().includes(search.toLowerCase()))
        }

        setFilteredCountries(data);
    }

    useEffect(()=>{
        if(!countries.length)
      axios.get(ALL_COUNTRIES)
      .then(
        ({data}) => setCountries(data)
        )
    },[countries, setCountries])

    useEffect(()=>{
        handlerSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[countries])

    return (
        <>
        <Controls onSearch={handlerSearch}/>
        <List>
        {filteredCountries.map((country)=>{
          const countryInfo = {
            img: country.flags.png,
            name: country.name,
            info: [{
              title: 'Population',
              description: country.population.toLocaleString(),
            },
            {
              title: 'Region',
              description: country.region,
            },
            {
              title: 'Capital',
              description: country.capital,
            }
            ]
            };

            return <Card key={country.name} onClick={()=>history(`country/${country.name}`)} {...countryInfo}/>
        })}

        </List>
        </>
    )
}
