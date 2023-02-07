import { MenuProvider } from "../menuContext";
import { UserProvider } from "../userContext";

interface iProvider{
    children: React.ReactNode;
}

export const Providers = ({ children }: iProvider) => {
    return (
      <UserProvider>
        <MenuProvider>
         {children}
        </MenuProvider>
      </UserProvider>
    );
  };