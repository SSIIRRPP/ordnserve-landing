import { useContext, useState } from "react";
import Sidebar from "react-sidebar";
import GeneralContext from "../../contexts/GeneralContext";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import SideBar from "./Sidebar/Sidebar";

const Layout = ({ children }) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const { mainRef, scrollRef } = useContext(GeneralContext);

  return (
    <>
      <div className="layout" ref={mainRef}>
        <Header setOpenSidebar={setOpenSidebar} />
        <div style={{ position: "relative", height: "auto" }}>
          <Sidebar
            open={openSidebar}
            onSetOpen={setOpenSidebar}
            styles={{
              overlay: {
                position: "absolute",
              },
              content: {
                width: "100%",
                overflow: "hidden",
              },
            }}
            sidebar={<SideBar />}
          >
            <div
              ref={scrollRef}
              style={{
                height: "100%",
                overflowY: "auto",
                overflowX: "hidden",
                /* overflowX: "hidden", */
              }}
            >
              {children}
              <Footer />
            </div>
          </Sidebar>
        </div>
      </div>
    </>
  );
};

export default Layout;
