export interface WeatherParameters {
    clouds: {
        all: number
    },
    id: number,
    main: {
        temp: number,
        feels_like: number,
        pressure: number,
        humidity: number,
        temp_min: number,
        temp_max: number,
        sea_level: number,
        grnd_level: number
    },
    name: string,
    sys:{
        type?,
        id?,
        message?,
        country: string,
        sunrise: number,
        sunset: number
    },
    timezone: number,
    weather: [
        {
            id: number,
            main: string,
            description: string,
            icon: string
        }
    ],
    wind: {
        speed: number,
        deg: number,
        gust
    },
    rain?:{
        '1h'?: number,
        '3h'?: number
    },
    snow?: {
        '1h'?: number,
        '3h'?: number
    }
    
    // dt: number | Date,
    // cod: number
    // coord: {
        //     lon,
    //     lat
    // },
    // base,
}
