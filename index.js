const Button = (props) => {
  //  Write your code here.
  const { className, text } = props;
  return <button className={`${className}`}>{text}</button>;
};

const element = (
  //  Write your code here.
  <div className="bg_container">
    <div className="social_container">
      <h1 className="heading">Social Button</h1>
      <div>
        <Button className="like_button button " text="like" />
        <Button className="comment_button button " text="comment" />
        <Button className="share_button button " text="share" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
