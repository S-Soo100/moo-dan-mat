import clsx from 'clsx';
import { ButtonStyled } from './styled';

interface ButtonProps {
  btnText: string;
  imgData?: any;
  // 활성화 조건
  active?: any;
  // button style props
  width?: string;
  height?: string;
  padding?: string;
  background?: string;
  border?: boolean;
  // 버튼클릭 event
  onClick?: any;
}

const Button = ({
  btnText,
  imgData,
  active,
  width,
  height,
  padding,
  background,
  border,
  onClick,
}: ButtonProps) => {
  return (
    <ButtonStyled
      type="button"
      className={clsx(active ? 'choice' : '')}
      width={width}
      height={height}
      padding={padding}
      background={background}
      border={border}
      onClick={() => onClick()}
    >
      {imgData && <img src={imgData} alt="btnImage" />}
      <p>{btnText}</p>
    </ButtonStyled>
  );
};

export default Button;
