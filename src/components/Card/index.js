export default function Card(props) {
    return (
        <>
            <li>
                <div>
                    <img src={props.src} alt="Item da lista de imagens"/>
                </div>
            </li>

            <style jsx>{`
                div:hover {
                    cursor: pointer;
                    opacity: 70%;
                    transition: opacity 1s;
                }
            `}</style>
        </>
    )
}