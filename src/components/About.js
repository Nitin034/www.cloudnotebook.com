import React  from "react";
import img1 from "../Image/GitHub.jpg.png";
import img2 from "../Image/Insta.png";
import img3 from "../Image/Email.png";
import img4 from "../Image/Link.png";


function About() {
  return <div className="container">
       <div className="row row-cols-1 row-cols-md-2 g-4">
  <div className="col">
    <div className="card">
      <img src={img1} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">GitHub</h5>
        <p className="card-text">For more Projects, Follow me on my GitHub Profile where I have put the project, you can also download their Source code..<strong>https://github.com/Nitin034</strong></p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={img4} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Linkedln</h5>
        <p className="card-text">Click on the link for My linkedin Profile then you can see my linkedin profile and also you can see my upcoming projects on my Linkedln profile<strong>https://www.linkedin.com/in/nitinkumaryd67/</strong></p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={img3} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Google Email</h5>
        <p className="card-text">You can now mail me on this email for project details and project related information and You can also ask me to work in your project by mailing here <strong>12nitinkumaryd@gmai.com</strong>..</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={img2} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Instagram</h5>
        <p className="card-text">To see my travel related videos and photography and for any kind of talk you can Message me on my Instagram.<strong>never_settle_67</strong></p>
      </div>
    </div>
  </div>
</div>
    </div>
    
   
}

export default About;
