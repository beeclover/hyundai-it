import { ClassNames } from '@emotion/react'
import { Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { default as _ReactLoading } from 'react-loading'
import type { LoadingProps } from 'react-loading'
import tw from 'twin.macro'

interface ReactLoadingProps extends LoadingProps {
  isOpen: boolean
}
const ReactLoading = ({ isOpen = false, ...props }: ReactLoadingProps) => {
  return (
    <ClassNames>
      {({ css }) => (
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
          <_ReactLoading {...props} />
        </Transition>
      )}
    </ClassNames>
  )
}

export default ReactLoading