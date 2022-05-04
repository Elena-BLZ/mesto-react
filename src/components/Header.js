import React from 'react'
import logo from '../images/logo.svg';

export default function Header() {
  return (
    <header classNameName="header page__header">
        <img src={logo} alt="Логотип" className="logo header__logo"></img>
    </header>
  )
}
