import React from 'react';
import UserCard from '../components/common/UserCard';
import { UserProps } from '../interfaces';

interface UsersPageProps {
    users: UserProps[];
}

const UsersPage: React.FC<UsersPageProps> = ({ users }) => {
    return (
        <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Users</h1>
            {users.length === 0 ? (
                <p>No users found.</p>
            ) : (
                users.map((user) => (
                    <UserCard
                        key={user.id}
                        id={user.id}
                        name={user.name}
                        email={user.email}
                        address={user.address}
                    />
                ))
            )}
        </div>
    );
};

export async function getStaticProps() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!res.ok) {
            throw new Error('Failed to fetch users');
        }
        const users: UserProps[] = await res.json();

        return {
            props: { users },
            revalidate: 60, // optional ISR
        };
    } catch (error) {
        console.error('Error fetching users:', error);
        return {
            props: { users: [] },
        };
    }
}

export default UsersPage;
