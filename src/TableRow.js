import CheckBox from 'rc-checkbox'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components'


const TableRow = ({index, one, two, three, final}) => {

   const [val, setVal] = useState(localStorage.getItem(index) === "true" ? true : false); 

  const update = () => {
    let temp = val;
    setVal(!temp);
    localStorage.setItem(index, !temp);
    console.log(localStorage);
  }

  useEffect(() => {
    if (localStorage.getItem(index) === null) localStorage.setItem(index, "false");
    let temp = localStorage.getItem(index);
    if (temp === "true") setVal(true);
    else setVal(false);
    console.log(localStorage);
  }, [])

  return (<>
    <Container className={[index === "start" ? "start" : "normal", !final ? "final" : "normal", index%2 === 0 ? "even" : "odd"]}>
        <Divider className='largest'>{one}</Divider>
        <Divider>{two}</Divider>
        <Divider>{three}</Divider>
       {<Divider className='noLine'>{index !== "start" && <CheckBox className='checkbox' onClick={update} defaultChecked={val}/>}</Divider>}
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