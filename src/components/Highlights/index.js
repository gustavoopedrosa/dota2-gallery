import { useState } from 'react'

const HIGHLIGHTS_IMAGES = [
    'http://lorempixel.com.br/800/400/?1',
    'http://lorempixel.com.br/800/400/?2',
    'http://lorempixel.com.br/800/400/?3'
]

export default function Highlights() {
    const [activeImage, setActiveImage] = useState(0) 

    return (
        <>
            <section>
                <button className='left-arrow' onClick={() => {
                    activeImage > 0 ? setActiveImage(--activeImage) : ''
                }}>&#10132;</button>
                <img src={HIGHLIGHTS_IMAGES[activeImage]} alt='imagem em destaque'/>
                <button onClick={() => {
                    activeImage < HIGHLIGHTS_IMAGES.length - 1 ? setActiveImage(++activeImage) : ''
                }}>&#10132;</button>
            </section>
            <style jsx>{`
                section {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    align-items: center;
                    justify-content: center;
                }

                button {
                    height: 400px;
                    width: 30px;
                    border: none;
                    border-radius: 0;
                    background-color: #F4B8A4;
                    transition: background .5s;
                    font-size: 1.8rem;
                }

                button:hover {
                    cursor: pointer;
                    background-color: #F4B8A499;
                }

                .left-arrow {
                    transform: rotateY(180deg);
                }
            `}</style>
        </>

    )
}