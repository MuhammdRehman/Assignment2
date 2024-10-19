import React from 'react'

function Projects() {
    return (
        <div className="row">
            <div className="col-12 col-lg-8 col-xxl-9 d-flex">
                <div className="card flex-fill">
                    <div className="card-header">

                        <h5 className="card-title mb-0">Latest Projects</h5>
                    </div>
                    <table className="table table-hover my-0">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th className="d-none d-xl-table-cell">Start Date</th>
                                <th className="d-none d-xl-table-cell">End Date</th>
                                <th>Status</th>
                                <th className="d-none d-md-table-cell">Assignee</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Project Apollo</td>
                                <td className="d-none d-xl-table-cell">01/01/2023</td>
                                <td className="d-none d-xl-table-cell">31/06/2023</td>
                                <td><span className="badge bg-success">Done</span></td>
                                <td className="d-none d-md-table-cell">Vanessa Tucker</td>
                            </tr>
                            <tr>
                                <td>Project Fireball</td>
                                <td className="d-none d-xl-table-cell">01/01/2023</td>
                                <td className="d-none d-xl-table-cell">31/06/2023</td>
                                <td><span className="badge bg-danger">Cancelled</span></td>
                                <td className="d-none d-md-table-cell">William Harris</td>
                            </tr>
                            <tr>
                                <td>Project Hades</td>
                                <td className="d-none d-xl-table-cell">01/01/2023</td>
                                <td className="d-none d-xl-table-cell">31/06/2023</td>
                                <td><span className="badge bg-success">Done</span></td>
                                <td className="d-none d-md-table-cell">Sharon Lessman</td>
                            </tr>
                            <tr>
                                <td>Project Nitro</td>
                                <td className="d-none d-xl-table-cell">01/01/2023</td>
                                <td className="d-none d-xl-table-cell">31/06/2023</td>
                                <td><span className="badge bg-warning">In progress</span></td>
                                <td className="d-none d-md-table-cell">Vanessa Tucker</td>
                            </tr>
                            <tr>
                                <td>Project Phoenix</td>
                                <td className="d-none d-xl-table-cell">01/01/2023</td>
                                <td className="d-none d-xl-table-cell">31/06/2023</td>
                                <td><span className="badge bg-success">Done</span></td>
                                <td className="d-none d-md-table-cell">William Harris</td>
                            </tr>
                            <tr>
                                <td>Project X</td>
                                <td className="d-none d-xl-table-cell">01/01/2023</td>
                                <td className="d-none d-xl-table-cell">31/06/2023</td>
                                <td><span className="badge bg-success">Done</span></td>
                                <td className="d-none d-md-table-cell">Sharon Lessman</td>
                            </tr>
                            <tr>
                                <td>Project Romeo</td>
                                <td className="d-none d-xl-table-cell">01/01/2023</td>
                                <td className="d-none d-xl-table-cell">31/06/2023</td>
                                <td><span className="badge bg-success">Done</span></td>
                                <td className="d-none d-md-table-cell">Christina Mason</td>
                            </tr>
                            <tr>
                                <td>Project Wombat</td>
                                <td className="d-none d-xl-table-cell">01/01/2023</td>
                                <td className="d-none d-xl-table-cell">31/06/2023</td>
                                <td><span className="badge bg-warning">In progress</span></td>
                                <td className="d-none d-md-table-cell">William Harris</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="col-12 col-lg-4 col-xxl-3 d-flex">
                <div className="card flex-fill w-100">
                    <div className="card-header">

                        <h5 className="card-title mb-0">Monthly Sales</h5>
                    </div>
                    <div className="card-body d-flex w-100">
                        <div className="align-self-center chart chart-lg">
                            <canvas id="chartjs-dashboard-bar"></canvas>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Projects;