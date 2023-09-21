import "./Company.css";

export default function Company(props) {
  function handleClick(event) {
    if (event.target.tagName === "SPAN" && event.target.textContent === "x") {
      event.currentTarget.remove();
    }
  }
  return (
    <>
      <div className="tile" onClick={handleClick}>
        <span>x</span>
        <div className="news">
          <div className="top">
            <img src={props.image} alt="" />
            <div className="name">
              <a href={props.link}>{props.title}</a>
              <p className="author">By {props.name}</p>
            </div>
          </div>
          <p>{props.description}</p>
        </div>
      </div>
    </>
  );
}
