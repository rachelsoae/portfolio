import placeholder from '../../assets/flowers-bw-op.png'

const Home = () => {
  return (
    <>
      <section>
        <div>
          <h2>Software Engineer | Web Developer</h2>
          <p>Building community through technology. Let’s create something together.</p>
          <div>
            <button>Contact Me</button>
            <button>View My Work</button>
          </div>
        </div>
      </section>
      <section>
        <img src={placeholder} alt='this image should be replaced' />
      </section>
    </>
  )
}

export default Home;