import Image from 'next/image'
import githubIcon from '../../../assets/icons/github.png'
import linkedinIcon from '../../../assets/icons/linkedin.png'

export default function Footer() {
    return (
        <>
            <footer>
                <address>
                    <div>
                        <a href="https://github.com/gustavoopedrosa" target="_blank">
                            <Image src={githubIcon} alt='Ícone do Github' width={50} height={50} />
                        </a>
                        <a href="https://www.linkedin.com/in/gustavo-pedrosa-/" target="_blank">
                            <Image src={linkedinIcon} alt='Ícone do LinkedIn' width={50} height={50} />
                        </a>
                    </div>
                    <span>&copy; 2022 - Desenvolvido por Gustavo Pedrosa</span>
                </address>
            </footer>
            <style jsx>{`
                footer {
                    width: 100%;
                    height: 150px;
                    background-color: #F4B8A4;
                    margin-top: 5rem;
                    display: flex;
                    flex-direction: collumn;
                    justify-content: center;
                    align-items: center;
                }

                div {
                    display: flex;
                    justify-content: space-around;
                    margin-bottom: 2rem;
                }

                a:hover {
                    opacity: 50%;
                    transition: .5s;
                }

                span {
                    font-size: 1.3rem;
                    font-weight: 500;
                }

            `}</style>
        </>
    )
}