import CoverText from "./CoverText";

const Cover = ({ img }) => {
    return (
        <div className="hero h-[700px]" style={{ backgroundImage: `url("${img}")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="">
                    <CoverText heading={"Our Menu"} subHeading={"Would you like to try a dish"}></CoverText>
                </div>
            </div>
        </div>
    );
};

export default Cover;