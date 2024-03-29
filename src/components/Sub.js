
import React,{useState } from 'react'

export default function Sub() {
const [list,setlist] = useState([]);
const [value,setvalue]=  useState("");
const [ans,setans] = useState("");

const additem = () => {
  let newlist = [...list];
  newlist.push({
    question:value,
    answer:ans,
  })
setlist(newlist);
console.log(newlist);
setvalue("");
  setans("");
}

const removeItem = (index) => {
  const updatedList = [...list];
  updatedList.splice(index, 1);
  setlist(updatedList);
};

  return (<>
    <form id="sectionForm-2" >
          <textarea
              id="codeDebuggingQuestion-2"
              placeholder="Enter code debugging question"
              cols={100}
              rows={10}
              style={{ marginBottom: 15 }}
               name="question" 
              value={value}
              onChange={(e) => setvalue(e.target.value)}
            />
            <input type="text" id="ans" placeholder="Correct Answer" name="answer" 
            value={ans}
            onChange={(e) => setans(e.target.value)}
            />
              <button type="button" onClick={additem}>
                Add question
              </button>
          </form>
          <h2>Question List:</h2>
      {list.length > 0 ? (
        <ul>
          {list.map((item, index) => (
            <li key={index}>
              <p>Question:</p> <pre>{item.question}</pre>
              <p>Answer: {item.answer}</p>
              <button type="button" onClick={() => removeItem(index)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No questions added yet.</p>
      )}
          </>
  )
}

