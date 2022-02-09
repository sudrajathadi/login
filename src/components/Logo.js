import Img from '../img/okadoc-pro-logo.png';

const Logo = (props) => {
    return (
        <>
        <img  className="mt-5 d-block mx-auto img-fluid w-50 mb-5" src={Img}></img>

        <h4 className="text-center mb-4">{props.text}</h4>
        </>
    );
};

export default Logo;