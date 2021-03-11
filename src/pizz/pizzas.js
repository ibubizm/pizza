import peperoni from './img/pepe.jpg'
import season from './img/4seasons.jpg'
import meat from './img/meat.jpg'

const pizza = {
    all: [
        {img: peperoni,
            id: 0,
            catigory: 0,
            types: ['slim', 'fat'],
            size: [30, 40, 50],
            name: 'peperoni'},

        {img: season,
            id: 1,
            catigory: 1,
            types: ['slim', 'fat'],
            size: [30, 40, 55],
            name: '4 seasons'},

        {img: meat,
            id: 2,
            catigory: 0,
            types: ['slim', 'fat'],
            size: [30, 40, 50],
            name: 'meat'},
        
        ]
}

export default pizza