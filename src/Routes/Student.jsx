import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Student = () => {
    // TODO: answer here
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState([]);
    const [studentDisplay, setStudentDisplay] = useState([]);

    const [filter, setFilter] = useState('All');

    const fetchData = async () => {
        try {
            setLoading(true);
            const request = await fetch('http://localhost:3001/student');
            const data = await request.json();

            setStudents(data);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    const handleDelete = async (id) => {
        try {
          await fetch(`http://localhost:3001/student/${id}`, {
            method: 'DELETE',
          });
          fetchData();
        } catch (error) {
          console.log(error);
        }
      };
    
    useEffect(() => {
        fetchData();
      }, []);
    
    useEffect(() => {
        if (filter === 'All') {
          setStudentDisplay(students);
        } else {
          const filteredStudent = students.filter((student) => student.faculty === filter);
          setStudentDisplay(filteredStudent);
        }
      }, [filter, students]);
    
      if (loading) return <p>Loading ...</p>;    

    return (
        <>
           <select onChange={(e) => setFilter(e.target.value)} defaultValue={filter} data-testid="filter">
                <option value='All'>
                All
                </option>
                <option value='Fakultas Ekonomi'>
                Fakultas Ekonomi
                </option>
                <option value='Fakultas Ilmu Sosial dan Politik'>
                Fakultas Ilmu Sosial dan Politik
                </option>
                <option value='Fakultas Teknik'>
                Fakultas Teknik
                </option>
                <option value='Fakultas Teknologi Informasi dan Sains'>
                Fakultas Teknologi Informasi dan Sains
                </option>
            </select>
            <table id='table-student'>
                <thead>
                <th>No</th>
                <th>Full name</th>
                <th>Faculty</th>
                <th>Program Study</th>
                <th>Option</th>
                </thead>
                <tbody>
                {studentDisplay.map((student) => (
                    <tr key={student.id} class="student-data-row">
                    <td>{student.id}</td>
                    <td>
                        <Link to={`/student/${student.id}`}>{student.fullname}</Link>
                    </td>
                    <td>{student.faculty}</td>
                    <td>{student.programStudy}</td>
                    <td>
                        <button data-testid={`delete-${student.id}`} onClick={() => handleDelete(student.id)}>
                        Delete
                        </button>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
};

export default Student;
