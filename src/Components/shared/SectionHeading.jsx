const SectionHeading = ({ heading, subHeading }) => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-xl text-yellow-600 mb-2">--- {subHeading} ---</p>
      <h1 className="md:text-5xl border-y-4 w-2/4 p-5 mb-10 text-center uppercase">
        {heading}
      </h1>
    </div>
  );
};

export default SectionHeading;
