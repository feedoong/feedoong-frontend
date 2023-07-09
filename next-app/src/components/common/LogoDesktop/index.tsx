import React from 'react'

interface Props {
  color?: string
  width?: string
  height?: string
}

const LogoDesktopNoBackground = ({ color, width, height }: Props) => {
  return (
    <svg
      width={width ?? '32'}
      height={height ?? '32'}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.4668 8.17777C7.4668 6.99956 8.42192 6.04443 9.60013 6.04443H22.4001C23.5783 6.04443 24.5335 6.99956 24.5335 8.17777V9.59999C24.5335 10.7782 23.5783 11.7333 22.4001 11.7333H7.4668V8.17777Z"
        fill={color ? `${color}` : 'black'}
      />
      <path
        d="M7.4668 15.2889C7.4668 14.1107 8.42192 13.1555 9.60013 13.1555H18.1335C19.3117 13.1555 20.2668 14.1107 20.2668 15.2889V16.7111C20.2668 17.8893 19.3117 18.8444 18.1335 18.8444H7.4668V15.2889Z"
        fill={color ? `${color}` : 'black'}
      />
      <path
        d="M9.60013 20.2667C8.42192 20.2667 7.4668 21.2218 7.4668 22.4V25.9555H11.0224C12.2006 25.9555 13.1557 25.0004 13.1557 23.8222V22.4C13.1557 21.2218 12.2006 20.2667 11.0224 20.2667H9.60013Z"
        fill={color ? `${color}` : 'black'}
      />
    </svg>
  )
}

export default LogoDesktopNoBackground
