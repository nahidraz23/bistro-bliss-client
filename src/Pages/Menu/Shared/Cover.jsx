import CoverText from "./CoverText";

const Cover = ({ img, heading, subHeading }) => {
    return (
        <div className="hero h-[700px] bg-fixed" style={{ backgroundImage: `url("${img}")`}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="">
                    <CoverText heading={heading} subHeading={subHeading}></CoverText>
                </div>
            </div>
        </div>
    );
};

export default Cover;