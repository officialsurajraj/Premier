import "./AuthCard.css";

function AuthCard() {
  return (
    <div className="auth-card">

      <div className="auth-heading">
        <h2>Welcome Back</h2>

        <p>
          Login to your Premier studio account
          and continue your journey.
        </p>
      </div>

      <form className="auth-form">

        <div className="form-group">
          <label htmlFor="email">
            Email Address
          </label>

          <input
            id="email"
            type="email"
            placeholder="studio@example.com"
          />
        </div>


        <div className="form-group">
          <div className="password-label">
            <label htmlFor="password">
              Password
            </label>

            <button type="button">
              Forgot password?
            </button>
          </div>

          <input
            id="password"
            type="password"
            placeholder="Enter your password"
          />
        </div>


        <label className="remember-me">
          <input type="checkbox" />

          <span>Remember me</span>
        </label>


        <button
          type="submit"
          className="login-submit"
        >
          Login
        </button>

      </form>


      <div className="divider">
        <span></span>
        <p>or</p>
        <span></span>
      </div>


      <button className="google-button">
        <span className="google-icon">G</span>
        Continue with Google
      </button>


      <div className="signup-text">
        <span>Don't have an account?</span>

        <button type="button">
          Sign up
        </button>
      </div>

    </div>
  );
}

export default AuthCard;