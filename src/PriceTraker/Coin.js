import React, { useState } from 'react';
import { useEffect } from 'react';
import './PriceTraker.css'
import axios from 'axios'
import { Table, Container, Row, Col } from 'reactstrap';




const Coin = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
            .then(res => setData(res.data))
            .catch(err => console.log('rrrrrrrr'))
    }, [])
    console.log(data);
    return (
        <div className='coin'>
            <Container className='mt-5'>
                <Row>
                    <Col md='12'>
                        <Table dark>
                            <thead>
                                <tr >
                                    <th>
                                        #
                                    </th>
                                    <th>
                                        ID
                                    </th>
                                    <th>
                                        Cripto img
                                    </th>
                                    <th>
                                        Cripto Name
                                    </th>
                                    <th>
                                        Market camp change
                                    </th>
                                    <th>
                                        Price change
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((val, i) => (
                                        <tr>
                                            <th scope="row">
                                                {i + 1}
                                            </th>
                                            <td>
                                                {val.id}
                                            </td>
                                            <td>
                                                <img src={val.image} alt="coin img" className='coinimg' />
                                            </td>
                                            <td>
                                                {val.name}
                                            </td>
                                            {
                                                val.price_change_24h < 0 ? <>
                                                    <td className='red'>
                                                        {val.market_cap_change_percentage_24h.toFixed(2)} %
                                                    </td>
                                                </> : <>
                                                    <td className='green'>
                                                        {val.market_cap_change_percentage_24h.toFixed(2)} %
                                                    </td>
                                                </>
                                            }

                                            {
                                                val.price_change_percentage_24h < 0 ? <>
                                                    <td className='red'>
                                                        {val.price_change_percentage_24h.toFixed(2)} %
                                                    </td>
                                                </> : <>
                                                    <td className='green'>
                                                        {val.price_change_percentage_24h.toFixed(2)} %
                                                    </td>
                                                </>
                                            }


                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Coin;