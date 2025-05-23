import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-8 h-screen px-10">
      <img loading='lazy' className='max-w-xs xl:max-w-sm xl:mt-20' src='/404.png' />
      <div className='xl:mt-8'>
        <h1 style={{ color: '#000000'}} className="text-2xl xl:text-5xl font-bold xl:mb-6">
        Oops!<br />
        This Page Skipped a Beat
        </h1>
        <p style={{ color: '#000000B3'}} className="mb-8 text-xl xl:text-3xl xl:mb-24">
          Seems like this page took a wrong turn. Let’s<br /> go back to what matters.
        </p>
        <Link
          href="/"
          style={{ color: '#fff', background: '#FF574F'}}
          className="group text-white px-6 py-3 xl:px-8 xl:py-4 text-20 xl:text-2xl rounded-xl font-bold"
        >
          BACK TO HOME
        </Link>
      </div>
    </div>
  )
}