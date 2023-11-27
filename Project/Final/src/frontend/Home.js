import React, { useState } from "react";

export function Home() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
      });

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

      const clearInput = () => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
      };


    return (
      <div>
        <img
          style={{
            display: 'block',
            margin: '30px',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '40%',
          }}
          src="./images/characters/classicWhiteBG.jpeg"
          alt="Classic White Background"
        />
  
        <div
          style={{
            backgroundColor: 'pink',
            display: 'flex',
            justifyContent: 'space-evenly',
            backgroundImage: 'url(./images/varietyOfCookiesAndMilk.jpeg)',
            backgroundSize: '40%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '50%',
            height: '60vw',
          }}
        >
          <p
            style={{
              backgroundColor: 'whitesmoke',
              borderRadius: '30px',
              marginBottom: 'auto',
              textAlign: 'center',
              marginLeft: '30px',
              marginTop: '30px',
              color: '#090503ff',
              fontSize: '5vw',
              fontFamily:
                "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif",
            }}
          >
            Enjoy our locally made baked goods
          </p>
          <img
            style={{ borderRadius: '50% 10%', margin: '30px' }}
            width="40%"
            src=""
            alt=""
          />
          <p
            style={{
              backgroundColor: 'whitesmoke',
              borderRadius: '30px',
              marginTop: 'auto',
              marginBottom: '30px',
              marginRight: '30px',
              padding: '10px',
              textAlign: 'center',
              color: '#090503ff',
              fontSize: '5vw',
              fontFamily:
                "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif",
            }}
          >
            Guaranteed fresh
          </p>
        </div>
  
        <div style={{ backgroundColor: 'pink' }}>
          <div
            style={{
              marginRight: 'auto',
              marginLeft: 'auto',
              width: '70%',
              height: '10px',
              backgroundColor: 'rgb(255, 255, 255)',
              borderRadius: '10px',
            }}
          ></div>
  
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'stretch' }}>
            <img style={{ margin: 'auto' }} width="25%" src="./images/characters/coffeeBearNoBG.png" alt="Coffee Bear" />
            <form
              id="contactForm"
              style={{
                textAlign: 'center',
                margin: 'auto',
                paddingBottom: '30px',
              }}
            >
              <h1
                style={{
                  paddingTop: '30px',
                  color: '#090503ff',
                  fontSize: '5vw',
                  fontFamily: 'Lucida Handwriting,cursive',
                }}
              >
                Contact Us
              </h1>
              <input
                className="contactInput"
                style={{ padding: '10px' }}
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
              />{' '}
              <br />
              <input
                className="contactInput"
                style={{ padding: '10px' }}
                type="text"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
              />
              <br />
              <input
                className="contactInput"
                style={{ padding: '10px' }}
                type="text"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
              <br />
              <textarea
                className="contactInput"
                style={{ padding: '10px' }}
                rows="10"
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>
              <br />
              <button className="submit" type="button" onClick={clearInput}>
                Submit
              </button>
            </form>
            <img
              style={{ margin: 'auto' }}
              width="25%"
              src="./images/characters/greenShirtBearNoBG.png"
              alt="Green Shirt Bear"
            />
          </div>
        </div>
      </div>
    );
  };
  
// export default Home;