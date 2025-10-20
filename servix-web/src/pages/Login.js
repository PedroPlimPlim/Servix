import React, { useState, useContext } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../services/firebase';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

export default function Login() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const { setUsuario } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !senha) {
      setError('Por favor, preencha todos os campos');
      return;
    }

    try {
      setLoading(true);
      setError('');
      const userCredential = await signInWithEmailAndPassword(auth, email, senha);
      setUsuario(userCredential.user);
      navigate('/dashboard');
    } catch (err) {
      setError('Erro ao fazer login: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async () => {
    if (!username || !email || !senha) {
      setError('Por favor, preencha todos os campos');
      return;
    }

    try {
      setLoading(true);
      setError('');
      const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
      setUsuario(userCredential.user);
      navigate('/dashboard');
    } catch (err) {
      setError('Erro ao criar conta: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      handleLogin();
    } else {
      handleRegister();
    }
  };

  return (
    <div className={`container ${!isLogin ? 'active' : ''}`}>
        <form className="form-box" onSubmit={handleSubmit}>
          <h1>Login</h1>
          {error && (
            <div className="error-message">
              {error}
            </div>
          )}
          <div className="input-box">
            <input 
              type="email"
              placeholder="Email" 
              value={email} 
              onChange={e => setEmail(e.target.value)}
              disabled={loading}
              required
            />
            <i className='bx bxs-envelope'></i>
          </div>
          <div className="input-box">
            <input 
              type="password" 
              placeholder="Password" 
              value={senha} 
              onChange={e => setSenha(e.target.value)}
              disabled={loading}
              required
            />
            <i className='bx bxs-lock-alt'></i>
          </div>
          <div className="forgot-link">
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit" className="btn" disabled={loading}>
            {loading ? 'Entrando...' : 'Login'}
          </button>
          <p>or login with social platforms</p>
          <div className="social-icons">
            <a href="#"><i className='bx bxl-google'></i></a>
            <a href="#"><i className='bx bxl-facebook'></i></a>
            <a href="#"><i className='bx bxl-github'></i></a>
            <a href="#"><i className='bx bxl-linkedin'></i></a>
          </div>
        </form>

        <form className="form-box register" onSubmit={handleSubmit}>
          <h1>Registration</h1>
          {error && (
            <div className="error-message">
              {error}
            </div>
          )}
          <div className="input-box">
            <input 
              type="text"
              placeholder="Username" 
              value={username} 
              onChange={e => setUsername(e.target.value)}
              disabled={loading}
              required
            />
            <i className='bx bxs-user'></i>
          </div>
          <div className="input-box">
            <input 
              type="email"
              placeholder="Email" 
              value={email} 
              onChange={e => setEmail(e.target.value)}
              disabled={loading}
              required
            />
            <i className='bx bxs-envelope'></i>
          </div>
          <div className="input-box">
            <input 
              type="password" 
              placeholder="Password" 
              value={senha} 
              onChange={e => setSenha(e.target.value)}
              disabled={loading}
              required
            />
            <i className='bx bxs-lock-alt'></i>
          </div>
          <button type="submit" className="btn" disabled={loading}>
            {loading ? 'Criando...' : 'Register'}
          </button>
          <p>or register with social platforms</p>
          <div className="social-icons">
            <a href="#"><i className='bx bxl-google'></i></a>
            <a href="#"><i className='bx bxl-facebook'></i></a>
            <a href="#"><i className='bx bxl-github'></i></a>
            <a href="#"><i className='bx bxl-linkedin'></i></a>
          </div>
        </form>

        <div className="toggle-box">
          <div className="toggle-panel toggle-left">
            <h1>Hello, Welcome!</h1>
            <p>Don't have an account?</p>
            <button className="btn" onClick={() => setIsLogin(false)}>Register</button>
          </div>

          <div className="toggle-panel toggle-right">
            <h1>Welcome Back!</h1>
            <p>Already have an account?</p>
            <button className="btn" onClick={() => setIsLogin(true)}>Login</button>
          </div>
        </div>
    </div>
  );
}

