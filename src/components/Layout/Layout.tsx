import { Header } from "../Header/Header";

interface ILayoutProps {
	children?: React.ReactNode[] | React.ReactNode;
}

export const Layout = ({ children }: ILayoutProps) => {
	return (
		<>
			<Header />
			{children}
		</>
	);
};
