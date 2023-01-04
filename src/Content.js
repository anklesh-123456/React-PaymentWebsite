import React, { useState } from 'react'

const Content = () => {
  const [userData, setUserData] = useState({
    firstName:"",
    lastName:"",
    phone:"",
    email:"",
    address:"",
    massage:"",
  });

  let name, value;
  const postUserData = (event) =>{
    name = event.target.name;
    value= event.target.value;

    setUserData({...userData,[name]: value})
  };
  // connect with firebase

  const submitData = async(event) =>{
    event.preventDefault();
    const {firstName, lastName, phone, email, address, massage} = userData;
    if(firstName && lastName && phone && email && address && massage){

    const res = fetch('https://paymentwebsite-ebef3-default-rtdb.firebaseio.com/userDataRecord.json',
    {method : "POST",
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify({
      firstName, 
      lastName,
       phone,
        email,
         address,
          massage

    })
    }
    );
    if(res){
      setUserData({
        firstName:"",
        lastName:"",
        phone:"",
        email:"",
        address:"",
        massage:"",
      })
      alert("Data Stored");
    } else{
      alert("Plz fill the data")
    }
  }else{
    alert("Plz fill the data")
  }

  }
  return (
    <>
    <section>
        <div className="contactus-section">
     <div className="container">
    <div className="row">
     <div className="col-12 col-lg-10 mx-auto">
        <div className="row">
            <div className="contact-leftside col-12 col-lg-5">
            <h1 className='main-heading fw-bold'>Contact With Our <br /> Sales Team</h1>
                <p className='main-hero-para'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui sint ipsa molestiae repellendus iure. Maiores!</p>
                <figure>
                 <img src="./images/hero1.jpg" alt="contactUsImg"  className='img-fluid'/>
                </figure>
                </div>        
                 <div className="contact-rightside col-12 col-lg-7">
                 <form method='POST'>
               
                    <div className="row">
<div className="col-12 col-lg-6 contact">
    <input
     type="text" 
     name='firstName' 
     id=''
    className='form-control'
     placeholder='First Name'
     value={userData.firstName}
     onChange={postUserData}   
     />
</div>
<div className="col-12 col-lg-6 contact">
    <input
     type="text" 
     name='lastName' 
     id=''
    className='form-control'
     placeholder='Last Name'
     value={userData.lastName}
     onChange={postUserData}   
     />
</div>
<div className="col-12 col-lg-6 contact">
    <input
     type="text" 
     name='phone' 
     id=''
    className='form-control'
     placeholder='Phone Number'
     value={userData.phone}
     onChange={postUserData}   
     />
</div>
<div className="col-12 col-lg-6 contact">
    <input
     type="text" 
     name='email' 
     id=''
    className='form-control'
     placeholder='Email ID'
     value={userData.email}
     onChange={postUserData}   
     />
</div>
                   
                   
                 </div>
                 <div className="row">
                  <div className="col-12  contact">
                    <input type="text" name="address" id=""
                    className='form-control'
                     placeholder='Add Adress'
                      value={userData.address}
                      onChange={postUserData}
                     />
                  </div>  
                 </div>
                 <div className="row">
                  <div className="col-12">
                    <input type="text" name="massage" id=""
                    className='form-control'
                     placeholder='Enter Your Massage'
                      value={userData.massage}
                      onChange={postUserData}
                     />
                  </div>  
                 </div>
                 <div class="form-check form-checkbox-style">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
  <label class="form-check-label" for="flexCheckChecked" className='main-hero-para'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, suscipit!
  </label>
</div>
<button type='submit' className='btn btn-style w-100' onClick={submitData}>Submit</button>
                    </form>
                 </div>
                 </div>
                </div>
                </div>
            </div>
        </div>
    </section>
    
    </>
  )
}

export default Content;