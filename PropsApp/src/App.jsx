function App() {
  return(
    <div>
      <student name="Raj"/>
      <student name="gopi"/>
    </div>
  );
}

function student (props){
  return <h2>Hello, {props.name}!</h2>;
}

export default App;