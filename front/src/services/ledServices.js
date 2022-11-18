import axios from 'axios';

const baseUrl = 'http://localhost:5000';

const getAll = async() => {
    const res = await axios.get(baseUrl);
    return res.data;
}
const ledControl = async(led) => {
    const URL = `${baseUrl}/${led.GPIO}/${led.state ? 'off' : 'on'}`;
    return await axios.get(URL);
}

const brightnessControl = async(led) => {
    const URL = `${baseUrl}/${led.GPIO}/${led.brightness}`;
    return await axios.get(URL);
}

const ledServices = {
    ledControl,
    brightnessControl,
    getAll
}
export default ledServices;