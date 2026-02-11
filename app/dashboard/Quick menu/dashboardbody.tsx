import React from 'react';
import { Briefcase, List, Users, Target } from 'react-feather';

interface StatCardProps {
  title: string;
  value: string;
  subText: string;
  icon: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, subText, icon }) => (
  <div className="card border-0 shadow-sm p-4 h-100">
    <div className="d-flex justify-content-between">
      <div>
        <p className="text-muted small fw-bold mb-1 text-uppercase">{title}</p>
        <h2 className="fw-bold mb-1">{value}</h2>
        <span className="text-muted small">{subText}</span>
      </div>
      <div className="p-3 rounded-3" style={{ backgroundColor: '#e7e2ff', height: 'fit-content' }}>
        {icon}
      </div>
    </div>
  </div>
);

const DashboardBody: React.FC = () => {
  return (
    <div className="w-100">
      {/* Header Banner */}
      <div className="p-5" style={{ backgroundColor: '#624bff', minHeight: '220px' }}>
        <div className="d-flex justify-content-between align-items-start">
          <h2 className="text-white fw-bold">Projects</h2>
          <button className="btn btn-light fw-bold text-primary px-4 py-2">Create New Project</button>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="container-fluid px-5" style={{ marginTop: '-80px' }}>
        <div className="row g-4">
          <div className="col-12 col-md-6 col-lg-3">
            <StatCard title="Projects" value="18" subText="2 Completed" icon={<Briefcase color="#624bff" />} />
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <StatCard title="Active Task" value="132" subText="28 Completed" icon={<List color="#624bff" />} />
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <StatCard title="Teams" value="12" subText="1 Completed" icon={<Users color="#624bff" />} />
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <StatCard title="Productivity" value="76%" subText="5% Completed" icon={<Target color="#624bff" />} />
          </div>
        </div>

        {/* Active Projects Table Placeholder */}
        <div className="row mt-4 mb-5">
          <div className="col-12">
            <div className="card border-0 shadow-sm overflow-hidden">
              <div className="card-header bg-white py-3">
                <h5 className="mb-0 fw-bold">Active Projects</h5>
              </div>
              <div className="table-responsive">
                <table className="table align-middle mb-0">
                  <thead className="bg-light text-muted small text-uppercase">
                    <tr>
                      <th className="ps-4">Project Name</th>
                      <th>Hours</th>
                      <th>Priority</th>
                      <th>Members</th>
                      <th>Progress</th>
                    </tr>
                  </thead>
                  <tbody style={{ borderTop: 'none' }}>
                    <tr>
                      <td className="ps-4 py-3 fw-semibold">Dropbox Design System</td>
                      <td>34</td>
                      <td><span className="badge bg-warning-soft text-warning px-2">Medium</span></td>
                      <td>[Icons]</td>
                      <td>15%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardBody;