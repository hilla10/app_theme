const Header = () => {
  return (
    <section className='bg relative'>
      <div className='container flex absolute md:w-[90%] w-[650px] mx-auto z-10 bg-gray-700 opacity-70 top-[50%] left-[50%] translate-[-50%]  flex-col justify-center items-center bg-gray-100 rounded-[60px] p-4'>
        <h1 className='text-4xl font-bold text-white pb-5'>
          Welcome to <span className='text-green-500'>AppTheme</span>
        </h1>
        <p className='text-[18px] font-bold text-white pb-3'>
          A template built width HTML5, CSS3 and FlexboxGrid
        </p>
      </div>
    </section>
  );
};

export default Header;
