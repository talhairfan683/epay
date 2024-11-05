
import { Header } from "./Header";
import Sidebar from "./Coin";

const Layout = ({ children }) => {
    return (
      <div className="font-sans antialiased flex w-full h-screen">
       
        <Sidebar />
        <div className="flex-1 p-6 ml-64">
          <Header/>
          {children}
        </div>
      </div>
    );
  };
  
  export default Layout;
  