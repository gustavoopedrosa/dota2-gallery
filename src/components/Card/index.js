export default function Card(props) {
    return (
        <>
            <li onClick={() => {
                props.onClick()
            }}>
                <div>
                    <img src={props.src} alt="Item da lista de imagens" height={300} width={300}/>
                </div>
            </li>

            <style jsx>{`
                div:hover {
                    cursor: pointer;
                    opacity: 70%;
                    transition: opacity 1s;
                }

                img {
                    object-fit: cover;
                    object-position: center;
                }
            `}</style>
        </>
    )
}