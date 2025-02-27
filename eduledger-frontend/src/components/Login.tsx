import { useState } from 'react';
import Cookies from 'js-cookie';
import styles from '../App.module.css';
import { useNavigate } from 'react-router-dom';

function Login({
  walletAddress,
  onRegister,
}: {
  walletAddress: string;
  onRegister: () => void;
}) {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const storedPassword = Cookies.get('password');
    if (storedPassword === password) {
      // Salvando o nome do usuário no cookie
      Cookies.set('userName', 'Yasmine', { expires: 7 }); 
      navigate('/home');
    } else {
      alert('Senha incorreta, tente novamente!');
    }
  };

  return (
    <div className={styles.containerBox}>
      <h3 className={styles.subtitle}>Insira sua senha para login</h3>
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className={styles.input}
      />
      <button onClick={handleLogin} className={styles.btn}>
        Login
      </button>
      <button onClick={onRegister} className={styles.btn}>
        Criar Conta
      </button>
    </div>
  );
}

export default Login;
