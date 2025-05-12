import { StudioLayout } from "@/modules/studio/ui/layout/studio-layout";
interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <StudioLayout>
            <div>
                
            </div>
            {children}
        </StudioLayout>
    );
}
 
export default Layout;