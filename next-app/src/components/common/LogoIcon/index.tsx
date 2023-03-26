import Icons from 'assets/icons'

interface Props {
  src?: string
  diameter?: number
  style?: React.CSSProperties
}

const LogoIcon = ({ src, diameter, style }: Props) => {
  return (
    <img
      alt="채널 로고"
      src={src ?? Icons.Account}
      width={diameter ?? 20}
      height={diameter ?? 20}
      // TODO: 사진 비율 문제로 좌우가 꽉 채워지지 않는 경우 ratio를 읽어서 수동으로 contain / cover 처리 가능할지 알아보기
      style={style ?? { borderRadius: '50%', objectFit: 'contain' }}
    />
  )
}

export default LogoIcon
