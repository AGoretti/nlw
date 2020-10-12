import React, { useState, FormEvent } from 'react';


import './styles.css'
import PageHeader from '../../components/PageHeaders';
import TeacherItem, {Teacher} from '../../components/TeacherItem'
import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../Services/api';



function TeacherList() {
    const [subject, setSubject] = useState('')
    const [week_day, setWeekDay] = useState('')
    const [time, setTime] = useState('')

    const [teachers, setTeachers] = useState([])

    async function searchTeachers(e: FormEvent) {
        e.preventDefault()

        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time,
            }
        })

        setTeachers(response.data)
    }

    return(
        <div id="page-teacher-list" className="container">
           <PageHeader title="Estes são os proffys disponiveis" >
            <form id="search-teachers" onSubmit={searchTeachers}>
            <Select 
                   name="subject" 
                   label="Materia"
                   value={subject}
                   onChange={e => { setSubject(e.target.value)}} 
                   options={[
                    {value: 'Artes', label: 'Artes'},
                    {value: 'Biologia', label: 'Biologia'},
                    {value: 'Ciencias', label: 'Ciencias'},
                    {value: 'Educacao Fisica', label: 'Educacao Fisica'},
                    {value: 'Fisica', label: 'Fisica'},
                    {value: 'Geografia', label: 'Geografia'},
                    {value: 'Historia', label: 'Historia'},
                    {value: 'Matematica', label: 'Matematica'},
                    {value: 'Portugues', label: 'Portugues'},
                    {value: 'Quimica', label: 'Quimica'}

                   ]}/>
            <Select 
                   name="week-day" 
                   label="Dia da semana"
                   value={week_day}
                   onChange={e => { setWeekDay(e.target.value)}} 
                   options={[
                    {value: '0', label: 'Domingo'},
                    {value: '1', label: 'Segunda'},
                    {value: '2', label: 'Terça'},
                    {value: '3', label: 'Quarta'},
                    {value: '4', label: 'Quinta'},
                    {value: '5', label: 'Sexta'},
                    {value: '6', label: 'Sabado'},

                   ]}/>       
               
                <Input 
                type='time' 
                name="time" 
                label='Hora' 
                value={time}
                onChange={e => { setTime(e.target.value)}}
                />

                <button type="submit">
                   buscar  
                </button>

            </form>
           </PageHeader> 

           <main>
               {teachers.map((teacher: Teacher) =>{
                   return<TeacherItem key={teacher.id} teacher={teacher} />
               })}
             
           </main>
            
        </div>
    )
}

export default TeacherList;