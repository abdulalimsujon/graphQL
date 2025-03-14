const products = [
    {
        "id": "65f2b1c9e4b2d8a1f3e6d7a1",
        "name": "Wireless Mouse",
        "image": "https://example.com/images/wireless-mouse.jpg",
        "description": "Ergonomic wireless mouse with 2.4GHz connectivity.",
        "price": 25.99,
        "quantity": 150,
        "onStock": true,
        "categoryId": "65f2b1c9e4b2d8a1f3e6d7b1"
    },
    {
        "id": "65f2b1c9e4b2d8a1f3e6d7a2",
        "name": "Mechanical Keyboard",
        "image": "https://example.com/images/mechanical-keyboard.jpg",
        "description": "RGB backlit mechanical keyboard with blue switches.",
        "price": 79.99,
        "quantity": 80,
        "onStock": true,
        "categoryId": "65f2b1c9e4b2d8a1f3e6d7b1"
    },
    {
        "id": "65f2b1c9e4b2d8a1f3e6d7a3",
        "name": "Gaming Headset",
        "image": "https://example.com/images/gaming-headset.jpg",
        "description": "Surround sound gaming headset with noise cancellation.",
        "price": 59.99,
        "quantity": 60,
        "onStock": true,
        "categoryId": "65f2b1c9e4b2d8a1f3e6d7b2"
    },
    {
        "id": "65f2b1c9e4b2d8a1f3e6d7a4",
        "name": "USB-C Hub",
        "image": "https://example.com/images/usb-c-hub.jpg",
        "description": "Multi-port USB-C hub with HDMI, USB 3.0, and SD card slots.",
        "price": 34.99,
        "quantity": 40,
        "onStock": true,
        "categoryId": "65f2b1c9e4b2d8a1f3e6d7b3"
    },
    {
        "id": "65f2b1c9e4b2d8a1f3e6d7a5",
        "name": "Smartwatch",
        "image": "https://example.com/images/smartwatch.jpg",
        "description": "Fitness tracking smartwatch with heart rate monitoring.",
        "price": 99.99,
        "quantity": 25,
        "onStock": true,
        "categoryId": "65f2b1c9e4b2d8a1f3e6d7b4"
    },
    {
        "id": "65f2b1c9e4b2d8a1f3e6d7a6",
        "name": "Portable SSD",
        "image": "https://example.com/images/portable-ssd.jpg",
        "description": "1TB portable SSD with high-speed USB 3.1 connectivity.",
        "price": 129.99,
        "quantity": 30,
        "onStock": true,
        "categoryId": "65f2b1c9e4b2d8a1f3e6d7b5"
    },
    {
        "id": "65f2b1c9e4b2d8a1f3e6d7a7",
        "name": "Bluetooth Speaker",
        "image": "https://example.com/images/bluetooth-speaker.jpg",
        "description": "Portable Bluetooth speaker with deep bass and stereo sound.",
        "price": 45.99,
        "quantity": 90,
        "onStock": true,
        "categoryId": "65f2b1c9e4b2d8a1f3e6d7b6"
    },
    {
        "id": "65f2b1c9e4b2d8a1f3e6d7a8",
        "name": "Laptop Cooling Pad",
        "image": "https://example.com/images/laptop-cooling-pad.jpg",
        "description": "High-performance cooling pad with adjustable fans.",
        "price": 29.99,
        "quantity": 50,
        "onStock": true,
        "categoryId": "65f2b1c9e4b2d8a1f3e6d7b7"
    },
    {
        "id": "65f2b1c9e4b2d8a1f3e6d7a9",
        "name": "Smartphone Stand",
        "image": "https://example.com/images/smartphone-stand.jpg",
        "description": "Adjustable aluminum smartphone stand for desks.",
        "price": 12.99,
        "quantity": 200,
        "onStock": true,
        "categoryId": "65f2b1c9e4b2d8a1f3e6d7b8"
    },
    {
        "id": "65f2b1c9e4b2d8a1f3e6d7aa",
        "name": "USB Flash Drive",
        "image": "https://example.com/images/usb-flash-drive.jpg",
        "description": "64GB USB 3.0 flash drive for fast data transfers.",
        "price": 15.99,
        "quantity": 300,
        "onStock": true,
        "categoryId": "65f2b1c9e4b2d8a1f3e6d7b9"
    },
    {
        "id": "65f2b1c9e4b2d8a1f3e6d7ab",
        "name": "External Hard Drive",
        "image": "https://example.com/images/external-hdd.jpg",
        "description": "2TB external hard drive with USB 3.0 support.",
        "price": 89.99,
        "quantity": 75,
        "onStock": true,
        "categoryId": "65f2b1c9e4b2d8a1f3e6d7b5"
    },
    {
        "id": "65f2b1c9e4b2d8a1f3e6d7ac",
        "name": "Smart Light Bulb",
        "image": "https://example.com/images/smart-light-bulb.jpg",
        "description": "Wi-Fi enabled smart light bulb with voice control.",
        "price": 19.99,
        "quantity": 120,
        "onStock": true,
        "categoryId": "65f2b1c9e4b2d8a1f3e6d7c1"
    },
    {
        "id": "65f2b1c9e4b2d8a1f3e6d7ad",
        "name": "Wireless Charger",
        "image": "https://example.com/images/wireless-charger.jpg",
        "description": "10W fast wireless charging pad for smartphones.",
        "price": 24.99,
        "quantity": 110,
        "onStock": true,
        "categoryId": "65f2b1c9e4b2d8a1f3e6d7c2"
    }
];
const categories = [
    {
        "id": "65f2b1c9e4b2d8a1f3e6d7b1",
        "name": "Computer Accessories"
    },
    {
        "id": "65f2b1c9e4b2d8a1f3e6d7b2",
        "name": "Gaming Accessories"
    },
    {
        "id": "65f2b1c9e4b2d8a1f3e6d7b3",
        "name": "Hubs & Docks"
    },
    {
        "id": "65f2b1c9e4b2d8a1f3e6d7b4",
        "name": "Wearable Tech"
    },
    {
        "id": "65f2b1c9e4b2d8a1f3e6d7b5",
        "name": "Storage Devices"
    },
    {
        "id": "65f2b1c9e4b2d8a1f3e6d7b6",
        "name": "Audio Devices"
    },
    {
        "id": "65f2b1c9e4b2d8a1f3e6d7b7",
        "name": "Cooling Solutions"
    },
    {
        "id": "65f2b1c9e4b2d8a1f3e6d7b8",
        "name": "Phone Accessories"
    },
    {
        "id": "65f2b1c9e4b2d8a1f3e6d7b9",
        "name": "Storage & Flash Drives"
    },
    {
        "id": "65f2b1c9e4b2d8a1f3e6d7c1",
        "name": "Smart Home"
    },
    {
        "id": "65f2b1c9e4b2d8a1f3e6d7c2",
        "name": "Charging Devices"
    }
];
const reviews = [
    {
        "id": "65f3c1d9e5a3d9b2f4g7h8a1",
        "review": "Great wireless mouse, very responsive!",
        "rating": 4.5,
        "date": "2025-03-10",
        "productId": "65f2b1c9e4b2d8a1f3e6d7a1"
    },
    {
        "id": "65f3c1d9e5a3d9b2f4g7h8a2",
        "review": "Keyboard has great tactile feedback, perfect for gaming!",
        "rating": 5.0,
        "date": "2025-03-08",
        "productId": "65f2b1c9e4b2d8a1f3e6d7a2"
    },
    {
        "id": "65f3c1d9e5a3d9b2f4g7h8a3",
        "review": "Amazing sound quality, but a little heavy.",
        "rating": 4.2,
        "date": "2025-03-09",
        "productId": "65f2b1c9e4b2d8a1f3e6d7a3"
    },
    {
        "id": "65f3c1d9e5a3d9b2f4g7h8a4",
        "review": "Very useful USB-C hub, works perfectly with my MacBook.",
        "rating": 4.8,
        "date": "2025-03-07",
        "productId": "65f2b1c9e4b2d8a1f3e6d7a4"
    },
    {
        "id": "65f3c1d9e5a3d9b2f4g7h8a5",
        "review": "Nice smartwatch, but the battery life could be better.",
        "rating": 3.9,
        "date": "2025-03-06",
        "productId": "65f2b1c9e4b2d8a1f3e6d7a5"
    },
    {
        "id": "65f3c1d9e5a3d9b2f4g7h8a6",
        "review": "Super fast SSD, really helps with large file transfers.",
        "rating": 5.0,
        "date": "2025-03-05",
        "productId": "65f2b1c9e4b2d8a1f3e6d7a6"
    },
    {
        "id": "65f3c1d9e5a3d9b2f4g7h8a7",
        "review": "Decent speaker for the price, but lacks deep bass.",
        "rating": 4.0,
        "date": "2025-03-04",
        "productId": "65f2b1c9e4b2d8a1f3e6d7a7"
    },
    {
        "id": "65f3c1d9e5a3d9b2f4g7h8a8",
        "review": "Cooling pad is effective, but a bit noisy.",
        "rating": 3.8,
        "date": "2025-03-03",
        "productId": "65f2b1c9e4b2d8a1f3e6d7a8"
    },
    {
        "id": "65f3c1d9e5a3d9b2f4g7h8a9",
        "review": "Handy smartphone stand, very sturdy.",
        "rating": 4.7,
        "date": "2025-03-02",
        "productId": "65f2b1c9e4b2d8a1f3e6d7a9"
    },
    {
        "id": "65f3c1d9e5a3d9b2f4g7h8aa",
        "review": "Good flash drive, but gets warm during use.",
        "rating": 4.3,
        "date": "2025-03-01",
        "productId": "65f2b1c9e4b2d8a1f3e6d7aa"
    },
    {
        "id": "65f3c1d9e5a3d9b2f4g7h8ab",
        "review": "Reliable external hard drive, great for backups.",
        "rating": 4.6,
        "date": "2025-02-28",
        "productId": "65f2b1c9e4b2d8a1f3e6d7ab"
    },
    {
        "id": "65f3c1d9e5a3d9b2f4g7h8ac",
        "review": "Smart bulb works well, easy to set up with Alexa.",
        "rating": 4.9,
        "date": "2025-02-27",
        "productId": "65f2b1c9e4b2d8a1f3e6d7ac"
    },
    {
        "id": "65f3c1d9e5a3d9b2f4g7h8ad",
        "review": "Wireless charger works well, but slow charging for iPhones.",
        "rating": 3.7,
        "date": "2025-02-26",
        "productId": "65f2b1c9e4b2d8a1f3e6d7ad"
    }
];
export const db = {
    products, categories, reviews
};
