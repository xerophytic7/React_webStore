import React, { useState } from 'react';
import axios from 'axios'

const Home = () => {

    const imgUrl = "https://images.ctfassets.net/yadj1kx9rmg0/wtrHxeu3zEoEce2MokCSi/cf6f68efdcf625fdc060607df0f3baef/quwowooybuqbl6ntboz3.jpg";
    const [src, setSrc] = useState("");

    axios.get(imgUrl)
    .then((response) => {
           //console.log(response.config["url"]);
            // return (response.config["url"]);
            setSrc(response.config.url)
    })

    return (
        <div id="partners">
            <div className="logo-image">
                <div>
                    Hello Mr. Bezos. This is your exclusive destination for aquiring massive tracts of land!
                    <br/><img src={src} alt=''/>
                    <p>...you can use this bean to get around...</p>
                    {/* {console.log(getImg())} */}
                </div>
            </div>
            
        </div>
    );
};

export default Home;