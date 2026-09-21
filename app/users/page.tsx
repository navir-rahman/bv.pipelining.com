import { AddUserForm } from '@/components/usercomponent/AddUserForm'; 
import { getUsers } from '@/lib/queries/users';

export default async function Page() {
  const users = await getUsers();

  return (
    <main className="p-8 space-y-8">
      <AddUserForm />
      
      <div>
        <h2 className="text-xl font-bold mb-2">Users List</h2>
        <ul>
          {users.map((u) => (
            <li key={u.id}>{u.name} — {u.email} ({u.role})</li>
          ))}
        </ul>
      </div>
    </main>
  );
}