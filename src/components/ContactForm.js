import { useState } from "react";

import "./ContactForm.css";

import * as Icon from "react-bootstrap-icons";

export default function ContactForm() {

    const [ data , setData ] = useState({

        name : "",
        email : "",
        message : "",

    });

    let name , value ;

    function getData(event) {

        name = event.target.name;

        value = event.target.value;

        setData({...data, [name] : value });

    };

    const Submit = async (event) => {

       event.preventDefault();

       const { name, email, message } = data;

       if ( name && email && message ) {

          const response = await fetch(
           
               "https://react-firebase-977f9-default-rtdb.firebaseio.com/Contact_Form.json",

                {

                  method : "POST",

                  headers : { "Content-Type" : "application/json" },

                  body : JSON.stringify({

                      name,
                      email,
                      message,

                    })

                }
       
            );

          if (response) {
           
              setData({

                  name : "",
                  email : "",
                  message : "",

                });

              alert("Message Sent . . . ! !");

            };

        } else { alert("PLease fill all the  *Fields*  first . . . ! !"); };    

    };
    
    return(
    
    <>
    
    <div className="bg-secondary">

      <div className="container">
      
          <div className="form col-lg-8 col-sm-12 m-auto">

              <h1 className="text-center text-warning m-4"> <u>Contact Us</u> </h1>

              <form method="POST">

                  <div className="form-control bg-secondary">
					
                      <label> <strong>Your Name</strong> </label>
					
                      <input
                      
                          className="form-control mt-2 mb-2"
                          type="text"
                          name="name"
                          placeholder="Enter your name"
                          value={data.name}
                          onChange={getData}
                          required >

                      </input>
				
                  </div>

                  <br/>

                  <div className="form-control bg-secondary">
					
                      <label> <strong>Email</strong> </label>
					
                      <input
                        
                          className="form-control mt-2 mb-2"
                          type="text"
                          name="email"
                          placeholder="Enter your email addess"
                          value={data.email}
                          onChange={getData}
                          required >

                      </input>
				
                  </div>

                  <br/>

                  <div className="form-control bg-secondary">
				
                      <label> <strong>Message</strong> </label>
					
                      <textarea
                      
                          className="form-control mt-2 mb-2"
                          name="message"
                          placeholder="Your message here . . ."
                          value={data.message}
                          onChange={getData}
                          required >

                      </textarea>

				  </div>

                  <br/>

                  <div class="d-flex justify-content-center">  
          
                      <button
                          
                          type="submit"
                          name="submit"
                          value="submit"
                          className="btn"
                          onClick={Submit} >
                              
                          <strong className="button contact100-form-btn">
                              
                              Submit
                          
                              <i className="fa fa-long-arrow-right" aria-hidden="true"><Icon.ArrowRight/></i>

                          </strong>
                          
                      </button>
         
                  </div>

              </form>
             
          </div>
    
      </div>

    </div>  
    
    </>
  
  );

}
