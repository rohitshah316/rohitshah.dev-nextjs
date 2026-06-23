
const Button = ({text,className="",href,download,target}) => {
  return (
    <a className={`flex justify-center ring-2  items-center px-3 py-2 rounded-3xl cursor-pointer ${className}`} href={href} download={download} target={target}>{text}</a>
  )
}

export default Button