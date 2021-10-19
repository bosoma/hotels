const BASE_URL = 'https://run.mocky.io/v3';

export const getHotels = async () => {
    return await fetch(`${BASE_URL}/eef3c24d-5bfd-4881-9af7-0b404ce09507`);
}

export const getHotelsWithFlights = async () => {
    return await fetch(`${BASE_URL}/23d149ef-853a-412b-86f3-6c8550f00fdc`);
}