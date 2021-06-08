import React from 'react'
import './Home.css';
import maukaimg1 from '../Images/maukaimg1.PNG' 
import maukaimg2 from '../Images/maukaimg2.gif'
import maukaimg3 from '../Images/maukaimg3.PNG'
import EventNoteRoundedIcon from '@material-ui/icons/EventNoteRounded';
import PhotoLibrarySharpIcon from '@material-ui/icons/PhotoLibrarySharp';
import 'boxicons'


export default function Home() {
    return (
        <>
            <div className="home-container">
                <div className="home-container-main">
                    <div className="home-main">
                        <div className="home-intro">
                            <div className="home-hero1-heading">
                                Mauka is building a playground for you.
                     </div><br />
                            <div className="home-hero1-subheading">
                                A professional playground for you to learn, discover, fail and grow with like minded people.
                     </div>
                            <br />
                            <div className="home-joinnow-button">
                                <button variant="contained" style={{ height: "40px", width: "120px", borderRadius:"5px" }}>Join now</button>
                            </div>
                        </div>
                        <img src={maukaimg1} class="home-main-img" alt=""/>
                    </div>
                    <br />
                    <br />

                    <div className="home-aboutmauka-heading">ABOUT MAUKA</div>

                    <div className="home-aboutmauka-main">
                        <div className="home-aboutmauka-description">
                            At Mauka, we believe there is always room to grow — for you and for us.
                        <br />
                        CohortOne will be the first of many communities for students to fail, learn, and improve.
                 </div>
                        <img src={maukaimg2} class="home-aboutmauka-gif" alt=""/>
                    </div><br /><br /><br />



                    <div className="home-cohort-heading">COHORT DETAILS</div>
                    <div className="home-cohort-main">

                        <img src={maukaimg3} class="home-aboutmauka-img" alt="" />
                        <div className="home-cohort-description">
                            <div style={{ fontSize: "30px", fontWeight: "600", color: "rgb(68, 68, 68)" }}>Join our #CohortOne</div>
                            <div style={{ fontSize: "25px", fontWeight: "500", fontStyle: "italic", color: "rgb(68, 68, 68)" }}> Get exclusive access to our community of 20 highly motivated individuals like you.</div>
                            <br />
                            <div style={{
                                display: "flex",
                                flexDirection: "row",
                            }}><div style={{ height: "30px", width: "30px", borderRadius: "50px" }}><EventNoteRoundedIcon fontSize="large" /></div><p style={{ paddingLeft: "10px", color: "grey", fontSize: "20px" }}> Cohort Timeline</p></div >
                            <p>This cohort will run for 60 days and will focus on high-demand, transferable skills that will give you an edge in your professional career.</p>
                            <br />
                            <br />
                            <div style={{
                                display: "flex",
                                flexDirection: "row",
                            }}><PhotoLibrarySharpIcon fontSize="large" /><p style={{ paddingLeft: "10px", color: "grey", fontSize: "20px" }}>Focus on community and networking</p></div>
                            <p>At Mauka, we focus on creating communities and conversations — with yourself, your peers and experts through a series of Q&As with moderators and industry veterans.</p>
                            <i class='bx bx-calendar'></i>
                        </div>
                    </div>
                </div><br />

                <div className="home-modules-heading">MODULES</div><br />
                <div className="home-modules-subheading">MASTER THE 4's</div>

                <div className="home-modules-cards">
                    <div className="home-modules-card1">
                        <div className="card1-logo">
                            <box-icon  name='conversation' animation='tada-hover' size="60px" color="skyblue"   ></box-icon>
                        </div><br />
                        <h4>Communication</h4>
                        <br />
                        <p style={{ fontSize: "22px" }}>Empower your ideas with the communication they deserve.</p><br /><br /> <br /><br />
                        <button className="home-card1-button" >Know more</button>
                    </div>
                    <div className="home-modules-card2">
                        <div className="card2-logo">
                            <box-icon name='group' animation='tada-hover' size="60px" color="skyblue" ></box-icon>
                        </div><br />
                        <h4>Collaboration</h4>
                        <br />
                        <p style={{ fontSize: "22px" }}>Learn to make and work in high functioning, performance driven teams</p><br /><br /> <br />
                        <button className="home-card2-button" >Know more</button>
                    </div>
                    <div className="home-modules-card3">
                        <div className="card3-logo">
                            <box-icon name='trending-up' animation='tada-hover' size="60px" color="skyblue"></box-icon>
                        </div><br />
                        <h4>Critical Thinking</h4>
                        <br />
                        <p style={{ fontSize: "22px" }}>Make problem solving your forté. Regardless of the complexity or domain.</p><br /><br /> <br />
                        <button className="home-card3-button" >Know more</button>
                    </div>
                    <div className="home-modules-card4">
                        <div className="card4-logo">
                            <box-icon name='brush' animation='tada-hover' size="60px" color="skyblue"></box-icon>
                        </div><br />
                        <h4>Creativity</h4>
                        <br />
                        <p style={{ fontSize: "22px" }}>We don’t teach creativity. We just create the most conducive environment to foster yours</p><br /><br />
                        <button className="home-card4-button" >Know more</button>
                    </div>
                </div>





            </div>


        </>


    )
}
