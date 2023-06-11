import viteLogo from '/vite.svg'
import ColorSwitcher from '../../components/ColorSwitcher';

const Header = () => {
  return (
    <>
      <div className="flex w-full flex-wrap items-center max-w-full border-b border-gray-200 dark:border-gray-600 flex-row justify-between rounded-xl bg-white/50 backdrop-blur dark:bg-[#0b14374d]">
        <nav className="block w-full max-w-full rounded-none py-4 lg:py-2.5">
          <div className="flex w-full items-center !justify-between mx-auto container px-5 md:px-20">
            <a className="py-2.375 mr-2 whitespace-nowrap lg:ml-0" href="/">
              <img className="w-10" src={viteLogo} alt="logo" />
            </a>
            <ColorSwitcher />
          </div>
        </nav >
      </div>
    </>
  );
};

export default Header;
