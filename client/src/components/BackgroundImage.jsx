import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    /* Banner-start */
    height: 800px;
    width: 98.7vw;
.banner img {
    height: 800px;
    width: 100%;
    z-index: -1;
 
}

.banner::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height:400px;
    z-index: 0;
    background: linear-gradient(to bottom, #000, transparent);
}

.banner::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 400px;
    z-index: 0;
    background: linear-gradient(to top, #000, transparent);
}
`;
export default function BackgroundImage() {
    return (
        <Container >
            <div className='banner'>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/f669a8f4-de1e-49d7-bb56-c9bd1f4a9069/d4f217b2-4001-4df5-bef8-0b026ec133fe/IN-en-20221031-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="" />

            </div>
        </Container>
    )
}