const listings = [
    {
        vehicle: {
            type: 'pickup',
            typeIcon: 'fa-truck-pickup',
            manufacturer: 'Ford',
            model: 'F-150',
            year: 2010,
            color: 'red',
            transmission: 'automatic',
            image: 'img/vehicles/2010-ford-f-150.jpg',
            city: 'Austin',
            state: 'TX',
            rate: 30,
            features: {
                sunroof: false,
                navigation: false,
                premium_audio: false,
                heated_seats: false,
            }
        },
        user: {
            name: 'Mark Johnson',
            image: 'img/users/22.jpg',
            postDate: '03/15/19',
        }
    },
    {
        vehicle: {
            type: 'sedan',
            typeIcon: 'fa-car-side',
            manufacturer: 'Tesla',
            model: 'Model S',
            year: 2016,
            color: 'white',
            transmission: 'automatic',
            image: 'img/vehicles/2016-tesla-s.jpg',
            city: 'Los Angeles',
            state: 'CA',
            rate: 70,
            features: {
                sunroof: true,
                navigation: true,
                premium_audio: true,
                heated_seats: true,
            }
        },
        user: {
            name: 'Derrick Wells',
            image: 'img/users/VUMBKh1U.jpg',
            postDate: '01/15/19',
        }
    },
    {
        vehicle: {
            type: 'coupe',
            typeIcon: 'fa-car-side',
            manufacturer: 'Porsche',
            model: '911 Carrera',
            year: 2018,
            color: 'gray',
            transmission: 'manual',
            image: 'img/vehicles/2018-porsche-carrera.png',
            city: 'Rochester',
            state: 'NY',
            rate: 100,
            features: {
                sunroof: true,
                navigation: true,
                premium_audio: false,
                heated_seats: false,
            }
        },
        user: {
            name: 'Jacob Ginnish',
            image: 'img/users/Ne48Jqjh.jpg',
            postDate: '01/21/19',
        }
    },
    {
        vehicle: {
            type: 'coupe',
            typeIcon: 'fa-car-side',
            manufacturer: 'Lamborghini',
            model: 'Aventador',
            year: 2015,
            color: 'green',
            transmission: 'automatic',
            image: 'img/vehicles/2015-lamborghini-aventador.jpg',
            city: 'Miami',
            state: 'FL',
            rate: 450,
            features: {
                sunroof: false,
                navigation: true,
                premium_audio: false,
                heated_seats: false,
            }
        },
        user: {
            name: 'Bonnie Riley',
            image: 'img/users/e187c8.jpg',
            postDate: '02/18/19',
        }
    },
    {
        vehicle: {
            type: 'sedan',
            typeIcon: 'fa-car-side',
            manufacturer: 'Lexus',
            model: 'IS',
            year: 2017,
            color: 'blue',
            transmission: 'automatic',
            image: 'img/vehicles/2017-lexus-is.jpg',
            city: 'Philadelphia',
            state: 'PA',
            rate: 50,
            features: {
                sunroof: false,
                navigation: true,
                premium_audio: true,
                heated_seats: true,
            }
        },
        user: {
            name: 'Reyna Chung',
            image: 'img/users/80.jpg',
            postDate: '04/27/19',
        }
    },
    {
        vehicle: {
            type: 'sedan',
            typeIcon: 'fa-car-side',
            manufacturer: 'BMW',
            model: '328i',
            year: 2019,
            color: 'black',
            transmission: 'automatic',
            image: 'img/vehicles/2019-bmw-328i.jpg',
            city: 'Newark',
            state: 'NJ',
            rate: 50,
            features: {
                sunroof: true,
                navigation: true,
                premium_audio: true,
                heated_seats: true,
            }
        },
        user: {
            name: 'Satya Patel',
            image: 'img/users/66.jpg',
            postDate: '11/11/19',
        }
    },
    {
        vehicle: {
            type: 'SUV',
            typeIcon: 'fa-shuttle-van',
            manufacturer: 'Cadillac',
            model: 'Escalade',
            year: 2016,
            color: 'black',
            transmission: 'automatic',
            image: 'img/vehicles/2016-cadillac-escalade.jpg',
            city: 'Baltimore',
            state: 'MD',
            rate: 65,
            features: {
                sunroof: true,
                navigation: true,
                premium_audio: true,
                heated_seats: true,
            }
        },
        user: {
            name: 'Mike Brown',
            image: 'img/users/56_AL.jpg',
            postDate: '12/01/19',
        }
    },
    {
        vehicle: {
            type: 'SUV',
            typeIcon: 'fa-shuttle-van',
            manufacturer: 'Ford',
            model: 'Expedition',
            year: 2016,
            color: 'green',
            transmission: 'automatic',
            image: 'img/vehicles/2016-ford-expedition.jpg',
            city: 'Boulder',
            state: 'CO',
            rate: 34,
            features: {
                sunroof: true,
                navigation: true,
                premium_audio: false,
                heated_seats: false,
            }
        },
        user: {
            name: 'Spencer Horton',
            image: 'img/users/8328.jpg',
            postDate: '12/18/18',
        }
    },
    {
        vehicle: {
            type: 'pickup',
            typeIcon: 'fa-truck-pickup',
            manufacturer: 'Chevrolet',
            model: 'Silverado',
            year: 2016,
            color: 'yellow',
            transmission: 'automatic',
            image: 'img/vehicles/2016-chevy-silverado.jpg',
            city: 'Cincinnati',
            state: 'OH',
            rate: 40,
            features: {
                sunroof: false,
                navigation: true,
                premium_audio: false,
                heated_seats: false,
            }
        },
        user: {
            name: 'Phoenix Baker',
            image: 'img/users/uKeSMzeK.jpg',
            postDate: '12/18/18',
        }
    },
]

export default listings