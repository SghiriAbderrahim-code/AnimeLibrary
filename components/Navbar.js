import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import ToggleMode from './ToggleMode'

const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'Search', href: '/search', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-[--second-gray] sticky top-0 w-full z-50">
      <div className="mx-auto max-w-7xl  px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-[--text-color] hover:bg-[--first-gray] hover:text-[--bg-color]  ">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-[--first-gray] text-[--bg-color]' : 'text-[--text-color] hover:bg-[--first-gray] hover:text-[--bg-color]',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <ToggleMode />
            
            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-[--first-gray] text-sm focus:outline-none focus:ring-2 focus:ring-[--bg-color] focus:ring-offset-2 focus:ring-offset-[--first-gray]">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt=""
                    src="userPicture.jpg"
                    className="size-8 rounded-full"
                  />
                </MenuButton>
              </div>
             
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-[--first-gray] text-[--bg-color]' : 'text-[--text-color] hover:bg-[--first-gray] hover:text-[--bg-color]',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
