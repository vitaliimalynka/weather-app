export interface WeatherParameters {
    // coord: {
    //     lon,
    //     lat
    // },
    // base,
    weather: [
        {
            id: number,
            main: string,
            description: string,
            icon: string
        }
    ],
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
    wind: {
        speed: number,
        deg: number,
        gust
    },
    clouds: {
        all: number
    },
    rain?:{
        '1h'?: number,
        '3h'?: number
    },

    snow: {
        '1h'?: number,
        '3h'?: number
    }

    dt: number,
    sys:{
        type?,
        id?,
        message?,
        country: string,
        sunrise: number,
        sunset: number
    },
    timezone: number,
    id: number,
    name: string,
    cod: number
}
