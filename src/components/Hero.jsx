function Hero() {

    return(
          <div className="max-w-md">
        <h1 className="text-5xl font-bold">Halo</h1>
        <img className="mx-auto mt-4 mb-3 motion-safe:animate-[spin_3s_linear_infinite]" src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" alt="" loading='lazy' />
          Disini saya belajar <span className="text-primary font-bold font-mono">React JS</span>
        <p className="py-4">Proses Belajar <span className="font-bold">35%</span>
        </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
    )
}

export default Hero