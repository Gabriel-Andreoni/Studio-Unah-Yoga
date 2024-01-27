import * as S from './styles';
import Image from 'next/image';
import Logo from '/public/logo.png';

export default function Header() {
    return (
        <>
            <S.Header>
                <Image src={Logo} alt="Logo da empresa" width="200" height="200" />
                <S.Navigation>
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
            </S.Header>
        </>
    )
}