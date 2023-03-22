export default function Header({account}) {
// account logout isLoggout
    return (
        <header>
            <div className="flex px-10 py-6 justify-between bg-gradient-to-r from-blue-400 to-purple-300 text-white">
                <div className="flex items-center">
                    <div className="text-xl font-bold">Dashboard</div>
                </div>
                <div className="flex items-center">
                    <div className="text-lg">Account: {account}</div>
                    <button className="btn ml-8 bg-purple-400">Logout</button>
                </div>
            </div>
        </header>
    )
}