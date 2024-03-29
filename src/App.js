
import './App.css';
import React,{useState} from 'react';
import Footer from './components/Footer';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import MCQ from './components/MCQ';
import Sub from './components/Sub';
import Code from './components/Code';




function App() {

  const [ state,setState] = useState(1);
    const action = (index)=>{
        setState(index);
        console.log(index);
    }

//     function capitalizeFirstLetter(sentence) {
//       return sentence.charAt(0).toUpperCase() + sentence.slice(1);
//     }


// let [MCQList,setMCQList] = useState([]);
// let [subList,setSubList] = useState([]);
// let [codeList,setCodeList]= useState([]);

// const addmcq = (question,o1,o2,o3,o4) => {
// let newmcqlist = [...MCQList]

// question = question.replace(/\b(integrate)\b/g, '∫');
// const stack = [];
      
//         // Iterate through each character in the string
//         for (let i = 0; i < question.length; i++) {
//           const char = question[i];
      
//           // If the character is an opening bracket or parenthesis, push it onto the stack
//           if (char === '[' || char === '(') {
//             stack.push(i);
//           }
      
//           // If the character is a closing bracket or parenthesis, pop the opening bracket or parenthesis from the stack
//           if (char === ']' || char === ')') {
//             const openingIndex = stack.pop();
//             const content = question.slice(openingIndex + 1, i);
      
//             // Replace the text inside the brackets or parentheses with appropriate tags
//             if (char === ']') {
//               question = question.slice(0, openingIndex) + `<sup>{content}</sup>` + question.slice(i + 1);
//             } else if (char === ')') {
//               question = question.slice(0, openingIndex) + `<sub>{content}</sub>` + question.slice(i + 1);
//             }
//           }
//         }



// question = capitalizeFirstLetter(question);




// newmcqlist.push({
//   question:question,
//   o1:o1,
//   o2:o2,
//   o3:o3,
//   o4:o4,
// });
// setMCQList(newmcqlist);
// console.log(MCQList);
// }


// const addsub = (question,answer) =>{
//   let newsublist = [...subList];
//   newsublist.push({question:question,answer:answer});
//   setSubList(newsublist);
//   console.log(subList);
// }

// const addcode = (question,testcase) =>{
//   let newcodelist = [...codeList];
//   newcodelist.push({question:question,testcase:testcase});
//   setCodeList(newcodelist);
//   console.log(codeList);
// }


  return (
    <>
    <nav className="navbar bg-primary " data-bs-theme="dark">
  <div className="namaste"><h3>Welcome To Test Portal</h3></div>
</nav>
    <div className='box'>
<div className="tabs">
    <div onClick={()=>action(1)} className={`${state===1 ? 'tab active-tab':'tab'}`}>Multiple Choice</div>
    <div onClick={()=>action(2)} className={`${state===2 ? 'tab active-tab':'tab'}`}>Subjective</div>
    <div onClick={()=>action(3)} className={`${state===3 ? 'tab active-tab':'tab'}`}>Code</div>
    </div> 

    <div className="contents">
        <div className={`${state===1 ? "content active-content":"content"}`}>
            <MCQ />
        </div>

        <div className={`${state===2 ? "content active-content":"content"}`}>
            <Sub />
        </div>

        <div className={`${state===3 ? "content active-content":"content"}`}>
            <Code/>
        </div>

    </div>
    
    
    </div>
    <Footer/>
    </>
  );
}

export default App;
