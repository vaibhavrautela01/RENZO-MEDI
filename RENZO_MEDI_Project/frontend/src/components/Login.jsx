import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './Login.css';
import { Link } from 'react-router-dom';
import Book from '../assets/Book.avif';
import { useForm } from 'react-hook-form';

const UniversityLogin = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.status === 'valid') {
        navigate('/Home');
      }else {
        alert('Invalid username or password');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div id="studentlogin">
      <Header />
      <div className="combine">
        <img src={Book} alt="MCQ" className="w-[60%] pt-[25px]" />
    
        <div className="pt-[250px] pl-[100px]">
        <div className="text-red-500"><h1>&#123;usename:123
        password:123&#125;</h1></div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='font-extrabold'>
              <h1 className='pl-[10px] text-center text-[100px] '>E-Book Login</h1>
              <label>Enter the Username:</label>
              <input type="text" className="input" {...register('username')} required /><br /><br />
              <label>Enter the Password:</label>
              <input type="password" className="input" {...register('password')} required /><br /><br />
              <Link to="/Register" className="notregistered text-blue-500">
                Not Registered?
              </Link><br /><br />
              <button type="submit" style={{ position: 'relative', left: '150px' }} className="sub" disabled={isSubmitting}>
                {isSubmitting ? 'Logging in...' : 'Submit'}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UniversityLogin;
