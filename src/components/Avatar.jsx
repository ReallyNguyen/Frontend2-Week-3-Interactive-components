function Avatar(props) {
  return (
    <>
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
    </>
  );
}

export default Avatar;
