import React, { useEffect, useState } from 'react';
import { Layout } from '../../components/Layout/Index';

function Market() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(
                'https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json&limit=200&filters%5Bstate%5D=Uttar%20Pradesh'
            );
            const json = await response.json();
            setData(json.records);
        } catch (error) {
            console.log('Error:', error);
        }
    };

    return (
        <Layout>
            <div className='container-fluid justify-content-center'>
                <div className='container'>
                    <h1 className='text-center'>Current Market Rates Of Uttar Pradesh</h1>
                    <hr />
                    {data.length === 0 ? (
                        <p>Loading data...</p>
                    ) : (
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th scope="col">State</th>
                                    <th scope="col">District</th>
                                    <th scope="col">Market</th>
                                    <th scope="col">Commodity</th>
                                    <th scope="col">Variety</th>
                                    <th scope="col">Grade</th>
                                    <th scope="col">Arrival Date</th>
                                    <th scope="col">Min Price</th>
                                    <th scope="col">Max Price</th>
                                    <th scope="col">Modal Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((record, index) => (
                                    <tr key={index}>
                                        <td>{record.state}</td>
                                        <td>{record.district}</td>
                                        <td>{record.market}</td>
                                        <td>{record.commodity}</td>
                                        <td>{record.variety}</td>
                                        <td>{record.grade}</td>
                                        <td>{record.arrival_date}</td>
                                        <td>{record.min_price}</td>
                                        <td>{record.max_price}</td>
                                        <td>{record.modal_price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </Layout>
    );
}

export default Market;
