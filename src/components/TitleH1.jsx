export function TitleH1 ({ starContent, focusContent, endContent, className }) {
  return (
    <div className={`inline-block ${className}`}>
      <h1 className='tracking-tight inline break-normal font-bold antialiased text-center'>
        {starContent}&nbsp;
      </h1>
      <h1 className='tracking-tight bg-gradient-to-bl from-sky-400 to-sky-800 inline break-normal font-bold antialiased text-center bg-clip-text text-transparent'>
        {focusContent}&nbsp;
      </h1>
      <h1 className='tracking-tight inline font-bold antialiased text-center'>
        {endContent}
      </h1>
    </div>
  )
}
