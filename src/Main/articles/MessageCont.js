import React, { useState } from "react";
import { connect } from "react-redux";
import { createMessage } from "../../redux/actions";
import "./messageCont.scss";

function MessageForm({ messages, createMessage }) {
  const [formMessage, setFormMessage] = useState({ name: "", text: "" });

  const submitHandler = (e) => {
    e.preventDefault();
    // messages.push(formMessage);
    if (formMessage.name.trim() && formMessage.text.trim()) {
      createMessage(formMessage);
      setFormMessage({ name: "", text: "" });
    }

    // console.log(messages);
  };

  const changeInputHandler = (e) => {
    setFormMessage({ ...formMessage, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h2>Leave a message</h2>
      <form className="messageForm" onSubmit={submitHandler}>
        <input
          onChange={changeInputHandler}
          name="name"
          placeholder="Name"
          className="input"
          type="text"
          value={formMessage.name}
        />
        <input
          name="text"
          onChange={changeInputHandler}
          placeholder="Message"
          className="input"
          type="text"
          value={formMessage.text}
        />
        <button className="submitBtn" type="submit">
          Send
        </button>
      </form>
      <h2>Messages</h2>
      <div className="messages">
        {messages.length === 0 && <p>No messages</p>}
        {messages.length > 0 &&
          messages.map((item, i) => {
            return (
              <div key={i} className="message">
                <h3>{item.name}</h3>
                <p>{item.text}</p>
                <div className="underline"></div>
              </div>
            );
          })}
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  // console.log(state);
  return { messages: state.messages.messages };
};

const mapDispatchToProps = {
  createMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
