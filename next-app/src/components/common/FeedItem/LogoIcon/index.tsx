interface Props {
  type: string
  src: string
}

const LogoIcon = ({ type, src }: Props) => {
  return (
    <img
      alt="채널 로고"
      src={src}
      width={getDiameterByType(type) ?? 20}
      height={getDiameterByType(type) ?? 20}
      style={{ borderRadius: '12px' }}
    />
  )
}

export default LogoIcon

export const getDiameterByType = (type: string) => {
  if (type.includes('card')) {
    return 20
  }
  if (type.includes('subscription')) {
    return 48
  }
}
