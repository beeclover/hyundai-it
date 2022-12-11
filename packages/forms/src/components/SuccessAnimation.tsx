import { ClassNames, keyframes } from '@emotion/react'
import { Transition } from '@headlessui/react';
import { DOMAttributes, Fragment } from 'react';
import tw, { styled } from 'twin.macro';

interface SuccessAnimationProps extends DOMAttributes<SVGElement> {
  isOpen: boolean;
}
const SuccessAnimation = ({ isOpen = false, ...props }: SuccessAnimationProps) => {
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
          <Checkmark viewBox="0 0 52 52" {...props}>
            <Circle cx="26" cy="26" r="25" fill="none" />
            <Check fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
          </Checkmark>
        </Transition>
      )}
    </ClassNames>
  )
}

export default SuccessAnimation

const stroke = keyframes`
  100% {
    stroke-dashoffset: 0;
  }
`

const scale = keyframes`
  0%, 100% {
    transform: none;
  }

  50% {
    transform: scale3d(1.1, 1.1, 1);
  }
`

const fill = keyframes`
  100% {
    box-shadow: inset 0px 0px 0px 30px #4bb71b;
  }
`

const Checkmark = styled.svg`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: block;
  stroke-width: 2;
  stroke: #4bb71b;
  stroke-miterlimit: 10;
  box-shadow: inset 0px 0px 0px #4bb71b;
  animation: ${fill} .4s ease-in-out .4s forwards, ${scale} .3s ease-in-out .9s both;
  position:relative;
`

const Circle = styled.circle`
  stroke-dasharray: 166;
  stroke-dashoffset: 166;
  stroke-width: 2;
  stroke-miterlimit: 10;
  stroke: #4bb71b;
  fill: #fff;
  animation: ${stroke} 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
`

const Check = styled.path`
  transform-origin: 50% 50%;
  stroke-dasharray: 48;
  stroke-dashoffset: 48;
  animation: ${stroke} 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
`
