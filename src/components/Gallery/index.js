import Card from '../Card'
import { useRouter } from 'next/router'
import appConfig from '../../../config.json'


export default function Gallery() {
    const router = useRouter()

    return (
        <>
            <section>
                <ul>
                    {appConfig.images.gallery.map((image, key) => {
                        return (
                            <Card src={image} key={key} onClick={() => {
                                router.push(`/modal?image=${key}`)
                            }}/>
                        )
                    })}
                </ul>
            </section>

            <style jsx>{`
                section {
                    max-width: 1440px;
                    margin: 0 auto;
                }

                ul {
                    list-style: none;
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    gap: 3rem;
                    justify-content: space-evenly;
                }
            `}</style>
        </>
    )
}