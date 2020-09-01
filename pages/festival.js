import Layout from '../components/Layout.js';

const festival = (props) => (
    <Layout>
        <h1> This is the Festival page.</h1>
        <br />
        <div className="container">
            <p> Data Updated: {props.price.time.updated} </p>
            <p> Price in USD: {props.price.bpi.USD.rate} </p>
            <p> Price in EUR: {props.price.bpi.EUR.rate} </p>
        </div>
    </Layout>
);

festival.getInitialProps = async function() {
    const res = fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    const data = await (await res).json();
    return {
        price: data
    };
}

export default festival;