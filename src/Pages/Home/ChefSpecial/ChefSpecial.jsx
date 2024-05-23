import SectionHeading from '../../../Components/shared/SectionHeading';
import featuredImg from '../../../assets/home/featured.jpg'
import './ChefSpecial.css';

const ChefSpecial = () => {
    return (
        <div className='section-bg py-10 my-10 text-white bg-fixed'>
            <div>
                <SectionHeading
                    subHeading={"Check it Out"}
                    heading={"Chef Special"}
                ></SectionHeading>
            </div>
            <div className='flex items-center px-32 gap-5'>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className='space-y-5'>
                    <p>May 20, 2024</p>
                    <h1 className='text-xl uppercase'>Where can i get some?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit illo nulla mollitia similique quisquam tenetur molestiae neque nemo inventore? Unde inventore dolorum rerum amet. Expedita commodi consequatur molestiae fugit eius?</p>
                    <button className='btn btn-ghost border-b-4 border-b-black'>Read More</button>
                </div>
            </div>
        </div>
    );
};

export default ChefSpecial;