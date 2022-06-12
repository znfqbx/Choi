import React from "react";
// import {Form} from 'antd';
// import {Button} from 'antd';
// import { useForm } from "react-hook-form";
import  ReactDOM  from "react-dom";
import {useState} from "react";
import { BrowserRouter } from "../../node_modules/react-router-dom/index";
import Button from "../components/common/Button";


function Hello(){
    const [name, setName] = useState("");

    const submitGo = (event) => {
        event.preventDefault();
        alert(`고객님이 입력한 이름은 ${name}입니다.`);
    }

    return(
        <section>
            <h1>츄</h1>
            <form onSubmit={submitGo}>
                <label>
                    이름 입력: &nbsp;
                    <input type="text" value={name}
                    onChange={(e)=> setName(e.target.value)}/>
                </label>
                <Button> 전송하기</Button>
            </form>
            <form onSubmit={submitGo}>
                <label>
                    이미지 업로드: &nbsp;
                    <input type="file" /> 
                </label>
                
            </form>
            <form onSubmit={submitGo}>
                <label>
                    이미지 업로드: &nbsp;
                    <input type="file" accept="image/*"/>
                </label>
                
            </form>
            <div className="upload-button">

      </div>
            
        </section>
    );
}
// ReactDOM.render(<Hello />, document.getElementById('root'))
const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Hello />
    </BrowserRouter>
)


export default Hello