import './ErrorAlert.css';

export default function ErrorAlert({error}) {
    return (
        error && (
            <div className="error-alert">
                <h2>Error: {error.message}</h2>
            </div>
        )
    );
}
