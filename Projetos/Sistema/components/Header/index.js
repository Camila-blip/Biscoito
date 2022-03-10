import { useContext } from 'react';
import { AuthContent } from '../../contexts/auth';
import avatar from '../../Assets/avatar.png';
import { FiHome, FiUser, FiSettings } from "react-icons/fi";
import { Sidebar, Avatar, Img, LinkHref } from './headerStyle';

export default function Header(){
    const { user } = useContext(AuthContent);

    return(
        <Sidebar>
            <Avatar>
                <Img src={user.avatarUrl === null ? avatar : user.avatarUrl } alt="Foto avatar" />
            </Avatar>
            <LinkHref to="/dashboard">
                <FiHome  size={23} />
                Chamados
            </LinkHref>
            <LinkHref to="/dashboard">
                <FiUser  size={23} />
                Clientes
            </LinkHref>
            <LinkHref to="/dashboard">
                <FiSettings  size={23} />
                Configurações
            </LinkHref>
        </Sidebar>
    )
}
