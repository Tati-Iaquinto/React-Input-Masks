import React, {useState} from 'react';
import Input from './Components/Input';
import './index.css';

const maskCPF = (value) =>{
  return value
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1");
}

const maskCNPJ = (value) => {
  return value 
  .replace(/\D/g,"")
  .replace(/^(\d{2})(\d)/,"$1.$2")
  .replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3")
  .replace(/\.(\d{3})(\d)/,".$1/$2")
  .replace(/(\d{4})(\d)/,"$1-$2") 
}

const maskCpfCnpj = (value) => {
  if (value.length <= 14) {
    return value
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1");

  } else {
    return value
    .replace(/\D/g,"")
    .replace(/^(\d{2})(\d)/,"$1.$2")
    .replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3")
    .replace(/\.(\d{3})(\d)/,".$1/$2")
    .replace(/(\d{4})(\d)/,"$1-$2") 
  }
}

const maskRG = (value) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{1})(\d)/, "$1.$1")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{1})\d+?$/, "$1");

}

const maskData = (value) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\d{4})(\d)/, "$1");
}

const maskMobile = (value) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d)/, "$1-$2")
    .replace(/(-\d{4})(\d+?)$/, "$1");
}

const maskTelephone = (value) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{4})(\d)/, "$1-$2")
    .replace(/(-\d{4})(\d+?)$/, "$1");
}

const maskContactNumber = (value) => {
  if (value.length == 14) {
    return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{4})(\d)/, "$1-$2")
    .replace(/(-\d{4})(\d+?)$/, "$1");
  } else {
    return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d)/, "$1-$2")
    .replace(/(-\d{4})(\d+?)$/, "$1");
  }

}

const maskCEP = (value) => {
  return value 
    .replace (/\D/g, "")
    .replace(/^(\d{5})(\d{3})+?$/, "$1-$2");
}

function App() {
  const [cpf, setCpf] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [cpfCnpj, setCpfCnpj] = useState ('');
  const [rg, setRg] = useState('');
  const [data, setData] = useState('');
  const [mobile, setMobile] = useState('');
  const [telephone, setTelephone] = useState('');
  const [contactNumber, setContactNumber] =useState('');
  const [cep, setCep] = useState('');

  return (
    <>
      <form className='form'>
        <Input label="CPF" value={cpf} placeholder='000.000.000-00' onChange={(e) =>setCpf(maskCPF(e.target.value))}/>

        <Input label="CNPJ" value={cnpj} placeholder='00.000.000/0000-00' onChange={(e) => setCnpj(maskCNPJ(e.target.value))}/>

        <Input label="CPF/CNPJ" value={cpfCnpj} onChange={(e) => setCpfCnpj(maskCpfCnpj(e.target.value))}/>

        <Input label="RG" value={rg} placeholder='0.000.000-0' onChange={(e) => setRg(maskRG(e.target.value))}/>

        <Input label="Data" value={data} placeholder='00/00/0000' onChange={(e) => setData(maskData(e.target.value))}/>

        <Input label="Telefone celular" value={mobile} placeholder='(00) 00000-0000' onChange={(e) => setMobile(maskMobile(e.target.value))}/>

        <Input label="Telefone residencial" value={telephone} placeholder='(00) 0000-0000'  onChange={(e) => setTelephone(maskTelephone(e.target.value))}/>

        <Input label="Telefone para contato" value={contactNumber}  onChange={(e) => setContactNumber(maskContactNumber(e.target.value))}/>

        <Input label="CEP" value={cep} placeholder='00000-000' onChange={(e) => setCep(maskCEP(e.target.value))}/>
      </form>
    </>
  );
}

export default App;
