function UserMenu({ onLogOut, user }) {
  return (
    <>
      <p>Welcome {user.name}</p>
      <button type="button" onClick={onLogOut}>
        Logout
      </button>
    </>
  );
}

export default UserMenu;
