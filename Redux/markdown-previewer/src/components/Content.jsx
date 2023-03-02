import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import { writeText,toggleHelp,helpText } from '../redux/markdownSlice'
import {marked} from "marked";
function Content() {
    const textCurrent = useSelector((state) => state.markdown.currentText);
    const isShowingHelp = useSelector((state)=> state.markdown.isShowingHelp)
    const handleClick = ()=>{
        dispatch(toggleHelp())
        dispatch(helpText())
    }
    const handleChange = (value)=>{
        dispatch(writeText(value));
    }
    const dispatch = useDispatch();

    const parsedText = marked(textCurrent);
    const processedText = { __html: parsedText }
    
  return (
    <div> 
        <div className='Help' >
            <button className='helpIcon' onClick={handleClick}>?</button>
        </div>
        <div className="heading" >
           <div className='headingText'  > Markdown Previewer</div>
        </div>

            <div className='textareas'>
            <textarea className='markdownArea' readOnly={isShowingHelp} value={textCurrent} onChange={(e)=> handleChange(e.target.value)}>
            </textarea>
   
            <div className='previewArea' dangerouslySetInnerHTML={processedText} >
                
            </div>
            </div>
    </div>
  )
}

export default Content