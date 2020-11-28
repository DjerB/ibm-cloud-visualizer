import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

import NavBar from '../components/navBar';

import ibm from '../images/ibm.png';
import logout from '../images/logout.svg';
import panel from '../images/kubernetes/panel.png';
import visu from '../images/kubernetes/visu.png';

const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr 3fr;
	column-gap: 4%;
	padding: 1% 0%;
	height: 100%;
	width: 100%;
`;

const Panel = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0 5%;
    position: relative;
`;

const fadein = keyframes`
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
`;

const fadeout = keyframes`
	from {
		opacity: 1;
	}
	to {
		opacity: 0;
	}
`;

const PanelImage = styled.div`
    margin-top: 13%;
    overflow: scroll;
    width: 100%;
    max-height: 68vh;
    img {
        width: 100%;
    }

    animation: ${fadein} 300ms ease-in;
`;

const Divider = styled.div`
	height: 0;
	border-bottom: 1px solid #e4e4e4;
	width: 100%;
`;

const PanelHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 10vh;

	div {
		display: flex;
		align-items: flex-end;

		h2 {
			margin: 0;
			margin-left: 10px;
		}

		h4 {
			margin-left: 5%;
			font-weight: 500;
		}
	}
`;

const Visualiser = styled.div`
    margin-top: 10vh;
    height: 80vh;
    margin-top: 12vh;
    overflow: scroll;
    border-radius: 40px;
    img {
        width: 100%;
        height: auto;
    }
    animation: ${fadein} 300ms ease-in;
`;

const Alert = styled.div`
    width: 60vw;
    background-color: #F8D7DB;
    position: fixed;
    left: 20vw;
    top: 1vh;
    color: #721C25;
    padding: 0.8em 1em;
    font-weight: 500;
    border-radius: 5px;
    animation: ${fadein} 300ms ease-in;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

    &.fadeout {
        animation: ${fadeout} 300ms ease-in;
        animation-fill-mode: forwards;
    }
`;

const Footer = styled.div`
	position: absolute;
	bottom: 0;
	width: 90%;
	height: 6%;

	.logout {
		margin-top: 6%;
		display: flex;
		align-items: center;

		img {
			margin-right: 5%;
			cursor: pointer;
		}

		span {
			font-weight: 400;
			cursor: pointer;
		}
	}
`;

const Kubernetes = () => {
    useEffect(() => {
        setTimeout(() => {
            if (document.getElementById('alert')) {
                document.getElementById('alert').classList.add("fadeout");
            }
        }, 3000);
    }, []);

    return (
        <Container>
            <NavBar />
            <Panel>
                <PanelHeader>
                    <div>
                        <img src={ibm} alt="ibm" width="20%" />
                        <h2>Cloud</h2>
                    </div>
                </PanelHeader>
                <Divider />
                <PanelImage>
                    <img src={panel} alt="panel" />
                </PanelImage>
                <Footer>
                    <Divider />
                    <div className="logout">
                        <img src={logout} alt="logout" height="20px" />
                        <span>Log out</span>
                    </div>
                </Footer>
            </Panel>
            <Visualiser>
                <img src={visu} alt="visualisation" />
            </Visualiser>
            <Alert id="alert">Screen not implemented for this POC.</Alert>
        </Container>
    );
}

export default Kubernetes;