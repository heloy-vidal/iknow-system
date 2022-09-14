import Head from 'next/head'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import React, {useState} from "react";
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormLabel from '@mui/material/FormLabel';
import ST from './styles';

interface State {
    amount: string;
    password: string;
    weight: string;
    weightRange: string;
    showPassword: boolean;
  }

function IndexPage() {    

const [page, setPage] = useState(0);
const [step, setStep] = useState(0);

const [values, setValues] = React.useState<State>({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g

  const handleOnChange = (e: any) => {
    setEmail(e.target.value);
    if (e.target.value.match(regEx)) {
      setMessage("");
      return
    } else {
      setMessage("Email não é valido");
    }
  };

  return (

      <div>
            <ST/>

        <Grid container style={{ minHeight: '100vh'}}>
            
            <Grid item xs={12} sm={6} style={{ position: 'relative', alignItems: 'center', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center',}}>
                <img src="../imgs/bd-broe.jpg" style={{ width: '100%', height: '100vh', objectFit: 'cover'}} alt="brand" />
            </Grid>

            <Grid item xs={12} sm={6} style={{ alignItems: 'center', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center',}}>

                <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 400, minWidth: 400, }}>
                <Grid container justify="center" style={{ justifyContent: 'center'}}>
                                <img src="../imgs/logo-brandd.svg" width={200} alt="logo" />
                </Grid>
                    
                        <div style={{height:40}} />
                    <form>
                    <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 400, minWidth: 400, }}>
                    <div style={{height:40}} />
                    <TextField sx={{['& fieldset']:{borderRadius:3}}} type="email" id="email" label="E-mail" variant="outlined" name="email" 
                    value={email} error={message} helperText={message} onChange={handleOnChange} />
                    <div style={{height:40}} />
                    <div>               
      <div>
        <FormControl sx={{ m: 0, width: '45ch',['& fieldset']:{borderRadius:3} }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
      </div>
      </div>   
                </div>
                    </form>
                    <div style={{height:20}} />
                    <p>
                      Esqueceu a senha?<Link className='Link' href="/redefinirsenha" underline="none"> Acesse aqui</Link>
                    </p>
                    
                    <div style={{height:40}} />
                        <Button variant="contained" type="submit"
                        className='Button'>Entrar</Button>
                          <div style={{height:20}} />

                                                        
                          <p style={{textAlign:'center'}}>Não possui uma conta? <Link className='Link' underline="none" style={{color: '#382B57'}} href="/" >Acesse aqui</Link> </p>

                    </div>
            </Grid>

        </Grid>
      </div>
  );
};

export default IndexPage
