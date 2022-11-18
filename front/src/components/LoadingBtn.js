import LoadingButton from '@mui/lab/LoadingButton';
import {useState} from 'react';
import ledServices from '../services/ledServices';

const LoadingBtn = ({led , updateLed}) => {
    const [loading, setLoading] = useState(false);

    const handleClick = async() => {
        setLoading(true);
        const res = await ledServices.ledControl(led);
        if(res.status === 200){
            setLoading(false)
            updateLed(res.data);
        }


    }
    return (
        <LoadingButton
            loading={loading}
            variant={led.state ? 'contained' : 'outlined'}
            onClick={handleClick}
            color={led.color || 'primary'}
        >
            {led.state ? 'ON' : 'OFF'}
        </LoadingButton>
    )
}

export default LoadingBtn;