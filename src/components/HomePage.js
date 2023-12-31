import axios from 'axios';
import React, { useEffect, useState } from 'react'

function HomePage() {

    const [ImgURL, setImgURL] = useState("https://cdn2.thecatapi.com/images/cju.jpg");

    const APICALL = () => {
        axios.get('https://api.thecatapi.com/v1/images/search').then(resp => {

            // console.log(resp.data[0].url);
            setImgURL(resp.data[0].url);
        });
    }


    useEffect(() => {
       
        APICALL();
      }, []);

    return (
        <>
<nav className="navbar navbar-light bg-light">
  <a className="navbar-brand" href="#">
    <img src="https://cdn-icons-png.flaticon.com/128/11325/11325370.png" width="30" height="30" className="d-inline-block align-top" alt="" />
    <span className='ml-2'><b>Random Cat</b></span> 
  </a>
</nav>

            <img src={ImgURL} alt="cats" style={{ width: "100%", height: "auto" }} />

            {/* <img src={ImgURL} className="rounded mx-auto d-block mt-5" alt="..." /> */}

            {/* <div >
                LIKE
            </div>

            <div>
                DISLIKE
            </div> */}
            <div className=" mt-3 mb-4" >
  <button type="button" className="btn btn-secondary ml-4" onClick={APICALL} >Like <img src="https://cdn-icons-png.flaticon.com/128/456/456115.png" alt="" style={{width:"4vh",height:"4vh"}} /></button>
  <button type="button" className="btn btn-secondary ml-4" onClick={APICALL}>Dislike <img src="https://cdn-icons-png.flaticon.com/128/880/880460.png" alt="" style={{width:"4vh",height:"4vh"}} /></button>
</div>

<h3>Welcome to Akansha&prime;s Cat Haven&#33; 🐾 </h3>
<h4>
This website is a purr-fect tribute to our friend Akansha&sbquo; whose love for cats knows no bounds. Here&sbquo; we celebrate the furry companions who've stolen her heart. Explore adorable cat photos&sbquo; heartwarming stories&sbquo; and useful tips for fellow cat enthusiasts.

Akansha&sbquo; your passion for cats is truly inspiring&sbquo; and we hope this little corner of the internet brings you endless joy. Thanks for sharing your love of felines with the world&#33;
</h4>
 <h4>With whiskers and cuddles&sbquo;</h4> 
 <h4>Avi Pawar</h4>

        </>
    )
}

export default HomePage
