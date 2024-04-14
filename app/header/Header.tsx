"use client";
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useGlobalState } from "../context/GLobalContext";
import { VscFeedback } from "react-icons/vsc";
import Model from "../components/Model/model";
import { FaSlack } from "react-icons/fa";

const products: any[] = [
  { icon: ChartPieIcon },
  { icon: CursorArrowRaysIcon },
  { icon: FingerPrintIcon },
  { icon: SquaresPlusIcon },
];

const callsToAction: any[] = [];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [show, setShow] = useState(false);
  const { state, dispatch, setCategoryId } = useGlobalState();
  const [showDropDown, setShowDropDown] = useState(false);

  const handleModel = () => {
    setShow(!show);
  };

  const handleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setShowDropDown(false);
  };

  return (
    <header className="bg-white fixed w-full mb-10 z-50">
      <nav
        className="mx-auto flex items-center justify-between p-2 pt-3 pb-0 lg:px-8 "
        aria-label="Global"
        style={{marginBottom:"-1em"}}
      >
        <div className="flex lg:flex-1">
          <span className="-m-1.5 p-1.5">
            <div className="flex flex-col leading-3">
              <Link href="/" className="link link-hover  text-2xl nothing-you">
                JOB HUNTINGS
              </Link>
              <span className="text-md font-bold italic oswald ms-1">by DEVELOPNATORS</span>
            </div>
          </span>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={handleMobileMenu}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button
              onClick={() => {
                setShowDropDown(true), setShowDropDown(true);
              }}
              className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
            >
              Jobs
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>
            {showDropDown && (
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-4">
                    {state.data.map((item: any) => (
                      <div
                        key={item.id}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                      >
                        <div className="flex-auto">
                          <button
                            onClick={(e) => {
                              setCategoryId(item.id);
                              setShowDropDown(false);
                            }}
                            className="mt-1 text-gray-600"
                            style={{ color: "black" }}
                          >
                            {item?.categoryName}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                    {callsToAction.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                      >
                        <item.icon
                          className="h-5 w-5 flex-none text-gray-400"
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            )}
          </Popover>

          <a
            target="_blank"
            href="https://www.foundit.in/seeker/registration?spl=IN_paid_display_direct_acq_affiliate_Opicle_AffID_SubID_Multiple_All_Apr_24&utm_source=Opicle&utm_medium=affiliate&utm_campaign=IN_paid_display_direct_acq_affiliate_Opicle_AffID_SubID_Multiple_All_Apr_24"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Work from Home
          </a>

          <Link
            href="/"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Off campus Drive
          </Link>
        </Popover.Group>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            target="_blank"
            href="https://developnators.com/trainings"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Internship <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>

      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div
            className="flex items-center justify-between"
            style={{ position: "relative", marginTop: "calc(120px)" }}
          >
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <h1 style={{ color: "green" }}>JOB HUNTING</h1>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Product
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...state.data, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.id}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            onClick={(e) => {
                              setCategoryId(item.id);
                              setMobileMenuOpen(false);
                              setShowDropDown(false);
                            }}
                          >
                            {item.categoryName}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <a
                  target="_blank"
                  href="https://www.foundit.in/seeker/registration?spl=IN_paid_display_direct_acq_affiliate_Opicle_AffID_SubID_Multiple_All_Apr_24&utm_source=Opicle&utm_medium=affiliate&utm_campaign=IN_paid_display_direct_acq_affiliate_Opicle_AffID_SubID_Multiple_All_Apr_24"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  <p style={{ marginBottom: "20px", marginTop: "20px" }}>
                    {" "}
                    Work from Home{" "}
                  </p>
                </a>
                <Link
                  href="/"
                  className="text-sm font-semibold leading-6 text-gray-900"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Off campus Drive
                </Link>
              </div>
              <div className="py-6">
                <a
                  target="_blank"
                  href="https://developnators.com/"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Internship <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>

      {/* Feedback button */}
      <button type="button" onClick={handleModel}>
        <div
          className="tooltip fixed bottom-24 right-8 p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
          data-tip="Feedback"
          style={{ backgroundColor: "none", border: "none" }}
        >
          <VscFeedback />
        </div>
      </button>
      <Model show={show} setShowModel={handleModel} />
    </header>
  );
};

export default Header;
