import Link from 'next/link'

export default function Pagination({ numPages, currentPage }) {
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = `/blog/page/${currentPage - 1}`
  const nextPage = `/blog/page/${currentPage + 1}`

  if (numPages === 1) return <></>

  return (
    <div classNam='mt-6'>
      <ul className='flex pl-0 list-none my-2'>
        {!isFirst && (
          <Link href={prevPage}>
            <li className='relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-gray-800 mr-1 hover:bg-gray-200 rounded-l-lg cursor-pointer'>
              Previous
            </li>
          </Link>
        )}

        {Array.from({ length: numPages }, (_, i) =>
          currentPage - 1 !== i ? (
            <Link href={`/blog/page/${i + 1}`}>
              <li className='relative block py-2 px-3 leading-tight bg-white border  border-gray-300 text-gray-800 mr-1 hover:bg-gray-200 cursor-pointer'>
                {i + 1}
              </li>
            </Link>
          ) : (
            <Link href={`/blog/page/${i + 1}`}>
              <li
                className='relative block py-2 px-3 leading-tight bg-gray-200 border-2
               border-gray-500 text-gray-800 mr-1 hover:bg-gray-200 cursor-pointer'
              >
                {i + 1}
              </li>
            </Link>
          )
        )}

        {!isLast && (
          <Link href={nextPage}>
            <li className='relative block py-2 px-3 leading-tight bg-white border rounded-r-lg border-gray-300 text-gray-800 mr-1 hover:bg-gray-200 cursor-pointer'>
              Next
            </li>
          </Link>
        )}
      </ul>
    </div>
  )
}
