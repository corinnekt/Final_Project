import Table from 'react-bootstrap/Table'

export default function CV(){
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Company</th>
                    <th>Job Title</th>
                    <th>Job Duties</th>
                    <th>Dates Worked</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Bannock Youth Foundation</td>
                    <td>Direct Care Staff</td>
                    <td>Supervise youth with Substance Use Disorder</td>
                    <td> Feb 2025 - Present</td>
                </tr>
                <tr>
                    <td>Idaho State University</td>
                    <td>Project Manager</td>
                    <td>HRSA Grant Electronic Handbook</td>
                    <td> Nov 2023 - Present</td>
                </tr>
                <tr>
                    <td>Cornerstone Whole Healthcare Org.</td>
                    <td>Project Manager</td>
                    <td>Write grant proposals, manage budgets, and research public health legislation</td>
                    <td>Aug 2022 - Sep 2023</td>
                </tr>
                <tr>
                    <td>Gateway to Recovery Detox Center</td>
                    <td>Professional Research Assistant & Patient Navigator</td>
                    <td>Coordinated with public, private and tribal treatment agencies in the state of Alaska to advocate for patient needs and promote timely care</td>
                    <td>Aug 2021 - March 2022</td>
                </tr>
                <tr>
                    <td>Lead King Loop Recreation Management Study</td>
                    <td>Project Manager</td>
                    <td>Develop preliminary research study to inform recreation management of fast growing motorized recreation area</td>
                    <td>Aug 2019 - Oct 2020</td>
                </tr>
                </tbody>
            </Table>
        </div>
    )
}