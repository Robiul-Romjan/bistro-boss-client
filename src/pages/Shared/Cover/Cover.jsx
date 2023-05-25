import { Parallax } from 'react-parallax';

const Cover = ({ img, coverHeight, coverHeading, coverTitle }) => {
    return (
        <>
            <Parallax
                blur={{ min: -50, max: 50 }}
                bgImage={img}
                bgImageAlt="the menu"
                strength={-200}
            >
                <div className="hero" style={{ height: `${coverHeight}` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content bg-slate-600	opacity-60 w-2/3 py-28">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold uppercase opacity-100">{coverHeading}</h1>
                            <p className="mb-5 uppercase">{coverTitle}</p>
                        </div>
                    </div>
                </div>
            </Parallax>
        </>
    );
};

export default Cover;