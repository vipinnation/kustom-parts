import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function NCERTDropdown() {
    return (
        <Menu as="div" className="relative flex-grow inline-block text-left">
            {({ open }) => (
                <>
                    <div>
                        <Menu.Button className="inline-flex flex-grow justify-center w-full  hover:bg-red-200 rounded-full hover-transition  shadow-sm px-4 py-2  text-sm font-medium text-gray-700">
                            Engine Oil
                            <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                        </Menu.Button>
                    </div>

                    <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items
                            static
                            className="origin-top-right bg-gray-200 z-50 flex-grow absolute  mt-2 w-56 rounded-md shadow-lg  ring-1 ring-black ring-opacity-5 focus:outline-none"
                        >
                            <div className="py-1">

                                <Menu.Item>
                                    {({ active }) => (
                                        <a href="/category/castrol engine oil"
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                        >
                                            Castrol
                                        </a>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <a href="/category/motul engine oil"
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                        >
                                            Motul
                                        </a>
                                    )}
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Transition>
                </>
            )}
        </Menu>
    )
}
