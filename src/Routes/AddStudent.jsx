import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AddStudent = () => {

  const navigate = useNavigate();

  const [fullname, setFullname] = useState('');
  const [profilePicture, setProfilePicture] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [gender, setGender] = useState('');
  const [faculty, setFaculty] = useState('');
  const [programStudy, setProgramStudy] = useState('');

  useEffect(() => {
    switch (true) {
      case programStudy === 'Ekonomi' || programStudy === 'Manajemen' || programStudy === 'Akuntansi':
        setFaculty('Fakultas Ekonomi');
        break;
      case programStudy === 'Administrasi Publik' || programStudy === 'Administrasi Bisnis' || programStudy === 'Hubungan Internasional':
        setFaculty('Fakultas Ilmu Sosial dan Ilmu Politik');
        break;
      case programStudy === 'Teknik Sipil' || programStudy === 'Arsitektur':
        setFaculty('Fakultas Teknik');
        break;
      case programStudy === 'Matematika' || programStudy === 'Fisika' || programStudy === 'Informatika':
        setFaculty('Fakultas Teknologi Informasi dan Sains');
        break;
      default:
        setFaculty('');
    }
  }, [programStudy]);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const student = {
        fullname,
        profilePicture,
        address,
        phoneNumber,
        birthDate,
        gender,
        faculty,
        programStudy,
      };

      await fetch('http://localhost:3001/student', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(student),
      });

      setFullname('');
      setProfilePicture('');
      setAddress('');
      setPhoneNumber('');
      setBirthDate('');
      setGender('');
      setFaculty('');
      setProgramStudy('');

      navigate('/student');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='fullname'>Fullname</label>
          <input type='text' id='fullname' name='fullname' value={fullname} onChange={(e) => setFullname(e.target.value)} data-testid='name' />
        </div>
        <div>
          <label htmlFor='profilePicture'>Profile Picture</label>
          <input type='text' id='profilePicture' name='profilePicture' value={profilePicture} onChange={(e) => setProfilePicture(e.target.value)} data-testid='profilePicture' />
        </div>
        <div>
          <label htmlFor='address'>Address</label>
          <input type='text' id='address' name='address' value={address} onChange={(e) => setAddress(e.target.value)} data-testid='address' />
        </div>
        <div>
          <label htmlFor='phoneNumber'>Phone Number</label>
          <input type='text' id='phoneNumber' name='phoneNumber' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} data-testid='phoneNumber' />
        </div>
        <div>
          <label htmlFor='birthDate'>Birth Date</label>
          <input type='text' id='birthDate' name='birthDate' value={birthDate} onChange={(e) => setBirthDate(e.target.value)} data-testid='date' />
        </div>
        <div>
          <label htmlFor='gender'>Gender</label>
          <input type='text' id='gender' name='gender' value={gender} onChange={(e) => setGender(e.target.value)} data-testid='gender' />
        </div>
        <div>
          <label htmlFor='programStudy'>Program Study</label>
          <select id='programStudy' name='programStudy' onChange={(e) => setProgramStudy(e.target.value)} data-testid='prody'>
            <option value='Ekonomi' selected={programStudy === 'Ekonomi'}>
              Ekonomi
            </option>
            <option value='Manajemen' selected={programStudy === 'Manajemen'}>
              Manajemen
            </option>
            <option value='Akuntansi' selected={programStudy === 'Akuntansi'}>
              Akuntansi
            </option>
            <option value='Administrasi Publik' selected={programStudy === 'Administrasi Publik'}>
              Administrasi Publik
            </option>
            <option value='Administrasi Bisnis' selected={programStudy === 'Administrasi Bisnis'}>
              Administrasi Bisnis
            </option>
            <option value='Hubungan Internasional' selected={programStudy === 'Hubungan Internasional'}>
              Hubungan Internasional
            </option>
            <option value='Teknik Sipil' selected={programStudy === 'Teknik Sipil'}>
              Teknik Sipil
            </option>
            <option value='Arsitektur' selected={programStudy === 'Arsitektur'}>
              Arsitektur
            </option>
            <option value='Matematika' selected={programStudy === 'Matematika'}>
              Matematika
            </option>
            <option value='Fisika' selected={programStudy === 'Fisika'}>
              Fisika
            </option>
            <option value='Informatika' selected={programStudy === 'Informatika'}>
              Informatika
            </option>
          </select>
        </div>
        <div>
          <button type='submit' data-testid='add-btn'>
            Add student
          </button>
        </div>
      </form>
    </>
  );
};

export default AddStudent;
