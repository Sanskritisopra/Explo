import React, {useState} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './App.css';



export default function Code2() {

const [value, setValue] = useState("");
let [productList,setProductList] = useState([]);
let [quiz,setquiz] = useState("");
let [newtest,setnewtest] = useState([]);

const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');
  const [explanationValue, setExplanationValue] = useState('');

const addItem = (question,input,output,explain) =>{
  
  let newtestlist = [...newtest];
  newtestlist.push({
      input:inputValue,
      output:outputValue,
      explaination:explanationValue,
  })
  setnewtest(newtestlist);
  

// console.log(inputValue,outputValue,explanationValue);


  setInputValue('');
  setOutputValue('');
  setExplanationValue('');
  }

    
const total = ()=>{
  let newProductList = [...productList];
  newProductList.push({
    question:value,
      testcases:newtest,
  });

  setProductList(newProductList);
  setnewtest([]);
  console.log(newProductList);
}

    


    
    const modules={
        toolbar:[[{header:[1,2,3,4,5,6,false]}],
        [{font:[]}],
        [{size:[]}],
      ["bold","italic","underline","strike","blockquote"],
      [{ 'script': 'sub'}, { 'script': 'super' }],
      [{list:"ordered"},{list:"bullet"},{indent:"-1"},{indent:"+1"},],["link","image","video"],[{ 'color': [] }, { 'background': [] }],[{ 'align': [] }],
      ]
      }

      const removeQuestion = (index) => {
        const updatedProductList = [...productList];
        updatedProductList.splice(index, 1);
        setProductList(updatedProductList);
      };
  return (
    <>
    <form id="sectionForm-3" action="">

    <div className="container">
     <div className="row">
      <div className="editor">
      <ReactQuill theme="snow" value={value} onChange={setValue} className="editor-input"
      modules={modules}/>;
      </div>
      <div className="preview" dangerouslySetInnerHTML={{__html:value}}/>
     
     </div>
    </div>

    <div style={{marginTop:'20px'}}>
        <h2>TEST CASES</h2>
        </div>
        
        <input
            type="text"
            name="input"
            placeholder="Input"
            value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
          />
          <input  type="text"
                    name="output"
                    placeholder="Output"
                    value={outputValue}
        onChange={(e) => setOutputValue(e.target.value)}
                    />
          <input type="text" placeholder="Explaination" name="explain"
          value={explanationValue}
          onChange={(e) => setExplanationValue(e.target.value)}
                />

        <div className="container2" style={{marginTop:'30px'}}>

        <button type="button" onClick={addItem} style={{margin:'5px'}}>
          Add Test Case
        </button>
        <button type="button" onClick={total}>
          Add 
        </button>
        </div>
        
    </form>
    <h2>Questions:</h2>
      {productList.length > 0 ? (
        <ul>
          {productList.map((test, index) => (
            <li key={index}>
              <div dangerouslySetInnerHTML={{ __html: test.question }} />
              
              <ul>
                {test.testcases.map((testCase, idx) => (
                  <li key={idx}>
                    <p>Input: {testCase.input}</p>
                    <p>Output: {testCase.output}</p>
                    <p>Explanation: {testCase.explaination}</p>
                  </li>
                ))}
              </ul>
              <button type="button" onClick={() => removeQuestion(index)}>Remove</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No questions added yet.</p>
      )}
    </>
  )
}
