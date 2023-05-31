function Square() {
  return <button className="square"></button>;
}

export default function Board() {
  function handleClick() {
    alert("Clicked square");
  }
  return (
    <div className="board">
     <Square />
     <Square />
     <Square />
     <Square />
     <Square />
     <Square />
     <Square />
     <Square />
     <Square />
    </div>
  );
}
