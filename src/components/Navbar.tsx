import "../assets/css/Navbar.css";
interface NavProps {
  role: string;
  setRole: Function;
  adminView: boolean;
  setAdminView: Function;
}
export default function Navbar(props: NavProps) {
  const { setAdminView, adminView, setRole, role } = props;
  return (
    <>
      <nav className="main_menu">
        <div className="role_input">
          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
        </div>
        <div
          className={"view_toggler" + (adminView ? " vt_clicked" : "")}
          onClick={() => setAdminView(!adminView)}
        >
          <span>Toggle admin view</span>
          <svg width="1em" height="1em" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5Z"
            ></path>
          </svg>
        </div>
      </nav>
    </>
  );
}
