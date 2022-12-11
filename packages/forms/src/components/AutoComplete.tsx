// @ts-nocheck
import { ClassNames } from "@emotion/react";
import { Transition } from "@headlessui/react";
import Downshift from "downshift";
import { Fragment } from "react";
import tw from "twin.macro";
import { ChevronDownIcon } from '@heroicons/react/20/solid'

interface SearchBarProps {
  onChange?: (value: string) => void;
  items: string[];
  initialInputValue?: string;
}
const SearchBar = ({ onChange, items, initialInputValue }: SearchBarProps) => {
  return (
    <Downshift
      onChange={onChange}
      itemToString={item => (item ? item : "")}
      initialInputValue={initialInputValue}

    >
      {({
        getInputProps,
        getItemProps,
        getLabelProps,
        getMenuProps,
        getToggleButtonProps,
        isOpen,
        inputValue,
        highlightedIndex,
        selectedItem
      }) => (
        <div>
          <div tw="m-auto relative h-full">
            {/* <label
              {...getLabelProps()}
              tw="font-bold text-xs text-gray-700 block"
            >
              Enter a state {selectedItem}
            </label> */}
            <input
              tw="relative w-full h-full cursor-default border border-[#6b7280] bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
              {...getInputProps()}
            />
            <button
              tw="absolute top-1/2 -translate-y-1/2 right-2"
              {...getToggleButtonProps()}
            >
              <ChevronDownIcon tw="h-5 w-5 text-gray-400" aria-hidden="true" />
            </button>

            <div
              {...getMenuProps()}
            >
              <ClassNames>
                {({ css }) => (
                  <Transition
                    show={isOpen}
                    as={Fragment}
                    enter={css(tw`transform transition ease-out duration-200`)}
                    enterFrom={css(tw`opacity-0 translate-y-1`)}
                    enterTo={css(tw`opacity-100 translate-y-0`)}
                    leave={css(tw`transform transition ease-in duration-150`)}
                    leaveFrom={css(tw`opacity-100 translate-y-0`)}
                    leaveTo={css(tw`opacity-0 translate-y-1`)}
                  >
                    <ul tw="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {items
                        .filter(
                          item =>
                            !inputValue ||
                            item.toLowerCase().includes(inputValue.toLowerCase())
                        )
                        .map((item, index) => (
                          <li
                            css={[
                              tw`relative cursor-default select-none py-2 pl-8 pr-4`,
                              highlightedIndex === index && tw`bg-red-500`
                            ]}
                            {...getItemProps({
                              key: item,
                              index,
                              item,
                            })}
                          >
                            {item}
                          </li>
                        ))}
                    </ul>
                  </Transition>
                )}
              </ClassNames>
            </div>
          </div>
        </div>
      )}
    </Downshift>
  );
}

export default SearchBar