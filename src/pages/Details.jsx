import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {useState, useEffect} from 'react';
import {IoArrowBack} from'react-icons/io5'
import { searchByCountry } from '../config';
import { Button } from '../components/button/Button';
import { Info } from '../components/info/Info';

export const Details = () => {
    const {name} = useParams();
    const history = useNavigate();
    const [country, setCountry] = useState(null);

    useEffect(()=>{
        axios.get(searchByCountry(name))
        .then(
            ({data}) => setCountry(data[0])
        )
    },[name]);

    return (
        <div>
            <Button onClick={() => history(-1)}>
                <IoArrowBack /> Back
            </Button>
            {country && <Info push={history} {...country}/>}

        </div>
    )
}
