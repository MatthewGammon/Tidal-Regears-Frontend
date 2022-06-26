import './ErrorAlert.css';

export default function ErrorAlert({error}) {
    return (
        error && (
            <div className="error-alert alert alert-danger text-center">
                <h2>Error: {error.message}</h2>
            </div>
        )
    );
}
