

const Cover = ({img, title, description}) => {
    return (
      <div>
        <div
          className="hero max-w-7xl overflow-x-scroll mx-auto h-[200px] md:h-[300px]"
          style={{
            backgroundImage:
              `url(${img})`,
              backgroundSize:'cover',
              backgroundPosition: 'center',
          }}
        >
          <div className="hero-overlay bg-opacity-25"></div>
  
          <div className="bg-black bg-opacity-50 rounded-lg">
          <div className="hero-content text-center text-neutral-content">
            <div className="w-40 md:w-[800px] md:p-2">
              <h1 className="text-xs md:mb-5 md:text-4xl font-bold uppercase">{title}</h1>
              <p className="md:mb-5">
                {description}
              </p>
              
            </div>
          </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Cover;
  