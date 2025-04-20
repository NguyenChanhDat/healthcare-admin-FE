import { useState } from 'react';
import { MembershipTierEnum, UserCreateDto } from '../lib/type';

export function CreateUserForm(prop: {
  onClickAction: (userCreated: UserCreateDto) => Promise<void>;
}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [membershipTier, setMembershipTier] = useState(
    MembershipTierEnum.BASIC
  );

  return (
    <div className="create-user-form">
      <h2>Create User</h2>
      <form>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          <input
            type="text"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          Password:
        </label>
        <br />
        <label>
          Membership Tier:
          <select
            value={membershipTier}
            // onChange={(e) => setMembershipTier(e.target.value)}
            onChange={(e) =>
              setMembershipTier(e.target.value as MembershipTierEnum)
            }
          >
            <select name="membershipTier" className='tier-select'>
              <option value="Basic">Basic</option>
              <option value="Advance">Advance</option>
              <option value="High">High</option>
            </select>
          </select>
        </label>
        <br />
        <button
          type="button"
          onClick={() =>
            prop.onClickAction({ username, password, membershipTier })
          }
        >
          Create User
        </button>
      </form>
    </div>
  );
}
