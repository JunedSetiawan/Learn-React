function Hero() {

    return(
          <div className="max-w-md">
        <h1 className="text-4xl font-bold">Halo <span className="text-primary font-mono"><i><a href="https://react.dev" className="hover:underline">React JS</a> Developer</i></span></h1>
        <img className="mx-auto mt-4 mb-3 motion-safe:animate-[spin_3s_linear_infinite]" src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" alt="" loading='lazy' />
        <div className="text-lg">
        <p>
          Disini saya belajar <span className="text-primary font-bold font-mono"><a href="https://youtube.com/playlist?list=PL0Zuz27SZ-6PrE9srvEn8nbhOOyxnWXfp" className="hover:underline"> React JS</a></span>
        </p>
        <p className="py-4">Proses Belajar <span className="font-bold font-mono">35%</span>
        
          </p>
          </div>
            <button className="btn btn-primary">Get Started</button>
          </div>
    )
}

export default Hero