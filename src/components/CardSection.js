import React, { Component } from 'react'

export class CardSection extends Component {
    render() {
        return (
            <div>
                <div className="fs-1 fw-bold m-3 text-Capitalize"
                    style={{ fontFamily: 'NHaasGroteskDSPro-65Md', marginTop: '3px !important', marginBottom: '0px !important', color: "#4169e1" }}>
                    {this.props.coinName}
                </div>
                <section className="row m-3 mb-0" style={{ marginTop: ' 2px !important', display:'flex', }}>
                    <div className="card text-white text-center  m-3"
                        style={{ width: "11rem", backgroundColor: "rgb(43, 43, 43)", marginTop: "0px !important" }}>
                        <div className="card-body">
                            <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}>Valor de Mercado (24h)</h6>
                            <p className="card-text fw-bold fs-5" style={{ color: "#4169e1" }}>
                                {this.props.mCap24} %
                            </p>
                        </div>
                    </div>
                    <div className="card text-white text-center  m-3"
                        style={{ width: "11rem", backgroundColor: "rgb(43, 43, 43)", marginTop: "0px !important" }}>
                        <div className="card-body">
                            <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}>Maior alta</h6>
                            <p className="card-text fw-bold fs-5" style={{ color: "#4169e1" }}>
                                R${this.props.ath}
                            </p>
                        </div>
                    </div>
                    <div className="card text-white text-center  m-3"
                        style={{ width: "11rem", backgroundColor: "rgb(43, 43, 43)", marginTop: "0px !important" }}>
                        <div className="card-body">
                            <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}>Maior alta</h6>
                            <p className="card-text fw-bold fs-5" style={{ color: "#4169e1" }}>
                                R${this.props.atl}
                            </p>
                        </div>
                    </div>

                    <div className="card text-white text-center  m-3"
                        style={{ width: "11rem", backgroundColor: "rgb(43, 43, 43)", marginTop: "0px !important" }}>
                        <div className="card-body">
                            <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}>Aumento</h6>
                            <p className="card-text fw-bold fs-5" style={{ color: "#4169e1" }}>
                                {this.props.sentiment} %
                            </p>
                        </div>
                    </div>
                    <div className="card text-white text-center  m-3"
                        style={{ width: "11rem", backgroundColor: "rgb(43, 43, 43)", marginTop: "0px !important" }}>
                        <div className="card-body">
                            <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}> Alta 24Hrs </h6>
                            <p className="card-text fw-bold fs-5" style={{ color: "rgb(51, 255, 0) " }}>
                                R${this.props.high24}
                            </p>
                        </div>
                    </div>
                    <div className="card text-white text-center  m-3"
                        style={{ width: "11rem", backgroundColor: "rgb(43, 43, 43)", marginTop: "0px !important" }}>
                        <div className="card-body">
                            <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}> Baixa 24Hrs </h6>
                            <p className="card-text fw-bold fs-5" style={{ color: 'rgb(255, 32, 32)' }}>
                                R${this.props.low24}
                            </p>
                        </div>
                    </div>
                </section>
                <div>
                    <div className="text-white text-center"
                        style={{ fontFamily: 'NHaasGroteskDSPro-65Md', overflow: 'visible', height: '2px', marginTop: "1%" }}> Preço Atual
                    </div>
                    <div style={{
                        fontFamily: 'NHaasGroteskDSPro-65Md', fontSize: '90px',
                        fontWeight: '700', color: "#4169e1", textDecoration: 'none solid rgb(255, 255, 255)',
                        textAlign: 'center'
                    }}>
                        R$ {this.props.currentPrice}
                    </div>
                </div>
            </div>
        )
    }
}

export default CardSection