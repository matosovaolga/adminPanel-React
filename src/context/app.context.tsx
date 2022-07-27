import { createContext, ReactNode, useState } from "react";
import { MenuItem } from "../interfaces/menu.interface";
import { TopLevelCategory } from "../components/Sidebar/Sidebar.props";

export interface IAppContext {
	menu: MenuItem[];
	firstCategory: TopLevelCategory;
	setMenu?: (newMenu: MenuItem[]) => void;
}
export const AppContext = createContext<IAppContext>({ menu: [], firstCategory: TopLevelCategory.Dashboard });

export const AppContextProvider = ({ menu, firstCategory, children }: IAppContext & { children: ReactNode }): JSX.Element => {
	const [menuState, setMenuState] = useState<MenuItem[]>(menu);
	const setMenu = (newMenu: MenuItem[]) => {
		setMenuState(newMenu);
	};

	return (
		<AppContext.Provider value={{ menu: menuState, firstCategory, setMenu }}>
			{children}
		</AppContext.Provider>
	);
};