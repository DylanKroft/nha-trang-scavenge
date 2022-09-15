import React from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
import TableRow from './TableRow'
import { tasks, tasks2, tasks3, tasks4, tasks5, tasks6, tasks7, tasks8, tasks9} from './tasks'

const Table = () => {

  return (
    <Container>
        <Title>I. MEET THE HERD: WHO ON YOUR TEAM…</Title>
        <TableRow index={"start"} final={true} one={"Task"} two={"Name"} three={"Points"} four={"Checkbox"}/>
        {tasks.map((task, index, arr) => {
            if (arr.length - 1 === index) {
                return (
                    <TableRow key={index+1} index={index+1} final={false} one={task[0]} two={task[1]} three={task[2]}/>
                )
            } else {
                return (
                    <TableRow key={index+1} index={index+1} final={true} one={task[0]} two={task[1]} three={task[2]}/>
                )
            }
        })}

        <Title>II. IDENTITY CRISIS</Title>
        <TableRow index={"start"} final={true} one={"Task"} two={"Name"} three={"Points"} four={"Checkbox"}/>
        {tasks2.map((task, index, arr) => {
            if (arr.length - 1 === index) {
                return (
                    <TableRow key={index+100} index={index+100} final={false} one={task[0]} two={task[1]} three={task[2]}/>
                )
            } else {
                return (
                    <TableRow key={index+100} index={index+100} final={true} one={task[0]} two={task[1]} three={task[2]}/>
                )
            }
        })}

        <Title>III. HERD MENTALITY: CHALLENGE YOUR TEAM!</Title>
        <TableRow index={"start"} final={true} one={"Task"} two={"Name"} three={"Points"} four={"Checkbox"}/>
        {tasks3.map((task, index, arr) => {
            if (arr.length - 1 === index) {
                return (
                    <TableRow key={index+200} index={index+200} final={false} one={task[0]} two={task[1]} three={task[2]}/>
                )
            } else {
                return (
                    <TableRow key={index+200} index={index+200} final={true} one={task[0]} two={task[1]} three={task[2]}/>
                )
            }
        })}

        <Title>IV. TORTURE THE ALPACAS</Title>
        <TableRow index={"start"} final={true} one={"Task"} two={"Name"} three={"Points"} four={"Checkbox"}/>
        {tasks4.map((task, index, arr) => {
            if (arr.length - 1 === index) {
                return (
                    <TableRow key={index+200} index={index+300} final={false} one={task[0]} two={task[1]} three={task[2]}/>
                )
            } else {
                return (
                    <TableRow key={index+300} index={index+300} final={true} one={task[0]} two={task[1]} three={task[2]}/>
                )
            }
        })}

        <Title>V. AMBLING THROUGH ADVENTURE LAND</Title>
        <TableRow index={"start"} final={true} one={"Task"} two={"Name"} three={"Points"} four={"Checkbox"}/>
        {tasks5.map((task, index, arr) => {
            if (arr.length - 1 === index) {
                return (
                    <TableRow key={index+400} index={index+400} final={false} one={task[0]} two={task[1]} three={task[2]}/>
                )
            } else {
                return (
                    <TableRow key={index+400} index={index+400} final={true} one={task[0]} two={task[1]} three={task[2]}/>
                )
            }
        })}

        <Title>VI. FLORA & FAUNA: KING’S GARDEN AND WORLD GARDEN</Title>
        <TableRow index={"start"} final={true} one={"Task"} two={"Name"} three={"Points"} four={"Checkbox"}/>
        {tasks6.map((task, index, arr) => {
            if (arr.length - 1 === index) {
                return (
                    <TableRow key={index+500} index={index+500} final={false} one={task[0]} two={task[1]} three={task[2]}/>
                )
            } else {
                return (
                    <TableRow key={index+500} index={index+500} final={true} one={task[0]} two={task[1]} three={task[2]}/>
                )
            }
        })}

        <Title>VII. BOTTOM OF THE PARK: SEA WORLD AND FAIRY LAND</Title>
        <TableRow index={"start"} final={true} one={"Task"} two={"Name"} three={"Points"} four={"Checkbox"}/>
        {tasks7.map((task, index, arr) => {
            if (arr.length - 1 === index) {
                return (
                    <TableRow key={index+600} index={index+600} final={false} one={task[0]} two={task[1]} three={task[2]}/>
                )
            } else {
                return (
                    <TableRow key={index+600} index={index+600} final={true} one={task[0]} two={task[1]} three={task[2]}/>
                )
            }
        })}

        <Title>VIII. IT’S A RENEWED WORLD AFTER ALL</Title>
        <TableRow index={"start"} final={true} one={"Task"} two={"Name"} three={"Points"} four={"Checkbox"}/>
        {tasks8.map((task, index, arr) => {
            if (arr.length - 1 === index) {
                return (
                    <TableRow key={index+700} index={index+700} final={false} one={task[0]} two={task[1]} three={task[2]}/>
                )
            } else {
                return (
                    <TableRow key={index+700} index={index+700} final={true} one={task[0]} two={task[1]} three={task[2]}/>
                )
            }
        })}

        <Title>IX. FINAL FAREWELLS</Title>
        <TableRow index={"start"} final={true} one={"Task"} two={"Name"} three={"Points"} four={"Checkbox"}/>
        {tasks9.map((task, index, arr) => {
            if (arr.length - 1 === index) {
                return (
                    <TableRow key={index+800} index={index+800} final={false} one={task[0]} two={task[1]} three={task[2]}/>
                )
            } else {
                return (
                    <TableRow key={index+800} index={index+800} final={true} one={task[0]} two={task[1]} three={task[2]}/>
                )
            }
        })}
    </Container>
  )
}

export default Table


const Container = styled.div`
    padding: 10px;
`

const Title = styled.div`
    padding-bottom: 10px;
    padding-top: 10px;
    font-weight: 800;
    font-size: 0.9em;
    display: flex;
    align-items: center;
    justify-content: center;
`