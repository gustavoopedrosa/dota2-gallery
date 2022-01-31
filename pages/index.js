import Footer from '../src/components/Footer'
import Gallery from '../src/components/Gallery'
import Header from '../src/components/Header'
import Highlights from '../src/components/Highlights'

function Title(props) {
  return (
    <>
      <h2>{props.children}</h2>

      <style jsx>{`
        h2 {
          text-transform: uppercase;
          text-align: center;
          margin: 3rem 0;
          font-size: 2rem;
        }
      `}</style>

    </>
  )
}

export default function Home() {
  return (
    <>
      <Header />
      <Title>Highlights</Title>
      <Highlights />
      <Title>Gallery</Title>
      <Gallery />
      <Footer/>
    </>
  )
}
