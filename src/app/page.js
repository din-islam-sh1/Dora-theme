import Image from 'next/image'
import Link from 'next/link'
import logo from '../../images/logo.png'
import BannerMan from '../../images/hero-person-img.png'

export default function Home() {
  return (
    <>
      {/* Header - section starts */}
      <div className='bg-transparent fixed w-full'>
        <div className='container mx-auto'>
          <div className='flex justify-between py-4'>

            <div className=''>
              <Image src={logo} />
            </div>

            <div className='flex items-center'>
              <ul className='flex gap-7'>
                <li className='text-xl'>
                  <Link href={"#"}>
                    Home
                  </Link>
                </li>

                <li className='text-xl'>
                  <Link href={"#"}>
                    Services
                  </Link>
                </li>

                <li className='text-xl'>
                  <Link href={"#"}>
                    Works
                  </Link>
                </li>

                <li className='text-xl'>
                  <Link href={"#"}>
                    Blog
                  </Link>
                </li>

                <li className='text-xl'>
                  <Link href={"#"}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
      {/* Header - section ends */}

      {/* Banner - setion starts */}
      <div className='bg-[#FDF8F7]'>
        <div className='container mx-auto'>
          <div className='flex justify-between pt-[155px]'>

            <div className='pt-[100px] pb-[45px]'>
              <span className='text-2xl text-[#FD6E0A] font-bold'>Hi I'm</span>
              <h1 className='text-[70px] text-[#15295F] font-bold leading-[1.3]'>Mary Hardy</h1>
              <h3 className='text-[22px] leading-1.3 text-[#15295F] font-semibold'>Digital Marketing Expert</h3>
              <p className='my-5'>
                Shot what able cold new the see hold. Friendly as an betrayed formerly he. Morning because as to society behaved moments
              </p>
            </div>

            <div>
            <Image src={BannerMan} />
            </div>

          </div>
        </div>
      </div>
      {/* Banner - setion ends */}
    </>
  )
}
