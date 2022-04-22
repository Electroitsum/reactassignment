function Card(props) {
  function deleteHandler(e) {
    props.updater(props.index);
  }
  return ( 
    <div className="card-con">
      <span className="user-name">{props.userData.name}</span>

      <button onClick={deleteHandler}>Delete</button>
    </div>
  );
}

export default Card;
