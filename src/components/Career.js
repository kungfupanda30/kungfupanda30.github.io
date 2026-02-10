import React, { useEffect } from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';
import './Career.css';

const Career = () => {
  const experiences = [
    {
      title: 'Software Engineer',
      company: 'Xylem',
      period: 'May 2023 — Present',
      duration: '1+ years',
      location: 'Bengaluru · Hybrid',
      icon: Briefcase,
      color: '#7c3aed',
      description: 'Owned event-driven Jira data ingestion processing 1M+ records using AWS Lambda, S3, SQS, Redshift and EventBridge. Built dashboards in Apache Superset and automated infra with CloudFormation, SAM, Terraform and Terragrunt.',
      skills: ['AWS', 'Lambda', 'Redshift', 'Terraform', 'Python', 'Apache Superset']
    },
    {
      title: 'Systems Engineer',
      company: 'Tata Consultancy Services',
      period: 'Aug 2021 — Jan 2023',
      duration: '1.5 years',
      location: 'Kolkata',
      icon: Briefcase,
      color: '#06b6d4',
      description: 'Built custom Angular components, performed data modeling, and integrated RESTful APIs ensuring maintainable front-end architecture.',
      skills: ['Angular', 'JavaScript', 'REST APIs', 'Data Modeling', 'TypeScript']
    },
    {
      title: 'Technical Content Writer',
      company: 'GeeksforGeeks (Intern)',
      period: 'Oct 2020 — Apr 2021',
      duration: '6 months',
      location: 'Remote',
      icon: GraduationCap,
      color: '#8b5cf6',
      description: 'Created technical articles and tutorials on data structures, algorithms, and web development.',
      skills: ['Technical Writing', 'DSA', 'Web Dev', 'Documentation']
    },
    {
      title: 'Project Intern',
      company: 'NIT Durgapur',
      period: 'Jan 2020 — Feb 2020',
      duration: '2 months',
      location: 'Durgapur',
      icon: GraduationCap,
      color: '#ec4899',
      description: 'Worked on Flask-based project components.',
      skills: ['Flask', 'Python', 'Web Development']
    },
  ];

  // Parse period strings like "May 2023 — Present" or "Aug 2021 — Jan 2023"
  const monthMap = {
    jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5,
    jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11
  };
  const parseMonthYear = (str) => {
    if (!str || typeof str !== 'string') return null;
    const m = str.match(/([A-Za-z]+)\s*(\d{4})/);
    if (m) {
      const mon = m[1].slice(0,3).toLowerCase();
      const yr = parseInt(m[2], 10);
      const monthIdx = monthMap[mon] ?? 0;
      return new Date(yr, monthIdx, 1);
    }
    const y = str.match(/(\d{4})/);
    if (y) return new Date(parseInt(y[1], 10), 0, 1);
    return null;
  };

  function computeDurationFromPeriod(period) {
    if (!period || typeof period !== 'string') return '';
    const parts = period.split(/[-—–]/).map(p => p.trim());
    if (parts.length < 2) return '';
    const start = parts[0];
    const end = parts[1].toLowerCase();

    const startDate = parseMonthYear(start);
    const endDate = end.includes('present') ? new Date() : parseMonthYear(end);
    if (!startDate || !endDate) return '';

    let months = (endDate.getFullYear() - startDate.getFullYear()) * 12;
    months += endDate.getMonth() - startDate.getMonth();
    if (months < 0) months = 0;

    const years = Math.floor(months / 12);
    const remMonths = months % 12;
    if (years >= 2 && remMonths === 0) return `${years} years`;
    if (years >= 1 && remMonths > 0) return `${years} yr ${remMonths} mo`;
    if (years === 1 && remMonths === 0) return `1 year`;
    if (remMonths > 0) return `${remMonths} months`;
    return '<1 month';
  }

    // return months between dates based on a period string; used to compute total experience
    function monthsFromPeriod(period) {
      if (!period || typeof period !== 'string') return 0;
      const parts = period.split(/[-—–]/).map(p => p.trim());
      if (parts.length < 2) return 0;
      const start = parseMonthYear(parts[0]);
      const end = /present/i.test(parts[1]) ? new Date() : parseMonthYear(parts[1]);
      if (!start || !end) return 0;
      let months = (end.getFullYear() - start.getFullYear()) * 12;
      months += end.getMonth() - start.getMonth();
      if (months < 0) months = 0;
      return Math.max(0, months);
    }

    // compute total months across all experiences and format
    const totalMonths = experiences.reduce((acc, e) => acc + monthsFromPeriod(e.period), 0);
    const totalYears = Math.floor(totalMonths / 12);
    const totalRemMonths = totalMonths % 12;
    const totalExperience = totalYears > 0
      ? (totalRemMonths > 0 ? `${totalYears} yr ${totalRemMonths} mo` : `${totalYears} years`)
      : `${totalRemMonths} months`;

    useEffect(() => {
    const wrappers = document.querySelectorAll('.timeline-card-wrapper');
    if (!wrappers || wrappers.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          } else {
            entry.target.classList.remove('in-view');
          }
        });
      },
      { threshold: 0.15 }
    );

    wrappers.forEach((w) => observer.observe(w));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="career" className="career section">
      <div className="container">
        <h2 className="section__title">Experience & Education</h2>
        <p className="section__subtitle">Timeline of my professional journey</p>
        <p className="total-experience">Total experience: {totalExperience}</p>

        <div className="vertical-timeline">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <div 
                key={index} 
                className="timeline-card-wrapper"
                style={{ '--dot-color': exp.color, '--delay': `${index * 0.12}s` }}
              >
                <div className="timeline-center-dot" aria-hidden="true" />
                <div 
                  className="timeline-card"
                  style={{ '--card-color': exp.color }}
                >

                  <div className="card-content">
                    <div className="card-header">
                      <h3 className="card-title">{exp.title}</h3>
                      <p className="card-company">{exp.company}</p>
                    </div>

                    <div className="card-meta">
                      <div className="meta-row">
                        <span className="meta-label">Period:</span>
                        <span className="meta-value">{exp.period}</span>
                      </div>
                      <div className="meta-row">
                          <span className="meta-label">Duration:</span>
                          <span className="meta-value">
                            {exp.period && /present/i.test(exp.period)
                              ? computeDurationFromPeriod(exp.period)
                              : exp.duration}
                          </span>
                        </div>
                      <div className="meta-row">
                        <span className="meta-label">Location:</span>
                        <span className="meta-value">{exp.location}</span>
                      </div>
                    </div>

                    {exp.description && (
                      <p className="card-description">{exp.description}</p>
                    )}

                    <div className="skills-section">
                      <div className="skills-list">
                        {exp.skills.map((skill, idx) => (
                          <span 
                            key={idx} 
                            className="skill-tag"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Career;
