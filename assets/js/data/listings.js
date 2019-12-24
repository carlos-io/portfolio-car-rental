const listings = [
    {
        vehicle: {
            type: 'sedan',
            typeIcon: 'fa-car-side',
            manufacturer: 'Mazda',
            model: '3',
            year: 2006,
            color: 'red',
            transmission: 'automatic',
            image: '/img/vehicles/2006-mazda-3.jpg',
            city: 'Philadelphia',
            state: 'PA',
            rate: 20,
            features: {
                sunroof: false,
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
            manufacturer: 'Mazda',
            model: '3',
            year: 2006,
            color: 'black',
            transmission: 'automatic',
            image: '/img/vehicles/2006-mazda-3.jpg',
            city: 'New York',
            state: 'NY',
            rate: 20,
            features: {
                sunroof: true,
                navigation: false,
                premium_audio: true,
                heated_seats: false,
            }
        },
        user: {
            name: 'Mark Johnson',
            image: '/img/users/22.jpg',
            postDate: '01/15/20',
        }
    },
]

export default listings