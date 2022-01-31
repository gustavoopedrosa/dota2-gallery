import { useRouter } from 'next/router'
import { useState } from 'react'
import appConfig from '../config.json'

export default function Modal() {
    const router = useRouter()
    const clickedImage = parseInt(router.query.image)
    const [activeImage, setActiveImage] = useState(clickedImage)

    return (
        <>
            <div className='container'>
                <button className='return-btn' onClick={() => {
                    router.push('/')
                }}>Voltar para a galeria</button>
                <section>
                    <div className='gallery'>
                        <button className='left-arrow arrow' onClick={() => {
                            activeImage > 0 ? setActiveImage(--activeImage) : ''
                        }}>&#10132;</button>
                        <img alt='imagem em destaque' src={appConfig.images.gallery[activeImage]} />
                        <button className='arrow' onClick={() => {
                            activeImage < appConfig.images.gallery.length - 1 ? setActiveImage(++activeImage) : ''
                        }}>&#10132;</button>
                    </div>
                    <p>{`${activeImage + 1}/${appConfig.images.gallery.length}`}</p>
                </section>
            </div>
            <style jsx>{`
                .container {
                    height: 100vh;
                    width: 100%;
                    background-color: #000000DD;
                }

                .return-btn {
                    color: white;
                    border: 1px solid white;
                    background: transparent;
                    padding: 2rem;
                    border-radius: 1rem;
                    margin: 3rem 0 5rem 3rem;
                    text-transform: uppercase;
                    font-weight: 500;
                }

                .return-btn:hover {
                    cursor: pointer;
                    background: gray;
                    transition: background .5s;
                }

                section {
                    min-height: 80%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-evenly;
                    align-items: center;
                }

                .gallery {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 2rem;
                    height: 700px;
                    width: 1440px;
                }

                .arrow {
                    font-size: 2rem;
                    color: white;
                    background: transparent;
                    border-radius: 1rem;
                    padding: 1rem;
                    border: 1px solid white;
                }

                .arrow:hover {
                    cursor: pointer;
                    background: gray;
                    transition: background .5s;
                }

                p {
                    margin-top: 3rem;
                    font-size: 1.5rem;
                    color: white;
                    padding: 1rem;
                    background: gray;
                    border-radius: 1rem;
                }

                .left-arrow {
                    transform: rotateY(180deg);
                }            
                
                img {
                    max-height: 700px;
                }
            `}</style>
        </>
    )
}