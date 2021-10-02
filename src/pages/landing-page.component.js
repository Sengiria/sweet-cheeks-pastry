import { Link } from 'react-router-dom';
import './landing-page.styles.scss';
import { useState } from 'react';

const LandingPage = () => {
    const [ currProduct, setCurrProduct ] = useState({image: 'cupcake2.png', color: '#017143'})
    const { image, color } = currProduct

    const pickProduct = product => {
        setCurrProduct(product)
    }

    return (
        <>
        <div className="circle" style={{
            background: color
        }}></div>
            <div className="content">
                <div className="textbox">
                    <h2>Cake doesn’t ask silly questions, <br />Cake <span style={{
                        color: color
                    }}>understands.</span></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <Link style={{
                        background: color
                    }} to="#">Learn more</Link>
                </div>
                <div className="image-box">
                    <img src={image} alt="trifle" className="sweetcheeks" />
                </div>
            </div>
            <ul className="thumb">
                <li><img alt="dessert" src="cupcake2.png" onClick={() => pickProduct({image: 'cupcake2.png', color: '#017143'})}/></li>
                <li><img alt="dessert" src="tiramisu.png" onClick={() => pickProduct({image: 'tiramisu.png', color: '#ad9a99'})} /></li>
                <li><img alt="dessert" src="ice-cream-trifle.png" onClick={() => pickProduct({image: 'ice-cream-trifle.png', color: '#ed3915'})} /></li>
            </ul>
            <ul className="sci">

            </ul>
        </>
    );
}

export default LandingPage;
