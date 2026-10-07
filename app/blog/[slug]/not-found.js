export default function NotFound() {
    return (
        <div>
            <h1 className="text-2xl">404</h1>
            <p>Blog post was not found</p>

            <div className="mt-4">
                <p>You might have to check some blog posts.</p>
                <ul>
                    <li>First Blog Post</li>
                    <li>Second Blog Post</li>
                </ul>
            </div>
        </div>
    )
}