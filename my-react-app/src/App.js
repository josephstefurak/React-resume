import './App.css';
import React, { useState } from 'react';
import imgdata from "./imgdata"
function App() {
  const images = imgdata.data.images
  //This portion of code appears redundant, but the variables being seperate and with unique names is essential for the trigger
  //of one re-render to not call all elements to re-render
  
  const [pic1, setImageJava] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_DfxIyHOoy2RXUN3R4ye6_2ehyInSUzp5Dg&usqp=CAU")
  const [pic2, setImageJavaScript] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_DfxIyHOoy2RXUN3R4ye6_2ehyInSUzp5Dg&usqp=CAU")
  const [pic3, setImageSQL] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_DfxIyHOoy2RXUN3R4ye6_2ehyInSUzp5Dg&usqp=CAU")
  const [pic4, setImageHTML] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_DfxIyHOoy2RXUN3R4ye6_2ehyInSUzp5Dg&usqp=CAU")
  const [pic5, setImageCSS] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_DfxIyHOoy2RXUN3R4ye6_2ehyInSUzp5Dg&usqp=CAU")
  const [pic6, setImageReact] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_DfxIyHOoy2RXUN3R4ye6_2ehyInSUzp5Dg&usqp=CAU")
  

  var empty = "";

  function showEducation() {
    var school = "The Pennsylvania State University";
    var location = "University Park, PA";
    var college = "College of Engineering";
    var year = "August 2022 - Present";
    var major = "Major: CMPSC_BS (Comp Sci - Univ Park)";
    var minor = "Minor: MATH_UMNR (Mathematics)";
    var certificate = "Certificate: SCBC_UCT (Smeal Business Cert)";
    var gpa = "GPA: 4.00";
    document.getElementById("schoolname").innerHTML = school;
    document.getElementById("location").innerHTML = location;
    document.getElementById("college").innerHTML = college;
    document.getElementById("year").innerHTML = year;
    document.getElementById("major").innerHTML = major;
    document.getElementById("minor").innerHTML = minor;
    document.getElementById("certificate").innerHTML = certificate;
    document.getElementById("gpa").innerHTML = gpa;
  }

  function hideEducation() {
    document.getElementById("schoolname").innerHTML = empty;
    document.getElementById("location").innerHTML = empty;
    document.getElementById("college").innerHTML = empty;
    document.getElementById("year").innerHTML = empty;
    document.getElementById("major").innerHTML = empty;
    document.getElementById("minor").innerHTML = empty;
    document.getElementById("certificate").innerHTML = empty;
    document.getElementById("gpa").innerHTML = empty;
  }

  function showWorkExperience() {
    var company = "Stefurak Limited Investments";
    var position = "Founder/Operator";
    var when = "May 2022 - Present";
    var what = "Domestic LLC with activity in:";
    var stock = "1. Stock Option Trading";
    var crypto = "2. Cryptocurrency Investing";
    var real = "3. Real Estate Investing";
    document.getElementById("companyname").innerHTML = company;
    document.getElementById("position").innerHTML = position;
    document.getElementById("when").innerHTML = when;
    document.getElementById("blank").innerHTML = empty;
    document.getElementById("business").innerHTML = what;
    document.getElementById("stocks").innerHTML = stock;
    document.getElementById("crypto").innerHTML = crypto;
    document.getElementById("realestate").innerHTML = real;
  }
  function hideWorkExperience(){
    document.getElementById("companyname").innerHTML = empty;
    document.getElementById("position").innerHTML = empty;
    document.getElementById("when").innerHTML = empty;
    document.getElementById("business").innerHTML = empty;
    document.getElementById("stocks").innerHTML = empty;
    document.getElementById("crypto").innerHTML = empty;
    document.getElementById("realestate").innerHTML = empty;
  }

  function showSkills(){
    var foreign = "Foreign Language";
    var ukrainian = "Ukrainian - 12 Ukrainian language credits earned from Manor College (July 2021)";
    var programming = "Programming Languages";
    var java = "Java - CMPSC 221 (PSU), AP Computer Science A (College Board)";
    var python = "Python - CMPSC 131 (PSU), CMPSC 132 (PSU)";
    var js = "JavaScript - CMPSC 297 (PSU), AP Computer Science Principles (College Board)";
    var html = "HTML/CSS";
    var english = "English Writing Tutoring";
    var trained = "Trained English Writing Tutor - The Writing Center @ Penn State ";
    var analysis = "Technical Analysis";
    document.getElementById("foreign").innerHTML = foreign;
    document.getElementById("ukrainian").innerHTML = ukrainian;
    document.getElementById("programming").innerHTML = programming;
    document.getElementById("java").innerHTML = java;
    document.getElementById("python").innerHTML = python;
    document.getElementById("js").innerHTML = js;
    document.getElementById("html").innerHTML = html;
    document.getElementById("tutoring").innerHTML = english;
    document.getElementById("trained").innerHTML = trained;
    document.getElementById("analysis").innerHTML = analysis;
  }
  function hideSkills(){
    //document.getElementById("skills").innerHTML = empty;
    document.getElementById("foreign").innerHTML = empty;
    document.getElementById("ukrainian").innerHTML = empty;
    document.getElementById("programming").innerHTML = empty;
    document.getElementById("java").innerHTML = empty;
    document.getElementById("python").innerHTML = empty;
    document.getElementById("js").innerHTML = empty;
    document.getElementById("html").innerHTML = empty;
    document.getElementById("tutoring").innerHTML = empty;
    document.getElementById("trained").innerHTML = empty;
    document.getElementById("analysis").innerHTML = empty;
  }
  function showActivities(){
    var frat = "Alpha Tau Omega Fraternity (Gamma Omega Chapter)";
    var title = "Risk Manager (Executive board 2024)";
    var title2 = "Junior Executive Board (2023)";
    var club1 = "Distributed Ledger Society (PSU)";
    var club2 = "Real Estate Society (PSU)";
    document.getElementById("frat").innerHTML = frat;
    document.getElementById("title").innerHTML = title;
    document.getElementById("title2").innerHTML = title2;
    document.getElementById("club1").innerHTML = club1;
    document.getElementById("club2").innerHTML = club2;
  }
  function hideActivities(){
    document.getElementById("frat").innerHTML = empty;
    document.getElementById("title").innerHTML = empty;
    document.getElementById("title2").innerHTML = empty;
    document.getElementById("club1").innerHTML = empty;
    document.getElementById("club2").innerHTML = empty;
  }

  function showProjects(){
    var coursescheduler = "Course Scheduler | Java, SQL ";
    var resumeapp = "Interactive Resume Application | JavaScript, React, HTML, CSS";
    var p11 = "Desktop application created using Java and SQL";
    var p12 = "Application allows for users to input academic data and make organizational operations";
    var p13 = "Stores information, and returns real-time data, regarding logistical constraints";
    var p21 = "Local browser application created utilizing JavaScript, HTML, CSS, and React";
    var p22 = "Application interactively displays this resume";
    document.getElementById("coursescheduler").innerHTML = coursescheduler;
    document.getElementById("resumeapp").innerHTML = resumeapp;
    document.getElementById("p11").innerHTML = p11;
    document.getElementById("p12").innerHTML = p12;
    document.getElementById("p13").innerHTML = p13;
    document.getElementById("p21").innerHTML = p21;
    document.getElementById("p22").innerHTML = p22;
    setImageJava(images[0].url)
    setImageSQL(images[2].url)
    setImageJavaScript(images[1].url)
    setImageCSS(images[4].url)
    setImageHTML(images[3].url)
    setImageReact(images[5].url)
  }
  function hideProjects(){
    document.getElementById("coursescheduler").innerHTML = empty;
    document.getElementById("resumeapp").innerHTML = empty;
    document.getElementById("p11").innerHTML = empty;
    document.getElementById("p12").innerHTML = empty;
    document.getElementById("p13").innerHTML = empty;
    document.getElementById("p21").innerHTML = empty;
    document.getElementById("p22").innerHTML = empty;
    setImageJava(null)
    setImageSQL(null)
    setImageJavaScript(null)
    setImageCSS(null)
    setImageHTML(null)
    setImageReact(null)
  }
  


  return (
    <body>
    <head>
      <title>Joseph Stefurak</title>
      <style>
        
      </style>
    </head>
      <div className="resume">
        <nav>
          <h1>Joseph <span>Stefurak</span></h1>
        </nav>
        <h2>Jms10771@psu.edu (215) 429-9984</h2>
        <h3>Huntingdon Valley, PA 19006</h3>
        <h3>Check out <a href="https://github.com/josephstefurak" className="link">GitHub</a></h3>
        <article>
          <h4>Education</h4>
          <section id="education">
            
            <div1 id = "educationtab">
              <span id = "schoolname"></span>
              <span id = "location"></span>
            </div1>

            <div1>
              <span id = "college"></span>
              <span id = "year"><b></b></span>
            </div1>
            <div id = "major"></div>
            <div id = "minor"></div>
            <div id = "certificate"></div>
            <div2 id = "gpa"></div2>

          </section>
          <button type="button" id="1" onClick={showEducation}>Show</button>
          <button type="button" id="5" onClick={hideEducation}>Hide</button>
          
          <hr />
          <h4>Work Experience</h4>
          <section id="work experience">
            
            <div1 id = "workTab">
              <span id = "companyname"></span>
              <span id = "position"></span>
            </div1>
            <div1>
              <span id = "blank"></span>
              <span id = "when"></span>
            </div1>
            <div id = "business"></div>
            <div3 id = "stocks"></div3>
            <br></br>
            <div3 id = "crypto"></div3>
            <br></br>
            <div3 id = "realestate"></div3>

          </section>
          <button type="button" id="2" onClick={showWorkExperience}>Show</button>
          <button type="button" id="6" onClick={hideWorkExperience}>Hide</button>
          <hr />

          <h4>Projects</h4>
          <section id="projects">

            <div4 id = "coursescheduler"></div4>
            <ul>
              <li2 id = "p11"></li2>
              <br></br>
              <li2 id = "p12"></li2>
              <br></br>
              <li2 id = "p13"></li2>
              <br></br>
            </ul>
            <img id="image1" src={pic1} className="pictures" alt="img" width = "100" height = "100"></img>
            <img id="image2" src={pic3} className="pictures" alt="img" width = "100" height = "100"></img>
            <br></br>
            <div4 id = "resumeapp"></div4>
            <ul>
              <li2 id = "p21"></li2>
              <br></br>
              <li2 id = "p22"></li2>
            </ul>
            <img id="image3" src={pic2} className="pictures" alt="img" width = "100" height = "100"></img>
            <img id="image4" src={pic4} className="pictures" alt="img" width = "100" height = "100"></img>
            <img id="image5" src={pic5} className="pictures" alt="img" width = "100" height = "100"></img>
            <img id="image6" src={pic6} className="pictures" alt="img" width = "100" height = "100"></img>
        


           
          </section>
          <button type="button" id="3" onClick={showProjects}>Show</button>
          <button type="button" id="7" onClick={hideProjects}>Hide</button>
          <br></br>
          <div>Check out <a href="https://github.com/josephstefurak" className="link">GitHub</a></div>
          
          
          
          <hr />
          <h4>Skills</h4>
          <section id="skills">
            
            <ul>
              <li id = "foreign"></li>
              <ul>
                <li2 id = "ukrainian"></li2>
              </ul> 
              <li id = "programming"></li>
              <ul>
                <li2 id = "java"></li2>
                <br></br>
                <li2 id = "python"></li2>
                <br></br>
                <li2 id = "js"></li2>
                <br></br>
                <li2 id = "html"></li2>
              </ul>
              <li id = "tutoring"></li>
              <ul>
                <li2 id = "trained"></li2>
              </ul>
              <li id = "analysis"></li>
            </ul>
        
          </section>
          <button type="button" id="4" onClick={showSkills}>Show</button>
          <button type="button" id="8" onClick={hideSkills}>Hide</button>
          <hr />
          <h4>Activities</h4>
          <section id="activities">
            <ul>
              <li id = "frat"></li>
              <ul>
                <li2 id = "title"></li2>
              </ul> 
              <li id = "club1"></li>
              <ul>
                <li2 id = "title2"></li2>
              </ul> 
              <li id = "club2"></li>
            </ul>
        
          </section>
          <button type="button" id="5" onClick={showActivities}>Show</button>
          <button type="button" id="9" onClick={hideActivities}>Hide</button>
          <hr />
          
         </article>
      
        <footer>Check out <a href="https://github.com/josephstefurak" className="link">GitHub</a></footer>
        <footer>Updated: 21 Nov, 2023</footer>
      </div>
    </body>
  );
}

export default App;
