export default function Header () {
    return (
        <>
            <header>
                <h1>Dota 2 gallery pictures</h1>
            </header>
            <style jsx>{`
                h1 {
                    text-transform: uppercase;
                }

                header {
                    background-color: #F4B8A4;
                    height: 100px;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            `}</style>
        </>
    )
    
}