'use client';

import React from 'react';
import Image from 'next/image';
import { HeaderStyled } from './styled';
import powder from '../../../public/images/powder_icon.png';
import { UserOutlined } from '@ant-design/icons';

export default function Header() {
  return (
    <HeaderStyled>
      <header>
        <div className="topbar">
          <h1 className="title">
            Moodanmat
            <Image src={powder} alt="Powder Image" className="mainIcon" />
          </h1>
          <UserOutlined className="loginIcon" />
        </div>
      </header>
    </HeaderStyled>
  );
}
