import React, { useEffect, useState } from 'react';
import TeamMember from '@/components/TeamMember';
import { fetchTeamMembers } from '@/lib/api';
import styles from './Team.module.css';

const TeamPage = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    const getTeamMembers = async () => {
      try {
        const data = await fetchTeamMembers();
        setTeamMembers(data);
      } catch (error) {
        console.error('Error fetching team members:', error);
      }
    };

    getTeamMembers();
  }, []);

  return (
    <div className={styles.teamPage}>
      <h1>Our Team</h1>
      <div className={styles.teamGrid}>
        {teamMembers.map((member) => (
          <TeamMember
            key={member.id}
            name={member.name}
            position={member.position}
            image={member.image}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
