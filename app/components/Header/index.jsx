import { useState } from 'react';

import * as S from './styles';
import Image from 'next/image';
import Logo from '/public/logo.png';
import { TiThMenu } from "react-icons/ti";

export default function Header() {
    const [menuMobileOpen, setMenuMobileOpen] = useState(false);
    
    const handleMobileMenu = () => {
        setMenuMobileOpen((prevState) => !prevState);
    }

    return (
        <>
            <S.Header>
                <Image src={Logo} alt="Logo da empresa" width="200" height="200" />
                <S.Navigation
                    display={menuMobileOpen ? 'block' : 'none'}
                >
                    <S.Menu>
                        <S.MenuItem>Home</S.MenuItem>
                        <S.MenuItem>Sobre</S.MenuItem>
                        <S.MenuItem>Serviços</S.MenuItem>
                        <S.MenuItem>Produtos</S.MenuItem>
                        <S.MenuItem>Blog</S.MenuItem>
                        <S.MenuItem>Contato</S.MenuItem>
                    </S.Menu>
                </S.Navigation>
                <S.ContactButton>Entre em contato</S.ContactButton>
                <S.MenuBurguer onClick={handleMobileMenu}>
                    <TiThMenu
                        size="2em"
                        color='#fad4a0'
                    />
                </S.MenuBurguer>
            </S.Header>
        </>
    )
}