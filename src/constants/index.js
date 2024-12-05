import { locations01, locations02, locations03, locations04, tour01, package01, package02, package03, review01, blogs01, blogs02 } from "../assets/images";

import { search, sms, flash, explore } from "../assets/icons";

export const statistics = [
    { value: '10M+', label: 'Total Customers' },
    { value: '09+', label: 'Years Of Experience' },
    { value: '12k', label: 'Total Destinations' },
    { value: '5.0', label: 'Average Rating' },
];

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#locations", label: "Services" },
    { href: "#tour", label: "Tour" },
    { href: "#packages", label: "About" },
    { href: "#reviews", label: "Contact" },
];

export const locations = [
    {
        imgURL:locations01,
        label:"image01",
        location:"Bromo, East Java",
        tour: "Bromo Tengger tour",

    },
    {
        imgURL:locations02,
        label:"image02",
        location:"Denpasar, Bali",
        tour: "Bali Beach Tourism",

    },
    {
        imgURL:locations03,
        label:"image03",
        location:"Lapung, South Sumatra",
        tour: "Sumatra Tourism",

    },
    {
        imgURL:locations04,
        label:"image04",
        location:"Jogjakarta, Central Java",
        tour: "Borbudur Temple Tour",

    },
];

export const tourGuide = [
    {
        iconURL:search,
        label:'icon1',
        text: 'Find Your Destination',
        subtext: 'Embark on a journey to discover your dream destination, where adventure and relaxation await'
    },
    {
        iconURL:sms,
        label:'icon2',
        text: 'Book a ticket',
        subtext: 'Embark on a journey to discover your dream destination, where adventure and relaxation await'
    },
    {
        iconURL:flash,
        label:'icon3',
        text: 'Make payment',
        subtext: 'Embark on a journey to discover your dream destination, where adventure and relaxation await'
    },
    {
        iconURL:explore,
        label:'icon4',
        text: 'Explore destinations',
        subtext: 'Embark on a journey to discover your dream destination, where adventure and relaxation await'
    },
];

export const tourImageDetails = {

    image: tour01,
    label: 'Tour Image',
    text:'Embark on a journey to find your dream destination where adventure and relaxation await, creating unforgettable memories along the way'

};

export const packageDetails = [
    {
        image: package01,
        label: 'package01',
        rating: '4.9',
        dayCount: '7 Days',
        dateRange: '23 August - 29 August',
        packageName: 'Bali Tour Package',
        price: '$285'

    },
    {
        image: package02,
        label: 'package02',
        rating: '4.9',
        dayCount: '5 Days',
        dateRange: '23 August - 27 August',
        packageName: 'Java Tour Package',
        price: '$218'

    },
    {
        image: package03,
        label: 'package03',
        rating: '4.9',
        dayCount: '3 Days',
        dateRange: '23 August - 25 August',
        packageName: 'Solo Tour Package',
        price: '$163'

    },
];

export const reviews = [

    {
        image:review01,
        label:'review01',
        name: 'Donald Sullivan',
        position: 'Founder Fiko',
        description: 'This travel website is very informative and easy to use. I like how they present various destination options and travel packages with clear details. Offering pictures and destination descriptions helps me decide where I want to visit. Additionally, the ability to compare prices and reviews from other users is very helpful in decision making.'

    },


];

export const blogs = [

    {
        image:blogs01,
        label:'blogs01',
        date:'Nov 14, 2022',
        text: '2023 Travel Trends - what you need to know',
        subtext:"2023 taught us valuable life lessons. Plans don't always work out, flexibility in life is the key 2023 taught us valuable life lessons. Plans don't always work out, flexibility in life is the key"
    },
    {
        image:blogs02,
        label:'blogs02',
        date:'Nov 18, 2022',
        text: 'Jeep Adventure is a new attraction for tourist visiting Gaurt',
        subtext:"2023 taught us valuable life lessons. Plans don't always work out, flexibility in life is the key 2023 taught us valuable life lessons. Plans don't always work out, flexibility in life is the key"
    },
    
]
