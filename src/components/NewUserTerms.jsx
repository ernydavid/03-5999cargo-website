export function NewUserTerms () {
  const websiteInfo = {
    url: 'www.5999cargo.com',
    company: '5999Cargo©',
    support: 'www.5999cargo.com/support'
  }
  return (
    <div className='w-full p-6 rounded-lg bg-background-800 h-[300px] overflow-auto object-top flex flex-col justify-start items-center gap-4 text-xs sm:text-small'>
      <header className='flex flex-col justify-center items-center gap-3'>
        <h1 className='text-lg text-center font-medium'>Terms and Conditions for User Registration</h1>
        <strong>{`Welcome to ${websiteInfo.url}`}</strong>
      </header>
      <main className='flex flex-col gap-5'>
        <p>
          These terms and conditions ("Terms") govern your use of our website and services. By registering as a user on our website, you agree to abide by these Terms and any additional terms and policies referenced herein.
        </p>
        <ul className='list-decimal px-4 flex flex-col gap-3'>
          <li>
            <p className='font-semibold'>Acceptance of Terms</p>
            <ul className='list-inside list-decimal flex flex-col gap-3'>
              <li>
                By registering as a user on our website, you agree to comply with these Terms and any additional terms and conditions that may apply to specific services offered on the website.
              </li>
              <li>
                If you do not agree to these Terms, please do not register as a user on our website.
              </li>
            </ul>
          </li>
          <li>
            <p className='font-semibold'>User Registration</p>
            <ul className='list-inside list-decimal flex flex-col gap-3'>
              <li>
                You must be at least (18) years old to register as a user on this website.
              </li>
              <li>
                When registering, you agree to provide accurate, complete, and current information about yourself as prompted by the registration form.
              </li>
              <li>
                You are responsible for maintaining the confidentiality of your account information and password.
              </li>
            </ul>
          </li>
          <li>
            <p className='font-semibold'>User Responsibilities</p>
            <ul className='list-inside list-decimal flex flex-col gap-3'>
              <li>
                You agree to use the website and services for lawful purposes only and in compliance with all applicable laws and regulations.
              </li>
              <li>
                You shall not engage in any activities that may harm the website, its users, or interfere with the proper functioning of the website.
              </li>
              <li>
                You are solely responsible for any content you post, upload, or share on the website, and you must have the necessary rights and permissions to do so.
              </li>
            </ul>
          </li>
          <li>
            <p className='font-semibold'>Intellectual Property Rights</p>
            <ul className='list-inside list-decimal flex flex-col gap-3'>
              <li>
                All content, trademarks, logos, and intellectual property on this website are the property of [Your Company] or its licensors. You may not use, copy, reproduce, or distribute any content without obtaining proper authorization.
              </li>
            </ul>
          </li>
          <li>
            <p className='font-semibold'>Privacy Policy</p>
            <ul className='list-inside list-decimal flex flex-col gap-3'>
              <li>
                Our Privacy Policy explains how we collect, use, and protect your personal information. By registering on this website, you agree to the terms of our Privacy Policy.
              </li>
            </ul>
          </li>
          <li>
            <p className='font-semibold'>Termination</p>
            <ul className='list-inside list-decimal flex flex-col gap-3'>
              <li>
                We reserve the right to terminate or suspend your account at any time for violations of these Terms or any other applicable policies.
              </li>
            </ul>
          </li>
          <li>
            <p className='font-semibold'>Changes to Terms</p>
            <ul className='list-inside list-decimal flex flex-col gap-3'>
              <li>
                We may modify these Terms at any time. It is your responsibility to review these Terms periodically for updates.
              </li>
            </ul>
          </li>
          <li>
            <p className='font-semibold'>Governing Law</p>
            <ul className='list-inside list-decimal flex flex-col gap-3'>
              <li>
                These Terms shall be governed by and construed in accordance with the laws of diferents countries when our service is active.
              </li>
            </ul>
          </li>
          <li>
            <p className='font-semibold'>Contact Information</p>
            <ul className='list-inside list-decimal flex flex-col gap-3'>
              <li>
                {`If you have any questions or concerns about these Terms, please contact us at ${websiteInfo.support}`}
              </li>
            </ul>
          </li>
        </ul>
      </main>
    </div>
  )
}
