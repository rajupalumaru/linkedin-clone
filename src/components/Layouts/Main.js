import React from 'react';
import './Main.css';
import styled from 'styled-components';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import InputOption from './InputOption';
import { Avatar } from '@material-ui/core';

const Main = () => {
    return (
        <>
            <Container>
                <ShareBox>
                    <div>
                        <img src='/images/user.svg' alt='' />
                        <button>Start a Post</button>
                    </div>
                    <div>
                        <button>
                            {/* <img src='/images/nav-home.svg' alt='' /> */}
                            <ImageIcon />
                            <span>Photo</span>
                        </button>
                        <button>
                            {/* <img src='/images/nav-jobs.svg' alt='' /> */}
                            <SubscriptionsIcon />
                            <span>Video</span>
                        </button>
                        <button>
                            {/* <img src='/images/nav-network.svg' alt='' /> */}
                            <EventNoteIcon />
                            <span>Event</span>
                        </button>
                        <button>
                            {/* <img src='/images/nav-messaging.svg' alt='' /> */}
                            <CalendarViewDayIcon />
                            <span>Write Article</span>
                        </button>
                    </div>
                </ShareBox>
                <div className="post">
                    <div className="post_header">
                        <Avatar src='/images/user.svg'></Avatar>
                        <div className="postInfo">
                            <h2>Name</h2>
                            <p>description</p>
                        </div>
                        <div className='post-rightside'>
                            <MoreHorizIcon />
                        </div>
                    </div>
                    <div className="post_body">
                        <p>message</p>
                    </div>
                    <div className="post_buttons">
                        <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray" />
                        <InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray" />
                        <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray" />
                        <InputOption Icon={SendOutlinedIcon} title="Send" color="gray" />
                    </div>
                </div>
            </Container>

        </>
    )
}

export default Main;

const Container = styled.div`
grid-area:main;
`

const CommonCard = styled.div`
text-align:center;
overflow:hidden;
margin-bottom:8px;
background-color:#fff;
border-radius:5px;  
positon:relative;
border:none;
box-shadow:0 0 0 1px rgb(0 0 0/15%),0 0 0 rgb(0 0 0/20%);
 
`
const ShareBox = styled(CommonCard)`
display:flex;
flex-direction:column;
color:#958b7b;
margin:0 0 8px;
background:white; 
div {
    button {
       outline:none;
       color:rgba(0,0,0,0.6);
       font-size:14px; 
       line-height:1.5;
       min-height:48px;
       background:transparent;
       border:none;
       display:flex;
       align-items:center;
       font-weight:600;
    }
       &:first-child {
        display:flex;
        align-items:center;
        padding:8px 16px 0px 16px;
        img {
            width:48px;
            border-radius:50%;
            margin-right:8px;
           
        }
        button {
            margin:4px 0;
            flex-grow:1;
            border-radius:35px;
            padding-left:16px;
            border:1px solid rgba(0,0,0,0.15);
            background-color:white;
            text-align:left;
        }
       }
       &:nth-child(2){
         display:flex;
         flex-wrap:wrap;
         justify-content:space-around; 
         padding-bottom:4px;
         button {
            img {
                margin:0 4px 0 -2px;
            }
            span {
                color:#7095fb; 
            }
         }
       }
    
}

`
const Article = styled(CommonCard)`
padding:0;
marign:0 0 8px;
overflow:visible;

`
const SharedActor = styled.div`
padding-right:40px;
flex-wrap:nowrap;
padding:12px 16px 0; 
margin-bottom:8px;
align-item:center;
display:flex;
a {
    margin-right:12px;
    flex-grow:1;
    overflow:hidden;
    display:flex;
    text-decoration:none;
    img {
        width:48px;
        height:48px;

    }
    &>div {
        display:flex;
        flex-direction:column;
        flex-grow :1;
        flex-basis:0;
        margin-left:8px;
        overflow:hidden;
        span {
            text-align:left;
            &:first-child {
                font-size:14px;
                font-weight:700;
                color:rgba(0,0,0,1;)
            }
            &:nth-child(n+1) {
                font-size:12px;
                color:rgba(0,0,0,0.6);
            }

        }
    }
}

`