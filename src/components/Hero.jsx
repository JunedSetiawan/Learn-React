function Hero() {

    return(
          <div className="max-w-md">
        <h1 className="text-5xl font-bold">Halo Halo</h1>
        <img className="mx-auto mt-4 motion-safe:animate-[spin_3s_linear_infinite]" src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" alt="" loading='lazy' />
        <p className="py-4">Proses Belajar React JS
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sed itaque consequatur eos suscipit placeat inventore magni sapiente qui numquam.
        </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
    )
}

export default Hero