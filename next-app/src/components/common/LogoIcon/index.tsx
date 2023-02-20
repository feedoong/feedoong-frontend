interface Props {
  src: string
  diameter?: number
  style?: React.CSSProperties
}

const LogoIcon = ({ src, diameter, style }: Props) => {
  return (
    <img
      alt="채널 로고"
      src={src}
      width={diameter ?? 20}
      height={diameter ?? 20}
      style={style ?? { borderRadius: '50%' }}
    />
  )
}

export default LogoIcon
