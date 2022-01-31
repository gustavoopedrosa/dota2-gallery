import Card from "../Card"

const GALLERY_IMAGES = [
    'http://lorempixel.com.br/300/300/?1',
    'http://lorempixel.com.br/300/300/?2',
    'http://lorempixel.com.br/300/300/?3',
    'http://lorempixel.com.br/300/300/?4',
    'http://lorempixel.com.br/300/300/?5',
    'http://lorempixel.com.br/300/300/?6',
    'http://lorempixel.com.br/300/300/?7',
    'http://lorempixel.com.br/300/300/?8',
    'http://lorempixel.com.br/300/300/?9',
    'http://lorempixel.com.br/300/300/?10',
    'http://lorempixel.com.br/300/300/?11',
    'http://lorempixel.com.br/300/300/?12',
    'http://lorempixel.com.br/300/300/?13',
    'http://lorempixel.com.br/300/300/?14',
    'http://lorempixel.com.br/300/300/?15',
    'http://lorempixel.com.br/300/300/?16',
    'http://lorempixel.com.br/300/300/?17',
    'http://lorempixel.com.br/300/300/?18',
    'http://lorempixel.com.br/300/300/?19',
    'http://lorempixel.com.br/300/300/?20'
]

export default function Gallery() {
    return (
        <>
            <section>
                <ul>
                    {GALLERY_IMAGES.map((image, key) => {
                        return (
                            <Card src={image} key={key}/>
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