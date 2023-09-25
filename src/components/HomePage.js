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
            <div className="btn-group mt-3" role="group" aria-label="Basic example ">
  <button type="button" className="btn btn-secondary" onClick={APICALL}>Like</button>
  <button type="button" className="btn btn-secondary ml-4" onClick={APICALL}>Dislike</button>
</div>

        </>
    )
}

export default HomePage
