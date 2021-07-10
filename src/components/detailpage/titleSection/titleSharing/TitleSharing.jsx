import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSchool} from "@fortawesome/free-solid-svg-icons";
import {BrowserView} from "react-device-detect";
import React from "react";
import {v4 as uuidv4} from "uuid";
function TitleSharing({id}){
    const socialMedia = [1,2,3];
    // let socialMedia = new Array(3);
    return(
        <BrowserView>
            <div className='sharing-container'>
                <div>{id.share}</div>
                <div>
                    {
                        socialMedia.map((item)=>{
                            return(
                                <span key={uuidv4()} className="social-media-icon"><FontAwesomeIcon icon={faSchool} /></span>
                            )
                        })
                    }
                </div>
            </div>
        </BrowserView>
    )
};
export default TitleSharing;