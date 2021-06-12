import React from 'react'
import './Widgets.css'
import { FacebookProvider, EmbeddedPost } from 'react-facebook';

function Widgets() {
    return (
        <div className="widgets">
            {/* <div className="fb-page" data-href="https://www.facebook.com/struggleforsurvival12/" data-tabs="timeline" data-width="340" data-height="1500" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/struggleforsurvival12/" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/struggleforsurvival12/">तुइन</a></blockquote></div> */}
            {/* <div className="fb-page" 
data-href="https://www.facebook.com/facebook"
data-width="380" 
data-hide-cover="false"
data-show-facepile="false"></div> */}
            
    return (
      <FacebookProvider appId="123456789">
        <EmbeddedPost href="http://www.facebook.com" width="500" />
      </FacebookProvider>
    );
 
        </div>
    )
}

export default Widgets
