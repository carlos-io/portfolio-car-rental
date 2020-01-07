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
            image: '/img/vehicles/2010-ford-f-150.jpg',
            city: 'Austin',
            state: 'Texas',
            rate: 20,
            features: {
                sunroof: true,
                navigation: true,
                premium_audio: true,
                heated_seats: false,
            }
        },
        user: {
            name: 'Mark Johnson',
            image: '/img/users/22.jpg',
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
            image: '/img/vehicles/2016-tesla-s.jpg',
            city: 'Los Angeles',
            state: 'CA',
            rate: 50,
            features: {
                sunroof: true,
                navigation: true,
                premium_audio: true,
                heated_seats: true,
            }
        },
        user: {
            name: 'Derrick Wells',
            image: '/img/users/VUMBKh1U.jpg',
            postDate: '01/15/20',
        }
    },
]

export default listings