
import { Helmet } from 'react-helmet';

function App() {
    return (
        <>
            <Helmet>
                <meta http-equiv="Content-Security-Policy" content="default-src 'self' "/>
                <meta http-equiv="X-Content-Type-Options" content="nosniff"/>
            </Helmet>
            <div>
                <h1>HELLO WORLD</h1>
            </div>
        </>
    )
}

export default App
