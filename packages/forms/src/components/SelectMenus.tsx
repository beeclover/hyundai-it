// @ts-nocheck
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import tw from 'twin.macro'
import { ClassNames } from '@emotion/react'

const people = [
  { id: 1, name: 'Wade Cooper' },
  { id: 2, name: 'Arlene Mccoy' },
  { id: 3, name: 'Devon Webb' },
  { id: 4, name: 'Tom Cook' },
  { id: 5, name: 'Tanya Fox' },
  { id: 6, name: 'Hellen Schmidt' },
  { id: 7, name: 'Caroline Schultz' },
  { id: 8, name: 'Mason Heaney' },
  { id: 9, name: 'Claudie Smitham' },
  { id: 10, name: 'Emil Schaefer' },
]

export default function Example() {
  const [selected, setSelected] = useState(people[3])

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          {/* <Listbox.Label tw="block text-sm font-medium text-gray-700">Assigned to</Listbox.Label> */}
          <div tw="relative flex-[1_0_0] h-full">
            <Listbox.Button tw="relative w-full h-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
              <span tw="block truncate">{selected.name}</span>
              <span tw="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronDownIcon tw="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <ClassNames>
              {({ css }) => (
                <Transition
                  show={open}
                  as={Fragment}
                  enter={css(tw`transform transition ease-out duration-200`)}
                  enterFrom={css(tw`opacity-0 translate-y-1`)}
                  enterTo={css(tw`opacity-100 translate-y-0`)}
                  leave={css(tw`transform transition ease-in duration-150`)}
                  leaveFrom={css(tw`opacity-100 translate-y-0`)}
                  leaveTo={css(tw`opacity-0 translate-y-1`)}
                >
                  <Listbox.Options tw="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {people.map((person) => (
                      <Listbox.Option
                        key={person.id}
                        tw="text-gray-900 relative cursor-default select-none py-2 pl-8 pr-4 hover:text-white hover:bg-indigo-600"
                        value={person}
                      >
                        {({ selected, active }) => (
                          <>
                            <span css={[selected && tw`font-semibold`, tw`block truncate font-normal`]}>
                              {person.name}
                            </span>

                            {selected ? (
                              <span css={[active ? tw`text-white` : tw`text-indigo-600`, tw`absolute inset-y-0 left-0 flex items-center pl-1.5`]}>
                                <CheckIcon tw="h-5 w-5" aria-hidden="true" />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              )}
            </ClassNames>
          </div>
        </>
      )}
    </Listbox>
  )
}
