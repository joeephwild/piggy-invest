import Head from 'next/head'

export default function Meta({ page }) {
    return (
        <Head>
            <meta 
                name="keywords" 
                content="Savings, Web3, Wallet, Vault, Smart Contract" 
            />
            <meta name="description" content="Savings platform" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
            <title>BitVault | {page || ''}</title>
        </Head>
    )
}