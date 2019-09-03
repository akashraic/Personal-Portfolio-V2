/*Component to be used as a side bar for more information
* this sidebar has the ability to change its content
* based on the section it is in and contains the information
* to be displayed on the screen*/

import React, {Component} from 'react';
import {Link } from "react-router-dom";
import './Sidebar.css';
import CloseDrawerButton from "./SideDrawer/CloseDrawerButton";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome/index.es";
import {faInstagram} from "@fortawesome/free-brands-svg-icons/faInstagram";
import {faFilePdf} from "@fortawesome/free-solid-svg-icons/faFilePdf";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons/faLinkedin";
import {faGithubSquare} from "@fortawesome/free-brands-svg-icons/faGithubSquare";
import Pdf from "../Resume/Akash_Rai_Chhabria_2019_01_13.pdf";

/*An array of the different options, where they belong, their route,
* their path in firebase, and (depending on the section) project description
* and specifics*/
const routes = [
    {
        label: "Cars",
        path: "/Photography",
        exact: true,
        option: "Photo",
        fire_path: "Photo Gallery/Cars",
    },
    {
        label: "Concert",
        path: "/Photography",
        option: "Photo",
        fire_path: "Photo Gallery/Concert",
    },
    {
        label: "Events",
        path: "/Photography",
        option: "Photo",
        fire_path: "Photo Gallery/Event",
    },
    {
        label: "Headshots",
        path: "/Photography",
        option: "Photo",
        fire_path: "Photo Gallery/Headshots",
    },
    {
        label: "Landscape",
        path: "/Photography",
        option: "Photo",
        fire_path: "Photo Gallery/Landscape",
    },
    {
        label: "Portraits",
        path: "/Photography",
        option: "Photo",
        fire_path: "Photo Gallery/Portraits",
    },
    {   label: "Street",
        path: "/Photography",
        option: "Photo",
        fire_path: "Photo Gallery/Street",
    },
    {   label: "Holistic Bodies",
        path: "/Programming",
        option: "Prog",
        fire_path: "Programming/Holistic.png",
        git: "https://github.com/muztank10/holistic-bodies/blob/master/public/index.html",
        website: "https://holisticbodies.ca/",
        specs: "Home, About, Contact, Social media, Mailchimp subscription form built in, Google Blog integration, Merchandise store embedded in website, User traffic tracking",
        techStack: " React.js Framework, Node.js, Ecwid, React-Bootstrap, MailChimp API, Firebase Hosting, Google Analytics  ",
        time: "4 Months",
        description: "Holistic Bodies is a project initiated by a personal trainer at the Mattamy Athletic Center (Ryerson University). His goal was to empower people to live a better life by accessing their strength and by living a more fit life. I was involved in the initial release of his website where he could provide his clients with access to his videos and merchandise. The website also provided a user friendly method of subscribing to future updates or for booking consultations. For more information, visit the original website below or to learn about my contributions, visit my github page below or contact me."
    },
    {   label: "Gifting Guru",
        path: "/Programming",
        option: "Prog",
        fire_path: "Programming/Gifting.png",
        git: "https://github.com/muztank10/GiftingGuru",
        website: "https://www.giftinggurucorporate.com/",
        specs: "Home, About, Contact, User input form, Displays recommendations from algorithm",
        techStack: " HTML, CSS, PHP, MySQL, JavaScript, Google Analytics ",
        time: "3 Months",
        description: "Gifting Guru is a startup conceived by a Ryerson University student and was supported by the DMZ Sandbox incubator at Ryerson University. Its purpose was to provide its users with gift suggestions (given a budget) based on the gift receiver’s general character (along with age and gender). My role was to create an initial algorithm for the platform but my role evolved from there as the lead developer after a front end developer and another back end developer was hired. The website is currently not live. However, you can find my contribution to the project on the Github link below.",
    },
    {   label: "Drone and City Simulator",
        path: "/Programming",
        option: "Prog",
        fire_path: "Programming/Drone.png",
        git: "/About",
        website: "/About",
        specs: "Texture Mapping, City Saving, Drone Movement, 3rd to 1st person view",
        techStack: " OpenGL and C",
        time: "3 Months",
        description: "This project is part of my graphics course at Ryerson University. This was a 3 part project. In the first part we were asked to make a drone from glut shapes, the drone was required to have 4 arms and fans that rotated upon movement. The second part was to create a city by adding an extrusion algorithm to the blocks to make a city and use texture mapping to give each building a texture. The final part was to put both of these assignments together and add extra features, the features I added was a switch between first and third person and movement across the city. Since this is a school project, the repository cannot be public so if you would like to view my code, please contact me by clicking on the link below.",
    },
    {   label: "Battle of the Bands 2018",
        path: "/Programming",
        option: "Prog",
        fire_path: "Programming/BOTB.png",
        git: "https://github.com/muztank10/Battle-of-the-Bands-2018",
        website: "http://stw.ryerson.ca/~music/",
        specs: "Home, About, Contact, Social Media, User input form for auditions and feedback, FAQ section, Sponsors, JQuery Countdown clock",
        techStack: " HTML, CSS, JQuery, JavaScript, Google Analytics, React Bootstrap ",
        time: "2 weeks",
        description: "This project was to make a website for Musicians@Ryerson’s annual event “Battle of the Bands. The purpose of this event is to provide local talent with an audience and opportunities to advance their music careers.This event is one of the bigger events on campus and has an attendance of 300 to 600 people every year. Along with this, between 20 and 30 bands submit applications to play for the event. I found that for such a large scale event, it should be more convenient to access information about the event and for bands to submit auditions. This led to me introducing the idea of a website to the event organizers. Along with providing information and creating a more organized environment for band auditions. this website also provides users with a convenient way to buy tickets and the organizers a way to track their user traffic, define the interest in the event, to provide sponsors with exposure to our membership. The original link is updated according to the new years event but the design is based on my original design. You can also find my work on this website in the GitHub link below.",
    },
    {   label: "My Website",
        path: "/Programming",
        option: "Prog",
        fire_path: "Programming/Personal.png",
        git: "https://github.com/muztank10/Personal-Portfolio-V2",
        website: "#",
        specs: "Home, About, Contact, Photo Gallery, Project displays, Google Analytics",
        techStack: "React JS, Three.js, React-Bootstrap, Firebase Storage and hosting, Node.js, React-Router, Vanta.js, Font Awesome",
        time: "2 Months",
        description: "This project is my personal website to showcase my work and its diversity. The purpose of this website is to show the extent of my technical knowledge and design theory while also showing that I have interesting and relatable. Having said that, I can also take your idea and reinterpret it in an appealing and relatable way, or I can take your idea. This website is built to be an experience, where you can choose any path (Photography, Programming, and Project Management) and see how I organize and construct my ideas. To website link and github link are both given below, to learn more, do not hesitate to contact me.",
    },
    {   label: "Battle of the Bands 2018 (Marketing Lead)",
        path: "/Projects",
        option: "Proj",
        fire_path: "Projects/BOTB2018.png",
        description: "The Battle of the Bands is Musicians@Ryerson’s Annual flagship event. The vision behind this event is to: Help up-and-coming Ryerson bands grow musically," +
        "and to provide space for all Ryerson students to feel accepted and connected through music, and It consists of 6 bands playing for a large audience and a panel of judges to determine the best band in Ryerson and to provide all bands with a larger following and opportunities to help them grow musically. These opportunities include music store gift cards, Festival spots and more.  I had the opportunity to run the marketing division of the team. As the marketing lead, I was incharge of content creation and social media. Our team created: posters, a Banner, a website, a Facebook event page, a General promo video, and a promo video for each band showcasing their ability. Under my lead, Battle of the bands had a reach of 10K people, 2K event page views, and 559 tickets sold. The General promo video itself reached 5K people and each individual video reached a 1K people. To learn more about our marketing efforts or to learn about the project in general, don’t hesitate to contact me.",
        webLink: "http://stw.ryerson.ca/~music/" ,
        Resp: "Create content (website, general graphics, live video and photography of the event, and promo videos) and to push it on social media" ,
        Accomp: "Had 10K views on our Facebook event page, all promo videos totalled 10K views, 559 people in attendance, and created graphics that would set the tone for the event",
        time: "8 months ",
        linkLabel: "Event Page",
        relLinks: "https://www.facebook.com/events/mattamy-athletic-centre/battle-of-the-bands-2018/390263968111324/",
    },
    {   label: "Battle of the Bands 2019 (Event Organizer)",
        path: "/Projects",
        option: "Proj",
        fire_path: "Projects/BOTB2019.png",
        description: "The Battle of the Bands is Musicians@Ryerson’s Annual flagship event. The vision behind this event is three fold: Help up-and-coming Ryerson bands grow musically," +
        "to provide space for all Ryerson students to feel accepted and connected through music, and" +
        "to reach out to members of the community who may not be familiar with the music community. It comprises of 6 bands playing for a large audience and a panel of judges to determine the best band in Ryerson and to provide all bands with a larger following and opportunities to help them grow musically. These opportunities include music store gift cards, Festival spots and more. This year, I had the opportunity to run the event. I had a team of 30+ people helping me with: Sponsorship, day of Operations, and Marketing. With the help of my team, I had secured the former Maple leaf gardens as a venue and Westbury productions as the production company. We raised $20,000 to run the event, had approximately 350+ people in attendance, 3 judges (executive of Riverfest Elora, Marketing Manager of Dine Alone records, and The Dean of the Faculty of Science), 11 sponsors, and 6 bands, visit the event page listed below to find the list of sponsors and bands. The winning band received $150 of long and Mcquade gift cards, an opportunity to play at Hillside 2020 and a meeting with the marketing manager of Dine Alone records. The event was a huge success and had brought us lots of respect from not only our student union and Ryerson University, but also from the Toronto Music business as a whole. To learn more about it, refer to the links below or contact me",
        webLink: "http://stw.ryerson.ca/~music/" ,
        Resp: "Secure venue and production company, raise funds to run event, gather a team, run an audition " ,
        Accomp: "Secured the Former Maple Leaf Gardens, Received $20,000 in funding, lead a team of 30+ people, got 11 sponsors, 350+ people in attendance, and big name sponsors like Long and McQuade, Dine Alone records, Hillside festival, and Riverfest Elora",
        time: "1 year ",
        linkLabel: "Article about Battle of the Bands",
        relLinks: "https://www.canculturemag.com/music-1/2019/4/2/tequila-nosedive-steals-the-show-at-ryersons-battle-of-the-bands",
    },
    {   label: "Musicians@Ryerson Website (Manager)",
        path: "/Projects",
        option: "Proj",
        fire_path: "Projects/Music.png",
        description: "Musicans@Ryerson is Ryerson University’s unofficial music faculty. Their vision is to foster the local music community musicians and listeners alike. The purpose of this website is to provide their 2000 student membership with updates on events and executive office hours to learn about music. I work with a web developer to convey the teams needs on the website and to ensure the project is working with the timeline. To learn about Musicians@Ryerson, visit their website below.",
        webLink: "http://stw.ryerson.ca/~music/Main_Website/M@R_Home.html" ,
        Resp: "Managing the development of the website, ensuring the website is on track, ensure that the executive team's opinions are voiced" ,
        Accomp: "Oversaw the creation of a fully functional website with a calendar page detailing our events, times for each executive's office hours, and more information on events.",
        time: "2 months for MVP release, ongoing maintenance",
        linkLabel: "N/A",
        relLinks: "#",
    },
];


class Sidebar extends Component {

    /*Constructor initializes deciding factors for sidebar content to
    empty string*/
    constructor(props) {
        super(props);

        this.state = {
            option: " ",
            choice: " ",
            action: " ",
        };
    }
    render() {
        //Determines CSS for sidebar depending on whether it is open or not
        let drawerClasses = 'Sidebar';
        if(this.props.show) {
            drawerClasses = 'Sidebar open';
        }
        return (
            <div className={drawerClasses}>
                {/*closes sidebar when clicked*/}
                <div><CloseDrawerButton close={this.props.hide}/></div>
                <ul className="nav-list">
                    <div className="sm-wrapper">
                        {/*filters and displays content of sidebar based on option in routes array
                        and the state set by the route (this.props.choice)*/}
                        {routes.filter(routes => routes.option === this.props.choice).map((route, index) => (
                            /*determines what path is being used for the photo and
                            if props "description" is present in the parent component
                            then sidebar populates the parent with the content in the
                            routes array*/
                            <li className="list"
                                onClick={() => {
                                    this.props.action(route.fire_path);
                                    if(this.props.description){
                                        this.props.description(
                                            route.description,
                                            route.git,
                                            route.website,
                                            route.specs,
                                            route.techStack,
                                            route.time)
                                    }
                                    /*if props "Project" is present in the parent component
                                    then sidebar populates the parent with the content in the
                                    routes array*/
                                    else if(this.props.project) {
                                        this.props.project(
                                            route.description,
                                            route.webLink,
                                            route.Resp,
                                            route.Accomp,
                                            route.time,
                                            route.linkLabel,
                                            route.relLinks)
                                    }
                                    //hides sidebar on selection of content from sidebar
                                    this.props.hide()
                                }}>
                                {/*Link obtains route path from the routes array*/}
                                <Link
                                    key={index}
                                    to={route.path}
                                    className="list-anchor"
                                >{route.label}</Link>
                            </li>
                        ))}
                    </div>
                    {/*creates space between main sidebar content and supplementary content*/}
                    <div className="spacer"/>
                    <div className="Lower-list-wrapper">
                        <li className="Lower-list">
                            <Link to="/About" className="list-anchor">About Me</Link>
                        </li>
                    </div>

                    <div className="Social-wrapper">
                        <li className="Social-list">
                            <a href={Pdf} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="far fa-file-pdf" icon={faFilePdf} /></a>
                        </li>
                        <li className="Social-list">
                            <a href={"https://www.instagram.com/akashrai_10/"} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="instant fa-fw" icon={faInstagram} /></a>
                        </li>
                        <li className="Social-list">
                            <a href={"https://www.linkedin.com/in/akash-chhabria/"} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="fab fa-linkedin" icon={faLinkedin}/></a>
                        </li>
                        <li className="Social-list">
                            <a href={"https://github.com/muztank10/"} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="fab fa-github-square" icon={faGithubSquare}/></a>
                        </li>
                    </div>
                </ul>
            </div>
        );
    }
}

export default Sidebar;
