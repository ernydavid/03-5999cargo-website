export function TitleH1 ({ starContent, focusContent, endContent, className }) {
  return (
    <div className='inline-block md:text-start text-center'>
      <h1 className={`tracking-tight ${className} inline break-normal font-bold antialiased text-center`}>
        {starContent}&nbsp;
      </h1>
      <h1 className={`tracking-tight bg-gradient-to-bl from-sky-400 to-sky-800 ${className} inline break-normal font-bold antialiased text-center bg-clip-text text-transparent`}>
        {focusContent}&nbsp;
      </h1>
      <h1 className={`tracking-tight ${className} inline font-bold antialiased text-center`}>
        {endContent}
      </h1>
    </div>
  )
}
