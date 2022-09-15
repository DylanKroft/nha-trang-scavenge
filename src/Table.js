import React from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
import TableRow from './TableRow'
import { tasks } from './tasks'

const Table = () => {

  return (
    <Container>
        <Title>Section 1</Title>
        <TableRow index={"start"} final={true} one={"Task"} two={"Name"} three={"Points"} four={"Checkbox"}/>
        {tasks.map((task, index, arr) => {
            if (arr.length - 1 === index) {
                return (
                    <TableRow key={index} index={index} final={false} one={task[0]} two={task[1]} three={task[2]}/>
                )
            } else {
                return (
                    <TableRow key={index} index={index} final={true} one={task[0]} two={task[1]} three={task[2]}/>
                )
            }
            
        })}
    </Container>
  )
}

export default Table


const Container = styled.div`
    padding: 30px;
`

const Title = styled.div`
    padding-bottom: 15px;
    font-weight: 800;
    font-size: 1.5em;
`