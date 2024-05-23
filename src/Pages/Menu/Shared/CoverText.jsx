const CoverText = ({heading, subHeading}) => {
    return (
        <div className="space-y-2 px-72 py-32 bg-black bg-opacity-50">
            <h1 className="text-7xl uppercase font-bold">{heading}</h1>
            <h3 className="text-xl uppercase">{subHeading}</h3>
        </div>
    );
};

export default CoverText;