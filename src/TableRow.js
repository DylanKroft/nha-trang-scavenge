import CheckBox from 'rc-checkbox'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components'


const TableRow = ({index, one, two, three, final}) => {

   const [val, setVal] = useState(localStorage.getItem(index) === "true" ? true : false); 
   const [data, setData] = useState(localStorage.getItem(index + "!")); 

  const update = () => {
    let temp = val;
    setVal(!temp);
    localStorage.setItem(index, !temp);
  }

  useEffect(() => {
    setData(localStorage.getItem(index + "!"));

    if (localStorage.getItem(index) === null) localStorage.setItem(index, "false");
    let temp = localStorage.getItem(index);
    if (temp === "true") setVal(true);
    else setVal(false);
  }, [])

  return (<>
    <Container className={[index === "start" ? "start" : "normal", !final ? "final" : "normal", index%2 === 0 ? "even" : "odd"]}>
        <Divider className='largest'>{one}</Divider>
        <Divider className='two'>{two === "	" ? <input value={data !== "null" ? data : ""} onChange={e => {setData(e.target.value); localStorage.setItem(index + "!", e.target.value)}}/> : two}</Divider>
        <Divider className='third'>{three}</Divider>
       {<Divider className='noLine fourth'>
          {index !== "start" && <CheckBox className='checkbox' onClick={update} defaultChecked={val}/>}
          {index === "start" && <>Done</>}
       </Divider>}
    </Container>
    </>)
}

export default TableRow

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 100%;
    border: 1px solid gray;
    border-width: 0px 1px 1px 1px;
`

const Divider = styled.div`
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 1px solid gray;
`