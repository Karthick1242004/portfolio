import Image from "next/image";
import Pg from './page.module.css';
import Link from "next/link";
import Logo from '/app/Images/Logo1.png';
import Work1 from '/app/Images/netflix.png';
import Work2 from '/app/Images/insta.png';
import Work3 from '/app/Images/infotube.png';
import Work4 from '/app/Images/portfolio.png';
import Work5 from '/app/Images/visionpro.png';
import Work6 from '/app/Images/google.png';
import Work7 from '/app/Images/caliber.png';
import Work8 from '/app/Images/airmagic.png';
import Work9 from '/app/Images/iphone.png';
import Work10 from '/app/Images/smart.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faThreads } from "@fortawesome/free-brands-svg-icons";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <main>
     <div className={Pg.main}>
        <div className={Pg.nav}>
          <div className={Pg.navb}>
           <h1>Portfolio</h1>
           <div className={Pg.navb1}>
             <Link className={Pg.lk} href='#'>Home</Link>
             <Link className={Pg.lk} href='#'>About</Link>
             <Link className={Pg.lk} href='#'>Services</Link>
             <Link className={Pg.lk1} href='#'>Contact</Link>
           </div>
          </div>
        </div>
        <div className={Pg.maincont}>
          <div className={Pg.cont}>
            <div className={Pg.cont1}>
              <h2>Hello , I'm</h2>
              <h1>Karthickrajan S</h1>
              <p>Founder of Caliber Tech , freelancing fullstack developer in MERN stack,<br/>frontend developer in NEXT JS and also a videographer</p>
            </div>
            <div className={Pg.cont2}>
              <Link className={Pg.bt1} href='https://www.linkedin.com/in/karthickrajan-s-08394b289/'><FontAwesomeIcon  className={Pg.icn11} icon={faLinkedinIn} /></Link>
              <Link className={Pg.bt1} href='https://github.com/Karthick1242004'><FontAwesomeIcon  className={Pg.icn11} icon={faGithub} /></Link>
              <Link className={Pg.bt1} href='https://www.instagram.com/karthick_124_/'><FontAwesomeIcon  className={Pg.icn11} icon={faInstagram} /></Link>
              <Link className={Pg.bt1} href='https://wa.me/6382682378'><FontAwesomeIcon  className={Pg.icn11} icon={faWhatsapp} /></Link>
              <Link className={Pg.bt1} href='https://www.threads.net/@karthick_124_'><FontAwesomeIcon  className={Pg.icn11} icon={faThreads} /></Link>
            </div>
          </div>
          <div className={Pg.img}>
            <Image className={Pg.image1} src={Logo} alt="logo"/>
          </div>
        </div>
        <div className={Pg.maincont1}>
          <div className={Pg.abt1}>
          <Image className={Pg.image2} src={Logo} alt="logo"/>
          </div>
          <div className={Pg.abt2}>
           <h1>Who am I?</h1>
           <p>I am a engineering student who is currently pursuing BE Computer Science in Kongu Enginnering College in Tamil Nadu. Iam a fullstack developer who works in MERN stack technology and also a frontend developer in NEXT JS frame work. Started Caliber Tech and did some projects for small vendors, Worked on many freelancing projects which are listed below in this web page. Won competitions in web development and also participated in Smart India Hackathon 2023. My main hobby is videography , I like to capture moments and nature. Feel free to check out my social media pages for my videographic contents. </p>
           <Link href='#' className={Pg.bt3}>Download Resume</Link>
          </div>
        </div>
        <div className={Pg.maincont4}>
          <div className={Pg.ca}>
            <div className={Pg.ca1}>
              <h1>Caliber Tech</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem modi, provident repellendus corrupti deserunt ipsa placeat dolorem, tenetur dolore illo pariatur similique quibusdam. Inventore ab provident totam consequatur, impedit fuga.Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem modi, provident repellendus corrupti deserunt ipsa placeat dolorem, tenetur dolore illo pariatur similique quibusdam. Inventore ab provident totam consequatur, impedit fuga.Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem modi, provident repellendus corrupti deserunt ipsa placeat dolorem, tenetur dolore illo pariatur similique quibusdam. Inventore ab provident totam consequatur, impedit fuga.</p>
              <Link href='https://calibertech.netlify.app/' className={Pg.bt4}>Visit Our Page</Link>
            </div>
            <div className={Pg.ca2}>
            <Image className={Pg.image5} src={Logo} alt="logo"/>
            </div>
          </div>
        </div>
        <div className={Pg.maincont2}>
          <div className={Pg.sk1}>
            <h1>My Skills</h1>
            <p>- I like to craft beatiful and responsive web pages -</p>
          </div>
          <div className={Pg.sk2}>
              <div className={Pg.skk1}>
                  <div className={Pg.sk21}>
                    <h1>Frontend  Development</h1>
                    <p>Clean and seemless experience for users , search engines and converting users to customers.</p>
                  </div>
                  <div className={Pg.sk21}>
                    <h1>Always Responsive Design</h1>
                    <p>Always responsive pages , adaptive for all mobile , tablets , laptops and displays of users.</p>
                  </div>
                  <div className={Pg.sk21}>
                    <h1>Optimized Code For Performance</h1>
                    <p>Well optimized code for performance using React JS and NEXT JS and also search engines optimized for better user expreince.</p>
                  </div>
                  <div className={Pg.sk21}>
                    <h1>High Qality Videographic Content</h1>
                    <p>Started videography as a hobby and now a good and quality video creator. Visit my Instagram to view my videography works there </p>
                  </div>
              </div>
              <div className={Pg.skk2}>
                 <div className={Pg.skk21}>
                    <h2>React JS</h2>
                    <span className={Pg.bar}><span className={Pg.react}></span><p>- 75%</p></span>
                  </div>
                 <div className={Pg.skk21}>
                    <h2>HTML</h2>
                    <span className={Pg.bar}><span className={Pg.html}></span><p> - 80%</p></span>
                  </div>
                 <div className={Pg.skk21}>
                    <h2>CSS</h2>
                    <span className={Pg.bar}><span className={Pg.css}></span><p> - 80%</p></span>
                  </div>
                 <div className={Pg.skk21}>
                    <h2>NEXT JS</h2>
                    <span className={Pg.bar}><span className={Pg.next}></span><p> -70%</p></span>
                  </div>
                 <div className={Pg.skk21}>
                    <h2>Tailwind CSS</h2>
                    <span className={Pg.bar}><span className={Pg.tail}></span><p> - 60%</p></span>
                  </div>
                 <div className={Pg.skk21}>
                    <h2>Node JS</h2>
                    <span className={Pg.bar}><span className={Pg.node}></span><p> - 60%</p></span>
                  </div>
                 <div className={Pg.skk21}>
                    <h2>Mongo DB</h2>
                    <span className={Pg.bar}><span className={Pg.mongo}></span><p> - 70%</p></span>
                  </div>
                 <div className={Pg.skk21}>
                    <h2>MYSQL</h2>
                    <span className={Pg.bar}><span className={Pg.mysql}></span><p> - 65%</p></span>
                  </div>
              </div>
          </div>
        </div>
        <div className={Pg.maincont3}>
          <div className={Pg.mainc1}>
            <h1>My Works</h1>
          </div>
          <div className={Pg.mainc2}>
          
            <div className={Pg.mainc21}>
              <div className={Pg.im}>
                  <Image src={Work1} alt="Netflix" className={Pg.w1}></Image>
               </div>
               <div className={Pg.mn}>
                <div className={Pg.mn1}>
                   <h1>Netflix Clone</h1>
                   <h6>MERN Stack - Web-App</h6>
                 </div>
                 <div className={Pg.mn2}>
                   <Link href='https://www.linkedin.com/posts/karthickrajan-s-08394b289_mernstack-netflixclone-fullstackdev-activity-7160298236484677632-3Zeo?utm_source=share&utm_medium=member_ios'><FontAwesomeIcon  className={Pg.icn2} icon={faLinkedin} /></Link>
                   <Link href='https://github.com/Karthick1242004/Netflix-Clone-App'><FontAwesomeIcon  className={Pg.icn2} icon={faGithub} /> </Link>
                   <Link href='https://karthicknetflixclone.netlify.app/'><FontAwesomeIcon  className={Pg.icn2} icon={faPaperclip} /></Link>
                 </div>
               </div>
               <p> • This is a Netflix website clone created for practicing API fetch , post , rendering components in other pages and also for writing API for Email and Password GET and POST in MongoDB using Node JS and Express JS . It also gave a good knowlegde over React states and hooks.</p>
               <p> <b>Project Type :</b> Solo Project</p>
            </div>
            <div className={Pg.mainc21}>
              <div className={Pg.im}>
                  <Image src={Work3} alt="Netflix" className={Pg.w1}></Image>
               </div>
               <div className={Pg.mn}>
                <div className={Pg.mn1}>
                   <h1>Infotube (SIH2023)</h1>
                   <h6>MERN Stack - Web-App</h6>
                 </div>
                 <div className={Pg.mn2}>
                   <Link href='https://www.linkedin.com/posts/karthickrajan-s-08394b289_sih2023-studentinnovation-reactjs-activity-7121559521478537216-gf0-?utm_source=share&utm_medium=member_desktop'><FontAwesomeIcon  className={Pg.icn2} icon={faLinkedin} /></Link>
                   <Link href='https://github.com/Karthick1242004/infotubesih'><FontAwesomeIcon  className={Pg.icn2} icon={faGithub} /> </Link>
                 </div>
               </div>
              
               <p> • As a part of Smart India Hackathon 2023, we selected a problem statement for developing a <b>'Online integrated platform for students to upload project details'</b>. We developed this project and got selected for college level hackathon after clearing project presetation round.</p>
               <p> <b>Project Type :</b> Team Project(Team Leader, Frontend Developer)</p>
            </div>
            <div className={Pg.mainc21}>
              <div className={Pg.im}>
                  <Image src={Work2} alt="Netflix" className={Pg.w1}></Image>
               </div>
               <div className={Pg.mn}>
                <div className={Pg.mn1}>
                   <h1>Instagram Clone</h1>
                   <h6>NEXT JS - Web-App</h6>
                 </div>
                 <div className={Pg.mn2}>
                   <Link href='https://www.linkedin.com/posts/karthickrajan-s-08394b289_nextjs-frontenddevelopment-instagramclone-activity-7157236046735310848-tgA6?utm_source=share&utm_medium=member_desktop'><FontAwesomeIcon  className={Pg.icn2} icon={faLinkedin} /></Link>
                   <Link href='https://github.com/Karthick1242004/Instagram-Clone'><FontAwesomeIcon  className={Pg.icn2} icon={faGithub} /> </Link>
                 </div>
               </div>
               <p> • This is a Instagram clone created using NEXT JS framework. This is my first project in NEXT JS.It is just a complete frontend clone of Instagram. It gave a brief knowlegde about NEXT JS project structure , routing and rendering components across pages . It was a great experience in frontend development</p>
               <p> <b>Project Type :</b> Solo Project</p>   
            </div>
            <div className={Pg.mainc21}>
              <div className={Pg.im}>
                  <Image src={Work4} alt="Netflix" className={Pg.w1}></Image>
               </div>
               <div className={Pg.mn}>
                <div className={Pg.mn1}>
                   <h1>3D Portfolio</h1>
                   <h6>React JS & Three JS - Web-App</h6>
                 </div>
                 <div className={Pg.mn2}>
                   <Link href='https://www.linkedin.com/posts/karthickrajan-s-08394b289_webdevelopment-threejs-blenderart-activity-7157677820071084032-uJof?utm_source=share&utm_medium=member_desktop'><FontAwesomeIcon  className={Pg.icn2} icon={faLinkedin} /></Link>
                   <Link href='https://github.com/Karthick1242004/3Dportfolio'><FontAwesomeIcon  className={Pg.icn2} icon={faGithub} /></Link>
                 </div>
               </div>
               <p> • This a prototype of my 1st 3D model integration in ReactJS. With the help of Blender,Spline and Three JS I was able to make a 3D immersible game world into the hands of web. This gave a good experience in using Blender and Spline. ThreeJS gave a good knowledge on orbit controlling and scene management.</p>
               <p> <b>Project Type :</b> Solo Project</p>   
            </div>
            <div className={Pg.mainc21}>
              <div className={Pg.im}>
                  <Image src={Work5} alt="Netflix" className={Pg.w1}></Image>
               </div>
               <div className={Pg.mn}>
                <div className={Pg.mn1}>
                   <h1>Vision Pro Web Clone</h1>
                   <h6>HTML,CSS & JS</h6>
                 </div>
                 <div className={Pg.mn2}>
                   <Link href='https://www.linkedin.com/posts/karthickrajan-s-08394b289_webdesign-javascriptmagic-responsivedesign-activity-7106280737900740608-EWa1?utm_source=share&utm_medium=member_desktop'><FontAwesomeIcon  className={Pg.icn2} icon={faLinkedin} /></Link>
                   <Link href='https://github.com/Karthick1242004/applevisionproui'><FontAwesomeIcon  className={Pg.icn2} icon={faGithub} /> </Link>
                   <Link href='https://karthick1242004.github.io/applevisionproui/'><FontAwesomeIcon  className={Pg.icn2} icon={faPaperclip} /></Link>
                 </div>
               </div>
               <p> • This is Apple Vision Pro website clone . This project gave a good handson experience in javascript parallax animation and adaptive scrolling in web page. The website inspired me to a lot and I wanted to try to make it and i did it. This is one of the project that took me so much time to complete than other projects.</p>
               <p> <b>Project Type :</b> Solo Project</p>   
            </div>
            <div className={Pg.mainc21}>
              <div className={Pg.im}>
                  <Image src={Work6} alt="Netflix" className={Pg.w1}></Image>
               </div>
               <div className={Pg.mn}>
                <div className={Pg.mn1}>
                   <h1>Elder To-Do List</h1>
                   <h6>React JS - Web-App</h6>
                 </div>
                 <div className={Pg.mn2}>
                   <Link href='https://www.linkedin.com/posts/karthickrajan-s-08394b289_teamwork-hackathon-frontenddesign-activity-7126593601203048448-T-6q?utm_source=share&utm_medium=member_desktop'><FontAwesomeIcon  className={Pg.icn2} icon={faLinkedin} /></Link>
                   <Link href='https://github.com/Karthick1242004/Googlehackathon'><FontAwesomeIcon  className={Pg.icn2} icon={faGithub} /> </Link>
                 </div>
               </div>
               <p><b>•</b> Created with the problem statement provided by Google Hackathon ,IIT Patna. This is a To-Do list app for elderly people , they can maintain their daily activities and reminders for medicine timeings and hospital appointments and also to chat with their caretakers . This is only a frontend of the application in ReactJS.</p>
               <p> <b>Project Type :</b> Team Project(Frontend Developer)</p>   
            </div>


            {/* from herer */}


            <div className={Pg.mainc21}>
              <div className={Pg.im}>
                  <Image src={Work7} alt="Netflix" className={Pg.w1}></Image>
               </div>
               <div className={Pg.mn}>
                <div className={Pg.mn1}>
                   <h1>Caliber Tech</h1>
                   <h6>MERN Stack - Web-App</h6>
                 </div>
                 <div className={Pg.mn2}>
                   <Link href='https://www.linkedin.com/posts/karthickrajan-s-08394b289_webdevelopment-reactjs-nodejs-activity-7162115397318627328-1q_j?utm_source=share&utm_medium=member_desktop'><FontAwesomeIcon  className={Pg.icn2} icon={faLinkedin} /></Link>
                   <Link href='https://github.com/Karthick1242004/Caliber-Tech-App'><FontAwesomeIcon  className={Pg.icn2} icon={faGithub} /> </Link>
                   <Link href='https://calibertech.netlify.app/'><FontAwesomeIcon  className={Pg.icn2} icon={faPaperclip} /></Link>
                 </div>
               </div>
               <p><b>•</b> This is a landing page created for my own startup named <b>Caliber Tech</b>. Caliber Tech is a web based startup which provides web pages for small shops and vendors in affordable price with unaffordable quality. This is started using three of my classmates who are so enthusiastic about web development .</p>
               <p> <b>Project Type :</b> Team Project(Designer and Frontend Developer)</p>    
            </div>
            <div className={Pg.mainc21}>
              <div className={Pg.im}>
                  <Image src={Work8} alt="Netflix" className={Pg.w1}></Image>
               </div>
               <div className={Pg.mn}>
                <div className={Pg.mn1}>
                   <h1>AirMagic</h1>
                   <h6>HTML,CSS,JS & NodeJS - Web</h6>
                 </div>
                 <div className={Pg.mn2}>
                   <Link href='https://github.com/Karthick1242004/airmagic'><FontAwesomeIcon  className={Pg.icn2} icon={faGithub} /> </Link>
                 </div>
               </div>
               <p><b>•</b> This is a freelancing project done by <b>Caliber Tech</b>. A ecommerce page for photo frames . We (Caliber Tech) were only asked to develope the frontend for the ecommerce site. The backend team needs the project only in HTML . With constent meetings with the coustomer , we were able to develope the website .</p>
               <p> <b>Project Type :</b> Team Project(Designer and Full-Frontend Developer)</p>
            </div>
            <div className={Pg.mainc21}>
              <div className={Pg.im}>
                  <Image src={Work9} alt="Netflix" className={Pg.w1}></Image>
               </div>
               <div className={Pg.mn}>
                <div className={Pg.mn1}>
                   <h1>iPhone 14 Pro Web Clone</h1>
                   <h6>React JS - Web-App</h6>
                 </div>
                 <div className={Pg.mn2}>
                 <Link href='https://www.linkedin.com/posts/karthickrajan-s-08394b289_reactjs-hooks-ui-activity-7100661194142691328-Qlz7?utm_source=share&utm_medium=member_desktop'><FontAwesomeIcon  className={Pg.icn2} icon={faLinkedin} /></Link>
                   <Link href='https://iphone14propromax124.netlify.app/'><FontAwesomeIcon  className={Pg.icn2} icon={faPaperclip} /></Link>
                 </div>
               </div>
               <p><b>•</b> This is a iPhone 14 Pro Max website clone . The design , style , images , animations and layouts inspired me to clone this website . It was challenging and also intresting  to devlope . It made me understand more about ReactJS Hooks concept. Apple websites are fun to clone. A good process for beginners like me.</p>
               <p> <b>Project Type :</b> Solo Project</p>
            </div>
            <div className={Pg.mainc21}>
              <div className={Pg.im}>
                  <Image src={Work10} alt="Netflix" className={Pg.w1}></Image>
               </div>
               <div className={Pg.mn}>
                <div className={Pg.mn1}>
                   <h1>iPhone 14 Pro Web Clone</h1>
                   <h6>React JS - Web-App</h6>
                 </div>
                 <div className={Pg.mn2}>
                   <Link href='https://applevisionproui.netlify.app/'><FontAwesomeIcon  className={Pg.icn2} icon={faPaperclip} /></Link>
                 </div>
               </div>
               <p><b>•</b> This is a UI concept for <b>Smart Home App</b> in apple vision pro. Creating a UI and developing the frontend for this application in Spatial Computing is such a challenging work. So i just tried a sample ReactJS clone. The technology needed to implement this app is no were near a comman man's power.</p>
               <p> <b>Project Type :</b> Solo Project</p>
            </div>
          </div>
        </div>
        <div className={Pg.maincont5}>
          <div className={Pg.contact}>
            <div className={Pg.contact2}>
              <h1>Personal Email: <span className={Pg.sp}><b>@karthick1242004@gmail.com</b></span></h1>
              <h1>Company Email: <span className={Pg.sp}><b>@calibertech875@gmail.com</b></span></h1>
            </div>
            <Image className={Pg.image121} src={Logo} alt="logo"/>
            <div className={Pg.contact1}>
              <h1>Designed and developed by <span className={Pg.sp}><b>Karthickrajan S</b></span> Copyright 2023.Powered by <Link className={Pg.likn} href='https://calibertech.netlify.app/'><b>#Caliber Tech.</b></Link></h1>
            </div>
          </div>
        </div>
     </div>  
    </main>
  );
}
