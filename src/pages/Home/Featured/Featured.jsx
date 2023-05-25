import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import "./Featured.css"
import featuredImg from "../../../assets/home/featured.jpg"

const Featured = () => {
    return (
        <div className="featured py-24 mb-24">
            <div className="text-white">
                <SectionTitle subHeading={"Check it out"} heading={"FROM OUR MENU"} />
                <div className="flex items-center gap-10 w-3/4 mx-auto">
                    <img className="w-2/4" src={featuredImg} alt="" />
                    <div className="">
                        <p>May 25, 2023</p>
                        <p>WHERE CAN I GET SOME?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, alias nisi nam vel nihil minus quis sit animi. Iste pariatur quos iusto sit similique laboriosam porro odit, dolor earum nulla adipisci perferendis, tempora labore exercitationem unde, voluptas autem hic. Corporis!</p>

                        <button className="btn btn-outline border-0 border-b-4 border-white text-white mt-5">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;