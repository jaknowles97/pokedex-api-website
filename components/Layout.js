import Head from 'next/Head';
import Link from 'next/Link';

function Layout({ title, children}) {
    return (
        <div className="bg-grday-300">
            <Head>
                <title>{title}</title>
            </Head>
            <main className='container mx-auto max-w-xl pt-8 min-h-screen'>
                {children}
            </main>
        </div>
    )
}

export default Layout
