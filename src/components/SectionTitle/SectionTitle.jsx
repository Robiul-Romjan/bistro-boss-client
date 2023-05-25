

const SectionTitle = ({subHeading, heading}) => {
    return (
        <div className="text-center mb-8 w-4/12 mx-auto">
            <p className="text-yellow-500 mb-4">--- {subHeading} ---</p>
            <h3 className="border-y-4 text-3xl py-4 uppercase">{heading}</h3>
        </div>
    );
};

export default SectionTitle;