import React from 'react'

const Home = () => {
    return (
        <div>
            <div className="home row">
                <div className="heading">
                    <h2>Saving the Tiniest Lives</h2>
                    <h1>Knittin' Kitten Foster</h1>
                    <div className="btn-block"><a className="button" href="#">Kittens</a><a className="button" href="#">Intake</a></div>
                </div>
                <div></div>
            </div>
            <div className="main">
                <div className="row">
                    <div><img className="side-img" src="https://i.ibb.co/2y953Dp/RPT.png"/></div>
                    <div className="info">
                        <h1 className="subtitle">Meet the Foster</h1>
                        <p><br/><strong>I'm Taylor - A kitten foster mom and knitting enthusiast!</strong></p>
                        <p>I believe every cat deserves a happy and healthy life. I aim to provide kittens and cats with a loving environment and around-the-clock care, so that one day they can find their forever home. <br/><br/>I take on neonatal kittens, pregnant and nursing mama cats, ill or injured cats, and senior cats - happily providing medical care, play and stimulation, and of course, kisses and cuddles.
                        </p>
                    </div>
                </div>
                
            </div>

            <div className="center section">
                <h1 className="section-title">Support the Kittens</h1>
            </div>

            <div className="wrapper">

                <a href="https://www.instagram.com/knittinkittenfoster/">
                    <div className="box box-pink">
                        <div className="card-title">
                            <h3>Follow on Instagram</h3>
                        </div>
                    </div>
                </a>

                <a href="https://www.galvestonhumane.org/donate">
                    <div className="box box-blue">
                        <div className="card-title">
                            <h3>Donate to GIHS</h3>
                        </div>
                    </div>
                </a>

                <a href="https://www.amazon.com/hz/wishlist/ls/33116DMWWDBS5?ref_=wl_share">
                <div className="box box-yellow">
                    <div className="card-title">
                        <h3>Amazon Wish List</h3>
                    </div>
                </div>
                </a>
    
            </div>
        </div>
    )
}

export default Home;