import './NotFound.css'

export default function NotFound() {
    return (
        <div className="not-found-error">
            <h1>404: Page Not Found!</h1>
            <p>This page either does not exist or is currently unavailable.</p>
            <img src='../assets/images/albion-logo.png' alt="albion online logo" />
        </div>
    );
}
