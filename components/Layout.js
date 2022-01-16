import Head from 'next/Head';
import Link from 'next/Link';

function Layout({ title, children}) {
    return (
        <div className="bg-grday-300">
            <Head>
                <title>{title}</title>
            </Head>
            <main className='p-6 py-4'>
                {children}
            </main>
        </div>
    )
}

export default Layout
