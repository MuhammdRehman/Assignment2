import React from 'react'

function BrowserAnalytics() {
    return (
        <div className="row">
            <div className="col-12 col-md-6 col-xxl-3 d-flex order-2 order-xxl-3">
                <div className="card flex-fill w-100">
                    <div className="card-header">

                        <h5 className="card-title mb-0">Browser Usage</h5>
                    </div>
                    <div className="card-body d-flex">
                        <div className="align-self-center w-100">
                            <div className="py-3">
                                <div className="chart chart-xs">
                                    <canvas id="chartjs-dashboard-pie"></canvas>
                                </div>
                            </div>

                            <table className="table mb-0">
                                <tbody>
                                    <tr>
                                        <td>Chrome</td>
                                        <td className="text-end">4306</td>
                                    </tr>
                                    <tr>
                                        <td>Firefox</td>
                                        <td className="text-end">3801</td>
                                    </tr>
                                    <tr>
                                        <td>IE</td>
                                        <td className="text-end">1689</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-12 col-xxl-6 d-flex order-3 order-xxl-2">
                <div className="card flex-fill w-100">
                    <div className="card-header">

                        <h5 className="card-title mb-0">Real-Time</h5>
                    </div>
                    <div className="card-body px-4">
                       
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-6 col-xxl-3 d-flex order-1 order-xxl-1">
                <div className="card flex-fill">
                    <div className="card-header">

                        <h5 className="card-title mb-0">Calendar</h5>
                    </div>
                    <div className="card-body d-flex">
                        <div className="align-self-center w-100">
                            <div className="chart">
                                <div id="datetimepicker-dashboard"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default BrowserAnalytics;