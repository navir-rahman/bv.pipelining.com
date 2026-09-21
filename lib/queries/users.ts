import { sql } from '@/lib/db';

// 1. Role Enum Definition
export type UserRole = 'admin' | 'user' | 'moderator';

// 2. User TypeScript Interface
export type User = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  is_active: boolean;
  last_login: Date | null;
  created_at: Date;
  updated_at: Date;
};

// Data required to create a new user
export type CreateUserInput = {
  name: string;
  email: string;
  role?: UserRole; // Default: 'user'
  is_active?: boolean; // Default: true
};

/**
 * 3. Initialize Table Query
 * Runs SQL DDL to create the table and custom ENUM type if they don't exist.
 */
export async function createUsersTable() {
  // Create role type if not exists
  await sql`
    DO $$ BEGIN
      CREATE TYPE user_role AS ENUM ('admin', 'user', 'moderator');
    EXCEPTION
      WHEN duplicate_object THEN null;
    END $$;
  `;

  // Create users table
  await sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL UNIQUE,
      role user_role NOT NULL DEFAULT 'user',
      is_active BOOLEAN NOT NULL DEFAULT true,
      last_login TIMESTAMP WITH TIME ZONE,
      created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
    )
  `;


}

/**
 * 4. Add New User Query
 */
export async function createUser(data: CreateUserInput): Promise<User> {
  const role = data.role ?? 'user';
  const isActive = data.is_active ?? true;

  const [newUser] = await sql<User[]>`
    INSERT INTO users (name, email, role, is_active)
    VALUES (${data.name}, ${data.email}, ${role}, ${isActive})
    RETURNING *
  `;

  return newUser;
}

/**
 * 5. Fetch All Users
 */
export async function getUsers(): Promise<User[]> {
  return await sql<User[]>`
    SELECT id, name, email, role, is_active, last_login, created_at, updated_at
    FROM users
    ORDER BY created_at DESC
  `;
}

/**
 * 6. Update User Online/Active Status or Last Login
 */
export async function touchLastLogin(userId: string) {
  await sql`
    UPDATE users
    SET last_login = CURRENT_TIMESTAMP, updated_at = CURRENT_TIMESTAMP
    WHERE id = ${userId}
  `;
}