const Button = (props) => {
    const {button-text ,className} = props;

    return <button className ={`button ${className}`}>{button-text}</button>
};

const element = (
  <div className="bg-container">
    <div className="card-container">
      <h1 className="main-heading">Social Buttons</h1>
      <div className="button-container">
        <Button button-text="Like" className="like-button"/>
        <Button button-text="Comment" className="Comment-button"/>
        <Button button-text="Share" className="Share-button"/>
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
