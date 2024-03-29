
import React,{useState} from 'react';

export default function MCQ() {
  let [questionList,setQuestionList] = useState([]);
  let [quiz,setquiz] = useState("");
  let [ans,setans] = useState("");
  
  let [o1, seto1] = useState("");
    let [o2, seto2] = useState("");
  let [o3, seto3] = useState("");
    let [o4, seto4] = useState("");

    let additem = ()=>{
      let newlist = [...questionList];
      newlist.push({
        question:quiz,
        o1:o1,
        o2:o2,
        o3:o3,
        o4:o4,
        answer:ans,
      })
      setQuestionList(newlist);
console.log(newlist);
console.log(questionList);
clearFields();
  
    }

    const removeItem = (index) => {
      const updatedList = questionList.filter((item, idx) => idx !== index);
      setQuestionList(updatedList);
    };
  
    const clearFields = () => {
      setquiz("");
      seto1("");
      seto2("");
      seto3("");
      seto4("");
      setans("");
    };
    

  return (
    <>
            <form id="sectionForm-1" >
           <input
            type="text"
            id="multipleChoiceQuestion-1"
            placeholder="Enter multiple choice question" name="question" 
    value={quiz}
    onChange={(e)=>setquiz(e.target.value)}
          />
          <input type="text" id="mcOption1-1" placeholder="Option 1" name="o1"
                value={o1}
                onChange={(e)=>seto1(e.target.value)}
                />
          <input type="text" id="mcOption2-1" placeholder="Option 2" name="o2"
          value={o2}
          onChange={(e)=>seto2(e.target.value)}
                />
          <input type="text" id="mcOption3-1" placeholder="Option 3" name="o3"
          value={o3}
          onChange={(e)=>seto3(e.target.value)}
                />
          <input type="text" id="mcOption4-1" placeholder="Option 4" name="o4"
          value={o4}
          onChange={(e)=>seto4(e.target.value)}
                />
          <input type="text"  placeholder="Correct Answer" 
          value={ans}
          onChange={(e)=>setans(e.target.value)}
          />
          <button type="button" onClick={additem}>
            Add
          </button>
        </form>
      <h2>Question List:</h2>
      {questionList.length > 0 ? (
        <ul>
          {questionList.map((question, index) => (
            <li key={index}>
              <p>Question: {question.question}</p>
              <p>Option 1: {question.o1}</p>
              <p>Option 2: {question.o2}</p>
              <p>Option 3: {question.o3}</p>
              <p>Option 4: {question.o4}</p>
              <p>Correct Answer: {question.answer}</p>
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

