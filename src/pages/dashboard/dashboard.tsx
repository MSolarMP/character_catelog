import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
    const navigate = useNavigate(); // Initialize navigate function from useNavigate hook

    return (
        <div>
            <h2>dashboard</h2>
        </div>
    );
};

export default Dashboard;