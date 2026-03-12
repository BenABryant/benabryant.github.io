import PageHeader from './PageHeader'
import PageFooter from './PageFooter'

interface PageLayoutProps {
    children: React.ReactNode
}

export default function PageLayout({ children }: PageLayoutProps) {
    return (
        <div className="page-layout">
            <PageHeader />
            <div className="main">
                {children}
                <PageFooter />
            </div>
        </div>
    )
}