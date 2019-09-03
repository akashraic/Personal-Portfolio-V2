/*Component for Photography section of website, Contains sidebar,
* pictures, and modal gallery view. */

import React, {Component} from 'react';
import {Button, Row, Col, Image} from 'react-bootstrap';
import './Main_content.css';
import Sidebar from "./Sidebar";
import * as firebase from 'firebase';
import Backdrop from './Backdrop/Backdrop';
import Toolbar from "./SideDrawer/Toolbar";
import ModalGallery from "./Modal/ModalGallery";
import Footer from "./Footer/Footer";

class Photography extends Component {

    /*Initializes state to default values*/
    constructor(props) {
        super(props);

        this.state = {
            //identifies what section of the website
            option: "Photo",
            //Array of pictures retrieved from firebase storage
            fileURL: [],
            //Path for firebase folder that contains pictures
            fire_path: "",
            //random boolean to stop image retrial after one iteration
            bool: true,
            //used to open or close the sidebar
            sideDrawerOpen: false,
            //determines when the modal gallery should open
            showModal: false,
            //Id for each photo retrieved from firebase
            photoID: -1
        };
        this.childHandler = this.childHandler.bind(this);
        this.previousSlide = this.previousSlide.bind(this);
        this.nextSlide = this.nextSlide.bind(this);
    }

    //Method to show previous image on Modal Gallery
    previousSlide () {
        let lastIndex = this.state.fileURL.length - 1;
        let shouldResetIndex = this.state.photoID === 0;
        let index =  shouldResetIndex ? lastIndex : this.state.photoID - 1;
        this.setState({
            photoID: index
        });
    };

    //Method to show next image on Modal Gallery
    nextSlide () {
        let lastIndex = this.state.fileURL.length - 1;
        let shouldResetIndex = this.state.photoID === lastIndex;
        let index =  shouldResetIndex ? 0 : this.state.photoID + 1;
        this.setState({
            photoID: index
        });
    };

    //Method to open the modal gallery
    toggleModal = (number) => {
        this.setState((prevState) => {
            return{
                showModal: !prevState.showModal,
                photoID: number,
            }
        });
    };

    //Method to open sidebar or close sidebar through hamburger menu
    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return{sideDrawerOpen: !prevState.sideDrawerOpen}
        });
    };

    //Method to close sidebar when outside space is clicked on
    backdropClickHandler = () => {
        this.setState({sideDrawerOpen: false});
    };

    //Method to open sidebar through a button
    buttonClickHandler = () => {
        this.setState({sideDrawerOpen: true});
    };

    // resets the firebase path, the array of pictures and the boolean value
    childHandler(dataFromChild) {
        this.setState({
            fire_path: dataFromChild,
            fileURL: [],
            bool:true
        });

    }

    //sets initial value to Best photos folder in Firebase
    componentDidMount() {
        this.setState({fire_path: "Photo Gallery/Best"})
    }

    /*This code runs every time there is an update in state( in this case,
    * fire_path) it creates a reference to the firebase storage and
    * lists the files from the specific storage folder. Then it
    * gets its url which is later added to the src tag of images.
    * Bool value is set to false to prevent infinite storage retrieval*/
    componentDidUpdate() {
        if (this.state.bool) {
            // Get a reference to the storage service, which is used to create references in your storage bucket
            let storage = firebase.storage();
            let storageRef = storage.ref();
            // Create a reference under which you want to list
            let listRef = storageRef.child(this.state.fire_path);

            // Find all the prefixes and items.
            listRef.listAll().then((res) => {
                res.items.forEach((itemRef) => {
                    itemRef.getDownloadURL().then((url) => {
                        let joined = this.state.fileURL.concat(url);
                        this.setState({fileURL: joined});
                    }).catch(function (error) {
                        // Handle any errors
                        console.log(error);
                    });
                });
            }).catch(function (error) {
                console.log(error);
            });
            this.state.bool = false;
        }
    }

    render() {
        /*This set of code divides the URLS into columns containing 4 images*/
        let path = this.state.fileURL.length;
        // array of N elements, where N is the number of columns needed
        const cols = [...Array(Math.ceil(path/4))];
        // chunk the products into the array of columns
        const imgCols = cols.map((col, num) => this.state.fileURL.slice(num * 4, num * 4 + 4) );
        let photoNum =  Array.from(Array(path).keys());
        // Map the rows as div.row
        const imgURL = imgCols.map((col, num) => (
            <Col className="Image-container" key={num}>
                {/*map products in the col as images */}
                {col.map( (url, index) => <Image className="Photo-Images" key={photoNum[index+(4*num)]} src={url} onClick={() => this.toggleModal(photoNum[index+(4*num)])} />)}
            </Col>
        ));

        //Backdrop only activates when the side drawer is open
        let backdrop;
        if(this.state.sideDrawerOpen) {
            backdrop = <Backdrop click={this.backdropClickHandler}/>;
        }
        return (
            <div className="Photography-wrap">
                {/*Toolbar called with hamburger menu handler and path updater*/}
                <Toolbar
                    drawerClick={this.drawerToggleClickHandler}
                    path={this.childHandler}/>
                <Row className="Image-and-sidebar">
                    <Col className="Sidebar-area">
                        {/*Sidebar called with section indicator, path updater,
                        sidebar toggler and sidebar opener*/}
                        <Sidebar
                            choice={this.state.option}
                            action={this.childHandler}
                            show={this.state.sideDrawerOpen}
                            hide={this.drawerToggleClickHandler} />
                        {/*backdrop called*/}
                        {backdrop}
                    </Col>
                    {/*Retrieved images are called here*/}
                    <div className="Images">
                        {imgURL}
                    </div>
                </Row>
                <Row className="btn-wrapper-wrap">
                    <Col lg={4}/>
                    <Col lg={4} className="btn-wrapper">
                        {/*button called here with sidebar opener (on button click)*/}
                        <Button className="btn" block onClick={this.buttonClickHandler}>Show More</Button>
                    </Col>
                    <Col lg={4}/>
                </Row>
                {/*Footer called here*/}
                <Footer/>
                {/*Modal Gallery called here, called with side bar toggler, opener, closer,
                next image, previous image, current picture, max picture, and source for images*/}
                <ModalGallery
                    isOpen={this.state.showModal}
                    src={this.state.fileURL[this.state.photoID]}
                    hide={this.toggleModal}
                    next={this.nextSlide}
                    previous={this.previousSlide}
                    index={this.state.photoID}
                    max={this.state.fileURL.length-1}/>
            </div>
        );
    }
}

export default Photography;