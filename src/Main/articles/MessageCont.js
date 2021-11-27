import "./messageCont.scss";

function MessageForm() {
  return (
    <form className="messageForm">
      <input className="input" type="text" />
      <button className="submitBtn" type="submit">
        Send
      </button>
    </form>
  );
}

export default MessageForm;
