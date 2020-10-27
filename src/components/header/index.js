import React from 'react';
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import logo from '~/assets/logo-purple.svg';
import Notifications from '~/components/Notification';
import { Container, Content, Profile } from './styles';

export default function Header() {
  const profile = useSelector((state) => state.user.profile);
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">Meu Perfil</Link>
            </div>
            <img
              src={
                profile.avatar.url ||
                'https://i.pinimg.com/originals/e3/9c/cc/e39ccc946f7d7b929fef42bb82940468.png'
              }
              alt="Matheus Antonio"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
