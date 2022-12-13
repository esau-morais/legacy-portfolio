import type { MetaFunction } from '@remix-run/node'

import LazyImage from '@/components/atoms/LazyImage'
import List from '@/components/molecules/List'
import { CODING_USES_LIST, HARDWARE_USES_LIST, SOFTWARE_USES_LIST } from '@/utils/lists'

export const meta: MetaFunction = () => ({
  title: 'Uses',
  description:
    "Here's what techn I'm currently using for coding, productivity and more",
})

const Uses = () => {
  return (
    <section>
      <div className="flex flex-col items-center">
        <h1 className="headingOne">Uses</h1>

        <div className="w-full h-[56vh]">
          <LazyImage
            src="/images/uses.jpg"
            alt="Dark right-sided vision of my setup, including keyboard and mouse with purple LED lights"
          />
        </div>
      </div>

      <div>
        <h2 className="mt-8 text-3xl-mb md:text-3xl font-extrabold">Hardware</h2>
        <div className="flex flex-col md:flex-row items-start">
          <List items={HARDWARE_USES_LIST} />
        </div>
      </div>

      <div>
        <h2 className="mt-8 text-3xl-mb md:text-3xl font-extrabold">Coding</h2>
        <div className="flex flex-col items-start">
          <List items={CODING_USES_LIST} />
        </div>
      </div>

      <div>
        <h2 className="mt-8 text-3xl-mb md:text-3xl font-extrabold">Software</h2>
        <div className="flex flex-col md:flex-row items-start">
          <List items={SOFTWARE_USES_LIST} />
        </div>
      </div>
    </section>
  )
}

export default Uses
