"use client"
import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { RxCross1 } from 'react-icons/rx'
/**
 * Drawer component that opens on user click.
 * @param heading - string. Shown at the top of the drawer.
 * @param open - boolean state. if true opens the drawer.
 * @param onClose - function should set the open state.
 * @param openFrom - right, left
 * @param children - react children node.
 */

export function Drawer({ heading, open, onClose, openFrom = 'left', children }) {
    const offScreen = {
        right: 'translate-x-full',
        left: '-translate-x-full',
    };
    return (
        <Transition appear show={open} as={Fragment}>
            <Dialog as="div" className="absolute z-50 lg:hidden" onClose={onClose}>
                <Transition.Child

                    enter="ease-out duration-700"
                    enterFrom="opacity-0 left-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-700"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="">
                    <div className="">
                        <div
                            className={`fixed inset-0 flex max-w-full ${openFrom === 'right' ? 'right-0' : ''
                                }`}
                        >
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-700"
                                enterFrom={offScreen[openFrom]}
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-700"
                                leaveFrom="translate-x-0"
                                leaveTo={offScreen[openFrom]}
                            >
                                <Dialog.Panel className={`rounded-r-3xl w-[85vw] max-w-sm text-left align-middle transition-all transform shadow-xl h-[80rem] bg-white `}>
                                    <header
                                        className={`sticky top-0 flex items-center  h-nav bg-white   ${heading ? 'justify-between' : ''
                                            }`}
                                    >
                                        {heading !== null && (
                                            <Dialog.Title>
                                                <span as="span" size="lead" id="cart-contents" className='text-4xl font-BodoniFLF'>
                                                    {heading}
                                                </span>
                                            </Dialog.Title>
                                        )}
                                        <button
                                            type="button"
                                            className="pl-3 mt-4  transition text-primary hover:text-primary/50"
                                            onClick={onClose}
                                            data-test="close-cart"
                                        >
                                            <RxCross1 aria-label="Close panel" className="shrink-0 ml-6 scale-[1.3] mt-1 opacity-83" color="black" />
                                        </button>
                                    </header>
                                    {children}
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}

/* Use for associating arialabelledby with the title*/
Drawer.Title = Dialog.Title;

export const useDrawer = (openDefault = false) => {
    const [isOpen, setIsOpen] = useState(openDefault);

    const openDrawer = () => {
        setIsOpen(true);
    }

    const closeDrawer = () => {
        setIsOpen(false);
    }

    return {
        isOpen,
        openDrawer,
        closeDrawer,
    };
}
