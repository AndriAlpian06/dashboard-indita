import React from 'react'

const Footer = () => {
  return (
    <>
        <div className="text-blue-gray-600">
            <footer className="py-2">
                <div className="flex w-full flex-wrap items-center justify-center gap-6 px-2 md:justify-between">
                <p className="block antialiased font-sans text-sm leading-normal font-bold text-inherit">
                    Copyright ©{" "}
                    {" "}
                    by{" "}
                    <a
                    href="https://www.creative-tim.com"
                    target="_blank"
                    className="transition-colors hover:text-blue-500"
                    >
                    PT ANGIN RIBUT
                    </a>
                </p>
                </div>
            </footer>
        </div>
    </>
  )
}

export default Footer