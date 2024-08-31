import React from 'react'
import Image, { ImageProps } from 'next/image'
import { StaticImageData } from 'next/image';
import img1 from '../assets/first.png'
import img2 from '../assets/chat.png'
import img3 from '../assets/export.png'
import img4 from '../assets/phone.png'
import img5 from '../assets/report.png'
import img6 from '../assets/review.png'
interface helpProps{
    image: StaticImageData,
    title: string,
    content: string,
}
const Helpdata = [{
     image: img1 ,
     title: 'Frequently Asked Questions',
     content: 'See FAQ',

},
{
    image: img2 ,
    title: 'Live Chat',
    content: 'Chat Now',

},
{
    image:  img3 ,
    title: 'Whatsapp',
    content: 'Drop a Message',

},
{
    image:  img4 ,
    title: 'Phone Call',
    content: 'Call Us',

},{
    image:  img5,
    title: 'Report Our Support',
    content: 'Not Satisfied?',

},{
    image:  img6 ,
    title: 'Review Our App',
    content: 'Coming Soon',

},
]

export default Helpdata