import React from 'react';
import { Figure } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
    return (
        <div className="container mt-5">
            <Figure>
                <Figure.Image
                    width={171}
                    height={180}
                    alt="Store Logo"
                    src="https://via.placeholder.com/171x180.png"
                />
                <Figure.Caption>
                    Welcome to Benjy's, your one-stop shop for the finest products.
                </Figure.Caption>
            </Figure>
            <div className="row">
                <div className="col-md-6">
                    <Figure>
                        <Figure.Image
                            width={500}
                            height={300}
                            alt="Store Image 1"
                            src="https://via.placeholder.com/500x300.png"
                        />
                        <Figure.Caption>
                            Our first store location.
                        </Figure.Caption>
                    </Figure>
                </div>
                <div className="col-md-6">
                    <Figure>
                        <Figure.Image
                            width={500}
                            height={300}
                            alt="Store Image 2"
                            src="https://via.placeholder.com/500x300.png"
                        />
                        <Figure.Caption>
                            Our second store location.
                        </Figure.Caption>
                    </Figure>
                </div>
            </div>
            <div className="mt-5">
                <h2>Contact Us</h2>
                <p>Email: info@benjys.com</p>
                <p>Phone: (123) 456-7890</p>
            </div>
        </div>
    );
}

export default About;
