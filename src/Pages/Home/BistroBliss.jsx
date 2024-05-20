import BistroBlissBG from '../../assets/home/chef-service.jpg'

const BistroBliss = () => {

    const customStyle = {
        backgroundImage: `url(${BistroBlissBG})`
    }
    return (
        <div style={customStyle} className='h-[350px] md:h-[550px] bg-center mt-20 flex items-center justify-center'>
            <div className='h-2/3 bg-white mx-16 md:mx-80 w-full flex justify-center items-center'>
                <h1 className='text-center uppercase lg:text-4xl'>Bistro Bliss</h1>
            </div>
        </div>
    );
};

export default BistroBliss;