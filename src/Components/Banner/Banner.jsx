const Banner = () => {
  return (
    <div>
      <CutoutTextLoader
        height="450px"
        background="#2B3440"
        imgUrl="https://i.ibb.co/4dzVsxL/giphy.gif"
        // imgUrl="https://i.ibb.co/b5sHtk5/offcie.webp"
      />
    </div>
  );
};

const CutoutTextLoader = ({ height, background, imgUrl }) => {
  return (
    <div className="relative" style={{ height }}>
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      />
      <div
        style={{ background }}
        className="absolute inset-0 animate-pulse z-10"
      />
      <span
        className="font-black absolute inset-0 z-20 text-center bg-clip-text text-transparent pointer-events-none"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          fontSize: 'clamp(3rem, 12vw, 10rem)',
          lineHeight: height,
        }}
      >
        USIFY
      </span>
    </div>
  );
};

export default Banner;
