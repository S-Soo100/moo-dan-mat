'use client';

import React from 'react';
import Image from 'next/image';
import { HomeStyled } from './styled';
import powder from '../../public/images/powder_icon.png';
import main from '../../public/images/main.jpg';
import { UserOutlined } from '@ant-design/icons';
import Button from '@/components/Button/page';
import shake from '../../public/images/shake.png';
import weights from '../../public/images/weights.png';
import dumbbell from '../../public/images/dumbbell.png';
import abs from '../../public/images/abs.png';
import arm from '../../public/images/arm.png';
import heart from '../../public/images/heart.png';
import ReviewPost from '@/components/ReviewPost/page';

const powderFilterData = [
  { label: '전체', value: 'all', img: shake },
  { label: '국내 제품', value: 'domestic', img: weights },
  { label: '해외 제품', value: 'overseas', img: dumbbell },
  { label: '댓글 순', value: 'comment', img: abs },
  { label: '좋아요 순', value: 'good', img: arm },
  { label: '내맘대로 찾기', value: 'find', img: heart },
];

export default function Home() {
  return (
    <HomeStyled>
      <main>
        <div className="imgBox">
          <Image src={main} alt="Main Image" className="mainImg" />
        </div>
        <div className="powderFilterBox">
          <div className="powderFilters">
            {powderFilterData.map((filter, index) => (
              <Button
                width="31%"
                key={`filter_${index}`}
                imgData={filter.img.src}
                btnText={filter.label}
                background="#f5f5f5"
              />
            ))}
          </div>
        </div>
        <div className="reviewTitleBox">
          <p className="reviewTitle">지금 뜨는 후기🔥</p>
          <ReviewPost />
        </div>
      </main>
    </HomeStyled>
  );
}
