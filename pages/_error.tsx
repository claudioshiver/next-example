function Error({ statusCode }) {
    return (
        <div className="h-screen justify-center flex flex-col text-center">
            {statusCode &&
                <strong className="mb-3 -mt-48 text-3xl text-primary">{statusCode}</strong>
            }
            <p>
                {statusCode
                    ? 'An error occurred on server'
                    : 'An error occurred on client'}
            </p>
        </div>
    )
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode }
};

export default Error
