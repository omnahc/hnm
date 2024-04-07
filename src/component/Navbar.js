import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Navbar = ({authenticate,setAuthenticate}) => {

  const menuLins = ['여성','Divided','남성','신생아/유아','아동','H&M HOME','Sale','지속가능성']

  const navGate = useNavigate()
  const goToLogin = ()=>{
    navGate('/login')
    return authenticate ? setAuthenticate(!authenticate) : null;
  }

  const search = (event)=>{
    if(event.key === 'Enter'){
      let keyword = event.target.value
      navGate(`/?q=${keyword}`)
    }
  }

  return (
    <div>
      <div>
        <div className='login'>
          <FontAwesomeIcon icon={faUser} />
          <button onClick={goToLogin}>{authenticate ? '로그아웃':'로그인'}</button>
        </div>
      </div>

      <div className='logo'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/709px-H%26M-Logo.svg.png'/>
      </div>

      <div className='menu-search'>
        <ul className='menuList'>{
          menuLins.map((item,idx)=>(
            <li key={idx}>{item}</li>
          ))
        }</ul>

        <div className='search'>
          <FontAwesomeIcon icon={faSearch}/>
          <input type='text' onKeyPress={(event)=>search(event)} className='searchBar' placeholder=''/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
