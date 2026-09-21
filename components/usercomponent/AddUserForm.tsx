'use client';

import { useActionState } from 'react';
import { handleAddUser } from '@/app/actions';

export function AddUserForm() {
  // state = returned object from action
  // formAction = function attached to <form action={...}>
  // isPending = true while the database request is running
  const [state, formAction, isPending] = useActionState(handleAddUser, null);

  return (
    <>
    {isPending? "pending":
    <form action={formAction} className="p-6 border rounded space-y-4 max-w-md">
      <h2 className="text-xl font-bold">Add User</h2>

      {/* Show message if state exists */}
      {state && (
          <p className={state.success ? 'text-green-600' : 'text-red-600'}>
          {state.message}
        </p>
      )}

      <div>
        <label className="block text-sm">Name</label>
        <input name="name" required className="w-full border p-2 rounded" />
      </div>

      <div>
        <label className="block text-sm">Email</label>
        <input name="email" type="email" required className="w-full border p-2 rounded" />
      </div>

      <div>
        <label className="block text-sm">Role</label>
        <select name="role" className="w-full border p-2 rounded">
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="bg-blue-600 text-white px-4 py-2 rounded disabled:bg-gray-400"
      >
        {isPending ? 'Saving...' : 'Submit'}
      </button>
    </form>
        }
            
    </>
);
}