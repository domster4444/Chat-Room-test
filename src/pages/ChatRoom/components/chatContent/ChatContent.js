import React, { Component, useState, createRef, useEffect } from "react";
import ScrollToBottom from "react-scroll-to-bottom";

import "./chatContent.css";
import Avatar from "../chatList/Avatar";
import ChatItem from "./ChatItem";

import { BiCog } from "react-icons/bi";
import { FaPlus, FaPaperPlane } from "react-icons/fa";

export default class ChatContent extends Component {
  messagesEndRef = createRef(null);

  chatItms = [
    {
      key: 1,
      image: "https://doko.dwit.edu.np/images/studentProfile/Nuraj%20Rimal.jpg",
      type: "other",
      msg: "dai paan tayar vo ?",
    },
    {
      key: 2,
      image: "https://doko.dwit.edu.np/images/studentProfile/Pratyush%20Acharya.jpg",
      type: "",
      msg: "Hudai xa bhai.",
    },
    {
      key: 3,
      image: "https://doko.dwit.edu.np/images/studentProfile/Nuraj%20Rimal.jpg",
      type: "other",
      msg: "Ajjhai kati time lagxa dai ?",
    },
    {
      key: 4,
      image: "https://doko.dwit.edu.np/images/studentProfile/Pratyush%20Acharya.jpg",
      type: "",
      msg: "Parkha na, pan masala haldai xu.",
    },
    {
      key: 5,
      image: "https://doko.dwit.edu.np/images/studentProfile/Nuraj%20Rimal.jpg",
      type: "other",
      msg: "discount dinu hai",
    },
  ];

  constructor(props) {
    super(props);
    this.state = {
      chat: this.chatItms,
      msg: "",
    };
  }

  componentDidMount() {
    window.addEventListener("keydown", (e) => {
      if (e.keyCode == 13) {
        if (this.state.msg != "") {
          this.chatItms.push({
            key: 1,
            type: "",
            msg: this.state.msg,
            image: "https://doko.dwit.edu.np/images/studentProfile/Pratyush%20Acharya.jpg",
          });
          this.setState({ chat: [...this.chatItms] });
          this.setState({ msg: "" });
        }
      }
    });
  }
  onStateChange = (e) => {
    this.setState({ msg: e.target.value });
  };

  render() {
    return (
      <div className='main__chatcontent'>
        <div className='content__header'>
          <div className='blocks'>
            <div className='current-chatting-user'>
              <Avatar isOnline='active' image='https://doko.dwit.edu.np/images/studentProfile/Nuraj%20Rimal.jpg' />
              <p>Nuraj Rimal</p>
            </div>
          </div>

          <div className='blocks'>
            <div className='settings'>
              <button className='btn-nobg'>
                <BiCog className='text-primary-blue' />
              </button>
            </div>
          </div>
        </div>
        <div className='content__body'>
          <ScrollToBottom className='chat__items'>
            {this.state.chat.map((itm, index) => {
              return <ChatItem animationDelay={index + 2} key={itm.key} user={itm.type ? itm.type : "me"} msg={itm.msg} image={itm.image} />;
            })}
            <div ref={this.messagesEndRef} />
          </ScrollToBottom>
        </div>
        <div className='content__footer'>
          <div className='sendNewMessage'>
            <input type='text' placeholder='Type a message here' onChange={this.onStateChange} value={this.state.msg} />
            <button className='btnSendMsg' id='sendMsgBtn'>
              <FaPaperPlane />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
