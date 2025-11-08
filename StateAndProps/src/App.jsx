const { useState } = require("react");

function App(){
  const [marks, setMarks] = useState(0);
  return (
    <div>
      <student name="Raj" score={marks} />
      <button onClick={() => setMarks(marks + 1)}>Increase</button>
    </div>
  )
}
export default App;