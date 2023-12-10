import React from "react";
import NavBar from "./nav";

export function About() {
    const containerStyle = {
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      backgroundColor: 'pink',
      width: '40%',
      padding: '20px',
      borderRadius: '100%',
      marginTop: '40px',
    };
  
    const imageStyle = {
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '100%',
    };
  
    const headingStyle = {
      textAlign: 'center',
      fontSize: '10vw',
      fontFamily: 'Lucida Handwriting, cursive',
    };
  
    const paragraphStyle = {
      margin: '30px 20% 30px 20%',
    };
  
    return (
      <div>
          <NavBar></NavBar>
        <div style={containerStyle}>
          <img style={imageStyle} width="100%" src={process.env.PUBLIC_URL + 'images/characters/messageBearNoBG.png'} alt="Amero Bakery" />
        </div>
        <h1 style={headingStyle}>About Us</h1>
        <p style={paragraphStyle}>
          Welcome to the sweet journey of Amero Bakery, where a passion for baking
            ignited in high school blossomed
            into a dream. Our story begins with a young and ambitious high schooler, Katelyn Lenz, whose love for baking
            started as a simple hobby.
            <br></br>
            <br></br>
            Katelyn discovered her passion for baking during her high school years. What began as experimenting with
            cookie recipes in her family's kitchen quickly turned into a deep love with the art of creating delectable
            treats. With each batch of cookies, breads, and rolls, she honed her skills and nurtured a dream - to share
            her delicious creations with the world.
            <br></br>
            <br></br>
            She is pursuing her education at Iowa State University, Katelyn couldn't shake her dream of turning her
            baking passion into a thriving business. She was determined to create something special, something that
            would bring joy to people's lives, one bite at a time.
            <br></br>
            <br></br>
            While juggling classes, assignments, and exams, Katelyn started to create her business plan with modern
            twists. Her college apartment often filled with the mouthwatering aroma of freshly baked goods. Friends and
            fellow students couldn't resist the temptation, and her sweet treats quickly gained a reputation.
            <br></br>
            <br></br>
            It wasn't long before the demand for Katelyn's baked goods exceeded the capacity of her apartment. With the
            support and encouragement of friends and family,she decided to take a leap of faith.
            <br></br>
            <br></br>
            She officially founded Amero Bakery, and the journey of turning her dream into reality began.
            <br></br>
            Starting from humble beginnings, Katelyn set out to create a business that would not only deliver delicious,
            handcrafted treats but also bring happiness to people's lives. She believed that the simple act of sharing
            something sweet could brighten someone's day and create lasting memories.
            Today, Amero Bakery is more than just a business; it's a labor of love. Every treat is baked with care,
            using the finest ingredients and Katelyn's passion and expertise. We've come a long way since those
            apartment baking sessions at Iowa State University, but our commitment to delivering happiness to your
            doorstep remains unchanged.
            <br></br>
            <br></br>
            Whether you're celebrating a special occasion, sending a heartfelt gift, or simply indulging in some
            self-care, we are here to make your moments sweeter. Join us on this sweet journey, and let us deliver a
            little piece of happiness to your front door, just as Katelyn dreamed all those years ago. Thank you for
            being a part of our story, and we can't wait to share our delicious creations with you!
        </p>
      </div>
    );
  };
  
// export default AboutUs;