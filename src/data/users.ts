const users = [
    {
        "name": "🇫🇷 Alice Martin",
        "position": {
            "latitude": 48.8566,
            "longitude": 2.3522
        },
        "timezone": "Europe/Paris"
    },
    {
        "name": "🇺🇸 John Smith",
        "position": {
            "latitude": 37.7749,
            "longitude": -122.4194
        },
        "timezone": "America/Los_Angeles"
    },
    {
        "name": "🇺🇸 Emily Johnson",
        "position": {
            "latitude": 40.7128,
            "longitude": -74.0060
        },
        "timezone": "America/New_York"
    },
    {
        "name": "🇯🇵 Yuki Tanaka",
        "position": {
            "latitude": 35.6895,
            "longitude": 139.6917
        },
        "timezone": "Asia/Tokyo"
    },
    {
        "name": "🇩🇪 Anna Müller",
        "position": {
            "latitude": 52.5200,
            "longitude": 13.4050
        },
        "timezone": "Europe/Berlin"
    },
    {
        "name": "🇦🇷 Santiago García",
        "position": {
            "latitude": -34.6037,
            "longitude": -58.3816
        },
        "timezone": "America/Argentina/Buenos_Aires"
    },
    {
        "name": "🇨🇳 Li Wei",
        "position": {
            "latitude": 39.9042,
            "longitude": 116.4074
        },
        "timezone": "Asia/Shanghai"
    },
    {
        "name": "🇦🇪 Fatima Al-Mansouri",
        "position": {
            "latitude": 25.276987,
            "longitude": 55.296249
        },
        "timezone": "Asia/Dubai"
    },
    {
        "name": "🇵🇹 Isabel Silva",
        "position": {
            "latitude": 38.7167,
            "longitude": -9.1390
        },
        "timezone": "Europe/Lisbon"
    },
    {
        "name": "🇦🇺 David Brown",
        "position": {
            "latitude": -33.8688,
            "longitude": 151.2093
        },
        "timezone": "Australia/Sydney"
    },
    {
        "name": "🇩🇰 Mia Jensen",
        "position": {
            "latitude": 55.6761,
            "longitude": 12.5683
        },
        "timezone": "Europe/Copenhagen"
    },
    {
        "name": "🇵🇰 Ahmed Khan",
        "position": {
            "latitude": 24.8607,
            "longitude": 67.0011
        },
        "timezone": "Asia/Karachi"
    },
    {
        "name": "🇷🇺 Elena Petrova",
        "position": {
            "latitude": 55.7558,
            "longitude": 37.6173
        },
        "timezone": "Europe/Moscow"
    },
    {
        "name": "🇧🇷 Carlos Santos",
        "position": {
            "latitude": -23.5505,
            "longitude": -46.6333
        },
        "timezone": "America/Sao_Paulo"
    },
    {
        "name": "🇧🇬 Nina Popov",
        "position": {
            "latitude": 42.6977,
            "longitude": 23.3219
        },
        "timezone": "Europe/Sofia"
    },
    {
        "name": "🇪🇬 Amira Hassan",
        "position": {
            "latitude": 30.0444,
            "longitude": 31.2357
        },
        "timezone": "Africa/Cairo"
    },
    {
        "name": "🇲🇽 Jorge Lopez",
        "position": {
            "latitude": 19.4326,
            "longitude": -99.1332
        },
        "timezone": "America/Mexico_City"
    },
    {
        "name": "🇫🇷 Marie Dubois",
        "position": {
            "latitude": 48.8566,
            "longitude": 2.3522
        },
        "timezone": "Europe/Paris"
    },
    {
        "name": "🇮🇪 Liam O'Sullivan",
        "position": {
            "latitude": 53.3498,
            "longitude": -6.2603
        },
        "timezone": "Europe/Dublin"
    },
    {
        "name": "🇮🇳 Ananya Patel",
        "position": {
            "latitude": 28.6139,
            "longitude": 77.2090
        },
        "timezone": "Asia/Kolkata"
    },
    {
        "name": "🇵🇱 Natalia Kowalski",
        "position": {
            "latitude": 52.2297,
            "longitude": 21.0122
        },
        "timezone": "Europe/Warsaw"
    },
    {
        "name": "🇵🇰 Samir Ali",
        "position": {
            "latitude": 33.6844,
            "longitude": 73.0479
        },
        "timezone": "Asia/Karachi"
    },
    {
        "name": "🇨🇳 Chen Ming",
        "position": {
            "latitude": 31.2304,
            "longitude": 121.4737
        },
        "timezone": "Asia/Shanghai"
    },
    {
        "name": "🇵🇰 Zara Ahmed",
        "position": {
            "latitude": 24.8607,
            "longitude": 67.0011
        },
        "timezone": "Asia/Karachi"
    },
    {
        "name": "🇧🇷 Lucas Costa",
        "position": {
            "latitude": -22.9068,
            "longitude": -43.1729
        },
        "timezone": "America/Sao_Paulo"
    },
    {
        "name": "🇩🇪 Sophia Müller",
        "position": {
            "latitude": 50.1109,
            "longitude": 8.6821
        },
        "timezone": "Europe/Berlin"
    },
    {
        "name": "🇷🇺 Alexander Smirnov",
        "position": {
            "latitude": 59.9343,
            "longitude": 30.3351
        },
        "timezone": "Europe/Moscow"
    },
    {
        "name": "🇮🇹 Sara Rossi",
        "position": {
            "latitude": 41.9028,
            "longitude": 12.4964
        },
        "timezone": "Europe/Rome"
    },
    {
        "name": "🇵🇹 Daniela Pires",
        "position": {
            "latitude": 38.7369,
            "longitude": -9.1427
        },
        "timezone": "Europe/Lisbon"
    },
    {
        "name": "🇬🇧 Rebecca Williams",
        "position": {
            "latitude": 51.5074,
            "longitude": -0.1278
        },
        "timezone": "Europe/London"
    },
    {
        "name": "🇧🇬 Ivan Ivanov",
        "position": {
            "latitude": 42.6977,
            "longitude": 23.3219
        },
        "timezone": "Europe/Sofia"
    },
    {
        "name": "🇪🇸 Miguel Fernández",
        "position": {
            "latitude": 40.4168,
            "longitude": -3.7038
        },
        "timezone": "Europe/Madrid"
    }
];

type User = {
    name: string,
    position: {
        latitude: number,
        longitude: number,
    },
    timezone: string,
}

export function getUsers(): User[] {
    return users;
}
