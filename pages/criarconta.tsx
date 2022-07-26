import Head from 'next/head';
import Grid from '@mui/material/Grid';
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
import Axios from 'axios';
import ST from './styles';

interface State {
    amount: string;
    password: string;
    weight: string;
    weightRange: string;
    showPassword: boolean;
  }
  
function IndexPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const insertUser = () => {
      console.log(name);
      Axios.post("http://localhost:3001/create", {
        name: name,
        email: email, 
        password: password,
      }).then(() => {
      console.log("Sucesso!");
      });
    };

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
            <Head>
            <title>Iknow - Crie sua conta</title>  
            </Head>

        <Grid container style={{ minHeight: '100vh'}}>
            
            <Grid item xs={12} sm={6} style={{ position: 'relative', alignItems: 'center', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center',}}>
                <img src="../imgs/bd-broe.jpg" className='inv' style={{ width: '100%', height: '100vh', objectFit: 'cover'}} alt="brand" />
            </Grid>

            <Grid container item xs={12} sm={6}   style={{ justifyContent: 'center', padding: 16,alignItems:"center", flexDirection:"column",}}>

                <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 400, minWidth: 400, }}>

                <Grid container  style={{ justifyContent: 'center'}}>
                                <img src="../imgs/logo-brandd.svg" width={200} alt="logo" />
                        </Grid>
                    
                        <div style={{height:'7.625rem'}} />
                        <form>
                <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 400, minWidth: 400, }}>
                    
                    <TextField required sx={{['& fieldset']:{borderRadius:3}}} type="text" id="name" label="Nome completo" name="name" variant="outlined" onChange={(event) =>{setName(event.target.value);}} value={name || ''} />
                    <div className='h' />
                    <TextField required sx={{['& fieldset']:{borderRadius:3}}} type="email" id="email" label="E-mail" variant="outlined" name="email" 
                    onChange={(event) =>{setEmail(event.target.value);}} value={email || ''} helperText={message}/>
                    <div className='h' />
                    <FormControl required sx={{ m: 0, width: '100%',['& fieldset']:{borderRadius:3} }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={password}
            onChange={(event) =>{setPassword(event.target.value);}}
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
            label="Senha"
          />
        </FormControl>   
        <p style={{color:'#535353'}}>Ao menos 8 caracteres</p>
                </div>
                  
                          <Button fullWidth variant="contained" type="submit" 
                              className='Button' onClick={insertUser}>Criar conta</Button>
              </form>
                              <p style={{textAlign:'center'}}>Já possui uma conta?<Link className='Link' underline="none" style={{color: '#382B57'}} href="/login" >Acesse aqui</Link> </p>
                         
                        </div>
                </Grid>

        </Grid>
      </div>
  );
};

export default IndexPage
