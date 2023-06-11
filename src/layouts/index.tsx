import { forwardRef, ComponentProps } from "react";
import Header from "./header";
import Footer from "./footer";

interface LayoutProps extends Omit<ComponentProps<"div">, "className"> {

}

const Layout = forwardRef<
  HTMLDivElement,
  LayoutProps
>(({ children, ...rest }, ref) => {

  return (
    <>
      <div ref={ref} className="w-full" {...rest} >
        <Header />
        {/* Navbar & Main Content */}
          {/* Main Content */}
          <main
            className={`flex-none min-h-[calc(100vh-129px)] transition-all container mx-auto`}
          >
            {/* Routes */}
            <div className="w-full">
              {children}
            </div>
          </main>
        <Footer />
      </div>
    </>
  );
});

export default Layout;
