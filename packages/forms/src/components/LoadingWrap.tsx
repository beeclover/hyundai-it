import { ClassNames } from '@emotion/react'
import { Transition } from '@headlessui/react'
import { Fragment } from 'react'
import tw from 'twin.macro'

interface LoadingWrapProps {
  isOpen: boolean;
  children: React.ReactNode;
}
const LoadingWrap = ({ isOpen, children }: LoadingWrapProps) => {
  return (
    <ClassNames>
      {({ css }) => (
        // @ts-ignore
        <Transition
          show={isOpen}
          as={Fragment}
          enter={css(tw`transition ease-out duration-200`)}
          enterFrom={css(tw`opacity-0`)}
          enterTo={css(tw`opacity-100`)}
          leave={css(tw`transition ease-in duration-150`)}
          leaveFrom={css(tw`opacity-100`)}
          leaveTo={css(tw`opacity-0`)}
        >
          {children}
        </Transition>
      )}
    </ClassNames>
  )
}

export default LoadingWrap