import React, {Component} from 'react';
import {Button, Row, Col, Image} from 'react-bootstrap';
import './Main_content.css';
import Sidebar from "./Sidebar";
import * as firebase from 'firebase';
import Backdrop from './Backdrop/Backdrop';
import Toolbar from "./SideDrawer/Toolbar";
import ModalGallery from "./Modal/ModalGallery";
import {Link} from "react-router-dom";

class Photography extends Component {

        constructor(props) {
            super(props);

            this.state = {
                option: "Photo",
                fileURL: [],
                //Default parent state
                fire_path: "",
                bool: true,
                sideDrawerOpen: false,
                showModal: false,
                photoID: -1
            };

            console.log("Photo ID" + this.state.photoID);
            console.log(this.state.option);
            console.log(this.state.fire_path);

            this.childHandler = this.childHandler.bind(this);
            this.previousSlide = this.previousSlide.bind(this);
            this.nextSlide = this.nextSlide.bind(this);
        }

        previousSlide () {
            let lastIndex = this.state.fileURL.length - 1;
            let shouldResetIndex = this.state.photoID === 0;
            let index =  shouldResetIndex ? lastIndex : this.state.photoID - 1;

            this.setState({
                photoID: index
            });
        };

        nextSlide () {
            let lastIndex = this.state.fileURL.length - 1;
            let shouldResetIndex = this.state.photoID === lastIndex;
            let index =  shouldResetIndex ? 0 : this.state.photoID + 1;

            this.setState({
                photoID: index
            });
        };

        toggleModal = (number) => {
            this.setState((prevState) => {
                return{
                    showModal: !prevState.showModal,
                    photoID: number,
                }
            });
        };

        drawerToggleClickHandler = () => {
            this.setState((prevState) => {
                return{sideDrawerOpen: !prevState.sideDrawerOpen}
            });
        };

        backdropClickHandler = () => {
            this.setState({sideDrawerOpen: false});
        };

        childHandler(dataFromChild) {
            // log our state before and after we updated it
            this.state.bool = true;
            // console.log('%cPrevious Parent State: ' + JSON.stringify(this.state), "color:orange");
            this.setState({
                fire_path: dataFromChild,
                fileURL: []
            },() => console.log('Updated Parent State:', this.state));
        }

        componentDidMount() {
            this.setState({fire_path: "Photo Gallery/Best"})
        }

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
                            // TODO: Display the image on the UI
                            // console.log(url);
                            let joined = this.state.fileURL.concat(url);
                            this.setState({fileURL: joined});
                            //console.log(this.state);
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
            let path = this.state.fileURL.length;
            // array of N elements, where N is the number of columns needed
            const cols = [...Array(Math.ceil(path/4))];
            // chunk the products into the array of columns
            const imgCols = cols.map((col, num) => this.state.fileURL.slice(num * 4, num * 4 + 4) );
            let photoNum =  Array.from(Array(path).keys());
            console.log(photoNum);
            console.log(this.state.photoID);
            // if (colNum>0){ photoNum += 4}
            // Map the rows as div.row
            const imgURL = imgCols.map((col, num) => (
                <Col className="Image-container" key={num}>
                     {/*map products in the row as images */}
                    {col.map( (url, index) => <Image className="Photo-Images" key={photoNum[index+(4*num)]} src={url} onClick={() => this.toggleModal(photoNum[index+(4*num)])} />)}
                </Col>
            ));

            console.log(this.state.fileURL);
            console.log("Photo ID" + this.state.photoID);

            let backdrop;

            if(this.state.sideDrawerOpen) {
                backdrop = <Backdrop click={this.backdropClickHandler}/>;
            }
                return (
                    <div className="Photography-wrap">
                        <Toolbar
                            drawerClick={this.drawerToggleClickHandler}
                            path={this.childHandler}/>
                        <Row className="Image-and-sidebar">
                            <Col className="Sidebar-area">
                                <Sidebar
                                    choice={this.state.option}
                                    action={this.childHandler}
                                    show={this.state.sideDrawerOpen}
                                    hide={this.drawerToggleClickHandler} />
                                {backdrop}
                            </Col>
                            <div className="Images">{imgURL}</div>
                        </Row>
                        <Row className="btn-wrapper-wrap">
                            <Col lg={4}/>
                            <Col lg={4} className="btn-wrapper">
                                {/*<Button className="btn" block onClick={this.changeState}>Continue</Button>*/}
                                <Link to='/About' className={"anchor"}><Button className="btn" block>Learn About me</Button></Link>
                            </Col>
                            <Col lg={4}/>
                        </Row>
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

//console.log(imgURL);

/*this.state.fileURL.forEach((url, index) => {
    if ((index+1) % 4 === 0) {
        imgURL.push(<Col className="Image-container"><Image className="Photo-Images" key={index} src={url}/></Col>)
    }
    else {
        imgURL.push(<Image className="Photo-Images" key={index} src={url}/>)
    }
});*/

/*images = <div>{this.state.fileURL.map((url,index) => (
    <Image className="Photo-Images" key={index} src={url} />
))}</div>*/

{/*                             <Row className="Title-row">
                                    <Col className="Title-col">
                                        <h1 className="Title">Photography</h1>
                                    </Col>
                                </Row>*/}